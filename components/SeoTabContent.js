'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  BarChart2, 
  Layers, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Target, 
  Cpu, 
  ExternalLink,
  Sparkles,
  FileText
} from 'lucide-react';

const SEO_PILLARS = [
  {
    icon: Cpu,
    title: "Technical SEO & Speed Architecture",
    desc: "Crawl budget optimization, Core Web Vitals refinement, JSON-LD schema graphs, clean canonicalization, and lightning-fast server responses.",
    tags: ["Core Web Vitals", "Schema Markup", "Crawl Budget"]
  },
  {
    icon: Target,
    title: "Commercial Intent Keyword Mapping",
    desc: "We prioritize bottom-funnel queries where searchers have active buying intent, rather than chasing high-volume vanity keywords that never convert.",
    tags: ["High-Intent Keywords", "Competitor Teardowns", "SERP Clustering"]
  },
  {
    icon: Layers,
    title: "Semantic Content Clusters",
    desc: "Architecting authoritative topic hubs that establish topical completeness, internally link related entities, and signal deep domain authority to Google.",
    tags: ["Topic Hubs", "Internal Linking", "Topical Authority"]
  },
  {
    icon: ShieldCheck,
    title: "White-Hat Authority & Digital PR",
    desc: "Earned backlinks, niche publication features, founder quotes, and unlinked brand mentions that build enduring organic domain rating.",
    tags: ["Editorial Placements", "Brand Citations", "Natural Link Velocity"]
  },
  {
    icon: Zap,
    title: "Conversion-Focused On-Page UX",
    desc: "Optimizing header hierarchies, meta descriptions, scannable summaries, and contextual micro-CTAs that convert organic clicks into demo pipeline.",
    tags: ["CRO Synergy", "Metadata Optimization", "Frictionless Funnels"]
  },
  {
    icon: BarChart2,
    title: "Transparent Ranking & Pipeline Tracking",
    desc: "Weekly ranking fluctuations, Google Search Console query coverage, impressions growth, and direct pipeline attribution reporting.",
    tags: ["GSC Diagnostics", "Keyword Tracking", "Revenue Attribution"]
  }
];

const SEO_ROADMAP = [
  {
    phase: "Phase 1: Days 1–30",
    title: "Audit, Crawl Repair & Quick-Win Optimization",
    items: [
      "Full technical crawl & site architecture health check",
      "Fix indexing errors, redirect chains & 404 dead ends",
      "Schema markup deployment (Organization, Product, FAQ, Article)",
      "Low-hanging fruit keyword optimization on existing high-potential pages"
    ]
  },
  {
    phase: "Phase 2: Days 31–60",
    title: "Core Commercial Hubs & Topic Architecture",
    items: [
      "Deployment of high-intent comparison & alternative landing pages",
      "Internal linking mesh to distribute PageRank to priority conversion pages",
      "Core Web Vitals performance tuning for mobile & desktop",
      "Content brief creation and on-page optimization for target service lines"
    ]
  },
  {
    phase: "Phase 3: Days 61–90+",
    title: "Topical Dominance, Authority PR & Continuous Scaling",
    items: [
      "Topical cluster scaling across secondary and long-tail query groups",
      "High-DR digital PR and industry thought leadership outreach",
      "Continuous algorithmic update protection and competitive SERP defense",
      "Bi-weekly ranking telemetry and commercial conversion attribution"
    ]
  }
];

