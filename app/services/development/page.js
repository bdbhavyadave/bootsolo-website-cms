import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Blockchain & AI Development Services | Enterprise Solutions',
  description: 'Custom blockchain, Web3, AI, and web app development. Expert development team with proven track record. Starting at $2,500.',
}

export default function DevelopmentPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>Blockchain, AI & Web Development Services</h1>
          <p>Enterprise-grade solutions for Web3, AI, and custom software</p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-content">
          <div className="service-detail-text">
            <h2>Blockchain & Web3 Solutions</h2>
            <p>Custom blockchain applications, smart contracts, DeFi protocols, and Web3 infrastructure. We build scalable, secure solutions for enterprises entering the blockchain space. Whether you need Ethereum, Solana, or custom chains—we deliver.</p>
            <ul className="service-detail-features">
              <li>Smart contract development and audits</li>
              <li>DeFi protocol development</li>
              <li>NFT platforms and marketplaces</li>
              <li>Blockchain infrastructure setup</li>
              <li>Web3 wallet integration</li>
            </ul>
            <p className="pricing-note">Pricing: $2,500 - $50,000+</p>
            <Link href="/contact?service=Development" className="btn btn-primary">Discuss Your Blockchain Project</Link>
          </div>
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Abstract Blockchain Illustration]</span>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-content">
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Abstract AI Illustration]</span>
          </div>
          <div className="service-detail-text">
            <h2>AI & Generative AI Solutions</h2>
            <p>Custom AI models, machine learning pipelines, and GenAI integrations. From predictive analytics to large language model applications, we build AI solutions that drive real business value.</p>
            <ul className="service-detail-features">
              <li>Custom ML model development</li>
              <li>GenAI integration (ChatGPT, Claude, etc.)</li>
              <li>Computer vision applications</li>
              <li>Natural language processing</li>
              <li>AI-powered automation workflows</li>
            </ul>
            <p className="pricing-note">Pricing: $2,500 - $50,000+</p>
            <Link href="/contact?service=Development" className="btn btn-primary">Explore AI Solutions</Link>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-content">
          <div className="service-detail-text">
            <h2>Web2, Web3 & Mobile Apps</h2>
            <p>Full-stack web applications, progressive web apps, and native mobile development. Built with modern tech stacks (React, Vue, Next.js, Node.js) and deployed for scale.</p>
            <ul className="service-detail-features">
              <li>React/Vue.js frontend development</li>
              <li>Node.js/Python backend services</li>
              <li>Mobile apps (iOS/Android)</li>
              <li>Progressive Web Apps (PWA)</li>
              <li>API design and microservices</li>
            </ul>
            <p className="pricing-note">Pricing: $2,500 - $75,000+</p>
            <Link href="/contact?service=Development" className="btn btn-primary">Start Your Web Project</Link>
          </div>
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Abstract Web Apps Illustration]</span>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-content">
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Abstract DevOps Illustration]</span>
          </div>
          <div className="service-detail-text">
            <h2>From Concept to Scale</h2>
            <p>We handle everything: from rapid MVP development to production-ready deployment. Our process includes architecture planning, development, testing, security audits, and ongoing optimization.</p>
            <ul className="service-detail-features">
              <li>Rapid prototyping (4-8 weeks)</li>
              <li>Full MVP development</li>
              <li>Security and code audits</li>
              <li>Deployment and DevOps</li>
              <li>Ongoing maintenance and scaling</li>
            </ul>
            <p className="pricing-note">Pricing: $2,500+</p>
            <Link href="/contact?service=Development" className="btn btn-primary">Plan Your Project</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Development Process</h2>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h3>Discovery & Planning (2 weeks)</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>We work with your stakeholders to define requirements, assess feasibility, and create a comprehensive roadmap.</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h3>Architecture & Design (2-3 weeks)</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>System architecture design, technology selection, and UI/UX wireframing.</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h3>Development & Testing (6-12 weeks)</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>Agile development sprints with continuous integration, unit testing, and regular stakeholder updates.</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h3>Launch & Optimization (2 weeks)</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>Deployment to production environments, security audits, and performance tuning.</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h3>Support & Scaling (ongoing)</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>SLA-backed maintenance, feature iteration, and infrastructure scaling as your user base grows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Development Services Pricing</h2>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Project Tier</h3>
              <div className="pricing-price">$2,500 - $10k</div>
              <p style={{ color: '#666', marginBottom: '2rem' }}>Small feature development, integrations, and audits.</p>
              <ul className="service-detail-features" style={{ textAlign: 'left' }}>
                <li>Rapid turnaround</li>
                <li>Fixed scope</li>
                <li>Dedicated PM</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Mid-Scale Tier</h3>
              <div className="pricing-price">$10k - $50k</div>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>Full app development, MVPs, and smart contracts.</p>
              <ul className="service-detail-features" style={{ textAlign: 'left' }}>
                <li style={{ color: 'white' }}>Full-stack team</li>
                <li style={{ color: 'white' }}>Agile sprints</li>
                <li style={{ color: 'white' }}>Architecture planning</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise Tier</h3>
              <div className="pricing-price">$50k+</div>
              <p style={{ color: '#666', marginBottom: '2rem' }}>Custom solutions, ongoing partnerships, and scale.</p>
              <ul className="service-detail-features" style={{ textAlign: 'left' }}>
                <li>Dedicated engineers</li>
                <li>SLA support</li>
                <li>DevOps management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lead-capture-section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Start Building?</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem' }}>Get a free technical consultation to discuss your roadmap.</p>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
