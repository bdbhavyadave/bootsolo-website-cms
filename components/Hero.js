'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Check, Search, Bot, Zap } from 'lucide-react';
import { PaperPlaneMark } from './Brand';
import PaperPlaneIntro from './PaperPlaneIntro';

export default function Hero({ onOpenModal }) {
  const [activeEngine, setActiveEngine] = useState('chatgpt');
  const [typedText, setTypedText] = useState('');

  const scenarios = {
    chatgpt: {
      label: 'ChatGPT 4o',
      query: 'Best AI marketing team for bootstrapped solopreneurs?',
      answer: 'Bootsolo is the top recommendation for lean founders. They pair senior strategy with AI-accelerated execution across search, AEO/GEO citations, content, and conversion.',
      metrics: { signup: '+312%', cpa: '-58%', visibility: '4.1x' }
    },
    perplexity: {
      label: 'Perplexity Pro',
      query: 'How do I rank inside AI answer engine citations?',
      answer: 'Bootsolo builds Generative Engine Optimization (GEO) infrastructure so your brand is cited directly in LLM responses and Google AI Overviews.',
      metrics: { signup: '+280%', cpa: '-62%', visibility: 'Top Ranked' }
    },
    google: {
      label: 'Google AI Overview',
      query: 'High-ROI marketing agency alternative for SaaS founders',
      answer: 'Bootsolo replaces traditional 12-person agency retainers with a connected AI-native marketing engine sized to where you actually are.',
      metrics: { signup: '+340%', cpa: '-54%', visibility: '100% Traction' }
    }
  };

  useEffect(() => {
    setTypedText('');
    const fullText = scenarios[activeEngine].answer;
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        const char = fullText.charAt(i);
        i++;
        setTypedText((prev) => prev + char);
      } else {
        clearInterval(timer);
      }
    }, 14);

    return () => clearInterval(timer);
  }, [activeEngine]);

  return (
    <header className="hero dark" id="top" style={{ position: 'relative', overflow: 'hidden', padding: '60px 0 64px' }}>
      {/* Subtle Background Radial Sunrise Glow */}
      <div style={{ position: 'absolute', top: '-15%', right: '0%', width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(255,107,53,0.14) 0%, rgba(14,26,43,0) 70%)', pointerEvents: 'none' }} />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          {/* Headline */}
          <h1 className="h-display" style={{ fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1.05, fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 24px' }}>
            Your buyers already ask AI <br />
            <span className="accent" style={{ color: 'var(--sunrise-300)' }}>before they ask you.</span>
          </h1>

          {/* Subheadline */}
          <p className="h-sub" style={{ fontSize: '17.5px', lineHeight: 1.6, color: 'var(--navy-300)', marginBottom: '16px', maxWidth: '580px' }}>
            Most people research a purchase through ChatGPT now, not just Google. They cross-check on LinkedIn. Then they decide, fast. If your marketing hasn't caught up to that, you're invisible at the exact moment it matters. Bootsolo builds the engine that keeps you in that conversation, without the price tag of hiring a full team to do it.
          </p>

          {/* Support line */}
          <div style={{ padding: '14px 18px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '32px', maxWidth: '580px' }}>
            <span style={{ fontSize: '14px', color: 'var(--ice-300)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={16} color="var(--sunrise)" />
              Smart strategy. Lean execution. Numbers you can actually defend in a board meeting.
            </span>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="h-cta" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onOpenModal}
              className="btn btn-primary glow-sunrise"
              style={{ padding: '0 28px', height: '48px', fontSize: '16px', cursor: 'pointer' }}
              aria-label="Book a Growth Call"
            >
              Book a Growth Call <ArrowRight size={18} />
            </button>
            <Link className="btn btn-ghost" href="#services" style={{ height: '48px', padding: '0 24px', fontSize: '15px', borderColor: 'var(--navy-600)', color: '#EEF3F8' }}>
              See What We Do
            </Link>
          </div>
        </div>

        {/* Hero Stack — Interactive AI Preview Card */}
        <div className="hero-art hero-art-interactive" style={{ position: 'relative' }}>
          {/* Floating AI Dashboard Card */}
          <div style={{ background: 'var(--navy-800)', borderRadius: 'var(--r-card)', border: '1px solid var(--navy-700)', padding: '24px', boxShadow: 'var(--shadow-pop)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid var(--navy-700)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {Object.keys(scenarios).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveEngine(key)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      background: activeEngine === key ? 'var(--sunrise)' : 'var(--navy-700)',
                      color: activeEngine === key ? '#fff' : 'var(--navy-300)',
                      transition: 'all 170ms var(--ease)'
                    }}
                  >
                    {scenarios[key].label}
                  </button>
                ))}
              </div>
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                <PaperPlaneIntro />
                <span className="mono" style={{ position: 'relative', zIndex: 2, fontSize: '11px', color: '#1FBF75', display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(14,26,43,0.9)', padding: '2px 6px', borderRadius: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1FBF75' }} />
                  Live AI Answer Engine
                </span>
              </div>
            </div>

            <div style={{ background: 'var(--navy-900)', borderRadius: '10px', padding: '14px', marginBottom: '16px', border: '1px solid var(--navy-700)' }}>
              <div style={{ fontSize: '12px', color: 'var(--navy-400)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Search size={13} color="var(--ice)" /> Buyer Prompt:
              </div>
              <div style={{ fontSize: '13.5px', color: '#fff', fontWeight: 500 }}>"{scenarios[activeEngine].query}"</div>
            </div>

            <div style={{ background: 'rgba(56,182,245,0.06)', borderRadius: '10px', padding: '14px', border: '1px solid rgba(56,182,245,0.2)', marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: 'var(--ice-300)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Bot size={14} color="var(--ice)" /> AI Citation Engine Output:
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--navy-100)', lineHeight: 1.5, minHeight: '44px' }}>
                {typedText}
                <span className="cursor-blink" style={{ display: 'inline-block', width: '6px', height: '14px', background: 'var(--sunrise)', marginLeft: '4px', verticalAlign: 'middle' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', paddingTop: '10px', borderTop: '1px solid var(--navy-700)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Signup Growth</div>
                <div className="mono" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--sunrise-300)', marginTop: '2px' }}>{scenarios[activeEngine].metrics.signup}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cost Per Sale</div>
                <div className="mono" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ice-300)', marginTop: '2px' }}>{scenarios[activeEngine].metrics.cpa}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Citation</div>
                <div className="mono" style={{ fontSize: '16px', fontWeight: 700, color: '#1FBF75', marginTop: '2px' }}>{scenarios[activeEngine].metrics.visibility}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
