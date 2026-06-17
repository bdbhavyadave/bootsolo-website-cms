import Link from 'next/link'

export default function Footer() {
  const companyName = process.env.NEXT_PUBLIC_SITE_NAME || "bootsolo"
  const email = process.env.ADMIN_EMAIL || "contact@example.com"
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 style={{ fontSize: '18px', fontWeight: 'var(--w-semi)', marginBottom: 'var(--s-3)', color: '#EEF3F8' }}>{companyName}</h3>
            <p style={{ color: 'var(--navy-300)', fontSize: '14px', lineHeight: '1.6' }}>Start solo. Climb fast. AI-native marketing for bootstrapped solopreneurs.</p>
          </div>
          
          <div className="footer-section">
            <h4>Routes</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services/development">Development</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link href="/services/development">MVP Building</Link></li>
              <li><Link href="/services/marketing">AI Marketing</Link></li>
              <li><Link href="/services/consulting">Scale Consulting</Link></li>
            </ul>
          </div>
          
          <div className="footer-section footer-contact">
            <h4>Basecamp</h4>
            <p style={{ color: 'var(--navy-300)', fontSize: '14px', marginBottom: 'var(--s-2)' }}>Email: {email}</p>
            <p style={{ color: 'var(--navy-300)', fontSize: '14px' }}>Remote, asynchronous, built for solo founders.</p>
            <div style={{ marginTop: 'var(--s-4)' }}>
              <Link href="/contact" className="btn btn-ice btn-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={{ color: 'var(--navy-400)', fontSize: '13px' }}>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
