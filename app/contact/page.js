import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Contact Us | Enterprise Blockchain & AI Solutions',
  description: 'Get in touch with our experts to discuss how we can help your business navigate blockchain, AI, and digital transformation.',
}

export default function ContactPage() {
  const email = process.env.ADMIN_EMAIL || 'contact@example.com'
  
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: '1rem' }}>Have questions? Let's discuss how we can help your business.</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light)', padding: '2rem 0 6rem' }}>
        <div className="container contact-layout">
          <div>
            <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Send a Message</h2>
              <LeadForm compact={false} />
            </div>
          </div>
          
          <div>
            <div className="contact-info-card" style={{ position: 'sticky', top: '120px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Contact Information</h3>
              
              <div className="contact-info-item">
                <h4>Email Us</h4>
                <p><a href={`mailto:${email}`} style={{ color: 'var(--accent)' }}>{email}</a></p>
              </div>
              
              <div className="contact-info-item">
                <h4>Response Time</h4>
                <p>We respond within 24 business hours.</p>
              </div>

              <div className="contact-info-item" style={{ marginTop: '3rem' }}>
                <h4>Global Presence</h4>
                <p style={{ marginBottom: '0.5rem' }}>🇺🇸 United States</p>
                <p style={{ marginBottom: '0.5rem' }}>🇪🇺 Europe</p>
                <p style={{ marginBottom: '0.5rem' }}>🇦🇪 Middle East</p>
                <p>🇸🇬 Asia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
