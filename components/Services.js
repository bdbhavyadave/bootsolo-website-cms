'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bot, Search, TrendingUp, Video, Monitor, Sparkles, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  // Locked 7 Service Modules — Exactly 4 deliverables and 1 CTA link per module
  const serviceList = [
    {
      id: 1,
      title: 'AI-Powered Marketing',
      slug: '/ai-powered-marketing',
      icon: Bot,
      eyebrow: 'Campaigns, automation, and vibe marketing.',
      headline: 'Always-on campaigns, funnels automated end to end, constant tuning of what\'s already working.',
      ctaText: 'Explore AI-Powered Marketing →',
      deliverables: [
        'AI-powered campaign strategy and execution',
        'Marketing automation across the full funnel',
        'Vibe marketing that captures attention and intent',
        'Automated funnel testing and optimization'
      ]
    },
    {
      id: 2,
      title: 'SEO, AEO & GEO',
      slug: '/seo-aeo-geo',
      icon: Search,
      eyebrow: 'Search, answer engine, and geo optimization.',
      headline: 'Building for traditional search, answer engines like ChatGPT and Perplexity, and local searches that turn into real demand.',
      ctaText: 'Explore SEO, AEO & GEO →',
      deliverables: [
        'Technical and content SEO that ranks',
        'Answer Engine Optimization (AEO) for AI search',
        'Generative Engine Optimization (GEO) for AI citations',
        'Local and geo-targeted visibility'
      ]
    },
    {
      id: 3,
      title: 'Performance & Lead Generation',
      slug: '/performance-lead-generation',
      icon: TrendingUp,
      eyebrow: 'Performance marketing and pipeline growth.',
      headline: 'Every dollar earns its seat.',
      ctaText: 'Explore Performance & Lead Generation →',
      deliverables: [
        'Paid search and paid social campaigns',
        'Conversion rate optimization (CRO)',
        'Lead generation systems built for pipeline',
        'Full-funnel tracking and reporting'
      ]
    },
    {
      id: 4,
      title: 'Content, Video & Thought Leadership',
      slug: '/content-video-thought-leadership',
      icon: Video,
      eyebrow: 'Content, video, and authority building.',
      headline: 'People trust you before the call, or they don\'t get on the call.',
      ctaText: 'Explore Content, Video & Thought Leadership →',
      deliverables: [
        'Content marketing and editorial strategy',
        'Video production and motion design',
        'Founder-led thought leadership',
        'Content built to rank and convert'
      ]
    },
    {
      id: 5,
      title: 'Web & Ecommerce Experience',
      slug: '/web-ecommerce-experience',
      icon: Monitor,
      eyebrow: 'Web design, UX, and ecommerce.',
      headline: 'Your site is your hardest-working salesperson.',
      ctaText: 'Explore Web & Ecommerce Experience →',
      deliverables: [
        'Conversion-focused web design',
        'UX strategy and optimization',
        'Ecommerce builds and experiences',
        'Sites engineered for speed and scale'
      ]
    },
    {
      id: 6,
      title: 'Branding',
      slug: '/branding',
      icon: Sparkles,
      eyebrow: 'Brand identity and positioning.',
      headline: 'Get the brand right and everything downstream gets easier.',
      ctaText: 'Explore Branding →',
      deliverables: [
        'Brand strategy and positioning',
        'Visual identity and design systems',
        'Messaging and voice',
        'Rebrands and brand refreshes'
      ]
    },
    {
      id: 7,
      title: 'AI Enablement & Training',
      slug: '/ai-enablement-training',
      icon: GraduationCap,
      eyebrow: 'Practical AI skills for real teams.',
      headline: 'Buying the tools is the easy part; adoption is the gap.',
      ctaText: 'Explore AI Enablement & Training →',
      deliverables: [
        'AI workflow audits and readiness assessments',
        'Hands-on training for marketing, sales, and ops teams',
        'Custom playbooks for AI-assisted work',
        'Ongoing coaching as tools and use cases evolve'
      ]
    }
  ];

  const current = serviceList[activeService];
  const IconComponent = current.icon;

  return (
    <section className="section" id="services" style={{ background: 'var(--white)', padding: '100px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 56px' }}>
          <p className="eyebrow">What we do</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '12px 0' }}>
            Seven ways we drive your growth
          </h2>
          <p className="ds-lead">
            We run the whole marketing engine, start to finish, and we build it so every piece feeds the next one.
          </p>
        </div>

        {/* Filter Tabs / Module Selector */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
          {serviceList.map((svc, idx) => {
            const SvcIcon = svc.icon;
            const isSelected = activeService === idx;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveService(idx)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '999px',
                  border: isSelected ? '1px solid var(--sunrise)' : '1px solid var(--border)',
                  background: isSelected ? 'var(--summit)' : 'var(--bg-elevated)',
                  color: isSelected ? '#fff' : 'var(--fg2)',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 170ms var(--ease)'
                }}
              >
                <SvcIcon size={16} color={isSelected ? 'var(--sunrise-300)' : 'var(--fg3)'} />
                <span>{svc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Card */}
        <div
          style={{
            background: 'var(--snow)',
            borderRadius: 'var(--r-md)',
            border: '1px solid var(--border-strong)',
            padding: '48px',
            boxShadow: 'var(--shadow-2)',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--frost)', color: 'var(--brand-fg)', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, marginBottom: '18px' }}>
              <IconComponent size={16} />
              <span>MODULE 0{current.id} — {current.title}</span>
            </div>

            <h3 style={{ fontSize: '28px', lineHeight: 1.2, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 14px', color: 'var(--summit)' }}>
              {current.eyebrow}
            </h3>

            <p style={{ fontSize: '16.5px', lineHeight: 1.6, color: 'var(--fg2)', marginBottom: '28px' }}>
              {current.headline}
            </p>

            <Link className="btn btn-primary glow-sunrise" href={current.slug} style={{ height: '46px', padding: '0 24px', fontSize: '15px' }}>
              {current.ctaText}
            </Link>
          </div>

          {/* Locked Deliverables List */}
          <div style={{ background: 'var(--white)', borderRadius: 'var(--r-card)', padding: '36px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-1)' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', marginBottom: '20px' }}>
              Deliverables & Core Capabilities
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {current.deliverables.map((del, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.5, fontWeight: 500 }}>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
