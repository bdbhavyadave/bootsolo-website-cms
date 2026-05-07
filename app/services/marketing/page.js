export default function MarketingPage() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Digital Marketing & Growth Strategy</h1>
        <p>Scale your digital presence with data-driven marketing</p>
      </div>

      <section className="service-section">
        <h2>Web3 & Blockchain Marketing</h2>
        <p>Specialized marketing for blockchain projects, NFTs, and DeFi platforms.</p>
        <ul>
          <li>Community building and management</li>
          <li>Token launch marketing</li>
          <li>NFT campaign strategy</li>
          <li>Discord/Telegram community growth</li>
          <li>Web3 influencer partnerships</li>
        </ul>
        <p className="pricing">Starting at <strong>$1,000+/month</strong></p>
        <button className="cta-button">Grow Your Web3 Project</button>
      </section>

      <section className="pricing-tiers">
        <h2>Marketing Services Pricing</h2>
        <div className="tiers">
          <div className="tier">
            <h3>Startup Tier</h3>
            <p className="price">$1,000 - $3,000/mo</p>
            <p>Strategy + basic execution</p>
          </div>
          <div className="tier featured">
            <h3>Growth Tier</h3>
            <p className="price">$3,000 - $10,000/mo</p>
            <p>Full marketing execution</p>
          </div>
          <div className="tier">
            <h3>Enterprise Tier</h3>
            <p className="price">$10,000+/mo</p>
            <p>Dedicated team + custom strategy</p>
          </div>
        </div>
      </section>
    </div>
  )
}
