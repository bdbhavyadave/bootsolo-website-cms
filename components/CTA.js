import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA({ 
  title = "Get your next three growth moves", 
  subtitle = "Tell us about your business, goals, and current bottlenecks. We'll send a focused roadmap with practical opportunities across visibility, content, campaigns, automation, and conversion.",
  btnText = "Request your free roadmap",
  href = "/custom-quote",
  microcopy = "No pressure. No bloated proposal. Just strategic direction you can actually use."
}) {
  return (
    <section className="cta dark" id="cta">
      <div className="wrap">
        <div className="cta-box">
          <div className="cta-glow"></div>
          <h2 className="cta-t">{title}</h2>
          <p className="cta-s">{subtitle}</p>
          <Link className="btn btn-primary" href={href} style={{ position: "relative", height: 48, padding: "0 24px" }}>
            {btnText} <ArrowRight size={16} />
          </Link>
          {microcopy && (
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--fg3)', opacity: 0.8 }}>
              {microcopy}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