const PRICING_SEO = [
  {
    name: "Local SEO & Search Lite",
    amt: "$400",
    desc: "Ideal for early-stage ventures establishing baseline organic search visibility.",
    feats: [
      "Keyword & intent mapping (up to 20 terms)",
      "Technical audit & crawl cleanup",
      "On-page optimization for up to 5 priority pages",
      "JSON-LD Schema implementation",
      "Monthly performance telemetry report"
    ],
    cta: "Request Custom Quote",
    popular: false
  },
  {
    name: "Growth SEO Suite",
    amt: "$700",
    desc: "Tailored for scaling businesses looking to outrank competitors on commercial terms.",
    feats: [
      "Full keyword architecture (up to 50 terms)",
      "On-page optimization for up to 12 pages",
      "2 Semantic topic cluster hubs",
      "Competitor gap analysis & SERP conquesting",
      "Digital PR outreach & 2 high-trust backlinks/mo",
      "Bi-weekly rank tracking & GSC diagnostics"
    ],
    cta: "Start Growth SEO",
    popular: true
  },
  {
    name: "Authority SEO Enterprise",
    amt: "$1,200",
    desc: "Complete organic search domination for established brands and venture-backed SaaS.",
    feats: [
      "Unlimited keyword mapping & cluster strategy",
      "Full-site technical & speed architecture",
      "15–20 pages optimized + continuous monthly expansion",
      "White-hat digital PR & 5+ authority placements/mo",
      "Custom analytics dashboard & pipeline attribution",
      "Dedicated senior search strategist & Slack channel"
    ],
    cta: "Book Growth Call",
    popular: false
  }
];

const SEO_FAQS = [
  {
    q: "How does traditional SEO fit alongside AI search (AEO/GEO)?",
    a: "Traditional SEO remains the foundational data layer. Google and Bing process billions of daily searches, and AI answer engines (like ChatGPT and Perplexity) actually crawl and index the same top-ranking organic pages to source their answers. Dominating traditional search directly boosts your chances of being cited by AI engines."
  },
  {
    q: "How long does it take to see tangible ranking improvements?",
    a: "Technical fixes and quick-win optimizations on existing pages frequently show positive movement within 3 to 6 weeks. Competitive, high-volume commercial keywords typically compound between 60 to 90 days as topical authority and link equity mature."
  },
  {
    q: "Do you use automated AI spam content for SEO?",
    a: "Never. Google heavily penalizes low-value, repetitive programmatic spam. We build human-crafted, deeply researched, data-dense content enriched with original insights, structured schema, and expert perspectives that rank reliably and convert visitors."
  },
  {
    q: "How do you measure success and ROI?",
    a: "We track organic impressions, non-branded keyword positions in top 3 and top 10 SERP slots, organic click-through rates, and most importantly, assisted leads, trial signups, and booked calls originating from search."
  }
];

