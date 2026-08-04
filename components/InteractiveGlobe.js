'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { geoOrthographic, geoPath, geoGraticule, geoDistance } from 'd3-geo';
import * as topojson from 'topojson-client';
import land110m from 'world-atlas/land-110m.json';
import { CheckCircle2, X, Globe, Bot, Search, TrendingUp, Video, Monitor, Sparkles, GraduationCap, MapPin, Zap } from 'lucide-react';

export const SERVICES = [
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
    ]
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
    ]
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
    ]
  },
  {
    id: 4,
    title: 'Content, Video & Authority',
    slug: '/content-video-thought-leadership',
    icon: Video,
    eyebrow: 'Content, video, and authority building.',
    headline: "People trust you before the call, or they don't get on the call.",
    ctaText: 'Explore Content & Video →',
    deliverables: [
      'Content marketing and editorial strategy',
      'Video production and motion design',
      'Founder-led thought leadership',
      'Content built to rank and convert'
    ]
  },
  {
    id: 5,
    title: 'Web & Ecommerce Experience',
    slug: '/web-ecommerce-experience',
    icon: Monitor,
    eyebrow: 'Web design, UX, and ecommerce.',
    headline: 'Your site is your hardest-working salesperson.',
    ctaText: 'Explore Web & Ecommerce →',
    deliverables: [
      'Conversion-focused web design',
      'UX strategy and optimization',
      'Ecommerce store experiences',
      'Sites engineered for speed and scale'
    ]
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
    ]
  },
  {
    id: 7,
    title: 'AI Enablement & Training',
    slug: '/ai-enablement-training',
    icon: GraduationCap,
    eyebrow: 'Practical AI skills for real teams.',
    headline: 'Buying the tools is the easy part; adoption is the gap.',
    ctaText: 'Explore AI Enablement →',
    deliverables: [
      'AI workflow audits and readiness assessments',
      'Hands-on training for marketing & sales',
      'Custom playbooks for AI-assisted work',
      'Ongoing coaching as AI tools evolve'
    ]
  }
];

export const GLOBE_HOTSPOTS = [
  {
    id: 1,
    location: 'San Francisco, USA',
    region: 'North America Node',
    lat: 37.77,
    lon: -122.41,
    title: 'ChatGPT 4o & Claude AI Citation Hub',
    founderType: 'Solo SaaS Founder',
    metric: '+312%',
    metricLabel: 'Average Signup Growth',
    description: 'Ranked #1 in ChatGPT 4o & Claude recommendations for lean SaaS platforms.',
    deliverables: [
      'Top-tier AEO citation placement in AI chat queries',
      'Organic referral traffic up 4.1x without agency retainers',
      'Automated buyer qualification workflow 24/7'
    ]
  },
  {
    id: 2,
    location: 'London, United Kingdom',
    region: 'Europe Node',
    lat: 51.50,
    lon: -0.12,
    title: 'Perplexity Pro Answer Engine Node',
    founderType: 'AI FinTech Solopreneur',
    metric: '4.1x',
    metricLabel: 'AI Citation Visibility',
    description: 'Cited directly across 14 high-intent Perplexity Pro buyer queries.',
    deliverables: [
      'Indexed in Perplexity citation sources',
      '-62% reduction in customer acquisition cost',
      'Structured brand knowledge graphs for LLM training'
    ]
  },
  {
    id: 3,
    location: 'Tokyo, Japan',
    region: 'Asia-Pacific Node',
    lat: 35.67,
    lon: 139.65,
    title: 'Google AI Overview Citation Engine',
    founderType: 'B2B Tech Founder',
    metric: '-58%',
    metricLabel: 'Cost Per Acquisition',
    description: 'Secured top generative answer cards in Google AI Search.',
    deliverables: [
      'Dominates generative summary snippets for high-intent terms',
      'Full-funnel conversion rate optimization',
      'Automated lead capture & instant booking'
    ]
  },
  {
    id: 4,
    location: 'São Paulo, Brazil',
    region: 'South America Node',
    lat: -23.55,
    lon: -46.63,
    title: 'Generative Engine Optimization (GEO) Hub',
    founderType: 'Bootstrapped E-Commerce',
    metric: 'Top Ranked',
    metricLabel: 'AEO Citation Status',
    description: 'Replaced traditional 12-person agency retainers with an automated AI engine.',
    deliverables: [
      'Zero manual pitch / 100% self-running funnel',
      'Multi-region search & AI engine optimization',
      'Always-on content velocity pipeline'
    ]
  },
  {
    id: 5,
    location: 'Sydney, Australia',
    region: 'Oceania Node',
    lat: -33.86,
    lon: 151.20,
    title: 'LLM Knowledge Graph Node',
    founderType: 'DevTool Solopreneur',
    metric: '+280%',
    metricLabel: 'Qualified Lead Flow',
    description: 'Automated 24/7 buyer nurture funnel across AI search and social.',
    deliverables: [
      'Direct LLM response citations in developer prompts',
      'Shipped multi-channel content in 3 days vs 3 weeks',
      'End-to-end performance tracking'
    ]
  },
  {
    id: 6,
    location: 'Berlin, Germany',
    region: 'Central Europe Node',
    lat: 52.52,
    lon: 13.40,
    title: 'Vibe Marketing & Rapid Content Engine',
    founderType: 'Indie Hacker SaaS',
    metric: '3x',
    metricLabel: 'Content Velocity',
    description: 'Shipped high-converting content and motion assets in days, not weeks.',
    deliverables: [
      'Rapid iteration on high-converting motion design',
      'Automated funnel testing & CRO',
      'Direct revenue attribution per campaign'
    ]
  }
];

