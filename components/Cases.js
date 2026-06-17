import { ArrowRight } from 'lucide-react'

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
