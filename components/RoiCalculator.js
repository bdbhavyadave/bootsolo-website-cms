'use client';
import { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, Check } from 'lucide-react';
import { PaperPlaneMark } from './Brand';

export default function RoiCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(5000);
  const [primaryGoal, setPrimaryGoal] = useState('visibility');

  // Dynamic calculations based on spend
  const estimatedCitations = Math.round((monthlySpend / 1000) * 18);
  const hoursSaved = Math.round((monthlySpend / 1000) * 8.5);
  const projectedRoiMultiple = (3.2 + (monthlySpend / 10000) * 0.8).toFixed(1);
  const agencyCostSavings = Math.round(monthlySpend * 0.52);

  return (
    <section className="section" id="calculator" style={{ background: 'var(--summit)', color: '#EEF3F8', padding: '100px 0', borderTop: '1px solid var(--navy-700)', borderBottom: '1px solid var(--navy-700)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
          <div className="pill" style={{ background: 'rgba(255,107,53,0.12)', color: 'var(--sunrise-300)', borderColor: 'rgba(255,107,53,0.3)', marginBottom: '16px' }}>
            <Calculator size={14} />
            <span>Interactive ROI & Visibility Estimator</span>
          </div>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0', color: '#fff' }}>
            Calculate your AI Growth Trajectory
          </h2>
          <p className="ds-lead" style={{ color: 'var(--navy-300)' }}>
            See estimated citations, hours saved, and cost efficiency when replacing traditional retainers with Bootsolo.
          </p>
        </div>

        <div
          style={{
            background: 'var(--navy-800)',
            borderRadius: 'var(--r-md)',
            border: '1px solid var(--navy-700)',
            padding: '48px',
            boxShadow: 'var(--shadow-pop)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Controls Column */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy-300)' }}>
                  Current Monthly Marketing Spend
                </label>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 600, color: 'var(--sunrise-300)' }}>
                  ${monthlySpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '999px',
                  background: 'var(--navy-700)',
                  accentColor: 'var(--sunrise)',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--navy-400)', marginTop: '8px', fontFamily: 'var(--font-mono)' }}>
                <span>$1,000</span>
                <span>$12,500</span>
                <span>$25,000+</span>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy-300)', display: 'block', marginBottom: '12px' }}>
                Primary Growth Goal
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  { id: 'visibility', label: 'AI Search Visibility' },
                  { id: 'leads', label: 'Qualified Pipeline' },
                  { id: 'cac', label: 'Reduce Acquisition CAC' },
                  { id: 'scale', label: 'Full Engine Scale' }
                ].map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setPrimaryGoal(goal.id)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid',
                      borderColor: primaryGoal === goal.id ? 'var(--sunrise)' : 'var(--navy-700)',
                      background: primaryGoal === goal.id ? 'rgba(255,107,53,0.15)' : 'var(--navy-900)',
                      color: primaryGoal === goal.id ? '#fff' : 'var(--navy-300)',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    {goal.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--navy-300)' }}>
              <Check size={16} color="var(--success)" />
              <span>Based on aggregated performance across SaaS, D2C & Tech solopreneurs</span>
            </div>
          </div>

          {/* Results Output Card */}
          <div
            style={{
              background: 'var(--navy-900)',
              borderRadius: 'var(--r-card)',
              padding: '36px',
              border: '1px solid var(--navy-700)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <PaperPlaneMark size={20} color="#FF9A6B" planeColor="#FF6B35" />
              <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sunrise-300)' }}>
                PROJECTED ESTIMATED OUTCOMES
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }}>
              <div style={{ background: 'var(--navy-850)', padding: '18px', borderRadius: '12px', border: '1px solid var(--navy-700)' }}>
                <span style={{ fontSize: '11.5px', color: 'var(--navy-400)', textTransform: 'uppercase' }}>Est. Monthly AI Citations</span>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '32px', fontWeight: 600, color: 'var(--sunrise-300)', marginTop: '4px' }}>
                  ~{estimatedCitations} / mo
                </div>
              </div>
              <div style={{ background: 'var(--navy-850)', padding: '18px', borderRadius: '12px', border: '1px solid var(--navy-700)' }}>
                <span style={{ fontSize: '11.5px', color: 'var(--navy-400)', textTransform: 'uppercase' }}>Founder Hours Saved</span>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '32px', fontWeight: 600, color: 'var(--ice-300)', marginTop: '4px' }}>
                  {hoursSaved} hrs / mo
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div>
                <span style={{ fontSize: '11.5px', color: 'var(--navy-400)', textTransform: 'uppercase', display: 'block' }}>Projected ROI Lift</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 600, color: '#fff' }}>{projectedRoiMultiple}x Target</span>
              </div>
              <div>
                <span style={{ fontSize: '11.5px', color: 'var(--navy-400)', textTransform: 'uppercase', display: 'block' }}>Est. Retainer Savings</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 600, color: 'var(--success)' }}>${agencyCostSavings.toLocaleString()} / mo</span>
              </div>
            </div>

            <a className="btn btn-primary glow-sunrise" href="/custom-quote" style={{ width: '100%', justifyContent: 'center', height: '46px', fontSize: '15px' }} aria-label="Book a Growth Call">
              Book a Growth Call <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
