'use client';
import { useState } from 'react';
import { ArrowRight, CheckCircle, X } from 'lucide-react';

export default function ResultsSnapshot() {
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
      },
      chartPoints: '0,38 25,32 50,22 75,18 100,4'
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
      },
      chartPoints: '0,5 25,12 50,20 75,28 100,42'
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
      },
      chartPoints: '0,35 25,28 50,20 75,12 100,2'
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

              {/* Sparkline Graph */}
              <div style={{ height: '40px', background: 'var(--bg-inset)', borderRadius: '8px', padding: '6px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '11px', color: 'var(--fg3)', fontFamily: 'var(--font-mono)' }}>METRIC TRAJECTORY</span>
                <svg width="90" height="24" viewBox="0 0 100 40">
                  <polyline
                    fill="none"
                    stroke="var(--sunrise)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    points={item.chartPoints}
                  />
                </svg>
              </div>

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
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--bg-inset)', border: 'none', borderRadius: '999px', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={18} color="var(--fg2)" />
              </button>

              <span className="eyebrow">{selectedCase.category}</span>
              <h3 className="ds-h3" style={{ fontSize: '26px', marginTop: '6px', marginBottom: '8px' }}>
                {selectedCase.details.client}
              </h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', fontWeight: 600, color: 'var(--sunrise)', marginBottom: '20px' }}>
                {selectedCase.value} {selectedCase.label}
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', marginBottom: '6px' }}>The Challenge</h4>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: 0 }}>{selectedCase.details.problem}</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', marginBottom: '6px' }}>The Solution</h4>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: 0 }}>{selectedCase.details.solution}</p>
              </div>

              <div style={{ background: 'var(--snow)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sunrise-700)', marginBottom: '10px' }}>Key Verified Results</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedCase.details.results.map((res, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--fg1)' }}>
                      <CheckCircle size={16} color="var(--success)" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
