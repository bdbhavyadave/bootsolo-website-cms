"use client";

import React, { useState, useMemo } from 'react';
import Motif from '@/components/Motif';
import { Sparkles, ArrowRight, Search, X, AlertCircle } from 'lucide-react';

const CATEGORIES = [
  "All",
  "Get found by AI",
  "Playbooks",
  "Automation",
  "Founder stories",
  "SEO/AEO/GEO",
  "Performance & Lead Generation",
  "Content & Video",
  "Branding"
];

// Expanded blog posts dataset across all categories
const ALL_POSTS = [
  // 4 FEATURED POSTS (flagged with featured: true)
  {
    id: 1,
    cat: "Playbooks",
    palette: "dawn",
    title: "The solo founder's GEO starter kit: get cited by AI in 30 days",
    ex: "A no-budget, step-by-step route to showing up when buyers ask ChatGPT and Perplexity for a tool like yours. The exact checklist we run for every founder on day one.",
    who: "Mara",
    date: "Jun 14, 2026",
    read: "9 min read",
    featured: true
  },
  {
    id: 2,
    cat: "Get found by AI",
    palette: "ice",
    title: "Answer-engine optimization, explained without the jargon",
    ex: "What GEO/AEO actually is, why it's the new word of mouth, and the three things to fix first on your site to capture AI recommendation volume.",
    who: "Mara",
    date: "Jun 11, 2026",
    read: "6 min read",
    featured: true
  },
  {
    id: 3,
    cat: "Automation",
    palette: "gold",
    title: "Build a one-person marketing team with 4 AI agents",
    ex: "Research, write, launch, optimize — the stack a solo founder can run before coffee without hiring agencies or full-time marketers.",
    who: "Theo",
    date: "Jun 07, 2026",
    read: "8 min read",
    featured: true
  },
  {
    id: 4,
    cat: "Founder stories",
    palette: "snow",
    title: "How I went from 0 to 1,200 signups with no ad budget",
    ex: "A bootstrapped SaaS founder shares the exact route, conversion copy changes, and dead ends to skip when scaling solo.",
    who: "Priya",
    date: "Jun 03, 2026",
    read: "11 min read",
    featured: true
  },

  // ADDITIONAL POSTS BY CATEGORY (Include clear placeholder flag tags)
  {
    id: 5,
    cat: "Playbooks",
    palette: "dawn",
    title: "The $0 content engine: 12 posts a month, mostly automated",
    ex: "A repeatable system for founders who'd rather build product than write all day. Turn one raw audio note into 4 high-performing assets.",
    who: "Theo",
    date: "May 28, 2026",
    read: "7 min read",
    isPlaceholder: false
  },
  {
    id: 6,
    cat: "Get found by AI",
    palette: "ice",
    title: "Why your homepage is invisible to AI (and the 6 fixes)",
    ex: "Structure, schema, and the answer-shaped copy that gets you directly into the response box of ChatGPT 4o and Perplexity Pro.",
    who: "Mara",
    date: "May 22, 2026",
    read: "5 min read",
    isPlaceholder: false
  },
  {
    id: 7,
    cat: "Automation",
    palette: "gold",
    title: "Lifecycle email on autopilot for indie SaaS",
    ex: "Onboarding, nudges, and winbacks that run themselves — set up in an afternoon with zero developer overhead.",
    who: "Priya",
    date: "May 16, 2026",
    read: "6 min read",
    isPlaceholder: false
  },

  // NEW ON-BRAND PLACEHOLDER POSTS (Review & Replace Flagged)
  {
    id: 8,
    cat: "SEO/AEO/GEO",
    palette: "ice",
    title: "Ranking in Perplexity Pro: How Generative Engine Optimization actually works",
    ex: "[NEW PLACEHOLDER - REVIEW REQUIRED] How to audit your site for generative engine indexing, schema tags, and high-trust citation sources.",
    who: "Mara",
    date: "Jul 01, 2026",
    read: "8 min read",
    isPlaceholder: true
  },
  {
    id: 9,
    cat: "SEO/AEO/GEO",
    palette: "dawn",
    title: "The 2026 AEO Checklist: Structuring schema and answer blocks for LLMs",
    ex: "[NEW PLACEHOLDER - REVIEW REQUIRED] Step-by-step breakdown of JSON-LD schemas and FAQ blocks that LLM crawlers extract directly into AI answers.",
    who: "Mara",
    date: "Jun 24, 2026",
    read: "6 min read",
    isPlaceholder: true
  },
  {
    id: 10,
    cat: "Performance & Lead Generation",
    palette: "gold",
    title: "Halving cost per sale on a $500 monthly ad budget",
    ex: "[NEW PLACEHOLDER - REVIEW REQUIRED] How to run micro-budget Meta and Google campaigns that harvest high-intent buyers without burning cash.",
    who: "Theo",
    date: "Jun 20, 2026",
    read: "7 min read",
    isPlaceholder: true
  },
  {
    id: 11,
    cat: "Performance & Lead Generation",
    palette: "snow",
    title: "Automated lead qualification for solopreneurs",
    ex: "[NEW PLACEHOLDER - REVIEW REQUIRED] How to filter out low-fit leads automatically before they ever reach your calendar or inbox.",
    who: "Theo",
    date: "Jun 18, 2026",
    read: "5 min read",
    isPlaceholder: true
  },
  {
    id: 12,
    cat: "Content & Video",
    palette: "dawn",
    title: "Founder-led short video: Shipping 3 videos a week without a film crew",
    ex: "[NEW PLACEHOLDER - REVIEW REQUIRED] The simple camera, lighting, and script workflow solopreneurs use to generate 50k+ organic video views.",
    who: "Priya",
    date: "Jun 15, 2026",
    read: "6 min read",
    isPlaceholder: true
  },
  {
    id: 13,
    cat: "Content & Video",
    palette: "ice",
    title: "Repurposing technical docs into viral Twitter & LinkedIn threads",
    ex: "[NEW PLACEHOLDER - REVIEW REQUIRED] A practical framework to turn product release notes into high-converting organic social content.",
    who: "Theo",
    date: "Jun 09, 2026",
    read: "4 min read",
    isPlaceholder: true
  },
  {
    id: 14,
    cat: "Branding",
    palette: "gold",
    title: "Positioning for solo founders: How to stand out in a crowded market",
    ex: "[NEW PLACEHOLDER - REVIEW REQUIRED] Why generic messaging kills conversion, and how to craft an unmistakable brand identity for your tool.",
    who: "Mara",
    date: "Jun 05, 2026",
    read: "9 min read",
    isPlaceholder: true
  },
  {
    id: 15,
    cat: "Founder stories",
    palette: "snow",
    title: "From solo dev to $20k MRR: What changed when I stopped doing manual outreach",
    ex: "[NEW PLACEHOLDER - REVIEW REQUIRED] An indie hacker shares their journey of building automated inbound funnels after 6 months of manual cold DM burnout.",
    who: "Priya",
    date: "May 30, 2026",
    read: "10 min read",
    isPlaceholder: true
  }
];

