'use client';

import { useState } from 'react';
import { Quote } from 'lucide-react';
import LogoMarquee from './LogoMarquee';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  // 3 Testimonials verbatim from copy
  const testimonials = [
    {
      id: 1,
      quote: "Bootsolo helped us simplify B2B marketing which felt scattered. Instead of random tactics, we finally had a clear growth system across SEO, content, landing pages, Demand generation engine and follow-up. We started seeing better quality leads in weeks.",
      badge: "B2B SaaS Founder"
    },
    {
      id: 2,
      quote: "What stood out was the balance between strategy and execution. We did not need another agency deck for one of our site. We needed traction, clarity, and someone who understood how modern buyers discover brands across search, AI, and social in the hospitality sector.",
      badge: "Hospitality Tech Founder"
    },
    {
      id: 3,
      quote: "They felt like a lean extension of our team. Fast to move, sharp on positioning, and focused on ROI instead of vanity metrics.",
      badge: "Indie Startup Founder"
    }
  ];

  return (
    <section className="section" id="testimonials" style={{ background: 'var(--snow)', padding: '100px 0' }}>
      <div className="wrap">
        {/* Client / Partner Logo Strip (4-6 logos) */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg3)', fontFamily: 'var(--font-mono)' }}>
              Trusted by Bootstrapped Founders &amp; Modern Teams
            </span>
          </div>
          <LogoMarquee />
        </div>

        <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 56px' }}>
          <p className="eyebrow">Founder feedback</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0 16px', color: 'var(--summit)' }}>
            What clients value most
          </h2>
          <p className="ds-lead" style={{ fontSize: '16.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
            Bootsolo works best for teams that need senior thinking, faster execution, and a practical path to growth. These are the kinds of outcomes founders and lean teams usually care about most.
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
      </div>
    </section>
  );
}
