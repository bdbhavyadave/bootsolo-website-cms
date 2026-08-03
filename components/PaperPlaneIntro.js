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

    // Flight duration: finishes in 2 seconds (2000ms)
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
            zIndex: 90,
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
