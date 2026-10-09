'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  Target,
  Search,
  MousePointerClick,
  Sparkles,
  PhoneCall,
  Clock,
  AlertCircle
} from 'lucide-react';

export default function PerformanceLeadGenClient() {
  const [consoleTab, setConsoleTab] = useState('telemetry-ads');
  const [pricingCategory, setPricingCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  // Growth Roadmap Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    challenge: 'not enough leads',
    phone: ''
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
          name: formData.name,
          email: formData.email,
          company: formData.website,
          phone: formData.phone || 'N/A',
          service_interested: 'Performance Marketing & Lead Generation Roadmap',
          message: `Biggest Challenge: ${formData.challenge}`,
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
      q: "Do I need a big ad budget?",
      a: "No. Our plans work at any budget. We'll recommend where to start based on your goals, and you decide how much to spend."
    },
    {
      q: "Is the ad spend included in the price?",
      a: "No. Plan fees cover strategy, setup, and management. You pay ad platforms directly, so you always control your budget."
    },
    {
      q: "Which should I start with: ads, CRO, or lead gen?",
      a: "If you already have traffic, CRO usually gives the fastest return. If you need traffic, start with paid search to capture existing demand. If you sell B2B with a clear target list, outbound lead gen often books conversations fastest. Your free roadmap will recommend one."
    },
    {
      q: "How soon will I see results?",
      a: "Paid campaigns typically generate data within the first 2–3 weeks, and outbound sequences start booking conversations within 3–4 weeks. Optimization improves results month over month."
    },
    {
      q: "Am I locked into a contract?",
      a: "No. Bootsolo has no long-term contracts."
    },
    {
      q: "Can you do a one-off project instead of a retainer?",
      a: "Yes. You can start with a landing page audit, an ad account cleanup, or a focused campaign setup."
    }
  ];

  return (
    <div className="perf-leadgen-page-root">
      {/* HERO SECTION */}
      <header className="hero dark" style={{ minHeight: 'calc(100vh - 66px)', padding: '24px 0 32px', borderBottom: '1px solid var(--navy-700)', background: 'radial-gradient(circle at 75% 25%, #18283e 0%, #0a1320 85%)', display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}>
        <div className="wrap" style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
          
          {/* Left Column */}
          <div style={{ textAlign: 'left' }}>
            <span className="kick" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 12px', background: 'rgba(255,107,53,0.12)', border: '1px solid rgba(255,107,53,0.35)', borderRadius: '999px', fontSize: '11.5px', color: 'var(--sunrise-300)', marginBottom: '12px', fontWeight: 600 }}>
              <TrendingUp size={13} />
              Performance Marketing &amp; Lead Generation
            </span>
            
            <h1 className="h-display" style={{ fontSize: 'clamp(28px, 3.2vw, 46px)', margin: '0 0 12px', lineHeight: 1.1, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
              Stop paying for clicks. <span style={{ color: 'var(--sunrise-300)' }}>Start paying for pipeline.</span>
            </h1>
            
            <p className="h-sub" style={{ fontSize: 'clamp(14.5px, 1.15vw, 17px)', color: 'var(--navy-200)', margin: '0 0 20px', lineHeight: 1.55, maxWidth: '580px' }}>
              We run your ads, fix the pages they land on, and build outbound systems that fill your calendar with qualified leads. Lean plans, clear reporting, and every dollar tracked to an outcome.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '18px' }}>
              <a className="btn btn-primary" href="#roadmap-form" style={{ padding: '10px 22px', fontSize: '14px', boxShadow: '0 0 24px rgba(255,107,53,0.45)', textDecoration: 'none' }}>
                Get My Free Growth Roadmap &rarr;
              </a>
              <a className="btn btn-ghost" href="#pricing" style={{ padding: '10px 18px', fontSize: '14px', color: '#FFFFFF', borderColor: 'var(--navy-500)', textDecoration: 'none' }}>
                See Plans &amp; Pricing
              </a>
            </div>

            {/* Proof Strip directly under the CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '9px 14px', color: 'var(--navy-200)', fontSize: '12.5px', lineHeight: '1.4' }}>
              <div><strong style={{ color: '#fff' }}>+312%</strong> signups in one quarter</div>
              <span style={{ color: 'var(--navy-500)' }}>&middot;</span>
              <div><strong style={{ color: '#fff' }}>&minus;58%</strong> cost per sale for D2C</div>
              <span style={{ color: 'var(--navy-500)' }}>&middot;</span>
              <div><strong style={{ color: '#fff' }}>4,000+</strong> solopreneurs</div>
            </div>

            {/* Trust line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '12px', color: 'var(--navy-300)', fontSize: '12.5px' }}>
              <ShieldCheck size={16} color="#1FBF75" />
              <span><strong>No long-term contracts</strong> &middot; <strong>Plain-language reporting</strong> &middot; <strong>Works at any budget</strong></span>
            </div>
          </div>

          {/* Right Column (Console Telemetry) */}
          <div>
            <div style={{ background: 'rgba(13, 23, 37, 0.96)', border: '1px solid var(--navy-600)', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55), 0 0 30px rgba(255, 107, 53, 0.12)', backdropFilter: 'blur(16px)', color: '#EEF3F8', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#09111c', padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--navy-700)', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }}></span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--navy-300)' }}>bootsolo://telemetry/pipeline-engine</div>
                <div style={{ fontSize: '10.5px', padding: '3px 9px', borderRadius: '999px', background: 'rgba(31, 191, 117, 0.15)', color: '#3ee099', border: '1px solid rgba(31, 191, 117, 0.35)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1FBF75' }}></span>
                  <span>LIVE TRACKING</span>
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
                  onClick={() => setConsoleTab('telemetry-ads')}
                  style={{
                    background: consoleTab === 'telemetry-ads' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                    border: 'none',
                    color: consoleTab === 'telemetry-ads' ? '#fff' : 'var(--navy-300)',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    borderBottom: consoleTab === 'telemetry-ads' ? '2px solid var(--sunrise)' : '2px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0'
                  }}
                >
                  <Search size={13} />
                  Paid Ads
                </button>
                <button 
                  onClick={() => setConsoleTab('telemetry-cro')}
                  style={{
                    background: consoleTab === 'telemetry-cro' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                    border: 'none',
                    color: consoleTab === 'telemetry-cro' ? '#fff' : 'var(--navy-300)',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    borderBottom: consoleTab === 'telemetry-cro' ? '2px solid var(--sunrise)' : '2px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0'
                  }}
                >
                  <MousePointerClick size={13} />
                  CRO &amp; Funnels
                </button>
                <button 
                  onClick={() => setConsoleTab('telemetry-outbound')}
                  style={{
                    background: consoleTab === 'telemetry-outbound' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                    border: 'none',
                    color: consoleTab === 'telemetry-outbound' ? '#fff' : 'var(--navy-300)',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    borderBottom: consoleTab === 'telemetry-outbound' ? '2px solid var(--sunrise)' : '2px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0'
                  }}
                >
                  <PhoneCall size={13} />
                  Outbound Pipeline
                </button>
              </div>

              {/* Console Panes Wrapper */}
              <div style={{ padding: '20px', minHeight: '295px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {consoleTab === 'telemetry-ads' && (
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Cost Per Sale</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>&minus;58.4%</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Buyer Intent Index</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>94.2%</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Wasted Spend Cut</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--sunrise)' }}>$1,420/mo</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid #1FBF75', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Google Ads: Negative Match Pruning</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#1FBF75' }}>LIVE</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Excluded 148 irrelevant search queries. 100% of budget routed to bottom-of-funnel comparative searches.</div>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid var(--ice)', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>LinkedIn Direct-Response Campaign</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ice)' }}>SCALING</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Targeting verified Founders &amp; VP Product at 50-200 employee firms. Form submit rate: 4.8%.</div>
                      </div>
                    </div>
                  </div>
                )}

                {consoleTab === 'telemetry-cro' && (
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Landing Page CVR</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>2.8% &rarr; 6.4%</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Signups Lift</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>+312%</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Form Abandon Drop</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>&minus;42%</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid var(--sunrise)', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Hero Above-the-Fold Teardown</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--sunrise)' }}>CYCLE 1</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Removed generic hero video, introduced interactive demo preview. Mobile bounce rate dropped 31%.</div>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid #1FBF75', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Frictionless Micro-Quiz Magnet</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#1FBF75' }}>ACTIVE</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Replaced 6-field inquiry form with 2-step diagnostic quiz. Lead capture velocity increased by 2.3x.</div>
                      </div>
                    </div>
                  </div>
                )}

                {consoleTab === 'telemetry-outbound' && (
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Meetings Booked</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>24 / mo</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Reply Rate</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>18.6%</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Qualified SQL Rate</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>79%</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid var(--ice)', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>LinkedIn Outreach Sequence 02</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ice)' }}>STEP 3</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Value-first teardown sent to 120 qualified prospects. 14 booked calls directly on founder calendar.</div>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid #1FBF75', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Instant CRM Hand-off Webhook</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#1FBF75' }}>0.4s LATENCY</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Zero lead drop-off. Real-time Slack notification sent the second an inbound prospect books.</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* THE PROBLEM SECTION */}
      <section className="section" style={{ padding: '84px 0', background: 'var(--snow)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <span className="eyebrow" style={{ color: 'var(--destructive)' }}>The Problem</span>
            <h2 className="sec" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', lineHeight: 1.15, color: 'var(--summit)', margin: '12px 0 20px' }}>
              Your ads get clicks. Your bank account doesn't notice.
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--fg2)', marginBottom: '16px' }}>
              Most small teams don't have a traffic problem. They have a leak. Ads send people to pages that don't convert. Leads fill out a form and wait three days for a reply. Reports show impressions and click-through rates, but nobody can answer the only question that matters: <strong>what did we get for the money?</strong>
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--fg2)' }}>
              Big companies fix this with a media buyer, a CRO specialist, and an SDR team. You need the same results without the same payroll.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(226, 72, 61, 0.09)', color: 'var(--destructive)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <AlertCircle size={22} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 8px' }}>The Landing Page Leak</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>
                Expensive ad clicks land on vague homepages with slow load times, confusing copy, and 8 competing CTAs. Visitors bounce within 4 seconds, flushing your ad budget down the drain.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(226, 72, 61, 0.09)', color: 'var(--destructive)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 8px' }}>The 72-Hour Response Void</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>
                When a warm lead finally fills out your contact form, they wait 2 to 3 days for a manual email reply. By the time you reach them, they’ve already bought from your competitor.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(226, 72, 61, 0.09)', color: 'var(--destructive)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <TrendingUp size={22} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 8px' }}>Vanity Metric Reports</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>
                Agencies hand you 40-page PDF reports filled with impressions, reach, and cost-per-click charts—celebrating "engagement" while your calendar sits empty and revenue stays flat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION SECTION */}
      <section className="section" style={{ padding: '84px 0', background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand-fg)' }}>The Solution</span>
            <h2 className="sec" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', lineHeight: 1.15, color: 'var(--summit)', margin: '12px 0 18px' }}>
              One revenue engine, four connected parts
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--fg2)' }}>
              We don't sell ads in isolation. Paid traffic, landing pages, and lead follow-up only work when they're built together, so we build them together. Each part strengthens the next, and you get one team accountable for the result.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '40px' }}>
            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--sunrise)', background: 'rgba(255, 107, 53, 0.1)', padding: '4px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '12px' }}>PART 01</span>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--summit)', marginBottom: '8px' }}>Paid Search</div>
              <div style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.5 }}>Capture existing intent the second high-value buyers search for solutions in your category.</div>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--sunrise)', background: 'rgba(255, 107, 53, 0.1)', padding: '4px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '12px' }}>PART 02</span>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--summit)', marginBottom: '8px' }}>Paid Social</div>
              <div style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.5 }}>Create category demand and target specific decision-makers by exact job title and company size.</div>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--sunrise)', background: 'rgba(255, 107, 53, 0.1)', padding: '4px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '12px' }}>PART 03</span>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--summit)', marginBottom: '8px' }}>CRO &amp; Funnels</div>
              <div style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.5 }}>Turn high-cost ad traffic into buyers by eliminating leaks on high-friction landing pages.</div>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--sunrise)', background: 'rgba(255, 107, 53, 0.1)', padding: '4px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '12px' }}>PART 04</span>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--summit)', marginBottom: '8px' }}>Lead Generation</div>
              <div style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.5 }}>Proactive outbound sequences and instant routing so no qualified opportunity is ever missed.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="section" id="what-we-do" style={{ padding: '84px 0', background: 'var(--snow)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
            <span className="eyebrow">Capabilities</span>
            <h2 className="sec" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', color: 'var(--summit)', margin: '12px 0 16px' }}>
              What We Do
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)' }}>
              Everything we build is engineered around one core deliverable: filling your pipeline with qualified, ready-to-buy prospects.
            </p>
          </div>

          {/* 1. Paid Search */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '18px', padding: '36px', boxShadow: 'var(--shadow-1)', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>01 / Paid Search</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--summit)', margin: '4px 0 0' }}>Show up the moment buyers are looking</h3>
              </div>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 16px' }}>
              When someone searches for what you sell, you should be the first answer. We build and manage Google and Bing campaigns around high-intent keywords, cut wasted spend with negative keyword lists, and target buyers comparing you to competitors.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '20px 0' }}>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Google Ads (Search, Shopping, Performance Max)</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Intent-based bidding</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Negative keyword cleanup</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Competitor conquesting campaigns</span>
            </div>
            <div style={{ background: '#F0FDF4', border: '1px solid rgba(31, 191, 117, 0.3)', borderRadius: '10px', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', color: '#166534', fontSize: '14px', fontWeight: 500 }}>
              <Check size={18} strokeWidth={2.5} />
              <span><strong>The result you want:</strong> more leads from people already ready to buy.</span>
            </div>
          </div>

          {/* 2. Paid Social */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '18px', padding: '36px', boxShadow: 'var(--shadow-1)', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>02 / Paid Social</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--summit)', margin: '4px 0 0' }}>Reach buyers before they start searching</h3>
              </div>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 16px' }}>
              Not everyone is searching yet. We build creative-first campaigns on Meta, LinkedIn, TikTok and X that create demand, retarget warm visitors, and reach decision-makers by company and job title.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '20px 0' }}>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>LinkedIn B2B account targeting</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Meta scaling and retargeting</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Direct-response video ads</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Attribution tracking</span>
            </div>
            <div style={{ background: '#F0FDF4', border: '1px solid rgba(31, 191, 117, 0.3)', borderRadius: '10px', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', color: '#166534', fontSize: '14px', fontWeight: 500 }}>
              <Check size={18} strokeWidth={2.5} />
              <span><strong>The result you want:</strong> a steady flow of new prospects, not just likes.</span>
            </div>
          </div>

          {/* 3. CRO */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '18px', padding: '36px', boxShadow: 'var(--shadow-1)', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>03 / Conversion Rate Optimization</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--summit)', margin: '4px 0 0' }}>Get more from the traffic you already have</h3>
              </div>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 16px' }}>
              Doubling your conversion rate does the same job as doubling your ad budget, at a fraction of the cost. We audit your landing pages, find where visitors drop off, and test fixes that turn more clicks into leads and sales.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '20px 0' }}>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Landing page UX audits</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>A/B and multivariate testing</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Interactive lead magnets and quizzes</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>CRM integration so no lead slips through</span>
            </div>
            <div style={{ background: '#F0FDF4', border: '1px solid rgba(31, 191, 117, 0.3)', borderRadius: '10px', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', color: '#166534', fontSize: '14px', fontWeight: 500 }}>
              <Check size={18} strokeWidth={2.5} />
              <span><strong>The result you want:</strong> a lower cost per lead without spending a rupee more on ads.</span>
            </div>
          </div>

          {/* 4. Lead Gen */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '18px', padding: '36px', boxShadow: 'var(--shadow-1)', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>04 / Lead Generation</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--summit)', margin: '4px 0 0' }}>Build pipeline you don't have to wait for</h3>
              </div>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 16px' }}>
              Inbound is great, but you shouldn't depend on it alone. We define your ideal customer, build targeted prospect lists, and run personalized LinkedIn and email outreach that books qualified conversations.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '20px 0' }}>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>ICP definition</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Prospect list building</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Multi-step outbound sequences</span>
              <span style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.25)', color: 'var(--summit)', padding: '5px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 500 }}>Lead scoring &amp; closer handoff</span>
            </div>
            <div style={{ background: '#F0FDF4', border: '1px solid rgba(31, 191, 117, 0.3)', borderRadius: '10px', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', color: '#166534', fontSize: '14px', fontWeight: 500 }}>
              <Check size={18} strokeWidth={2.5} />
              <span><strong>The result you want:</strong> more sales conversations on your calendar every week.</span>
            </div>
          </div>

        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="section" style={{ padding: '84px 0', background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ maxWidth: '780px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand-fg)' }}>Results</span>
            <h2 className="sec" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', color: 'var(--summit)', margin: '12px 0 16px' }}>
              What this looks like in practice
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)' }}>
              Real metrics from bootstrapped founders who stopped paying for vanity impressions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', margin: '36px 0' }}>
            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', color: 'var(--navy-500)' }}>Solo SaaS Founder</div>
              <div style={{ fontSize: 'clamp(38px, 4vw, 52px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--sunrise)' }}>+312%</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: 0 }}>Signups in one quarter</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                How a solo SaaS founder grew signups in a single quarter by restructuring ad keywords and eliminating onboarding leaks.
              </p>
              <Link href="/work" style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--brand-fg)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: 'auto' }}>
                Read the story &rarr;
              </Link>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', color: 'var(--navy-500)' }}>Bootstrapped D2C Brand</div>
              <div style={{ fontSize: 'clamp(38px, 4vw, 52px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: '#1FBF75' }}>&minus;58%</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: 0 }}>Cost per sale reduction</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                How a D2C brand cut what it paid for every sale through creative-first testing and higher-converting mobile checkout pages.
              </p>
              <Link href="/work" style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--brand-fg)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: 'auto' }}>
                Read the story &rarr;
              </Link>
            </div>
          </div>

          <div style={{ background: 'var(--frost)', border: '1px solid rgba(56, 182, 245, 0.35)', borderRadius: '16px', padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(56, 182, 245, 0.15)', color: 'var(--ice-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={24} strokeWidth={2.5} />
            </div>
            <div style={{ fontSize: '16px', color: 'var(--summit)', lineHeight: 1.6 }}>
              <strong>What success looks like for our clients:</strong> better conversion from paid and organic landing pages, more consistent lead follow-up, and reporting tied to pipeline and revenue, not vanity metrics.
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="section" style={{ padding: '84px 0', background: 'var(--snow)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow">Our Methodology</span>
            <h2 className="sec" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', color: 'var(--summit)', margin: '12px 0 16px' }}>
              Simple to start. Built to compound.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)' }}>
              No four-month onboarding marathons. We start diagnosing and executing in week one.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--summit)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '15px', marginBottom: '18px' }}>1</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 12px' }}>Audit the terrain</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We review your ads, landing pages, tracking, and lead flow to find where money and leads are leaking, and the quickest wins. Haven't run ads yet? We'll map the smartest starting channel.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--summit)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '15px', marginBottom: '18px' }}>2</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 12px' }}>Build the system</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We fix tracking, launch or restructure campaigns, improve key landing pages, and set up outreach and follow-up.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--summit)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '15px', marginBottom: '18px' }}>3</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 12px' }}>Scale what works</h3>
              <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We optimize weekly, cut what's wasting budget, and put more behind what's bringing in leads and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH SECTION */}
      <section className="section" style={{ padding: '84px 0', background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ maxWidth: '760px', marginBottom: '44px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand-fg)' }}>Fit &amp; Focus</span>
            <h2 className="sec" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', color: 'var(--summit)', margin: '12px 0 16px' }}>
              Who We Work With
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)' }}>
              Designed specifically for lean operators and bootstrapped teams that need every dollar accountable.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '14px', padding: '26px' }}>
              <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--summit)', marginBottom: '8px' }}>SaaS Startups</div>
              <div style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55 }}>
                That need more demo requests, self-serve signups, and trial activations at a sustainable CAC.
              </div>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '14px', padding: '26px' }}>
              <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--summit)', marginBottom: '8px' }}>Service Businesses</div>
              <div style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55 }}>
                That want qualified, high-ticket inbound inquiries instead of tyre-kickers who waste your time.
              </div>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '14px', padding: '26px' }}>
              <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--summit)', marginBottom: '8px' }}>D2C &amp; Ecommerce</div>
              <div style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55 }}>
                Brands that need a lower cost per sale and higher return on ad spend without enterprise retainer fees.
              </div>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: '14px', padding: '26px' }}>
              <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--summit)', marginBottom: '8px' }}>First-Time Ad Founders</div>
              <div style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55 }}>
                Founders running their first campaigns who want to get tracking and targeting right from day one.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOTSOLO SECTION */}
      <section className="section" style={{ padding: '84px 0', background: 'var(--snow)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
            <span className="eyebrow">The Bootsolo Difference</span>
            <h2 className="sec" style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', color: 'var(--summit)', margin: '12px 0 16px' }}>
              Why Bootsolo
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)' }}>
              No agency smoke and mirrors. Just disciplined pipeline generation built for builders.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ color: 'var(--sunrise)', marginBottom: '12px' }}><TrendingUp size={24} /></div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 8px' }}>Pipeline over vanity metrics</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>
                We report on leads, cost per lead, and revenue, not just clicks and impressions.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ color: '#1FBF75', marginBottom: '12px' }}><ShieldCheck size={24} /></div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 8px' }}>No long-term contracts</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>
                Stay because it's working, not because you're locked in. Transparent month-to-month terms.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ color: 'var(--ice-700)', marginBottom: '12px' }}><Sparkles size={24} /></div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 8px' }}>AI-first execution, human strategy</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>
                AI speeds up testing and reporting. Experienced growth strategists make the strategic calls.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ color: 'var(--summit)', marginBottom: '12px' }}><Zap size={24} /></div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 8px' }}>Your accounts, your data</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>
                Everything runs in accounts you own. If you ever leave, every pixel, audience, and creative stays 100% yours.
              </p>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ color: 'var(--sunrise)', marginBottom: '12px' }}><Target size={24} /></div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 8px' }}>Start small</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>
                Begin with one channel or a one-off audit, then grow as results and revenue come in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="section" id="pricing" style={{ padding: '84px 0', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxOffset: '760px', margin: '0 auto' }}>
            <span className="eyebrow" style={{ color: 'var(--brand-fg)' }}>Transparent Pricing</span>
            <h2 className="sec" style={{ fontSize: 'clamp(32px, 3.5vw, 46px)', color: 'var(--summit)', margin: '12px 0 16px' }}>
              Pick one channel or combine them
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
              All ad spend is paid directly to the platforms, so you stay in control. Clear terms, no hidden retainers.
            </p>
          </div>

          {/* Pricing Category Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', margin: '32px 0 40px' }}>
            {[
              { id: 'all', label: 'All Plans' },
              { id: 'social', label: 'Paid Social (Monthly)' },
              { id: 'search', label: 'Paid Search (Monthly)' },
              { id: 'cro', label: 'CRO (One-Time)' },
              { id: 'leadgen', label: 'Lead Gen (Monthly)' }
            ].map((tab) => {
              const isActive = pricingCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setPricingCategory(tab.id)}
                  className={`pricing-filter-pill ${isActive ? 'active' : ''}`}
                  style={{
                    background: isActive ? 'var(--summit)' : 'var(--white)',
                    color: isActive ? '#FFFFFF' : 'var(--summit)',
                    border: `1.5px solid ${isActive ? 'var(--summit)' : 'var(--border)'}`,
                    borderRadius: '999px',
                    padding: '9px 20px',
                    fontSize: '13.5px',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 180ms ease',
                    boxShadow: isActive ? '0 4px 14px rgba(14, 26, 43, 0.2), 0 0 0 2px rgba(255, 107, 53, 0.18)' : 'none',
                    transform: isActive ? 'translateY(-1px)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 1. Paid Social */}
          {(pricingCategory === 'all' || pricingCategory === 'social') && (
            <div style={{ marginBottom: '48px' }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '32px 0 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>Paid Social</span>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', fontFamily: 'var(--font-mono)', background: 'rgba(31, 191, 117, 0.12)', color: '#166534', border: '1px solid rgba(31, 191, 117, 0.3)' }}>
                  Monthly Retainer
                </span>
              </div>
              <div className="price-grid">
                <div className="price-card">
                  <div className="price-name">Paid Social Lite</div>
                  <div className="price-amt">$400<span style={{ fontSize: '15px', color: 'var(--navy-400)', fontWeight: 500 }}>/mo</span></div>
                  <div className="price-desc">Test one platform with lean campaigns</div>
                  <ul className="price-feats">
                    <li><Check size={16} />1 platform test</li>
                    <li><Check size={16} />1–2 focused campaigns</li>
                    <li><Check size={16} />3–4 creatives tested</li>
                    <li><Check size={16} />Weekly checks &amp; monthly report</li>
                  </ul>
                  <a className="btn btn-ghost" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Start with Lite</a>
                </div>

                <div className="price-card feat">
                  <div className="price-tag">Most Popular</div>
                  <div className="price-name">Paid Social Growth</div>
                  <div className="price-amt">$700<span style={{ fontSize: '15px', color: 'var(--navy-400)', fontWeight: 500 }}>/mo</span></div>
                  <div className="price-desc">Multi-channel demand &amp; retargeting</div>
                  <ul className="price-feats">
                    <li><Check size={16} />1–2 ad platforms (Meta / LinkedIn / X)</li>
                    <li><Check size={16} />3–4 active campaigns</li>
                    <li><Check size={16} />6–8 creatives with variants</li>
                    <li><Check size={16} />Weekly optimization &amp; reporting</li>
                  </ul>
                  <a className="btn btn-primary" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Start the Climb</a>
                </div>

                <div className="price-card">
                  <div className="price-name">Paid Social Performance Max</div>
                  <div className="price-amt">$1,200<span style={{ fontSize: '15px', color: 'var(--navy-400)', fontWeight: 500 }}>/mo</span></div>
                  <div className="price-desc">High-growth multi-channel acceleration</div>
                  <ul className="price-feats">
                    <li><Check size={16} />Multi-platform strategy</li>
                    <li><Check size={16} />Advanced creative testing</li>
                    <li><Check size={16} />Audience experiments &amp; retargeting</li>
                    <li><Check size={16} />Weekly deep-dive reviews</li>
                  </ul>
                  <a className="btn btn-ghost" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Talk to Us</a>
                </div>
              </div>
            </div>
          )}

          {/* 2. Paid Search */}
          {(pricingCategory === 'all' || pricingCategory === 'search') && (
            <div style={{ marginBottom: '48px' }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '32px 0 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>Paid Search</span>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', fontFamily: 'var(--font-mono)', background: 'rgba(31, 191, 117, 0.12)', color: '#166534', border: '1px solid rgba(31, 191, 117, 0.3)' }}>
                  Monthly Retainer
                </span>
              </div>
              <div className="price-grid">
                <div className="price-card">
                  <div className="price-name">Search Starter</div>
                  <div className="price-amt">$450<span style={{ fontSize: '15px', color: 'var(--navy-400)', fontWeight: 500 }}>/mo</span></div>
                  <div className="price-desc">Setup or cleanup of core search network</div>
                  <ul className="price-feats">
                    <li><Check size={16} />Setup or cleanup of 1 account</li>
                    <li><Check size={16} />Up to 3 high-intent campaigns</li>
                    <li><Check size={16} />Keyword &amp; negative list foundations</li>
                    <li><Check size={16} />Monthly reporting</li>
                  </ul>
                  <a className="btn btn-ghost" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Start with Starter</a>
                </div>

                <div className="price-card feat">
                  <div className="price-tag">Most Popular</div>
                  <div className="price-name">Search Optimizer</div>
                  <div className="price-amt">$750<span style={{ fontSize: '15px', color: 'var(--navy-400)', fontWeight: 500 }}>/mo</span></div>
                  <div className="price-desc">Structured testing &amp; weekly bid tuning</div>
                  <ul className="price-feats">
                    <li><Check size={16} />More campaigns &amp; ad groups</li>
                    <li><Check size={16} />Structured ad copy testing</li>
                    <li><Check size={16} />Weekly bid &amp; query optimization</li>
                    <li><Check size={16} />Full conversion tracking setup</li>
                  </ul>
                  <a className="btn btn-primary" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Start the Climb</a>
                </div>

                <div className="price-card">
                  <div className="price-name">Search Growth Partner</div>
                  <div className="price-amt">$1,300<span style={{ fontSize: '15px', color: 'var(--navy-400)', fontWeight: 500 }}>/mo</span></div>
                  <div className="price-desc">Full-funnel search automation &amp; strategy</div>
                  <ul className="price-feats">
                    <li><Check size={16} />Full-funnel search strategy</li>
                    <li><Check size={16} />Landing page conversion input</li>
                    <li><Check size={16} />Advanced scripts &amp; automation</li>
                    <li><Check size={16} />Weekly strategy calls</li>
                  </ul>
                  <a className="btn btn-ghost" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Talk to Us</a>
                </div>
              </div>
            </div>
          )}

          {/* 3. CRO (One-Time) */}
          {(pricingCategory === 'all' || pricingCategory === 'cro') && (
            <div style={{ marginBottom: '48px' }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '32px 0 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>Conversion Rate Optimization (CRO)</span>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', fontFamily: 'var(--font-mono)', background: 'rgba(56, 182, 245, 0.12)', color: 'var(--ice-700)', border: '1px solid rgba(56, 182, 245, 0.3)' }}>
                  One-Time Project
                </span>
              </div>
              <div className="price-grid">
                <div className="price-card">
                  <div className="price-name">Landing Page Audit</div>
                  <div className="price-amt">$350<span style={{ fontSize: '13.5px', color: 'var(--navy-400)', fontWeight: 500 }}> (one-time)</span></div>
                  <div className="price-desc">Detailed audit of 1 page &amp; recommendations</div>
                  <ul className="price-feats">
                    <li><Check size={16} />Detailed audit of 1 page</li>
                    <li><Check size={16} />Written, prioritized recommendations</li>
                    <li><Check size={16} />Actionable teardown checklist</li>
                    <li><Check size={16} />The easiest way to start</li>
                  </ul>
                  <a className="btn btn-ghost" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Start with Audit</a>
                </div>

                <div className="price-card feat">
                  <div className="price-tag">Most Popular</div>
                  <div className="price-name">Test-Ready CRO Plan</div>
                  <div className="price-amt">$600<span style={{ fontSize: '13.5px', color: 'var(--navy-400)', fontWeight: 500 }}> (one-time)</span></div>
                  <div className="price-desc">Audit plus test roadmap &amp; wireframes</div>
                  <ul className="price-feats">
                    <li><Check size={16} />Everything in the Audit</li>
                    <li><Check size={16} />Prioritized test hypotheses</li>
                    <li><Check size={16} />Actionable conversion roadmap</li>
                    <li><Check size={16} />Wireframes for key layout changes</li>
                  </ul>
                  <a className="btn btn-primary" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Get Test Plan</a>
                </div>

                <div className="price-card">
                  <div className="price-name">CRO Execution Sprint</div>
                  <div className="price-amt">$1,000<span style={{ fontSize: '13.5px', color: 'var(--navy-400)', fontWeight: 500 }}> (one-time)</span></div>
                  <div className="price-desc">Plan plus hands-on implementation &amp; testing</div>
                  <ul className="price-feats">
                    <li><Check size={16} />Everything in the Test-Ready Plan</li>
                    <li><Check size={16} />Hands-on implementation on 1–2 pages</li>
                    <li><Check size={16} />Monitoring of 1–2 test cycles</li>
                    <li><Check size={16} />Results review &amp; iteration guide</li>
                  </ul>
                  <a className="btn btn-ghost" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Start Sprint</a>
                </div>
              </div>
            </div>
          )}

          {/* 4. Lead Gen */}
          {(pricingCategory === 'all' || pricingCategory === 'leadgen') && (
            <div style={{ marginBottom: '48px' }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '32px 0 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>Lead Generation</span>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', fontFamily: 'var(--font-mono)', background: 'rgba(31, 191, 117, 0.12)', color: '#166534', border: '1px solid rgba(31, 191, 117, 0.3)' }}>
                  Monthly Retainer
                </span>
              </div>
              <div className="price-grid">
                <div className="price-card">
                  <div className="price-name">Lead Gen Lite</div>
                  <div className="price-amt">$500<span style={{ fontSize: '15px', color: 'var(--navy-400)', fontWeight: 500 }}>/mo</span></div>
                  <div className="price-desc">ICP list &amp; single outbound sequence</div>
                  <ul className="price-feats">
                    <li><Check size={16} />ICP definition</li>
                    <li><Check size={16} />Focused, verified prospect list</li>
                    <li><Check size={16} />One outbound outreach sequence</li>
                    <li><Check size={16} />Inbound lead form setup</li>
                  </ul>
                  <a className="btn btn-ghost" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Start with Lite</a>
                </div>

                <div className="price-card feat">
                  <div className="price-tag">Most Popular</div>
                  <div className="price-name">Pipeline Builder</div>
                  <div className="price-amt">$800<span style={{ fontSize: '15px', color: 'var(--navy-400)', fontWeight: 500 }}>/mo</span></div>
                  <div className="price-desc">Multi-step sequences &amp; lead scoring</div>
                  <ul className="price-feats">
                    <li><Check size={16} />Larger verified prospect lists</li>
                    <li><Check size={16} />Multi-step cold outreach sequences</li>
                    <li><Check size={16} />Simple automated lead scoring</li>
                    <li><Check size={16} />Weekly performance tweaks</li>
                  </ul>
                  <a className="btn btn-primary" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Start the Climb</a>
                </div>

                <div className="price-card">
                  <div className="price-name">Revenue Pipeline Partner</div>
                  <div className="price-amt">$1,400<span style={{ fontSize: '15px', color: 'var(--navy-400)', fontWeight: 500 }}>/mo</span></div>
                  <div className="price-desc">Omni-channel outbound &amp; sales team sync</div>
                  <ul className="price-feats">
                    <li><Check size={16} />Multi-channel outreach (LinkedIn + email)</li>
                    <li><Check size={16} />Advanced customized sequences</li>
                    <li><Check size={16} />Comprehensive pipeline reporting</li>
                    <li><Check size={16} />Collaboration with your sales team or closer</li>
                  </ul>
                  <a className="btn btn-ghost" href="#roadmap-form" style={{ width: '100%', textAlign: 'center' }}>Talk to Us</a>
                </div>
              </div>
            </div>
          )}

          {/* Below Pricing Note */}
          <div style={{ textAlign: 'center', marginTop: '54px', padding: '24px', background: 'var(--frost)', borderRadius: '12px', border: '1px solid rgba(56, 182, 245, 0.25)' }}>
            <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--summit)' }}>
              <strong>Not sure where to start?</strong> Most founders begin with a Landing Page Audit or one ad channel, then expand once results come in. 
              <Link href="/custom-quote" style={{ color: 'var(--brand-fg)', fontWeight: 700, textDecoration: 'none', marginLeft: '6px' }}>
                Build a custom plan &rarr;
              </Link>
            </p>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section" style={{ padding: '84px 0', background: 'var(--snow)', borderTop: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 className="sec" style={{ fontSize: 'clamp(30px, 3.2vw, 42px)', color: 'var(--summit)', margin: '12px 0' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div 
                key={i}
                style={{ 
                  background: 'var(--white)', 
                  border: openFaq === i ? '1px solid var(--sunrise)' : '1px solid var(--border)', 
                  borderRadius: '12px', 
                  overflow: 'hidden' 
                }}
              >
                <div 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  style={{ 
                    padding: '18px 24px', 
                    fontSize: '16px', 
                    fontWeight: 600, 
                    color: 'var(--summit)', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 170ms ease' }} 
                  />
                </div>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', fontSize: '15px', lineHeight: 1.6, color: 'var(--fg2)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA & LEAD ROADMAP FORM SECTION */}
      <section className="section" id="roadmap-form" style={{ padding: '88px 0', background: 'var(--frost)', borderTop: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <span className="eyebrow" style={{ color: 'var(--brand-fg)' }}>Next Steps</span>
            <h2 className="sec" style={{ fontSize: 'clamp(32px, 3.5vw, 46px)', color: 'var(--summit)', margin: '12px 0 20px' }}>
              Get your next three growth moves, free.
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--fg2)', marginBottom: '24px' }}>
              Tell us about your business and where leads are getting stuck. We'll send a focused roadmap showing exactly where you're losing money and the three changes most likely to bring in more pipeline. No pressure, no bloated proposal.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--summit)' }}>
                <Check size={18} color="#1FBF75" strokeWidth={2.5} />
                <span>Custom breakdown of your paid &amp; organic funnel</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--summit)' }}>
                <Check size={18} color="#1FBF75" strokeWidth={2.5} />
                <span>Clear recommendations on Search vs Social vs CRO vs Outbound</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--summit)' }}>
                <Check size={18} color="#1FBF75" strokeWidth={2.5} />
                <span>Delivered within 24 hours directly from a growth strategist</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-2)', maxWidth: '580px', margin: '0 auto', width: '100%' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 6px' }}>
              Get your free growth roadmap
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: '0 0 24px' }}>
              Takes 60 seconds. We'll reply within 24 hours.
            </p>

            {formSubmitted ? (
              <div style={{ padding: '24px', background: '#F0FDF4', border: '1px solid rgba(31, 191, 117, 0.3)', borderRadius: '12px', textAlign: 'center', color: '#166534' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>Roadmap Request Received!</div>
                <div style={{ fontSize: '14.5px', lineHeight: 1.5 }}>Our growth strategists are reviewing your funnel and will send your personalized recommendations within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name" 
                    required 
                    style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '14.5px' }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com" 
                    required 
                    style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '14.5px' }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>Website</label>
                  <input 
                    type="url" 
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourwebsite.com" 
                    required 
                    style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '14.5px' }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>What's your biggest challenge right now?</label>
                  <select 
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '14.5px', background: '#fff' }}
                  >
                    <option value="not enough leads">Not enough leads</option>
                    <option value="ads aren't converting">Ads aren't converting</option>
                    <option value="leads go cold">Leads go cold</option>
                    <option value="not sure where to start">Not sure where to start</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '22px' }}>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>Phone <span style={{ fontWeight: 400, color: 'var(--fg3)' }}>(optional)</span></label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000" 
                    style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '14.5px' }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formSubmitting}
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '13px', fontSize: '15.5px', fontWeight: 600 }}
                >
                  {formSubmitting ? 'Sending...' : 'Send My Roadmap'}
                </button>

                <p style={{ textAlign: 'center', fontSize: '12.5px', color: 'var(--fg3)', margin: '12px 0 0' }}>
                  No spam. No pressure. Just strategy you can use.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