export default function InteractiveGlobe() {
  const [rotation, setRotation] = useState([-GLOBE_HOTSPOTS[0].lon, -GLOBE_HOTSPOTS[0].lat]);
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

  // Select hotspot & rotate globe to center it
  const handleSelectHotspot = (idx) => {
    setSelectedServiceIdx(idx);
    const node = GLOBE_HOTSPOTS[idx];
    setRotation([-node.lon, -node.lat]);
  };

  const selectedNode = selectedServiceIdx !== null ? GLOBE_HOTSPOTS[selectedServiceIdx] : null;

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Main Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: selectedNode ? '1fr 1fr' : '1fr',
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
              <radialGradient id="ocean-shading" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#2b6cb0" />
                <stop offset="45%" stopColor="#1a4971" />
                <stop offset="80%" stopColor="#0f2a4a" />
                <stop offset="100%" stopColor="#081726" />
              </radialGradient>

              <linearGradient id="land-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3a5a40" />
                <stop offset="60%" stopColor="#2d4a32" />
                <stop offset="100%" stopColor="#1f3824" />
              </linearGradient>

              <radialGradient id="specular-glare" cx="28%" cy="22%" r="35%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.10)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>

              <filter id="globe-drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#000000" floodOpacity="0.45" />
              </filter>

              <clipPath id="sphere-clip">
                <circle cx={cx} cy={cy} r={radius} />
              </clipPath>
            </defs>

            <g filter="url(#globe-drop-shadow)">
              <circle
                cx={cx}
                cy={cy}
                r={radius + 3}
                fill="none"
                stroke="rgba(56,182,245,0.4)"
                strokeWidth="2.5"
                style={{ filter: 'blur(1px)', pointerEvents: 'none' }}
              />

              <circle cx={cx} cy={cy} r={radius} fill="url(#ocean-shading)" />

              <g clipPath="url(#sphere-clip)">
                {graticulePath && (
                  <path
                    d={pathGenerator(graticulePath)}
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="0.5"
                    style={{ pointerEvents: 'none' }}
                  />
                )}

                {landFeatures && (
                  <path
                    d={pathGenerator(landFeatures)}
                    fill="url(#land-gradient)"
                    stroke="#1b4332"
                    strokeWidth="0.5"
                    style={{ pointerEvents: 'none' }}
                  />
                )}

                <circle
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="url(#ocean-shading)"
                  style={{ mixBlendMode: 'multiply', opacity: 0.65, pointerEvents: 'none' }}
                />
              </g>

              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="url(#specular-glare)"
                style={{ pointerEvents: 'none' }}
              />

              {/* Hotspot Markers for Global AI Network Nodes */}
              {GLOBE_HOTSPOTS.map((node, idx) => {
                const distance = geoDistance([-rotation[0], -rotation[1]], [node.lon, node.lat]);
                const isVisible = distance <= Math.PI / 2;

                if (!isVisible) return null;

                const coords = projection([node.lon, node.lat]);
                if (!coords) return null;

                const [hx, hy] = coords;
                if (isNaN(hx) || isNaN(hy)) return null;

                const distFromCenter = Math.hypot(hx - cx, hy - cy);
                if (distFromCenter > radius - 2) return null;

                const isSelected = selectedServiceIdx === idx;
                const isHovered = hoveredHotspotIdx === idx;

                return (
                  <g key={node.id} style={{ cursor: 'pointer' }}>
                    <circle
                      cx={hx}
                      cy={hy}
                      r={isSelected ? 14 : isHovered ? 12 : 9}
                      fill="rgba(255,107,53,0.25)"
                      stroke="#FF6B35"
                      strokeWidth="1.5"
                      style={{ transition: 'r 200ms ease', pointerEvents: 'none' }}
                    >
                      <animate attributeName="r" values="7;15;7" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    <circle
                      cx={hx}
                      cy={hy}
                      r={isSelected ? 6 : isHovered ? 5 : 4}
                      fill="#FF6B35"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      style={{ transition: 'r 200ms ease', pointerEvents: 'none' }}
                    />

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
                        handleSelectHotspot(idx);
                      }}
                    />

                    {isHovered && !selectedNode && !isDragging && (
                      <g transform={`translate(${hx}, ${hy - 14})`} style={{ pointerEvents: 'none' }}>
                        <rect
                          x="-90"
                          y="-32"
                          width="180"
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
                          fontSize="11.5"
                          fontWeight="600"
                          fontFamily="var(--font-sans), sans-serif"
                        >
                          {node.location} · {node.metric}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

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
            Drag 3D Globe · Click hotspots to explore live AI traction hubs
          </div>
        </div>

        {/* Selected Hotspot Detail Panel */}
        {selectedNode && (
          <>
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
                padding: 'clamp(20px, 4vw, 36px)',
                border: '1px solid var(--sunrise)',
                boxShadow: 'var(--glow-sunrise)',
                position: typeof window !== 'undefined' && window.innerWidth < 768 ? 'fixed' : 'relative',
                bottom: typeof window !== 'undefined' && window.innerWidth < 768 ? '0' : 'auto',
                left: typeof window !== 'undefined' && window.innerWidth < 768 ? '0' : 'auto',
                right: typeof window !== 'undefined' && window.innerWidth < 768 ? '0' : 'auto',
                maxHeight: typeof window !== 'undefined' && window.innerWidth < 768 ? '85vh' : 'none',
                overflowY: typeof window !== 'undefined' && window.innerWidth < 768 ? 'auto' : 'visible',
                zIndex: typeof window !== 'undefined' && window.innerWidth < 768 ? 999 : 1,
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

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,107,53,0.15)', color: 'var(--sunrise-300)', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, marginBottom: '16px' }}>
                <MapPin size={14} />
                <span>{selectedNode.location.toUpperCase()} — {selectedNode.region}</span>
              </div>

              <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)', lineHeight: 1.2, fontWeight: 500, margin: '0 0 8px', color: '#fff' }}>
                {selectedNode.title}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '14px 0 20px', padding: '14px 18px', background: 'var(--navy-900)', borderRadius: '12px', border: '1px solid var(--navy-700)' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{selectedNode.metricLabel}</div>
                  <div className="mono" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--sunrise-300)', marginTop: '2px' }}>{selectedNode.metric}</div>
                </div>
                <div style={{ width: '1px', height: '36px', background: 'var(--navy-700)' }} />
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Founder Model</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginTop: '2px' }}>{selectedNode.founderType}</div>
                </div>
              </div>

              <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--navy-300)', marginBottom: '20px' }}>
                {selectedNode.description}
              </p>

              <div style={{ background: 'var(--navy-800)', borderRadius: '12px', padding: '18px', border: '1px solid var(--navy-700)' }}>
                <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy-400)', fontWeight: 600, margin: '0 0 12px' }}>
                  Live Traction Highlights
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedNode.deliverables.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '13.5px', color: '#EEF3F8', lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Touch swipeable fallback */}
      {isTouch && (
        <div style={{ marginTop: '28px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg2)', marginBottom: '12px', textAlign: 'center' }}>
            Tap an AI Citation Node to explore:
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
            {GLOBE_HOTSPOTS.map((node, idx) => {
              const isSel = selectedServiceIdx === idx;
              return (
                <button
                  key={node.id}
                  onClick={() => handleSelectHotspot(idx)}
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
                    gap: '8px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color={isSel ? 'var(--sunrise-300)' : 'var(--sunrise)'} />
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{node.location}</span>
                  </div>
                  <span className="mono" style={{ fontSize: '16px', fontWeight: 700, color: isSel ? 'var(--sunrise-300)' : 'var(--sunrise)' }}>
                    {node.metric}
                  </span>
                  <span style={{ fontSize: '12px', opacity: 0.85, lineHeight: 1.4 }}>
                    {node.founderType}
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
