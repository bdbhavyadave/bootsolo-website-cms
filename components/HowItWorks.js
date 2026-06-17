const STEPS = [
  { n: "01", st: "Base camp", sd: "We look at where you are today — your site, your funnel, where buyers can't find you. You keep the map whether or not we climb together." },
  { n: "02", st: "Gear up", sd: "We set up your AI agents and automation around your product and your people. Content, campaigns, and the plumbing behind them." },
  { n: "03", st: "Keep climbing", sd: "Leads grow, costs drop, and the system keeps optimizing itself. You watch every step move in your dashboard." },
];

export default function HowItWorks() {
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
