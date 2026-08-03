'use client';

import { useState, useEffect } from 'react';
import { PhoneCall, Sparkles } from 'lucide-react';

export default function StickyCtaBar({ onOpenModal }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 420) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="sticky-cta-bar"
      role="region"
      aria-label="Sticky Growth Call Banner"
    >
      <div className="container sticky-cta-container">
        <div className="sticky-cta-text">
          <span className="sticky-cta-badge font-mono text-xs">
            <Sparkles size={12} color="var(--sunrise)" /> Bootsolo Growth Engine
          </span>
          <span className="sticky-cta-subhead font-body text-sm">
            Smart strategy. Lean execution. Numbers you can defend in a board meeting.
          </span>
        </div>

        {/* Compact Call Icon Button */}
        <button
          onClick={onOpenModal}
          className="sticky-call-icon-btn glow-sunrise"
          aria-label="Book a Growth Call"
          title="Book a Growth Call"
        >
          <PhoneCall size={18} color="#FFFFFF" />
        </button>
      </div>

      <style jsx>{`
        .sticky-cta-bar {
          position: fixed;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 2.5rem);
          max-width: 960px;
          background: rgba(14, 26, 43, 0.94);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
          padding: 0.6rem 1.25rem;
          z-index: 9999;
          box-shadow: 0 16px 36px rgba(14, 26, 43, 0.4);
          animation: slideUp 220ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sticky-cta-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
        }
        .sticky-cta-text {
          display: flex;
          align-items: center;
          gap: 1rem;
          overflow: hidden;
        }
        .sticky-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 107, 53, 0.18);
          border: 1px solid rgba(255, 107, 53, 0.35);
          color: var(--sunrise-300);
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .sticky-cta-subhead {
          color: var(--snow);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .sticky-call-icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--sunrise);
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 170ms cubic-bezier(0.22, 1, 0.36, 1), background 170ms ease;
        }
        .sticky-call-icon-btn:hover {
          transform: scale(1.10);
          background: var(--sunrise-700);
        }
        @media (max-width: 768px) {
          .sticky-cta-bar {
            bottom: 0.75rem;
            width: calc(100% - 1.5rem);
            padding: 0.5rem 1rem;
          }
          .sticky-cta-subhead {
            display: none;
          }
        }
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