export default function SeoTabContent({ onOpenModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="seo-tab-container">
      {/* Hero Section */}
      <section className="service-tab-hero">
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
            <div className="badge-pill">
              <Search size={14} style={{ color: 'var(--sunrise)' }} />
              <span>Search Engine Optimization (SEO)</span>
            </div>
            
            <h1 className="tab-hero-heading">
              Rank Higher on Google. <br />
              <span className="text-gradient-sunrise">Capture Active Buyer Search Intent.</span>
            </h1>

            <p className="tab-hero-sub">
              Stop burning cash on ephemeral ads. We engineer technical foundations, commercial topic clusters, 
              and white-hat authority so your brand consistently climbs to #1 for high-value search queries.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
              <button 
                onClick={onOpenModal} 
                className="btn btn-primary glow-sunrise"
                style={{ height: '48px', padding: '0 28px', fontSize: '15px' }}
              >
                Book Free SEO Strategy Call <ArrowRight size={16} />
              </button>
              <Link 
                href="#seo-pricing" 
                className="btn btn-ghost"
                style={{ height: '48px', padding: '0 24px', fontSize: '15px' }}
              >
                View SEO Packages
              </Link>
            </div>

            {/* Micro Stats */}
            <div className="stats-ticker-grid">
              <div className="stat-ticker-card">
                <div className="stat-val">+312%</div>
                <div className="stat-lbl">Average Organic Traffic Lift</div>
              </div>
              <div className="stat-ticker-card">
                <div className="stat-val">Top 3</div>
                <div className="stat-lbl">SERP Commercial Intent Placement</div>
              </div>
              <div className="stat-ticker-card">
                <div className="stat-val">100%</div>
                <div className="stat-lbl">White-Hat &amp; Algorithm Safe</div>
              </div>
              <div className="stat-ticker-card">
                <div className="stat-val">30–60d</div>
                <div className="stat-lbl">Typical First Signal Velocity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core SEO Pillars */}
      <section className="tab-section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span className="kick">The Methodology</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', color: 'var(--fg1)', marginTop: '8px', fontWeight: 700 }}>
              Engineered for Sustainable First-Page Rankings
            </h2>
            <p style={{ color: 'var(--fg2)', fontSize: '16px', marginTop: '12px' }}>
              Our 6-pillar framework treats SEO as an engineering discipline, aligning crawl bots, search intent, and user psychology.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {SEO_PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="feature-card-clean">
                  <div className="feature-icon-wrapper">
                    <IconComp size={22} style={{ color: 'var(--sunrise)' }} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--fg1)', marginBottom: '10px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, marginBottom: '18px' }}>
                    {pillar.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                    {pillar.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="mini-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="tab-section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <span className="kick">Implementation Roadmap</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', color: 'var(--fg1)', marginTop: '8px', fontWeight: 700 }}>
              How We Take You from Low Visibility to Top Tier
            </h2>
            <p style={{ color: 'var(--fg2)', fontSize: '16px', marginTop: '12px' }}>
              A disciplined, milestone-driven process designed to show quick wins in month one while compounding long-term domain value.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {SEO_ROADMAP.map((step, idx) => (
              <div key={idx} className="roadmap-card">
                <div className="roadmap-phase">{step.phase}</div>
                <h3 style={{ fontSize: '19px', color: 'var(--fg1)', fontWeight: 600, margin: '12px 0 16px' }}>
                  {step.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {step.items.map((item, iIdx) => (
                    <li key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.5 }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--success)', marginTop: '3px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Pricing Tiers */}
      <section id="seo-pricing" className="tab-section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <span className="kick">Clear Pricing</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', color: 'var(--fg1)', marginTop: '8px', fontWeight: 700 }}>
              Transparent SEO Packages
            </h2>
            <p style={{ color: 'var(--fg2)', fontSize: '16px', marginTop: '12px' }}>
              No locked-in annual contracts. Flat monthly retainers designed for lean startups and ambitious growth teams.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '28px' }}>
            {PRICING_SEO.map((pkg, idx) => (
              <div key={idx} className={`price-tier-card ${pkg.popular ? 'highlighted' : ''}`}>
                {pkg.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--fg1)' }}>{pkg.name}</div>
                <div style={{ margin: '14px 0 8px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '38px', fontWeight: 800, color: 'var(--fg1)' }}>{pkg.amt}</span>
                  <span style={{ fontSize: '14px', color: 'var(--fg3)' }}>/month</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', minHeight: '42px', marginBottom: '20px' }}>
                  {pkg.desc}
                </p>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg3)', marginBottom: '14px' }}>
                    What&apos;s Included
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {pkg.feats.map((f, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--fg2)' }}>
                        <CheckCircle2 size={15} style={{ color: pkg.popular ? 'var(--sunrise)' : 'var(--fg3)', marginTop: '2px', flexShrink: 0 }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenModal}
                  className={`btn ${pkg.popular ? 'btn-primary glow-sunrise' : 'btn-ghost'}`}
                  style={{ width: '100%', height: '44px', justifyContent: 'center', marginTop: 'auto' }}
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="tab-section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="kick">Got Questions?</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 34px)', color: 'var(--fg1)', marginTop: '8px', fontWeight: 700 }}>
              Search Engine Optimization FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {SEO_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="faq-accordion-item"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--fg1)', margin: 0 }}>
                      {faq.q}
                    </h3>
                    <ChevronDown 
                      size={18} 
                      style={{ 
                        color: 'var(--fg3)', 
                        transform: isOpen ? 'rotate(180deg)' : 'none', 
                        transition: 'transform 200ms ease' 
                      }} 
                    />
                  </div>
                  {isOpen && (
                    <p style={{ marginTop: '14px', fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Action Callout */}
      <section className="tab-section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div className="cta-gradient-box">
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, margin: '0 0 14px' }}>
              Ready to claim #1 rankings on Google?
            </h2>
            <p style={{ color: 'var(--navy-200)', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px' }}>
              Let our search architects inspect your current technical health, crawl barriers, and competitor keyword gaps.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={onOpenModal} className="btn btn-primary glow-sunrise" style={{ height: '48px', padding: '0 28px' }}>
                Book Your Growth Call Now
              </button>
              <Link href="/custom-quote" className="btn btn-ghost" style={{ height: '48px', padding: '0 24px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Request Custom Scope
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
