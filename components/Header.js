'use client';

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Brand from './Brand'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const SERVICES_MEGA = [
  {
    title: "AI-Powered Marketing",
    slug: "/ai-powered-marketing",
    headline: "AI-Powered Campaigns & Automation",
    services: "AI powered marketing; Vibe Marketing; Marketing Automation"
  },
  {
    title: "SEO / AEO / GEO",
    slug: "/seo-aeo-geo",
    headline: "Search, AI-Engine & Geo Optimization",
    services: "SEO AEO GEO"
  },
  {
    title: "Performance & Lead Generation",
    slug: "/performance-lead-generation",
    headline: "Performance Marketing & Pipeline Growth",
    services: "Paid search; Paid social; CRO; Lead Gen"
  },
  {
    title: "Content, Video & Authority",
    slug: "/content-video-thought-leadership",
    headline: "Content, Video & Authority Building",
    services: "Content Marketing; Motion design; Thought leadership"
  },
  {
    title: "Web & Ecommerce",
    slug: "/web-ecommerce-experience",
    headline: "Web Design, UX & Ecommerce Experiences",
    services: "Web designing; Ecommerce"
  },
  {
    title: "Branding",
    slug: "/branding",
    headline: "Brand Identity & Positioning",
    services: "Branding"
  }
];

export default function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Close drawer on window resize above 992px or on Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setIsOpen(false);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Brand />

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <div className="nav-item-has-mega">
            <Link href="#services" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Services <ChevronDown size={14} />
            </Link>
            
            <div className="mega-menu">
              <div className="mega-menu-grid">
                {SERVICES_MEGA.map((item) => {
                  if (item.slug === '/seo-aeo-geo') {
                    return (
                      <div key={item.slug} className="mega-item mega-item-has-submenu">
                        <Link href="/seo-aeo-geo" className="mega-item-link-wrap">
                          <div className="mega-item-title-row">
                            <span className="mega-item-title">{item.title}</span>
                            <span className="mega-item-pill">3 Tabs</span>
                          </div>
                          <div className="mega-item-headline">{item.headline}</div>
                          <div className="mega-item-services">{item.services}</div>
                        </Link>
                        <div className="mega-suboptions-row">
                          <Link href="/seo-aeo-geo?tab=seo" className="mega-suboption-chip">
                            <div className="mega-suboption-header">
                              <span className="suboption-dot dot-seo"></span>
                              <span>SEO</span>
                            </div>
                            <span className="suboption-tag">Traditional Search</span>
                          </Link>
                          <Link href="/seo-aeo-geo?tab=aeo" className="mega-suboption-chip">
                            <div className="mega-suboption-header">
                              <span className="suboption-dot dot-aeo"></span>
                              <span>AEO</span>
                            </div>
                            <span className="suboption-tag">Answer Engine</span>
                          </Link>
                          <Link href="/seo-aeo-geo?tab=geo" className="mega-suboption-chip">
                            <div className="mega-suboption-header">
                              <span className="suboption-dot dot-geo"></span>
                              <span>GEO</span>
                            </div>
                            <span className="suboption-tag">Generative LLM</span>
                          </Link>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link key={item.slug} href={item.slug} className="mega-item">
                      <div className="mega-item-title">{item.title}</div>
                      <div className="mega-item-headline">{item.headline}</div>
                      <div className="mega-item-services">{item.services}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link href="/pricing" style={{ display: 'flex', alignItems: 'center' }}>Pricing</Link>
          <Link href="/work" style={{ display: 'flex', alignItems: 'center' }}>Work</Link>
          <Link href="/resources" style={{ display: 'flex', alignItems: 'center' }}>Resources</Link>
          <Link href="/blogs" style={{ display: 'flex', alignItems: 'center' }}>Blogs</Link>
        </div>

        <div className="nav-spacer"></div>

        {/* Desktop CTAs */}
        <div className="nav-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link className="btn btn-ghost btn-sm" href="/custom-quote">Request Custom Quote</Link>
          <Link className="btn btn-primary btn-sm glow-sunrise" href="/#growth-roadmap" aria-label="Book a Growth Call">
            Book a Growth Call
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Backdrop Overlay */}
        <div
          className={`mobile-drawer-backdrop ${isOpen ? 'active' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Slide-In Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
          <div className="mobile-drawer-links">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="mobile-drawer-link"
              style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left' }}
            >
              <span>Services</span>
              <ChevronDown size={18} style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
            </button>

            {isServicesOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '12px', marginBottom: '8px' }}>
                {SERVICES_MEGA.map((item) => {
                  if (item.slug === '/seo-aeo-geo') {
                    return (
                      <div key={item.slug} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Link
                          href={item.slug}
                          onClick={closeMenu}
                          style={{ fontSize: '14.5px', color: 'var(--sunrise-300)', padding: '4px 0', fontWeight: 600 }}
                        >
                          {item.title}
                        </Link>
                        <div style={{ display: 'flex', gap: '8px', paddingLeft: '8px', marginBottom: '4px' }}>
                          <Link
                            href="/seo-aeo-geo?tab=seo"
                            onClick={closeMenu}
                            style={{ fontSize: '11.5px', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', color: '#EEF3F8', textDecoration: 'none' }}
                          >
                            SEO
                          </Link>
                          <Link
                            href="/seo-aeo-geo?tab=aeo"
                            onClick={closeMenu}
                            style={{ fontSize: '11.5px', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', color: '#EEF3F8', textDecoration: 'none' }}
                          >
                            AEO
                          </Link>
                          <Link
                            href="/seo-aeo-geo?tab=geo"
                            onClick={closeMenu}
                            style={{ fontSize: '11.5px', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', color: '#EEF3F8', textDecoration: 'none' }}
                          >
                            GEO
                          </Link>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.slug}
                      href={item.slug}
                      onClick={closeMenu}
                      style={{ fontSize: '14.5px', color: 'var(--sunrise-300)', padding: '6px 0' }}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            )}

            <Link href="/pricing" className="mobile-drawer-link" onClick={closeMenu}>
              Pricing <ArrowRight size={16} />
            </Link>
            <Link href="/work" className="mobile-drawer-link" onClick={closeMenu}>
              Work <ArrowRight size={16} />
            </Link>
            <Link href="/resources" className="mobile-drawer-link" onClick={closeMenu}>
              Resources <ArrowRight size={16} />
            </Link>
            <Link href="/blogs" className="mobile-drawer-link" onClick={closeMenu}>
              Blogs <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--navy-700)' }}>
            <Link className="btn btn-ghost" href="/custom-quote" onClick={closeMenu} style={{ justifyContent: 'center', borderColor: 'var(--navy-600)', color: '#EEF3F8' }}>
              Request Custom Quote
            </Link>
            <Link className="btn btn-primary glow-sunrise" href="/#growth-roadmap" onClick={closeMenu} style={{ justifyContent: 'center' }}>
              Book a Growth Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
