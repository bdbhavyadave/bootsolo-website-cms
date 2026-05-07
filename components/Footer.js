export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>Company</h4>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <a href="/services/development">Development</a>
          <a href="/services/marketing">Marketing</a>
          <a href="/services/consulting">Consulting</a>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="footer-section">
          <h4>Follow</h4>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {currentYear} {process.env.NEXT_PUBLIC_SITE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  )
}
