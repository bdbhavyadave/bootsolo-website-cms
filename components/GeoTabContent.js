'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Cpu, 
  Share2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Target, 
  BarChart3, 
  Network,
  MessageSquare,
  Globe2,
  FileCode,
  Flame
} from 'lucide-react';

const GEO_PILLARS = [
  {
    icon: Network,
    title: "Knowledge Graph & Entity Authority",
    desc: "We ground your brand across Wikidata, Crunchbase, official registries, and schema nodes so LLMs identify your company as a verified semantic entity.",
    tags: ["Wikidata", "Entity Resolution", "Knowledge Graphs"]
  },
  {
    icon: FileCode,
    title: "High Factual Density & Quotable Answers",
    desc: "We engineer content with dense, quote-ready assertions, structured tables, and benchmark stats that generative models reliably parse and cite.",
    tags: ["Factual Density", "Direct Quotability", "Structured Tables"]
  },
  {
    icon: Sparkles,
    title: "Synthetic Prompt Testing & Benchmarking",
    desc: "We run automated prompt simulations across Perplexity, ChatGPT Search, Claude, and Gemini to reveal citation blind spots and competitor leaks.",
    tags: ["Perplexity Pro", "ChatGPT Search", "Prompt Probing"]
  },
  {
    icon: Share2,
    title: "Multi-Source Citation Footprint",
    desc: "LLMs look for cross-web consensus. We seed and optimize references on Reddit, GitHub, G2, Substack, and tier-one industry publications.",
    tags: ["Reddit Sentiment", "Cross-Web Proof", "Independent Reviews"]
  },
  {
    icon: Target,
    title: "Zero-Click Brand Preference Architecture",
    desc: "When AI synthesizes answers, buyers might not click immediately. We ensure your brand narrative is positioned as the recommended solution inside the summary.",
    tags: ["Brand Affinity", "Comparison Dominance", "Summary Takeover"]
  },
  {
    icon: BarChart3,
    title: "Continuous LLM Telemetry & Update Defense",
    desc: "As frontier model weights, search indexes, and system prompts change, we track your citation velocity and keep your authority intact.",
    tags: ["Citation Velocity", "Model Tracking", "Prompt Coverage"]
  }
];

const GEO_ENGINES = [
  {
    name: "Perplexity Pro",
    type: "Real-time Web Search & Synthesis",
    citationFormat: "Numbered Inline Footnotes [1][2]",
    bestFor: "Deep technical comparisons & B2B SaaS research"
  },
  {
    name: "ChatGPT Search",
    type: "OpenAI Fine-Tuned Web Retrieval",
    citationFormat: "Linked Sources & Sidebar Citations",
    bestFor: "Commercial vendor selection & everyday product queries"
  },
  {
    name: "Google AI Overviews",
    type: "Gemini Integrated SERP Layer",
    citationFormat: "Interactive Source Cards & Carousel",
    bestFor: "High-volume consumer & service intent searches"
  },
  {
    name: "Claude (Anthropic)",
    type: "Artifacts & Long-Context Synthesis",
    citationFormat: "Analytical Deep-Dives & Source Citations",
    bestFor: "Enterprise software evaluation & code/architecture queries"
  }
];

const PRICING_GEO = [
  {
    name: "GEO Launch Sprint",
    amt: "$600",
    desc: "Essential Generative Engine Optimization for startups entering AI search.",
    feats: [
      "Entity & Knowledge Graph baseline audit",
      "Perplexity & ChatGPT citation benchmark",
      "On-page factual density restructuring (up to 5 pages)",
      "Basic Wikidata & registry entity linking",
      "Monthly citation presence report"
    ],
    cta: "Request Custom Scope",
    popular: false
  },
  {
    name: "Generative Citation Growth",
    amt: "$950",
    desc: "Our flagship package for brands wanting consistent citations across top AI engines.",
    feats: [
      "Complete entity graph architecture & schema mesh",
      "Synthetic prompt testing across 50+ commercial prompts",
      "Factual restructuring for up to 12 pages",
      "Cross-web citation seeding (Reddit, GitHub, PR)",
      "Bi-weekly LLM citation tracking & competitor alerts",
      "AEO/GEO unified keyword matrix"
    ],
    cta: "Start GEO Growth",
    popular: true
  },
  {
    name: "Category Citation Dominance",
    amt: "$1,500",
    desc: "Total generative visibility domination for category leaders and high-ACV products.",
    feats: [
      "Continuous automated synthetic prompt monitoring",
      "Full site factual density overhaul & comparison hubs",
      "Comprehensive digital consensus campaign across high-trust nodes",
      "Priority inclusion in LLM training corpora & RAG pipelines",
      "Custom live dashboard for AI visibility & pipeline tracking",
      "Dedicated AI Search Architect & weekly review calls"
    ],
    cta: "Book Growth Call",
    popular: false
  }
];

const GEO_FAQS = [
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO is the practice of optimizing digital assets and brand presence so large language models (LLMs) and generative search engines—like Perplexity, ChatGPT Search, Gemini, and Claude—cite, recommend, and feature your company in their synthesized answers."
  },
  {
    q: "How does GEO differ from SEO and AEO?",
    a: "SEO focuses on search engine ranking algorithms (blue links). AEO focuses on structured answers for direct answer boxes and voice/assistant queries. GEO focuses on multi-source retrieval-augmented generation (RAG) and LLM knowledge graphs, ensuring models treat your brand as an irrefutable fact when answering queries."
  },
  {
    q: "How do LLMs know who to recommend when someone asks for solutions?",
    a: "LLMs synthesize data from training data, web crawl indexes, and live RAG retrieval. They favor sources with high factual density, unambiguous entity data, consistent third-party consensus (e.g. Reddit, Wikipedia, GitHub, industry reviews), and authoritative schema."
  },
  {
    q: "How soon can we see our brand cited in ChatGPT or Perplexity?",
    a: "For real-time retrieval engines like Perplexity Pro and ChatGPT Search, citations can begin showing up within 3 to 6 weeks once entity profiles, structured citations, and high-density content are indexed. As AI model weights are refreshed, these citations solidify into permanent recommendations."
  }
];

