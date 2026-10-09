'use client';

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Brand from './Brand'
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight,
  Search, 
  Sparkles, 
  TrendingUp, 
  Video, 
  Layout, 
  Palette,
  Laptop,
  ShoppingBag,
  Building2,
  HeartPulse,
  GraduationCap,
  Coins,
  ShieldCheck,
  Smartphone,
  Briefcase
} from 'lucide-react'

const SERVICES_NAV_DATA = [
  {
    id: "seo-aeo-geo",
    title: "SEO / AEO / GEO",
    icon: Search,
    slug: "/seo-aeo-geo",
    badge: "3 Interactive Sub-Tabs",
    tagline: "Be discovered across Google search, AI answer engines, and LLM chat interfaces.",
    subColumns: [
      {
        name: "SEO Tab",
        tag: "Traditional Search",
        link: "/seo-aeo-geo?tab=seo",
        desc: "Dominate Google & Bing organic rankings with technical architecture and high-intent keyword clustering.",
        cta: "Explore SEO Tab"
      },
      {
        name: "AEO Tab",
        tag: "Answer Engines",
        link: "/seo-aeo-geo?tab=aeo",
        desc: "Capture direct answers in Google AI Overviews and Perplexity with structured schema entity graphs.",
        cta: "Explore AEO Tab"
      },
      {
        name: "GEO Tab",
        tag: "Generative AI",
        link: "/seo-aeo-geo?tab=geo",
        desc: "Ensure your brand is recommended and cited inside ChatGPT, Claude, and Gemini model answers.",
        cta: "Explore GEO Tab"
      }
    ]
  },
  {
    id: "ai-powered-marketing",
    title: "AI-Powered Marketing",
    icon: Sparkles,
    slug: "/ai-powered-marketing",
    badge: "Next-Gen Growth",
    tagline: "Scale acquisition, creative testing, and multi-channel workflows with custom AI pipelines.",
    subColumns: [
      {
        name: "AI Campaigns",
        tag: "Ad Automation",
        link: "/ai-powered-marketing",
        desc: "Predictive audience modeling, automated creative variations, and dynamic budget allocation.",
        cta: "View AI Campaigns"
      },
      {
        name: "Vibe Marketing",
        tag: "Viral & Trend",
        link: "/ai-powered-marketing",
        desc: "Trend-spotting, cultural resonance, and viral memetic campaigns that build high-energy community.",
        cta: "View Vibe Marketing"
      },
      {
        name: "Marketing Automation",
        tag: "Operations",
        link: "/ai-powered-marketing",
        desc: "Automated nurture streams, behavioral lead scoring, and automated handoffs to sales.",
        cta: "View Automation"
      }
    ]
  },
  {
    id: "performance-lead-generation",
    title: "Performance & Lead Gen",
    icon: TrendingUp,
    slug: "/performance-lead-generation",
    badge: "Revenue Engine",
    tagline: "High-ROI paid search, paid social, and conversion funnels engineered for predictable pipeline.",
    subColumns: [
      {
        name: "Paid Search & Display",
        tag: "High Intent",
        link: "/performance-lead-generation",
        desc: "Capture high-intent buyers on Google & Bing with intent-driven bidding and competitor conquesting.",
        cta: "Explore Paid Search"
      },
      {
        name: "Paid Social Growth",
        tag: "Targeted Scale",
        link: "/performance-lead-generation",
        desc: "Convert decision-makers on LinkedIn and Meta with direct-response creative and attribution tracking.",
        cta: "Explore Paid Social"
      },
      {
        name: "CRO & Lead Gen",
        tag: "Conversion",
        link: "/performance-lead-generation",
        desc: "Frictionless landing pages, multivariate split testing, and interactive calculators that double conversions.",
        cta: "Explore CRO"
      }
    ]
  },
  {
    id: "content-video-thought-leadership",
    title: "Content, Video & Authority",
    icon: Video,
    slug: "/content-video-thought-leadership",
    badge: "Authority",
    tagline: "High-impact storytelling, short-form motion design, and executive thought leadership.",
    subColumns: [
      {
        name: "Content Marketing",
        tag: "Inbound",
        link: "/content-video-thought-leadership",
        desc: "Data-backed industry research reports, case study teardowns, and high-ranking SEO content clusters.",
        cta: "Explore Content"
      },
      {
        name: "Motion & Video",
        tag: "Engagement",
        link: "/content-video-thought-leadership",
        desc: "Product explainer videos, high-retention short-form clips, and 3D product motion graphics.",
        cta: "Explore Video"
      },
      {
        name: "Thought Leadership",
        tag: "Executive PR",
        link: "/content-video-thought-leadership",
        desc: "Founder ghostwriting, executive LinkedIn presence, and podcast guest placement strategies.",
        cta: "Explore PR"
      }
    ]
  },
  {
    id: "web-ecommerce-experience",
    title: "Web & Ecommerce",
    icon: Layout,
    slug: "/web-ecommerce-experience",
    badge: "Modern Web",
    tagline: "Lightning-fast Jamstack websites, high-converting Shopify stores, and interactive web apps.",
    subColumns: [
      {
        name: "Web Design & Dev",
        tag: "Next.js & React",
        link: "/web-ecommerce-experience",
        desc: "Bespoke digital experiences built for sub-second speeds, storytelling, and high conversion credibility.",
        cta: "Explore Web Dev"
      },
      {
        name: "Ecommerce Optimization",
        tag: "Shopify / Custom",
        link: "/web-ecommerce-experience",
        desc: "Checkout conversion tweaks, average order value boosts, and automated recurring subscription funnels.",
        cta: "Explore Ecommerce"
      },
      {
        name: "Interactive Tools",
        tag: "Web Apps",
        link: "/web-ecommerce-experience",
        desc: "Custom ROI calculators, self-service assessment tools, and interactive digital demonstrations.",
        cta: "Explore Tools"
      }
    ]
  },
  {
    id: "branding",
    title: "Branding",
    icon: Palette,
    slug: "/branding",
    badge: "Identity",
    tagline: "Unforgettable visual systems, core positioning, and brand collateral that sets you apart.",
    subColumns: [
      {
        name: "Visual Identity",
        tag: "Design System",
        link: "/branding",
        desc: "Logo systems, typography palettes, vibrant color harmonies, and comprehensive brand guidelines.",
        cta: "Explore Identity"
      },
      {
        name: "Brand Positioning",
        tag: "Strategy",
        link: "/branding",
        desc: "Competitive differentiation matrix, value proposition clarity, and GTM messaging playbooks.",
        cta: "Explore Positioning"
      },
      {
        name: "Brand Assets",
        tag: "Collateral",
        link: "/branding",
        desc: "High-stakes investor pitch decks, sales one-pagers, swag, and social branding templates.",
        cta: "Explore Collateral"
      }
    ]
  }
];

