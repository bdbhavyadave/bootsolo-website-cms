import Link from 'next/link'
import { Check } from 'lucide-react'

const DEFAULT_TIERS = [
  {
    name: "Starter Sprint", amt: "", per: "", feat: false,
    desc: "Best for founders who need clarity, a roadmap, and first fixes.",
    feats: ["Marketing route map", "AI visibility check", "Core positioning", "Quick conversion fixes"],
    cta: "Get started", btn: "btn-ghost",
  },
  {
    name: "Growth Engine", amt: "", per: "", feat: true,
    desc: "Best for teams ready for ongoing SEO, content, AI visibility, and automation support.",
    feats: ["AI and search visibility", "Content production engine", "Lifecycle automation", "Monthly growth sprints"],
    cta: "Start the engine", btn: "btn-primary",
  },
  {
    name: "Performance Plus", amt: "", per: "", feat: false,
    desc: "Best for businesses that want integrated paid, organic, and conversion-focused execution.",
    feats: ["Everything in Growth Engine", "Paid campaign management", "Landing page optimization", "Advanced CRO"],
    cta: "Scale faster", btn: "btn-ghost",
  },
];

export function PriceCard({ name, amt, per, desc, feats, cta, btn, feat }) {
  const linkHref = "/custom-quote";
  return (
    <div className={"price-card" + (feat ? " feat" : "")}>
      {feat && <div className="price-tag">Most popular</div>}
      <div className="price-name">{name}</div>
      {amt && <div className="price-amt">{amt}{per && <span> {per}</span>}</div>}
      <div className="price-desc">{desc}</div>
      <ul className="price-feats">
        {feats.map((f, i) => <li key={i}><Check size={17} />{f}</li>)}
      </ul>
      <Link className={"btn " + (btn || "btn-ghost")} href={linkHref} style={{ width: "100%", justifyContent: "center" }}>{cta || "Start the climb"}</Link>
    </div>
  );
}

export default function Pricing({ 
  title = "Flexible engagement models for growing teams", 
  lead = "",
  kick = "Pricing",
  tiers = DEFAULT_TIERS,
  className = "section",
  style = {}
}) {
  return (
    <section className={className} id="pricing" style={style}>
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{kick}</span>
          <h2 className="sec-title">{title}</h2>
          {lead && <p className="sec-lead">{lead}</p>}
        </div>
        <div className="price-grid">
          {tiers.map((t, i) => <PriceCard key={i} {...t} />)}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p className="ds-body" style={{ color: 'var(--fg2)' }}>
            Need a custom mix of services? We'll build a lean plan around your goals, stage, and budget.
          </p>
          <Link href="/custom-quote" style={{ color: 'var(--brand)', fontWeight: 600, marginTop: '8px', display: 'inline-block' }}>Build a custom quote &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
