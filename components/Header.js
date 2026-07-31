import Link from 'next/link'
import Brand from './Brand'
import { ChevronDown } from 'lucide-react'

const SERVICES_MEGA = [
  {
    title: "AI-Powered Marketing",
    slug: "/ai-powered-marketing",
    headline: "AI-Powered Campaigns & Automation",
    services: "AI powered marketing; Vibe Marketing; Marketing Automation and automated funnel optimization"
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
    title: "Content, Video & Thought Leadership",
    slug: "/content-video-thought-leadership",
    headline: "Content, Video & Authority Building",
    services: "Content Marketing; Video and motion designing; Thought leadership"
  },
  {
    title: "Web & Ecommerce Experience",
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
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Brand />
        <div className="nav-links">
          
          <div className="nav-item-has-mega">
            <Link href="#services" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Services <ChevronDown size={14} />
            </Link>
            
            <div className="mega-menu">
              <div className="mega-menu-grid">
                {SERVICES_MEGA.map((item) => (
                  <Link key={item.slug} href={item.slug} className="mega-item">
                    <div className="mega-item-title">{item.title}</div>
                    <div className="mega-item-headline">{item.headline}</div>
                    <div className="mega-item-services">{item.services}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/pricing" style={{ display: 'flex', alignItems: 'center' }}>Pricing</Link>
          <Link href="/work" style={{ display: 'flex', alignItems: 'center' }}>Work</Link>
          <Link href="/resources" style={{ display: 'flex', alignItems: 'center' }}>Resources</Link>
          <Link href="/blogs" style={{ display: 'flex', alignItems: 'center' }}>Blogs</Link>
        </div>
        <div className="nav-spacer"></div>
        <Link className="btn btn-ghost btn-sm" href="/custom-quote">Request Custom Quote</Link>
        <Link className="btn btn-primary btn-sm glow-sunrise" href="/custom-quote" aria-label="Book a Growth Call">
          Book a Growth Call
        </Link>
      </div>
    </nav>
  );
}
