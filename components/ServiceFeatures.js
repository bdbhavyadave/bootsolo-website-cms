export default function ServiceFeatures({ features, title, lead, kick }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head">
          {kick && <span className="kick">{kick}</span>}
          {title && <h2 className="sec-title">{title}</h2>}
          {lead && <p className="sec-lead">{lead}</p>}
        </div>
        <div className="svc-grid">
          {features.map((s, i) => (
            <div className="svc-card" key={i}>
              {s.icon && (
                <div className="svc-ico">
                  <s.icon />
                </div>
              )}
              <div className="svc-t">{s.title}</div>
              <div className="svc-d">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
