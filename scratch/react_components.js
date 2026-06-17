// --- 89ef3b17-fcc2-4e5a-a28f-1e7cfe3ff967 ---
/* Bootsolo website — brand, nav, hero, social proof */

function Bolt({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M26 12 L46 52 H6 L26 12 Z" fill="#FF6B35" />
      <path d="M26 12 L34 30 L26 26 L18 30 L26 12 Z" fill="#F7F5F1" />
      <circle cx="47" cy="20" r="6" fill="#F4B740" />
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top">
      <span className="tile"><Bolt /></span>
      bootsolo
    </a>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Brand />
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#work">Work</a>
        </div>
        <div className="nav-spacer"></div>
        <a className="btn btn-ghost btn-sm" href="#">Sign in</a>
        <a className="btn btn-primary btn-sm" href="#cta">Start the climb</a>
      </div>
    </nav>
  );
}

function SummitArt() {
  return (
    <svg className="hero-svg" viewBox="0 0 960 720" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A tracked route climbing a snowy summit at sunrise">
      <rect width="960" height="720" fill="#0E1A2B" />
      <g fill="#EEF3F8" opacity="0.6">
        <circle cx="80" cy="90" r="2" /><circle cx="160" cy="150" r="1.5" /><circle cx="120" cy="220" r="1.5" />
        <circle cx="250" cy="80" r="1.5" /><circle cx="320" cy="170" r="2" /><circle cx="60" cy="300" r="1.5" />
      </g>
      <circle cx="730" cy="180" r="98" fill="#F4B740" opacity="0.13" />
      <circle cx="730" cy="180" r="62" fill="#F4B740" />
      <polygon points="0,480 140,360 250,450 380,330 520,440 640,350 780,450 900,370 960,440 960,720 0,720" fill="#35506F" />
      <polygon points="380,330 430,400 350,400" fill="#E2E8F0" opacity="0.85" />
      <polygon points="640,350 685,415 595,415" fill="#E2E8F0" opacity="0.85" />
      <polygon points="660,300 880,650 460,650" fill="#1B2D45" />
      <polygon points="660,300 705,375 620,375" fill="#E2E8F0" opacity="0.9" />
      <polygon points="400,120 770,650 50,650" fill="#16263B" />
      <polygon points="400,120 500,312 444,292 400,332 356,300 300,322 400,120" fill="#F7F5F1" />
      <path d="M300,632 L470,566 L300,500 L470,432 L325,366 L445,300 L362,238 L400,168" fill="none" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round" strokeDasharray="1 16" />
      <circle cx="470" cy="566" r="7" fill="#FF6B35" />
      <circle cx="325" cy="366" r="11" fill="#FF6B35" stroke="#0E1A2B" strokeWidth="3" />
      <circle cx="325" cy="366" r="3.5" fill="#fff" />
      <path d="M400 100 a20 20 0 0 1 20 20 c0 15 -20 40 -20 40 c0 0 -20 -25 -20 -40 a20 20 0 0 1 20 -20 Z" fill="#FF6B35" />
      <circle cx="400" cy="120" r="8" fill="#fff" />
      <polygon points="0,648 220,612 440,656 660,616 960,652 960,720 0,720" fill="#E2E8F0" />
      <polygon points="0,672 260,648 520,680 760,652 960,676 960,720 0,720" fill="#F7F5F1" />
    </svg>
  );
}

function Hero() {
  return (
    <header className="hero dark" id="top">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="kick">Marketing for bootstrapped founders</span>
          <h1 className="h-display">
            Start solo.<br />
            <span className="accent">Climb fast.</span>
          </h1>
          <p className="h-sub">
            You've got a budget that fits in a backpack and a mountain to climb. We're the
            AI-native marketing team that gets you moving — no agency retainer, no fluff,
            just the next step up.
          </p>
          <div className="h-cta">
            <a className="btn btn-primary" href="#cta">Start the climb <i data-lucide="arrow-right"></i></a>
            <a className="btn btn-ghost" href="#work">See the routes</a>
          </div>
          <div className="h-note"><i data-lucide="check"></i> No retainers. Cancel anytime. Built for limited budgets.</div>
        </div>
        <div className="hero-art"><SummitArt /></div>
      </div>
    </header>
  );
}

