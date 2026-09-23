'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Check, Search, Bot, Zap } from 'lucide-react';
import { PaperPlaneMark } from './Brand';

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
        i += 2;
        setTypedText(fullText.slice(0, i));
      } else {
        clearInterval(timer);
      }
    }, 28);

    return () => clearInterval(timer);
  }, [activeEngine]);

  return (
    <header
      className="hero dark"
      id="top"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 66px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 0',
        margin: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* Subtle Background Radial Sunrise Glow */}
      <div style={{ position: 'absolute', top: '-15%', right: '0%', width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(255,107,53,0.14) 0%, rgba(14,26,43,0) 70%)', pointerEvents: 'none' }} />

      <div className="wrap hero-inner" style={{ width: '100%', alignItems: 'center' }}>
        <div className="hero-copy">
          {/* Headline with generous gap between phrases */}
          <h1 className="h-display" style={{ fontSize: 'clamp(34px, 4.2vw, 54px)', lineHeight: 1.15, fontWeight: 600, letterSpacing: '-0.025em', margin: '0 0 34px' }}>
            Uncharted Markets. AI-Driven Buyers.<br />
            <span className="accent" style={{ color: 'var(--sunrise-300)', display: 'inline-block', marginTop: '14px' }}>
              Win with an AI-First Marketing Engine.
            </span>
          </h1>

          {/* Subheadline / Body Text with generous top and bottom gap */}
          <div className="h-sub" style={{ fontSize: 'clamp(16px, 1.25vw, 19.5px)', lineHeight: 1.7, color: 'var(--navy-300)', marginBottom: '44px', maxWidth: '600px' }}>
            <p style={{ margin: 0 }}>
              Bootsolo helps bootstrapped founders and solopreneurs navigate this new landscape with ROI-focused, P&L-positive marketing. From SEO, GEO, and AEO to content, automation, eCommerce and performance - everything you need to scale without building a full team.
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="h-cta" style={{ display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onOpenModal}
              className="btn btn-primary glow-sunrise"
              style={{ padding: '0 30px', height: '50px', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
              aria-label="Book a Growth Call"
            >
              Book a Growth Call <ArrowRight size={18} />
            </button>
            <Link className="btn btn-ghost" href="#services" style={{ height: '50px', padding: '0 26px', fontSize: '15.5px', borderColor: 'var(--navy-600)', color: '#EEF3F8' }}>
              See What We Do
            </Link>
          </div>
        </div>

        {/* Hero Stack — Interactive AI Preview Card */}
        <div className="hero-art hero-art-interactive" style={{ position: 'relative', width: '100%', maxWidth: '580px', marginLeft: 'auto' }}>
          {/* Floating AI Dashboard Card */}
          <div style={{ background: 'var(--navy-800)', borderRadius: 'var(--r-card)', border: '1px solid var(--navy-700)', padding: '28px 28px', boxShadow: 'var(--shadow-pop)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid var(--navy-700)', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', maxWidth: '100%' }}>
                {Object.keys(scenarios).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveEngine(key)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '8px',
                      fontSize: '12.5px',
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
                <span className="mono" style={{ position: 'relative', zIndex: 2, fontSize: '11.5px', color: '#1FBF75', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(14,26,43,0.9)', padding: '4px 9px', borderRadius: '7px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#1FBF75', boxShadow: '0 0 6px #1FBF75' }} />
                  Live AI Citation
                </span>
              </div>
            </div>

            <div style={{ background: 'var(--navy-900)', borderRadius: '10px', padding: '14px 18px', marginBottom: '16px', border: '1px solid var(--navy-700)' }}>
              <div style={{ fontSize: '12.5px', color: 'var(--navy-400)', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Search size={13} color="var(--ice)" /> Buyer Prompt:
              </div>
              <div style={{ fontSize: '14.5px', color: '#fff', fontWeight: 500, lineHeight: 1.4 }}>"{scenarios[activeEngine].query}"</div>
            </div>

            <div style={{ background: 'rgba(56,182,245,0.06)', borderRadius: '10px', padding: '16px 18px', border: '1px solid rgba(56,182,245,0.2)', marginBottom: '18px' }}>
              <div style={{ fontSize: '12.5px', color: 'var(--ice-300)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Bot size={14} color="var(--ice)" /> AI Citation Engine Output:
              </div>
              <div style={{ fontSize: '14.5px', color: 'var(--navy-100)', lineHeight: 1.55, minHeight: '52px' }}>
                {typedText}
                <span className="cursor-blink" style={{ display: 'inline-block', width: '5px', height: '14px', background: 'var(--sunrise)', marginLeft: '4px', verticalAlign: 'middle' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--navy-700)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11.5px', color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Signup Growth</div>
                <div className="mono" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sunrise-300)', marginTop: '3px' }}>{scenarios[activeEngine].metrics.signup}</div>
              </div>
              <div style={{ textAlign: 'center', borderLeft: '1px solid var(--navy-700)' }}>
                <div style={{ fontSize: '11.5px', color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Cost Per Sale</div>
                <div className="mono" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ice-300)', marginTop: '3px' }}>{scenarios[activeEngine].metrics.cpa}</div>
              </div>
              <div style={{ textAlign: 'center', borderLeft: '1px solid var(--navy-700)' }}>
                <div style={{ fontSize: '11.5px', color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>AI Citation</div>
                <div className="mono" style={{ fontSize: '18px', fontWeight: 700, color: '#1FBF75', marginTop: '3px' }}>{scenarios[activeEngine].metrics.visibility}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
