'use client';

import { useState } from 'react';
import Link from 'next/link';
import InteractiveGlobe from './InteractiveGlobe';
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  Bot,
  Search,
  TrendingUp,
  Video,
  Monitor,
  Sparkles,
  GraduationCap
} from 'lucide-react';

const MODULES = [
  {
    id: 1,
    number: '01',
    name: 'AI-Powered Marketing',
    subheading: 'Campaigns, automation & vibe marketing',
    slug: '/ai-powered-marketing',
    icon: Bot,
    nodeBadge: 'AI GROWTH ENGINE',
    hubTitle: 'Campaigns, automation & vibe marketing',
    statLabel: 'SIGNUP GROWTH',
    statValue: '+312%',
    modelLabel: 'DELIVERY TIMELINE',
    modelValue: 'Always-On Engine',
    description: "Turn AI from a buzzword into a growth engine. We design always-on campaigns, automate your funnels end to end, and continuously optimize what's working — so your marketing improves while you sleep.",
    highlightsTitle: 'CORE DELIVERABLES & CAPABILITIES',
    deliverables: [
      'AI-powered campaign strategy and execution',
      'Marketing automation across the full funnel',
      'Vibe marketing that captures attention and intent',
      'Automated funnel optimization and testing'
    ],
    ctaText: 'Explore AI-Powered Marketing'
  },
  {
    id: 2,
    number: '02',
    name: 'SEO / AEO / GEO',
    subheading: 'Search, AI-Engine & Geo Optimization',
    slug: '/seo-aeo-geo',
    icon: Search,
    nodeBadge: 'AI & SEARCH CITATION',
    hubTitle: 'Search, AI-Engine & Geo Optimization',
    statLabel: 'AI CITATION VISIBILITY',
    statValue: '4.1x',
    modelLabel: 'PLATFORMS',
    modelValue: 'Google · ChatGPT · Perplexity',
    description: "Being found is no longer just about Google. We optimize you for traditional search, for answer engines like ChatGPT and Perplexity, and for the local searches that drive real-world demand — so customers find you wherever they're looking.",
    highlightsTitle: 'CORE DELIVERABLES & CAPABILITIES',
    deliverables: [
      'Technical and content SEO that ranks',
      'Answer Engine Optimization (AEO) for AI search',
      'Generative Engine Optimization (GEO) for AI citations',
      'Local and geo-targeted visibility'
    ],
    ctaText: 'Explore SEO / AEO / GEO'
  },
  {
    id: 3,
    number: '03',
    name: 'Performance & Lead Generation',
    subheading: 'Performance marketing & pipeline growth',
    slug: '/performance-lead-generation',
    icon: TrendingUp,
    nodeBadge: 'PAID & PIPELINE',
    hubTitle: 'Performance marketing & pipeline growth',
    statLabel: 'LOWER COST PER SALE',
    statValue: '-58%',
    modelLabel: 'OUTCOME FOCUS',
    modelValue: 'Predictable Pipeline',
    description: 'Every dollar should earn its place. We run paid campaigns and conversion programs built around one goal: a steady, predictable flow of qualified leads into your pipeline.',
    highlightsTitle: 'CORE DELIVERABLES & CAPABILITIES',
    deliverables: [
      'Paid search and paid social campaigns',
      'Conversion Rate Optimization (CRO)',
      'Lead generation systems that fill your pipeline',
      'Full-funnel performance tracking and reporting'
    ],
    ctaText: 'Explore Performance & Lead Generation'
  },
  {
    id: 4,
    number: '04',
    name: 'Content, Video & Thought Leadership',
    subheading: 'Content, video & authority building',
    slug: '/content-video-thought-leadership',
    icon: Video,
    nodeBadge: 'AUTHORITY & MEDIA',
    hubTitle: 'Content, video & authority building',
    statLabel: 'CONTENT VELOCITY',
    statValue: '3x Faster',
    modelLabel: 'IMPACT',
    modelValue: 'Earn Trust Before Calls',
    description: 'Great content earns trust before a sales call ever happens. We create the articles, videos, and points of view that position you as the obvious choice in your category.',
    highlightsTitle: 'CORE DELIVERABLES & CAPABILITIES',
    deliverables: [
      'Content marketing and editorial strategy',
      'Video production and motion design',
      'Thought leadership that builds authority',
      'Content built to rank and convert'
    ],
    ctaText: 'Explore Content, Video & Thought Leadership'
  },
  {
    id: 5,
    number: '05',
    name: 'Web & Ecommerce Experience',
    subheading: 'Web design, UX & ecommerce',
    slug: '/web-ecommerce-experience',
    icon: Monitor,
    nodeBadge: 'CONVERSION & EXPERIENCE',
    hubTitle: 'Web design, UX & ecommerce',
    statLabel: 'STOREFRONT CONVERSION',
    statValue: 'High ROI',
    modelLabel: 'SPEED & SCALE',
    modelValue: 'Next.js · Headless',
    description: 'Your website is your hardest-working salesperson. We design fast, intuitive sites and storefronts that turn visitors into customers — and look the part while doing it.',
    highlightsTitle: 'CORE DELIVERABLES & CAPABILITIES',
    deliverables: [
      'Conversion-focused web design',
      'UX strategy and optimization',
      'Ecommerce builds and experiences',
      'Sites engineered for speed and scale'
    ],
    ctaText: 'Explore Web & Ecommerce Experience'
  },
  {
    id: 6,
    number: '06',
    name: 'Branding',
    subheading: 'Brand identity & positioning',
    slug: '/branding',
    icon: Sparkles,
    nodeBadge: 'IDENTITY & POSITIONING',
    hubTitle: 'Brand identity & positioning',
    statLabel: 'POSITIONING CLARITY',
    statValue: 'Distinct',
    modelLabel: 'CATEGORY IMPACT',
    modelValue: 'Obvious Choice',
    description: 'A strong brand makes everything else easier — every ad, every page, every pitch. We help you find your position, sharpen your message, and build an identity that sticks.',
    highlightsTitle: 'CORE DELIVERABLES & CAPABILITIES',
    deliverables: [
      'Brand strategy and positioning',
      'Visual identity and design systems',
      'Messaging and voice',
      'Rebrands and brand refreshes'
    ],
    ctaText: 'Explore Branding'
  }
];

