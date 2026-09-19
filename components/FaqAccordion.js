'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Do I need an existing in-house marketing team to work with Bootsolo?',
    a: 'No. We act as your end-to-end growth partner — handling strategy, AI search optimization (AEO/GEO), paid campaigns, content, and automation as a single connected system.',
  },
  {
    q: 'How fast do we see AI Answer Box citations and search rank improvements?',
    a: 'Most clients see early Generative Engine Optimization (GEO) citations in ChatGPT and Perplexity within 30 to 60 days, followed by compound pipeline growth as your content engine scales.',
  },
  {
    q: 'What makes Bootsolo different from traditional B2B agencies or freelancers?',
    a: 'Agencies sell bloated retainer decks; freelancers work in isolated silos. Bootsolo pairs senior-level growth strategy with AI-assisted execution — giving you full-funnel traction without hiring 6 separate roles.',
  },
  {
    q: 'How does spend tracing work? Can we really defend numbers in a board meeting?',
    a: 'Yes. We set up full-funnel attribution across paid channels, search, and landing pages so every dollar spent maps directly to qualified leads and pipeline revenue.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section" id="faq" style={{ background: 'var(--snow, #F7F5F1)', padding: '96px 0' }}>
      <div className="wrap" style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            background: 'rgba(255, 107, 53, 0.08)',
            border: '1px solid rgba(255, 107, 53, 0.22)',
            color: 'var(--sunrise, #FF6B35)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            <HelpCircle size={14} color="var(--sunrise, #FF6B35)" />
            <span>Clear Answers</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.8vw, 42px)',
            fontWeight: 700,
            color: 'var(--summit, #0E1A2B)',
            letterSpacing: '-0.02em',
            margin: '0 0 14px',
            lineHeight: 1.15
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: '16.5px',
            lineHeight: 1.6,
            color: 'var(--fg2, #51606F)',
            margin: '0 auto',
            maxWidth: '540px'
          }}>
            Everything founders ask before booking their first growth strategy call.
          </p>
        </div>

        <div className="faq-grid" style={{ maxWidth: '820px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
                style={{
                  background: '#ffffff',
                  border: isOpen ? '1px solid var(--sunrise, #FF6B35)' : '1px solid rgba(14, 26, 43, 0.14)',
                  borderRadius: '14px',
                  padding: '1.25rem 1.6rem',
                  cursor: 'pointer',
                  boxShadow: isOpen ? '0 8px 24px rgba(255, 107, 53, 0.12)' : '0 2px 6px rgba(14, 26, 43, 0.04)',
                  transition: 'all 200ms ease'
                }}
              >
                <button
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.25rem',
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{
                    fontSize: '1.08rem',
                    fontWeight: 600,
                    lineHeight: 1.45,
                    color: 'var(--summit, #0E1A2B)',
                    letterSpacing: '-0.01em'
                  }}>
                    {faq.q}
                  </span>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: isOpen ? 'rgba(255, 107, 53, 0.1)' : 'rgba(14, 26, 43, 0.05)',
                    transition: 'transform 200ms ease, background 200ms ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <ChevronDown size={18} color={isOpen ? 'var(--sunrise, #FF6B35)' : 'var(--fg2, #51606F)'} />
                  </div>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${idx}`} style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(14, 26, 43, 0.08)',
                    animation: 'faqFadeIn 200ms ease'
                  }}>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: 1.65,
                      color: 'var(--fg2, #51606F)',
                      margin: 0
                    }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes faqFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
