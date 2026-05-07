import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Digital Marketing & Growth Services | Web3 & AI Marketing',
  description: 'Web3 marketing, AI marketing automation, performance marketing, and SEO services. Scale your digital presence with proven strategies.',
}

export default function MarketingPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>Digital Marketing & Growth Strategy</h1>
          <p>Scale your digital presence with data-driven marketing for Web3, AI, and emerging tech</p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-content">
          <div className="service-detail-text">
            <h2>Web3 & Blockchain Marketing</h2>
            <p>Specialized marketing for blockchain projects, NFTs, and DeFi platforms. We understand Web3 communities, crypto markets, and how to build authority in decentralized spaces.</p>
            <ul className="service-detail-features">
              <li>Community building and management</li>
              <li>Token launch marketing</li>
              <li>NFT campaign strategy</li>
              <li>Discord/Telegram community growth</li>
              <li>Web3 influencer partnerships</li>
            </ul>
            <p className="pricing-note">Pricing: $1,000 - $15,000/month</p>
            <Link href="/contact?service=Marketing" className="btn btn-primary">Grow Your Web3 Project</Link>
          </div>
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Web3 Community Illustration]</span>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-content">
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[AI Automation Illustration]</span>
          </div>
          <div className="service-detail-text">
            <h2>AI Marketing & Automation</h2>
            <p>Leverage AI to scale your marketing. Email automation, predictive analytics, personalization, and chatbot-driven customer engagement. We build systems that work while you sleep.</p>
            <ul className="service-detail-features">
              <li>Marketing automation setup</li>
              <li>AI-driven email campaigns</li>
              <li>Chatbot development</li>
              <li>Predictive analytics dashboards</li>
              <li>Lead scoring and nurturing</li>
            </ul>
            <p className="pricing-note">Pricing: $1,000 - $10,000/month</p>
            <Link href="/contact?service=Marketing" className="btn btn-primary">Automate Your Marketing</Link>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-content">
          <div className="service-detail-text">
            <h2>Performance Marketing & Growth</h2>
            <p>Results-driven marketing focused on ROI. Paid advertising, conversion rate optimization, funnel building, and growth experiments. Pay for results that matter.</p>
            <ul className="service-detail-features">
              <li>Google Ads & SEO strategy</li>
              <li>Social media advertising</li>
              <li>Conversion rate optimization</li>
              <li>Funnel design and optimization</li>
              <li>Growth hacking experiments</li>
            </ul>
            <p className="pricing-note">Pricing: $1,000 - $25,000/month</p>
            <Link href="/contact?service=Marketing" className="btn btn-primary">Grow Your Revenue</Link>
          </div>
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Growth Chart Illustration]</span>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-content">
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[SEO & Content Illustration]</span>
          </div>
          <div className="service-detail-text">
            <h2>Content & SEO Strategy</h2>
            <p>Build organic authority with strategic content and SEO. We handle keyword research, content creation, on-page optimization, and technical SEO.</p>
            <ul className="service-detail-features">
              <li>Keyword research and competitive analysis</li>
              <li>Content calendar and strategy</li>
              <li>Blog and article writing</li>
              <li>On-page SEO optimization</li>
              <li>Backlink building</li>
            </ul>
            <p className="pricing-note">Pricing: $1,000 - $5,000/month</p>
            <Link href="/contact?service=Marketing" className="btn btn-primary">Build Your Content Engine</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: 'white' }}>Proven Results</h2>
          </div>
          <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="trust-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 8 }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>10x</h3>
              <p style={{ color: 'white', fontSize: '1.1rem' }}>Grew Web3 community from 5K to 50K members in 6 months</p>
            </div>
            <div className="trust-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 8 }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>240%</h3>
              <p style={{ color: 'white', fontSize: '1.1rem' }}>Improved conversion rate through funnel optimization</p>
            </div>
            <div className="trust-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 8 }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>$2.3M</h3>
              <p style={{ color: 'white', fontSize: '1.1rem' }}>Generated in revenue with AI marketing automation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Marketing Services Pricing</h2>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Startup Tier</h3>
              <div className="pricing-price">$1k - $3k<span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}>/mo</span></div>
              <p style={{ color: '#666', marginBottom: '2rem' }}>Strategy + basic execution for early-stage companies.</p>
              <ul className="service-detail-features" style={{ textAlign: 'left' }}>
                <li>SEO Audit</li>
                <li>Content Calendar</li>
                <li>Basic Ads Setup</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Growth Tier</h3>
              <div className="pricing-price">$3k - $10k<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', fontWeight: 'normal' }}>/mo</span></div>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>Full marketing execution and rapid scaling experiments.</p>
              <ul className="service-detail-features" style={{ textAlign: 'left' }}>
                <li style={{ color: 'white' }}>Dedicated Growth Manager</li>
                <li style={{ color: 'white' }}>Full Ads Management</li>
                <li style={{ color: 'white' }}>SEO & Content Creation</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise Tier</h3>
              <div className="pricing-price">$10k+<span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}>/mo</span></div>
              <p style={{ color: '#666', marginBottom: '2rem' }}>Dedicated team + custom strategy for market leaders.</p>
              <ul className="service-detail-features" style={{ textAlign: 'left' }}>
                <li>Full Marketing Department</li>
                <li>Custom Dashboards</li>
                <li>PR & Influencer Outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lead-capture-section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Scale?</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem' }}>Get a free growth audit and custom marketing roadmap.</p>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