export default function GeoTabContent({ onOpenModal }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeEngine, setActiveEngine] = useState(0);

  return (
    <div className="geo-tab-container">
      {/* Hero Section */}
      <section className="service-tab-hero">
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
            <div className="badge-pill">
              <Bot size={14} style={{ color: 'var(--sunrise)' }} />
              <span>Generative Engine Optimization (GEO)</span>
            </div>
            
            <h1 className="tab-hero-heading">
              Get Cited by Generative AI. <br />
              <span className="text-gradient-sunrise">Be the Brand LLMs Recommend.</span>
            </h1>

            <p className="tab-hero-sub">
              Buyers aren’t clicking 10 blue links anymore. They ask Perplexity, ChatGPT, and Gemini for direct advice. 
              We build the entity graphs, factual citations, and digital consensus needed to make your product the definitive answer.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
              <button 
                onClick={onOpenModal} 
                className="btn btn-primary glow-sunrise"
                style={{ height: '48px', padding: '0 28px', fontSize: '15px' }}
              >
                Book GEO Strategy Session <ArrowRight size={16} />
              </button>
              <Link 
                href="#geo-pricing" 
                className="btn btn-ghost"
                style={{ height: '48px', padding: '0 24px', fontSize: '15px' }}
              >
                View GEO Packages
              </Link>
            </div>

            {/* Micro Stats */}
            <div className="stats-ticker-grid">
              <div className="stat-ticker-card">
                <div className="stat-val">3.4x</div>
                <div className="stat-lbl">Higher LLM Citation Rate</div>
              </div>
              <div className="stat-ticker-card">
                <div className="stat-val">82%</div>
                <div className="stat-lbl">Zero-Click Query Preference</div>
              </div>
              <div className="stat-ticker-card">
                <div className="stat-val">4 Major</div>
                <div className="stat-lbl">AI Engines Actively Monitored</div>
              </div>
              <div className="stat-ticker-card">
                <div className="stat-val">&lt;30d</div>
                <div className="stat-lbl">Time to Initial Perplexity Citations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Generative Engines */}
      <section className="tab-section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span className="kick">Multi-Model Surface</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', color: 'var(--fg1)', marginTop: '8px', fontWeight: 700 }}>
              Optimized for Today’s Frontier Answer Engines
            </h2>
            <p style={{ color: 'var(--fg2)', fontSize: '16px', marginTop: '12px' }}>
              Each generative platform uses distinct retrieval mechanisms. We calibrate your brand footprint to win across all of them.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {GEO_ENGINES.map((engine, idx) => (
              <div key={idx} className="feature-card-clean" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Sparkles size={18} style={{ color: 'var(--sunrise)' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--fg1)', margin: 0 }}>{engine.name}</h3>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--fg3)', marginBottom: '8px', fontWeight: 500 }}>
                  {engine.type}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.5, marginBottom: '14px' }}>
                  <strong style={{ color: 'var(--fg1)' }}>Citation Style:</strong> {engine.citationFormat}
                </div>
                <div className="mini-tag" style={{ width: 'fit-content' }}>
                  {engine.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core GEO Pillars */}
      <section className="tab-section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span className="kick">The GEO Engine</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', color: 'var(--fg1)', marginTop: '8px', fontWeight: 700 }}>
              How We Turn LLMs into Your Highest-Converting Advocates
            </h2>
            <p style={{ color: 'var(--fg2)', fontSize: '16px', marginTop: '12px' }}>
              Generative models reward factual clarity and external consensus. Here is the framework that gets your brand cited.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {GEO_PILLARS.map((pillar, idx) => {
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

      {/* GEO Pricing Tiers */}
      <section id="geo-pricing" className="tab-section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <span className="kick">Investment</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', color: 'var(--fg1)', marginTop: '8px', fontWeight: 700 }}>
              Generative Optimization Packages
            </h2>
            <p style={{ color: 'var(--fg2)', fontSize: '16px', marginTop: '12px' }}>
              Position your company ahead of the AI paradigm shift. Clear, deliverable-driven retainers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '28px' }}>
            {PRICING_GEO.map((pkg, idx) => (
              <div key={idx} className={`price-tier-card ${pkg.popular ? 'highlighted' : ''}`}>
                {pkg.popular && (
                  <div className="popular-badge">Recommended</div>
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
                    Package Deliverables
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
            <span className="kick">Common Inquiries</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 34px)', color: 'var(--fg1)', marginTop: '8px', fontWeight: 700 }}>
              Generative Engine Optimization FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {GEO_FAQS.map((faq, idx) => {
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
              Want to know how Perplexity and ChatGPT cite you today?
            </h2>
            <p style={{ color: 'var(--navy-200)', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px' }}>
              We run a live synthetic prompt scan across frontier models to show you where your competitors are stealing your mentions.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={onOpenModal} className="btn btn-primary glow-sunrise" style={{ height: '48px', padding: '0 28px' }}>
                Book Your GEO Audit Call
              </button>
              <Link href="/custom-quote" className="btn btn-ghost" style={{ height: '48px', padding: '0 24px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
