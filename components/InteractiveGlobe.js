'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { geoOrthographic, geoPath, geoGraticule, geoDistance } from 'd3-geo';
import * as topojson from 'topojson-client';
import land110m from 'world-atlas/land-110m.json';
import { CheckCircle2, X, Globe, Bot, Search, TrendingUp, Video, Monitor, Sparkles, GraduationCap } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'AI-Powered Marketing',
    slug: '/ai-powered-marketing',
    icon: Bot,
    eyebrow: 'Campaigns, automation, and vibe marketing.',
    headline: "Always-on campaigns, funnels automated end to end, constant tuning of what's already working.",
    ctaText: 'Explore AI-Powered Marketing →',
    deliverables: [
      'AI-powered campaign strategy and execution',
      'Marketing automation across the full funnel',
      'Vibe marketing that captures attention and intent',
      'Automated funnel testing and optimization'
    ],
    lat: 40,
    lon: -100,
    continent: 'North America'
  },
  {
    id: 2,
    title: 'SEO, AEO & GEO',
    slug: '/seo-aeo-geo',
    icon: Search,
    eyebrow: 'Search, answer engine, and geo optimization.',
    headline: 'Building for traditional search, answer engines like ChatGPT and Perplexity, and local searches that turn into real demand.',
    ctaText: 'Explore SEO, AEO & GEO →',
    deliverables: [
      'Technical and content SEO that ranks',
      'Answer Engine Optimization (AEO) for AI search',
      'Generative Engine Optimization (GEO) for AI citations',
      'Local and geo-targeted visibility'
    ],
    lat: -15,
    lon: -60,
    continent: 'South America'
  },
  {
    id: 3,
    title: 'Performance & Lead Generation',
    slug: '/performance-lead-generation',
    icon: TrendingUp,
    eyebrow: 'Performance marketing and pipeline growth.',
    headline: 'Every dollar earns its seat.',
    ctaText: 'Explore Performance & Lead Generation →',
    deliverables: [
      'Paid search and paid social campaigns',
      'Conversion rate optimization (CRO)',
      'Lead generation systems built for pipeline',
      'Full-funnel tracking and reporting'
    ],
    lat: 50,
    lon: 15,
    continent: 'Europe'
  },
  {
    id: 4,
    title: 'Content, Video & Thought Leadership',
    slug: '/content-video-thought-leadership',
    icon: Video,
    eyebrow: 'Content, video, and authority building.',
    headline: "People trust you before the call, or they don't get on the call.",
    ctaText: 'Explore Content, Video & Thought Leadership →',
    deliverables: [
      'Content marketing and editorial strategy',
      'Video production and motion design',
      'Founder-led thought leadership',
      'Content built to rank and convert'
    ],
    lat: 5,
    lon: 20,
    continent: 'Africa'
  },
  {
    id: 5,
    title: 'Web & Ecommerce Experience',
    slug: '/web-ecommerce-experience',
    icon: Monitor,
    eyebrow: 'Web design, UX, and ecommerce.',
    headline: 'Your site is your hardest-working salesperson.',
    ctaText: 'Explore Web & Ecommerce Experience →',
    deliverables: [
      'Conversion-focused web design',
      'UX strategy and optimization',
      'Ecommerce builds and experiences',
      'Sites engineered for speed and scale'
    ],
    lat: 35,
    lon: 100,
    continent: 'Asia'
  },
  {
    id: 6,
    title: 'Branding',
    slug: '/branding',
    icon: Sparkles,
    eyebrow: 'Brand identity and positioning.',
    headline: 'Get the brand right and everything downstream gets easier.',
    ctaText: 'Explore Branding →',
    deliverables: [
      'Brand strategy and positioning',
      'Visual identity and design systems',
      'Messaging and voice',
      'Rebrands and brand refreshes'
    ],
    lat: -25,
    lon: 135,
    continent: 'Australia'
  },
  {
    id: 7,
    title: 'AI Enablement & Training',
    slug: '/ai-enablement-training',
    icon: GraduationCap,
    eyebrow: 'Practical AI skills for real teams.',
    headline: 'Buying the tools is the easy part; adoption is the gap.',
    ctaText: 'Explore AI Enablement & Training →',
    deliverables: [
      'AI workflow audits and readiness assessments',
      'Hands-on training for marketing, sales, and ops teams',
      'Custom playbooks for AI-assisted work',
      'Ongoing coaching as tools and use cases evolve'
    ],
    lat: -80,
    lon: 0,
    continent: 'Antarctica'
  }
];

