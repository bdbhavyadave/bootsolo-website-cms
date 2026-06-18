import { AlertCircle } from 'lucide-react';

export default function Problem() {
  const problems = [
    "Your website is live, but not structured to win AI and search visibility.",
    "Your content exists, but it does not consistently generate qualified demand.",
    "Your ads may drive clicks, but the funnel leaks before conversion.",
    "Your CRM and follow-ups are manual, so leads go cold.",
    "Your reporting shows activity, not clear next actions."
  ];

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="ds-h2" style={{ marginBottom: '16px' }}>
            Most small teams are invisible where modern buyers discover brands
          </h2>
          <p className="ds-lead">
            Today's customer journey is fragmented. People search Google, ask AI tools, read comparison content, scan LinkedIn, open email later, and only then decide who to trust.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
          {problems.map((problem, i) => (
            <div key={i} style={{ 
              display: 'flex', alignItems: 'center', gap: '16px', 
              background: 'var(--bg-inset)', padding: '24px', 
              borderRadius: 'var(--r-card)', border: '1px solid var(--border)' 
            }}>
              <AlertCircle size={24} color="var(--sunrise)" style={{ flexShrink: 0 }} />
              <span className="ds-body">{problem}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
