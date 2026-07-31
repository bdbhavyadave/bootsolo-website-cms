'use client';

import { useState } from 'react';
import { Quote } from 'lucide-react';
import LogoMarquee from './LogoMarquee';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Locked 3 Testimonials Verbatim
  const testimonials = [
    {
      id: 1,
      quote: "Bootsolo helped us untangle B2B marketing that felt completely scattered. Instead of a pile of random tactics, we finally had one system across SEO, content, landing pages, demand gen, and follow-up. We saw better quality leads within weeks, not quarters.",
      badge: "B2B SaaS Founder"
    },
    {
      id: 2,
      quote: "What stood out was the balance of strategy and execution. We didn't need another agency deck. We needed traction, clarity, and a team that actually understood how buyers in hospitality find brands now, across search, AI, and social.",
      badge: "Hospitality Tech Founder"
    },
    {
      id: 3,
      quote: "Honestly, they felt like part of our own team, not a vendor. Fast to move, sharp on positioning, and focused on ROI instead of vanity metrics.",
      badge: "Indie Startup Founder"
    }
  ];

  return (
    <section className="section" id="testimonials" style={{ background: 'var(--snow)', padding: '100px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <p className="eyebrow">Founder feedback</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0' }}>
            What clients value most
          </h2>
          <p className="ds-lead">
            Bootsolo tends to work best for teams that need senior thinking, fast execution, and a plan they can actually follow. Here's what founders keep telling us matters most.
          </p>
        </div>

        {/* 3 Interactive Testimonial Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {testimonials.map((t, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <div
                key={t.id}
                onClick={() => setActiveIdx(idx)}
                style={{
                  background: isSelected ? 'var(--summit)' : 'var(--bg-elevated)',
                  color: isSelected ? '#EEF3F8' : 'var(--fg1)',
                  borderRadius: 'var(--r-card)',
                  border: isSelected ? '2px solid var(--sunrise)' : '1px solid var(--border)',
                  padding: '32px 28px',
                  boxShadow: isSelected ? 'var(--shadow-2)' : 'var(--shadow-1)',
                  cursor: 'pointer',
                  transition: 'all 170ms var(--ease)',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <Quote size={28} color={isSelected ? 'var(--sunrise-300)' : 'var(--sunrise)'} style={{ marginBottom: '16px', opacity: 0.9 }} />
                  <p style={{ fontSize: '15.5px', lineHeight: 1.6, fontStyle: 'italic', margin: 0, color: isSelected ? '#fff' : 'var(--fg1)' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div>
                  <span className="badge" style={{ background: isSelected ? 'rgba(255,107,53,0.2)' : 'var(--frost)', color: isSelected ? 'var(--sunrise-300)' : 'var(--brand-fg)', fontSize: '12px', fontWeight: 600 }}>
                    {t.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Logo Marquee Strip */}
        <LogoMarquee />
      </div>
    </section>
  );
}
