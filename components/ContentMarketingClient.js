'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  ArrowRight, 
  Video, 
  Mic, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  Clock, 
  Search, 
  Layers, 
  Share2, 
  Play, 
  Users, 
  MessageSquare, 
  Award, 
  ArrowUpRight, 
  BarChart3, 
  HelpCircle, 
  Download, 
  Send,
  XCircle,
  CheckCircle2,
  TrendingUp,
  Cpu,
  MonitorPlay
} from 'lucide-react';

export default function ContentMarketingClient() {
  const [consoleTab, setConsoleTab] = useState('articles');
  const [openFaq, setOpenFaq] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState('roadmap'); // 'roadmap' | 'playbook'

  // Growth Roadmap Form State
  const [roadmapData, setRoadmapData] = useState({
    name: '',
    email: '',
    websiteOrLinkedin: '',
    needMost: 'content that ranks',
    phone: ''
  });
  const [roadmapSubmitting, setRoadmapSubmitting] = useState(false);
  const [roadmapSubmitted, setRoadmapSubmitted] = useState(false);

  // Playbook Lead Magnet State
  const [playbookData, setPlaybookData] = useState({
    name: '',
    email: ''
  });
  const [playbookSubmitting, setPlaybookSubmitting] = useState(false);
  const [playbookSubmitted, setPlaybookSubmitted] = useState(false);

  const handleRoadmapSubmit = async (e) => {
    e.preventDefault();
    setRoadmapSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: roadmapData.name,
          email: roadmapData.email,
          company: roadmapData.websiteOrLinkedin,
          phone: roadmapData.phone || 'N/A',
          service_interested: 'Content, Video & Thought Leadership Roadmap',
          message: `Needs Most: ${roadmapData.needMost}`,
          submitted_at: new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.warn('Lead submission note:', err);
    }
    setRoadmapSubmitting(false);
    setRoadmapSubmitted(true);
  };

  const handlePlaybookSubmit = async (e) => {
    e.preventDefault();
    setPlaybookSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: playbookData.name,
          email: playbookData.email,
          service_interested: 'Founder Content Playbook Lead Magnet',
          message: 'Requested: The Founder Content Playbook + 10 LinkedIn Templates',
          submitted_at: new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.warn('Playbook lead notice:', err);
    }
    setPlaybookSubmitting(false);
    setPlaybookSubmitted(true);
  };

  const faqs = [
    {
      q: "Will the content actually sound like me?",
      a: "Yes. Everything starts with a conversation with you, and you approve every piece before it's published."
    },
    {
      q: "How much of my time does this take?",
      a: "Around 30–60 minutes a month for an interview, plus a few minutes to approve drafts."
    },
    {
      q: "Do you use AI to write the content?",
      a: "AI helps with research, outlines, and speed. Human writers and editors create the final pieces, so you get quality without agency-level timelines."
    },
    {
      q: "How long before content brings in leads?",
      a: "LinkedIn and video can generate engagement within weeks. SEO content usually starts ranking within 2–4 months and keeps compounding after that."
    },
    {
      q: "Can you just do one project?",
      a: "Yes. Start with a case study, an explainer video, or a content audit."
    },
    {
      q: "Am I locked into a contract?",
      a: "No. Bootsolo has no long-term contracts."
    }
  ];

  return (
    <div className="content-marketing-page-root" style={{ background: '#FFFFFF', color: 'var(--navy-900)' }}>
      {/* 1. HERO SECTION */}
      <header className="hero dark" style={{ padding: '72px 0 84px', borderBottom: '1px solid var(--navy-700)', background: 'radial-gradient(circle at 75% 25%, #18283e 0%, #0a1320 85%)' }}>
        <div className="wrap" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column */}
          <div style={{ textAlign: 'left' }}>
            <span className="kick" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '6px 14px', background: 'rgba(255,107,53,0.12)', border: '1px solid rgba(255,107,53,0.35)', borderRadius: '999px', fontSize: '12px', color: 'var(--sunrise-300)', marginBottom: '18px', fontWeight: 600 }}>
              <Video size={14} />
              Content, Video &amp; Thought Leadership
            </span>
            
            <h1 className="h-display" style={{ fontSize: 'clamp(32px, 3.8vw, 54px)', margin: '0 0 16px', lineHeight: 1.08, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
              Become the brand buyers already trust <span style={{ color: 'var(--sunrise-300)' }}>before the first sales call.</span>
            </h1>
            
            <p className="h-sub" style={{ fontSize: 'clamp(16px, 1.35vw, 19px)', color: 'var(--navy-200)', margin: '0 0 28px', lineHeight: 1.6, maxWidth: '620px' }}>
              We turn your expertise into content that ranks, videos people actually finish, and a founder presence your market recognizes. You bring the ideas. We do the writing, editing, design, and publishing.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <a className="btn btn-primary" href="#roadmap-form" style={{ padding: '12px 26px', fontSize: '15px', boxShadow: '0 0 24px rgba(255,107,53,0.45)', textDecoration: 'none' }}>
                Get My Free Content Roadmap &rarr;
              </a>
              <a className="btn btn-ghost" href="#what-we-create" style={{ padding: '12px 22px', fontSize: '15px', color: '#FFFFFF', borderColor: 'var(--navy-500)', textDecoration: 'none' }}>
                See What We Create
              </a>
            </div>

            {/* Proof Strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--navy-700)', borderRadius: '12px', padding: '12px 18px', marginTop: '24px', color: 'var(--navy-200)', fontSize: '13.5px', lineHeight: '1.4' }}>
              <div><strong style={{ color: '#fff' }}>4.1&times; visibility:</strong> an indie app went from invisible to the AI answer box in 60 days</div>
              <span style={{ color: 'var(--navy-500)' }}>&middot;</span>
              <div><strong style={{ color: '#fff' }}>+312%</strong> signups for a solo SaaS founder in one quarter</div>
              <span style={{ color: 'var(--navy-500)' }}>&middot;</span>
              <div><strong style={{ color: '#fff' }}>4,000+</strong> solopreneurs in our community</div>
            </div>

            {/* Trust line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '16px', color: 'var(--navy-300)', fontSize: '13.5px' }}>
              <ShieldCheck size={18} color="#1FBF75" />
              <span><strong>No long-term contracts</strong> &middot; <strong>Your voice, not generic AI content</strong> &middot; <strong>Plain-language reporting</strong></span>
            </div>
          </div>

          {/* Right Column (Content Studio & Multi-Channel Console) */}
          <div>
            <div style={{ background: 'rgba(13, 23, 37, 0.96)', border: '1px solid var(--navy-600)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(255, 107, 53, 0.12)', backdropFilter: 'blur(16px)', color: '#EEF3F8', minHeight: '395px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {/* Header */}
              <div style={{ background: '#09111c', padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--navy-700)', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }}></span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--navy-300)' }}>bootsolo://studio/content-engine</div>
                <div style={{ fontSize: '10.5px', padding: '3px 9px', borderRadius: '999px', background: 'rgba(31, 191, 117, 0.15)', color: '#3ee099', border: '1px solid rgba(31, 191, 117, 0.35)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1FBF75' }}></span>
                  <span>LIVE PRODUCTION</span>
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
                  onClick={() => setConsoleTab('articles')}
                  style={{
                    background: consoleTab === 'articles' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                    border: 'none',
                    color: consoleTab === 'articles' ? '#fff' : 'var(--navy-300)',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    borderBottom: consoleTab === 'articles' ? '2px solid var(--sunrise)' : '2px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0'
                  }}
                >
                  <FileText size={13} />
                  Ranked Content
                </button>
                <button 
                  onClick={() => setConsoleTab('video')}
                  style={{
                    background: consoleTab === 'video' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                    border: 'none',
                    color: consoleTab === 'video' ? '#fff' : 'var(--navy-300)',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    borderBottom: consoleTab === 'video' ? '2px solid var(--sunrise)' : '2px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0'
                  }}
                >
                  <MonitorPlay size={13} />
                  Motion &amp; Video
                </button>
                <button 
                  onClick={() => setConsoleTab('thought')}
                  style={{
                    background: consoleTab === 'thought' ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                    border: 'none',
                    color: consoleTab === 'thought' ? '#fff' : 'var(--navy-300)',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    borderBottom: consoleTab === 'thought' ? '2px solid var(--sunrise)' : '2px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0'
                  }}
                >
                  <Users size={13} />
                  Founder Authority
                </button>
              </div>

              {/* Console Panes Wrapper with Fixed/Steady Min-Height */}
              <div style={{ padding: '20px', minHeight: '295px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {consoleTab === 'articles' && (
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>AI Overviews</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>Cited #1</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Avg Organic Read</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>4m 12s</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Monthly Readers</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--sunrise)' }}>18,400+</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid #1FBF75', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Deep Pillar: The 2026 Micro-SaaS Pricing Teardown</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#1FBF75' }}>RANK #1</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>12 original founder teardowns, custom schema graph, and direct answer engine citations.</div>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid var(--ice)', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Buyer Comparison Guide: Bootsolo vs Agency Models</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ice)' }}>AEO ACTIVE</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>High-intent bottom-of-funnel conversion hub driving demo requests without paid ads.</div>
                      </div>
                    </div>
                  </div>
                )}

                {consoleTab === 'video' && (
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>3s Hook Retention</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>78.4%</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Video Velocity</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>3x Faster</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Time-to-Understand</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--sunrise)' }}>45 Sec</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid var(--sunrise)', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>60-Second Interactive Product Teardown</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--sunrise)' }}>REELS / SHORTS</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Paced motion graphic with kinetic typography explaining key workflow without voiceover friction.</div>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid #1FBF75', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Founder Interview Clip: "The Fatal Retention Trap"</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#1FBF75' }}>LINKEDIN VIRAL</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>High-engagement video hook cut directly from the monthly 45-min founder strategy call.</div>
                      </div>
                    </div>
                  </div>
                )}

                {consoleTab === 'thought' && (
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Monthly Inbound DMs</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#1FBF75' }}>38+ Calls</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Impression Lift</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>5.4&times;</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--navy-700)', borderRadius: '10px', padding: '12px 14px', minHeight: '66px', boxSizing: 'border-box' }}>
                        <div style={{ fontSize: '11px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Founder Time Req.</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--sunrise)' }}>45 min/mo</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid #1FBF75', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Ghostwritten Contrarian POV: "Stop Building Features"</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#1FBF75' }}>84K VIEWS</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Resulted in 14 direct founder DMs and 4 booked advisory contracts within 72 hours.</div>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderLeft: '3px solid var(--ice)', borderRadius: '6px', padding: '12px 14px', fontSize: '12.5px', minHeight: '68px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ color: '#fff' }}>Top-Tier B2B Podcast Placement &amp; Prep Brief</strong>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ice)' }}>CONFIRMED</span>
                        </div>
                        <div style={{ color: 'var(--navy-200)' }}>Full talking points, soundbites, and audience hook narrative delivered prior to recording.</div>
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
              You're the expert. Your market just doesn't know it yet.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.65, margin: 0 }}>
              You know more about your field than most of the people buyers see on LinkedIn every day. But writing takes hours you don't have, video feels like a production nightmare, and the blog you started six months ago has three posts on it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 107, 53, 0.1)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Clock size={20} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>No Time to Write</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Writing thoughtful, technical essays eats entire weekends. Between roadmap decisions and customer calls, content is the first thing that gets pushed off.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(56, 182, 245, 0.1)', color: 'var(--ice-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Video size={20} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Video Production Nightmare</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Scripting, filming, dynamic captions, color grading, and aspect ratio formatting create endless friction. Most founder videos stall before ever hitting publish.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(31, 191, 117, 0.1)', color: '#1FBF75', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Users size={20} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Competitors Steal the Trust</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Meanwhile, buyers search Google, query ChatGPT, and scroll LinkedIn. When your content isn't there, competitors with inferior products win the deal by simply showing up.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--summit)', color: '#EEF3F8', padding: '24px 30px', borderRadius: '14px', borderLeft: '4px solid var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, maxWidth: '820px' }}>
              <strong>The bottom line:</strong> The problem isn't a lack of expertise. It's a lack of time and a system to turn that expertise into compounding content.
            </p>
            <a href="#how-it-works" className="btn btn-ghost" style={{ color: '#fff', borderColor: 'var(--navy-500)', fontSize: '14px', padding: '8px 18px', whiteSpace: 'nowrap' }}>
              See The System &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION */}
      <section className="section" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px', alignItems: 'center' }}>
            <div>
              <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
                The Solution
              </span>
              <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 18px', color: 'var(--summit)', lineHeight: 1.15 }}>
                One conversation a month. A month of content.
              </h2>
              <p style={{ fontSize: '16.5px', color: 'var(--fg2)', lineHeight: 1.65, marginBottom: '18px' }}>
                We interview you, capture your ideas and opinions, and turn them into articles, case studies, videos, and LinkedIn posts that sound like you.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--fg2)', lineHeight: 1.65, marginBottom: '24px' }}>
                AI speeds up research and formatting. Human writers and editors make sure every piece is sharp, technically accurate, and on-brand.
              </p>

              <div style={{ background: '#F8FAFD', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--sunrise)', margin: '0 0 12px' }}>
                  Every Piece Has A Job:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--navy-800)' }}>
                    <CheckCircle2 size={16} color="var(--sunrise)" /> Rank in search
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--navy-800)' }}>
                    <CheckCircle2 size={16} color="var(--sunrise)" /> Cited by AI tools
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--navy-800)' }}>
                    <CheckCircle2 size={16} color="var(--sunrise)" /> Build buyer trust
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--sunrise)' }}>
                    <CheckCircle2 size={16} color="var(--sunrise)" /> Move leads to sales
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Box */}
            <div style={{ background: 'var(--navy-900)', borderRadius: '20px', padding: '36px', color: '#fff', border: '1px solid var(--navy-700)', boxShadow: '0 18px 45px rgba(14, 26, 43, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mic size={24} color="#fff" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--sunrise-300)' }}>FOUNDER TIME COMMITMENT</div>
                  <div style={{ fontSize: '20px', fontWeight: 700 }}>45 Minutes per Month</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--navy-700)', paddingTop: '20px' }}>
                <div style={{ fontSize: '12px', color: 'var(--navy-300)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                  What Bootsolo Hands You Each Cycle:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '14.5px' }}>1&times; Deep Research Article (Pillar)</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#1FBF75' }}>SEO + AEO</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '14.5px' }}>8–12&times; Ghostwritten LinkedIn Posts</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#1FBF75' }}>Founder Voice</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '14.5px' }}>3–5&times; High-Retention Video Clips</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#1FBF75' }}>Shorts / Reels</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '14.5px' }}>1&times; Nurture Newsletter Edition</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#1FBF75' }}>Lead Warmup</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '14.5px' }}>Quote Graphics &amp; Slide Carousels</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#1FBF75' }}>Sales Decks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEW: ONE INTERVIEW, A MONTH OF CONTENT (Visual Flow) */}
      <section className="section" style={{ padding: '96px 0', background: 'var(--summit)', color: '#EEF3F8' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px' }}>
            <span className="kick" style={{ color: 'var(--sunrise-300)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              The Repurposing Multiplier
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', margin: '12px 0 16px', color: '#FFFFFF', lineHeight: 1.15 }}>
              Here's what a single 45-minute conversation can become
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
              Turn raw founder insight into an interconnected web of high-ranking content, retention videos, and social authority.
            </p>
          </div>

          {/* Central Top Microphone Node */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px', position: 'relative' }}>
            <div style={{ background: '#09111c', border: '2px solid var(--sunrise)', borderRadius: '20px', padding: '24px 36px', textAlign: 'center', boxShadow: '0 0 35px rgba(255,107,53,0.3)', maxWidth: '420px', width: '100%', position: 'relative', zIndex: 2 }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35 0%, #FF8F5A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', boxShadow: '0 4px 14px rgba(255,107,53,0.5)' }}>
                <Mic size={28} color="#fff" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>1&times; 45-Minute Interview</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--navy-300)', margin: 0 }}>
                We ask the sharp questions, tease out stories, and record in studio audio &amp; 4K video.
              </p>
            </div>
          </div>

          {/* Flow Connector Line */}
          <div style={{ height: '36px', width: '2px', background: 'linear-gradient(to bottom, var(--sunrise), var(--navy-600))', margin: '0 auto 36px' }}></div>

          {/* 5 Branching Output Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {/* Output 1 */}
            <div style={{ background: 'var(--navy-900)', border: '1px solid var(--navy-700)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', transition: 'all 200ms ease' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(56, 182, 245, 0.15)', color: 'var(--ice-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <FileText size={20} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--sunrise-300)', marginBottom: '6px' }}>OUTPUT 01</div>
              <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: '0 0 10px' }}>1 In-Depth Article</h4>
              <p style={{ fontSize: '13px', color: 'var(--navy-300)', lineHeight: 1.55, margin: 0 }}>
                Built around a topic your buyers search for, optimized to rank on Google and be cited by AI tools.
              </p>
            </div>

            {/* Output 2 */}
            <div style={{ background: 'var(--navy-900)', border: '1px solid var(--navy-700)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(31, 191, 117, 0.15)', color: '#1FBF75', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Share2 size={20} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--sunrise-300)', marginBottom: '6px' }}>OUTPUT 02</div>
              <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: '0 0 10px' }}>8–12 LinkedIn Posts</h4>
              <p style={{ fontSize: '13px', color: 'var(--navy-300)', lineHeight: 1.55, margin: 0 }}>
                Sharing your opinions, stories, and lessons, published under your name to build organic authority.
              </p>
            </div>

            {/* Output 3 */}
            <div style={{ background: 'var(--navy-900)', border: '1px solid var(--navy-700)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(255, 107, 53, 0.15)', color: 'var(--sunrise)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Video size={20} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--sunrise-300)', marginBottom: '6px' }}>OUTPUT 03</div>
              <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: '0 0 10px' }}>3–5 Short Video Clips</h4>
              <p style={{ fontSize: '13px', color: 'var(--navy-300)', lineHeight: 1.55, margin: 0 }}>
                Cut from the conversation for Reels, Shorts, and LinkedIn with dynamic captions and hooks.
              </p>
            </div>

            {/* Output 4 */}
            <div style={{ background: 'var(--navy-900)', border: '1px solid var(--navy-700)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(255, 189, 46, 0.15)', color: '#FFBD2E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Send size={20} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--sunrise-300)', marginBottom: '6px' }}>OUTPUT 04</div>
              <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: '0 0 10px' }}>1 Newsletter Edition</h4>
              <p style={{ fontSize: '13px', color: 'var(--navy-300)', lineHeight: 1.55, margin: 0 }}>
                High-open rate email narrative that keeps past leads and current customers warm and informed.
              </p>
            </div>

            {/* Output 5 */}
            <div style={{ background: 'var(--navy-900)', border: '1px solid var(--navy-700)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(180, 110, 255, 0.15)', color: '#C084FC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Sparkles size={20} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--sunrise-300)', marginBottom: '6px' }}>OUTPUT 05</div>
              <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: '0 0 10px' }}>Quote Graphics &amp; Carousels</h4>
              <p style={{ fontSize: '13px', color: 'var(--navy-300)', lineHeight: 1.55, margin: 0 }}>
                Visual slide carousels and quotes ready to post on social or insert directly into sales decks.
              </p>
            </div>
          </div>

          {/* Highlight Callout */}
          <div style={{ background: 'rgba(255, 107, 53, 0.12)', border: '1px solid rgba(255, 107, 53, 0.35)', borderRadius: '14px', padding: '22px 28px', textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <p style={{ margin: 0, fontSize: '16.5px', color: '#fff', fontWeight: 600, lineHeight: 1.5 }}>
              ⚡ That's 20+ pieces of content from less than an hour of your time, all in your voice, all approved by you.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE CREATE */}
      <section className="section" id="what-we-create" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              What We Create
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Three focused engines to turn your insight into pipeline
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
              From search ranking articles to high-retention video and executive founder presence.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Capability 1 */}
            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(56, 182, 245, 0.1)', color: 'var(--ice-500)', borderRadius: '999px', fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '14px' }}>
                  <FileText size={14} /> CAPABILITY 01
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 14px', lineHeight: 1.25 }}>
                  1. Content Marketing: content that ranks, gets cited, and sells
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.65, margin: '0 0 20px' }}>
                  We build the content buyers look for while deciding: in-depth guides, comparison pages, case studies, and original research that gives journalists and AI tools a reason to cite you.
                </p>
                <div style={{ background: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--summit)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>Includes:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--fg1)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Original industry research reports</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> In-depth case studies and teardowns</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> SEO pillar and cluster content hubs</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Newsletter strategy and nurture flows</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'var(--summit)', color: '#fff', borderRadius: '16px', padding: '28px', borderLeft: '4px solid #1FBF75' }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#1FBF75', textTransform: 'uppercase', letterSpacing: '0.08em' }}>THE RESULT YOU WANT</span>
                <h4 style={{ fontSize: '18px', fontWeight: 600, margin: '8px 0 12px', color: '#fff' }}>Steady organic traffic and qualified leads</h4>
                <p style={{ fontSize: '14px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                  High-intent buyers find your answers through Google search, ChatGPT recommendations, and Perplexity summaries long after you hit publish.
                </p>
              </div>
            </div>

            {/* Capability 2 */}
            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(255, 107, 53, 0.1)', color: 'var(--sunrise)', borderRadius: '999px', fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '14px' }}>
                  <Video size={14} /> CAPABILITY 02
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 14px', lineHeight: 1.25 }}>
                  2. Motion &amp; Video Production: videos people actually watch
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.65, margin: '0 0 20px' }}>
                  Video is how buyers understand your product fastest. We create product demos, explainers, and short-form clips designed to hold attention in the first three seconds and drive action at the end.
                </p>
                <div style={{ background: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--summit)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>Includes:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--fg1)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Product walkthroughs and explainer videos</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Reels and Shorts built for retention</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> 3D product visualizations &amp; animations</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Motion ad creative packages</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'var(--summit)', color: '#fff', borderRadius: '16px', padding: '28px', borderLeft: '4px solid var(--sunrise)' }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--sunrise-300)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>THE RESULT YOU WANT</span>
                <h4 style={{ fontSize: '18px', fontWeight: 600, margin: '8px 0 12px', color: '#fff' }}>A product people "get" in 60 seconds</h4>
                <p style={{ fontSize: '14px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                  Scroll-stopping motion creative and concise product demos that convert complex software into an obvious buying decision.
                </p>
              </div>
            </div>

            {/* Capability 3 */}
            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(31, 191, 117, 0.1)', color: '#1FBF75', borderRadius: '999px', fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '14px' }}>
                  <Mic size={14} /> CAPABILITY 03
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 14px', lineHeight: 1.25 }}>
                  3. Thought Leadership: make the founder the brand
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.65, margin: '0 0 20px' }}>
                  People buy from people. We turn your perspective into a consistent LinkedIn presence, get you on the right podcasts, and help you speak and write where your buyers pay attention.
                </p>
                <div style={{ background: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--summit)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>Includes:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--fg1)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Founder ghostwriting and LinkedIn presence</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Podcast guest placements and prep</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Keynote presentation design</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="var(--sunrise)" /> Industry publication contributions</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'var(--summit)', color: '#fff', borderRadius: '16px', padding: '28px', borderLeft: '4px solid #C084FC' }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#C084FC', textTransform: 'uppercase', letterSpacing: '0.08em' }}>THE RESULT YOU WANT</span>
                <h4 style={{ fontSize: '18px', fontWeight: 600, margin: '8px 0 12px', color: '#fff' }}>"I've been following your posts"</h4>
                <p style={{ fontSize: '14px', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                  Sales calls that begin with deep trust already established, shortening your close cycles and raising your average deal value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS */}
      <section className="section" style={{ padding: '96px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
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
            <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '42px', fontWeight: 800, color: 'var(--sunrise)', lineHeight: 1, marginBottom: '8px' }}>
                4.1&times;
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--summit)', marginBottom: '8px' }}>Indie App Visibility</div>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 16px' }}>
                From completely invisible to featured prominently in Google AI Overviews and Perplexity search answers in 60 days.
              </p>
              <a href="/work" style={{ color: 'var(--sunrise)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Read the story &rarr;
              </a>
            </div>

            <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '42px', fontWeight: 800, color: '#1FBF75', lineHeight: 1, marginBottom: '8px' }}>
                +312%
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--summit)', marginBottom: '8px' }}>Solo SaaS Signups</div>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 16px' }}>
                How a solo SaaS founder tripled self-serve signups in a single quarter through technical comparison guides and founder video.
              </p>
              <a href="/work" style={{ color: 'var(--sunrise)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Read the story &rarr;
              </a>
            </div>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px 30px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Award size={28} color="var(--sunrise)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.6 }}>
              <strong>What our clients get:</strong> Faster content production with clearer strategic direction, stronger visibility in search and AI answers, and content tied to leads and pipeline, not just page views.
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="section" id="how-it-works" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              How It Works
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Simple to start. Built to compound.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 800, color: 'var(--sunrise)', marginBottom: '10px' }}>STEP 01</div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Audit the terrain</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We review your existing content, search and AI visibility, and competitors to find the topics your buyers search for and where you're missing.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 800, color: 'var(--sunrise)', marginBottom: '10px' }}>STEP 02</div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Capture your voice</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                A short kickoff interview, then a 30–60 minute call each month. That's all the time we need from you.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 800, color: 'var(--sunrise)', marginBottom: '10px' }}>STEP 03</div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Create and publish</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We write, design, edit, and publish. You approve before anything goes live.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 800, color: 'var(--sunrise)', marginBottom: '10px' }}>STEP 04</div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Repurpose and scale</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We track what drives traffic and leads, then do more of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEW: HOW BOOTSOLO COMPARES */}
      <section className="section" style={{ padding: '96px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              How Bootsolo Compares
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              More than a freelancer. Leaner than an agency.
            </h2>
          </div>

          <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '680px' }}>
                <thead>
                  <tr style={{ background: '#F8FAFD', borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '18px 24px', fontSize: '13px', fontWeight: 700, color: 'var(--navy-600)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Capabilities &amp; Models</th>
                    <th style={{ padding: '18px 20px', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)' }}>Freelancers</th>
                    <th style={{ padding: '18px 20px', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)' }}>Traditional agency</th>
                    <th style={{ padding: '18px 20px', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)' }}>In-house hire</th>
                    <th style={{ padding: '18px 24px', fontSize: '13.5px', fontWeight: 700, color: 'var(--sunrise)', background: 'rgba(255,107,53,0.06)' }}>Bootsolo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Strategy included</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Rarely</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Yes</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Depends on hire</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>Yes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Writing, video &amp; design in one place</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>No</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Yes</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Rarely</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>Yes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Built for search and AI discovery</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Rarely</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Sometimes</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Rarely</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>Yes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Time to get started</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Days</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Weeks to months</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Months to hire</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: 'var(--sunrise)', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>Days</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Long-term contract</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>No</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Usually</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Employment</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>No</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--summit)', fontSize: '14.5px' }}>Built for lean teams</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Yes</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>Rarely</td>
                    <td style={{ padding: '16px 20px', color: 'var(--fg2)', fontSize: '14px' }}>No</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1FBF75', background: 'rgba(255,107,53,0.04)', fontSize: '14px' }}>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHO WE WORK WITH */}
      <section className="section" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Who We Work With
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Engineered specifically for lean teams and operators
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>SaaS Startups</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Need content to drive demo requests and trial signups without burning massive runway on paid ads.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Service Businesses</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Want to win high-ticket clients through authority, proof, and visible expertise rather than discounting on price.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>D2C Brands</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Need high-retention video and motion creative to explain, demonstrate, and stop the scroll for their physical products.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Founders &amp; Execs</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Want to build undeniable personal authority in their space without spending their valuable evenings and weekends writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEW: IS THIS RIGHT FOR YOU? */}
      <section className="section" style={{ padding: '80px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
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
            <div style={{ background: '#FFFFFF', border: '2px solid rgba(31, 191, 117, 0.4)', borderRadius: '18px', padding: '32px', boxShadow: '0 8px 24px rgba(31, 191, 117, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <CheckCircle2 size={24} color="#1FBF75" />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: 0 }}>We're a great fit if:</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--fg1)', lineHeight: 1.55 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={16} color="#1FBF75" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>You have real expertise and opinions worth sharing in your market.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={16} color="#1FBF75" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>You want content that brings in pipeline and leads rather than just filling a calendar.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={16} color="#1FBF75" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>You can give us one short 45-minute recorded interview call a month.</span>
                </li>
              </ul>
            </div>

            {/* Not Right Fit */}
            <div style={{ background: '#FFFFFF', border: '2px solid rgba(255, 95, 86, 0.3)', borderRadius: '18px', padding: '32px', boxShadow: '0 8px 24px rgba(255, 95, 86, 0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <XCircle size={24} color="#FF5F56" />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--summit)', margin: 0 }}>We're probably not the right fit if:</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <XCircle size={16} color="#FF5F56" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>You want mass-produced, generic AI content with zero human review or editing.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <XCircle size={16} color="#FF5F56" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>You are looking for the cheapest possible outsourced word count.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHY BOOTSOLO */}
      <section className="section" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Why Bootsolo
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Senior strategic thinking. AI velocity. Human polish.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FAFCFE', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>Your voice, not generic AI content</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                AI helps us move fast, but every piece starts with your authentic ideas and is shaped and polished by senior human editors.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>Built for search &amp; AI discovery</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Content is structured to rank high on Google and be cited directly by ChatGPT, Perplexity, and Gemini answer engines.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>Minimal time from you</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                One recorded interview call a month powers a full calendar month of high-velocity multichannel content.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>Content with a job</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Every single piece is tied directly to a business outcome: traffic, trust, qualified leads, or closed sales.
              </p>
            </div>

            <div style={{ background: '#FAFCFE', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>No long-term contracts</h3>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                Stay because it's generating pipeline and working for your business, not because of a rigid retainer lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WAYS TO WORK WITH US */}
      <section className="section" id="pricing" style={{ padding: '96px 0', background: '#FAFCFE', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Ways To Work With Us
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.15 }}>
              Start where it makes sense for you
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '40px' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--border)', padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>MODEL 01</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 14px' }}>One focused project</h3>
                <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 20px' }}>
                  A case study, an explainer video, or a comprehensive content audit. A low-commitment way to see the speed and quality of our work.
                </p>
              </div>
              <a href="#roadmap-form" className="btn btn-ghost" style={{ width: '100%', textAlign: 'center' }}>
                Request Project Scope &rarr;
              </a>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '2px solid var(--sunrise)', padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 12px 36px rgba(255, 107, 53, 0.1)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--sunrise)', textTransform: 'uppercase' }}>MODEL 02</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: 'rgba(255,107,53,0.12)', color: 'var(--sunrise)' }}>MOST POPULAR</span>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 14px' }}>One content stream</h3>
                <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 20px' }}>
                  Ongoing LinkedIn thought leadership, SEO pillar content, or short-form video, built around a monthly interview with you.
                </p>
              </div>
              <a href="#roadmap-form" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Start One Stream &rarr;
              </a>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--border)', padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', marginBottom: '8px' }}>MODEL 03</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 14px' }}>A full content engine</h3>
                <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 20px' }}>
                  Articles, video, and founder content working together, with one unified strategy behind all of it.
                </p>
              </div>
              <a href="#roadmap-form" className="btn btn-ghost" style={{ width: '100%', textAlign: 'center' }}>
                Build Full Engine &rarr;
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 18px' }}>
              Not sure which fits? Your free content roadmap will recommend the best starting point for your goals and stage.
            </p>
            <a href="#roadmap-form" className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '15.5px' }}>
              Get My Free Content Roadmap &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="section" style={{ padding: '96px 0', background: '#FFFFFF', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
              Frequently Asked Questions
            </span>
            <h2 className="sec-title" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', margin: '12px 0 0', color: 'var(--summit)' }}>
              Clear answers before you start
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
                  background: openFaq === i ? '#FAFCFE' : '#FFFFFF',
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

      {/* 14. NEW: LEAD MAGNET (for visitors not ready to talk yet) */}
      <section className="section" style={{ padding: '64px 0', background: '#F8FAFD', borderBottom: '1px solid var(--navy-100)' }}>
        <div className="wrap" style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px 40px', boxShadow: '0 8px 30px rgba(0,0,0,0.03)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div style={{ maxWidth: '620px' }}>
              <span className="kick" style={{ color: 'var(--sunrise)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px' }}>
                Free Founder Playbook
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--summit)', margin: '8px 0 10px', lineHeight: 1.25 }}>
                Not ready for a call? Start with the free playbook.
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                <strong>The Founder Content Playbook:</strong> how to turn one conversation a month into 20+ pieces of content, plus 10 LinkedIn post templates founders use to attract inbound leads.
              </p>
            </div>
            <a
              href="#roadmap-form"
              onClick={() => setActiveFormTab('playbook')}
              className="btn btn-primary"
              style={{ whiteSpace: 'nowrap', padding: '12px 24px', fontSize: '14.5px', textDecoration: 'none' }}
            >
              Get Free Playbook &darr;
            </a>
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA & ROADMAP FORM */}
      <section className="section" id="roadmap-form" style={{ padding: '88px 0', background: 'var(--frost)', borderTop: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <span className="eyebrow" style={{ color: 'var(--brand-fg)' }}>
              {activeFormTab === 'roadmap' ? 'Get Started' : 'Free Resource'}
            </span>
            <h2 className="sec" style={{ fontSize: 'clamp(32px, 3.5vw, 46px)', color: 'var(--summit)', margin: '12px 0 20px', lineHeight: 1.15 }}>
              Your expertise is your best marketing. <span style={{ color: 'var(--sunrise)' }}>Let's put it to work.</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--fg2)', lineHeight: 1.6, marginBottom: '24px' }}>
              Get a free content roadmap: the topics your buyers are searching for, where competitors are beating you, and the three pieces of content most likely to bring in leads. No pressure, no bloated proposal.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--summit)' }}>
                <Check size={18} color="#1FBF75" strokeWidth={2.5} />
                <span>Complete review of your search &amp; AI answer presence</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--summit)' }}>
                <Check size={18} color="#1FBF75" strokeWidth={2.5} />
                <span>3 specific content opportunities to drive pipeline</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--summit)' }}>
                <Check size={18} color="#1FBF75" strokeWidth={2.5} />
                <span>100% free with no obligation</span>
              </div>
            </div>
          </div>

          {/* Right Form Card - Unified single form card with tab toggle */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-2)', maxWidth: '580px', margin: '0 auto', width: '100%' }}>
            
            {/* Form Mode Selector */}
            <div style={{ display: 'flex', gap: '6px', background: 'var(--frost)', padding: '4px', borderRadius: '10px', marginBottom: '22px', border: '1px solid var(--border)' }}>
              <button
                type="button"
                onClick={() => setActiveFormTab('roadmap')}
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: '7px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeFormTab === 'roadmap' ? 'var(--sunrise)' : 'transparent',
                  color: activeFormTab === 'roadmap' ? '#FFFFFF' : 'var(--fg2)',
                  boxShadow: activeFormTab === 'roadmap' ? '0 2px 8px rgba(255,107,53,0.25)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                Content Roadmap
              </button>
              <button
                type="button"
                onClick={() => setActiveFormTab('playbook')}
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: '7px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeFormTab === 'playbook' ? 'var(--sunrise)' : 'transparent',
                  color: activeFormTab === 'playbook' ? '#FFFFFF' : 'var(--fg2)',
                  boxShadow: activeFormTab === 'playbook' ? '0 2px 8px rgba(255,107,53,0.25)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                Founder Playbook
              </button>
            </div>

            {activeFormTab === 'roadmap' ? (
              <>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 6px' }}>
                  Get your free content roadmap
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: '0 0 24px' }}>
                  Takes 60 seconds. We'll reply within 24 hours.
                </p>

                {roadmapSubmitted ? (
                  <div style={{ padding: '24px', background: '#F0FDF4', border: '1px solid rgba(31, 191, 117, 0.3)', borderRadius: '12px', textAlign: 'center', color: '#166534' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>Roadmap Request Received!</div>
                    <div style={{ fontSize: '14.5px', lineHeight: 1.5 }}>We're analyzing your search presence and buyer topics. Look out for our email within 24 hours.</div>
                  </div>
                ) : (
                  <form onSubmit={handleRoadmapSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Chen"
                        value={roadmapData.name}
                        onChange={(e) => setRoadmapData({ ...roadmapData, name: e.target.value })}
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
                        placeholder="alex@company.com"
                        value={roadmapData.email}
                        onChange={(e) => setRoadmapData({ ...roadmapData, email: e.target.value })}
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
                        Website or LinkedIn Profile
                      </label>
                      <input
                        type="text"
                        placeholder="https://company.com or linkedin.com/in/alex"
                        value={roadmapData.websiteOrLinkedin}
                        onChange={(e) => setRoadmapData({ ...roadmapData, websiteOrLinkedin: e.target.value })}
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
                        What do you need most?
                      </label>
                      <select
                        value={roadmapData.needMost}
                        onChange={(e) => setRoadmapData({ ...roadmapData, needMost: e.target.value })}
                        style={{
                          width: '100%',
                          height: '46px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          background: 'var(--white)',
                          border: '1px solid var(--border-strong)',
                          color: 'var(--fg1)',
                          fontSize: '14.5px',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="content that ranks">Content that ranks</option>
                        <option value="video">Video</option>
                        <option value="founder thought leadership">Founder thought leadership</option>
                        <option value="not sure yet">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={roadmapData.phone}
                        onChange={(e) => setRoadmapData({ ...roadmapData, phone: e.target.value })}
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
                      disabled={roadmapSubmitting}
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
                      {roadmapSubmitting ? 'Generating Roadmap...' : 'Send My Roadmap'}
                    </button>

                    <div style={{ textAlign: 'center', fontSize: '12.5px', color: 'var(--fg3)', marginTop: '4px' }}>
                      No spam. No pressure. Just a plan you can use.
                    </div>
                  </form>
                )}
              </>
            ) : (
              <>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--summit)', margin: '0 0 6px' }}>
                  The Solo Founder Content Playbook
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: '0 0 24px' }}>
                  Turn one monthly interview into 20+ pieces of content + 10 post templates.
                </p>

                {playbookSubmitted ? (
                  <div style={{ padding: '24px', background: '#F0FDF4', border: '1px solid rgba(31, 191, 117, 0.3)', borderRadius: '12px', textAlign: 'center', color: '#166534' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>Playbook is on the way!</div>
                    <div style={{ fontSize: '14.5px', lineHeight: 1.5 }}>Check your email shortly for the full download and templates.</div>
                  </div>
                ) : (
                  <form onSubmit={handlePlaybookSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Chen"
                        value={playbookData.name}
                        onChange={(e) => setPlaybookData({ ...playbookData, name: e.target.value })}
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
                        placeholder="alex@company.com"
                        value={playbookData.email}
                        onChange={(e) => setPlaybookData({ ...playbookData, email: e.target.value })}
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
                      disabled={playbookSubmitting}
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
                      {playbookSubmitting ? 'Sending...' : 'Send Me the Playbook'}
                    </button>

                    <div style={{ textAlign: 'center', fontSize: '12.5px', color: 'var(--fg3)', marginTop: '4px' }}>
                      Free PDF &amp; templates. No spam, ever.
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
