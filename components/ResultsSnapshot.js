'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, X } from 'lucide-react';

export default function ResultsSnapshot({ onOpenModal }) {
  const [selectedCase, setSelectedCase] = useState(null);

  const metrics = [
    {
      id: 'signup',
      value: '312%',
      label: 'signup growth',
      summary: 'in a single quarter, for a solo SaaS founder who\'d been stuck flat for a year',
      category: 'Solo SaaS Founder',
      timeframe: 'In 90 Days',
      details: {
        client: 'Indie SaaS Tool',
        problem: 'Stuck at flat revenue for 12 months, paying heavy ad agency fees.',
        solution: 'Built automated product-led funnels & Generative Engine Optimization (GEO) citations.',
        results: [
          '312% signup growth in a single quarter',
          'Organic acquisition became #1 growth driver',
          'Ranked in top 3 ChatGPT recommendations for target industry queries'
        ]
      }
    },
    {
      id: 'cost',
      value: '58%',
      label: 'lower cost per sale',
      summary: 'for a bootstrapped D2C brand that thought its funnel was fine',
      category: 'Bootstrapped D2C',
      timeframe: 'Across Funnels',
      details: {
        client: 'D2C Lifestyle Brand',
        problem: 'Ad spend was eating into profit margins with high Meta ad CAC.',
        solution: 'Landing page overhaul, automated buyer nurture, and high-intent search positioning.',
        results: [
          '58% lower cost per sale',
          'Landing page conversion rate jumped from 1.4% to 4.6%',
          'Funnel achieved net positive cash flow on day 1'
        ]
      }
    },
    {
      id: 'visibility',
      value: '4.1x',
      label: 'more visibility',
      summary: 'landing an indie app inside AI answer boxes in about 60 days',
      category: 'Indie App Founder',
      timeframe: 'In 60 Days',
      details: {
        client: 'Indie Mobile/Web App',
        problem: 'Invisible when buyers asked ChatGPT, Claude, and Perplexity for app alternatives.',
        solution: 'Answer Engine Optimization (AEO) and authoritative LLM dataset placement.',
        results: [
          '4.1x more visibility in AI answer boxes',
          'Featured in 80%+ of relevant conversational search queries',
          'Organic inbound signups doubled within 2 months'
        ]
      }
    }
  ];

  return (
    <section className="section" id="results" style={{ background: 'var(--snow)', padding: '100px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
          <p className="eyebrow">Proof, Not Promises</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0' }}>
            What working with us actually looks like
          </h2>
          <p className="ds-lead">
            Real outcomes from lean teams and solo founders who built their growth engine with Bootsolo.
          </p>
        </div>

        {/* 3 Interactive Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {metrics.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-card)',
                padding: '32px 28px',
                boxShadow: 'var(--shadow-1)',
                cursor: 'pointer',
                transition: 'all 170ms var(--ease)'
              }}
              onClick={() => setSelectedCase(item)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-2)';
                e.currentTarget.style.borderColor = 'var(--sunrise)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-1)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge" style={{ background: 'var(--frost)', color: 'var(--brand-fg)', fontSize: '12px', fontWeight: 600 }}>
                  {item.category}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--fg3)', fontFamily: 'var(--font-mono)' }}>{item.timeframe}</span>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '56px', fontWeight: 600, color: 'var(--sunrise)', lineHeight: 1, letterSpacing: '-0.03em', margin: '16px 0 6px' }}>
                {item.value}
              </div>

              <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--fg1)', marginBottom: '12px' }}>
                {item.label}
              </div>

              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, marginBottom: '24px' }}>
                — {item.summary}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: 'var(--brand-fg)' }}>
                <span>Read the stories</span>
                <ArrowRight size={15} />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Drawer */}
        {selectedCase && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(14,26,43,0.7)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedCase(null)}
          >
            <div
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--r-md)',
                maxWidth: '620px',
                width: '100%',
                margin: 'auto',
                padding: '36px',
                boxShadow: 'var(--shadow-pop)',
                border: '1px solid var(--border-strong)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--snow)',
                  border: '1px solid var(--border)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} color="var(--fg2)" />
              </button>

              <span className="badge" style={{ background: 'var(--frost)', color: 'var(--brand-fg)', marginBottom: '12px', display: 'inline-block' }}>
                {selectedCase.category} · {selectedCase.timeframe}
              </span>

              <h3 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--sunrise)', margin: '8px 0 16px', fontFamily: 'var(--font-mono)' }}>
                {selectedCase.value} {selectedCase.label}
              </h3>

              <div style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, marginBottom: '24px' }}>
                {selectedCase.summary}
              </div>

              <div style={{ background: 'var(--snow)', borderRadius: '12px', padding: '20px', marginBottom: '24px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--summit)', marginBottom: '12px' }}>
                  Execution Details
                </h4>
                <div style={{ fontSize: '14px', color: 'var(--fg2)', marginBottom: '8px' }}>
                  <strong>Client Type:</strong> {selectedCase.details.client}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--fg2)', marginBottom: '8px' }}>
                  <strong>Challenge:</strong> {selectedCase.details.problem}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--fg2)' }}>
                  <strong>Engine Solution:</strong> {selectedCase.details.solution}
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--summit)', marginBottom: '12px' }}>
                  Verified Key Outcomes
                </h4>
                {selectedCase.details.results.map((res, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--fg1)', marginBottom: '8px' }}>
                    <CheckCircle size={16} color="var(--sunrise)" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    if (onOpenModal) onOpenModal();
                  }}
                  className="btn btn-primary glow-sunrise"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  Book a Growth Call →
                </button>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
