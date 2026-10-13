'use client';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { PaperPlaneMark } from './Brand';

export default function CTA({ onOpenModal }) {
  return (
    <section className="cta" id="cta" style={{ background: 'var(--snow, #F7F5F1)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <div
          className="cta-box"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
            border: '1px solid var(--border, rgba(14,26,43,0.12))',
            borderRadius: 'var(--r-md, 18px)',
            padding: '80px 48px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 45px -10px rgba(14,26,43,0.08), 0 2px 6px rgba(14,26,43,0.03)'
          }}
        >
          {/* Subtle Ambient Warm Glow */}
          <div
            className="cta-glow"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 70% 70% at 50% -10%, rgba(255,107,53,0.09), transparent 65%), radial-gradient(ellipse 60% 50% at 50% 115%, rgba(56,182,245,0.07), transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          {/* Animated Soaring Paper Plane Mark Accent */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '999px',
              background: 'rgba(255,107,53,0.08)',
              color: 'var(--sunrise, #FF6B35)',
              border: '1px solid rgba(255,107,53,0.22)',
              marginBottom: '24px',
              position: 'relative'
            }}
          >
            <PaperPlaneMark size={18} color="#FF6B35" planeColor="#E8551F" />
            <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Start Solo. Climb Fast.
            </span>
          </div>

          {/* Headline */}
          <h2
            className="cta-t"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              color: 'var(--summit, #0E1A2B)',
              margin: '0 auto 18px',
              maxWidth: '720px'
            }}
          >
            Ready to grow faster?
          </h2>

          {/* Subheadline */}
          <p
            className="cta-s"
            style={{
              fontSize: '18px',
              color: 'var(--fg2, #51606F)',
              maxWidth: '640px',
              margin: '0 auto 36px',
              lineHeight: 1.6
            }}
          >
            Tell us where you want to go. We'll show you the fastest way to get there powered by strategy, accelerated by AI.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', position: 'relative' }}>
            {onOpenModal ? (
              <button
                type="button"
                onClick={onOpenModal}
                className="btn btn-primary"
                style={{ height: '50px', padding: '0 32px', fontSize: '16px', boxShadow: 'var(--glow-sunrise)', cursor: 'pointer' }}
              >
                Book a Growth Call <ArrowRight size={18} />
              </button>
            ) : (
              <Link className="btn btn-primary" href="/custom-quote" style={{ height: '50px', padding: '0 32px', fontSize: '16px', boxShadow: 'var(--glow-sunrise)' }}>
                Book a Growth Call <ArrowRight size={18} />
              </Link>
            )}
            <a
              className="btn btn-ghost"
              href="mailto:hello@bootsolo.com"
              style={{
                height: '50px',
                padding: '0 28px',
                fontSize: '16px',
                background: '#FFFFFF',
                borderColor: 'var(--border-strong, rgba(14,26,43,0.18))',
                color: 'var(--summit, #0E1A2B)',
                boxShadow: '0 1px 2px rgba(14,26,43,0.05)'
              }}
            >
              <Mail size={18} style={{ marginRight: '6px' }} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
