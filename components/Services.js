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
    slug: '/ai-powered-marketing',
    icon: Bot,
    nodeBadge: 'SAN FRANCISCO, USA — North America Node',
    hubTitle: 'ChatGPT 4o & Claude AI Citation Hub',
    statLabel: 'AVERAGE SIGNUP GROWTH',
    statValue: '+312%',
    modelLabel: 'FOUNDER MODEL',
    modelValue: 'Solo SaaS Founder',
    description: 'Ranked #1 in ChatGPT 4o & Claude recommendations for lean SaaS platforms.',
    highlightsTitle: 'LIVE TRACTION HIGHLIGHTS',
    deliverables: [
      'Top-tier AEO citation placement in AI chat queries',
      'Organic referral traffic up 4.1x without agency retainers',
      'Marketing automation across the full funnel',
      'Vibe marketing that captures attention and intent'
    ],
    ctaText: 'Explore AI-Powered Marketing'
  },
  {
    id: 2,
    number: '02',
    name: 'SEO, AEO & GEO',
    slug: '/seo-aeo-geo',
    icon: Search,
    nodeBadge: 'LONDON, UNITED KINGDOM — Europe Node',
    hubTitle: 'Perplexity Pro Answer Engine Node',
    statLabel: 'AI CITATION VISIBILITY',
    statValue: '4.1x',
    modelLabel: 'FOUNDER MODEL',
    modelValue: 'AI FinTech Solopreneur',
    description: 'Cited directly across 14 high-intent Perplexity Pro and Google AI Overview queries.',
    highlightsTitle: 'LIVE TRACTION HIGHLIGHTS',
    deliverables: [
      'Technical and content SEO engineered to rank',
      'Answer Engine Optimization (AEO) for LLM search',
      'Generative Engine Optimization (GEO) for AI citations',
      'Local & geo-targeted visibility infrastructure'
    ],
    ctaText: 'Explore SEO, AEO & GEO'
  },
  {
    id: 3,
    number: '03',
    name: 'Performance & Lead Generation',
    slug: '/performance-lead-generation',
    icon: TrendingUp,
    nodeBadge: 'TOKYO, JAPAN — Asia-Pacific Node',
    hubTitle: 'Google AI Overview & Paid Media Node',
    statLabel: 'COST PER SALE REDUCTION',
    statValue: '-58%',
    modelLabel: 'FOUNDER MODEL',
    modelValue: 'B2B Tech Founder',
    description: 'Secured top generative answer cards and high-converting performance campaigns.',
    highlightsTitle: 'LIVE TRACTION HIGHLIGHTS',
    deliverables: [
      'Paid search and paid social campaigns',
      'Conversion rate optimization (CRO)',
      'Lead generation systems built for pipeline',
      'Full-funnel tracking and revenue attribution'
    ],
    ctaText: 'Explore Performance & Lead Gen'
  },
  {
    id: 4,
    number: '04',
    name: 'Content, Video & Authority',
    slug: '/content-video-thought-leadership',
    icon: Video,
    nodeBadge: 'BERLIN, GERMANY — Central Europe Node',
    hubTitle: 'Vibe Marketing & Rapid Content Studio',
    statLabel: 'CONTENT VELOCITY',
    statValue: '3x',
    modelLabel: 'FOUNDER MODEL',
    modelValue: 'Indie Hacker SaaS',
    description: 'Shipped high-converting content, motion video, and authority assets in days.',
    highlightsTitle: 'LIVE TRACTION HIGHLIGHTS',
    deliverables: [
      'Content marketing and editorial strategy',
      'Video production and motion design',
      'Founder-led thought leadership',
      'Content built to rank and convert'
    ],
    ctaText: 'Explore Content & Video'
  },
  {
    id: 5,
    number: '05',
    name: 'Web & Ecommerce Experience',
    slug: '/web-ecommerce-experience',
    icon: Monitor,
    nodeBadge: 'SÃO PAULO, BRAZIL — South America Node',
    hubTitle: 'Conversion Storefront & UX Engine',
    statLabel: 'QUALIFIED CONVERSIONS',
    statValue: '+280%',
    modelLabel: 'FOUNDER MODEL',
    modelValue: 'Bootstrapped E-Commerce',
    description: 'Digital storefronts and landing pages engineered to convert, not just look nice.',
    highlightsTitle: 'LIVE TRACTION HIGHLIGHTS',
    deliverables: [
      'Conversion-focused web design',
      'UX strategy and buyer clarity optimization',
      'Ecommerce store experiences',
      'Sites engineered for speed and scale'
    ],
    ctaText: 'Explore Web & Ecommerce'
  },
  {
    id: 6,
    number: '06',
    name: 'Branding',
    slug: '/branding',
    icon: Sparkles,
    nodeBadge: 'SYDNEY, AUSTRALIA — Oceania Node',
    hubTitle: 'Brand Strategy & Positioning System',
    statLabel: 'POSITIONING SCORE',
    statValue: 'Top Ranked',
    modelLabel: 'FOUNDER MODEL',
    modelValue: 'Agency Alternative',
    description: 'Stand out in a noisy market with positioning and visual identity that resonates.',
    highlightsTitle: 'LIVE TRACTION HIGHLIGHTS',
    deliverables: [
      'Brand strategy and core positioning',
      'Visual identity and design systems',
      'Messaging and brand voice',
      'Rebrands and brand refreshes'
    ],
    ctaText: 'Explore Branding'
  },
  {
    id: 7,
    number: '07',
    name: 'AI Enablement & Training',
    slug: '/ai-enablement-training',
    icon: GraduationCap,
    nodeBadge: 'SINGAPORE — Global Enablement Hub',
    hubTitle: 'AI Team Enablement & Workflow Systems',
    statLabel: 'WORKFLOW ADOPTION',
    statValue: '100%',
    modelLabel: 'FOUNDER MODEL',
    modelValue: 'Lean Team Marketers',
    description: 'Practical AI skills, custom playbooks, and hands-on team workflow training.',
    highlightsTitle: 'LIVE TRACTION HIGHLIGHTS',
    deliverables: [
      'AI workflow audits and readiness assessments',
      'Hands-on training for marketing & sales',
      'Custom playbooks for AI-assisted work',
      'Ongoing coaching as tools evolve'
    ],
    ctaText: 'Explore AI Enablement'
  }
];

