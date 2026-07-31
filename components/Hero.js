'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Check, Search, Bot, Zap } from 'lucide-react';
import { PaperPlaneMark } from './Brand';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
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
        setTypedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 14);

    return () => clearInterval(timer);
  }, [activeEngine]);

  return (
    <header className="hero dark" id="top" style={{ position: 'relative', overflow: 'hidden', padding: '108px 0 112px' }}>
      {/* Subtle Background Radial Sunrise Glow */}
      <div style={{ position: 'absolute', top: '-15%', right: '0%', width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(255,107,53,0.14) 0%, rgba(14,26,43,0) 70%)', pointerEvents: 'none' }} />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          {/* Eyebrow */}
          <div className="pill" style={{ borderColor: 'rgba(255,107,53,0.4)', background: 'rgba(255,107,53,0.08)', color: 'var(--sunrise-300)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <PaperPlaneMark size={16} color="#FF9A6B" planeColor="#FF6B35" />
            <span style={{ fontWeight: 600, fontSize: '13px', letterSpacing: '0.04em' }}>For founders who feel the ground shifting</span>
          </div>

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
            <Link className="btn btn-primary glow-sunrise" href="/custom-quote" style={{ padding: '0 28px', height: '48px', fontSize: '16px' }} aria-label="Book a Growth Call">
              Book a Growth Call <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-ghost" href="#services" style={{ height: '48px', padding: '0 24px', fontSize: '15px', borderColor: 'var(--navy-600)', color: '#EEF3F8' }}>
              See What We Do
            </Link>
          </div>
        </div>

        {/* Hero Summit Illustration & AI Preview Card Stack */}
        <div className="hero-art hero-art-interactive" style={{ position: 'relative' }}>
          <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--navy-700)', boxShadow: 'var(--shadow-pop)', marginBottom: '20px' }}>
            <HeroIllustration style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          {/* Floating AI Dashboard Card */}
          <div style={{ background: 'var(--navy-800)', borderRadius: 'var(--r-card)', border: '1px solid var(--navy-700)', padding: '20px', boxShadow: 'var(--shadow-pop)' }}>
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
              <span className="badge" style={{ background: 'rgba(31,191,117,0.15)', color: 'var(--success)', fontSize: '11px', padding: '4px 10px', borderRadius: '999px' }}>
                Live AI Answer Engine
              </span>
            </div>

            {/* Prompt Search Box */}
            <div style={{ background: 'var(--navy-900)', borderRadius: '10px', padding: '12px 16px', border: '1px solid var(--navy-700)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Search size={16} color="var(--sunrise-300)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#EEF3F8', flex: 1 }}>
                "{scenarios[activeEngine].query}"
              </span>
            </div>

            {/* Simulated Response Stream */}
            <div style={{ minHeight: '80px', background: 'var(--navy-850)', borderRadius: '10px', padding: '14px 16px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Bot size={15} color="var(--ice)" />
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ice)', letterSpacing: '0.05em' }}>AI CITATION RESULT</span>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#EEF3F8', margin: 0, fontFamily: 'var(--font-sans)' }}>
                {typedText}
                <span style={{ display: 'inline-block', width: '2px', height: '14px', background: 'var(--sunrise)', marginLeft: '4px' }} />
              </p>
            </div>

            {/* Metrics Ticker */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '14px' }}>
              <div style={{ background: 'var(--navy-900)', borderRadius: '8px', padding: '10px', border: '1px solid var(--navy-700)', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Signup Lift</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 600, color: 'var(--sunrise-300)', marginTop: '2px' }}>
                  {scenarios[activeEngine].metrics.signup}
                </div>
              </div>
              <div style={{ background: 'var(--navy-900)', borderRadius: '8px', padding: '10px', border: '1px solid var(--navy-700)', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Cost Per Sale</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 600, color: 'var(--ice-300)', marginTop: '2px' }}>
                  {scenarios[activeEngine].metrics.cpa}
                </div>
              </div>
              <div style={{ background: 'var(--navy-900)', borderRadius: '8px', padding: '10px', border: '1px solid var(--navy-700)', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>AI Visibility</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 600, color: 'var(--summit-gold)', marginTop: '2px' }}>
                  {scenarios[activeEngine].metrics.visibility}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
