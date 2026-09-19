'use client';
import { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { PaperPlaneMark } from './Brand';

export default function Assessment() {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'ai_visibility',
      question: 'Is your brand cited when prospects ask ChatGPT or Perplexity for vendor recommendations?',
      options: [
        { label: 'Yes, we are consistently cited in top AI answers', score: 3 },
        { label: 'Unsure / we haven’t checked our AI search presence', score: 1 },
        { label: 'No, we are invisible in AI conversational search', score: 0 }
      ]
    },
    {
      id: 'speed',
      question: 'How fast can your team test and ship a new campaign or content piece?',
      options: [
        { label: 'Within 24–48 hours using automated AI workflows', score: 3 },
        { label: 'Takes 1–2 weeks of manual effort', score: 1 },
        { label: 'Takes 3–4+ weeks through legacy agency approvals', score: 0 }
      ]
    },
    {
      id: 'attribution',
      question: 'Can you directly trace marketing spend to P&L revenue and pipeline growth?',
      options: [
        { label: 'Yes, 100% attributed metrics on a live dashboard', score: 3 },
        { label: 'Partial tracking, mostly rely on platform impressions', score: 1 },
        { label: 'No clear attribution, mostly a best guess', score: 0 }
      ]
    }
  ];

  const handleSelect = (qId, score) => {
    setAnswers({ ...answers, [qId]: score });
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const isCompleted = Object.keys(answers).length === questions.length;

  return (
    <section className="section" id="assessment" style={{ background: 'var(--white)', padding: '100px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
          <div className="pill" style={{ background: 'var(--frost)', color: 'var(--brand-fg)', borderColor: 'var(--border-strong)', marginBottom: '16px' }}>
            <HelpCircle size={14} />
            <span>Interactive Self-Assessment</span>
          </div>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0' }}>
            Marketing Maturity Scorecard
          </h2>
          <p className="ds-lead">
            Answer 3 quick questions to evaluate whether your current playbook is AI-ready.
          </p>
        </div>

        <div style={{ maxWidth: '780px', margin: '0 auto', background: 'var(--snow)', borderRadius: 'var(--r-md)', border: '1px solid var(--border-strong)', padding: '40px', boxShadow: 'var(--shadow-1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {questions.map((q, idx) => (
              <div key={q.id}>
                <h4 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '26px', height: '26px', borderRadius: '999px', background: 'var(--summit)', color: '#fff', fontSize: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    {idx + 1}
                  </span>
                  {q.question}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {q.options.map((opt, i) => {
                    const isSelected = answers[q.id] === opt.score;
                    return (
                      <button
                        key={i}
                        onClick={() => handleSelect(q.id, opt.score)}
                        style={{
                          padding: '14px 18px',
                          borderRadius: '10px',
                          border: isSelected ? '2px solid var(--sunrise)' : '1px solid var(--border)',
                          background: isSelected ? 'var(--bg-elevated)' : 'var(--white)',
                          color: isSelected ? 'var(--summit)' : 'var(--fg2)',
                          fontSize: '14px',
                          fontWeight: isSelected ? 600 : 400,
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 170ms var(--ease)'
                        }}
                      >
                        <span>{opt.label}</span>
                        {isSelected && <CheckCircle2 size={18} color="var(--sunrise)" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Assessment Result Summary */}
          {isCompleted && (
            <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)', background: 'var(--summit)', color: '#EEF3F8', padding: '32px', borderRadius: 'var(--r-card)', textAlign: 'center' }}>
              <PaperPlaneMark size={24} color="#FF9A6B" planeColor="#FF6B35" />
              <h3 style={{ fontSize: '24px', margin: '14px 0 8px', color: '#fff' }}>
                Your Score: {totalScore} / 9 — {totalScore >= 7 ? 'AI Engine Ready' : 'Optimization Required'}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--navy-300)', maxWidth: '540px', margin: '0 auto 24px', lineHeight: 1.55 }}>
                {totalScore >= 7
                  ? 'Your engine has strong fundamentals. Bootsolo can help scale your AI search citations and lower your CAC.'
                  : 'Your marketing is vulnerable to AI-native competitors. Book a Growth Call to build an AI-first engine.'}
              </p>
              <a className="btn btn-primary" href="#growth-roadmap" style={{ height: '46px', padding: '0 28px', fontSize: '15px' }}>
                Book Your Growth Assessment <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