// 1. Top Featured Banner — ONE card: single hero image LEFT, 4 posts listed RIGHT
function FeaturedBanner({ posts }) {
  return (
    <div style={{ marginBottom: '56px' }}>
      {/* Section label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <Sparkles size={16} color="var(--sunrise)" />
        <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand-fg)' }}>
          Featured Articles &amp; Playbooks
        </span>
      </div>

      {/* Single two-column banner card */}
      <div className="featured-hero-card">
        {/* LEFT — single hero motif image */}
        <div className="featured-hero-art">
          <Motif palette="dawn" h={420} className="motif" />
        </div>

        {/* RIGHT — stacked list of 4 featured posts */}
        <div className="featured-hero-posts">
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg3)', margin: '0 0 18px' }}>
            Top picks this month
          </p>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {posts.map((post, i) => (
              <li key={post.id} className="featured-post-row" style={{ borderBottom: i < posts.length - 1 ? '1px solid var(--border)' : 'none' }}>
                {/* Index number */}
                <span className="featured-post-num">{String(i + 1).padStart(2, '0')}</span>

                {/* Title + meta */}
                <div style={{ flex: 1 }}>
                  <span className="pcat" style={{ fontSize: '10px', display: 'block', marginBottom: '6px' }}>{post.cat}</span>
                  <h3 className="featured-post-title">{post.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px', fontSize: '12.5px', color: 'var(--fg3)', fontFamily: 'var(--font-mono)' }}>
                    <span>{post.who}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--fg3)', display: 'inline-block' }}></span>
                    <span>{post.date}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--fg3)', display: 'inline-block' }}></span>
                    <span>{post.read}</span>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight size={15} color="var(--brand-fg)" style={{ flexShrink: 0, opacity: 0.7 }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// 2. Standard Grid Post Card Component
function PostCard({ cat, palette, title, ex, who, date, read, isPlaceholder }) {
  return (
    <article className="post">
      <div className="pthumb">
        <Motif palette={palette} h={176} />
      </div>
      <div className="pbody">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <span className="pcat">{cat}</span>
          {isPlaceholder && (
            <span
              style={{
                fontSize: '9.5px',
                fontWeight: 700,
                color: 'var(--navy-400)',
                background: 'var(--bg-inset)',
                padding: '2px 7px',
                borderRadius: '4px',
                letterSpacing: '0.04em'
              }}
            >
              PLACEHOLDER
            </span>
          )}
        </div>

        <h3 className="ptitle">{title}</h3>
        <p className="pex">{ex}</p>

        <div className="pmeta">
          <span>{who}</span>
          <span className="sep"></span>
          <span>{date}</span>
          <span className="sep"></span>
          <span>{read}</span>
        </div>
      </div>
    </article>
  );
}

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Top 4 featured posts for the banner
  const featuredPosts = useMemo(() => {
    return ALL_POSTS.filter((p) => p.featured).slice(0, 4);
  }, []);

  // Filter posts based on category and TITLE ONLY search query
  const filteredPosts = useMemo(() => {
    return ALL_POSTS.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.cat === activeCategory;
      const matchesTitle = searchQuery.trim() === "" || post.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesTitle;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* ── UNIFIED BLOG HERO BANNER (page header + 4 featured posts) ─────── */}
      <section className="blog-hero-section">
        <div className="wrap">
          <div className="blog-hero-card">

            {/* LEFT — hero image + page title */}
            <div className="blog-hero-left">
              <div className="blog-hero-motif">
                <Motif palette="dawn" h={420} className="motif" />
              </div>
              <div className="blog-hero-headline">
                <span className="kick" style={{ color: 'var(--sunrise)', marginBottom: '10px', display: 'block' }}>Blog</span>
                <h1 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 12px', color: '#fff' }}>
                  Field notes from the climb
                </h1>
                <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                  Playbooks, teardowns, and founder stories on getting found by AI and growing on a backpack budget.
                </p>
              </div>
            </div>

            {/* RIGHT — 4 featured posts list */}
            <div className="blog-hero-right">
              <p style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Sparkles size={13} color="var(--sunrise)" /> Featured this month
              </p>

              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {featuredPosts.map((post, i) => (
                  <li key={post.id} className="blog-hero-post-row" style={{ borderBottom: i < featuredPosts.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                    <span className="blog-hero-num">{String(i + 1).padStart(2, '0')}</span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sunrise)', display: 'block', marginBottom: '5px' }}>
                        {post.cat}
                      </span>
                      <h3 className="blog-hero-post-title">{post.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '7px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
                        <span>{post.who}</span>
                        <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', display: 'inline-block' }}></span>
                        <span>{post.date}</span>
                        <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', display: 'inline-block' }}></span>
                        <span>{post.read}</span>
                      </div>
                    </div>
                    <ArrowRight size={14} color="var(--sunrise)" style={{ flexShrink: 0, opacity: 0.6 }} />
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ── ALL ARTICLES GRID + SEARCH ──────────────────────────────── */}
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="wrap">
          {/* 2. Per-Category Tile Grid Section + Title Search Bar */}
          <div style={{ paddingTop: '0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>

              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--summit)', margin: 0 }}>
                  All Articles & Guides
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', marginTop: '4px' }}>
                  Filter by category or search by article title below.
                </p>
              </div>
            </div>

            {/* Title-Only Search Bar */}
            <div className="blog-search-container">
              <Search className="blog-search-icon" size={19} />
              <input
                type="text"
                className="blog-search-input"
                placeholder="Search blog posts by title (e.g. 'GEO', 'automation', 'signups')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog posts by title"
              />
              {searchQuery && (
                <button
                  className="blog-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="filters" style={{ margin: '0 0 36px' }}>
              {CATEGORIES.map((cat) => {
                const count = cat === "All"
                  ? ALL_POSTS.length
                  : ALL_POSTS.filter((p) => p.cat === cat).length;

                return (
                  <button
                    key={cat}
                    className={"filter" + (activeCategory === cat ? " on" : "")}
                    onClick={() => setActiveCategory(cat)}
                  >
                    <span>{cat}</span>
                    <span className="ct">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Results Grid or Clear Empty State */}
            {filteredPosts.length > 0 ? (
              <div className="post-grid">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: '64px 24px',
                  background: 'var(--bg-elevated)',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  margin: '24px 0'
                }}
              >
                <AlertCircle size={40} color="var(--sunrise)" style={{ margin: '0 auto 16px', display: 'block' }} />
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px' }}>
                  No blog posts found matching "{searchQuery}"
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', maxWidth: '440px', margin: '0 auto 24px' }}>
                  Try refining your search term or clear the search query to explore all available playbooks and guides.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  style={{ height: '42px', padding: '0 20px', fontSize: '14px' }}
                >
                  Clear Search Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Footer Strip */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="wrap">
          <div className="subscribe">
            <div className="sg"></div>
            <div>
              <div className="st">Get the next route in your inbox</div>
              <div className="ss">
                One practical email a week for bootstrapped founders. No spam, unsubscribe in a click.
              </div>
            </div>
            <form className="sub-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@startup.com" aria-label="Email address" />
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
