export default function DevelopmentPage() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Blockchain, AI & Web Development Services</h1>
        <p>Enterprise-grade solutions for Web3, AI, and custom software</p>
      </div>

      <section className="service-section">
        <div className="service-content">
          <h2>Blockchain & Web3 Development</h2>
          <p>Custom blockchain applications, smart contracts, DeFi protocols, and Web3 infrastructure.</p>
          <ul>
            <li>Smart contract development and audits</li>
            <li>DeFi protocol development</li>
            <li>NFT platforms and marketplaces</li>
            <li>Blockchain infrastructure setup</li>
            <li>Web3 wallet integration</li>
          </ul>
          <p className="pricing">Starting at <strong>$2,500+</strong></p>
          <button className="cta-button">Discuss Your Blockchain Project</button>
        </div>
      </section>

      <section className="service-section alternate">
        <div className="service-content">
          <h2>AI & Generative AI Solutions</h2>
          <p>Custom AI models, machine learning pipelines, and GenAI integrations.</p>
          <ul>
            <li>Custom ML model development</li>
            <li>GenAI integration (ChatGPT, Claude, etc.)</li>
            <li>Computer vision applications</li>
            <li>Natural language processing</li>
            <li>AI-powered automation workflows</li>
          </ul>
          <p className="pricing">Starting at <strong>$2,500+</strong></p>
          <button className="cta-button">Explore AI Solutions</button>
        </div>
      </section>

      <section className="pricing-tiers">
        <h2>Development Pricing</h2>
        <div className="tiers">
          <div className="tier">
            <h3>Project Tier</h3>
            <p className="price">$2,500 - $10,000</p>
            <p>Small feature development, integrations</p>
          </div>
          <div className="tier featured">
            <h3>Mid-Scale Tier</h3>
            <p className="price">$10,000 - $50,000</p>
            <p>Full app development, smart contracts</p>
          </div>
          <div className="tier">
            <h3>Enterprise Tier</h3>
            <p className="price">$50,000+</p>
            <p>Custom solutions, ongoing partnerships</p>
          </div>
        </div>
      </section>
    </div>
  )
}
