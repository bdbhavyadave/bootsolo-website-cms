import { Radar, Bot, Workflow, Megaphone, LineChart, Compass } from 'lucide-react';

const SERVICES = [
  { icon: Radar, t: "Get found by AI", d: "When buyers ask ChatGPT or Perplexity who to hire, you want your name in the answer. We make that happen." },
  { icon: Bot, t: "Your AI marketing team", d: "Agents that research, write, and launch campaigns for you — like a marketing hire you couldn't afford yet." },
  { icon: Workflow, t: "Automation that runs solo", d: "Set up your emails, follow-ups, and lifecycle once. It keeps working while you build the product." },
  { icon: Megaphone, t: "Campaigns on a budget", d: "Ads and content optimized by AI against real revenue — so every dollar you spend pulls its weight." },
  { icon: LineChart, t: "Numbers you can trust", d: "See what's working in plain language. No vanity metrics, just what's moving your growth." },
  { icon: Compass, t: "A route to follow", d: "Not sure where to start? We map your next three moves so you're never guessing what's next." },
];

function ServiceCard({ icon: Icon, t, d }) {
  return (
    <div className="svc-card">
      <div className="svc-ico"><Icon /></div>
      <div className="svc-t">{t}</div>
      <div className="svc-d">{d}</div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">What we do</span>
          <h2 className="sec-title">Everything a marketing team does — without the headcount</h2>
          <p className="sec-lead">You're wearing every hat already. Hand us the marketing one. We pick up where your budget runs out.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map(s => <ServiceCard key={s.t} {...s} />)}
        </div>
      </div>
    </section>
  );
}