export default function Services() {
  // Single piece of state for the active module (single source of truth)
  const [activeModule, setActiveModule] = useState(MODULES[0]);

  return (
    <section className="section" id="services" style={{ background: 'var(--white)', padding: '96px 0' }}>
      <div className="wrap">
        {/* Main Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <p className="eyebrow">What we do</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.1 }}>
            Six ways we drive your growth
          </h2>
          <p className="ds-lead" style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
            From the first impression to the final conversion, we cover the full marketing engine — and connect every piece so it compounds.
          </p>
        </div>

          {/* TWO-REGION LAYOUT: Menu List on Left (30%), ONE Single Shared Detail Card on Right (70%) */}
          <div className="modules-explorer-layout">
            
            {/* REGION 1: LEFT MENU — plain text list, 7 items, NO cards, NO icons, NO grid */}
            <ul className="modules-menu-list">
              {MODULES.map((m) => {
                const isActive = activeModule.id === m.id;
                return (
                  <li
                    key={m.id}
                    onMouseEnter={() => setActiveModule(m)}
                    onFocus={() => setActiveModule(m)}
                    onClick={() => setActiveModule(m)}
                    tabIndex={0}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      borderLeft: isActive ? '4px solid var(--sunrise)' : '4px solid transparent',
                      background: isActive ? 'var(--snow)' : 'transparent',
                      transition: 'all 200ms ease',
                      outline: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: isActive ? 'var(--sunrise)' : 'var(--fg3)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      MODULE 0{m.id}
                    </span>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'var(--summit)' : 'var(--fg1)',
                        marginTop: '3px'
                      }}
                    >
                      {m.name}
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* REGION 2: RIGHT DETAIL PANEL — EXACTLY ONE card element in DOM, content swaps via activeModule */}
            <div className="module-detail-container">
              <div
                key={activeModule.id}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'var(--summit)',
                  color: '#EEF3F8',
                  border: '1px solid var(--sunrise)',
                  boxShadow: 'var(--glow-sunrise)',
                  padding: 'clamp(24px, 4vw, 36px)',
                  transition: 'all 250ms cubic-bezier(0.22, 1, 0.36, 1)',
                  animation: 'fadeIn 250ms ease'
                }}
              >
                {/* Soft Coral/Orange Top-Left Radial Gradient Glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 0% 0%, rgba(255,107,53,0.22) 0%, transparent 65%)',
                    pointerEvents: 'none'
                  }}
                />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Top Header Row: Pill Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '20px' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(255,107,53,0.15)',
                        color: 'var(--sunrise-300)',
                        border: '1px solid rgba(255,107,53,0.30)',
                        padding: '6px 14px',
                        borderRadius: '999px',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono), monospace',
                        letterSpacing: '0.04em'
                      }}
                    >
                      <MapPin size={14} color="var(--sunrise)" />
                      <span>{activeModule.nodeBadge}</span>
                    </div>
                  </div>

                  {/* Main Hub Title */}
                  <h4 style={{ fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, fontWeight: 600, color: '#FFFFFF', margin: '0 0 20px', letterSpacing: '-0.02em' }}>
                    {activeModule.hubTitle}
                  </h4>

                  {/* 2-Column Stat Box with Vertical Divider */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      alignItems: 'center',
                      padding: '18px 24px',
                      background: 'var(--navy-900)',
                      borderRadius: '14px',
                      border: '1px solid var(--navy-700)',
                      marginBottom: '20px'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '10.5px', fontWeight: 700, fontFamily: 'var(--font-mono), monospace', color: 'var(--navy-400)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {activeModule.statLabel}
                      </div>
                      <div className="mono" style={{ fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: 'var(--sunrise-300)', marginTop: '2px', lineHeight: 1.1 }}>
                        {activeModule.statValue}
                      </div>
                    </div>

                    <div style={{ borderLeft: '1px solid var(--navy-700)', paddingLeft: '20px' }}>
                      <div style={{ fontSize: '10.5px', fontWeight: 700, fontFamily: 'var(--font-mono), monospace', color: 'var(--navy-400)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {activeModule.modelLabel}
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginTop: '4px', lineHeight: 1.3 }}>
                        {activeModule.modelValue}
                      </div>
                    </div>
                  </div>

                  {/* Description Sentence */}
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-300)', margin: '0 0 24px' }}>
                    {activeModule.description}
                  </p>

                  {/* Live Traction Highlights Box */}
                  <div style={{ background: 'var(--navy-800)', borderRadius: '14px', padding: '20px', border: '1px solid var(--navy-700)', marginBottom: '28px' }}>
                    <h5 style={{ fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-mono), monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--navy-400)', margin: '0 0 14px' }}>
                      {activeModule.highlightsTitle}
                    </h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {activeModule.deliverables.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2 size={17} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '14px', color: '#EEF3F8', lineHeight: 1.45 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation CTA Button */}
                  <Link
                    href={activeModule.slug}
                    className="btn btn-primary glow-sunrise"
                    style={{ width: '100%', justifyContent: 'center', height: '48px', fontSize: '15px', fontWeight: 600, borderRadius: '12px' }}
                  >
                    <span>{activeModule.ctaText}</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}
