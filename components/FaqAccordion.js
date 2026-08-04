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
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section bg-snow relative overflow-hidden" id="faq">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow inline-flex align-center gap-2">
            <HelpCircle size={14} color="var(--sunrise)" />
            <span>Clear Answers</span>
          </div>
          <h2 className="h2 font-heading text-summit">
            Frequently Asked Questions
          </h2>
          <p className="section-subhead text-fg2">
            Everything founders ask before booking their first growth strategy call.
          </p>
        </div>

        <div className="faq-grid max-w-3xl mx-auto">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <button
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-question-text font-heading text-summit text-left">
                    {faq.q}
                  </span>
                  <div className={`faq-icon-wrap ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={18} color="var(--fg2)" />
                  </div>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${idx}`} className="faq-answer-content">
                    <p className="body-text text-fg2">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-card {
          background: var(--white);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: all 170ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .faq-card:hover {
          border-color: var(--sunrise-300);
          box-shadow: var(--shadow-2);
        }
        .faq-card.open {
          border-color: var(--sunrise);
          background: var(--white);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
        }
        .faq-question-text {
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.4;
        }
        .faq-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 170ms ease;
        }
        .faq-icon-wrap.rotated {
          transform: rotate(180deg);
        }
        .faq-answer-content {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          animation: fadeIn 170ms ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