export default function Services() {
  // Single piece of state for the active module (single source of truth)
  const [activeModule, setActiveModule] = useState(MODULES[0]);

  return (
    <section className="section" id="services" style={{ background: 'var(--white)', padding: '96px 0' }}>
      <div className="wrap">
        {/* Main Section Header (Currently Hidden) */}
        {/* <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <p className="eyebrow">What We Do</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.1 }}>
            Seven ways we drive your growth
          </h2>
          <p className="ds-lead" style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6 }}>
            We run the whole marketing engine, start to finish, and we build it so every piece feeds the next one.
          </p>
        </div> */}

        {/* 1. Global AI Citation & Traction Footprint Interactive 3D Globe (Currently Hidden) */}
        {/* <div style={{ marginBottom: '80px' }}>
          <InteractiveGlobe />
        </div> */}

        {/* 2. Menu List + Single Shared Detail Panel Component */}
        <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
          <div style={{ marginBottom: '36px', textAlign: 'left' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--brand-fg)', fontWeight: 700 }}>
              Full-Stack Growth Capability Modules
            </span>
            <h3 className="ds-h3" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginTop: '6px', color: 'var(--summit)' }}>
              Explore Our Core Service Modules
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--fg2)', marginTop: '6px' }}>
              Hover or tap any module in the left menu list to inspect its live AI Citation Node details.
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
      </div>
    </section>
  );
}
