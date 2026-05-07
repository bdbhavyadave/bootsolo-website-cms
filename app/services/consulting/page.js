import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Business & Tech Consulting | Blockchain, AI, Digital Transformation',
  description: 'Strategic consulting for blockchain, AI implementation, and digital transformation. Free initial consultation available.',
}

export default function ConsultingPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>Strategic Business & Tech Consulting</h1>
          <p>Navigate blockchain, AI, and digital transformation with expert guidance</p>
        </div>
      </section>

      <section className="service-detail-section" style={{ background: 'var(--white)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Start with a Free Consultation</h2>
          <p style={{ fontSize: '1.25rem', color: '#555', maxWidth: 800, margin: '0 auto 3rem' }}>
            Not sure where to start? Get a free 1-2 day consulting engagement to assess your needs, explore opportunities, and build a roadmap together. No commitments, no hidden fees.
          </p>
          <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '3rem' }}>
            <div className="trust-item"><h4 style={{ color: 'var(--accent)' }}>Free Initial Assessment</h4></div>
            <div className="trust-item"><h4 style={{ color: 'var(--accent)' }}>Actionable Recommendations</h4></div>
            <div className="trust-item"><h4 style={{ color: 'var(--accent)' }}>No Sales Pressure</h4></div>
            <div className="trust-item"><h4 style={{ color: 'var(--accent)' }}>Clear Next Steps</h4></div>
          </div>
          <Link href="#consultation" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Request Free Consultation</Link>
        </div>
      </section>

      <section className="service-detail-section" style={{ background: 'var(--light)' }}>
        <div className="container service-detail-content">
          <div className="service-detail-text">
            <h2>Blockchain Readiness Assessment</h2>
            <p>Evaluate if blockchain is right for your business. We conduct thorough assessments, design implementation roadmaps, and prepare your organization for blockchain adoption.</p>
            <ul className="service-detail-features">
              <li>Business case analysis</li>
              <li>Blockchain use-case evaluation</li>
              <li>Implementation roadmap</li>
              <li>Technology stack recommendation</li>
              <li>Risk and compliance review</li>
            </ul>
            <p className="pricing-note">Pricing: $500 - $25,000 (project-based)</p>
          </div>
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Blockchain Assessment Illustration]</span>
          </div>
        </div>
      </section>

      <section className="service-detail-section" style={{ background: 'var(--white)' }}>
        <div className="container service-detail-content">
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[AI Strategy Illustration]</span>
          </div>
          <div className="service-detail-text">
            <h2>AI Strategy & Implementation</h2>
            <p>Develop an AI strategy tailored to your business. From identifying opportunities to building implementation plans and managing AI projects to completion.</p>
            <ul className="service-detail-features">
              <li>AI opportunity assessment</li>
              <li>Model evaluation and selection</li>
              <li>Implementation planning</li>
              <li>Data strategy and governance</li>
              <li>Team training and change management</li>
            </ul>
            <p className="pricing-note">Pricing: $500 - $20,000 (project-based)</p>
          </div>
        </div>
      </section>

      <section className="service-detail-section" style={{ background: 'var(--light)' }}>
        <div className="container service-detail-content">
          <div className="service-detail-text">
            <h2>Digital Transformation Strategy</h2>
            <p>Transform your business with modern technology. We guide you through organizational change, technology adoption, and optimization for the digital age.</p>
            <ul className="service-detail-features">
              <li>Current state assessment</li>
              <li>Digital strategy development</li>
              <li>Process optimization</li>
              <li>Change management support</li>
              <li>Success metrics and KPIs</li>
            </ul>
            <p className="pricing-note">Pricing: $500 - $30,000 (project-based)</p>
          </div>
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Digital Transformation Illustration]</span>
          </div>
        </div>
      </section>

      <section className="service-detail-section" style={{ background: 'var(--white)' }}>
        <div className="container service-detail-content">
          <div className="service-detail-image-placeholder" style={{ background: '#f0f0f0', height: 400, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Architecture Illustration]</span>
          </div>
          <div className="service-detail-text">
            <h2>Technology Evaluation & Architecture</h2>
            <p>Evaluate new technologies, assess your current tech stack, and design scalable architectures. We bring 15+ years of experience across enterprise systems.</p>
            <ul className="service-detail-features">
              <li>Technology landscape evaluation</li>
              <li>Architecture design and review</li>
              <li>Tech debt assessment</li>
              <li>Tool and platform recommendations</li>
              <li>Build vs. buy analysis</li>
            </ul>
            <p className="pricing-note">Pricing: $500 - $15,000 (project-based)</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: 'white' }}>How We Consult</h2>
          </div>
          <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="trust-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 8 }}>
              <div className="process-step-number" style={{ position: 'relative', marginBottom: '1rem', margin: '0 auto' }}>1</div>
              <h4 style={{ color: 'white' }}>Assessment</h4>
              <p style={{ color: '#ccc' }}>Deep dive into your business.</p>
            </div>
            <div className="trust-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 8 }}>
              <div className="process-step-number" style={{ position: 'relative', marginBottom: '1rem', margin: '0 auto' }}>2</div>
              <h4 style={{ color: 'white' }}>Strategy</h4>
              <p style={{ color: '#ccc' }}>Develop clear roadmap.</p>
            </div>
            <div className="trust-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 8 }}>
              <div className="process-step-number" style={{ position: 'relative', marginBottom: '1rem', margin: '0 auto' }}>3</div>
              <h4 style={{ color: 'white' }}>Planning</h4>
              <p style={{ color: '#ccc' }}>Create actionable plans.</p>
            </div>
            <div className="trust-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 8 }}>
              <div className="process-step-number" style={{ position: 'relative', marginBottom: '1rem', margin: '0 auto' }}>4</div>
              <h4 style={{ color: 'white' }}>Support</h4>
              <p style={{ color: '#ccc' }}>Execute and optimize.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Consulting Services Pricing</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '1rem' }}>💡 Free initial consultation available for all tiers</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Quick Consultation</h3>
              <div className="pricing-price">$500 - $2.5k</div>
              <p style={{ color: '#666', marginBottom: '2rem' }}>1-2 days, perfect for addressing specific questions or hurdles.</p>
              <ul className="service-detail-features" style={{ textAlign: 'left' }}>
                <li>Architecture Review</li>
                <li>Tech Stack Check</li>
                <li>Brainstorming Session</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Project-Based</h3>
              <div className="pricing-price">$5k - $20k</div>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>2-4 weeks, ideal for comprehensive strategic planning.</p>
              <ul className="service-detail-features" style={{ textAlign: 'left' }}>
                <li style={{ color: 'white' }}>In-depth Assessment</li>
                <li style={{ color: 'white' }}>Implementation Roadmap</li>
                <li style={{ color: 'white' }}>Executive Presentation</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Retainer</h3>
              <div className="pricing-price">$2k - $5k<span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}>/mo</span></div>
              <p style={{ color: '#666', marginBottom: '2rem' }}>Ongoing advisor relationship and strategic support.</p>
              <ul className="service-detail-features" style={{ textAlign: 'left' }}>
                <li>Weekly Syncs</li>
                <li>On-call Advice</li>
                <li>Board Advisory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="lead-capture-section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Request Your Free Consultation</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem' }}>Let's discuss how we can transform your business.</p>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
