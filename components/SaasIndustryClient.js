'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Laptop, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Search, 
  TrendingUp, 
  Sparkles,
  Share2,
  Workflow,
  Globe,
  Layers, 
  HelpCircle,
  Download,
  Flame,
  Clock,
  Send,
  XCircle,
  Check,
  AlertTriangle,
  FileCheck,
  Building,
  Smartphone,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { PaperPlaneMark } from './Brand';
import { emitLeadSubmittedEvent } from '@/lib/events';

const CHECKLIST_SIGNS = [
  { id: 'traffic-no-demos', text: "Your website traffic is growing but demo bookings aren't." },
  { id: 'churning-trials', text: "Trial users sign up and never come back." },
  { id: 'ai-missing', text: "Competitors show up in AI tools and comparison searches but you don't." },
  { id: 'clicks-not-leads', text: "Your paid ads bring clicks, not qualified leads." },
  { id: 'founder-time', text: "Your founder is the best salesperson, but has no time to post or write." },
  { id: 'attribution-dark', text: "You can't tell which channel actually drives revenue." },
];

const BUYER_JOURNEY = [
  {
    step: '1',
    stage: 'Problem aware',
    buyerDoes: 'Your buyer searches for a solution or asks an AI tool for recommendations.',
    weHelp: 'We help you show up with SEO content, AI answer engine visibility, and founder thought leadership on LinkedIn.',
    tag: 'Discovery & AI Search'
  },
  {
    step: '2',
    stage: 'Comparing options',
    buyerDoes: 'They read comparison pages, reviews, and alternatives lists.',
    weHelp: 'We help you win the shortlist with comparison and alternative pages, case studies, and competitor conquesting ads.',
    tag: 'Shortlist & Social Proof'
  },
  {
    step: '3',
    stage: 'Ready to try',
    buyerDoes: 'They visit your pricing page, start a trial, or consider a demo.',
    weHelp: 'We help you convert with conversion-focused landing pages, frictionless signup flows, and demo booking optimization.',
    tag: 'CRO & Onboarding'
  },
  {
    step: '4',
    stage: 'Evaluating and buying',
    buyerDoes: 'They test the product and loop in their team.',
    weHelp: 'We help you close with onboarding email sequences, lead scoring that flags active trials, and sales enablement content.',
    tag: 'Activation & Revenue'
  }
];

const CAPABILITIES = [
  {
    num: '01',
    title: 'SEO, AEO & GEO: be the answer buyers find',
    desc: 'Rank for high-intent searches like "best [category] software" and "[competitor] alternatives," and get recommended inside ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
    items: [
      'Technical SEO & Core Web Vitals',
      'Keyword architecture around buying intent',
      'Comparison and alternative pages',
      'Schema markup & entity graph',
      'Multi-model AI visibility testing'
    ]
  },
  {
    num: '02',
    title: 'Paid Search & LinkedIn Ads: reach buyers ready to act',
    desc: 'Capture people actively searching for your category and target decision-makers by company size, industry, and job title.',
    items: [
      'High-intent Google Ads search campaigns',
      'LinkedIn B2B account & job title targeting',
      'Competitor conquesting campaigns',
      'Retargeting for trial and demo page visitors',
      'Negative keyword & waste-cutting optimization'
    ]
  },
  {
    num: '03',
    title: 'Conversion Optimization: turn visitors into trials and demos',
    desc: 'Most SaaS sites lose buyers on the homepage, pricing page, or signup form. We find where pipeline drops and fix it.',
    items: [
      'Homepage and pricing page CRO audits',
      'Demo booking & signup flow friction removal',
      'A/B and multivariate conversion testing',
      'Interactive ROI & payback period calculators'
    ]
  },
  {
    num: '04',
    title: 'Content & Founder Thought Leadership: build trust before the call',
    desc: 'B2B buyers trust people more than logos. We turn your founder\'s expertise into LinkedIn content, articles, and case studies that bring warm inbound leads.',
    items: [
      'Founder ghostwriting & executive LinkedIn presence',
      'Customer case studies & teardowns',
      'Product explainer video scripts & motion',
      'High-retention newsletter & article strategy'
    ]
  },
  {
    num: '05',
    title: 'Marketing Automation: activate trials and nurture leads',
    desc: 'Behavior-based emails that guide trial users to their "aha" moment, and lead scoring that tells your team who\'s ready to buy.',
    items: [
      'Onboarding and product activation email sequences',
      'Behavioral lead scoring across product events',
      'CRM workflows & automated sales notifications',
      'Automated re-engagement streams for inactive trials'
    ]
  },
  {
    num: '06',
    title: 'Website & Positioning: look like the category leader',
    desc: 'A fast, clear website and sharp positioning that explain why you\'re different in seconds without corporate jargon.',
    items: [
      'Modern Next.js websites built for lightning speed',
      'Sharp messaging & category positioning',
      'Feature & solution page design systems',
      'High-converting pitch decks & sales one-pagers'
    ]
  }
];

