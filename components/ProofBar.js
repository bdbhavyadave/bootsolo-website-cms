export default function ProofBar() {
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