const INDUSTRIES_NAV_DATA = [
  {
    featured: true,
    title: "B2B SaaS & Technology",
    slug: "/industries/b2b-saas-technology",
    badge: "New Hub",
    tagline: "More trials, demo bookings & AI search pipeline for software companies.",
    icon: Laptop
  },
  {
    title: "Ecommerce & D2C",
    slug: "/industries#ecommerce-d2c",
    badge: "High Velocity",
    icon: ShoppingBag
  },
  {
    title: "Real Estate",
    slug: "/industries#real-estate",
    badge: "High Ticket",
    icon: Building2
  },
  {
    title: "Healthcare & Wellness",
    slug: "/industries#healthcare-wellness",
    badge: "Regulated",
    icon: HeartPulse
  },
  {
    title: "Education & EdTech",
    slug: "/industries#education-edtech",
    badge: "Enrollments",
    icon: GraduationCap
  },
  {
    title: "Web3 & Blockchain",
    slug: "/industries#web3-blockchain",
    badge: "Emerging Tech",
    icon: Coins
  },
  {
    title: "Fintech & Financial",
    slug: "/industries#fintech-financial",
    badge: "Compliance",
    icon: ShieldCheck
  },
  {
    title: "Mobile Apps & Startups",
    slug: "/industries#mobile-apps-startups",
    badge: "App Store / DAU",
    icon: Smartphone
  },
  {
    title: "Professional Services",
    slug: "/industries#professional-services",
    badge: "B2B Leads",
    icon: Briefcase
  }
];

