import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          {process.env.NEXT_PUBLIC_SITE_NAME || "Agency"}
        </Link>
        <button className="mobile-menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/services/development">Development</Link>
          <Link href="/services/marketing">Marketing</Link>
          <Link href="/services/consulting">Consulting</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}
