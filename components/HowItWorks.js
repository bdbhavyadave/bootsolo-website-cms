const STEPS = [
  { n: "01", st: "Audit the terrain", sd: "We review your website, visibility, funnel, content, and current channels to identify the biggest growth gaps and quickest wins." },
  { n: "02", st: "Build the system", sd: "We set up the core foundations: positioning, search and AI visibility, content priorities, automation flows, campaigns, and conversion improvements." },
  { n: "03", st: "Scale what works", sd: "Once the engine starts moving, we optimize relentlessly - improving rankings, increasing qualified traffic, reducing wasted spend, and turning insights into the next growth sprint." },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">How it works</span>
          <h2 className="sec-title">Simple to start. Built to compound.</h2>
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