export default function Header() {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    const updateTab = () => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const tab = params.get('tab');
        if (pathname === '/seo-aeo-geo') {
          setCurrentTab(tab || 'aeo');
        } else {
          setCurrentTab(tab);
        }
      }
    };
    updateTab();
    window.addEventListener('popstate', updateTab);
    return () => window.removeEventListener('popstate', updateTab);
  }, [pathname]);

  if (pathname?.startsWith('/admin')) return null;
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('seo-aeo-geo');

  const isServicesActive = SERVICES_NAV_DATA.some(s => pathname === s.slug || pathname?.startsWith(`${s.slug}/`)) || pathname === '/services';
  const isIndustriesActive = pathname?.startsWith('/industries');
  const isPricingActive = pathname === '/pricing';
  const isResourcesActive = pathname === '/resources';
  const isBlogsActive = pathname === '/blogs' || pathname?.startsWith('/blog');

  // Synchronize mega-menu active tab with current page route
  useEffect(() => {
    const matchedService = SERVICES_NAV_DATA.find(s => pathname === s.slug || pathname?.startsWith(`${s.slug}/`));
    if (matchedService) {
      setActiveServiceTab(matchedService.id);
    }
  }, [pathname]);

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

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
  };

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Brand />

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          
          {/* Services Mega Menu */}
          <div className="nav-item-has-mega">
            <Link 
              href="#services" 
              className={`nav-link-item ${isServicesActive ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              Services <ChevronDown size={14} />
            </Link>
            
            <div className="mega-menu mega-split-menu">
              {/* Left Sidebar */}
              <div className="mega-sidebar">
                <div className="mega-sidebar-header">Capabilities</div>
                {SERVICES_NAV_DATA.map((service) => {
                  const IconComponent = service.icon;
                  const isActive = activeServiceTab === service.id;
                  return (
                    <div
                      key={service.id}
                      className={`mega-tab-btn ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setActiveServiceTab(service.id)}
                    >
                      <Link href={service.slug} className="mega-tab-btn-content">
                        <div className="mega-tab-left">
                          <div className="mega-tab-icon-box">
                            <IconComponent size={16} />
                          </div>
                          <span className="mega-tab-label">{service.title}</span>
                        </div>
                        <ChevronRight size={15} className="mega-tab-arrow" />
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Right Content Area - Streamlined without messy bullet walls */}
              <div className="mega-content-area">
                {SERVICES_NAV_DATA.map((service) => {
                  const isActive = activeServiceTab === service.id;
                  return (
                    <div
                      key={service.id}
                      className={`mega-tab-pane ${isActive ? 'active' : ''}`}
                    >
                      {/* Pane Header */}
                      <div className="mega-pane-header">
                        <div>
                          <div className="mega-pane-title-row">
                            <h3 className="mega-pane-title">{service.title}</h3>
                            <span className="mega-pane-badge">{service.badge}</span>
                          </div>
                          <p className="mega-pane-tagline">{service.tagline}</p>
                        </div>
                        <Link href={service.slug} className="mega-pane-all-link">
                          View Overview <ArrowRight size={13} />
                        </Link>
                      </div>

                      {/* Explicit Interactive Tab Indicator for SEO/AEO/GEO */}
                      {service.id === 'seo-aeo-geo' && (
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(56,182,245,0.08)', border: '1px solid rgba(56,182,245,0.22)', marginBottom: '14px', fontSize: '12px', color: 'var(--ice-700)', fontWeight: 600 }}>
                          <Sparkles size={14} />
                          <span>3 Separate Tabs on this Page: Click any tab below to jump directly into it:</span>
                        </div>
                      )}

                      {/* Clean 3-Column Sub-Cards */}
                      <div className="mega-subcols-grid">
                        {service.subColumns.map((col, idx) => {
                          const isSubColActive = (() => {
                            if (col.link.includes('?tab=')) {
                              const tabVal = col.link.split('?tab=')[1];
                              return pathname === '/seo-aeo-geo' && currentTab === tabVal;
                            }
                            return pathname === col.link;
                          })();

                          return (
                            <div 
                              key={idx} 
                              className={`mega-subcol-card ${isSubColActive ? 'active' : ''}`}
                              style={isSubColActive ? {
                                background: '#FFFFFF',
                                borderColor: 'var(--sunrise)',
                                boxShadow: '0 4px 18px rgba(255, 107, 53, 0.22), 0 0 0 1px var(--sunrise)'
                              } : {}}
                            >
                              <div className="mega-subcol-header">
                                <Link href={col.link} className="mega-subcol-name-link">
                                  <span className="mega-subcol-name" style={isSubColActive ? { color: 'var(--sunrise)' } : {}}>{col.name}</span>
                                  <span className="mega-subcol-tag" style={isSubColActive ? { background: 'rgba(255, 107, 53, 0.15)', color: 'var(--sunrise)' } : {}}>{col.tag}</span>
                                </Link>
                              </div>
                              <p className="mega-subcol-desc" style={{ minHeight: 'unset', marginBottom: '14px' }}>
                                {col.desc}
                              </p>
                              <Link href={col.link} className="mega-subcol-cta" style={isSubColActive ? { color: 'var(--sunrise)', fontWeight: 700 } : {}}>
                                <span>{col.cta}</span>
                                <ArrowRight size={13} />
                              </Link>
                            </div>
                          );
                        })}
                      </div>

                      {/* Mega Footer Bar */}
                      <div className="mega-footer-bar">
                        <span>Need a strategy combining search, AI models &amp; paid acquisition?</span>
                        <Link href="/custom-quote" className="mega-footer-link">
                          Build Custom Route Map <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Link 
            href="/pricing" 
            className={`nav-link-item ${isPricingActive ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Pricing
          </Link>
          
          {/* Industries with Dropdown Sub-Tabs */}
          <div className="nav-item-has-dropdown">
            <Link 
              href="/industries" 
              className={`nav-link-item ${isIndustriesActive ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              Industries <ChevronDown size={14} />
            </Link>

            <div className="industries-dropdown">
              {/* Featured SaaS Hub Card */}
              <div className="industries-dropdown-featured">
                <Link href="/industries/b2b-saas-technology" className="industries-featured-link">
                  <div className="industries-featured-icon">
                    <Laptop size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--summit)' }}>
                        B2B SaaS &amp; Technology
                      </span>
                      <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', padding: '2px 7px', borderRadius: '4px', background: 'rgba(255,107,53,0.14)', color: 'var(--sunrise-700)' }}>
                        Featured Hub
                      </span>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--fg2)', margin: 0, lineHeight: 1.4 }}>
                      More trials, demo bookings &amp; pipeline with AI search visibility and CRO funnels.
                    </p>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--sunrise)', flexShrink: 0 }} />
                </Link>
              </div>

              {/* Grid of Other Sector Sub-Tabs */}
              <div style={{ padding: '8px 10px 4px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', marginBottom: '8px' }}>
                  Industry Playbooks
                </div>
                <div className="industries-dropdown-grid">
                  {INDUSTRIES_NAV_DATA.slice(1).map((ind, idx) => {
                    const IconC = ind.icon;
                    return (
                      <Link key={idx} href={ind.slug} className="industries-dropdown-item">
                        <div className="industries-item-icon">
                          <IconC size={15} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <span className="industries-item-title">{ind.title}</span>
                          <span className="industries-item-badge">{ind.badge}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="industries-dropdown-footer">
                <span>Looking for an industry-specific growth roadmap?</span>
                <Link href="/industries" className="industries-footer-link">
                  View All 12 Industries <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/resources" 
            className={`nav-link-item ${isResourcesActive ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Resources
          </Link>
          <Link 
            href="/blogs" 
            className={`nav-link-item ${isBlogsActive ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Blogs
          </Link>
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
      </div>

      {/* Slide-In Mobile Navigation Drawer */}
      {isOpen && (
        <>
          <div
            className="mobile-drawer-backdrop active"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="mobile-drawer active">
            <div className="mobile-drawer-links">
              
              {/* Mobile Services Accordion */}
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`mobile-drawer-link ${isServicesActive ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>Services</span>
                <ChevronDown size={18} style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
              </button>

              {isServicesOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '12px', marginBottom: '8px' }}>
                  {SERVICES_NAV_DATA.map((item) => {
                    if (item.slug === '/seo-aeo-geo') {
                      return (
                        <div key={item.slug} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <Link
                            href={item.slug}
                            onClick={closeMenu}
                            style={{ fontSize: '14.5px', color: pathname === '/seo-aeo-geo' ? 'var(--sunrise)' : 'var(--sunrise-300)', padding: '4px 0', fontWeight: 600 }}
                          >
                            {item.title}
                          </Link>
                          <div style={{ display: 'flex', gap: '8px', paddingLeft: '6px', marginBottom: '4px' }}>
                            <Link
                              href="/seo-aeo-geo?tab=seo"
                              onClick={closeMenu}
                              style={{
                                fontSize: '11.5px',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                background: pathname === '/seo-aeo-geo' && (currentTab === 'seo' || !currentTab) ? 'var(--sunrise)' : 'rgba(255,255,255,0.08)',
                                color: '#FFFFFF',
                                fontWeight: pathname === '/seo-aeo-geo' && (currentTab === 'seo' || !currentTab) ? 700 : 500,
                                textDecoration: 'none',
                                boxShadow: pathname === '/seo-aeo-geo' && (currentTab === 'seo' || !currentTab) ? '0 2px 8px rgba(255,107,53,0.35)' : 'none'
                              }}
                            >
                              SEO Tab
                            </Link>
                            <Link
                              href="/seo-aeo-geo?tab=aeo"
                              onClick={closeMenu}
                              style={{
                                fontSize: '11.5px',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                background: pathname === '/seo-aeo-geo' && currentTab === 'aeo' ? 'var(--sunrise)' : 'rgba(255,255,255,0.08)',
                                color: '#FFFFFF',
                                fontWeight: pathname === '/seo-aeo-geo' && currentTab === 'aeo' ? 700 : 500,
                                textDecoration: 'none',
                                boxShadow: pathname === '/seo-aeo-geo' && currentTab === 'aeo' ? '0 2px 8px rgba(255,107,53,0.35)' : 'none'
                              }}
                            >
                              AEO Tab
                            </Link>
                            <Link
                              href="/seo-aeo-geo?tab=geo"
                              onClick={closeMenu}
                              style={{
                                fontSize: '11.5px',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                background: pathname === '/seo-aeo-geo' && currentTab === 'geo' ? 'var(--sunrise)' : 'rgba(255,255,255,0.08)',
                                color: '#FFFFFF',
                                fontWeight: pathname === '/seo-aeo-geo' && currentTab === 'geo' ? 700 : 500,
                                textDecoration: 'none',
                                boxShadow: pathname === '/seo-aeo-geo' && currentTab === 'geo' ? '0 2px 8px rgba(255,107,53,0.35)' : 'none'
                              }}
                            >
                              GEO Tab
                            </Link>
                          </div>
                        </div>
                      );
                    }
                    const isSubActive = pathname === item.slug;
                    return (
                      <Link
                        key={item.slug}
                        href={item.slug}
                        onClick={closeMenu}
                        style={{ fontSize: '14.5px', color: isSubActive ? 'var(--sunrise)' : 'var(--sunrise-300)', fontWeight: isSubActive ? 600 : 400, padding: '5px 0' }}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              )}

              <Link href="/pricing" className={`mobile-drawer-link ${isPricingActive ? 'active' : ''}`} onClick={closeMenu}>
                Pricing <ArrowRight size={16} />
              </Link>

              {/* Mobile Industries Accordion */}
              <button
                type="button"
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className={`mobile-drawer-link ${isIndustriesActive ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>Industries</span>
                <ChevronDown size={18} style={{ transform: isIndustriesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
              </button>

              {isIndustriesOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '12px', marginBottom: '8px' }}>
                  <Link
                    href="/industries/b2b-saas-technology"
                    onClick={closeMenu}
                    style={{ fontSize: '14px', color: pathname === '/industries/b2b-saas-technology' ? 'var(--sunrise)' : 'var(--fg1)', fontWeight: 700, padding: '4px 0', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>★ B2B SaaS &amp; Technology</span>
                    <span style={{ fontSize: '10px', background: 'rgba(255,107,53,0.16)', padding: '2px 5px', borderRadius: '3px' }}>NEW</span>
                  </Link>

                  {INDUSTRIES_NAV_DATA.slice(1, 5).map((ind, i) => (
                    <Link
                      key={i}
                      href={ind.slug}
                      onClick={closeMenu}
                      style={{ fontSize: '13.5px', color: 'var(--fg2)', padding: '3px 0' }}
                    >
                      {ind.title}
                    </Link>
                  ))}

                  <Link
                    href="/industries"
                    onClick={closeMenu}
                    style={{ fontSize: '13.5px', color: pathname === '/industries' ? 'var(--sunrise)' : 'var(--sunrise-300)', padding: '5px 0', fontWeight: 600 }}
                  >
                    View All 12 Industries →
                  </Link>
                </div>
              )}

              <Link href="/resources" className={`mobile-drawer-link ${isResourcesActive ? 'active' : ''}`} onClick={closeMenu}>
                Resources <ArrowRight size={16} />
              </Link>
              <Link href="/blogs" className={`mobile-drawer-link ${isBlogsActive ? 'active' : ''}`} onClick={closeMenu}>
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
        </>
      )}
    </nav>
  );
}
