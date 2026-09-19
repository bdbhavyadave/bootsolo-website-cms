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
  Palette 
} from 'lucide-react'

const SERVICES_NAV_DATA = [
  {
    id: "seo-aeo-geo",
    title: "SEO / AEO / GEO",
    icon: Search,
    slug: "/seo-aeo-geo",
    badge: "3 Sub-Tabs Active",
    tagline: "Be discovered across traditional search engines, AI answer engines, and LLM chat interfaces.",
    subColumns: [
      {
        name: "SEO",
        tag: "Traditional Search",
        link: "/seo-aeo-geo?tab=seo",
        desc: "Dominate Google & Bing rankings with technical architecture, high-intent keywords, and authority backlinks.",
        items: [
          "Technical Site Audits & Core Web Vitals",
          "High-Intent Keyword Architecture",
          "Digital PR & Authority Backlinks",
          "Programmatic Landing Pages"
        ]
      },
      {
        name: "AEO",
        tag: "Answer Engines",
        link: "/seo-aeo-geo?tab=aeo",
        desc: "Capture direct answers in Google AI Overviews, Perplexity, and voice search with structured entity graphs.",
        items: [
          "Schema & JSON-LD Entity Graph",
          "Zero-Click Query Capture",
          "Perplexity & SearchGPT Optimization",
          "FAQ & Conversational Knowledge Bases"
        ]
      },
      {
        name: "GEO",
        tag: "Generative AI",
        link: "/seo-aeo-geo?tab=geo",
        desc: "Ensure your brand is cited and recommended inside ChatGPT, Claude, Gemini, and copilot models.",
        items: [
          "LLM Knowledge Base Inclusion",
          "Brand Sentiment & Model Training Citations",
          "Competitor Displacement Prompts",
          "Multi-Model Recommendation Testing"
        ]
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
        desc: "Deploy multivariate ad creatives and targeting models tailored to real-time intent signals.",
        items: [
          "Predictive Audience Modeling",
          "AI Creative Generation & Variations",
          "Dynamic Budget Allocation",
          "Automated Campaign Testing"
        ]
      },
      {
        name: "Vibe Marketing",
        tag: "Viral & Trend",
        link: "/ai-powered-marketing",
        desc: "Connect culturally and build resonant messaging that drives organic community excitement.",
        items: [
          "Trend Velocity Spotting",
          "Cultural Resonance Campaigns",
          "Micro-Community Infiltration",
          "Interactive Memetic Content"
        ]
      },
      {
        name: "Marketing Automation",
        tag: "Operations",
        link: "/ai-powered-marketing",
        desc: "Automated nurture streams, CRM triggers, and predictive lifecycle engagement funnels.",
        items: [
          "Custom Zapier / Make / n8n Pipelines",
          "Dynamic Email Sequences",
          "Behavioral Lead Scoring",
          "Automated Lead Handoff to Sales"
        ]
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
        desc: "Capture high-intent buyers on Google Ads, Bing Ads, and programmatic networks.",
        items: [
          "Google Ads (Search, Shopping, PMax)",
          "Intent-Driven Bidding Strategies",
          "Negative Keyword & Waste Elimination",
          "Competitive Conquesting Ads"
        ]
      },
      {
        name: "Paid Social Growth",
        tag: "Scale",
        link: "/performance-lead-generation",
        desc: "Convert audiences on Meta, LinkedIn, TikTok, and Twitter/X with creative-first funnels.",
        items: [
          "LinkedIn B2B Account Targeting",
          "Meta Ads (Scale & Retargeting)",
          "Direct-Response Video Ads",
          "Full-Funnel Attribution Modeling"
        ]
      },
      {
        name: "CRO & Lead Gen",
        tag: "Conversion",
        link: "/performance-lead-generation",
        desc: "Transform inbound traffic into qualified demo bookings and closed transactions.",
        items: [
          "Frictionless Landing Page UX",
          "A/B & Multivariate Split Testing",
          "Interactive Lead Magnets & Quizzes",
          "CRM Pipeline Integration"
        ]
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
        desc: "Data-driven research reports, whitepapers, case studies, and editorial essays.",
        items: [
          "Original Industry Research Reports",
          "In-Depth Case Studies & Teardowns",
          "SEO Pillar & Cluster Hubs",
          "Newsletter & Publication Strategy"
        ]
      },
      {
        name: "Motion & Video Production",
        tag: "Engagement",
        link: "/content-video-thought-leadership",
        desc: "Compelling product demos, 3D motion graphics, and high-retention social video clips.",
        items: [
          "Product Walkthroughs & Explainer Videos",
          "High-Retention Short-Form (Reels/Shorts)",
          "3D Product Visualizations",
          "Motion Ad Creative Packages"
        ]
      },
      {
        name: "Thought Leadership",
        tag: "Executive PR",
        link: "/content-video-thought-leadership",
        desc: "Turn your founders and leadership team into recognized keynote and industry voices.",
        items: [
          "Founder Ghostwriting & LinkedIn Presence",
          "Podcast Guest Placements & Prep",
          "Keynote Presentation Design",
          "Tier-1 Industry Column Contributorship"
        ]
      }
    ]
  },
  {
    id: "web-ecommerce-experience",
    title: "Web & Ecommerce",
    icon: Layout,
    slug: "/web-ecommerce-experience",
    badge: "Modern Web",
    tagline: "Lightning-fast Jamstack websites, high-converting Shopify stores, and web apps.",
    subColumns: [
      {
        name: "Web Design & Dev",
        tag: "Next.js & Jamstack",
        link: "/web-ecommerce-experience",
        desc: "Bespoke digital experiences built for speed, storytelling, and enterprise credibility.",
        items: [
          "Next.js & React Architecture",
          "Figma to Pixel-Perfect Code",
          "Headless CMS Integration",
          "95+ Google PageSpeed Scores"
        ]
      },
      {
        name: "Ecommerce Optimization",
        tag: "Shopify / Custom",
        link: "/web-ecommerce-experience",
        desc: "Scale average order value, streamline checkout, and build recurring subscription engines.",
        items: [
          "Custom Shopify Plus Development",
          "Cart & Checkout Conversion Tweaks",
          "Upsell & Cross-Sell Flow Architecture",
          "Speed & Mobile Optimization"
        ]
      },
      {
        name: "Interactive Experiences",
        tag: "Web Apps",
        link: "/web-ecommerce-experience",
        desc: "Custom calculators, 3D product visualizers, and self-service customer tools.",
        items: [
          "ROI & Pricing Calculators",
          "Interactive Product Demos",
          "Micro-Animations & WebGL Accents",
          "Design System Components"
        ]
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
        desc: "Logo systems, typography palettes, vibrant color harmonies, and icon sets.",
        items: [
          "Logo Mark & Wordmark Design",
          "Typography & Visual Tokens",
          "Color Strategy & Dark/Light Themes",
          "Comprehensive Brand Styleguides"
        ]
      },
      {
        name: "Brand Positioning",
        tag: "Strategy",
        link: "/branding",
        desc: "Clarify your core value proposition, brand archetype, and differentiation narrative.",
        items: [
          "Competitive Differentiation Matrix",
          "Mission, Vision & Tone Guidelines",
          "Brand Narrative & Elevator Pitch",
          "Go-to-Market Messaging Playbooks"
        ]
      },
      {
        name: "Brand Assets & Collateral",
        tag: "Collateral",
        link: "/branding",
        desc: "Investor pitch decks, sales enablement one-pagers, swag, and social branding kits.",
        items: [
          "High-Stakes Pitch Deck Decks",
          "Sales One-Pagers & Fact Sheets",
          "Social Media Kit & Templates",
          "Physical & Digital Packaging Assets"
        ]
      }
    ]
  }
];

