import Link from 'next/link'
import { Check } from 'lucide-react'

const TIERS = [
  {
    name: "Basecamp", amt: "Free", per: "", feat: false,
    desc: "Your route map and first wins. No card, no catch — just somewhere to start.",
    feats: ["Marketing route map", "AI visibility check", "3 next-move recommendations", "Founder community"],
    cta: "Start free", btn: "btn-ghost",
  },
  {
    name: "Climber", amt: "$290", per: "/ mo", feat: true,
    desc: "Your AI marketing team. Where most bootstrapped founders start the climb.",
    feats: ["Everything in Basecamp", "AI agents writing & launching", "Get-found-by-AI setup", "Email & lifecycle automation", "Plain-language dashboard"],
    cta: "Start the climb", btn: "btn-primary",
  },
  {
    name: "Summit", amt: "$690", per: "/ mo", feat: false,
    desc: "More firepower when you've found traction and want to move faster.",
    feats: ["Everything in Climber", "Paid campaign management", "Custom agent workflows", "Monthly strategy call", "Priority support"],
    cta: "Talk to us", btn: "btn-ghost",
  },
];

function PriceCard({ name, amt, per, desc, feats, cta, btn, feat }) {
  return (
    <div className={"price-card" + (feat ? " feat" : "")}>
      {feat && <div className="price-tag">Most popular</div>}
      <div className="price-name">{name}</div>
      <div className="price-amt">{amt}{per && <span> {per}</span>}</div>
      <div className="price-desc">{desc}</div>
      <ul className="price-feats">
        {feats.map(f => <li key={f}><Check size={17} />{f}</li>)}
      </ul>
      <Link className={"btn " + btn} href="#cta" style={{ width: "100%", justifyContent: "center" }}>{cta}</Link>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Pricing</span>
          <h2 className="sec-title">Priced for a backpack, not a boardroom</h2>
          <p className="sec-lead">Start free. Upgrade when it's paying for itself. Cancel any time — no contracts, no guilt.</p>
        </div>
        <div className="price-grid">
          {TIERS.map(t => <PriceCard key={t.name} {...t} />)}
        </div>
      </div>
    </section>
  );
}
