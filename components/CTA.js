import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA({ 
  title = "Your first step is free.", 
  subtitle = "Tell us where you're stuck. We'll map your next three moves — no cost, no pitch you have to sit through."
}) {
  return (
    <section className="cta dark" id="cta">
      <div className="wrap">
        <div className="cta-box">
          <div className="cta-glow"></div>
          <h2 className="cta-t">{title}</h2>
          <p className="cta-s">{subtitle}</p>
          <Link className="btn btn-primary" href="#global-contact" style={{ position: "relative", height: 48, padding: "0 24px" }}>
            Let's talk <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