export default function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('seo-aeo-geo');

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
            
            <div className="mega-menu mega-split-menu">
              {/* Left Sidebar */}
              <div className="mega-sidebar">
                <div className="mega-sidebar-header">Our Services</div>
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

              {/* Right Content Area */}
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
                          View All Details <ArrowRight size={13} />
                        </Link>
                      </div>

                      {/* 3-Column Sub-Categories */}
                      <div className="mega-subcols-grid">
                        {service.subColumns.map((col, idx) => (
                          <div key={idx} className="mega-subcol-card">
                            <div className="mega-subcol-header">
                              <Link href={col.link} className="mega-subcol-name-link">
                                <span className="mega-subcol-name">{col.name}</span>
                                <span className="mega-subcol-tag">{col.tag}</span>
                              </Link>
                            </div>
                            <p className="mega-subcol-desc">{col.desc}</p>
                            <ul className="mega-subcol-links">
                              {col.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link href={col.link} className="mega-subcol-link">
                                    <span className="subcol-link-bullet">›</span>
                                    <span>{item}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Mega Footer Bar */}
                      <div className="mega-footer-bar">
                        <span>Looking for a tailored strategy combining multiple capabilities?</span>
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
      </div>

      {/* Slide-In Mobile Navigation Drawer - Only rendered when opened to prevent desktop overflow */}
      {isOpen && (
        <>
          <div
            className="mobile-drawer-backdrop active"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="mobile-drawer active">
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
                  {SERVICES_NAV_DATA.map((item) => {
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
        </>
      )}
    </nav>
  );
}