function ProofBar() {
  const names = ["Northwind", "Parallel", "Loomly", "Cortex", "Vantage", "Pier9"];
  return (
    <section className="proof-bar">
      <div className="wrap">
        <div className="lbl">Founders who started solo and kept climbing with us</div>
        <div className="logos">
          {names.map(n => <span key={n}>{n}</span>)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Bolt, Brand, Nav, Hero, ProofBar });


// --- 85b8f6df-2f45-4567-9f2f-46da5a0d4dd3 ---
/* Bootsolo website — services grid + how it works */

const SERVICES = [
  { icon: "radar", t: "Get found by AI", d: "When buyers ask ChatGPT or Perplexity who to hire, you want your name in the answer. We make that happen." },
  { icon: "bot", t: "Your AI marketing team", d: "Agents that research, write, and launch campaigns for you — like a marketing hire you couldn't afford yet." },
  { icon: "workflow", t: "Automation that runs solo", d: "Set up your emails, follow-ups, and lifecycle once. It keeps working while you build the product." },
  { icon: "megaphone", t: "Campaigns on a budget", d: "Ads and content optimized by AI against real revenue — so every dollar you spend pulls its weight." },
  { icon: "line-chart", t: "Numbers you can trust", d: "See what's working in plain language. No vanity metrics, just what's moving your growth." },
  { icon: "compass", t: "A route to follow", d: "Not sure where to start? We map your next three moves so you're never guessing what's next." },
];

function ServiceCard({ icon, t, d }) {
  return (
    <div className="svc-card">
      <div className="svc-ico"><i data-lucide={icon}></i></div>
      <div className="svc-t">{t}</div>
      <div className="svc-d">{d}</div>
    </div>
  );
}

function Services() {
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

const STEPS = [
  { n: "01", st: "Base camp", sd: "We look at where you are today — your site, your funnel, where buyers can't find you. You keep the map whether or not we climb together." },
  { n: "02", st: "Gear up", sd: "We set up your AI agents and automation around your product and your people. Content, campaigns, and the plumbing behind them." },
  { n: "03", st: "Keep climbing", sd: "Leads grow, costs drop, and the system keeps optimizing itself. You watch every step move in your dashboard." },
];

function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">How it works</span>
          <h2 className="sec-title">Three steps. You could start this week.</h2>
        </div>
        <div className="steps">
          {STEPS.map(s => (
            <div className="step" key={s.n}>
              <div className="n">{s.n}</div>
              <div className="st">{s.st}</div>
              <div className="sd">{s.sd}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, HowItWorks });


// --- 0517c4cb-31e6-4434-ae0e-68177d727c5d ---
/* Bootsolo website — pricing (3-tier, middle featured) */

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
        {feats.map(f => <li key={f}><i data-lucide="check"></i>{f}</li>)}
      </ul>
      <a className={"btn " + btn} href="#cta" style={{ width: "100%", justifyContent: "center" }}>{cta}</a>
    </div>
  );
}

function Pricing() {
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

Object.assign(window, { Pricing });


// --- e21f71f8-3aa3-4e35-a45e-dfa61bacc91e ---
/* Bootsolo website — case studies + FAQ */

const CASES = [
  { big: "+312%", v: false, t: "How a solo SaaS founder tripled signups in a quarter", tag: "Solo SaaS" },
  { big: "−58%", v: true, t: "A bootstrapped D2C brand halved its cost per sale", tag: "D2C" },
  { big: "4.1×", v: false, t: "From invisible to the AI answer box in 60 days", tag: "Indie app" },
];

function CaseCard({ big, v, t, tag }) {
  return (
    <div className="case-card">
      <div className="case-thumb"><span className={"big" + (v ? " v" : "")}>{big}</span></div>
      <div className="case-body">
        <span className="kick" style={{ color: "var(--fg3)" }}>{tag}</span>
        <div className="case-t" style={{ marginTop: 8 }}>{t}</div>
        <div className="case-link">Read the story <i data-lucide="arrow-right"></i></div>
      </div>
    </div>
  );
}

function Cases() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">The work</span>
          <h2 className="sec-title">Founders who kept climbing</h2>
        </div>
        <div className="cases">
          {CASES.map(c => <CaseCard key={c.t} {...c} />)}
        </div>
      </div>
    </section>
  );
}

const QS = [
  { q: "I'm a team of one. Is this overkill?", a: "That's exactly who we built this for. Basecamp is free and gets you a route map plus your first wins — no commitment. You add the AI team when you're ready, not before." },
  { q: "What does 'get found by AI' actually mean?", a: "When someone asks ChatGPT or Perplexity for a tool like yours, you want to be in the answer. We set up your site and content so the AI engines recommend you — it's the new word of mouth." },
  { q: "How fast will I see something?", a: "Your route map lands in days. Real movement in signups and cost usually shows in the first 60–90 days. We won't promise overnight — but every step compounds." },
  { q: "Am I locked into a contract?", a: "Never. Everything's month to month, and Basecamp is free for as long as you want. If it ever stops being worth it, you walk — no hard feelings." },
];

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className={"faq-item" + (open ? " open" : "")}>
      <button className="faq-q" onClick={onClick}>
        {q} <i data-lucide="plus"></i>
      </button>
      <div className="faq-a">{a}</div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">FAQ</span>
          <h2 className="sec-title">Real questions from real founders</h2>
        </div>
        <div className="faq">
          {QS.map((item, i) => (
            <FAQItem key={i} {...item} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Cases, FAQ });


// --- 8c541615-498b-42d0-96d3-f611240cff83 ---
/* Bootsolo website — CTA banner + footer */

function CTA() {
  return (
    <section className="cta dark" id="cta">
      <div className="wrap">
        <div className="cta-box">
          <div className="cta-glow"></div>
          <h2 className="cta-t">Your first step is free.</h2>
          <p className="cta-s">Tell us where you're stuck. We'll map your next three moves — no cost, no pitch you have to sit through.</p>
          <a className="btn btn-primary" href="#" style={{ position: "relative", height: 48, padding: "0 24px" }}>
            Get my free route <i data-lucide="arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

const FOOT = [
  { h: "What we do", links: ["Get found by AI", "AI marketing team", "Automation", "Campaigns"] },
  { h: "Company", links: ["The routes", "About", "Join us", "Contact"] },
  { h: "Resources", links: ["Founder guides", "Free route map", "Blog", "Changelog"] },
];

function Footer() {
  return (
    <footer className="footer dark">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <Brand />
            <p className="foot-tag">The AI-native marketing team for bootstrapped founders. Start solo, climb fast — on a budget that fits in a backpack.</p>
          </div>
          {FOOT.map(c => (
            <div className="foot-col" key={c.h}>
              <h5>{c.h}</h5>
              {c.links.map(l => <a href="#" key={l}>{l}</a>)}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 Bootsolo, Inc.</span>
          <span>For the ones who started solo.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CTA, Footer });


