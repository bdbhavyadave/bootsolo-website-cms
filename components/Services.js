'use client';

import Link from 'next/link';
import InteractiveGlobe, { SERVICES } from './InteractiveGlobe';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section className="section" id="services" style={{ background: 'var(--white)', padding: '96px 0' }}>
      <div className="wrap">
        {/* Main Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <p className="eyebrow">What We Do</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.1 }}>
            Seven ways we drive your growth
          </h2>
          <p className="ds-lead" style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6 }}>
            We run the whole marketing engine, start to finish, and we build it so every piece feeds the next one.
          </p>
        </div>

        {/* 1. Global AI Citation & Traction Footprint Interactive 3D Globe */}
        <div style={{ marginBottom: '80px' }}>
          <InteractiveGlobe />
        </div>

        {/* 2. Dedicated Core Services Modules Grid Tiles */}
        <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
          <div style={{ marginBottom: '40px', textAlign: 'left' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--brand-fg)', fontWeight: 700 }}>
              Full-Stack Growth Capability Modules
            </span>
            <h3 className="ds-h3" style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginTop: '8px', color: 'var(--summit)' }}>
              Explore Our Core Service Modules
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-card)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-1)',
                    transition: 'transform var(--dur) var(--ease), border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)'
                  }}
                  className="svc-card-hover"
                >
                  <div>
                    {/* Top Module Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: 'var(--frost)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--brand-fg)'
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <span
                        className="ds-mono"
                        style={{
                          fontSize: '12px',
                          fontWeight: 700,
                          color: 'var(--fg3)',
                          letterSpacing: '0.05em'
                        }}
                      >
                        MODULE 0{svc.id}
                      </span>
                    </div>

                    {/* Title & Eyebrow */}
                    <h4 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                      {svc.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--brand-fg)', fontWeight: 500, margin: '0 0 14px' }}>
                      {svc.eyebrow}
                    </p>
                    <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: '0 0 20px' }}>
                      {svc.headline}
                    </p>

                    {/* Deliverables List */}
                    <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '16px', marginBottom: '24px' }}>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', fontWeight: 600, marginBottom: '10px' }}>
                        Key Deliverables
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {svc.deliverables.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <CheckCircle2 size={15} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span style={{ fontSize: '13.5px', color: 'var(--fg1)', lineHeight: 1.4 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={svc.slug}
                    className="btn btn-ghost"
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      marginTop: 'auto'
                    }}
                  >
                    <span>{svc.ctaText.replace(' →', '')}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
