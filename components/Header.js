import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          {process.env.NEXT_PUBLIC_SITE_NAME}
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/services/development">Development</Link>
          <Link href="/services/marketing">Marketing</Link>
          <Link href="/services/consulting">Consulting</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
