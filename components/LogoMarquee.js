'use client';

import { useState } from 'react';

export default function LogoMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // 6 Clean placeholder client brand logos
  const clientLogos = [
    { name: 'Acme SaaS', label: 'ACME SAAS' },
    { name: 'IndieStack', label: 'INDIETACK' },
    { name: 'VibeFlow', label: 'VIBEFLOW' },
    { name: 'HyperScale', label: 'HYPERSCALE' },
    { name: 'NomadPulse', label: 'NOMADPULSE' },
    { name: 'SoloMetrics', label: 'SOLOMETRICS' }
  ];

  return (
    <div style={{ margin: '48px 0 0', overflow: 'hidden', position: 'relative' }}>
      {/* Edge gradient masks */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '60px', background: 'linear-gradient(to right, var(--snow), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '60px', background: 'linear-gradient(to left, var(--snow), transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div
        className="marquee-track"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
          width: 'max-content',
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        {/* Render twice for seamless loop */}
        {[...clientLogos, ...clientLogos].map((logo, idx) => (
          <div
            key={idx}
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: 'var(--shadow-1)',
              transition: 'all 170ms var(--ease)'
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '999px', background: 'var(--sunrise)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)', letterSpacing: '0.04em' }}>
              {logo.label}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
