import Link from 'next/link'
import ContactForm from './ContactForm'

export default function CTA({ 
  title = "Your first step is free.", 
  subtitle = "Tell us where you're stuck. We'll map your next three moves — no cost, no pitch you have to sit through. Fill out the form and our team will get back to you with a custom route map tailored to your exact terrain."
}) {
  return (
    <section className="cta dark" id="contact">
      <div className="wrap">
        <div className="cta-box" style={{ textAlign: 'left', padding: '64px' }}>
          <div className="cta-glow"></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', position: 'relative' }}>
            <div>
              <h2 className="cta-t" style={{ fontSize: '48px' }}>{title}</h2>
              <p className="cta-s" style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--fg2)', marginTop: '24px', maxWidth: '400px' }}>
                {subtitle}
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
