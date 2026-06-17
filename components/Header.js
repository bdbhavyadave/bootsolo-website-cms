import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          <span className="tile">
            <svg width="20" height="20" viewBox="0 0 72 72" fill="none">
              <path d="M36 14 L62 70 H10 L36 14 Z" fill="#FF6B35"/>
              <path d="M36 14 L48 42 L36 36 L24 42 L36 14 Z" fill="#F7F5F1"/>
              <circle cx="62" cy="26" r="7" fill="#F4B740"/>
            </svg>
          </span>
          bootsolo
        </Link>
        <button className="mobile-menu-btn">
          <Menu size={24} />
        </button>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/services/development">Development</Link>
          <Link href="/services/marketing">Marketing</Link>
          <Link href="/services/consulting">Consulting</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="btn btn-primary btn-sm">Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}
