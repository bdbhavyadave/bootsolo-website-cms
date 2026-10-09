'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  ArrowRight, 
  Layout, 
  ShoppingCart, 
  Zap, 
  Gauge, 
  Smartphone, 
  ShieldCheck, 
  ChevronDown, 
  Clock, 
  Search, 
  Code, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Sparkles, 
  MousePointerClick, 
  SlidersHorizontal,
  Send,
  HelpCircle,
  Award
} from 'lucide-react';

export default function WebEcommerceClient() {
  const [consoleTab, setConsoleTab] = useState('speed');
  const [openFaq, setOpenFaq] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState('teardown'); // 'teardown' | 'checklist'

  // Website Teardown Form State
  const [teardownData, setTeardownData] = useState({
    name: '',
    email: '',
    website: '',
    needMost: 'new website',
    platform: 'Shopify',
    phone: ''
  });
  const [teardownSubmitting, setTeardownSubmitting] = useState(false);
  const [teardownSubmitted, setTeardownSubmitted] = useState(false);

  // Conversion Checklist Lead Magnet State
  const [checklistData, setChecklistData] = useState({
    name: '',
    email: ''
  });
  const [checklistSubmitting, setChecklistSubmitting] = useState(false);
  const [checklistSubmitted, setChecklistSubmitted] = useState(false);

  const handleTeardownSubmit = async (e) => {
    e.preventDefault();
    setTeardownSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: teardownData.name,
          email: teardownData.email,
          company: teardownData.website,
          phone: teardownData.phone || 'N/A',
          service_interested: 'Website & Ecommerce Teardown',
          message: `Need Most: ${teardownData.needMost} | Platform: ${teardownData.platform}`,
          submitted_at: new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.warn('Lead submission notice:', err);
    }
    setTeardownSubmitting(false);
    setTeardownSubmitted(true);
  };

  const handleChecklistSubmit = async (e) => {
    e.preventDefault();
    setChecklistSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: checklistData.name,
          email: checklistData.email,
          service_interested: '25-Point Website Conversion Checklist Lead Magnet',
          message: 'Requested: 25-Point Website Conversion Checklist',
          submitted_at: new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.warn('Checklist lead notice:', err);
    }
    setChecklistSubmitting(false);
    setChecklistSubmitted(true);
  };

  const faqs = [
    {
      q: "How long does a website take?",
      a: "A landing page typically takes 1–2 weeks, and a full website 3–6 weeks, depending on size and how quickly feedback comes back."
    },
    {
      q: "Can I update the website myself?",
      a: "Yes. We build with an easy-to-use CMS and walk you through it at handover."
    },
    {
      q: "Do you work on existing Shopify stores?",
      a: "Yes. We can audit and improve your current store without rebuilding it from scratch."
    },
    {
      q: "Will my site be SEO and AI-search ready?",
      a: "Yes. Every build includes on-page SEO, fast load times, and structured content that helps search and AI tools understand your business."
    },
    {
      q: "Do you write the website copy?",
      a: "Yes. Conversion-focused messaging is part of our process, built from your input and your buyers' needs."
    },
    {
      q: "Am I locked into a contract?",
      a: "No. Bootsolo has no long-term contracts, and you own everything we build."
    }
  ];

  return (
    <div className="web-ecommerce-page-root" style={{ background: '#FFFFFF', color: 'var(--navy-900)' }}>
      {/* 1. HERO SECTION */}
      <header className="hero dark" style={{ minHeight: 'calc(100vh - 66px)', padding: '24px 0 32px', borderBottom: '1px solid var(--navy-700)', background: 'radial-gradient(circle at 75% 25%, #18283e 0%, #0a1320 85%)', display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}>
        <div className="wrap" style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
          
          {/* Left Column */}
          <div style={{ textAlign: 'left' }}>
            <span className="kick" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 12px', background: 'rgba(255,107,53,0.12)', border: '1px solid rgba(255,107,53,0.35)', borderRadius: '999px', fontSize: '11.5px', color: 'var(--sunrise-300)', marginBottom: '12px', fontWeight: 600 }}>
              <Layout size={13} />
              Web Design, UX &amp; Ecommerce
            </span>
            
            <h1 className="h-display" style={{ fontSize: 'clamp(28px, 3.2vw, 46px)', margin: '0 0 12px', lineHeight: 1.1, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
              Your website should be your best salesperson. <span style={{ color: 'var(--sunrise-300)' }}>Right now, it might be your biggest leak.</span>
            </h1>
            
            <p className="h-sub" style={{ fontSize: 'clamp(14.5px, 1.15vw, 17px)', color: 'var(--navy-200)', margin: '0 0 20px', lineHeight: 1.55, maxWidth: '580px' }}>
              We design and build fast, mobile-first websites and Shopify stores that turn visitors into leads and buyers. Built for speed, search, and AI discovery, so every rupee you spend on traffic works harder.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '18px' }}>
              <a className="btn btn-primary" href="#teardown-form" style={{ padding: '10px 22px', fontSize: '14px', boxShadow: '0 0 24px rgba(255,107,53,0.45)', textDecoration: 'none' }}>
                Get My Free Website Teardown &rarr;
              </a>
              <a className="btn btn-ghost" href="#what-we-build" style={{ padding: '10px 18px', fontSize: '14px', color: '#FFFFFF', borderColor: 'var(--navy-500)', textDecoration: 'none' }}>
                See What We Build
              </a>
            </div>

            {/* Proof Strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '9px 14px', color: 'var(--navy-200)', fontSize: '12.5px', lineHeight: '1.4' }}>
              <div><strong style={{ color: '#fff' }}>&minus;58%</strong> cost per sale for bootstrapped D2C</div>
              <span style={{ color: 'var(--navy-500)' }}>&middot;</span>
              <div><strong style={{ color: '#fff' }}>+312%</strong> signups in one quarter</div>
              <span style={{ color: 'var(--navy-500)' }}>&middot;</span>
              <div><strong style={{ color: '#fff' }}>95+</strong> PageSpeed score</div>
            </div>

            {/* Trust line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '12px', color: 'var(--navy-300)', fontSize: '12.5px' }}>
              <ShieldCheck size={16} color="#1FBF75" />
              <span><strong>Trusted by SaaS, service &amp; D2C</strong> &middot; <strong>No contracts</strong> &middot; <strong>You own everything</strong></span>
            </div>
          </div>

          {/* Right Column (Console & Speed Telemetry Studio) */}
          <div>
            <div style={{ background: 'rgba(13, 23, 37, 0.96)', border: '1px solid var(--navy-600)', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55), 0 0 30px rgba(255, 107, 53, 0.1)', backdropFilter: 'blur(16px)', color: '#EEF3F8', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div style={{ background: '#09111c', padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--navy-700)', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }}></span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--navy-300)' }}>bootsolo://storefront/speed-engine</div>
                <div style={{ fontSize: '10.5px', padding: '3px 9px', borderRadius: '999px', background: 'rgba(31, 191, 117, 0.15)', color: '#3ee099', border: '1px solid rgba(31, 191, 117, 0.35)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1FBF75' }}></span>
                  <span>SUB-SECOND SPEED</span>
                </div>
              </div>

              {/* Console Tabs - No horizontal scrollbar */}
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
                  onClick={() => setConsoleTab('speed')}
                  style={{
                    background: consoleTab === 'speed' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                    border: 'none',
                    color: consoleTab === 'speed' ? '#fff' : 'var(--navy-300)',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    borderBottom: consoleTab === 'speed' ? '2px solid var(--sunrise)' : '2px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0'
                  }}
                >
                  <Gauge size={13} />
                  Speed &amp; Vitals
                </button>
                <button 
                  onClick={() => setConsoleTab('checkout')}
                  style={{
                    background: consoleTab === 'checkout' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                    border: 'none',
                    color: consoleTab === 'checkout' ? '#fff' : 'var(--navy-300)',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    borderBottom: consoleTab === 'checkout' ? '2px solid var(--sunrise)' : '2px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0'
                  }}
                >
                  <ShoppingCart size={13} />
                  Shopify &amp; Cart
                </button>
                <button 
                  onClick={() => setConsoleTab('interactive')}
                  style={{
                    background: consoleTab === 'interactive' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                    border: 'none',
                    color: consoleTab === 'interactive' ? '#fff' : 'var(--navy-300)',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    borderBottom: consoleTab === 'interactive' ? '2px solid var(--sunrise)' : '2px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0'
                  }}
                >
                  <MousePointerClick size={13} />
                  Interactive UX
                </button>
              </div>

              {/* Console Panes Wrapper with Fixed/Steady Min-Height */}
              <div style={{ padding: '20px', minHeight: '295px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {consoleTab === 'speed' && (
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Mobile PageSpeed</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>98 / 100</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Server TTFB</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>140 ms</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Largest Contentful Paint</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--sunrise)' }}>0.9s</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid #1FBF75', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Core Web Vitals Assessment: Passed</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#1FBF75' }}>ALL GREEN</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Zero Cumulative Layout Shift (CLS: 0.00). Next.js server components + edge CDN caching.</div>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid var(--ice)', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Asset Payload Compression</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ice)' }}>OPTIMIZED</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>AVIF image pipeline, font subsetting, and sub-second client-side hydration.</div>
                      </div>
                    </div>
                  </div>
                )}

                {consoleTab === 'checkout' && (
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Cart-to-Order CVR</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>+34.2%</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>AOV Upsell Lift</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>+22%</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Checkout Steps Cut</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--sunrise)' }}>4 &rarr; 1</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid var(--sunrise)', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Shopify 1-Click Post-Purchase Flow</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--sunrise)' }}>ACTIVE</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Zero friction add-on bundles triggered immediately after payment without re-entering details.</div>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid #1FBF75', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Slide-Out Drawer Cart with Threshold Progress Bar</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#1FBF75' }}>LIVE</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Real-time free shipping milestone indicator directly drives multi-item basket sizes.</div>
                      </div>
                    </div>
                  </div>
                )}

                {consoleTab === 'interactive' && (
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Tool Interaction Rate</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>48.6%</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Engaged Time</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>3m 44s</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Demo Lead Capture</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--sunrise)' }}>18.4%</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid #1FBF75', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Custom ROI &amp; Savings Calculator</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#1FBF75' }}>CONVERTING</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Dynamic pricing simulation that delivers instant personalized value before booking sales calls.</div>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid var(--ice)', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Interactive Product Architecture Explorer</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ice)' }}>COMPONENT</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Modular feature visualizer letting prospective buyers preview the exact solution fit.</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 2. THE PROBLEM */}
      <section className="section" style={{ padding: '96px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              The Problem
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Traffic isn't your problem. What happens after the click is.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.65, margin: 0 }}>
              You're spending on ads, posting content, and getting people to your site. Then they leave. The page loads slowly on mobile. The message isn't clear in the first five seconds. The checkout has one step too many. The contact form asks for too much.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 95, 86, 0.1)', color: '#FF5F56', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Clock size={20} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Slow Mobile Speed</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Every second of load delay drops mobile conversion by 20%. Bloated scripts and heavy templates drive visitors back to Google before they ever see your headline.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 107, 53, 0.1)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <AlertCircle size={20} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Unclear Value in 5 Seconds</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Visitors scan fast. When hero copy is vague or stuffed with generic buzzwords, prospective buyers bounce without understanding what problem you solve.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(56, 182, 245, 0.1)', color: 'var(--ice-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <ShoppingCart size={20} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Checkout &amp; Form Friction</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Forms with too many mandatory fields, clunky cart drawers, and multi-step checkouts leak motivated customers right at the finish line.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--summit)', color: '#EEF3F8', padding: '24px 30px', borderRadius: '14px', borderLeft: '4px solid var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, maxWidth: '820px' }}>
              <strong>The bottom line:</strong> Every visitor who leaves is money you already spent. A better website doesn't just look nicer. It makes every other marketing channel more profitable.
            </p>
            <a href="#signs-checklist" className="btn btn-ghost" style={{ color: '#fff', borderColor: 'var(--navy-500)', fontSize: '14px', padding: '8px 18px', whiteSpace: 'nowrap' }}>
              Check The Signs &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 3. NEW: SIGNS YOUR WEBSITE IS COSTING YOU SALES */}
      <section className="section" id="signs-checklist" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Self-Diagnostic
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Signs your website is costing you sales
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
              Recognize two or more? Get a free teardown and we'll show you exactly what to fix first.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '36px' }}>
            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 107, 53, 0.12)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <Check size={16} strokeWidth={2.8} />
              </div>
              <span style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.5 }}>
                Your site takes more than <strong>3 seconds</strong> to load on a phone.
              </span>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 107, 53, 0.12)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <Check size={16} strokeWidth={2.8} />
              </div>
              <span style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.5 }}>
                Visitors can't tell what you do or who it's for within <strong>5 seconds</strong>.
              </span>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 107, 53, 0.12)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <Check size={16} strokeWidth={2.8} />
              </div>
              <span style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.5 }}>
                Your ads get clicks but your landing pages don't convert into leads.
              </span>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 107, 53, 0.12)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <Check size={16} strokeWidth={2.8} />
              </div>
              <span style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.5 }}>
                Shoppers add items to cart but don't complete checkout.
              </span>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 107, 53, 0.12)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <Check size={16} strokeWidth={2.8} />
              </div>
              <span style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.5 }}>
                You can't update a simple page without calling or paying a developer.
              </span>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 107, 53, 0.12)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <Check size={16} strokeWidth={2.8} />
              </div>
              <span style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.5 }}>
                Your site doesn't show up when buyers ask ChatGPT or Google about your category.
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#teardown-form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '15.5px' }}>
              Get Free Teardown to Fix These Leaks &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION */}
      <section className="section" style={{ padding: '96px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px', alignItems: 'center' }}>
            <div>
              <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
                The Solution
              </span>
              <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 18px', color: 'var(--summit)', lineHeight: 1.15 }}>
                Websites built around one question: will this convert?
              </h2>
              <p style={{ fontSize: '16.5px', color: 'var(--fg2)', lineHeight: 1.65, marginBottom: '18px' }}>
                We don't start with templates or trends. We start with your buyer: what they need to see, believe, and do before they act.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--fg2)', lineHeight: 1.65, margin: 0 }}>
                Then we design and build every page around that, using fast, modern technology and AI-assisted workflows that get you live sooner without cutting corners.
              </p>
            </div>

            <div style={{ background: 'var(--summit)', borderRadius: '20px', padding: '36px', color: '#fff', border: '1px solid var(--navy-700)', boxShadow: '0 18px 45px rgba(14, 26, 43, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={24} color="#fff" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--sunrise-300)' }}>CONVERSION-FIRST ARCHITECTURE</div>
                  <div style={{ fontSize: '20px', fontWeight: 700 }}>Built to Convert Visitors into Buyers</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--navy-700)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--navy-200)' }}>
                  <CheckCircle2 size={16} color="#1FBF75" /> <strong>Sub-second TTFB</strong> and 95+ PageSpeed scores
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--navy-200)' }}>
                  <CheckCircle2 size={16} color="#1FBF75" /> <strong>Headless CMS</strong> so you edit copy without developers
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--navy-200)' }}>
                  <CheckCircle2 size={16} color="#1FBF75" /> <strong>AI Answer Engine Ready</strong> (Schema + JSON-LD)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--navy-200)' }}>
                  <CheckCircle2 size={16} color="#1FBF75" /> <strong>Frictionless Checkouts</strong> and high-converting forms
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE BUILD */}
      <section className="section" id="what-we-build" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              What We Build
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Engineered for speed, conversion, and scale
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
              From high-converting landing pages to custom Shopify stores and interactive digital tools.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Capability 1 */}
            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(56, 182, 245, 0.1)', color: 'var(--ice-500)', borderRadius: '999px', fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '14px' }}>
                  <Layout size={14} /> CAPABILITY 01
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 14px', lineHeight: 1.25 }}>
                  1. Websites &amp; Landing Pages: fast, clear, and built to convert
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.65, margin: '0 0 20px' }}>
                  From a single campaign landing page to a full company website, we design and build sites that load in a blink, look sharp on every device, and guide visitors toward one clear action.
                </p>
                <div style={{ background: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--summit)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>Includes:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--fg1)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Next.js and React development</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Pixel-perfect builds from Figma designs</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Headless CMS so you can edit pages yourself</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> 95+ Google PageSpeed scores</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'var(--summit)', color: '#fff', borderRadius: '16px', padding: '28px', borderLeft: '4px solid #1FBF75' }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#1FBF75', textTransform: 'uppercase', letterSpacing: '0.08em' }}>THE RESULT YOU WANT</span>
                <h4 style={{ fontSize: '18px', fontWeight: 600, margin: '8px 0 12px', color: '#fff' }}>Earn trust in seconds &amp; turn clicks into leads</h4>
                <p style={{ fontSize: '14px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                  A blazing-fast digital home that makes you look established from day one and converts paid and organic visitors reliably.
                </p>
              </div>
            </div>

            {/* Capability 2 */}
            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(255, 107, 53, 0.1)', color: 'var(--sunrise)', borderRadius: '999px', fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '14px' }}>
                  <ShoppingCart size={14} /> CAPABILITY 02
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 14px', lineHeight: 1.25 }}>
                  2. Ecommerce Optimization: more orders from the same traffic
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.65, margin: '0 0 20px' }}>
                  Small fixes in the right places add up to big revenue. We improve your product pages, cart, and checkout, add smart upsells, and speed up your store so more browsers become buyers and more buyers spend more.
                </p>
                <div style={{ background: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--summit)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>Includes:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--fg1)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Custom Shopify and Shopify Plus development</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Cart and checkout conversion rate fixes</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Upsell and cross-sell post-purchase flows</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Speed, asset payload and mobile UX optimization</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'var(--summit)', color: '#fff', borderRadius: '16px', padding: '28px', borderLeft: '4px solid var(--sunrise)' }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--sunrise-300)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>THE RESULT YOU WANT</span>
                <h4 style={{ fontSize: '18px', fontWeight: 600, margin: '8px 0 12px', color: '#fff' }}>Higher conversion rates, bigger orders &amp; lower cost per sale</h4>
                <p style={{ fontSize: '14px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                  Every marketing dollar works harder because your store doesn't leak customers before payment confirmation.
                </p>
              </div>
            </div>

            {/* Capability 3 */}
            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(31, 191, 117, 0.1)', color: '#1FBF75', borderRadius: '999px', fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '14px' }}>
                  <MousePointerClick size={14} /> CAPABILITY 03
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 14px', lineHeight: 1.25 }}>
                  3. Interactive Experiences: tools that sell while you sleep
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.65, margin: '0 0 20px' }}>
                  Calculators, product demos, and self-service tools give visitors a reason to engage, and give you a reason to capture their details. They also make complex products easy to understand.
                </p>
                <div style={{ background: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--summit)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>Includes:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--fg1)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> ROI and custom pricing calculators</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Interactive product demos and visualizers</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Subtle micro-animations that guide visitor attention</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Reusable Summit design system components</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'var(--summit)', color: '#fff', borderRadius: '16px', padding: '28px', borderLeft: '4px solid #38B6F5' }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38B6F5', textTransform: 'uppercase', letterSpacing: '0.08em' }}>THE RESULT YOU WANT</span>
                <h4 style={{ fontSize: '18px', fontWeight: 600, margin: '8px 0 12px', color: '#fff' }}>More engaged visitors &amp; a site competitors can't easily copy</h4>
                <p style={{ fontSize: '14px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                  High intent prospects explore their exact ROI, pre-qualifying themselves before sales conversations even begin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEW: WHAT EVERY BOOTSOLO BUILD INCLUDES */}
      <section className="section" style={{ padding: '80px 0', background: '#F8FAFD', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Standard Inclusions
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              What every Bootsolo build includes
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
              Whatever the size of the project, you get our complete foundational engineering stack from day one:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#FFFFFF', padding: '24px 28px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <Smartphone size={22} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 6px' }}>Mobile-first design</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>Crafted for thumb-friendly navigation and responsive layout hierarchies on phones and tablets.</p>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px 28px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <Gauge size={22} color="#1FBF75" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 6px' }}>Speed optimization for fast load times</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>Sub-second performance and 95+ Google PageSpeed scores to keep mobile bounce rates at zero.</p>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px 28px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <Search size={22} color="var(--ice-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 6px' }}>On-page SEO &amp; AI answer structure</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>Schema markup and semantic hierarchy that helps Google, ChatGPT and Perplexity recommend you.</p>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px 28px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <TrendingUp size={22} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 6px' }}>Analytics &amp; conversion tracking</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>Event tagging and conversion attribution active from day one so every visit is tracked.</p>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px 28px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <Send size={22} color="#1FBF75" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 6px' }}>CRM &amp; email lead capture integration</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>Frictionless forms wired seamlessly to your CRM, email nurture sequences, or Slack alerts.</p>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px 28px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <Code size={22} color="var(--ice-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 6px' }}>Handover walkthrough &amp; CMS autonomy</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>Guided video walkthrough and visual editor so you can edit text and publish pages yourself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESULTS */}
      <section className="section" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Results
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              What this looks like in practice
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: '#FAFCFE', padding: '36px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '42px', fontWeight: 800, color: '#1FBF75', lineHeight: 1, marginBottom: '8px' }}>
                &minus;58%
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--summit)', marginBottom: '8px' }}>Cost Per Sale: Bootstrapped D2C</div>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 16px' }}>
                How a direct-to-consumer brand cut what it paid for every sale by speeding up mobile product pages and streamlining Shopify checkout.
              </p>
              <a href="/work" style={{ color: 'var(--sunrise)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Read the story &rarr;
              </a>
            </div>

            <div style={{ background: '#FAFCFE', padding: '36px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '42px', fontWeight: 800, color: 'var(--sunrise)', lineHeight: 1, marginBottom: '8px' }}>
                +312%
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--summit)', marginBottom: '8px' }}>Signups Lift: Solo SaaS Founder</div>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 16px' }}>
                How a solo SaaS founder tripled self-serve signups in a single quarter through a high-converting Next.js rebuild and interactive demo preview.
              </p>
              <a href="/work" style={{ color: 'var(--sunrise)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Read the story &rarr;
              </a>
            </div>
          </div>

          <div style={{ background: '#F8FAFD', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px 30px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Award size={28} color="var(--sunrise)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.6 }}>
              <strong>What our clients get:</strong> Better conversion from paid and organic landing pages, faster sites (95+ PageSpeed), and clear reporting on how the site contributes directly to leads and revenue.
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section className="section" id="how-it-works" style={{ padding: '96px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              How It Works
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              From brief to launch in 3–6 weeks
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 800, color: 'var(--sunrise)', marginBottom: '10px' }}>STEP 01</div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Audit the terrain</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We review your current site or store, analytics, and competitors to find where visitors drop off and what's holding conversions back.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 800, color: 'var(--sunrise)', marginBottom: '10px' }}>STEP 02</div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Plan and design</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We map the pages, write conversion-focused messaging, and design in Figma. You review and approve before any code is written.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 800, color: 'var(--sunrise)', marginBottom: '10px' }}>STEP 03</div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Build and launch</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We develop, test on every device, set up tracking, and launch, with zero downtime for existing live sites.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 800, color: 'var(--sunrise)', marginBottom: '10px' }}>STEP 04</div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Optimize</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                After launch, we watch real visitor behavior and keep improving what converts through iterative feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. NEW: HOW BOOTSOLO COMPARES */}
      <section className="section" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              How Bootsolo Compares
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Smarter than a template. Leaner than an agency.
            </h2>
          </div>

          <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '680px' }}>
                <thead>
                  <tr style={{ background: '#F8FAFD', borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '18px 24px', fontSize: '13px', fontWeight: 700, color: 'var(--navy-600)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Capabilities &amp; Models</th>
                    <th style={{ padding: '18px 20px', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)' }}>DIY website builder</th>
                    <th style={{ padding: '18px 20px', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)' }}>Freelancer</th>
                    <th style={{ padding: '18px 20px', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)' }}>Traditional agency</th>
                    <th style={{ padding: '18px 24px', fontSize: '13.5px', fontWeight: 700, color: 'var(--sunrise)', background: 'rgba(255,107,53,0.06)' }}>Bootsolo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Conversion strategy included</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>No</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Rarely</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Yes</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>Yes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Speed and performance focus</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Limited</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Varies</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Varies</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: 'var(--sunrise)', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>95+ PageSpeed</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Built for search and AI discovery</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Basic</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Rarely</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Sometimes</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>Yes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Easy for you to update</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Yes</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Depends</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Often not</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>Yes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Connected to your marketing</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>No</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Rarely</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Sometimes</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>Yes</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Long-term contract</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>No</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>No</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Usually</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHO WE WORK WITH */}
      <section className="section" style={{ padding: '96px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Who We Work With
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Built for high-growth startups and lean ecommerce teams
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>SaaS Startups</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Need a site that drives demo requests and trial signups with clear product positioning.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Service Businesses</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Want a professional, premium website that earns trust and brings in qualified client inquiries.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>D2C &amp; Ecommerce</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Need more orders, higher average order values, and frictionless mobile checkouts on Shopify.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Founders Launching</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Launching a brand new product or business who want to look established and credible from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NEW: IS THIS RIGHT FOR YOU? */}
      <section className="section" style={{ padding: '80px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Qualification
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Is this right for you?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {/* Great Fit */}
            <div style={{ background: '#FAFCFE', border: '2px solid rgba(31, 191, 117, 0.4)', borderRadius: '18px', padding: '32px', boxShadow: '0 8px 24px rgba(31, 191, 117, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <CheckCircle2 size={24} color="#1FBF75" />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: 0 }}>We're a great fit if:</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--fg1)', lineHeight: 1.55 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={16} color="#1FBF75" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>You want a website that generates leads or sales, not just one that looks good.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={16} color="#1FBF75" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>You're ready to make design &amp; copy decisions quickly so we can launch fast.</span>
                </li>
              </ul>
            </div>

            {/* Not Right Fit */}
            <div style={{ background: '#FAFCFE', border: '2px solid rgba(255, 95, 86, 0.3)', borderRadius: '18px', padding: '32px', boxShadow: '0 8px 24px rgba(255, 95, 86, 0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <XCircle size={24} color="#FF5F56" />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: 0 }}>We're probably not the right fit if:</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <XCircle size={16} color="#FF5F56" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>You only need a basic one-page placeholder with no commercial expectations.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <XCircle size={16} color="#FF5F56" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>You want a site with no connection to your underlying marketing or revenue goals.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHY BOOTSOLO */}
      <section className="section" style={{ padding: '96px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Why Bootsolo
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Engineered for revenue, not just aesthetics
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>Conversion first, design second</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Every layout, visual hierarchy, and CTA decision is made to move visitors toward action.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>Built to be fast (95+ PageSpeed)</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Our builds target 95+ Google PageSpeed scores, because slow sites lose buyers before they read a word.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>Ready for AI search</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Structured semantic data so Google, ChatGPT, and Perplexity understand and recommend you.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>You own everything</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Your code, design files, domain, hosting, and content stay with you 100%. No proprietary lock-in.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>Part of a bigger growth engine</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Your site connects with our SEO, ads, content, and automation services so every channel compounds.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>No long-term contracts</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Stay because it converts and drives revenue, not because of an agency retainer contract.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WAYS TO WORK WITH US */}
      <section className="section" id="pricing" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Ways To Work With Us
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Start where it makes sense for you
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: '#FAFCFE', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>OPTION 01</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 12px' }}>A single landing page</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 20px' }}>
                  One high-converting page for a campaign, product, or offer. The fastest way to see conversion results.
                </p>
              </div>
              <a href="#teardown-form" className="btn btn-ghost" style={{ width: '100%', textAlign: 'center' }}>
                Request Page Build &rarr;
              </a>
            </div>

            <div style={{ background: '#FAFCFE', borderRadius: '16px', border: '2px solid var(--sunrise)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 12px 36px rgba(255, 107, 53, 0.1)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--sunrise)', textTransform: 'uppercase' }}>OPTION 02</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: 'rgba(255,107,53,0.12)', color: 'var(--sunrise)' }}>POPULAR</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 12px' }}>Website launch or rebuild</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 20px' }}>
                  A complete, fast, conversion-focused website with lead capture built in from brief to launch in 3–6 weeks.
                </p>
              </div>
              <a href="#teardown-form" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Launch New Site &rarr;
              </a>
            </div>

            <div style={{ background: '#FAFCFE', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>OPTION 03</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 12px' }}>Ecommerce upgrade</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 20px' }}>
                  A conversion review of your store, or hands-on improvements to product pages, cart drawer, and checkout.
                </p>
              </div>
              <a href="#teardown-form" className="btn btn-ghost" style={{ width: '100%', textAlign: 'center' }}>
                Upgrade Store &rarr;
              </a>
            </div>

            <div style={{ background: '#FAFCFE', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>OPTION 04</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 12px' }}>Ongoing optimization</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 20px' }}>
                  Monthly improvements, A/B testing, and CRO reporting to keep conversion rates compounding over time.
                </p>
              </div>
              <a href="#teardown-form" className="btn btn-ghost" style={{ width: '100%', textAlign: 'center' }}>
                Partner Ongoing &rarr;
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 18px' }}>
              Not sure which fits? Your free website teardown will show you the best starting point.
            </p>
            <a href="#teardown-form" className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '15.5px' }}>
              Get My Free Website Teardown &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="section" style={{ padding: '96px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Frequently Asked Questions
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', margin: '12px 0 0', color: 'var(--summit)' }}>
              Clear answers before we build
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                style={{ 
                  border: '1px solid var(--border)', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  background: openFaq === i ? '#FFFFFF' : '#FFFFFF',
                  boxShadow: openFaq === i ? '0 4px 18px rgba(0,0,0,0.04)' : 'none',
                  transition: 'background 180ms ease'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--summit)' }}>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    color="var(--fg3)" 
                    style={{ 
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                      flexShrink: 0
                    }} 
                  />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 22px', fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. NEW: LEAD MAGNET */}
      <section className="section" style={{ padding: '64px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px 40px', boxShadow: '0 8px 30px rgba(0,0,0,0.03)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div style={{ maxWidth: '620px' }}>
              <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
                Free Conversion Checklist
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--summit)', margin: '8px 0 10px', lineHeight: 1.25 }}>
                Not ready for a call? Grab the free checklist.
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                <strong>The 25-Point Website Conversion Checklist:</strong> the exact checks we run on every client site, covering speed, messaging, mobile UX, forms, and checkout, so you can spot what's costing you leads today.
              </p>
            </div>
            <a
              href="#teardown-form"
              onClick={() => setActiveFormTab('checklist')}
              className="btn btn-primary"
              style={{ whiteSpace: 'nowrap', padding: '12px 24px', fontSize: '14.5px', textDecoration: 'none' }}
            >
              Get Free Checklist &darr;
            </a>
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA & TEARDOWN FORM */}
      <section className="section" id="teardown-form" style={{ padding: '88px 0', background: 'var(--frost)', borderTop: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <span className="eyebrow" style={{ color: 'var(--brand-fg)' }}>
              {activeFormTab === 'teardown' ? 'Free Teardown' : 'Free Resource'}
            </span>
            <h2 className="sec" style={{ fontSize: 'clamp(32px, 3.5vw, 46px)', color: 'var(--summit)', margin: '12px 0 20px', lineHeight: 1.15 }}>
              Find out what your website is <span style={{ color: 'var(--sunrise)' }}>costing you.</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--fg2)', lineHeight: 1.6, marginBottom: '24px' }}>
              Get a free website teardown. We'll review your site or store and show you the three changes most likely to bring in more leads or sales. No pressure, no bloated proposal.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--summit)' }}>
                <Check size={18} color="#1FBF75" strokeWidth={2.5} />
                <span>Complete mobile speed and Core Web Vitals audit</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--summit)' }}>
                <Check size={18} color="#1FBF75" strokeWidth={2.5} />
                <span>3 high-impact conversion fixes for your landing page or store</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--summit)' }}>
                <Check size={18} color="#1FBF75" strokeWidth={2.5} />
                <span>100% free with no obligation</span>
              </div>
            </div>
          </div>

          {/* Right Form Card - Unified single form with tab selector */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-2)', maxWidth: '580px', margin: '0 auto', width: '100%' }}>
            
            {/* Form Mode Selector */}
            <div style={{ display: 'flex', gap: '6px', background: 'var(--frost)', padding: '4px', borderRadius: '10px', marginBottom: '22px', border: '1px solid var(--border)' }}>
              <button
                type="button"
                onClick={() => setActiveFormTab('teardown')}
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: '7px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeFormTab === 'teardown' ? 'var(--sunrise)' : 'transparent',
                  color: activeFormTab === 'teardown' ? '#FFFFFF' : 'var(--fg2)',
                  boxShadow: activeFormTab === 'teardown' ? '0 2px 8px rgba(255,107,53,0.25)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                Website Teardown
              </button>
              <button
                type="button"
                onClick={() => setActiveFormTab('checklist')}
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: '7px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeFormTab === 'checklist' ? 'var(--sunrise)' : 'transparent',
                  color: activeFormTab === 'checklist' ? '#FFFFFF' : 'var(--fg2)',
                  boxShadow: activeFormTab === 'checklist' ? '0 2px 8px rgba(255,107,53,0.25)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                25-Point Checklist
              </button>
            </div>

            {activeFormTab === 'teardown' ? (
              <>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 6px' }}>
                  Get your free website teardown
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: '0 0 24px' }}>
                  Takes 60 seconds. We'll reply within 24 hours.
                </p>

                {teardownSubmitted ? (
                  <div style={{ padding: '24px', background: '#F0FDF4', border: '1px solid rgba(31, 191, 117, 0.3)', borderRadius: '12px', textAlign: 'center', color: '#166534' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>Teardown Request Received!</div>
                    <div style={{ fontSize: '14.5px', lineHeight: 1.5 }}>We're running performance diagnostics and UX analysis on your URL. Look out for our report within 24 hours.</div>
                  </div>
                ) : (
                  <form onSubmit={handleTeardownSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jordan Lee"
                        value={teardownData.name}
                        onChange={(e) => setTeardownData({ ...teardownData, name: e.target.value })}
                        style={{
                          width: '100%',
                          height: '46px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          background: 'var(--white)',
                          border: '1px solid var(--border-strong)',
                          color: 'var(--fg1)',
                          fontSize: '14.5px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jordan@company.com"
                        value={teardownData.email}
                        onChange={(e) => setTeardownData({ ...teardownData, email: e.target.value })}
                        style={{
                          width: '100%',
                          height: '46px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          background: 'var(--white)',
                          border: '1px solid var(--border-strong)',
                          color: 'var(--fg1)',
                          fontSize: '14.5px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                        Website URL *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="https://yourstore.com"
                        value={teardownData.website}
                        onChange={(e) => setTeardownData({ ...teardownData, website: e.target.value })}
                        style={{
                          width: '100%',
                          height: '46px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          background: 'var(--white)',
                          border: '1px solid var(--border-strong)',
                          color: 'var(--fg1)',
                          fontSize: '14.5px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                          What do you need most?
                        </label>
                        <select
                          value={teardownData.needMost}
                          onChange={(e) => setTeardownData({ ...teardownData, needMost: e.target.value })}
                          style={{
                            width: '100%',
                            height: '46px',
                            padding: '0 10px',
                            borderRadius: '8px',
                            background: 'var(--white)',
                            border: '1px solid var(--border-strong)',
                            color: 'var(--fg1)',
                            fontSize: '13.5px',
                            outline: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="new website">New website</option>
                          <option value="landing page">Landing page</option>
                          <option value="improve my online store">Improve my online store</option>
                          <option value="not sure yet">Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                          Platform
                        </label>
                        <select
                          value={teardownData.platform}
                          onChange={(e) => setTeardownData({ ...teardownData, platform: e.target.value })}
                          style={{
                            width: '100%',
                            height: '46px',
                            padding: '0 10px',
                            borderRadius: '8px',
                            background: 'var(--white)',
                            border: '1px solid var(--border-strong)',
                            color: 'var(--fg1)',
                            fontSize: '13.5px',
                            outline: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="Shopify">Shopify</option>
                          <option value="WordPress">WordPress</option>
                          <option value="Webflow">Webflow</option>
                          <option value="custom">Custom (Next.js/React)</option>
                          <option value="no site yet">No site yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={teardownData.phone}
                        onChange={(e) => setTeardownData({ ...teardownData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          height: '46px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          background: 'var(--white)',
                          border: '1px solid var(--border-strong)',
                          color: 'var(--fg1)',
                          fontSize: '14.5px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={teardownSubmitting}
                      className="btn btn-primary"
                      style={{
                        height: '48px',
                        width: '100%',
                        justifyContent: 'center',
                        fontSize: '15.5px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginTop: '8px',
                        boxShadow: 'var(--glow-sunrise)'
                      }}
                    >
                      {teardownSubmitting ? 'Analyzing Site...' : 'Get My Teardown'}
                    </button>

                    <div style={{ textAlign: 'center', fontSize: '12.5px', color: 'var(--fg3)', marginTop: '4px' }}>
                      No spam. No pressure. Just a clear plan.
                    </div>
                  </form>
                )}
              </>
            ) : (
              <>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 6px' }}>
                  The 25-Point Website Conversion Checklist
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: '0 0 24px' }}>
                  Instant audit template covering speed, mobile UX, forms, and checkout.
                </p>

                {checklistSubmitted ? (
                  <div style={{ padding: '24px', background: '#F0FDF4', border: '1px solid rgba(31, 191, 117, 0.3)', borderRadius: '12px', textAlign: 'center', color: '#166534' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>Checklist is on the way!</div>
                    <div style={{ fontSize: '14.5px', lineHeight: 1.5 }}>Check your email shortly for the full 25-point audit template.</div>
                  </div>
                ) : (
                  <form onSubmit={handleChecklistSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jordan Lee"
                        value={checklistData.name}
                        onChange={(e) => setChecklistData({ ...checklistData, name: e.target.value })}
                        style={{
                          width: '100%',
                          height: '46px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          background: 'var(--white)',
                          border: '1px solid var(--border-strong)',
                          color: 'var(--fg1)',
                          fontSize: '14.5px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jordan@company.com"
                        value={checklistData.email}
                        onChange={(e) => setChecklistData({ ...checklistData, email: e.target.value })}
                        style={{
                          width: '100%',
                          height: '46px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          background: 'var(--white)',
                          border: '1px solid var(--border-strong)',
                          color: 'var(--fg1)',
                          fontSize: '14.5px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={checklistSubmitting}
                      className="btn btn-primary"
                      style={{
                        height: '48px',
                        width: '100%',
                        justifyContent: 'center',
                        fontSize: '15.5px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginTop: '8px',
                        boxShadow: 'var(--glow-sunrise)'
                      }}
                    >
                      {checklistSubmitting ? 'Sending...' : 'Send Me the Checklist'}
                    </button>

                    <div style={{ textAlign: 'center', fontSize: '12.5px', color: 'var(--fg3)', marginTop: '4px' }}>
                      Free PDF download. No spam, ever.
                    </div>
                  </form>
                )}
              </>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
