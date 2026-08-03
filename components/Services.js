'use client';

import InteractiveGlobe from './InteractiveGlobe';

export default function Services() {
  return (
    <section className="section" id="services" style={{ background: 'var(--white)', padding: '100px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <p className="eyebrow">What we do</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0' }}>
            Seven ways we drive your growth
          </h2>
          <p className="ds-lead">
            We run the whole marketing engine, start to finish, and we build it so every piece feeds the next one.
          </p>
        </div>

        <InteractiveGlobe />
      </div>
    </section>
  );
}
