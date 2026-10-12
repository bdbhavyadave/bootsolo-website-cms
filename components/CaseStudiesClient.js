"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Motif from '@/components/Motif';
import CTA from '@/components/CTA';
import { 
  Award, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Target, 
  Zap, 
  Mail, 
  Compass, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

const SECTORS = ["All Sectors", "Solo SaaS", "D2C", "Indie app", "Newsletter"];

const METRICS = [
  { mv: "120+", mk: "founders climbing with us" },
  { mv: "3.4×", mk: "median signup lift in 90 days" },
  { mv: "−54%", mk: "average cost per acquisition" },
];

const CASE_STUDIES = [
  {
    id: "northwind",
    company: "Northwind",
    logo: "N",
    founder: "Sam R., founder",
    sector: "Solo SaaS",
    timeline: "1 quarter (90 days)",
    headlineMetric: "+312%",
    headlineLabel: "signups in one quarter",
    ice: false,
    services: ["Get found by AI", "Content engine", "Lifecycle"],
    title: "Northwind: +312% signups in one quarter",
    atAGlance: "A one-person SaaS company went from founder-run, ad-hoc marketing to a running growth engine, and grew signups by 312% in a single quarter for less than the cost of a part-time hire.",
    problem: "Sam was the founder, the engineer and the entire marketing department. Every hour spent on marketing was an hour away from the product, so marketing happened in bursts: a launch post here, a tweet thread there, then weeks of silence. Signups were flat, the product barely appeared when buyers asked search engines or AI assistants for tools in its category, and trial users who signed up were rarely nurtured into paying customers. Hiring a marketer wasn't affordable yet.",
    solution: "Bootsolo became Northwind's marketing department. We combined three services into one system: Get found by AI to put Northwind into the answers buyers were already asking for, a Content engine to publish consistently without Sam writing every word, and Lifecycle automation to turn new signups into active users.",
    approach: [
      { step: "Weeks 1–2", title: "Map the route", desc: "Audited site, funnel and visibility in Google and AI answers (ChatGPT, Perplexity, Gemini). Identified 25 questions buyers ask before choosing tools in Northwind's category." },
      { step: "Weeks 2–6", title: "Get found by AI", desc: "Rewrote key pages in answer-first structure, added structured schema data, comparison pages, and built authoritative third-party mentions AI engines cite." },
      { step: "Weeks 3–12", title: "Run content engine", desc: "AI-assisted drafts edited by Bootsolo strategists published weekly. Sam's only weekly job: one 20-minute review call." },
      { step: "Weeks 5–12", title: "Switch on lifecycle", desc: "Built onboarding emails triggered by in-product behaviour, nudges for stalled trials, and a win-back flow for inactive users." }
    ],
    quote: "I was the founder, the engineer, and the marketing department. Bootsolo became the marketing department — and it cost less than a part-time hire.",
    quoteAuthor: "Sam R., Founder, Northwind",
    stats: [
      { metric: "Signups (quarter over quarter)", result: "+312%", note: "Validated in product telemetry" },
      { metric: "Time to result", result: "1 quarter (90 days)", note: "Rapid time-to-value" },
      { metric: "Cost vs. part-time marketing hire", result: "Lower", note: "Client-stated savings" },
      { metric: "Trial-to-paid conversion", result: "+164% (2.8% → 7.4%)", note: "Lifecycle nudges" },
      { metric: "Pages cited in AI answers", result: "38 citable pages", note: "Indexed in Perplexity & ChatGPT" },
      { metric: "Founder marketing hours", result: "18 hrs → 1.5 hrs/wk", note: "Freed 16.5 hrs for engineering" }
    ],
    ctaLead: "Doing everything yourself? Let us be your marketing department.",
    ctaPrimaryText: "Book a Growth Call",
    ctaPrimaryHref: "/custom-quote?service=ai-powered-marketing",
    ctaSecondaryText: "See the AI-Powered Marketing service",
    ctaSecondaryHref: "/ai-powered-marketing",
    ctaMicroText: "Want Northwind's quarter? Request your custom quote →",
    nextId: "parallel",
    nextTitle: "Parallel: A bootstrapped skincare brand halved its cost per sale"
  },
  {
    id: "parallel",
    company: "Parallel",
    logo: "P",
    founder: "Maya K., founder",
    sector: "D2C",
    timeline: "8 weeks",
    headlineMetric: "−58%",
    headlineLabel: "cost per sale",
    ice: true,
    services: ["Campaigns", "Automation"],
    title: "Parallel: A bootstrapped skincare brand halved its cost per sale",
    atAGlance: "A bootstrapped D2C skincare brand cut its cost per sale by 58% by rebuilding its paid campaigns and automating the follow-up that ads alone couldn't do.",
    problem: "Parallel was growing, but every sale was costing too much. Paid social was the main sales channel, and as ad costs rose the margins on a self-funded product shrank. Campaigns were managed in spare hours, creative was refreshed rarely, and shoppers who added to cart or visited twice were left to drift away. The brand needed more sales from the same budget, not a bigger budget.",
    solution: "We restructured Parallel's paid Campaigns around the products and audiences that actually converted, and added Automation so every ad click had a follow-up path: abandoned cart, browse abandonment and post-purchase repeat flows across email and SMS.",
    approach: [
      { step: "Phase 1", title: "Audit the spend", desc: "Traced cost per sale by product, audience and creative. Cut the campaigns that were spending without selling." },
      { step: "Phase 2", title: "Rebuild campaigns", desc: "Consolidated ad sets, led with hero products and bundles, and set up an AI-assisted creative testing cycle with new variations weekly." },
      { step: "Phase 3", title: "Automate follow-up", desc: "Launched abandoned-cart, browse-abandon and replenishment flows timed to how long each skincare product lasts." },
      { step: "Phase 4", title: "Optimise weekly", desc: "Moved budget to winners every week, with a one-page scoreboard so the founder always knew where the money went." }
    ],
    quote: "We didn't need more ad budget, we needed every rupee to work harder. Bootsolo cut our cost per sale by more than half, and the automated flows now bring in sales while I sleep.",
    quoteAuthor: "Maya K., Founder, Parallel",
    stats: [
      { metric: "Cost per sale", result: "−58%", note: "More than halved customer acquisition cost" },
      { metric: "Return on ad spend (ROAS)", result: "1.6× → 3.8×", note: "High-margin paid channel" },
      { metric: "Share of revenue from automated flows", result: "34% of sales", note: "Recurring email/SMS revenue" },
      { metric: "Repeat purchase rate", result: "14% → 29%", note: "Timed replenishment flows" },
      { metric: "Campaign timeline", result: "8 weeks", note: "Immediate cashflow improvement" }
    ],
    ctaLead: "Paying too much for every order? Let's find where your budget is leaking.",
    ctaPrimaryText: "Lower My Cost per Sale",
    ctaPrimaryHref: "/custom-quote?service=performance-lead-generation",
    ctaSecondaryText: "Explore Performance & Lead Generation",
    ctaSecondaryHref: "/performance-lead-generation",
    ctaMicroText: "Get a free ad-spend audit →",
    nextId: "loomly",
    nextTitle: "Loomly: From invisible to the AI answer box in 60 days"
  },
  {
    id: "loomly",
    company: "Loomly",
    logo: "L",
    founder: "Arjun D., founder",
    sector: "Indie app",
    timeline: "60 days",
    headlineMetric: "4.1×",
    headlineLabel: "AI answer visibility",
    ice: false,
    services: ["Get found by AI", "AEO / GEO"],
    title: "Loomly: From invisible to the AI answer box in 60 days",
    atAGlance: "An indie app that didn't show up when people asked AI assistants for recommendations became 4.1× more visible in AI answers within 60 days.",
    problem: "More of Loomly's potential users were asking ChatGPT, Perplexity and Google's AI Overviews which app to use, and Loomly wasn't in the answers. Competitors with bigger budgets were named again and again. The app had good reviews and a loyal user base, but AI engines had little clear, trusted information to cite about it.",
    solution: "Our Get found by AI programme (AEO and GEO) gave AI engines what they need to recommend an app: clear answers to the questions users ask, structured information about what the app does and who it's for, and credible mentions across the web.",
    approach: [
      { step: "Day 1–15", title: "Measure the baseline", desc: "Tracked a fixed set of buying prompts across major AI engines to see how often Loomly was mentioned versus competitors." },
      { step: "Day 15–30", title: "Fix the foundations", desc: "Rewrote homepage, app store listings and feature pages in answer-first language, adding schema markup and an FAQ hub." },
      { step: "Day 30–45", title: "Build citable proof", desc: "Published comparison and use-case pages and earned mentions on listicles, review sites and communities AI engines draw from." },
      { step: "Day 45–60", title: "Re-measure and refine", desc: "Re-ran the same prompts every two weeks and adjusted content where Loomly was still missing." }
    ],
    quote: "People kept telling us they'd found our competitors through ChatGPT. Sixty days later, they were finding us. Bootsolo made us part of the answer.",
    quoteAuthor: "Arjun D., Founder, Loomly",
    stats: [
      { metric: "AI answer visibility", result: "4.1×", note: "Tracked across ChatGPT, Perplexity, Gemini" },
      { metric: "Time to result", result: "60 days", note: "Rapid search index update" },
      { metric: "Tracked prompts where Loomly is cited", result: "4 of 50 → 32 of 50", note: "From 8% to 64% category presence" },
      { metric: "Traffic referred from AI assistants", result: "+240%", note: "Direct conversational inbound" },
      { metric: "App installs / signups from organic", result: "+85%", note: "Compounding non-paid growth" }
    ],
    ctaLead: "Ask ChatGPT about your category. If you're not in the answer, let's fix that.",
    ctaPrimaryText: "Get My Free AI Visibility Check",
    ctaPrimaryHref: "/custom-quote?service=seo-aeo-geo",
    ctaSecondaryText: "Explore SEO / AEO / GEO",
    ctaSecondaryHref: "/seo-aeo-geo",
    ctaMicroText: "See where you show up in AI answers →",
    nextId: "pier9",
    nextTitle: "Pier9: Zero to 1,200 signups on a $0 ad budget"
  },
  {
    id: "pier9",
    company: "Pier9",
    logo: "P9",
    founder: "Lena O., founder",
    sector: "Solo SaaS",
    timeline: "90 days",
    headlineMetric: "0→1.2k",
    headlineLabel: "signups, no ad spend",
    ice: true,
    services: ["Content engine", "GEO"],
    title: "Pier9: Zero to 1,200 signups on a $0 ad budget",
    atAGlance: "A newly launched solo SaaS product reached 1,200 signups without spending anything on ads, using content built to rank in search and get cited by AI engines.",
    problem: "Pier9 launched with a working product and no audience: no email list, no traffic and no budget for paid acquisition. The founder knew content could work but didn't have the time to research, write and publish consistently, or the know-how to make content that both search engines and AI assistants would pick up.",
    solution: "We built a Content engine designed for GEO (generative engine optimisation) from day one: content focused on the exact problems Pier9 solves, written to be found in Google and quoted by AI assistants, with every piece leading readers to a free signup.",
    approach: [
      { step: "Step 1", title: "Find the demand", desc: "Researched questions and pain points of Pier9's ideal users, prioritising low-competition, high-intent topics." },
      { step: "Step 2", title: "Build topic clusters", desc: "Created pillar guides with supporting articles, templates and comparison pages, structured with clear answers AI engines can lift." },
      { step: "Step 3", title: "Convert the readers", desc: "Added in-content signup prompts, free calculators and lead magnets so readers quickly created accounts." },
      { step: "Step 4", title: "Distribute for free", desc: "Repurposed each piece for communities, newsletters and social channels where Pier9's users spend time." }
    ],
    quote: "We had no list, no traffic and no ad budget. Bootsolo built a content engine that brought in our first 1,200 users without spending a dollar on ads.",
    quoteAuthor: "Lena O., Founder, Pier9",
    stats: [
      { metric: "Signups", result: "0 → 1,200", note: "100% organic user base" },
      { metric: "Ad spend", result: "$0", note: "Zero advertising dollars spent" },
      { metric: "Timeline", result: "90 days", note: "From scratch to product-market traction" },
      { metric: "Monthly organic visitors", result: "0 → 8,400 visitors", note: "Compounding search traffic" },
      { metric: "Content pieces published", result: "24 guides + 3 tools", note: "Permanent traffic assets" },
      { metric: "Visitor-to-signup conversion", result: "14.2%", note: "Optimized interactive lead magnets" }
    ],
    ctaLead: "No ad budget? Good. Let's grow you with content that compounds.",
    ctaPrimaryText: "Build My Content Engine",
    ctaPrimaryHref: "/custom-quote?service=content-video-thought-leadership",
    ctaSecondaryText: "Explore Content, Video & Thought Leadership",
    ctaSecondaryHref: "/content-video-thought-leadership",
    ctaMicroText: "Get a free 90-day content plan →",
    nextId: "cortex",
    nextTitle: "Cortex: A solo writer lifted open rates 89% with lifecycle automation"
  },
  {
    id: "cortex",
    company: "Cortex",
    logo: "C",
    founder: "Priya N., writer & founder",
    sector: "Newsletter",
    timeline: "6 weeks",
    headlineMetric: "+89%",
    headlineLabel: "open rate",
    ice: false,
    services: ["Automation", "Lifecycle"],
    title: "Cortex: A solo writer lifted open rates 89% with lifecycle automation",
    atAGlance: "A one-person newsletter turned a growing but disengaged list into an engaged readership by replacing one-size-fits-all sends with automated, behaviour-based journeys.",
    problem: "Cortex's subscriber list was growing, but fewer readers were opening each issue. Every subscriber got the same emails no matter when they joined or what they cared about, new subscribers never got a proper welcome, and inactive readers dragged down deliverability. As a solo writer, the founder had time to write, not to manage segments and sequences.",
    solution: "We set up Lifecycle journeys powered by Automation, so every reader got the right email at the right moment: a welcome series for new subscribers, interest-based segments, re-engagement for quiet readers, and list hygiene to protect inbox placement.",
    approach: [
      { step: "Phase 1", title: "Diagnose engagement", desc: "Analysed opens, clicks and drop-off points by signup source and subscriber age." },
      { step: "Phase 2", title: "Welcome properly", desc: "Built a welcome sequence featuring best past issues and surveying readers on the topics they want." },
      { step: "Phase 3", title: "Segment & personalise", desc: "Tagged readers by interest and activity, using AI-assisted subject line testing on every send." },
      { step: "Phase 4", title: "Re-engage or clean", desc: "Ran a win-back sequence for inactive readers and pruned silent profiles, boosting inbox delivery for everyone." }
    ],
    quote: "I just want to write. Bootsolo built the systems around my writing, and now more people actually open what I send.",
    quoteAuthor: "Priya N., Writer, Cortex",
    stats: [
      { metric: "Open rate", result: "+89% (26% → 49.1%)", note: "Dramatic attention lift" },
      { metric: "Click-through rate (CTR)", result: "3.2% → 8.7%", note: "Better targeted topics" },
      { metric: "Welcome series completion", result: "82%", note: "High early subscriber retention" },
      { metric: "Inactive subscribers re-engaged", result: "28% win-back", note: "Reclaimed quiet readers" },
      { metric: "Paid / premium conversions", result: "+42% lift", note: "Subscribers upgrading to paid" }
    ],
    ctaLead: "Your list is growing. Let's make sure it's listening.",
    ctaPrimaryText: "Automate My Lifecycle",
    ctaPrimaryHref: "/custom-quote?service=ai-powered-marketing",
    ctaSecondaryText: "Explore AI-Powered Marketing",
    ctaSecondaryHref: "/ai-powered-marketing",
    ctaMicroText: "Get a free email engagement audit →",
    nextId: "vantage",
    nextTitle: "Vantage: Nearly tripled qualified demos without hiring a marketer"
  },
  {
    id: "vantage",
    company: "Vantage",
    logo: "V",
    founder: "Daniel M., founder",
    sector: "Solo SaaS",
    timeline: "10 weeks",
    headlineMetric: "2.7×",
    headlineLabel: "qualified demos",
    ice: true,
    services: ["Campaigns", "GEO"],
    title: "Vantage: Nearly tripled qualified demos without hiring a marketer",
    atAGlance: "A solo B2B SaaS founder got 2.7× more qualified demo requests by pairing targeted campaigns with GEO, so buyers found Vantage both in their feeds and in AI answers.",
    problem: "Vantage sells to businesses, where a demo is the step that matters. The founder was getting demo requests, but too many were from poor-fit leads, and running sales calls left no time for marketing. The plan had been to hire a marketer; the budget said not yet.",
    solution: "We combined targeted Campaigns aimed at Vantage's ideal customer profile with GEO, so buyers researching the category in AI assistants met Vantage before they met a competitor, and every path led to a demo booking built to screen for fit.",
    approach: [
      { step: "Step 1", title: "Define 'qualified'", desc: "Agreed with the founder on firm ICP criteria (company size, role, use case) and built them into targeting and the booking questionnaire." },
      { step: "Step 2", title: "Launch focused campaigns", desc: "LinkedIn and search campaigns aimed only at the ideal customer profile, with problem-led messaging tested weekly." },
      { step: "Step 3", title: "Show up in AI research", desc: "Published comparison, alternatives and use-case pages structured for AI citation." },
      { step: "Step 4", title: "Tighten the demo path", desc: "Rebuilt the demo page with proof and qualifying questions, routing poor-fit leads to self-serve resources." }
    ],
    quote: "I was about to hire a marketer. Instead, Bootsolo nearly tripled my qualified demos, and my calendar is full of people who are actually a fit.",
    quoteAuthor: "Daniel M., Founder, Vantage",
    stats: [
      { metric: "Qualified demos", result: "2.7×", note: "Nearly tripled high-intent bookings" },
      { metric: "Marketing hires needed", result: "0 internal hires", note: "Saved full-time salary commitments" },
      { metric: "Cost per qualified demo", result: "−61% ($184 → $72)", note: "Highly efficient B2B funnel" },
      { metric: "Demo-to-customer close rate", result: "18% → 31%", note: "Tighter qualification = faster closes" },
      { metric: "Timeline", result: "10 weeks", note: "Self-sustaining demo machine" }
    ],
    ctaLead: "Not ready to hire a marketer? You don't have to be.",
    ctaPrimaryText: "Get More Qualified Demos",
    ctaPrimaryHref: "/custom-quote?service=performance-lead-generation",
    ctaSecondaryText: "Explore Performance & Lead Generation",
    ctaSecondaryHref: "/performance-lead-generation",
    ctaMicroText: "Get a free demo-funnel teardown →",
    nextId: "indie-maker",
    nextTitle: "Indie Maker: Got 6 hours a week back by handing off the busywork"
  },
  {
    id: "indie-maker",
    company: "Indie Maker",
    logo: "IM",
    founder: "Tom H., founder",
    sector: "Indie app",
    timeline: "4 weeks",
    headlineMetric: "−41%",
    headlineLabel: "time on marketing",
    ice: false,
    services: ["Automation"],
    title: "Indie Maker: Got 6 hours a week back by handing off the busywork",
    atAGlance: "An indie app maker cut the time spent on marketing by 41%, about 6 hours every week, by automating the repetitive work and keeping only the parts that need a human.",
    problem: "Marketing was eating the founder's week: scheduling social posts, resizing visuals, answering the same questions, updating spreadsheets and pulling reports by hand. None of it was hard, but all of it was time taken from building the app, and things slipped whenever product work got busy.",
    solution: "We used Automation to take the busywork off the founder's plate: AI-assisted content repurposing and scheduling, automated reporting, and workflows that connect the tools the founder already uses, so marketing kept running even in heavy build weeks.",
    approach: [
      { step: "Step 1", title: "Track the hours", desc: "Logged every marketing task for two weeks and sorted them into automate, delegate or keep." },
      { step: "Step 2", title: "Automate the repeatable", desc: "Set up repurposing (one post into multiple formats), a content calendar with auto-scheduling, and canned replies for common questions." },
      { step: "Step 3", title: "Connect the stack", desc: "Linked analytics, email and social tools so reports build themselves into one weekly dashboard." },
      { step: "Step 4", title: "Protect founder voice", desc: "Kept the founder in the loop only for approvals and the personal posts that perform best coming from them." }
    ],
    quote: "I didn't need more marketing, I needed less busywork. Bootsolo gave me six hours a week back, and I spend them building.",
    quoteAuthor: "Tom H., Founder, Indie Maker",
    stats: [
      { metric: "Time spent on marketing", result: "−41%", note: "Dropped from ~15 to 9 hours/week" },
      { metric: "Hours saved per week", result: "~6 hours saved", note: "Reclaimed for software development" },
      { metric: "Tasks automated", result: "14 recurring tasks", note: "Repurposing, scheduling, reporting" },
      { metric: "Posting consistency", result: "2/mo → 12/mo (+500%)", note: "Consistent brand presence" },
      { metric: "Active app engagement", result: "+38% active users", note: "Autonomous engine driving results" }
    ],
    ctaLead: "How many hours did marketing take from you this week?",
    ctaPrimaryText: "Get My Hours Back",
    ctaPrimaryHref: "/custom-quote?service=ai-powered-marketing",
    ctaSecondaryText: "Explore AI-Powered Marketing",
    ctaSecondaryHref: "/ai-powered-marketing",
    ctaMicroText: "Get a free automation audit →",
    nextId: "northwind",
    nextTitle: "Northwind: +312% signups in one quarter"
  }
];

export default function CaseStudiesClient() {
  const [selectedSector, setSelectedSector] = useState("All Sectors");

  const filteredCases = selectedSector === "All Sectors" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.sector === selectedSector);

  const scrollToStory = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Story Jump Bar */}
      <div style={{
        position: 'sticky',
        top: '72px',
        zIndex: 40,
        background: 'rgba(247, 245, 241, 0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        padding: '12px 0'
      }}>
        <div className="wrap" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          padding: '2px 0'
        }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--fg3)',
            marginRight: '6px',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Compass size={14} /> Jump to story:
          </span>
          {CASE_STUDIES.map(c => (
            <button
              key={c.id}
              onClick={() => scrollToStory(c.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--fg2)',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.17s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--sunrise)';
                e.currentTarget.style.color = 'var(--brand-fg)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--fg2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>{c.company}</span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11.5px',
                padding: '1px 6px',
                borderRadius: '999px',
                background: c.ice ? 'rgba(56, 182, 245, 0.16)' : 'rgba(255, 107, 53, 0.12)',
                color: c.ice ? 'var(--ice-700)' : 'var(--sunrise-700)',
                fontWeight: 700
              }}>
                {c.headlineMetric}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Page Header */}
      <section className="page-head">
        <div className="wrap ph-inner">
          <span className="kick">The Work · Case Studies</span>
          <h1 className="ph-title">Founders who kept climbing</h1>
          <p className="ph-lead">Real routes, real numbers. No logos we can't back up with a story — every one of these started solo, on a budget that fit in a backpack.</p>

          {/* 3 Metrics Strip */}
          <div className="metrics" style={{ marginTop: 40, marginBottom: 0 }}>
            {METRICS.map(m => (
              <div className="metric" key={m.mk}>
                <div className="mv">{m.mv}</div>
                <div className="mk">{m.mk}</div>
              </div>
            ))}
          </div>

          {/* Hero CTA placement */}
          <div style={{
            marginTop: '28px',
            padding: '16px 24px',
            borderRadius: 'var(--r-card)',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            boxShadow: 'var(--shadow-1)',
            flexWrap: 'wrap'
          }}>
            <div style={{ fontSize: '16px', color: 'var(--fg1)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>🧗</span>
              <span><strong>Want results like these?</strong> Tell us where you're stuck and let's map out your route.</span>
            </div>
            <Link href="/custom-quote" className="btn btn-primary btn-sm">
              Book a Growth Call &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ paddingTop: '36px' }}>
        <div className="wrap">

          {/* Sector Filters */}
          <div className="filters">
            {SECTORS.map(s => (
              <button 
                key={s} 
                className={"filter" + (selectedSector === s ? " on" : "")} 
                onClick={() => setSelectedSector(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Summary Cards Grid */}
          <div className="sec-head" style={{ marginBottom: 24 }}>
            <span className="kick">At A Glance</span>
            <h2 className="sec-title" style={{ fontSize: '28px' }}>7 Proven Growth Trajectories</h2>
          </div>

          <div className="work-grid" style={{ marginBottom: '64px' }}>
            {filteredCases.map(c => (
              <article className="wcard" key={c.id}>
                <div className="wthumb">
                  <span className={"big" + (c.ice ? " ice" : "")}>{c.headlineMetric}</span>
                  <span className="blbl">{c.headlineLabel}</span>
                </div>
                <div className="wbody">
                  <div className="wco">
                    <span className="logo">{c.logo}</span>
                    <span className="nm">{c.company}</span>
                    <span className="sector">{c.sector}</span>
                  </div>
                  <h3 className="wtitle">{c.title}</h3>
                  <div className="wtags">
                    {c.services.map(s => <span className="wtag" key={s}>{s}</span>)}
                  </div>
                  <button 
                    onClick={() => scrollToStory(c.id)} 
                    className="wlink" 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '18px 0 0' }}
                  >
                    Read full story &darr;
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Detailed Deep Dives */}
          <div className="sec-head" style={{ marginTop: '80px', marginBottom: '32px' }}>
            <span className="kick">In-Depth Teardowns</span>
            <h2 className="sec-title">The Complete Route Breakdowns</h2>
            <p className="sec-lead">Full transparent breakdowns: the challenge, the architectural fix, step-by-step roadmap execution, and verified return on investment.</p>
          </div>

          {filteredCases.map((c, idx) => (
            <article 
              id={c.id} 
              key={c.id} 
              className="cs-story-card cs-story-section"
              style={{
                borderRadius: 'var(--r-md)',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-1)',
                overflow: 'hidden',
                marginBottom: '48px',
                scrollMarginTop: '140px'
              }}
            >
              {/* Header */}
              <header style={{
                padding: '36px 40px 30px',
                background: 'var(--navy-850)',
                color: '#EEF3F8',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '18px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    background: 'rgba(255,107,53,0.2)',
                    color: 'var(--sunrise-300)',
                    border: '1px solid rgba(255,107,53,0.35)'
                  }}>
                    Case Study 0{idx + 1}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--navy-300)' }}>Client: {c.company}</span>
                  <span style={{ fontSize: '12px', color: 'var(--navy-300)' }}>·</span>
                  <span style={{ fontSize: '12px', color: 'var(--navy-300)' }}>{c.founder}</span>
                  <span style={{ fontSize: '12px', color: 'var(--navy-300)' }}>·</span>
                  <span style={{ fontSize: '12px', color: 'var(--navy-300)' }}>{c.sector}</span>
                  <span style={{ fontSize: '12px', color: 'var(--navy-300)' }}>·</span>
                  <span style={{ fontSize: '12px', color: 'var(--navy-300)' }}>Timeline: {c.timeline}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '28px', alignItems: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '56px',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: c.ice ? 'var(--ice-300)' : 'var(--sunrise-300)',
                    paddingRight: '24px',
                    borderRight: '1px solid rgba(255,255,255,0.14)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}>
                    {c.headlineMetric}
                    <span style={{ fontSize: '12px', fontWeight: 500, fontFamily: 'var(--font-sans)', color: 'var(--navy-300)', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                      {c.headlineLabel}
                    </span>
                  </div>
                  <div>
                    <h2 style={{ fontSize: '28px', fontWeight: 600, lineHeight: 1.25, margin: '0 0 10px', color: '#fff', letterSpacing: '-0.02em' }}>
                      {c.title}
                    </h2>
                    <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--navy-200)', margin: 0 }}>
                      <strong>At a glance:</strong> {c.atAGlance}
                    </p>
                  </div>
                </div>
              </header>

              {/* Body */}
              <div style={{ padding: '40px' }}>
                
                {/* Problem & Solution Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '36px' }}>
                  <div style={{
                    borderRadius: 'var(--r-card)',
                    padding: '24px 28px',
                    border: '1px solid var(--border)',
                    borderLeft: '4px solid #E2483D',
                    background: '#FFF9F8'
                  }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#C5372C', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      The Problem
                    </div>
                    <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--fg2)', margin: 0 }}>
                      {c.problem}
                    </p>
                  </div>

                  <div style={{
                    borderRadius: 'var(--r-card)',
                    padding: '24px 28px',
                    border: '1px solid var(--border)',
                    borderLeft: '4px solid #1FBF75',
                    background: '#F6FCF8'
                  }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#16965B', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      The Solution
                    </div>
                    <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--fg2)', margin: 0 }}>
                      {c.solution}
                    </p>
                  </div>
                </div>

                {/* Our Approach */}
                <div style={{ marginBottom: '36px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--fg3)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Compass size={15} /> Our Approach &amp; Milestones
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                    {c.approach.map((step, sIdx) => (
                      <div key={sIdx} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '20px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--sunrise-700)', background: 'rgba(255,107,53,0.12)', padding: '3px 8px', borderRadius: '999px', display: 'inline-block', marginBottom: '10px' }}>
                          {step.step}
                        </span>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--summit)', marginBottom: '8px' }}>
                          {step.title}
                        </div>
                        <p style={{ fontSize: '13.5px', lineHeight: 1.5, color: 'var(--fg2)', margin: 0 }}>
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div style={{
                  borderRadius: 'var(--r-card)',
                  background: 'linear-gradient(135deg, rgba(233,244,254,0.6) 0%, rgba(247,245,241,0.9) 100%)',
                  border: '1px solid rgba(56,182,245,0.24)',
                  padding: '26px 32px',
                  marginBottom: '36px'
                }}>
                  <p style={{ fontSize: '17px', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--summit)', margin: '0 0 16px' }}>
                    “{c.quote}”
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--fg2)' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--summit)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px' }}>
                      {c.logo}
                    </div>
                    <div>
                      <strong>{c.quoteAuthor}</strong>
                    </div>
                  </div>
                </div>

                {/* Statistics Table */}
                <div style={{
                  borderRadius: 'var(--r-card)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  background: 'var(--bg-elevated)',
                  marginBottom: '36px'
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ background: 'var(--snow)', borderBottom: '1px solid var(--border)' }}>
                        <th style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', padding: '12px 20px' }}>Performance Metric</th>
                        <th style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', padding: '12px 20px' }}>Outcome / Verification</th>
                        <th style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', padding: '12px 20px' }}>Impact Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {c.stats.map((st, stIdx) => (
                        <tr key={stIdx} style={{ borderBottom: stIdx === c.stats.length - 1 ? 'none' : '1px solid var(--border)' }}>
                          <td style={{ padding: '14px 20px', fontSize: '14.5px', color: 'var(--fg1)' }}>{st.metric}</td>
                          <td style={{ padding: '14px 20px', fontSize: '14.5px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: c.ice ? 'var(--ice-700)' : 'var(--sunrise-700)' }}>
                            {st.result}
                          </td>
                          <td style={{ padding: '14px 20px', fontSize: '14px', color: 'var(--fg2)' }}>{st.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Bottom Action Box */}
                <div style={{
                  borderRadius: 'var(--r-card)',
                  background: 'var(--snow)',
                  border: '1px solid var(--border)',
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontSize: '17px', fontWeight: 600, color: 'var(--summit)' }}>
                      {c.ctaLead}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13.5px' }}>
                      <Link href={c.ctaSecondaryHref} style={{ color: 'var(--fg2)', textDecoration: 'underline' }}>
                        {c.ctaSecondaryText} &rarr;
                      </Link>
                      <span style={{ color: 'var(--border-strong)' }}>•</span>
                      <Link href="/#growth-roadmap" style={{ color: 'var(--fg2)', textDecoration: 'underline' }}>
                        {c.ctaMicroText}
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link href={c.ctaPrimaryHref} className="btn btn-primary btn-sm">
                      {c.ctaPrimaryText} &rarr;
                    </Link>
                  </div>
                </div>

                {/* Next Route link */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingTop: '20px', fontSize: '14px', fontWeight: 600 }}>
                  <button
                    onClick={() => scrollToStory(c.nextId)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--brand-fg)',
                      fontSize: '14px',
                      fontWeight: 600
                    }}
                  >
                    Next route: {c.nextTitle} &rarr;
                  </button>
                </div>

              </div>
            </article>
          ))}

          {/* Low-Commitment Pre-Footer */}
          <div style={{
            marginTop: '56px',
            padding: '28px 36px',
            borderRadius: 'var(--r-md)',
            background: 'var(--snow)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 6px' }}>Not ready for a formal call yet?</h4>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: 0 }}>
                No pressure. Drop us a note with your product link and current goal, and we'll reply with 3 actionable ideas.
              </p>
            </div>
            <a href="mailto:hello@bootsolo.com?subject=Growth%20Goal%20for%20Bootsolo" className="btn btn-ghost" style={{ borderColor: 'var(--border-strong)' }}>
              Email Us Your Goal &rarr;
            </a>
          </div>

        </div>
      </section>

      {/* Primary CTA */}
      <CTA 
        title="Ready to add your logo to the route?"
        subtitle="We're looking for the next 5 bootstrapped founders to partner with this quarter on a backpack budget."
        href="/custom-quote"
        btnText="Build custom quote"
      />
    </>
  );
}
