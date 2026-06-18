import { CheckCircle2 } from 'lucide-react';

export default function ProofBar() {
  const trustItems = [
    "Trusted by SaaS, tech services, D2C, and early-stage growth teams",
    "AI-first execution with human strategy",
    "Lean monthly engagement models",
    "Focused on pipeline, leads, revenue, and visibility"
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 className="ds-h3" style={{ marginBottom: '16px' }}>Built for founders who need traction, not theater</h2>
        <p className="ds-body" style={{ color: 'var(--fg2)', marginBottom: '32px' }}>
          You do not need a 12-person agency to get serious marketing momentum. You need the right strategy, the right systems, and execution that compounds across search, AI discovery, content, campaigns, and conversion.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', textAlign: 'left' }}>
          {trustItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <CheckCircle2 size={18} color="var(--brand)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span className="ds-body" style={{ fontSize: '15px' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