const METRICS_LIST = [
  { label: 'Trial signups', desc: 'Qualified self-serve users entering the product' },
  { label: 'Demo bookings', desc: 'High-intent B2B sales conversations scheduled' },
  { label: 'Trial-to-paid rate', desc: 'Activation and onboarding conversion improvements' },
  { label: 'Customer Acquisition Cost (CAC)', desc: 'Cutting wasted ad spend and boosting organic pipeline' },
  { label: 'Pipeline influenced', desc: 'Qualified deals generated from marketing touchpoints' },
  { label: 'AI & search visibility', desc: 'Direct citation rate in ChatGPT, Perplexity & Google' }
];

const COMPARISON_ROWS = [
  { feature: 'SaaS funnel expertise', freelancers: 'Varies', generalist: 'Rarely', inhouse: 'Depends on hire', bootsolo: 'Yes' },
  { feature: 'SEO, ads, content & CRO in one team', freelancers: 'No', generalist: 'Sometimes', inhouse: 'Rarely', bootsolo: 'Yes' },
  { feature: 'AI search visibility (ChatGPT, Perplexity)', freelancers: 'Rarely', generalist: 'Rarely', inhouse: 'Rarely', bootsolo: 'Yes' },
  { feature: 'Reports on pipeline, not traffic', freelancers: 'Rarely', generalist: 'Sometimes', inhouse: 'Yes', bootsolo: 'Yes' },
  { feature: 'Time to get started', freelancers: 'Days', generalist: 'Weeks', inhouse: 'Months', bootsolo: 'Days' },
  { feature: 'Long-term contract', freelancers: 'No', generalist: 'Usually', inhouse: 'Employment', bootsolo: 'No' },
];

const FAQS = [
  {
    q: 'Do you understand SaaS business models?',
    a: 'Yes. We plan around SaaS metrics such as trial conversion, demo volume, CAC, and pipeline, and tailor strategy to product-led, sales-led, or hybrid motions.'
  },
  {
    q: 'Can you help us show up in ChatGPT and other AI tools?',
    a: 'Yes. We optimize content, structured data, and third-party mentions so AI answer engines understand and recommend your product, and we test visibility across major AI tools including ChatGPT, Perplexity, Claude, and Google AI Overviews.'
  },
  {
    q: 'Should we focus on SEO or paid ads first?',
    a: 'It depends on your stage and urgency. Paid search captures existing high-intent demand quickly, while SEO and AI visibility build lasting compounding pipeline. Your free roadmap will recommend the right mix for your cash flow and growth stage.'
  },
  {
    q: 'Can you work with our in-house team?',
    a: 'Yes. We can lead end-to-end strategy and execution or plug directly into your existing team to fill specific gaps like AI search, paid acquisition, or conversion optimization.'
  },
  {
    q: 'How soon will we see results?',
    a: 'Paid campaigns and conversion fixes typically show results within 3 to 6 weeks. SEO and AI visibility build over 2 to 4 months and keep compounding month over month.'
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No. Bootsolo has zero long-term contracts. You stay because it is working and driving positive pipeline ROI.'
  }
];

