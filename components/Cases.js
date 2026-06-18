import { ArrowRight, CheckCircle2 } from 'lucide-react'

const SUCCESS_BULLETS = [
  "Stronger AI and organic visibility in core service categories",
  "Better conversion from paid and organic landing pages",
  "Faster content production with better strategic direction",
  "More consistent lead follow-up through automation",
  "Clearer reporting tied to pipeline and business outcomes",
];

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
        <div className="case-link">Read the story <ArrowRight size={14} /></div>
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section className="section" id="work" style={{ background: 'var(--bg-inset)' }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">The work</span>
          <h2 className="sec-title">What success can look like</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          {SUCCESS_BULLETS.map((bullet, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 size={18} color="var(--brand)" style={{ flexShrink: 0 }} />
              <span className="ds-body" style={{ fontSize: '16px' }}>{bullet}</span>
            </div>
          ))}
        </div>

        <div className="cases">
          {CASES.map(c => <CaseCard key={c.t} {...c} />)}
        </div>
      </div>
    </section>
  );
}
