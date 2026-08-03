'use client';

import { useState, useEffect } from 'react';
import { PaperPlaneMark } from './Brand';

export default function PaperPlaneIntro() {
  const [state, setState] = useState('animating'); // 'animating' | 'settled'

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setState('settled');
      return;
    }

    // Immediate skip triggers (click, scroll, or ESC key)
    const handleSkip = (e) => {
      if (e && e.type === 'keydown' && e.key !== 'Escape') return;
      setState('settled');
    };

    window.addEventListener('click', handleSkip, { once: true });
    window.addEventListener('scroll', handleSkip, { once: true, passive: true });
    window.addEventListener('keydown', handleSkip, { once: true });

    // Flight duration: finishes in exactly 2 seconds (2000ms)
    const timer = setTimeout(() => {
      setState('settled');
    }, 2000);

    return () => {
      window.removeEventListener('click', handleSkip);
      window.removeEventListener('scroll', handleSkip);
      window.removeEventListener('keydown', handleSkip);
      clearTimeout(timer);
    };
  }, []);

  const isAnimating = state === 'animating';

  return (
    <>
      <style jsx global>{`
        /* 2-Second Welcome Animation Sequence:
           1. Enters from bottom-left screen edge as a HUGE plane (scale 3.8)
           2. Sweeps into the middle of the screen and executes a smooth round turn arc
           3. Descends smoothly toward the dashboard card
           4. Settles tucked directly behind the Live AI Answer Engine tile as its background image/watermark
        */
        @keyframes paperPlaneWelcomeFlight2s {
          0% {
            /* Huge plane entering from bottom-left */
            transform: translate3d(calc(-90vw + 20px), 65vh, 0) rotate(-18deg) scale(3.8);
            opacity: 0;
          }
          18% {
            opacity: 1;
            transform: translate3d(calc(-65vw + 40px), 35vh, 0) rotate(10deg) scale(3.2);
          }
          40% {
            /* Sweeping into the middle of the screen, taking rounds */
            transform: translate3d(-40vw, 8vh, 0) rotate(22deg) scale(2.4);
            opacity: 1;
          }
          60% {
            /* Round turn arc in middle screen */
            transform: translate3d(-22vw, -12vh, 0) rotate(-16deg) scale(1.7);
            opacity: 1;
          }
          82% {
            /* Approaching destination badge */
            transform: translate3d(-6vw, -4vh, 0) rotate(-6deg) scale(1.1);
            opacity: 0.95;
          }
          100% {
            /* Resting tucked behind the tile as background watermark */
            transform: translate3d(0, 0, 0) rotate(0deg) scale(0.85);
            opacity: 0.85;
          }
        }

        /* Flight Route Dashed Arc Animation (2 seconds) */
        @keyframes paperPlaneDashedRouteArc2s {
          0% {
            stroke-dashoffset: 1200;
            opacity: 0;
          }
          15% {
            opacity: 0.75;
          }
          85% {
            stroke-dashoffset: 0;
            opacity: 0.45;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
      `}</style>

      {/* Dashed Flight Route Arc SVG (active during 2s flight) */}
      {isAnimating && (
        <svg
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 9999,
            overflow: 'visible'
          }}
        >
          <path
            d="M 20 680 Q 450 250 820 180 T 1280 200"
            fill="none"
            stroke="#FF6B35"
            strokeWidth="2.5"
            strokeDasharray="8 8"
            style={{
              strokeDashoffset: 1200,
              animation: 'paperPlaneDashedRouteArc2s 2.0s cubic-bezier(0.25, 1, 0.5, 1) forwards'
            }}
          />
        </svg>
      )}

      {/* Paper Plane Character — starts huge from bottom-left, loops in middle, settles behind Live AI Answer Engine tile */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.85,
          transform: isAnimating ? 'none' : 'rotate(0deg) scale(0.85)',
          animation: isAnimating ? 'paperPlaneWelcomeFlight2s 2.0s cubic-bezier(0.25, 1, 0.5, 1) forwards' : 'none',
          willChange: 'transform, opacity'
        }}
      >
        <PaperPlaneMark size={28} color="#FF9A6B" planeColor="#FF6B35" />
      </div>
    </>
  );
}
