'use client';
import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { PaperPlaneMark } from './Brand';
import AiVisibilityMap from './AiVisibilityMap';

export default function AiEra() {
  const [selectedStep, setSelectedStep] = useState(0);

  // Verbatim 5 Gut-Check Timeline Points
  const timelineSteps = [
    {
      number: '01',
      question: 'Still built purely for Google, while buyers are already asking AI?',
      detail: 'Buyers cross-check on ChatGPT, Perplexity, and Google AI Overviews before they reach your site.',
      impact: 'Search & Answer Engine Optimization (AEO)'
    },
    {
      number: '02',
      question: 'Stretched thin trying to show up on search, ChatGPT, LinkedIn, and paid at once, nothing tying it together?',
      detail: 'Running disconnected tactics without a unified strategy wastes budget and breaks momentum.',
      impact: 'Connected Marketing Engine Strategy'
    },
    {
      number: '03',
      question: 'Content takes three weeks while a competitor with an AI-assisted workflow ships in three days?',
      detail: 'AI-accelerated execution lets lean teams out-publish and out-convert traditional agencies.',
      impact: 'Execution Velocity & Motion Design'
    },
    {
      number: '04',
      question: 'Funnel still leans on manual follow-up instead of a system that runs itself?',
      detail: 'Automated buyer nurture engines capture, qualify, and convert leads 24/7.',
      impact: 'Marketing Automation Funnels'
    },
    {
      number: '05',
      question: 'Can you actually trace spend to revenue, or is it a guess?',
      detail: 'Every dollar invested should map to qualified pipeline and P&L positive growth.',
      impact: 'Attribution & ROI Accountability'
    }
  ];

  return (
    <section className="section" id="ai-era" style={{ background: 'var(--white)', padding: '100px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
          <p className="eyebrow">The rules changed. Quietly.</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0' }}>
            Your old marketing playbook is holding you back
          </h2>
        </div>

        {/* Stepped Timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'start', marginBottom: '40px' }}>
          {/* Step Selector Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {timelineSteps.map((step, idx) => {
              const isActive = selectedStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setSelectedStep(idx)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: 'var(--r-card)',
                    background: isActive ? 'var(--summit)' : 'var(--snow)',
                    color: isActive ? '#fff' : 'var(--fg1)',
                    border: `1px solid ${isActive ? 'var(--summit)' : 'var(--border)'}`,
                    cursor: 'pointer',
                    transition: 'all 170ms var(--ease)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 600, color: isActive ? 'var(--sunrise-300)' : 'var(--brand-fg)' }}>
                    {step.number}
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.4, flex: 1, color: isActive ? '#fff' : 'var(--fg1)' }}>
                    {step.question}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Detail Display */}
          <div
            style={{
              background: 'var(--summit)',
              color: '#EEF3F8',
              borderRadius: 'var(--r-md)',
              padding: '40px',
              border: '1px solid var(--navy-700)',
              boxShadow: 'var(--shadow-2)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '999px', background: 'rgba(255,107,53,0.15)', color: 'var(--sunrise-300)', fontSize: '12px', fontWeight: 600, marginBottom: '20px' }}>
              <ShieldCheck size={15} />
              <span>GUT CHECK {timelineSteps[selectedStep].number}</span>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px', color: '#fff' }}>
              {timelineSteps[selectedStep].question}
            </h3>

            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--navy-300)', marginBottom: '32px' }}>
              {timelineSteps[selectedStep].detail}
            </p>

            <div style={{ background: 'var(--navy-800)', borderRadius: '12px', padding: '16px 20px', border: '1px solid var(--navy-700)' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy-400)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                IMPACT AREA
              </span>
              <span style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--ice-300)' }}>
                {timelineSteps[selectedStep].impact}
              </span>
            </div>
          </div>
        </div>

        {/* Verbatim Closing Block */}
        <div style={{ background: 'var(--snow)', borderRadius: 'var(--r-md)', padding: '40px', border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '16.5px', lineHeight: 1.6, color: 'var(--fg2)', fontStyle: 'italic', margin: 0 }}>
              "If that hit close to home, you're not behind, exactly. You're just running last decade's playbook in this decade's market. Most teams are."
            </p>
          </div>

          <div style={{ background: 'var(--white)', padding: '28px', borderRadius: 'var(--r-card)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <PaperPlaneMark size={20} color="#FF9A6B" planeColor="#FF6B35" />
              <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--sunrise-700)' }}>
                BOOTSOLO ENGINE
              </span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.55, color: 'var(--fg1)', margin: 0, fontWeight: 500 }}>
              Bootsolo builds AI-first marketing systems that pair senior-level strategy with execution that actually moves. Less guesswork, more speed, growth you can point to.
            </p>
          </div>
        </div>

        {/* Additive Flat-Geometric AI Visibility Map */}
        <AiVisibilityMap />
      </div>
    </section>
  );
}
