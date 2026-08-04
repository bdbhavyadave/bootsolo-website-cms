'use client';

import { useState } from 'react';
import { PaperPlaneMark } from './Brand';

export default function WhyBootsolo() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const options = [
    {
      id: 'agency',
      title: 'Traditional agency',
      description: 'Too many layers, slow turnaround, reporting that looks polished but rarely says what to do next.',
      featured: false
    },
    {
      id: 'freelancers',
      title: 'A pile of freelancers',
      description: 'Fine for one task, falls apart once SEO, content, ads, automation, and conversion all need to move together, since nobody owns the whole picture.',
      featured: false
    },
    {
      id: 'inhouse',
      title: 'Hiring in-house too early',
      description: 'Right eventually, but expensive now, and unfair to whoever gets handed six channels and one job title.',
      featured: false
    },
    {
      id: 'bootsolo',
      title: 'Bootsolo',
      description: 'One lean partner running AI visibility, content, campaigns, automation, and conversion as a single connected system.',
      featured: true
    }
  ];

  return (
    <section className="section" id="why-bootsolo" style={{ background: 'var(--snow)', padding: '96px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <p className="eyebrow">Built differently, on purpose</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0', color: 'var(--summit)' }}>
            Why founders pick Bootsolo over the usual options
          </h2>
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
                  <a
                    href="/custom-quote"
                    className={`btn ${isBootsolo ? 'btn-primary glow-sunrise' : 'btn-ghost'}`}
                    style={{ width: '100%', justifyContent: 'center', height: '42px', fontSize: '14px' }}
                    aria-label={isBootsolo ? "Book a Growth Call" : "Compare Options"}
                  >
                    {isBootsolo ? 'Book a Growth Call' : 'Compare Options'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verbatim Closing Line */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '16px', color: 'var(--fg2)', fontWeight: 500, fontStyle: 'italic', maxWidth: '640px', margin: '0 auto' }}>
            "You don't need more moving parts. You need an engine sized to where you actually are, not where a sales deck wishes you were."
          </p>
        </div>
      </div>
    </section>
  );
}