export default function SaasIndustryClient() {
  const formRef = useRef(null);
  const checklistSectionRef = useRef(null);

  // Interactive Checklist Signs
  const [checkedSigns, setCheckedSigns] = useState({});
  const toggleSign = (id) => {
    setCheckedSigns(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const checkedCount = Object.values(checkedSigns).filter(Boolean).length;

  // FAQ open/close state
  const [openFaq, setOpenFaq] = useState(0);

  // Free Checklist Lead Magnet state
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [checklistLoading, setChecklistLoading] = useState(false);
  const [checklistSuccess, setChecklistSuccess] = useState(false);
  const [checklistError, setChecklistError] = useState('');

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowWeGrow = () => {
    const el = document.getElementById('how-we-grow');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Submit Lead Magnet
  const handleChecklistSubmit = async (e) => {
    e.preventDefault();
    setChecklistLoading(true);
    setChecklistError('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName,
          email: leadEmail,
          industry: 'B2B SaaS & Technology',
          source: 'saas_pipeline_leak_checklist',
          details: { resource: 'SaaS Pipeline Leak Checklist (30 checks)' }
        })
      });

      if (!res.ok) throw new Error('Submission failed');
      emitLeadSubmittedEvent({ name: leadName, email: leadEmail, type: 'saas_checklist' });
      setChecklistSuccess(true);
    } catch (err) {
      setChecklistError('Something went wrong. Please check your email and try again.');
    } finally {
      setChecklistLoading(false);
    }
  };

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg1)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* =========================================================================
          BREADCRUMB & HERO SECTION
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '50px', paddingBottom: '70px', position: 'relative', overflow: 'hidden' }}>
        
        {/* Soft decorative ambient glow */}
        <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '160px', left: '-120px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,182,245,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--fg3)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'var(--fg2)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/industries" style={{ color: 'var(--fg2)', textDecoration: 'none' }}>Industries</Link>
            <span>›</span>
            <span style={{ color: 'var(--sunrise-700)', fontWeight: 600 }}>B2B SaaS &amp; Technology</span>
          </nav>

          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--r-pill)', background: 'rgba(255,107,53,0.10)', color: 'var(--sunrise-700)', border: '1px solid rgba(255,107,53,0.24)', marginBottom: '20px' }}>
              <PaperPlaneMark size={14} color="#E8551F" planeColor="#FF6B35" />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                B2B SaaS &amp; Technology Marketing
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: 'clamp(38px, 5.5vw, 62px)', fontWeight: 600, letterSpacing: 'var(--track-display)', lineHeight: 1.06, color: 'var(--summit)', margin: '0 0 24px' }}>
              More trials. More demos. More pipeline.{' '}
              <span style={{ color: 'var(--sunrise)' }}>Without hiring a marketing team.</span>
            </h1>

            {/* Lead */}
            <p style={{ fontSize: 'clamp(17px, 2vw, 19.5px)', lineHeight: 1.55, color: 'var(--fg2)', maxWidth: '780px', margin: '0 auto 36px' }}>
              Your buyers research for weeks before they ever talk to sales: on Google, in ChatGPT, on LinkedIn, and on review sites. We make sure they find you, trust you, and book the demo. Strategy by people who understand SaaS. Speed by AI.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button 
                type="button"
                onClick={scrollToForm}
                className="btn btn-primary glow-sunrise"
                style={{ height: '52px', padding: '0 28px', fontSize: '16px', fontWeight: 600, borderRadius: 'var(--r-pill)' }}
              >
                Get My Free SaaS Growth Roadmap <ArrowRight size={18} />
              </button>

              <button 
                type="button"
                onClick={scrollToHowWeGrow}
                className="btn btn-ghost"
                style={{ height: '52px', padding: '0 26px', fontSize: '15px', fontWeight: 600, borderRadius: 'var(--r-pill)', background: 'var(--bg-elevated)', borderColor: 'var(--border-strong)' }}
              >
                See How We Grow SaaS Companies ↓
              </button>
            </div>

            {/* Trust Line */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '13.5px', fontWeight: 500, color: 'var(--fg2)', padding: '10px 20px', borderRadius: 'var(--r-pill)', background: 'rgba(14,26,43,0.04)', border: '1px solid var(--border)' }}>
              <span>No long-term contracts</span>
              <span style={{ color: 'var(--sunrise)', opacity: 0.6 }}>·</span>
              <span>You own every account and asset</span>
              <span style={{ color: 'var(--sunrise)', opacity: 0.6 }}>·</span>
              <span>Reporting tied to pipeline, not vanity metrics</span>
            </div>
          </div>

          {/* Proof Strip */}
          <div style={{ marginTop: '54px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '24px 32px', boxShadow: 'var(--shadow-1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', alignItems: 'center' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '26px', fontWeight: 700, color: 'var(--brand-fg)', lineHeight: 1 }}>+312%</span>
                <span style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.4 }}>signups for a solo SaaS founder in one quarter</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '26px', fontWeight: 700, color: 'var(--ice-700)', lineHeight: 1 }}>4.1×</span>
                <span style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.4 }}>AI answer visibility for an indie product in 60 days</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '26px', fontWeight: 700, color: 'var(--fg1)', lineHeight: 1 }}>4,000+</span>
                <span style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.4 }}>founders in our community building bootstrapped SaaS</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          THE PROBLEM
          ========================================================================= */}
      <section className="section" style={{ padding: '84px 0', borderTop: '1px solid var(--border)', background: 'var(--snow)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
              The Problem
            </div>

            <h2 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: 'var(--summit)', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 24px' }}>
              Great product. Quiet pipeline.
            </h2>

            <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 20px' }}>
              You've built something that genuinely solves a problem. But your category is crowded, your competitors have bigger budgets, and buyers are comparing five tools before they shortlist anyone.
            </p>

            <p style={{ fontSize: '16.5px', lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 28px' }}>
              Traffic trickles in but rarely converts. Trials start but don't activate. Paid ads burn budget on clicks from people who were never going to buy. And when a buyer asks ChatGPT "what's the best tool for [your category]," your name doesn't come up.
            </p>

            <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderLeft: '4px solid var(--sunrise)', borderRadius: 'var(--r-card)', padding: '20px 24px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,107,53,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sunrise)', flexShrink: 0 }}>
                <Sparkles size={22} />
              </div>
              <p style={{ margin: 0, fontSize: '15.5px', fontWeight: 500, color: 'var(--summit)', lineHeight: 1.5 }}>
                <strong>SaaS growth isn't about more marketing.</strong> It's about being visible, credible, and easy to say yes to at every stage of the buyer's research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SIGNS YOUR SAAS MARKETING IS LEAKING PIPELINE (Interactive Checklist)
          ========================================================================= */}
      <section ref={checklistSectionRef} className="section" style={{ padding: '88px 0', borderTop: '1px solid var(--border)', background: 'var(--white)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: 'var(--r-pill)', background: 'rgba(226,72,61,0.1)', color: 'var(--destructive)', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '14px' }}>
                <AlertTriangle size={14} /> Self-Assessment
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
                Signs your SaaS marketing is leaking pipeline
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--fg2)', margin: 0 }}>
                Click to tick any that apply to your current marketing. (Visitors who tick two or more are leaking the most pipeline.)
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '32px' }}>
              {CHECKLIST_SIGNS.map((sign) => {
                const isSelected = !!checkedSigns[sign.id];
                return (
                  <div
                    key={sign.id}
                    onClick={() => toggleSign(sign.id)}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: isSelected ? '1px solid var(--sunrise)' : '1px solid var(--border)',
                      background: isSelected ? 'rgba(255,107,53,0.05)' : 'var(--snow)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      transition: 'all 180ms ease'
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      border: isSelected ? '2px solid var(--sunrise)' : '2px solid var(--border-strong)',
                      background: isSelected ? 'var(--sunrise)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      flexShrink: 0,
                      transition: 'all 180ms ease'
                    }}>
                      {isSelected && <Check size={16} strokeWidth={3} />}
                    </div>
                    <span style={{ fontSize: '15.5px', fontWeight: isSelected ? 600 : 500, color: isSelected ? 'var(--summit)' : 'var(--fg1)' }}>
                      {sign.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Dynamic Alert Banner */}
            <div style={{
              background: checkedCount >= 2 ? 'rgba(255,107,53,0.08)' : 'var(--snow)',
              border: checkedCount >= 2 ? '1px solid rgba(255,107,53,0.3)' : '1px solid var(--border)',
              borderRadius: 'var(--r-card)',
              padding: '24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileCheck size={20} color="var(--sunrise)" />
                <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)' }}>
                  {checkedCount === 0 ? "Recognize two or more?" : `You selected ${checkedCount} warning ${checkedCount === 1 ? 'sign' : 'signs'}.`}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--fg2)', maxWidth: '580px', lineHeight: 1.5 }}>
                Recognize two or more? Get a free SaaS growth roadmap and we'll show you where pipeline is leaking and how to plug it fast.
              </p>
              <button
                type="button"
                onClick={scrollToForm}
                className="btn btn-primary btn-sm"
                style={{ marginTop: '6px', borderRadius: 'var(--r-pill)' }}
              >
                Get My Free SaaS Roadmap <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW SAAS BUYERS DECIDE (AND WHERE WE SHOW UP)
          ========================================================================= */}
      <section id="how-we-grow" className="section" style={{ padding: '90px 0', borderTop: '1px solid var(--border)', background: 'var(--snow)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
              The SaaS Buyer Journey
            </div>
            <h2 style={{ fontSize: 'clamp(30px, 4.2vw, 44px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              We build marketing around the B2B buyer journey
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--fg2)', margin: 0, maxWidth: '680px', margin: '0 auto' }}>
              Buyers don't leap into contracts on first touch. Here is how your buyers research, and exactly where we position you to win their vote.
            </p>
          </div>

          {/* 4-Stage Horizontal Journey Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {BUYER_JOURNEY.map((stage) => (
              <div 
                key={stage.step}
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-card)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: 'var(--shadow-1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--summit)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    fontWeight: 700
                  }}>
                    {stage.step}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--sunrise-700)', background: 'rgba(255,107,53,0.1)', padding: '3px 8px', borderRadius: '4px' }}>
                    {stage.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>
                  {stage.stage}
                </h3>

                <div style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.5, marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
                  <strong style={{ color: 'var(--summit)', display: 'block', marginBottom: '4px' }}>What the buyer does:</strong>
                  {stage.buyerDoes}
                </div>

                <div style={{ fontSize: '13.5px', color: 'var(--fg1)', lineHeight: 1.5, marginTop: 'auto' }}>
                  <strong style={{ color: 'var(--sunrise-700)', display: 'block', marginBottom: '4px' }}>Where we show up:</strong>
                  {stage.weHelp}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          WHAT WE DO FOR SAAS COMPANIES
          ========================================================================= */}
      <section className="section" style={{ padding: '96px 0', borderTop: '1px solid var(--border)', background: 'var(--white)' }}>
        <div className="wrap">
          
          <div style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
              Full-Funnel Capabilities
            </div>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              What we do for SaaS companies
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--fg2)', margin: 0 }}>
              Search, ads, conversion, content, and automation built specifically for software economics.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '26px' }}>
            {CAPABILITIES.map((cap) => (
              <div 
                key={cap.num}
                style={{
                  background: 'var(--snow)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-card)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--sunrise)', marginBottom: '12px' }}>
                  Capability {cap.num}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 12px', lineHeight: 1.25 }}>
                  {cap.title}
                </h3>

                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 20px' }}>
                  {cap.desc}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', marginBottom: '10px' }}>
                    Includes
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {cap.items.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--fg1)' }}>
                        <span style={{ color: 'var(--sunrise)', fontSize: '16px', lineHeight: 1 }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          RESULTS & METRICS
          ========================================================================= */}
      <section className="section" style={{ padding: '88px 0', borderTop: '1px solid var(--border)', background: 'var(--snow)' }}>
        <div className="wrap">
          
          <div style={{ maxWidth: '780px', margin: '0 auto 50px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
              Results
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
              What this looks like in practice
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--fg2)', margin: 0 }}>
              Proven outcomes for solo and bootstrapped tech companies climbing against venture-funded competitors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            
            <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '36px 30px', boxShadow: 'var(--shadow-1)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '44px', fontWeight: 700, color: 'var(--brand-fg)', display: 'block', lineHeight: 1, marginBottom: '8px' }}>
                +312%
              </span>
              <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--sunrise-700)', marginBottom: '12px' }}>
                Signups · Solo SaaS
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>
                How a solo SaaS founder tripled trial volume in a single quarter
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: '0 0 20px' }}>
                Rebuilt comparison pages, optimized the demo scheduling funnel, and deployed high-intent competitor displacement search campaigns.
              </p>
              <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: 'var(--sunrise-700)', textDecoration: 'none' }}>
                Read the story →
              </Link>
            </div>

            <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '36px 30px', boxShadow: 'var(--shadow-1)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '44px', fontWeight: 700, color: 'var(--ice-700)', display: 'block', lineHeight: 1, marginBottom: '8px' }}>
                4.1×
              </span>
              <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ice-700)', marginBottom: '12px' }}>
                AI Answer Visibility · Indie Product
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>
                From invisible to the top AI answer box in 60 days
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: '0 0 20px' }}>
                Structured entity citations, schema graphs, and authority proof points that turned ChatGPT and Perplexity queries into inbound demos.
              </p>
              <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: 'var(--sunrise-700)', textDecoration: 'none' }}>
                Read the story →
              </Link>
            </div>

          </div>

          {/* SaaS Metrics Row */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg3)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              Accountability
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>
              The SaaS metrics we focus on
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--fg2)', margin: 0 }}>
              We report on what matters to SaaS growth, not impressions and vanity likes:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {METRICS_LIST.map((m, i) => (
              <div key={i} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--summit)', marginBottom: '4px' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--fg2)', lineHeight: 1.4 }}>
                  {m.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          HOW IT WORKS (4 STEPS)
          ========================================================================= */}
      <section className="section" style={{ padding: '88px 0', borderTop: '1px solid var(--border)', background: 'var(--white)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '780px', margin: '0 auto 50px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
              Process
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
              From audit to growing pipeline
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--fg2)', margin: 0 }}>
              A proven 4-stage sprint system to fix pipeline leaks and scale acquisition.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            
            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--sunrise)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>1</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg3)', fontFamily: 'var(--font-mono)' }}>WEEK 1</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>SaaS growth audit</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.5, margin: 0 }}>
                We review your website, funnel, ads, content, competitors, and AI search visibility to find where pipeline is leaking.
              </p>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--sunrise)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>2</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg3)', fontFamily: 'var(--font-mono)' }}>WEEK 2</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Build your growth route</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.5, margin: 0 }}>
                We prioritize the channels and fixes most likely to grow trials and demos for your stage, motion, and budget.
              </p>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--sunrise)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>3</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg3)', fontFamily: 'var(--font-mono)' }}>WEEKS 3–4</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Launch and test</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.5, margin: 0 }}>
                Pages, campaigns, content, and automations go live with precise pipeline and event tracking in place.
              </p>
            </div>

            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '28px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--sunrise)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>4</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg3)', fontFamily: 'var(--font-mono)' }}>ONGOING</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>Scale what works</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.5, margin: 0 }}>
                Weekly campaign optimization and monthly strategy reviews focused on qualified pipeline, not vanity metrics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          WHO WE WORK WITH
          ========================================================================= */}
      <section className="section" style={{ padding: '84px 0', borderTop: '1px solid var(--border)', background: 'var(--snow)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                Audience Fit
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
                Who we work with
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              <div style={{ background: 'var(--white)', padding: '24px', borderRadius: 'var(--r-card)', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '8px' }}>Early-stage SaaS</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  Finding product-market fit and establishing the first repeatable acquisition channel.
                </p>
              </div>

              <div style={{ background: 'var(--white)', padding: '24px', borderRadius: 'var(--r-card)', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '8px' }}>Growth-stage SaaS</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  Scaling demo booking volume and methodically lowering customer acquisition cost (CAC).
                </p>
              </div>

              <div style={{ background: 'var(--white)', padding: '24px', borderRadius: 'var(--r-card)', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '8px' }}>Bootstrapped &amp; Founder-led SaaS</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  Teams that need senior marketing leadership and AI speed without hiring an expensive in-house roster.
                </p>
              </div>

              <div style={{ background: 'var(--white)', padding: '24px', borderRadius: 'var(--r-card)', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '8px' }}>Tech &amp; IT Services</h4>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  Companies that sell to businesses and need consistent, high-intent B2B leads.
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '12px', padding: '18px 24px', textAlign: 'center' }}>
              <span style={{ fontSize: '13.5px', color: 'var(--fg2)' }}>
                <strong>Product types supported:</strong> Horizontal and vertical SaaS, developer tools, AI products, marketplaces, and B2B platforms.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPARISON TABLE (HOW BOOTSOLO COMPARES)
          ========================================================================= */}
      <section className="section" style={{ padding: '90px 0', borderTop: '1px solid var(--border)', background: 'var(--white)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                Comparison
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
                How Bootsolo compares
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--fg2)', margin: 0 }}>
                Why solo and bootstrapped SaaS teams choose us over freelancers, generalist agencies, or hiring in-house.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: 'var(--r-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-1)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '640px', background: 'var(--white)' }}>
                <thead>
                  <tr style={{ background: 'var(--snow)', borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '16px 20px', fontSize: '13.5px', fontWeight: 600, color: 'var(--summit)' }}>Criteria</th>
                    <th style={{ padding: '16px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)' }}>Freelancers</th>
                    <th style={{ padding: '16px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)' }}>Generalist Agency</th>
                    <th style={{ padding: '16px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--fg2)' }}>In-house Team</th>
                    <th style={{ padding: '16px 20px', fontSize: '13.5px', fontWeight: 700, color: 'var(--sunrise-700)', background: 'rgba(255,107,53,0.08)' }}>Bootsolo</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i === COMPARISON_ROWS.length - 1 ? 'none' : '1px solid var(--border)' }}>
                      <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 600, color: 'var(--summit)' }}>{row.feature}</td>
                      <td style={{ padding: '16px 16px', fontSize: '13.5px', color: 'var(--fg2)' }}>{row.freelancers}</td>
                      <td style={{ padding: '16px 16px', fontSize: '13.5px', color: 'var(--fg2)' }}>{row.generalist}</td>
                      <td style={{ padding: '16px 16px', fontSize: '13.5px', color: 'var(--fg2)' }}>{row.inhouse}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 700, color: 'var(--sunrise-700)', background: 'rgba(255,107,53,0.04)' }}>
                        {row.bootsolo === 'Yes' ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Check size={16} strokeWidth={3} /> Yes
                          </span>
                        ) : row.bootsolo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          IS THIS RIGHT FOR YOU? & WHY BOOTSOLO FOR SAAS
          ========================================================================= */}
      <section className="section" style={{ padding: '88px 0', borderTop: '1px solid var(--border)', background: 'var(--snow)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                Fit &amp; Principles
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
                Is this right for you?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '64px' }}>
              
              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderTop: '4px solid var(--success)', borderRadius: 'var(--r-card)', padding: '30px 26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(31,191,117,0.12)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={18} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: 0 }}>
                    We're a great fit if:
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.5 }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>✓</span>
                    You have a live product with real users or paying customers.
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>✓</span>
                    You want more qualified trials and demo bookings rather than empty vanity traffic.
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>✓</span>
                    You're ready to move quickly on recommendations and pipeline tests.
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderTop: '4px solid var(--destructive)', borderRadius: 'var(--r-card)', padding: '30px 26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(226,72,61,0.12)', color: 'var(--destructive)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <XCircle size={18} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--summit)', margin: 0 }}>
                    Probably not the right fit if:
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.5 }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--destructive)', fontWeight: 'bold' }}>✕</span>
                    You're pre-product with nothing built to sell yet.
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--destructive)', fontWeight: 'bold' }}>✕</span>
                    You're looking for disconnected, one-off design tasks with no connection to growth goals.
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--fg3)', fontSize: '13px' }}>
                      (If you're pre-launch, ask our team about dedicated launch and positioning support.)
                    </span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Why Bootsolo for SaaS */}
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <h3 style={{ fontSize: '26px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>
                Why Bootsolo for SaaS
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'var(--white)', padding: '22px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>We speak SaaS</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  Trials, activation, MRR, CAC, and pipeline, not just clicks and impressions.
                </p>
              </div>

              <div style={{ background: 'var(--white)', padding: '22px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>AI-native by design</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  We help you get found in AI answer engines where more and more B2B buyers start their research.
                </p>
              </div>

              <div style={{ background: 'var(--white)', padding: '22px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>Founder-friendly</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  Built for lean and bootstrapped teams, with senior strategy and AI-speed execution.
                </p>
              </div>

              <div style={{ background: 'var(--white)', padding: '22px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>One team across the funnel</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  Search, ads, content, CRO, and automation working together seamlessly.
                </p>
              </div>

              <div style={{ background: 'var(--white)', padding: '22px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>You own everything</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  Ad accounts, content, data, and designs stay strictly yours.
                </p>
              </div>

              <div style={{ background: 'var(--white)', padding: '22px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>No long-term contracts</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--fg2)', margin: 0, lineHeight: 1.5 }}>
                  Flexible month-to-month. Stay because it's working.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION
          ========================================================================= */}
      <section className="section" style={{ padding: '88px 0', borderTop: '1px solid var(--border)', background: 'var(--white)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                Frequently Asked Questions
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
                Questions founders ask before starting
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      background: isOpen ? 'var(--snow)' : 'var(--white)',
                      overflow: 'hidden',
                      transition: 'background 180ms ease'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '18px 22px',
                        background: 'none',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'var(--summit)'
                      }}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease', color: 'var(--fg3)', flexShrink: 0, marginLeft: '12px' }} />
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 22px 20px', fontSize: '14.5px', lineHeight: 1.6, color: 'var(--fg2)' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          LEAD MAGNET (FREE RESOURCE: SAAS PIPELINE CHECKLIST)
          ========================================================================= */}
      <section className="section" style={{ padding: '88px 0', borderTop: '1px solid var(--border)', background: 'var(--snow)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px', margin: '0 auto', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '48px 40px', boxShadow: 'var(--shadow-1)' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: 'var(--r-pill)', background: 'rgba(255,107,53,0.1)', color: 'var(--sunrise-700)', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '16px' }}>
                <Download size={14} /> Free Resource
              </div>

              <h2 style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
                Not ready for a call? Get the SaaS Pipeline Checklist.
              </h2>

              <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
                <strong>The SaaS Pipeline Leak Checklist:</strong> 30 checks across your homepage, pricing page, signup flow, ads, and AI visibility to find where trials and demos are slipping away.
              </p>
            </div>

            {checklistSuccess ? (
              <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--frost)', borderRadius: 'var(--r-md)', border: '1px solid rgba(56,182,245,0.3)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <CheckCircle2 size={26} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--summit)', marginBottom: '8px' }}>
                  Checklist on the way!
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: 0 }}>
                  We've sent the 30-point SaaS Pipeline Checklist to <strong>{leadEmail}</strong>. Check your inbox!
                </p>
                <button
                  type="button"
                  onClick={() => setChecklistSuccess(false)}
                  className="btn btn-ghost btn-sm"
                  style={{ marginTop: '20px' }}
                >
                  Download Another Copy
                </button>
              </div>
            ) : (
              <form onSubmit={handleChecklistSubmit}>
                
                {checklistError && (
                  <div style={{ padding: '10px 14px', background: '#FFE9DF', color: 'var(--destructive)', borderRadius: 'var(--r-sm)', fontSize: '13.5px', marginBottom: '18px' }}>
                    {checklistError}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Chen"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--border)',
                        background: 'var(--snow)',
                        fontSize: '14px',
                        color: 'var(--summit)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--border)',
                        background: 'var(--snow)',
                        fontSize: '14px',
                        color: 'var(--summit)',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Centered Button In Between */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button
                    type="submit"
                    disabled={checklistLoading}
                    className="btn btn-primary"
                    style={{
                      height: '48px',
                      padding: '0 36px',
                      justifyContent: 'center',
                      borderRadius: 'var(--r-pill)',
                      fontSize: '15px',
                      fontWeight: 600,
                      minWidth: '220px',
                      boxShadow: 'var(--glow-sunrise)'
                    }}
                  >
                    {checklistLoading ? 'Sending...' : 'Send Me the Checklist'}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* =========================================================================
          RELATED INDUSTRIES
          ========================================================================= */}
      <section className="section" style={{ padding: '70px 0', borderTop: '1px solid var(--border)', background: 'var(--white)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg3)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
              Explore Other Sectors
            </div>
            
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link 
                href="/industries#mobile-apps-startups"
                className="btn btn-ghost btn-sm"
                style={{ borderRadius: 'var(--r-pill)', fontSize: '13.5px' }}
              >
                <Smartphone size={14} /> Mobile Apps &amp; Startups →
              </Link>

              <Link 
                href="/industries#fintech-financial"
                className="btn btn-ghost btn-sm"
                style={{ borderRadius: 'var(--r-pill)', fontSize: '13.5px' }}
              >
                <ShieldCheck size={14} /> Fintech &amp; Financial Services →
              </Link>

              <Link 
                href="/industries#professional-services"
                className="btn btn-ghost btn-sm"
                style={{ borderRadius: 'var(--r-pill)', fontSize: '13.5px' }}
              >
                <Briefcase size={14} /> Professional Services →
              </Link>

              <Link 
                href="/industries"
                className="btn btn-ghost btn-sm"
                style={{ borderRadius: 'var(--r-pill)', fontSize: '13.5px', background: 'rgba(255,107,53,0.06)', borderColor: 'rgba(255,107,53,0.3)', color: 'var(--sunrise-700)' }}
              >
                View all industries →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA & SAAS ROADMAP FORM (White Card Background)
          ========================================================================= */}
      <section ref={formRef} id="roadmap-form" className="section" style={{ padding: '100px 0', background: 'var(--summit)', color: '#EEF3F8', position: 'relative', overflow: 'hidden' }}>
        
        {/* Glow */}
        <div style={{ position: 'absolute', bottom: '-150px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(255,107,53,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          
          <div style={{ maxWidth: '780px', margin: '0 auto 56px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--r-pill)', background: 'rgba(255,107,53,0.15)', color: 'var(--sunrise-300)', border: '1px solid rgba(255,107,53,0.3)', marginBottom: '20px' }}>
              <PaperPlaneMark size={16} color="#FF9A6B" planeColor="#FF6B35" />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                Start Your Route
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(34px, 4.5vw, 50px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#FFFFFF', margin: '0 0 18px' }}>
              Let's find where your pipeline is leaking.
            </h2>

            <p style={{ fontSize: '17px', color: 'var(--navy-300)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
              Get a free SaaS growth roadmap: how competitors are winning buyers, where you're missing in search and AI answers, and the three changes most likely to grow trials and demos. No pressure, no bloated proposal.
            </p>
          </div>

            {/* Action CTAs */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '36px', marginBottom: '32px' }}>
              <Link 
                href="/#growth-roadmap" 
                className="btn btn-primary glow-sunrise" 
                style={{ height: '54px', padding: '0 32px', fontSize: '16px', fontWeight: 600, borderRadius: 'var(--r-pill)' }}
              >
                Book a Growth Call <ArrowRight size={18} />
              </Link>

              <Link 
                href="/custom-quote" 
                className="btn btn-ghost" 
                style={{ height: '54px', padding: '0 28px', fontSize: '15px', fontWeight: 600, borderRadius: 'var(--r-pill)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)' }}
              >
                Request Custom Quote
              </Link>
            </div>

            {/* Proof / Trust Markers */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>
              <span>✓ No long-term contracts</span>
              <span>✓ You own every account and asset</span>
              <span>✓ Reporting tied to pipeline, not vanity metrics</span>
            </div>

        </div>
      </section>

    </div>
  );
}
