export default function ConsultingPage() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Strategic Business & Tech Consulting</h1>
        <p>Navigate blockchain, AI, and digital transformation with expert guidance</p>
      </div>

      <section className="service-section">
        <h2>Free Initial Consultation</h2>
        <p>Not sure where to start? Get a free 1-2 day consulting engagement to assess your needs and build a roadmap.</p>
        <button className="cta-button large">Request Free Consultation</button>
      </section>

      <section className="service-section alternate">
        <h2>Blockchain Readiness Assessment</h2>
        <p>Evaluate if blockchain is right for your business. We conduct thorough assessments and design implementation roadmaps.</p>
        <ul>
          <li>Business case analysis</li>
          <li>Blockchain use-case evaluation</li>
          <li>Implementation roadmap</li>
          <li>Technology stack recommendation</li>
          <li>Risk and compliance review</li>
        </ul>
        <p className="pricing">Starting at <strong>$500+</strong></p>
      </section>

      <section className="service-section">
        <h2>AI Implementation Planning</h2>
        <p>Develop an AI strategy tailored to your business.</p>
        <ul>
          <li>AI opportunity assessment</li>
          <li>Model evaluation and selection</li>
          <li>Implementation planning</li>
          <li>Data strategy and governance</li>
          <li>Team training and change management</li>
        </ul>
        <p className="pricing">Starting at <strong>$500+</strong></p>
      </section>

      <section className="pricing-tiers">
        <h2>Consulting Pricing</h2>
        <div className="tiers">
          <div className="tier">
            <h3>Quick Consultation</h3>
            <p className="price">$500 - $2,500</p>
            <p>1-2 days, specific questions</p>
          </div>
          <div className="tier featured">
            <h3>Project-Based</h3>
            <p className="price">$5,000 - $20,000</p>
            <p>2-4 weeks, strategic planning</p>
          </div>
          <div className="tier">
            <h3>Retainer</h3>
            <p className="price">$2,000 - $5,000/mo</p>
            <p>Ongoing advisor relationship</p>
          </div>
        </div>
        <p className="text-center">💡 Free initial consultation available</p>
      </section>
    </div>
  )
}
