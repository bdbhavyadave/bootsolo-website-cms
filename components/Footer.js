import Link from 'next/link'

export default function Footer() {
  const companyName = process.env.NEXT_PUBLIC_SITE_NAME || "Agency"
  const email = process.env.ADMIN_EMAIL || "contact@example.com"
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>{companyName}</h3>
            <p>Premium blockchain, AI, Web3 development and digital marketing solutions.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services/development">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link href="/services/development">Development</Link></li>
              <li><Link href="/services/marketing">Marketing</Link></li>
              <li><Link href="/services/consulting">Consulting</Link></li>
            </ul>
          </div>
          
          <div className="footer-section footer-contact">
            <h4>Contact</h4>
            <p>Email: {email}</p>
            <p>Global Reach. Enterprise-Grade.</p>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/contact" className="btn btn-outline light" style={{ padding: '0.5rem 1rem' }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
