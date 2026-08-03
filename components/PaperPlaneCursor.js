'use client';

import { useEffect, useRef, useState } from 'react';

export default function PaperPlaneCursor() {
  const canvasRef = useRef(null);
  const planeRef = useRef(null);
  const clickPulseRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Disable custom cursor strictly on pure touch devices (mobiles without mouse)
    const isPureTouch = typeof window !== 'undefined' && ('ontouchstart' in window) && (navigator.maxTouchPoints > 0) && !window.matchMedia('(pointer: fine)').matches;
    const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isPureTouch) return;

    setIsActive(true);
    const canvas = canvasRef.current;
    const planeEl = planeRef.current;
    const pulseEl = clickPulseRef.current;
    if (!canvas || !planeEl) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;

    // Responsive Sizing: Desktop 38px, Large 44px, Tablet 34px
    const getResponsiveDimensions = () => {
      const w = window.innerWidth;
      if (w > 1440) return { width: 44, height: 19.3, scale: 1.15, noseX: 43.1, noseY: 0.7 };
      if (w > 1024) return { width: 38, height: 16.7, scale: 1.0, noseX: 37.2, noseY: 0.6 };
      return { width: 34, height: 14.9, scale: 0.89, noseX: 33.3, noseY: 0.5 };
    };

    let dim = getResponsiveDimensions();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dim = getResponsiveDimensions();
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    document.body.classList.add('custom-cursor-active');

    // Motion State & Interpolation
    let initialized = false;
    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let currentTilt = 0;
    let targetTilt = 0;
    let hoverScale = 1.0;
    let hoverLift = 0;
    let clickScale = 1.0;
    let scrollTilt = 0;
    let isHoveringInput = false;
    let hoverType = 'normal';
    let lerpSpeed = 0.35;

    // Trail points & velocity tracking
    const trailPoints = [];
    let maxTrailLength = 180; // 150-220px based on velocity
    let trailOpacityMult = 1.0;

    // Navigation markers inspired by flight paths
    const routeMarkers = [];

    // Idle state (2 seconds threshold for gentle breathing motion)
    let lastMoveTime = performance.now();
    let isIdle = false;

    // Scroll tilt handling
    let scrollTimeout;
    const handleScroll = () => {
      scrollTilt = -7; // Nose tilts upward during scroll
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollTilt = 0;
      }, 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Section transition observer (draws subtle mountain route on section entry)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isReducedMotion && initialized) {
            // Briefly add route marker on section enter
            routeMarkers.push({
              x: current.x,
              y: current.y,
              birth: performance.now(),
              isSectionRoute: true
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section').forEach((sec) => observer.observe(sec));

    // Mouse movement listener & element hover detection
    let lastX = 0;
    let lastY = 0;
    let dx = 0;
    let dy = 0;

    const handleMouseMove = (e) => {
      const now = performance.now();
      lastMoveTime = now;
      isIdle = false;

      if (!initialized) {
        current.x = e.clientX;
        current.y = e.clientY;
        lastX = e.clientX;
        lastY = e.clientY;
        initialized = true;
      }

      dx = e.clientX - lastX;
      dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;

      target.x = e.clientX;
      target.y = e.clientY;

      const targetEl = document.elementFromPoint(e.clientX, e.clientY);
      if (!targetEl) return;

      // Text input fallback
      if (
        targetEl.tagName === 'INPUT' ||
        targetEl.tagName === 'TEXTAREA' ||
        targetEl.isContentEditable
      ) {
        isHoveringInput = true;
        canvas.style.opacity = '0';
        planeEl.style.opacity = '0';
        return;
      } else {
        isHoveringInput = false;
        canvas.style.opacity = '1';
        planeEl.style.opacity = '1';
      }

      // Element Hover States
      const buttonEl = targetEl.closest('button, .btn, [role="button"]');
      const linkEl = targetEl.closest('a, .brand-link');
      const cardEl = targetEl.closest('.card, .demo-card, .pricing-card, .service-card');
      const primaryCta = targetEl.closest('.btn-primary, .glow-sunrise');
      const navItem = targetEl.closest('nav a, header a');

      if (primaryCta) {
        hoverScale = 1.12;
        hoverLift = -3;
        hoverType = 'primary-cta';
        lerpSpeed = 0.45; // Faster tracking towards primary CTA
        trailOpacityMult = 1.3;
      } else if (buttonEl) {
        hoverScale = 1.10; // 110% scale up on buttons
        hoverLift = -2; // Tiny upward lift
        hoverType = 'button';
        lerpSpeed = 0.38;
        trailOpacityMult = 1.2;
      } else if (navItem) {
        hoverScale = 1.08;
        hoverLift = -1;
        hoverType = 'nav';
        lerpSpeed = 0.38;
        trailOpacityMult = 1.1;
      } else if (linkEl) {
        hoverScale = 1.08;
        hoverLift = 0;
        hoverType = 'link';
        lerpSpeed = 0.35;
        trailOpacityMult = 1.0;
      } else if (cardEl) {
        hoverScale = 1.05;
        hoverLift = -1;
        hoverType = 'card';
        lerpSpeed = 0.35;
        trailOpacityMult = 1.0;
      } else {
        hoverScale = 1.0;
        hoverLift = 0;
        hoverType = 'normal';
        lerpSpeed = 0.35;
        trailOpacityMult = 1.0;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Mousedown click compression & expanding 250ms Sunrise pulse ring
    const handleMouseDown = (e) => {
      if (isHoveringInput) return;
      clickScale = 0.85; // Compress plane on click

      if (pulseEl) {
        pulseEl.style.left = `${e.clientX}px`;
        pulseEl.style.top = `${e.clientY}px`;
        pulseEl.className = 'click-pulse-ring active';
        setTimeout(() => {
          pulseEl.className = 'click-pulse-ring';
        }, 240);
      }
    };

    const handleMouseUp = () => {
      clickScale = 1.0; // Ease back smoothly
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // 60 FPS Render Loop
    const render = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check if idle for > 2 seconds
      if (now - lastMoveTime > 2000) {
        isIdle = true;
      }

      if (initialized && !isHoveringInput) {
        // Smooth lerp tracking to mouse
        current.x += (target.x - current.x) * lerpSpeed;
        current.y += (target.y - current.y) * lerpSpeed;

        // Velocity & Dynamic Rotation capped strictly at ±15° max
        const speed = Math.hypot(dx, dy);

        if (!isReducedMotion) {
          const velocityTilt = Math.max(-15, Math.min(15, dx * 0.45));
          const hoverRotation =
            hoverType === 'link'
              ? 4
              : hoverType === 'card'
              ? -4
              : hoverType === 'nav'
              ? -3
              : 0;

          targetTilt = velocityTilt + scrollTilt + hoverRotation;
          currentTilt += (targetTilt - currentTilt) * 0.18;
          dx *= 0.82;
          dy *= 0.82;
        } else {
          currentTilt = 0;
        }

        // Dynamic Trail length (150px at slow speed up to 220px at fast speed)
        maxTrailLength = Math.min(220, Math.max(150, 150 + speed * 3.5));

        // Record flight route trail points
        if (!isReducedMotion) {
          trailPoints.push({
            x: current.x,
            y: current.y,
            time: now,
            speed
          });

          // Prune trail points to maxTrailLength / age
          while (
            trailPoints.length > 20 ||
            (trailPoints.length > 0 && now - trailPoints[0].time > 450)
          ) {
            trailPoints.shift();
          }

          // Occasionally add tiny aviation route markers along flight path
          if (
            speed > 4 &&
            trailPoints.length > 5 &&
            Math.random() < 0.04 &&
            routeMarkers.length < 3
          ) {
            const p = trailPoints[Math.floor(trailPoints.length / 2)];
            routeMarkers.push({ x: p.x, y: p.y, birth: now });
          }
        }

        // Draw Smooth Bézier Flight Route Trail (Bootsolo Sunrise Orange #FF6B35)
        if (!isReducedMotion && trailPoints.length > 1) {
          ctx.save();
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.shadowColor = '#FF6B35';
          ctx.shadowBlur = 8;

          // Smooth curve passing through points with glowing trail tail
          for (let i = 1; i < trailPoints.length; i++) {
            const p1 = trailPoints[i - 1];
            const p2 = trailPoints[i];
            const age = now - p2.time;
            const progress = i / trailPoints.length; // 0 (tail end) to 1 (near nose)
            const alpha = Math.max(0, (1 - age / 450) * progress * 0.95 * trailOpacityMult);
            const strokeWidth = 2.2 + progress * (speed > 6 ? 2.5 : 1.5);

            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 107, 53, ${Math.min(1, alpha * 1.2).toFixed(3)})`;
            ctx.lineWidth = strokeWidth;

            if (i === 1) {
              ctx.moveTo(p1.x, p1.y);
            } else {
              const xc = (p1.x + p2.x) / 2;
              const yc = (p1.y + p2.y) / 2;
              ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
            }
            ctx.stroke();
          }

          // Render Aviation Dashed Route Markers along flight path
          for (let i = routeMarkers.length - 1; i >= 0; i--) {
            const m = routeMarkers[i];
            const age = now - m.birth;
            if (age > 700) {
              routeMarkers.splice(i, 1);
              continue;
            }
            const alpha = Math.max(0, 1 - age / 700);

            // Tiny white dot with Sunrise orange outer ring
            ctx.beginPath();
            ctx.globalAlpha = alpha * 0.9;
            ctx.fillStyle = '#FFFFFF';
            ctx.arc(m.x, m.y, 2.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.strokeStyle = '#FF6B35';
            ctx.lineWidth = 1.5;
            ctx.arc(m.x, m.y, 4, 0, Math.PI * 2);
            ctx.stroke();
          }

          ctx.restore();
        }

        // Idle Breathing Motion (gentle floating when idle > 2s)
        let idleOffsetY = 0;
        let idleTiltOffset = 0;
        if (isIdle && !isReducedMotion) {
          const idleTime = now - lastMoveTime - 2000;
          idleOffsetY = Math.sin(idleTime * 0.0025) * 3.5;
          idleTiltOffset = Math.sin(idleTime * 0.002) * 2;
        }

        // Position & Render SVG Paper Plane (Nose Tip strictly aligned at hotspot)
        if (planeEl) {
          const finalScale = dim.scale * hoverScale * clickScale;
          const finalY = current.y + hoverLift + idleOffsetY;
          const finalTilt = currentTilt + idleTiltOffset;

          planeEl.style.transform = `translate3d(${current.x - dim.noseX}px, ${
            finalY - dim.noseY
          }px, 0) rotate(${finalTilt}deg) scale(${finalScale})`;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('custom-cursor-active');
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Canvas Layer for Bézier Flight Route Trail & Aviation Route Markers */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'opacity 170ms ease'
        }}
      />

      {/* Expanding 250ms Sunrise Click Pulse Ring */}
      <div
        ref={clickPulseRef}
        className="click-pulse-ring"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99997
        }}
      />

      {/* Positioned SVG Paper Plane Cursor — Exact Faceted Bootsolo Sunrise Mark */}
      <div
        ref={planeRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '38px',
          height: '17px',
          pointerEvents: 'none',
          zIndex: 99999,
          transformOrigin: '37.2px 0.6px', // Nose tip hotspot transformation origin
          willChange: 'transform',
          opacity: 0,
          transition: 'opacity 170ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <svg
          width="38"
          height="17"
          viewBox="420 220 330 145"
          fill="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          {/* Official Faceted Sunrise Orange Paper Plane Mark */}
          <path
            fill="#FF6B35"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M599.61,310.96l9.42-17.78l3.68,9.6L599.61,310.96z M620.09,282.79l100.36-40.3l-65.33,77.54L620.09,282.79z M690.81,233.71l-84.53,24.33l-7.46,2.15l-22.72-24.15L690.81,233.71z M743.64,225.71l-135.55,54.43l-26.66,50.34l39.79-24.86l-7.46-19.46l41.65,44.28L743.64,225.71l-183.26,3.72l36.3,38.59l0.28-0.08l-6.5,28.88l12.91-30.73L743.64,225.71z"
          />
          <polygon fill="#EEF3F8" points="434.6,361.16 578.33,313.88 576.39,308 423.99,358.13 423.99,361.16" />
          <rect x="471.28" y="289.53" transform="matrix(0.9499 -0.3126 0.3126 0.9499 -65.1008 179.2003)" fill="#EEF3F8" width="110.09" height="6.19" />
          <path fill="#EEF3F8" d="M423.99,347.77l118.95-39L541,302.9l-117.86,38.64c0.53,0.73,0.85,1.63,0.85,2.61V347.77z" />
        </svg>
      </div>
    </>
  );
}
