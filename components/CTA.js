'use client';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { PaperPlaneMark } from './Brand';

export default function CTA() {
  return (
    <section className="cta dark" id="cta" style={{ background: 'var(--summit)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <div className="cta-box" style={{ background: 'var(--navy-850)', border: '1px solid var(--navy-700)', borderRadius: 'var(--r-md)', padding: '80px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-pop)' }}>
          {/* Radial Ambient Glow */}
          <div className="cta-glow" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 90% at 50% 120%, rgba(255,107,53,0.32), transparent 70%)', pointerEvents: 'none' }} />

          {/* Animated Soaring Paper Plane Mark Accent */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', borderRadius: '999px', background: 'rgba(255,107,53,0.15)', color: 'var(--sunrise-300)', border: '1px solid rgba(255,107,53,0.3)', marginBottom: '24px' }}>
            <PaperPlaneMark size={18} color="#FF9A6B" planeColor="#FF6B35" />
            <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Start Solo. Climb Fast.</span>
          </div>

          {/* Headline */}
          <h2 className="cta-t" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.08, color: '#EEF3F8', margin: '0 auto 18px', maxWidth: '720px' }}>
            Ready to grow faster?
          </h2>

          {/* Subheadline */}
          <p className="cta-s" style={{ fontSize: '18px', color: 'var(--navy-300)', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            Tell us where you want to go. We'll show you the fastest way there, strategy first, AI-accelerated second.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" href="/custom-quote" style={{ height: '50px', padding: '0 32px', fontSize: '16px', boxShadow: 'var(--glow-sunrise)' }}>
              Book a Growth Call <ArrowRight size={18} />
            </Link>
            <a className="btn btn-ghost" href="mailto:hello@bootsolo.com" style={{ height: '50px', padding: '0 28px', fontSize: '16px', borderColor: 'var(--navy-600)', color: '#EEF3F8' }}>
              <Mail size={18} style={{ marginRight: '6px' }} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
