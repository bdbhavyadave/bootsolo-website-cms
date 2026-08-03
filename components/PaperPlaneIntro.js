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

    // Flight duration ~1.8s for smooth flight across screen -> round turn -> landing behind tile
    const timer = setTimeout(() => {
      setState('settled');
    }, 1800);

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
        /* Professional 6-Step Flight Path:
           1. Enters from offscreen-left
           2. Flies across the screen
           3. Begins turn upward
           4. Executes round turn arc in the sky
           5. Descends toward destination
           6. Stops directly behind the Live AI Answer Engine tile
        */
        @keyframes paperPlane6StepFlight {
          0% {
            transform: translate3d(calc(-100vw + 60px), 180px, 0) rotate(0deg) scale(1.35);
            opacity: 0;
          }
          15% {
            opacity: 1;
            transform: translate3d(-460px, 120px, 0) rotate(4deg) scale(1.25);
          }
          35% {
            transform: translate3d(-300px, 30px, 0) rotate(8deg) scale(1.2);
            opacity: 1;
          }
          55% {
            transform: translate3d(-160px, -60px, 0) rotate(9deg) scale(1.1);
            opacity: 1;
          }
          75% {
            transform: translate3d(-60px, -75px, 0) rotate(-6deg) scale(1.0);
            opacity: 1;
          }
          90% {
            transform: translate3d(-12px, -15px, 0) rotate(-2deg) scale(0.9);
            opacity: 0.95;
          }
          100% {
            /* Final position behind badge, slightly offset left */
            transform: translate3d(-30px, -4px, 0) rotate(0deg) scale(0.85);
            opacity: 0.95;
          }
        }

        /* Flight Route Dashed Arc Animation */
        @keyframes paperPlaneDashedRouteArc {
          0% {
            stroke-dashoffset: 950;
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

      {/* Dashed Flight Route Arc SVG (active during flight) */}
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
            d="M 10 380 Q 420 190 780 110 T 1280 230"
            fill="none"
            stroke="#FF6B35"
            strokeWidth="2.2"
            strokeDasharray="6 6"
            style={{
              strokeDashoffset: 950,
              animation: 'paperPlaneDashedRouteArc 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
            }}
          />
        </svg>
      )}

      {/* Paper Plane Character — flies across screen -> round turn -> settles behind Live AI Answer Engine tile */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.95,
          transform: isAnimating ? 'none' : 'rotate(0deg) scale(0.85)',
          animation: isAnimating ? 'paperPlane6StepFlight 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
          willChange: 'transform, opacity'
        }}
      >
        <PaperPlaneMark size={24} color="#FF9A6B" planeColor="#FF6B35" />
      </div>
    </>
  );
}
