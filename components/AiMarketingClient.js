'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Bot, 
  Zap, 
  ChevronDown, 
  Clock, 
  AlertCircle,
  Database,
  Users,
  Target,
  Workflow
} from 'lucide-react';

export default function AiMarketingClient() {
  const [consoleTab, setConsoleTab] = useState('campaigns');
  const [pricingCategory, setPricingCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  // Audit Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    headache: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service_interested: 'AI-Powered Marketing Audit',
          submitted_at: new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.warn('Lead submission notice:', err);
    }
    setFormSubmitting(false);
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "Do I need to already use AI tools?",
      a: "No. We set everything up and show you how it works. If you already pay for tools, we'll use those first."
    },
    {
      q: "How soon will I see results?",
      a: "Most clients have campaigns or funnels live within 3–4 weeks. Ad testing usually shows clear winners within the first month; automation results build as more leads enter your funnel."
    },
    {
      q: "Will AI-generated content sound robotic?",
      a: "Not with us. AI produces the drafts and variations; a human strategist shapes the voice and approves what goes live."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. All monthly plans are month-to-month with no long-term lock-ins. You can pause or cancel at any time with 7 days notice before your next billing cycle. Everything we create—prompts, flows, and data—remains 100% yours forever."
    },
    {
      q: "Which tools do you work with?",
      a: "Zapier, Make, n8n, major email and CRM platforms, Meta, Google, and LinkedIn ads. If you use something else, ask us."
    },
    {
      q: "I'm not sure which package I need.",
      a: "Book a free growth call. We'll recommend the smallest plan that can move your numbers, not the biggest one."
    }
  ];

  return (
    <div className="ai-marketing-page-root">
      {/* HERO SECTION */}
      <header className="hero dark" style={{ padding: '72px 0 84px', borderBottom: '1px solid var(--navy-700)', background: 'radial-gradient(circle at 70% 30%, #15263d 0%, #0a1320 85%)' }}>
        <div className="wrap" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Hero Left Column */}
          <div style={{ textAlign: 'left' }}>
            <span className="kick" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '6px 14px', background: 'rgba(255,107,53,0.12)', border: '1px solid rgba(255,107,53,0.35)', borderRadius: '999px', fontSize: '12px', color: 'var(--sunrise-300)', marginBottom: '18px', fontWeight: 600 }}>
              <Zap size={14} />
              AI-Powered Marketing for Founders Who Build Alone
            </span>
            
            <h1 className="h-display" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)', margin: '0 0 16px', lineHeight: 1.08, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
              A full marketing team's output, <span style={{ color: 'var(--sunrise-300)' }}>without hiring the team.</span>
            </h1>
            
            <p className="h-sub" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', color: 'var(--navy-200)', margin: '0 0 28px', lineHeight: 1.6, maxWidth: '600px' }}>
              You built the product solo. Marketing shouldn't need five hires. We set up AI campaigns, audience research, and automated funnels that keep bringing in leads while you focus on building.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <a className="btn btn-primary" href="#audit-form" style={{ padding: '12px 26px', fontSize: '15px', boxShadow: '0 0 24px rgba(255,107,53,0.45)', textDecoration: 'none' }}>
                Get My Free AI Marketing Audit &rarr;
              </a>
              <a className="btn btn-ghost" href="#pricing" style={{ padding: '12px 22px', fontSize: '15px', color: '#FFFFFF', borderColor: 'var(--navy-500)', textDecoration: 'none' }}>
                See Plans &amp; Pricing
              </a>
            </div>

            {/* Trust Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--navy-300)', fontSize: '13.5px' }}>
              <ShieldCheck size={18} color="#1FBF75" />
              <span>Trusted by <strong>4,000+ solopreneurs</strong> &middot; Plans from <strong>$300</strong> &middot; <strong>No long-term contracts</strong></span>
            </div>
          </div>

          {/* Hero Console Right Column */}
          <div style={{
            background: 'rgba(13, 23, 37, 0.95)',
            border: '1px solid var(--navy-600)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(56, 182, 245, 0.12)',
            backdropFilter: 'blur(16px)',
            color: '#EEF3F8',
            minHeight: '395px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ background: '#09111c', padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--navy-700)', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }}></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--navy-300)', marginLeft: '6px' }}>bootsolo-ai-engine.terminal</span>
              </div>
              <div style={{ fontSize: '10.5px', padding: '3px 9px', borderRadius: '999px', background: 'rgba(31, 191, 117, 0.15)', color: '#3ee099', border: '1px solid rgba(31, 191, 117, 0.35)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1FBF75' }}></span>
                <span>Live Optimization Active</span>
              </div>
            </div>

            {/* Console Tabs */}
            <div style={{
              display: 'flex',
              background: '#0D1827',
              borderBottom: '1px solid var(--navy-700)',
              padding: '4px 10px 0',
              gap: '6px',
              overflowX: 'hidden',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              <button 
                onClick={() => setConsoleTab('campaigns')}
                style={{
                  background: consoleTab === 'campaigns' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                  border: 'none',
                  color: consoleTab === 'campaigns' ? '#fff' : 'var(--navy-300)',
                  borderBottom: consoleTab === 'campaigns' ? '2px solid var(--sunrise)' : '2px solid transparent',
                  padding: '8px 10px',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: '8px 8px 0 0',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  flex: '1 1 0'
                }}>
                <Target size={14} /> 1. AI Campaigns
              </button>
              <button 
                onClick={() => setConsoleTab('vibe')}
                style={{
                  background: consoleTab === 'vibe' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                  border: 'none',
                  color: consoleTab === 'vibe' ? '#fff' : 'var(--navy-300)',
                  borderBottom: consoleTab === 'vibe' ? '2px solid var(--sunrise)' : '2px solid transparent',
                  padding: '8px 10px',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: '8px 8px 0 0',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  flex: '1 1 0'
                }}>
                <Sparkles size={14} /> 2. Vibe Intelligence
              </button>
              <button 
                onClick={() => setConsoleTab('funnels')}
                style={{
                  background: consoleTab === 'funnels' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                  border: 'none',
                  color: consoleTab === 'funnels' ? '#fff' : 'var(--navy-300)',
                  borderBottom: consoleTab === 'funnels' ? '2px solid var(--sunrise)' : '2px solid transparent',
                  padding: '8px 10px',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: '8px 8px 0 0',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  flex: '1 1 0'
                }}>
                <Workflow size={14} /> 3. Auto Funnels
              </button>
            </div>

            {/* Tab Panes Wrapper with Fixed/Steady Min-Height */}
            <div style={{ padding: '20px', minHeight: '235px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              {consoleTab === 'campaigns' && (
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>AD VARIATIONS</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sunrise-300)' }}>50 Tested</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>COST PER LEAD</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#1FBF75' }}>-52.4%</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>BUDGET ENGINE</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ice-300)' }}>Auto-Shift</div>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '3px solid var(--sunrise)', borderRadius: '6px', padding: '12px', fontSize: '12.5px', minHeight: '98px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--sunrise-300)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '11px', marginBottom: '4px' }}>
                      <span>ANGLE #18 &middot; Meta &amp; LinkedIn</span>
                      <span style={{ color: '#1FBF75' }}>Scaling Winner (CTR 4.8%)</span>
                    </div>
                    <p style={{ margin: '0 0 6px', color: 'var(--navy-100)', lineHeight: 1.45 }}>
                      &ldquo;You built the product solo. Marketing shouldn't need five hires. We set up campaigns that test themselves.&rdquo;
                    </p>
                    <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>
                      Budget shifted: 65% auto-allocated to high-performing creatives.
                    </div>
                  </div>
                </div>
              )}

              {consoleTab === 'vibe' && (
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>NICHE SOURCE</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ice-300)' }}>Subreddit / X</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>RESONANCE</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sunrise-300)' }}>94 / 100</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>TONE CHECK</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#1FBF75' }}>Zero Fluff</div>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '3px solid var(--ice)', borderRadius: '6px', padding: '12px', fontSize: '12.5px', minHeight: '98px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ice-300)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '11px', marginBottom: '4px' }}>
                      <span>AUDIENCE MAP &middot; Bootstrapped SaaS</span>
                      <span style={{ color: 'var(--sunrise-300)' }}>High Resonance (94/100)</span>
                    </div>
                    <p style={{ margin: '0 0 6px', color: 'var(--navy-100)', lineHeight: 1.45 }}>
                      &ldquo;Sick of paying $10k retainer agencies who deliver generic slide decks. Need actual signups while coding.&rdquo;
                    </p>
                    <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>
                      Winning Hook: &ldquo;Stop doing marketing on weekends. Here's a pipeline that feeds itself.&rdquo;
                    </div>
                  </div>
                </div>
              )}

              {consoleTab === 'funnels' && (
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>CONNECTOR</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#1FBF75' }}>Make / Zapier</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>NURTURE FLOW</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sunrise-300)' }}>4 Stages</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>HOT HANDOFF</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ice-300)' }}>Automated</div>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '3px solid var(--success)', borderRadius: '6px', padding: '12px', fontSize: '12.5px', minHeight: '98px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1FBF75', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '11px', marginBottom: '4px' }}>
                      <span>TRIGGER: Opt-In &rarr; Lead Score Threshold</span>
                      <span style={{ color: 'var(--ice-300)' }}>Zero-Touch Handoff</span>
                    </div>
                    <p style={{ margin: '0 0 6px', color: 'var(--navy-100)', lineHeight: 1.45 }}>
                      Behavior-based sequence flags buying readiness &rarr; sends direct demo invite link to founder calendar without manual chasing.
                    </p>
                    <div style={{ fontSize: '11px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>
                      Execution: Real-time webhook to founder Slack &middot; Instant calendar sync.
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div style={{ padding: '10px 18px', background: '#09111c', borderTop: '1px solid var(--navy-700)', display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: 'var(--navy-400)', fontFamily: 'var(--font-mono)' }}>
              <span>Live in 3–4 weeks</span>
              <span style={{ color: 'var(--sunrise-300)' }}>Tools you own forever</span>
            </div>
          </div>

        </div>
      </header>

      {/* THE PROBLEM */}
      <section className="section" style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
            <span className="kick" style={{ color: 'var(--destructive)' }}>The Reality Check</span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', margin: '12px 0 18px' }}>
              You don't have a marketing problem.<br /><span style={{ color: 'var(--sunrise-700)' }}>You have a time problem.</span>
            </h2>
            <p className="sec-lead" style={{ margin: '0 auto' }}>
              You know you should post more, test more ads, follow up with every lead, and figure out what your audience actually wants. But you're also the developer, the support desk, and the accountant.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(226, 72, 61, 0.09)', color: 'var(--destructive)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 10px', color: 'var(--summit)' }}>The "This Weekend" Trap</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Marketing becomes the thing you do "this weekend." Leads go cold while you patch server code and fix billing tickets.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(226, 72, 61, 0.09)', color: 'var(--destructive)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <AlertCircle size={22} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 10px', color: 'var(--summit)' }}>Ad Money Bleeding</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Ad money disappears into campaigns no one has time to tune. Cost per acquisition climbs while creatives get stale.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(226, 72, 61, 0.09)', color: 'var(--destructive)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Users size={22} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 10px', color: 'var(--summit)' }}>Leads Lost in Limbo</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Signups happen, but without automated nurture sequences, warm leads don't get followed up on and forget you exist.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(226, 72, 61, 0.09)', color: 'var(--destructive)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Bot size={22} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 10px', color: 'var(--summit)' }}>Unused AI Tools</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                The AI tools you signed up for are sitting unused because nobody had time to connect them into a working system.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--snow)', border: '1px solid var(--border-strong)', borderRadius: '14px', padding: '24px 30px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '16px', color: 'var(--summit)', fontWeight: 600 }}>
              AI can fix this, but only if someone builds the system around it. That's what we do.
            </p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="section" style={{ background: 'var(--frost)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '88px 0' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
            <span className="kick">The Solution</span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', margin: '12px 0 18px' }}>
              Human strategy. AI speed.<br /><span style={{ color: 'var(--sunrise-700)' }}>A system that runs without you.</span>
            </h2>
            <p className="sec-lead" style={{ margin: '0 auto' }}>
              Bootsolo combines a growth strategist who understands your market with AI workflows that do the repetitive work at scale. You get campaigns that test themselves, messaging built on real audience insight, and funnels that nurture leads on autopilot.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,107,53,0.1)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Users size={24} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--sunrise)', textTransform: 'uppercase' }}>Pillar 1 &middot; Human Strategy</span>
              <h3 style={{ fontSize: '22px', margin: '8px 0 12px', color: 'var(--summit)', fontWeight: 700 }}>Market-Nuanced Strategy</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Every campaign starts with a veteran growth strategist mapping your positioning and conversion economics. No AI runs blind without human calibration.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(56,182,245,0.1)', color: 'var(--ice-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Zap size={24} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--ice-700)', textTransform: 'uppercase' }}>Pillar 2 &middot; AI Speed</span>
              <h3 style={{ fontSize: '22px', margin: '8px 0 12px', color: 'var(--summit)', fontWeight: 700 }}>Multi-Variant Velocity</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Generate and test dozens of creative permutations, copy hooks, and audience segments in seconds. You stop guessing and let live data pick the winning angle.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(31,191,117,0.1)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Workflow size={24} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase' }}>Pillar 3 &middot; Autopilot System</span>
              <h3 style={{ fontSize: '22px', margin: '8px 0 12px', color: 'var(--summit)', fontWeight: 700 }}>Autonomous Follow-Up</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Ad budgets automatically shift toward top performers. Nurture workflows score leads and trigger sales handoffs so your calendar fills while you build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD FOR YOU */}
      <section className="section" id="capabilities" style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px' }}>
            <span className="kick">What We Build For You</span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', margin: '12px 0 16px' }}>
              Three high-converting engines for your startup.
            </h2>
          </div>

          {/* 1. AI Campaigns */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '36px', boxShadow: 'var(--shadow-1)', marginBottom: '28px', display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '32px', alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--sunrise)', textTransform: 'uppercase' }}>1. AI Campaigns</span>
              <h3 style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', margin: '10px 0 14px', color: 'var(--summit)', fontWeight: 700 }}>
                AI Campaigns: test 50 ad ideas in the time it takes to write one
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                We use AI to generate and test many creative and audience variations at once, then move your budget toward what's working. You stop guessing and start scaling the winners.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '999px', background: 'var(--frost)', color: 'var(--ice-700)', fontSize: '12px', fontWeight: 600 }}>
                <Check size={14} />
                <span><strong>Best for:</strong> founders spending on ads with no time to optimize them.</span>
              </div>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--summit)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>What you get:</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--fg1)' }}>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--sunrise)" /> <span><strong>Predictive audience targeting</strong></span></li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--sunrise)" /> <span><strong>AI-generated ad variations</strong></span></li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--sunrise)" /> <span><strong>Automated A/B testing</strong></span></li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--sunrise)" /> <span><strong>Budget shifts to top performers on its own</strong></span></li>
              </ul>
            </div>
          </div>

          {/* 2. Vibe Marketing */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '36px', boxShadow: 'var(--shadow-1)', marginBottom: '28px', display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '32px', alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--ice-700)', textTransform: 'uppercase' }}>2. Vibe Marketing</span>
              <h3 style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', margin: '10px 0 14px', color: 'var(--summit)', fontWeight: 700 }}>
                Vibe Marketing: messaging your audience actually feels
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                Most small brands sound generic because they don't know their buyer deeply. We analyze where your audience hangs out, what they talk about, and what makes them act, then turn that into hooks, angles, and campaigns that feel native to their world.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '999px', background: 'rgba(56,182,245,0.12)', color: 'var(--ice-700)', fontSize: '12px', fontWeight: 600 }}>
                <Check size={14} />
                <span><strong>Best for:</strong> brands whose content gets views but no conversions.</span>
              </div>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--summit)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>What you get:</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--fg1)' }}>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--ice-700)" /> <span><strong>Psychographic persona profiles</strong></span></li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--ice-700)" /> <span><strong>Trend spotting in your niche</strong></span></li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--ice-700)" /> <span><strong>Ready-to-use hook and messaging maps</strong></span></li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--ice-700)" /> <span><strong>Community-first campaign ideas</strong></span></li>
              </ul>
            </div>
          </div>

          {/* 3. Marketing Automation */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '36px', boxShadow: 'var(--shadow-1)', display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '32px', alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase' }}>3. Marketing Automation</span>
              <h3 style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', margin: '10px 0 14px', color: 'var(--summit)', fontWeight: 700 }}>
                Marketing Automation: follow up with every lead, automatically
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                Most leads don't buy on day one. We build email sequences, lead scoring, and CRM workflows (using Zapier, Make, or n8n) that nurture every signup and flag hot leads so you only spend time on people ready to buy.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '999px', background: 'rgba(31,191,117,0.12)', color: '#128c52', fontSize: '12px', fontWeight: 600 }}>
                <Check size={14} />
                <span><strong>Best for:</strong> founders who get signups but lose them before the sale.</span>
              </div>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--summit)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>What you get:</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--fg1)' }}>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--success)" /> <span><strong>Lead magnet and demo funnels</strong></span></li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--success)" /> <span><strong>Behavior-based email sequences</strong></span></li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--success)" /> <span><strong>Lead scoring</strong></span></li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={18} color="var(--success)" /> <span><strong>Automatic handoff when a lead is sales-ready</strong></span></li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--snow)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '88px 0' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
            <span className="kick">How It Works</span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', margin: '12px 0 16px' }}>
              From first call to running system in 3–4 weeks
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px 28px', boxShadow: 'var(--shadow-1)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--sunrise)', background: 'rgba(255,107,53,0.08)', padding: '4px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '14px' }}>WEEK 1</span>
              <h3 style={{ fontSize: '22px', color: 'var(--summit)', margin: '0 0 12px', fontWeight: 700 }}>Step 1. Map the terrain</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                A free growth call and AI audit of your current marketing. We find where leads leak and where AI can save the most time.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px 28px', boxShadow: 'var(--shadow-1)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--ice-700)', background: 'rgba(56,182,245,0.1)', padding: '4px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '14px' }}>WEEKS 2–3</span>
              <h3 style={{ fontSize: '22px', color: 'var(--summit)', margin: '0 0 12px', fontWeight: 700 }}>Step 2. Build the route</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We set up your campaigns, personas, and funnels, all inside tools you own.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px 28px', boxShadow: 'var(--shadow-1)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--success)', background: 'rgba(31,191,117,0.1)', padding: '4px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '14px' }}>ONGOING</span>
              <h3 style={{ fontSize: '22px', color: 'var(--summit)', margin: '0 0 12px', fontWeight: 700 }}>Step 3. Climb and optimize</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We review results on your plan's schedule, cut what's not working, and scale what is. You get clear reports, not jargon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOTSOLO */}
      <section className="section dark" style={{ background: 'var(--summit)', color: '#EEF3F8', padding: '88px 0', borderBottom: '1px solid var(--navy-700)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
            <span className="kick" style={{ color: 'var(--sunrise-300)' }}>Why Bootsolo</span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', margin: '12px 0 16px', color: '#FFFFFF' }}>
              Why Bootsolo
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--r-card)', padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255, 107, 53, 0.14)', color: 'var(--sunrise-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Users size={22} />
              </div>
              <h3 style={{ fontSize: '18px', color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>Built for one-person and small teams</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                Our plans are priced for bootstrapped budgets, not enterprise retainers.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--r-card)', padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56,182,245,0.15)', color: 'var(--ice-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Database size={22} />
              </div>
              <h3 style={{ fontSize: '18px', color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>You own everything</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                Your prompts, automations, email flows, and data stay yours, even if you leave.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--r-card)', padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(31,191,117,0.15)', color: '#3ee099', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Target size={22} />
              </div>
              <h3 style={{ fontSize: '18px', color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>Strategy first, AI second</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                AI without a plan just produces more noise. Every workflow starts with a human strategist and a clear goal.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--r-card)', padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(244,183,64,0.15)', color: 'var(--summit-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '18px', color: '#FFFFFF', margin: '0 0 10px', fontWeight: 700 }}>No black box</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                You'll know exactly what's running, why, and what it's producing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }}>
            <span className="kick">Verified Outcomes</span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', margin: '12px 0 16px' }}>
              Results
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            <div style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', borderRadius: 'var(--r-card)', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(32px, 3.8vw, 44px)', fontWeight: 700, color: 'var(--sunrise-700)', lineHeight: 1, marginBottom: '6px' }}>+184%</div>
              <div style={{ fontSize: '13.5px', color: 'var(--fg2)', fontWeight: 500 }}>More Qualified Leads</div>
            </div>
            <div style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', borderRadius: 'var(--r-card)', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(32px, 3.8vw, 44px)', fontWeight: 700, color: 'var(--ice-700)', lineHeight: 1, marginBottom: '6px' }}>16+ hrs</div>
              <div style={{ fontSize: '13.5px', color: 'var(--fg2)', fontWeight: 500 }}>Saved Per Week</div>
            </div>
            <div style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', borderRadius: 'var(--r-card)', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(32px, 3.8vw, 44px)', fontWeight: 700, color: 'var(--success)', lineHeight: 1, marginBottom: '6px' }}>-52%</div>
              <div style={{ fontSize: '13.5px', color: 'var(--fg2)', fontWeight: 500 }}>Lower Cost Per Lead</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--fg1)', fontStyle: 'italic', margin: '0 0 16px' }}>
                &ldquo;Before Bootsolo, our Meta and Google ads were a black hole. Within 3 weeks of deploying their AI campaign testing, our CPL dropped 52% and lead volume doubled without spending an extra dime on headcount.&rdquo;
              </p>
              <div style={{ fontSize: '13px', color: 'var(--fg2)', fontWeight: 600 }}>Marcus Chen, Founder &middot; SaaS</div>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--fg1)', fontStyle: 'italic', margin: '0 0 16px' }}>
                &ldquo;I hate writing marketing copy. The Vibe Marketing sprint nailed the exact humor and technical language our developer audience actually responds to. Signups jumped 184% in month one.&rdquo;
              </p>
              <div style={{ fontSize: '13px', color: 'var(--fg2)', fontWeight: 600 }}>Sarah Lindqvist, Solo Creator &middot; Dev Tools</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link className="btn btn-ghost" href="/work">
              See full case studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing" style={{ background: 'var(--snow)', borderTop: '1px solid var(--border)', padding: '88px 0' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 36px' }}>
            <span className="kick">Pricing</span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', margin: '12px 0 16px' }}>
              Plans that grow with you. Start small, scale when it works.
            </h2>
          </div>

          {/* Pricing Filter Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '0 0 36px', flexWrap: 'wrap' }}>
            {['all', 'ai-mkt', 'vibe', 'automation'].map((cat) => (
              <button
                key={cat}
                onClick={() => setPricingCategory(cat)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '999px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  background: pricingCategory === cat ? 'var(--summit)' : 'var(--white)',
                  color: pricingCategory === cat ? '#fff' : 'var(--fg2)',
                  borderColor: pricingCategory === cat ? 'var(--summit)' : 'var(--border-strong)'
                }}>
                {cat === 'all' && 'All Plans'}
                {cat === 'ai-mkt' && 'AI-Powered Marketing (Monthly)'}
                {cat === 'vibe' && 'Vibe Marketing'}
                {cat === 'automation' && 'Marketing Automation'}
              </button>
            ))}
          </div>

          {/* AI-Powered Marketing */}
          {(pricingCategory === 'all' || pricingCategory === 'ai-mkt') && (
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '22px', margin: '0 0 20px', color: 'var(--summit)', fontWeight: 700 }}>AI-Powered Marketing</h3>
              <div className="price-grid">
                <div className="price-card">
                  <div className="price-name">AI Launch Lite</div>
                  <div className="price-amt">$400<span style={{ fontSize: '16px', color: 'var(--fg2)', fontWeight: 400 }}>/mo</span></div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>Monthly</div>
                  <div className="price-desc">Test AI marketing on one channel without a big commitment.</div>
                  <ul className="price-feats">
                    <li><Check size={16} /> 1 AI-assisted campaign</li>
                    <li><Check size={16} /> Custom prompt set</li>
                    <li><Check size={16} /> Setup in one tool</li>
                    <li><Check size={16} /> Monthly results report</li>
                  </ul>
                  <a className="btn btn-ghost" href="#audit-form" style={{ width: '100%', justifyContent: 'center' }}>Start with Lite</a>
                </div>

                <div className="price-card feat">
                  <div className="price-tag">Most Popular</div>
                  <div className="price-name">AI Growth Engine</div>
                  <div className="price-amt">$700<span style={{ fontSize: '16px', color: 'var(--fg2)', fontWeight: 400 }}>/mo</span></div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--sunrise-700)', textTransform: 'uppercase', marginBottom: '8px' }}>Monthly</div>
                  <div className="price-desc">For founders ready to grow on two channels.</div>
                  <ul className="price-feats">
                    <li><Check size={16} /> Everything in Lite</li>
                    <li><Check size={16} /> 2 channels</li>
                    <li><Check size={16} /> AI content outlines</li>
                    <li><Check size={16} /> Light funnel automation</li>
                    <li><Check size={16} /> Optimization every two weeks</li>
                  </ul>
                  <a className="btn btn-primary" href="#audit-form" style={{ width: '100%', justifyContent: 'center' }}>Start Growing</a>
                </div>

                <div className="price-card">
                  <div className="price-name">AI Performance System</div>
                  <div className="price-amt">$1,200<span style={{ fontSize: '16px', color: 'var(--fg2)', fontWeight: 400 }}>/mo</span></div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>Monthly</div>
                  <div className="price-desc">A complete AI marketing engine across 3–4 channels with full strategy.</div>
                  <ul className="price-feats">
                    <li><Check size={16} /> 3–4 channels</li>
                    <li><Check size={16} /> Full strategy</li>
                    <li><Check size={16} /> Advanced prompt libraries</li>
                    <li><Check size={16} /> Multi-step automation</li>
                    <li><Check size={16} /> Weekly optimization reviews</li>
                  </ul>
                  <a className="btn btn-ghost" href="#audit-form" style={{ width: '100%', justifyContent: 'center' }}>Book a Strategy Call</a>
                </div>
              </div>
            </div>
          )}

          {/* Vibe Marketing */}
          {(pricingCategory === 'all' || pricingCategory === 'vibe') && (
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '22px', margin: '0 0 20px', color: 'var(--summit)', fontWeight: 700 }}>Vibe Marketing</h3>
              <div className="price-grid">
                <div className="price-card">
                  <div className="price-name">Vibe Snapshot</div>
                  <div className="price-amt">$300</div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>One-Time</div>
                  <div className="price-desc">Find out who your audience really is.</div>
                  <ul className="price-feats">
                    <li><Check size={16} /> One audience scan</li>
                    <li><Check size={16} /> Persona profile</li>
                    <li><Check size={16} /> Sheet of ready-to-use campaign hooks</li>
                  </ul>
                  <a className="btn btn-ghost" href="#audit-form" style={{ width: '100%', justifyContent: 'center' }}>Get Vibe Snapshot</a>
                </div>

                <div className="price-card feat">
                  <div className="price-tag">Most Popular</div>
                  <div className="price-name">Vibe Positioning Sprint</div>
                  <div className="price-amt">$500</div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--sunrise-700)', textTransform: 'uppercase', marginBottom: '8px' }}>One-Time</div>
                  <div className="price-desc">Deeper psychographics, 3–4 audience segments.</div>
                  <ul className="price-feats">
                    <li><Check size={16} /> Deeper psychographics</li>
                    <li><Check size={16} /> 3–4 audience segments</li>
                    <li><Check size={16} /> Full messaging map with examples</li>
                  </ul>
                  <a className="btn btn-primary" href="#audit-form" style={{ width: '100%', justifyContent: 'center' }}>Launch Positioning Sprint</a>
                </div>

                <div className="price-card">
                  <div className="price-name">Always-On Vibe Lab</div>
                  <div className="price-amt">$900<span style={{ fontSize: '16px', color: 'var(--fg2)', fontWeight: 400 }}>/mo</span></div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>Monthly</div>
                  <div className="price-desc">Ongoing audience tracking and continuous ideas.</div>
                  <ul className="price-feats">
                    <li><Check size={16} /> Ongoing audience tracking</li>
                    <li><Check size={16} /> Monthly insights</li>
                    <li><Check size={16} /> Steady backlog of campaign ideas</li>
                    <li><Check size={16} /> Quarterly positioning updates</li>
                  </ul>
                  <a className="btn btn-ghost" href="#audit-form" style={{ width: '100%', justifyContent: 'center' }}>Join Vibe Lab</a>
                </div>
              </div>
            </div>
          )}

          {/* Marketing Automation */}
          {(pricingCategory === 'all' || pricingCategory === 'automation') && (
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '22px', margin: '0 0 20px', color: 'var(--summit)', fontWeight: 700 }}>Marketing Automation</h3>
              <div className="price-grid">
                <div className="price-card">
                  <div className="price-name">Automation Starter Funnel</div>
                  <div className="price-amt">$700</div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>One-Time</div>
                  <div className="price-desc">One working funnel to stop losing leads.</div>
                  <ul className="price-feats">
                    <li><Check size={16} /> One working funnel</li>
                    <li><Check size={16} /> Opt-in plus a 3–4 email sequence</li>
                    <li><Check size={16} /> Audience tags</li>
                    <li><Check size={16} /> Monthly health check</li>
                  </ul>
                  <a className="btn btn-ghost" href="#audit-form" style={{ width: '100%', justifyContent: 'center' }}>Deploy Starter Funnel</a>
                </div>

                <div className="price-card feat">
                  <div className="price-tag">Most Popular</div>
                  <div className="price-name">Multi-Step Nurture System</div>
                  <div className="price-amt">$1,000</div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--sunrise-700)', textTransform: 'uppercase', marginBottom: '8px' }}>One-Time</div>
                  <div className="price-desc">Two funnels (lead magnet and demo).</div>
                  <ul className="price-feats">
                    <li><Check size={16} /> Two funnels (lead magnet and demo)</li>
                    <li><Check size={16} /> 6–8 emails</li>
                    <li><Check size={16} /> Lead scoring rules</li>
                    <li><Check size={16} /> Monthly optimization with simple reporting</li>
                  </ul>
                  <a className="btn btn-primary" href="#audit-form" style={{ width: '100%', justifyContent: 'center' }}>Deploy Nurture System</a>
                </div>

                <div className="price-card">
                  <div className="price-name">Revenue Automation Suite</div>
                  <div className="price-amt">$1,600</div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>One-Time</div>
                  <div className="price-desc">A complete multi-offer funnel with 10+ emails.</div>
                  <ul className="price-feats">
                    <li><Check size={16} /> Multi-offer funnel with 10+ emails</li>
                    <li><Check size={16} /> Advanced scoring</li>
                    <li><Check size={16} /> Integrations &amp; dashboards</li>
                    <li><Check size={16} /> Weekly optimization</li>
                  </ul>
                  <a className="btn btn-ghost" href="#audit-form" style={{ width: '100%', justifyContent: 'center' }}>Deploy Revenue Suite</a>
                </div>
              </div>
            </div>
          )}

          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '15px', color: 'var(--fg1)' }}>
              <strong>Not sure which fits?</strong> Most founders start with one service and add more once they see results.
            </div>
            <Link className="btn btn-ghost btn-sm" href="/custom-quote">
              Build a custom plan &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }}>
            <span className="kick">FAQ</span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', margin: '12px 0 16px' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    fontSize: '16.5px',
                    fontWeight: 600,
                    color: 'var(--summit)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: '16px'
                  }}>
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      transform: openFaq === idx ? 'rotate(180deg)' : 'none', 
                      transition: 'transform 200ms ease',
                      flexShrink: 0
                    }} 
                  />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 24px 22px', fontSize: '15px', lineHeight: 1.65, color: 'var(--fg2)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta dark" style={{ background: 'var(--summit)', padding: '96px 0', borderTop: '1px solid var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
        <div className="wrap">
          <div className="cta-box" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="cta-t" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', color: '#FFFFFF', margin: '0 0 18px', lineHeight: 1.1 }}>
              Stop doing marketing on weekends.
            </h2>
            <p className="cta-s" style={{ fontSize: 'clamp(16px, 1.3vw, 19px)', color: 'var(--navy-200)', margin: '0 auto 32px', lineHeight: 1.6 }}>
              Get a free AI marketing audit. We'll show you where you're losing leads and the 3 quickest automations that could win them back. No pitch, just a plan.
            </p>
            <a className="btn btn-primary" href="#audit-form" style={{ padding: '14px 34px', fontSize: '16px', boxShadow: '0 0 28px rgba(255,107,53,0.45)', textDecoration: 'none' }}>
              Get My Free Audit
            </a>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section" id="audit-form" style={{ background: 'var(--frost)', padding: '88px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3vw, 40px)', margin: '0 0 14px' }}>
              Get your free AI marketing audit
            </h2>
            <p className="sec-lead" style={{ margin: '0 auto', fontSize: '16px' }}>
              Takes 60 seconds. We reply within 24 hours with a personalized route map.
            </p>
          </div>

          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px', maxWidth: '620px', margin: '0 auto', boxShadow: 'var(--shadow-2)' }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(31,191,117,0.15)', color: '#1FBF75', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: '22px', color: 'var(--summit)', margin: '0 0 10px' }}>Audit Request Received!</h3>
                <p style={{ color: 'var(--fg2)', fontSize: '15px', lineHeight: 1.6 }}>
                  Our team will analyze your current marketing and send your personalized route map within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', display: 'block', marginBottom: '6px' }}>Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', height: '46px', padding: '0 14px', border: '1px solid var(--border-strong)', borderRadius: '9px', fontSize: '14.5px' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', display: 'block', marginBottom: '6px' }}>Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="you@startup.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', height: '46px', padding: '0 14px', border: '1px solid var(--border-strong)', borderRadius: '9px', fontSize: '14.5px' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', display: 'block', marginBottom: '6px' }}>Website (Optional)</label>
                  <input 
                    type="url" 
                    placeholder="https://yourstartup.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    style={{ width: '100%', height: '46px', padding: '0 14px', border: '1px solid var(--border-strong)', borderRadius: '9px', fontSize: '14.5px' }}
                  />
                </div>

                <div style={{ marginBottom: '26px' }}>
                  <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', display: 'block', marginBottom: '6px' }}>
                    What's your biggest marketing headache right now? *
                  </label>
                  <select 
                    required 
                    value={formData.headache}
                    onChange={(e) => setFormData({ ...formData, headache: e.target.value })}
                    style={{ width: '100%', height: '46px', padding: '0 14px', border: '1px solid var(--border-strong)', borderRadius: '9px', fontSize: '14.5px', color: formData.headache ? 'var(--fg1)' : 'var(--fg3)' }}>
                    <option value="" disabled>Select your biggest headache...</option>
                    <option value="not enough leads">not enough leads</option>
                    <option value="leads don't convert">leads don't convert</option>
                    <option value="no time for marketing">no time for marketing</option>
                    <option value="ad spend not working">ad spend not working</option>
                    <option value="other">other</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={formSubmitting}
                  className="btn btn-primary" 
                  style={{ width: '100%', height: '48px', fontSize: '15.5px', justifyContent: 'center' }}>
                  {formSubmitting ? 'Sending...' : 'Send Me My Audit'}
                </button>

                <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '12.5px', color: 'var(--fg3)' }}>
                  No spam. No sales pressure. Just a plan.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
