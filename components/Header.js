import Link from 'next/link'
import Brand from './Brand'

export default function Header() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Brand />
        <div className="nav-links">
          <Link href="#services">Services</Link>
          <Link href="#how">How it works</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#work">Work</Link>
        </div>
        <div className="nav-spacer"></div>
        <Link className="btn btn-ghost btn-sm" href="#">Sign in</Link>
        <Link className="btn btn-primary btn-sm" href="#cta">Start the climb</Link>
      </div>
    </nav>
  );
}
