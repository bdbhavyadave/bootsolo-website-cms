import ContactForm from './ContactForm'

export default function GlobalContact() {
  return (
    <section className="section" id="global-contact" style={{ background: 'var(--frost)', borderTop: '1px solid var(--border)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 className="sec-title" style={{ marginBottom: '24px' }}>Ready to climb?</h2>
            <p className="sec-lead" style={{ marginBottom: '32px' }}>
              Whether you need a full marketing engine built from scratch, or just want to run an AI audit on your current funnels — we’re here to help you scale smartly.
            </p>
            <p className="sec-lead" style={{ fontSize: '16px' }}>
              Fill out the form with a few details about your goals, and our team will get back to you with a personalized route map tailored to your exact terrain. No pitch, just strategy.
            </p>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-1)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--fg1)', marginBottom: '24px' }}>Let's talk</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
