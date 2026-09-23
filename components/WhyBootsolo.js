'use client';

import { useState } from 'react';
import { PaperPlaneMark } from './Brand';

export default function WhyBootsolo({ onOpenModal }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const options = [
    {
      id: 'agency',
      title: 'Traditional agency',
      description: 'Too many layers, slower execution, bloated retainers, and reporting that often looks polished but says very little.',
      featured: false
    },
    {
      id: 'freelancers',
      title: 'Freelancer setup',
      description: 'Useful for isolated tasks, but hard to scale when strategy, content, SEO, ads, automation, and conversion all need to work together.',
      featured: false
    },
    {
      id: 'inhouse',
      title: 'Early in-house hire',
      description: 'A good long-term move, but often too expensive and too limited when one person is expected to cover every channel.',
      featured: false
    },
    {
      id: 'bootsolo',
      title: 'Bootsolo',
      description: 'One lean growth partner that connects AI visibility, content, campaigns, automation, and conversion into one working system. Clear priorities. Clear execution. Clear next steps.',
      featured: true
    }
  ];

  return (
    <section className="section" id="why-bootsolo" style={{ background: 'var(--snow)', padding: '96px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
          <p className="eyebrow">Built differently</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0 16px', color: 'var(--summit)' }}>
            Why founders choose Bootsolo over the usual options
          </h2>
          <p className="ds-lead" style={{ fontSize: '16.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
            Most growing businesses get stuck between expensive agencies, disconnected freelancers, or trying to build an in-house team too early. Bootsolo gives you the strategy of a senior team, the speed of AI-native execution, and a lean model built for companies that need results without extra layers.
          </p>
        </div>

        {/* 4 Comparison Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px', alignItems: 'stretch' }}>
          {options.map((opt) => {
            const isBootsolo = opt.featured;
            return (
              <div
                key={opt.id}
                onMouseEnter={() => setHoveredCard(opt.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: isBootsolo ? 'var(--summit)' : 'var(--bg-elevated)',
                  color: isBootsolo ? '#EEF3F8' : 'var(--fg1)',
                  borderRadius: 'var(--r-card)',
                  border: isBootsolo ? '2px solid var(--sunrise)' : '1px solid var(--border)',
                  boxShadow: isBootsolo ? 'var(--glow-sunrise)' : 'var(--shadow-1)',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transform: isBootsolo || hoveredCard === opt.id ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 170ms var(--ease)'
                }}
              >
                {/* Bootsolo Accent Badge */}
                {isBootsolo && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--sunrise)',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      whiteSpace: 'nowrap',
                      boxShadow: 'var(--glow-sunrise)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <PaperPlaneMark size={14} color="#fff" planeColor="#fff" />
                    <span>FOUNDER CHOICE</span>
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, margin: '8px 0 14px', color: isBootsolo ? '#fff' : 'var(--fg1)' }}>
                    {opt.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: isBootsolo ? 'var(--navy-300)' : 'var(--fg2)', margin: 0 }}>
                    {opt.description}
                  </p>
                </div>

                <div style={{ marginTop: '28px' }}>
                  {isBootsolo && onOpenModal ? (
                    <button
                      type="button"
                      onClick={onOpenModal}
                      className="btn btn-primary glow-sunrise"
                      style={{ width: '100%', justifyContent: 'center', height: '42px', fontSize: '14px', cursor: 'pointer' }}
                      aria-label="Book a Growth Call"
                    >
                      Book a Growth Call
                    </button>
                  ) : (
                    <a
                      href={isBootsolo ? "/custom-quote" : "/custom-quote"}
                      className={`btn ${isBootsolo ? 'btn-primary glow-sunrise' : 'btn-ghost'}`}
                      style={{ width: '100%', justifyContent: 'center', height: '42px', fontSize: '14px' }}
                      aria-label={isBootsolo ? "Book a Growth Call" : "Compare Options"}
                    >
                      {isBootsolo ? 'Book a Growth Call' : 'Compare Options'}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verbatim Closing Line */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '16.5px', color: 'var(--fg1)', fontWeight: 500, maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            "You do not need more moving parts. You need a smarter marketing engine that fits your stage, budget, and growth ambition."
          </p>
        </div>
      </div>
    </section>
  );
}