export default function InteractiveGlobe() {
  const [rotation, setRotation] = useState([-SERVICES[0].lon, -SERVICES[0].lat]);
  const [selectedServiceIdx, setSelectedServiceIdx] = useState(0);
  const [hoveredHotspotIdx, setHoveredHotspotIdx] = useState(null);
  const [containerDim, setContainerDim] = useState({ width: 600, height: 600 });
  const [isDragging, setIsDragging] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const containerRef = useRef(null);
  const dragRef = useRef({ isDragging: false, lastX: 0, lastY: 0 });
  const rafRef = useRef(null);

  // Detect touch devices
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);
    }
  }, []);

  // Measure container dimensions to prevent clipping & calculate exact projection scale
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        const size = Math.min(clientWidth || 600, clientHeight || 600);
        setContainerDim({ width: size, height: size });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      observer.disconnect();
    };
  }, []);

  // Convert TopoJSON to GeoJSON once
  const landFeatures = useMemo(() => {
    try {
      return topojson.feature(land110m, land110m.objects.land);
    } catch (e) {
      console.error('Error loading land topology', e);
      return null;
    }
  }, []);

  // Graticule grid generator
  const graticulePath = useMemo(() => {
    return geoGraticule().step([30, 30])();
  }, []);

  // Compute size parameters
  const padding = 24;
  const size = containerDim.width;
  const radius = Math.max(100, (size - padding * 2) / 2);
  const cx = size / 2;
  const cy = size / 2;

  // D3 Projection and Path Generator
  const projection = useMemo(() => {
    return geoOrthographic()
      .scale(radius)
      .translate([cx, cy])
      .rotate([rotation[0], rotation[1], 0])
      .clipAngle(90);
  }, [radius, cx, cy, rotation]);

  const pathGenerator = useMemo(() => {
    return geoPath().projection(projection);
  }, [projection]);

  // Frame-to-frame drag handlers (Bug Fix 2: 1:1, non-erratic, clamped pitch)
  const handlePointerDown = (e) => {
    dragRef.current = {
      isDragging: true,
      lastX: e.clientX,
      lastY: e.clientY
    };
    setIsDragging(true);
    setHoveredHotspotIdx(null);
  };

  const handlePointerMove = useCallback((e) => {
    if (!dragRef.current.isDragging) return;

    const dx = e.clientX - dragRef.current.lastX;
    const dy = e.clientY - dragRef.current.lastY;

    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;

    const sensitivity = 0.35; // Tuned ~0.35deg/px

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setRotation(([yaw, pitch]) => {
        const newYaw = (yaw + dx * sensitivity) % 360;
        // Clamp pitch to ±85deg to prevent flipping poles
        const newPitch = Math.max(-85, Math.min(85, pitch - dy * sensitivity));
        return [newYaw, newPitch];
      });
    });
  }, []);

  const handlePointerUp = useCallback(() => {
    dragRef.current.isDragging = false;
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const onMove = (e) => handlePointerMove(e);
    const onUp = () => handlePointerUp();

    if (isDragging) {
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    }
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  // Slow auto-rotation when idle (disabled if user is actively dragging, hovering a hotspot, or prefers-reduced-motion)
  useEffect(() => {
    if (isDragging || hoveredHotspotIdx !== null) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let id;
    const animate = () => {
      setRotation(([yaw, pitch]) => [(yaw + 0.12) % 360, pitch]);
      id = requestAnimationFrame(animate);
    };

    id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isDragging, hoveredHotspotIdx]);

  // Select service & rotate globe to center it
  const handleSelectService = (idx) => {
    setSelectedServiceIdx(idx);
    const svc = SERVICES[idx];
    // Rotate to position point [-lon, -lat] in center
    setRotation([-svc.lon, -svc.lat]);
  };

  const selectedService = selectedServiceIdx !== null ? SERVICES[selectedServiceIdx] : null;

  return (
    <div style={{ width: '100%', position: 'relative' }}>

      {/* Main Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: selectedService ? '1fr 1fr' : '1fr',
          gap: '40px',
          alignItems: 'center',
          transition: 'all 300ms var(--ease)'
        }}
      >
        {/* Globe Viewport */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          style={{
            width: '100%',
            height: isTouch ? '380px' : '560px',
            maxHeight: '650px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            touchAction: 'none'
          }}
        >
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            style={{ overflow: 'visible' }}
          >
            <defs>
              {/* Realistic Glossy Glass Sphere Radial Gradient */}
              <radialGradient id="ocean-shading" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#2b6cb0" />
                <stop offset="45%" stopColor="#1a4971" />
                <stop offset="80%" stopColor="#0f2a4a" />
                <stop offset="100%" stopColor="#081726" />
              </radialGradient>

              {/* Realistic Natural Landmass Gradient */}
              <linearGradient id="land-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3a5a40" />
                <stop offset="60%" stopColor="#2d4a32" />
                <stop offset="100%" stopColor="#1f3824" />
              </linearGradient>

              {/* Soft Glass Specular Highlight */}
              <radialGradient id="specular-glare" cx="28%" cy="22%" r="35%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.10)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>

              {/* Sphere Outer Atmosphere Glow Filter */}
              <filter id="globe-drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#000000" floodOpacity="0.45" />
              </filter>

              {/* Clip path to force everything inside exact sphere circle */}
              <clipPath id="sphere-clip">
                <circle cx={cx} cy={cy} r={radius} />
              </clipPath>
            </defs>

            <g filter="url(#globe-drop-shadow)">
              {/* Outer Atmosphere Glow Ring */}
              <circle
                cx={cx}
                cy={cy}
                r={radius + 3}
                fill="none"
                stroke="rgba(56,182,245,0.4)"
                strokeWidth="2.5"
                style={{ filter: 'blur(1px)', pointerEvents: 'none' }}
              />

              {/* Base Ocean Sphere */}
              <circle cx={cx} cy={cy} r={radius} fill="url(#ocean-shading)" />

              {/* Clipped Earth Geography & Graticules */}
              <g clipPath="url(#sphere-clip)">
                {/* Graticule Lines */}
                {graticulePath && (
                  <path
                    d={pathGenerator(graticulePath)}
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="0.5"
                    style={{ pointerEvents: 'none' }}
                  />
                )}

                {/* Continents (Realistic Natural Green / Tan SILHOUETTES) */}
                {landFeatures && (
                  <path
                    d={pathGenerator(landFeatures)}
                    fill="url(#land-gradient)"
                    stroke="#1b4332"
                    strokeWidth="0.5"
                    style={{ pointerEvents: 'none' }}
                  />
                )}

                {/* Realistic 3D Sphere Multiply Light Shading over Land */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="url(#ocean-shading)"
                  style={{ mixBlendMode: 'multiply', opacity: 0.65, pointerEvents: 'none' }}
                />
              </g>

              {/* Specular Upper-Left Glass Highlight */}
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="url(#specular-glare)"
                style={{ pointerEvents: 'none' }}
              />

              {/* Hotspot Markers (Rendered dynamically at exact projected coordinates) */}
              {SERVICES.map((svc, idx) => {
                // Check if hotspot is on visible front hemisphere
                const distance = geoDistance([-rotation[0], -rotation[1]], [svc.lon, svc.lat]);
                const isVisible = distance <= Math.PI / 2;

                if (!isVisible) return null;

                const coords = projection([svc.lon, svc.lat]);
                if (!coords) return null;

                const [hx, hy] = coords;
                if (isNaN(hx) || isNaN(hy)) return null;

                // Ensure point is strictly inside sphere radius boundary
                const distFromCenter = Math.hypot(hx - cx, hy - cy);
                if (distFromCenter > radius - 2) return null;

                const isSelected = selectedServiceIdx === idx;
                const isHovered = hoveredHotspotIdx === idx;

                return (
                  <g key={svc.id} style={{ cursor: 'pointer' }}>
                    {/* Animated Pulsing Outer Ring */}
                    <circle
                      cx={hx}
                      cy={hy}
                      r={isSelected ? 14 : isHovered ? 12 : 9}
                      fill="rgba(255,107,53,0.2)"
                      stroke="#FF6B35"
                      strokeWidth="1.5"
                      style={{
                        transition: 'r 200ms ease',
                        pointerEvents: 'none'
                      }}
                    >
                      <animate
                        attributeName="r"
                        values="7;15;7"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0.2;0.8"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Sunrise-Orange Pin Center */}
                    <circle
                      cx={hx}
                      cy={hy}
                      r={isSelected ? 6 : isHovered ? 5 : 4}
                      fill="#FF6B35"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      style={{ transition: 'r 200ms ease', pointerEvents: 'none' }}
                    />

                    {/* Invisible Hit Area for responsive clicks */}
                    <circle
                      cx={hx}
                      cy={hy}
                      r="16"
                      fill="transparent"
                      onMouseEnter={() => {
                        if (!dragRef.current.isDragging) setHoveredHotspotIdx(idx);
                      }}
                      onMouseLeave={() => setHoveredHotspotIdx(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectService(idx);
                      }}
                    />

                    {/* Hover Tooltip (Brand Tokens: Summit Navy bg, Sunrise Hairline Border, DM Sans) */}
                    {isHovered && !selectedService && !isDragging && (
                      <g transform={`translate(${hx}, ${hy - 14})`} style={{ pointerEvents: 'none' }}>
                        <rect
                          x="-80"
                          y="-32"
                          width="160"
                          height="28"
                          rx="6"
                          fill="#0E1A2B"
                          stroke="#FF6B35"
                          strokeWidth="1"
                        />
                        <text
                          x="0"
                          y="-14"
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="12"
                          fontWeight="600"
                          fontFamily="var(--font-sans), sans-serif"
                        >
                          {svc.title}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Helper hint */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              fontSize: '12px',
              color: 'var(--fg3)',
              background: 'rgba(14,26,43,0.75)',
              backdropFilter: 'blur(8px)',
              padding: '6px 14px',
              borderRadius: '999px',
              border: '1px solid var(--border)',
              pointerEvents: 'none'
            }}
          >
            Drag to rotate globe · Click hotspot to view service
          </div>
        </div>

        {/* Active Service Detail Panel (Desktop Card / Mobile Bottom Sheet) */}
        {selectedService && (
          <>
            {/* Mobile Backdrop Overlay */}
            <div
              onClick={() => setSelectedServiceIdx(null)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(14,26,43,0.7)',
                backdropFilter: 'blur(4px)',
                zIndex: 998,
                display: isTouch || (typeof window !== 'undefined' && window.innerWidth < 768) ? 'block' : 'none'
              }}
              aria-hidden="true"
            />
            <div
              style={{
                background: 'var(--summit)',
                color: '#EEF3F8',
                borderRadius: 'var(--r-md)',
                padding: 'clamp(20px, 4vw, 40px)',
                border: '1px solid var(--sunrise)',
                boxShadow: 'var(--glow-sunrise)',
                position: typeof window !== 'undefined' && window.innerWidth < 768 ? 'fixed' : 'relative',
                bottom: typeof window !== 'undefined' && window.innerWidth < 768 ? '0' : 'auto',
                left: typeof window !== 'undefined' && window.innerWidth < 768 ? '0' : 'auto',
                right: typeof window !== 'undefined' && window.innerWidth < 768 ? '0' : 'auto',
                maxHeight: typeof window !== 'undefined' && window.innerWidth < 768 ? '85vh' : 'none',
                overflowY: typeof window !== 'undefined' && window.innerWidth < 768 ? 'auto' : 'visible',
                zIndex: typeof window !== 'undefined' && window.innerWidth < 768 ? 999 : 1,
                borderBottomLeftRadius: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 'var(--r-md)',
                borderBottomRightRadius: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 'var(--r-md)',
                animation: 'fadeIn 250ms var(--ease)'
              }}
            >
              <button
                onClick={() => setSelectedServiceIdx(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'var(--navy-700)',
                  border: '1px solid var(--navy-600)',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
                aria-label="Close panel"
              >
                <X size={18} />
              </button>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,107,53,0.15)', color: 'var(--sunrise-300)', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, marginBottom: '18px' }}>
                <Globe size={14} />
                <span>MODULE 0{selectedService.id} — {selectedService.continent.toUpperCase()}</span>
              </div>

              <h3 style={{ fontSize: 'clamp(20px, 4vw, 26px)', lineHeight: 1.2, fontWeight: 500, margin: '0 0 12px', color: '#fff' }}>
                {selectedService.title}
              </h3>

              <p style={{ fontSize: '14.5px', color: 'var(--sunrise-300)', fontWeight: 500, margin: '0 0 16px' }}>
                {selectedService.eyebrow}
              </p>

              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-300)', marginBottom: '24px' }}>
                {selectedService.headline}
              </p>

              <div style={{ background: 'var(--navy-800)', borderRadius: '12px', padding: '18px', border: '1px solid var(--navy-700)', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy-400)', fontWeight: 600, margin: '0 0 12px' }}>
                  Key Deliverables & Capabilities
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedService.deliverables.map((del, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '14px', color: '#EEF3F8', lineHeight: 1.4 }}>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link className="btn btn-primary glow-sunrise" href={selectedService.slug} style={{ width: '100%', justifyContent: 'center' }}>
                {selectedService.ctaText}
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Mobile / Touch Devices Horizontal Swipeable Card Fallback */}
      {isTouch && (
        <div style={{ marginTop: '32px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg2)', marginBottom: '12px', textAlign: 'center' }}>
            Tap a service to explore:
          </div>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '16px',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {SERVICES.map((svc, idx) => {
              const SvcIcon = svc.icon;
              const isSel = selectedServiceIdx === idx;
              return (
                <button
                  key={svc.id}
                  onClick={() => handleSelectService(idx)}
                  style={{
                    flex: '0 0 240px',
                    scrollSnapAlign: 'start',
                    padding: '16px',
                    borderRadius: 'var(--r-card)',
                    background: isSel ? 'var(--summit)' : 'var(--snow)',
                    color: isSel ? '#fff' : 'var(--fg1)',
                    border: `1px solid ${isSel ? 'var(--sunrise)' : 'var(--border)'}`,
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvcIcon size={18} color={isSel ? 'var(--sunrise-300)' : 'var(--sunrise)'} />
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{svc.title}</span>
                  </div>
                  <span style={{ fontSize: '12px', opacity: 0.85, lineHeight: 1.4 }}>
                    {svc.eyebrow}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
