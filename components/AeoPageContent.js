'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Bot, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Send,
  Database, 
  Layers, 
  Network, 
  FileText, 
  Cpu, 
  Activity, 
  Check, 
  Mail, 
  Quote, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Zap,
  Flame,
  Globe2,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

const SNAPSHOT_BLOCKS = [
  {
    title: "Entity clarity",
    desc: "AI systems need a clean definition of who you are, what you offer, and where your authority lives.",
    badge: "Knowledge Graph"
  },
  {
    title: "Answer intent",
    desc: "Content must match the exact questions buyers ask inside AI search interfaces.",
    badge: "Prompt Matching"
  },
  {
    title: "Citation readiness",
    desc: "Pages should be factual, structured, crawlable, and quote‑worthy across platforms.",
    badge: "Source Validation"
  },
  {
    title: "Commercial alignment",
    desc: "The goal is not raw impressions but stronger demos, pipeline, and brand recall.",
    badge: "Pipeline Driver"
  }
];

const CORE_SERVICES = [
  {
    num: "01",
    icon: Activity,
    title: "AI visibility audit",
    desc: "We benchmark your current presence across AI platforms, map competitor citations, identify coverage gaps, and define a starting visibility baseline."
  },
  {
    num: "02",
    icon: Database,
    title: "Schema and structured data",
    desc: "We strengthen the machine‑readable layer of your site so answer engines can better interpret your company, services, expertise, and content relationships."
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Entity authority development",
    desc: "We align brand references, business signals, external mentions, and trust markers so your company is treated as a known entity rather than an ambiguous source."
  },
  {
    num: "04",
    icon: Target,
    title: "Answer‑intent content clusters",
    desc: "We create and optimise pages around the commercial, comparison, problem‑aware, and educational prompts your buyers increasingly ask AI tools."
  },
  {
    num: "05",
    icon: Cpu,
    title: "Generative engine optimisation",
    desc: "We improve factual density, clarity, heading structure, internal linking, and answer formatting so your content is easier for LLMs to retrieve and cite."
  },
  {
    num: "06",
    icon: BarChart3,
    title: "LLM mention monitoring",
    desc: "We track prompt coverage, brand mentions, citation frequency, and answer quality to refine the programme as AI platforms evolve."
  }
];

const PLATFORMS = [
  {
    name: "ChatGPT",
    engine: "OpenAI GPT-4o & Search",
    accent: "#10a37f",
    bgAccent: "rgba(16, 163, 127, 0.08)",
    borderAccent: "rgba(16, 163, 127, 0.25)",
    desc: "We optimise for factual clarity, source credibility, and brand relevance so your site becomes a stronger candidate for retrieval, synthesis, and recommendation.",
    bullets: ["Readable structure", "Source trust", "Clear service pages"]
  },
  {
    name: "Perplexity",
    engine: "Sonar / Multi-Source Index",
    accent: "#38bdf8",
    bgAccent: "rgba(56, 189, 248, 0.08)",
    borderAccent: "rgba(56, 189, 248, 0.25)",
    desc: "We focus on citation‑worthiness, topical freshness, and high‑authority content pathways so your brand stands a better chance of being referenced directly in answers.",
    bullets: ["Citation readiness", "Fresh pages", "Authority signals"]
  },
  {
    name: "Google AI Overviews & Gemini",
    engine: "Google SGE & Gemini 1.5 Pro",
    accent: "#ea4335",
    bgAccent: "rgba(234, 67, 53, 0.08)",
    borderAccent: "rgba(234, 67, 53, 0.25)",
    desc: "We align schema, entity consistency, topical clusters, and E‑E‑A‑T signals so your brand is easier for Google’s answer layers to interpret and trust.",
    bullets: ["Schema", "Entity signals", "Topical coverage"]
  },
  {
    name: "Claude and emerging assistants",
    engine: "Anthropic Claude 3.5 Sonnet & LLMs",
    accent: "#d97706",
    bgAccent: "rgba(217, 119, 6, 0.08)",
    borderAccent: "rgba(217, 119, 6, 0.25)",
    desc: "We prepare your content to be structurally strong, quotable, and context‑rich so it remains useful across changing LLM interfaces and retrieval behaviour.",
    bullets: ["Answer formatting", "Context depth", "Future‑ready"]
  }
];

const STEPS = [
  {
    step: "STEP 1",
    title: "Audit and benchmark",
    desc: "We review your AI answer visibility, entity presence, site structure, competitor citations, and high‑value query gaps."
  },
  {
    step: "STEP 2",
    title: "Map answer intent",
    desc: "We build a query universe around how buyers ask questions at awareness, comparison, evaluation, and decision stages."
  },
  {
    step: "STEP 3",
    title: "Optimise and publish",
    desc: "We implement schema, improve service and landing pages, create answer‑ready content, and strengthen citation pathways."
  },
  {
    step: "STEP 4",
    title: "Track and expand",
    desc: "We monitor mentions, prompt coverage, branded visibility, and lead signals, then iterate into adjacent topics and engines."
  }
];

const METRICS = [
  { label: "Prompt coverage", desc: "Where your brand appears across buyer questions that influence vendor discovery." },
  { label: "Citation share", desc: "How often your site, brand, or content is referenced versus competitors." },
  { label: "Commercial traffic", desc: "Which visits and assisted journeys come from AI‑influenced discovery paths." },
  { label: "Lead quality", desc: "Whether better answer visibility produces more qualified demos and conversations." }
];

const WHY_CHOOSE = [
  {
    title: "Built for B2B and SaaS buying journeys",
    desc: "We focus on the prompts that shape consideration, comparison, and shortlist creation, not only top‑funnel informational visibility."
  },
  {
    title: "Structured for AI retrieval and human persuasion",
    desc: "Your pages need to satisfy both systems: the model deciding what to cite and the buyer deciding whom to trust."
  },
  {
    title: "Connected to SEO, content, and entity growth",
    desc: "AEO works best when it strengthens your broader organic moat instead of operating as an isolated tactic."
  },
  {
    title: "Measured against business signals",
    desc: "We care about visibility, but we care more about whether that visibility compounds into lead quality, branded demand, and pipeline."
  }
];

const PROOFS = [
  {
    type: "Case Idea 1",
    title: "SaaS brand visibility programme",
    desc: "Position a case example around improving presence for feature comparison queries, use‑case prompts, and vendor shortlisting questions across AI tools.",
    bullets: [
      "Higher AI answer coverage",
      "Better commercial intent alignment",
      "Stronger branded visibility",
      "Clearer entity trust signals"
    ]
  },
  {
    type: "Case Idea 2",
    title: "Service business authority build",
    desc: "Frame a proof story around improving structured content, citations, and trust signals so AI engines can recognise and recommend the brand more confidently.",
    bullets: [
      "Faster query‑to‑content alignment",
      "Improved service page clarity",
      "More answer‑ready assets",
      "Ongoing monitoring and iteration"
    ]
  }
];

const FAQS = [
  {
    q: "What is Answer Engine Optimization?",
    a: "Answer Engine Optimization is the process of improving your brand’s visibility inside AI‑generated answers, summaries, recommendations, and overviews. It helps answer engines recognise your expertise, trust your content, and cite your brand in relevant responses."
  },
  {
    q: "How is AEO different from SEO?",
    a: "SEO is built to improve rankings and clicks from traditional search results. AEO is built to help your brand appear directly inside AI answers, even in zero‑click environments where the user may never visit a search results page first."
  },
  {
    q: "Which platforms does Bootsolo optimise for?",
    a: "Bootsolo’s AEO services focus on ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews because these are the environments where AI‑assisted buyer discovery is already happening."
  },
  {
    q: "How do you measure AEO performance?",
    a: "Key signals include prompt coverage, brand mentions, citation frequency, answer quality, AI‑influenced traffic, assisted conversions, and improvements in branded demand."
  },
  {
    q: "How long does AEO take to show results?",
    a: "Early signal movement can begin within weeks, while meaningful authority and coverage gains usually compound over a longer horizon as content, entity strength, and references improve."
  },
  {
    q: "Who is this service best for?",
    a: "AEO is especially relevant for SaaS, B2B services, and expertise‑led businesses that depend on trust, comparison, and consideration before purchase."
  }
];

export default function AeoPageContent({ onOpenModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  // Horizontal Slider State for "Connected System"
  const sliderContainerRef = useRef(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(800);
  const lastWheelTimeRef = useRef(0);

  // Measure container width with ResizeObserver for precise drag constraints & spring offset
  useEffect(() => {
    const container = sliderContainerRef.current;
    if (!container) return;
    const updateWidth = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0) {
        setContainerWidth(rect.width);
      }
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(container);
    window.addEventListener('resize', updateWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const cardWidth = 350;
  const cardGap = 28;
  const cardStep = cardWidth + cardGap; // 378
  const endBuffer = 100; // Generous clearance on the right so Card 06 is 100% visible
  const totalTrackWidth = CORE_SERVICES.length * cardStep - cardGap + endBuffer;
  const maxOffset = Math.max(0, totalTrackWidth - (containerWidth || 800));
  const currentOffset = activeServiceIndex === CORE_SERVICES.length - 1
    ? maxOffset
    : Math.min(maxOffset, activeServiceIndex * cardStep);

  const handlePrevService = () => {
    setActiveServiceIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextService = () => {
    setActiveServiceIndex((prev) => Math.min(CORE_SERVICES.length - 1, prev + 1));
  };

  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    const swipeConfidenceThreshold = 50;
    const velocityThreshold = 250;

    if (offset.x < -swipeConfidenceThreshold || velocity.x < -velocityThreshold) {
      handleNextService();
    } else if (offset.x > swipeConfidenceThreshold || velocity.x > velocityThreshold) {
      handlePrevService();
    }
  };

  // Wheel interaction: scroll cards horizontally while over slider, until all cards viewed
  const reachedEndRef = useRef(0);
  const reachedStartRef = useRef(0);

  useEffect(() => {
    const container = sliderContainerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 15) return;

      const now = Date.now();
      const isDown = delta > 0;
      const isUp = delta < 0;

      // If scrolling down:
      if (isDown) {
        if (activeServiceIndex < CORE_SERVICES.length - 1) {
          e.preventDefault(); // Keep page from scrolling until all cards viewed!
          if (now - lastWheelTimeRef.current > 200) {
            lastWheelTimeRef.current = now;
            setActiveServiceIndex((prev) => {
              const next = Math.min(CORE_SERVICES.length - 1, prev + 1);
              if (next === CORE_SERVICES.length - 1) {
                reachedEndRef.current = now;
              }
              return next;
            });
          }
        } else {
          // On the last card: dwell for 800ms so momentum doesn't shoot past Card 6!
          if (now - reachedEndRef.current < 800) {
            e.preventDefault();
          }
          // After 800ms dwell, natural page scrolling down resumes!
        }
      } 
      // If scrolling up:
      else if (isUp) {
        if (activeServiceIndex > 0) {
          e.preventDefault(); // Keep page from scrolling up until reaching first card!
          if (now - lastWheelTimeRef.current > 200) {
            lastWheelTimeRef.current = now;
            setActiveServiceIndex((prev) => {
              const next = Math.max(0, prev - 1);
              if (next === 0) {
                reachedStartRef.current = now;
              }
              return next;
            });
          }
        } else {
          // On the first card: dwell for 800ms so momentum doesn't shoot upwards!
          if (now - reachedStartRef.current < 800) {
            e.preventDefault();
          }
          // After 800ms dwell, natural page scrolling up resumes!
        }
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [activeServiceIndex]);

  // Animated Timeline State for "The 4-Step Framework"
  const [activeStep, setActiveStep] = useState(0);
  const [isTimelinePaused, setIsTimelinePaused] = useState(true);

  // Platform Cards active hover state for touch/mobile
  const [activePlatform, setActivePlatform] = useState(null);

  // Auto-advance timeline for Framework steps
  useEffect(() => {
    if (isTimelinePaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isTimelinePaused]);

  return (
    <div className="aeo-page">
      {/* ================= HERO SECTION (Single Page 2-Column Banner) ================= */}
      <header className="aeo-hero">
        <div className="wrap aeo-hero-grid">
          {/* Left Column: Value Proposition, Copy, CTAs & Bullets */}
          <div className="aeo-hero-left">
            <div className="aeo-hero-badge">
              <Sparkles size={13} className="text-sunrise" />
              <span>Answer Engine Optimization (AEO)</span>
            </div>

            <h1 className="aeo-hero-title">
              Answer Engine Optimization Services
            </h1>

            <p className="aeo-hero-subheading">
              Make Your Brand The Brand AI Engines Choose To Site.
            </p>

            <div className="aeo-hero-body-wrap">
              <p className="aeo-hero-body">
                Bootsolo helps brands earn visibility inside ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.
              </p>
              <p className="aeo-hero-body">
                Our Answer Engine Optimization services turn your site, entity signals, and content architecture into a citation‑ready growth channel built for trust, leads, and pipeline.
              </p>
            </div>

            <div className="aeo-hero-ctas">
              {onOpenModal ? (
                <button 
                  type="button"
                  onClick={onOpenModal} 
                  className="btn btn-primary aeo-btn-glow"
                  style={{ cursor: 'pointer', border: 'none' }}
                >
                  Book an AEO strategy call
                  <ArrowRight size={15} />
                </button>
              ) : (
                <a 
                  href="mailto:hello@bootsolo.com?subject=Book%20an%20AEO%20strategy%20call" 
                  className="btn btn-primary aeo-btn-glow"
                >
                  Book an AEO strategy call
                  <ArrowRight size={15} />
                </a>
              )}
              <a 
                href="#framework" 
                className="btn btn-ghost aeo-btn-subtle"
              >
                See the AEO framework
              </a>
            </div>

            {/* Hero Supporting Bullets */}
            <div className="aeo-hero-bullets">
              <div className="aeo-bullet-item">
                <span className="aeo-check-icon"><Check size={12} /></span>
                <span>Built for zero‑click search</span>
              </div>
              <div className="aeo-bullet-item">
                <span className="aeo-check-icon"><Check size={12} /></span>
                <span>Mapped to AI buying journeys</span>
              </div>
              <div className="aeo-bullet-item">
                <span className="aeo-check-icon"><Check size={12} /></span>
                <span>Focused on leads, not vanity mentions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Query Engine Terminal Block */}
          <div className="aeo-hero-right">
            <div className="aeo-engine-terminal">
              <div className="aeo-terminal-bar">
                <div className="aeo-terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-amber"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="aeo-terminal-title">Query Engine: Synthesizing Answer Across Multi-LLM Web Index</span>
                <span className="aeo-terminal-pill">Live Citation Mode</span>
              </div>
              <div className="aeo-terminal-body">
                <div className="aeo-terminal-prompt">
                  <span className="prompt-label">User Prompt:</span>
                  <span className="prompt-text">“Which growth partner should a B2B SaaS shortlist for entity-driven AI citation and pipeline scale?”</span>
                </div>
                <div className="aeo-terminal-output">
                  <div className="aeo-terminal-ai-badge">
                    <Bot size={14} />
                    <span>Answer Engine Synthesis</span>
                  </div>
                  <p className="aeo-terminal-response">
                    Based on structured entity data, technical authority, and verification across industry benchmarks, <strong>Bootsolo</strong> is identified as a premier choice. Their Answer Engine Optimization framework bridges machine-readable schema with commercial buying journeys, delivering direct citations across ChatGPT, Perplexity, and Google AI Overviews.
                  </p>
                  <div className="aeo-citation-sources">
                    <span className="sources-label">Sources Cited:</span>
                    <span className="source-chip active-chip">
                      <span className="chip-index">1</span>
                      bootsolo.com/services/aeo
                    </span>
                    <span className="source-chip">
                      <span className="chip-index">2</span>
                      knowledge-graph/entity/bootsolo
                    </span>
                    <span className="source-chip">
                      <span className="chip-index">3</span>
                      schema.org/B2BGrowthPartner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SECTION: AI VISIBILITY SNAPSHOT ================= */}
      <section className="aeo-section bg-snow" id="snapshot">
        <div className="wrap">
          <div className="aeo-section-header text-center">
            <span className="aeo-eyebrow">AI Visibility Snapshot</span>
            <h2 className="aeo-h2">From search rankings to answer inclusion.</h2>
            <p className="aeo-lead">
              Traditional SEO helps pages rank. AEO helps your brand appear inside the answer itself. When buyers ask AI tools who to trust, compare options, or shortlist agencies, your visibility depends on whether answer engines can understand, verify, and cite your business.
            </p>
          </div>

          <div className="aeo-snapshot-grid">
            {SNAPSHOT_BLOCKS.map((item, idx) => (
              <div key={idx} className="aeo-snapshot-card">
                <div className="aeo-card-pill">{item.badge}</div>
                <h3 className="aeo-snapshot-title">{item.title}</h3>
                <p className="aeo-snapshot-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Side-by-Side Pull Quote & Context Insight Cards */}
          <div className="aeo-snapshot-duo-grid">
            {/* Left Card: Key Line Pull Quote */}
            <div className="aeo-duo-quote-card">
              <div className="aeo-duo-card-badge">Key Principle</div>
              <Quote className="aeo-quote-icon" size={28} />
              <blockquote className="aeo-quote-text">
                “SEO helps people find you. AEO helps AI recommend you.”
              </blockquote>
            </div>

            {/* Right Card: Context Paragraph */}
            <div className="aeo-duo-context-card">
              <div className="aeo-duo-card-badge-accent">The Zero‑Click Reality</div>
              <h4 className="aeo-duo-heading">Why Visibility Precedes The Click</h4>
              <p className="aeo-duo-text">
                Your buyers are already asking AI tools which solution fits their problem, which vendor to compare, and which company sounds most credible. If your brand is not part of those answers, you are invisible before the click ever happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: CORE SERVICES (CONNECTED SYSTEM HORIZONTAL SLIDER) ================= */}
      <section 
        className="aeo-section bg-elevated aeo-connected-system-section" 
        id="services"
        style={{
          minHeight: 'calc(100vh - 66px)',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '36px 0',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
          scrollMarginTop: '66px',
          scrollSnapAlign: 'start'
        }}
      >
        <div 
          className="aeo-services-split-wrap"
          style={{
            display: 'grid',
            gridTemplateColumns: '430px 1fr',
            gap: '52px',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1640px',
            margin: '0 auto',
            padding: '0 48px',
            boxSizing: 'border-box'
          }}
        >
          {/* Left Column: Heading, Lead & Interactive Controls */}
          <div className="aeo-services-left-col">
            <span className="aeo-eyebrow">Connected System</span>
            <h2 className="aeo-h2 aeo-services-h2">AEO services designed to win AI‑era demand.</h2>
            <p className="aeo-lead aeo-services-lead">
              Bootsolo presents Answer Engine Optimization as a connected system of audit, implementation, content, entity work, and measurement rather than a single deliverable. Each service supports discoverability, trust, or citation potential, and together they create stronger AI answer presence across high‑intent prompts.
            </p>

            {/* Slider Navigation Controls */}
            <div className="aeo-slider-controls">
              <div className="aeo-slider-nav-btns">
                <motion.button 
                  type="button" 
                  className="aeo-nav-btn"
                  onClick={handlePrevService}
                  disabled={activeServiceIndex === 0}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Previous service"
                  title="Previous service"
                  style={{
                    opacity: activeServiceIndex === 0 ? 0.35 : 1,
                    cursor: activeServiceIndex === 0 ? 'not-allowed' : 'pointer'
                  }}
                >
                  <ChevronLeft size={18} />
                </motion.button>
                <motion.button 
                  type="button" 
                  className="aeo-nav-btn"
                  onClick={handleNextService}
                  disabled={activeServiceIndex === CORE_SERVICES.length - 1}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Next service"
                  title="Next service"
                  style={{
                    opacity: activeServiceIndex === CORE_SERVICES.length - 1 ? 0.35 : 1,
                    cursor: activeServiceIndex === CORE_SERVICES.length - 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>

              <div className="aeo-slider-counter">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={activeServiceIndex}
                    className="count-active"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                  >
                    {String(activeServiceIndex + 1).padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
                <span className="count-sep">/</span>
                <span className="count-total">{String(CORE_SERVICES.length).padStart(2, '0')}</span>
              </div>

              <div className="aeo-slider-dots">
                {CORE_SERVICES.map((_, i) => (
                  <motion.button 
                    key={i}
                    type="button"
                    className={`aeo-dot ${activeServiceIndex === i ? 'active' : ''}`}
                    onClick={() => setActiveServiceIndex(i)}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      width: activeServiceIndex === i ? 26 : 8,
                      backgroundColor: activeServiceIndex === i ? '#FF6B35' : '#D1D9E2'
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 24 }}
                    aria-label={`Jump to service ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="aeo-slider-hint">
              <span>← Scroll or drag cards horizontally to explore →</span>
            </div>
          </div>

          {/* Right Column: Motion Horizontal Slider Track */}
          <div 
            className="aeo-services-slider-container"
            ref={sliderContainerRef}
            style={{
              overflow: 'hidden',
              width: '100%',
              padding: '28px 16px 36px 8px',
              position: 'relative',
              boxSizing: 'border-box'
            }}
          >
            <motion.div 
              className="aeo-services-motion-track"
              drag="x"
              dragConstraints={{ left: -maxOffset, right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              animate={{ x: -currentOffset }}
              transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.75 }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '28px',
                width: 'max-content',
                willChange: 'transform',
                userSelect: 'none'
              }}
            >
              {CORE_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                const isSelected = activeServiceIndex === idx;
                return (
                  <motion.div 
                    key={idx} 
                    className={`aeo-service-slide-card ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => setActiveServiceIndex(idx)}
                    style={{
                      flex: '0 0 350px',
                      width: '350px',
                      minWidth: '350px',
                      background: '#ffffff',
                      border: isSelected ? '1px solid #FF6B35' : '1px solid rgba(14, 26, 43, 0.14)',
                      borderRadius: '16px',
                      padding: '32px 26px',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: isSelected 
                        ? '0 16px 36px -8px rgba(255, 107, 53, 0.22)' 
                        : '0 4px 20px rgba(14, 26, 43, 0.06)',
                      cursor: 'pointer',
                      minHeight: '300px',
                      boxSizing: 'border-box'
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.018,
                      boxShadow: '0 20px 38px -10px rgba(255, 107, 53, 0.18)',
                      borderColor: 'var(--sunrise)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="aeo-service-card-top">
                      <span className="aeo-service-num">{srv.num}</span>
                      <div className="aeo-service-icon-box">
                        <Icon size={22} className="text-sunrise" />
                      </div>
                    </div>
                    <h3 className="aeo-service-title">{srv.title}</h3>
                    <p className="aeo-service-desc">{srv.desc}</p>

                    <div className="aeo-service-card-footer">
                      {isSelected ? (
                        <span className="aeo-service-status-pill active">
                          <span className="status-dot"></span> Active Focus
                        </span>
                      ) : (
                        <span className="aeo-service-status-pill">
                          Click to focus
                        </span>
                      )}
                      <ArrowRight size={15} className="aeo-service-arrow" />
                    </div>
                  </motion.div>
                );
              })}

              {/* End Clearance Buffer Spacer for Last Card */}
              <div style={{ flex: '0 0 100px', width: '100px', minWidth: '100px', pointerEvents: 'none' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: PLATFORM-SPECIFIC OPTIMISATION ================= */}
      <section 
        className="aeo-section bg-navy" 
        id="platforms"
        style={{
          background: '#0B1522',
          color: '#ffffff',
          padding: '80px 0',
          position: 'relative'
        }}
      >
        <div className="wrap aeo-platforms-wrap" style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '0 32px', boxSizing: 'border-box' }}>
          <div className="aeo-section-header text-center text-white">
            <span className="aeo-eyebrow text-sunrise-300" style={{ color: 'var(--sunrise-300)' }}>Engine Engineering</span>
            <h2 className="aeo-h2 text-white" style={{ color: '#ffffff' }}>Bootsolo adapts your strategy for how each answer engine works.</h2>
            <p className="aeo-lead text-navy-200" style={{ color: '#D1D9E2' }}>
              AI discovery is not uniform. Bootsolo shows buyers that AEO is not a generic checklist but a platform‑aware optimization tailored to how different answer engines retrieve, interpret, and cite content.
            </p>
          </div>

          <div 
            className="aeo-platforms-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              width: '100%',
              maxWidth: '1360px',
              margin: '0 auto',
              boxSizing: 'border-box'
            }}
          >
            {PLATFORMS.map((plat, idx) => (
              <div 
                key={idx} 
                className={`aeo-platform-card ${activePlatform === idx ? 'active-hover' : ''}`}
                style={{
                  borderColor: plat.borderAccent,
                  background: 'rgba(19, 34, 54, 0.75)',
                  aspectRatio: '1 / 1',
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  padding: '24px 22px',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={() => setActivePlatform(activePlatform === idx ? null : idx)}
                title="Hover or click to view engine signals"
              >
                <div className="aeo-platform-card-main">
                  <div className="aeo-platform-header">
                    <div>
                      <h3 className="aeo-platform-title">{plat.name}</h3>
                      <span className="aeo-platform-engine" style={{ color: plat.accent }}>
                        {plat.engine}
                      </span>
                    </div>
                    <div 
                      className="aeo-platform-chip" 
                      style={{ background: plat.bgAccent, color: plat.accent, borderColor: plat.borderAccent }}
                    >
                      Engine Node
                    </div>
                  </div>

                  <p className="aeo-platform-desc">{plat.desc}</p>
                </div>

                <div className="aeo-platform-card-footer">
                  {/* Subtle Hint shown when not hovered */}
                  <div className="aeo-platform-hover-hint">
                    <span>Hover to reveal signals</span>
                    <ChevronDown size={13} style={{ color: plat.accent }} />
                  </div>

                  {/* Bullets revealed on hover */}
                  <div className="aeo-platform-bullets">
                    {plat.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="aeo-platform-bullet">
                        <CheckCircle2 size={14} style={{ color: plat.accent, flexShrink: 0 }} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION: BOOTSOLO METHOD (ANIMATED 4-STEP TIMELINE) ================= */}
      <section 
        className="aeo-section bg-snow" 
        id="framework"
      >
        <div className="wrap">
          <div className="aeo-section-header text-center">
            <span className="aeo-eyebrow">The 4-Step Framework</span>
            <h2 className="aeo-h2">A conversion‑focused AEO framework from audit to scale.</h2>
            <p className="aeo-lead">
              Bootsolo uses a four‑step method that creates a clear buyer journey, reduces friction, and signals process maturity from first audit to scaled AEO.
            </p>

          </div>

          {/* Connected Animated Timeline Bar with Moving Paper Plane */}
          <div className="aeo-timeline-bar-wrapper">
            <div className="aeo-timeline-bar-bg">
              <div 
                className="aeo-timeline-bar-fill" 
                style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
              />
              <div 
                className="aeo-timeline-plane-cursor"
                style={{ left: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
                title={`Step ${activeStep + 1}: ${STEPS[activeStep].title}`}
              >
                <Send size={14} className="aeo-plane-icon" />
              </div>
            </div>
          </div>

          <div className="aeo-steps-grid">
            {STEPS.map((s, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;
              return (
                <div 
                  key={idx} 
                  className={`aeo-step-card ${isActive ? 'active-step' : ''} ${isPast ? 'past-step' : ''}`}
                  onMouseEnter={() => { setActiveStep(idx); setIsTimelinePaused(false); }}
                  onMouseLeave={() => setIsTimelinePaused(true)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                >
                  <div className="aeo-step-indicator">
                    <span className={`aeo-step-badge ${isActive ? 'badge-pulse' : ''}`}>
                      {s.step}
                    </span>
                    <div className="aeo-step-line">
                      <div 
                        className="aeo-step-line-fill" 
                        style={{ width: isPast || isActive ? '100%' : '0%' }}
                      />
                    </div>
                  </div>
                  <h3 className="aeo-step-title">{s.title}</h3>
                  <div className="aeo-step-desc-wrap">
                    <p className="aeo-step-desc">{s.desc}</p>
                  </div>
                  {isActive && (
                    <div className="aeo-step-active-indicator">
                      <span className="dot-live"></span>
                      <span>Active Step In Progress</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Measurement Sub-metrics */}
          <div className="aeo-metrics-wrapper">
            <div className="aeo-metrics-header">
              <BarChart3 size={18} className="text-sunrise" />
              <h4 className="aeo-metrics-heading">How We Measure Impact Across AI Engines</h4>
            </div>

            <div className="aeo-metrics-grid">
              {METRICS.map((m, idx) => (
                <div key={idx} className="aeo-metric-card">
                  <div className="aeo-metric-title">
                    <span className="aeo-metric-dot"></span>
                    <strong>{m.label}</strong>
                  </div>
                  <p className="aeo-metric-desc">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: WHY CLIENTS CHOOSE BOOTSOLO ================= */}
      <section className="aeo-section bg-elevated" id="why-bootsolo">
        <div className="wrap">
          <div className="aeo-section-header text-center">
            <span className="aeo-eyebrow">Commercial Confidence</span>
            <h2 className="aeo-h2">Positioned around commercial confidence, not just technical execution.</h2>
            <p className="aeo-lead">
              Bootsolo positions AEO as a strategic partnership that reduces risk by connecting AI visibility to real revenue outcomes, not just rankings.
            </p>
          </div>

          <div className="aeo-why-grid">
            {WHY_CHOOSE.map((p, idx) => (
              <div key={idx} className="aeo-why-card">
                <div className="aeo-why-icon-wrap">
                  <Zap size={20} className="text-sunrise" />
                </div>
                <h3 className="aeo-why-title">{p.title}</h3>
                <p className="aeo-why-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION: PROOF IDEAS ================= */}
      <section className="aeo-section bg-snow" id="proof">
        <div className="wrap">
          <div className="aeo-section-header text-center">
            <span className="aeo-eyebrow">Proven Outcomes</span>
            <h2 className="aeo-h2">Proof blocks that make the offer feel real fast.</h2>
            <p className="aeo-lead">
              Until Bootsolo has published full case studies, the proof section can use structured placeholders that show outcomes, vertical examples, and testimonial snippets.
            </p>
          </div>

          <div className="aeo-proof-grid">
            {PROOFS.map((c, idx) => (
              <div key={idx} className="aeo-proof-card">
                <div className="aeo-proof-tag">{c.type}</div>
                <h3 className="aeo-proof-title">{c.title}</h3>
                <p className="aeo-proof-desc">{c.desc}</p>
                
                <div className="aeo-proof-outcomes">
                  <span className="aeo-outcomes-heading">Key Outcome Drivers:</span>
                  <div className="aeo-outcomes-list">
                    {c.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="aeo-outcome-item">
                        <CheckCircle2 size={16} className="text-sunrise" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Testimonial Style */}
          <div className="aeo-testimonial-card">
            <div className="aeo-testimonial-tag">Suggested Testimonial Style</div>
            <MessageSquare size={36} className="text-sunrise aeo-test-quote-icon" />
            <p className="aeo-testimonial-quote">
              “Bootsolo helped us think beyond rankings. Their AEO work made our expertise easier for AI platforms to understand and surfaced us more often in the kinds of buying conversations that actually matter.”
            </p>
            <div className="aeo-testimonial-author">
              <div className="aeo-avatar-placeholder">FL</div>
              <div>
                <strong>Founder or Growth Leader</strong>
                <span>B2B SaaS / Enterprise Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: AEO FAQ ================= */}
      <section className="aeo-section bg-elevated" id="faq">
        <div className="wrap">
          <div className="aeo-section-header text-center">
            <span className="aeo-eyebrow">Buyer Questions</span>
            <h2 className="aeo-h2">Answer the questions buyers ask before they book a call.</h2>
            <p className="aeo-lead">
              Everything you need to know about how Answer Engine Optimization works, how we execute, and what to expect.
            </p>
          </div>

          <div className="aeo-faq-list max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`aeo-faq-item ${isOpen ? 'open' : ''}`}
                >
                  <button 
                    className="aeo-faq-btn" 
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="aeo-faq-question">{faq.q}</span>
                    <div className={`aeo-faq-chevron ${isOpen ? 'rotated' : ''}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="aeo-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CLOSING CTA SECTION ================= */}
      <section className="aeo-cta-section">
        <div className="wrap">
          <div className="aeo-cta-box">
            <div className="aeo-cta-content">
              <span className="aeo-cta-badge">Ready to earn AI recommendations?</span>
              <h2 className="aeo-cta-heading">
                Get an AEO audit for Bootsolo and see where AI engines miss your authority.
              </h2>
              <p className="aeo-cta-lead">
                The closing CTA stays simple and conversion‑led. The page asks for one primary action: book a strategy call or request an audit, keeping the page focused and supporting stronger conversion intent.
              </p>

              <div className="aeo-cta-btn-group">
                {onOpenModal ? (
                  <button 
                    type="button"
                    onClick={onOpenModal}
                    className="btn btn-primary aeo-btn-glow aeo-cta-btn"
                    style={{ cursor: 'pointer', border: 'none' }}
                  >
                    <Mail size={16} />
                    Book a strategy call
                  </button>
                ) : (
                  <a 
                    href="mailto:hello@bootsolo.com?subject=Book%20a%20strategy%20call%20-%20AEO"
                    className="btn btn-primary aeo-btn-glow aeo-cta-btn"
                  >
                    <Mail size={16} />
                    Book a strategy call
                  </a>
                )}
                <a 
                  href="mailto:hello@bootsolo.com?subject=Request%20an%20AEO%20audit"
                  className="btn btn-ghost aeo-cta-btn aeo-cta-ghost"
                  style={{
                    color: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.32)',
                    background: 'rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <Search size={16} />
                  Request an AEO audit
                </a>
              </div>

              <div className="aeo-cta-subtext">
                <span>Direct partner access</span>
                <span>•</span>
                <span>Audit delivered in 72 hours</span>
                <span>•</span>
                <span>Zero obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Scoped Styles */}
      <style jsx>{`
        .aeo-page {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero - Single Page Viewport Layout with Full Coverage */
        .aeo-hero {
          background: radial-gradient(circle at 65% 25%, #182e49 0%, #09121d 80%);
          color: #fff;
          padding: 68px 0 76px;
          min-height: calc(100vh - 66px + 36px);
          display: flex;
          align-items: center;
          position: relative;
          border-bottom: 1px solid var(--navy-700);
        }

        .aeo-hero-grid {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 36px;
          align-items: center;
        }

        .aeo-hero-left {
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .aeo-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 12px;
          background: rgba(255, 107, 53, 0.12);
          border: 1px solid rgba(255, 107, 53, 0.35);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          color: var(--sunrise-300);
          letter-spacing: 0.04em;
          margin-bottom: 14px;
        }

        .aeo-hero-title {
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 800;
          line-height: 1.1;
          color: #ffffff;
          letter-spacing: -0.03em;
          margin: 0 0 12px;
        }

        .aeo-hero-subheading {
          font-size: clamp(16px, 1.8vw, 21px);
          font-weight: 600;
          line-height: 1.3;
          color: var(--ice-300);
          margin: 0 0 16px;
          max-width: 580px;
        }

        .aeo-hero-body-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 22px;
          max-width: 580px;
        }

        .aeo-hero-body {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--navy-200);
          margin: 0;
        }

        .aeo-hero-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .aeo-btn-glow {
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.45);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          padding: 10px 22px;
          font-size: 14.5px;
        }

        .aeo-btn-subtle {
          color: #ffffff;
          border-color: var(--navy-500);
          padding: 10px 20px;
          font-size: 14.5px;
        }
        .aeo-btn-subtle:hover {
          border-color: var(--ice-300);
          color: var(--ice-300);
        }

        .aeo-hero-bullets {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .aeo-bullet-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--navy-200);
          font-weight: 500;
        }

        .aeo-check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(255, 107, 53, 0.2);
          color: var(--sunrise);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .aeo-hero-right {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        /* Terminal simulation */
        .aeo-engine-terminal {
          width: 100%;
          max-width: 560px;
          background: rgba(13, 23, 37, 0.94);
          backdrop-filter: blur(14px);
          border: 1px solid var(--navy-600);
          border-radius: 14px;
          text-align: left;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 182, 245, 0.1);
          overflow: hidden;
        }

        .aeo-terminal-bar {
          background: #09101a;
          padding: 9px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--navy-700);
        }

        .aeo-terminal-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .dot-red { background: #ff5f56; }
        .dot-amber { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .aeo-terminal-title {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          color: var(--navy-300);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 320px;
        }

        .aeo-terminal-pill {
          font-size: 10px;
          padding: 2px 7px;
          border-radius: 999px;
          background: rgba(56, 182, 245, 0.15);
          color: var(--ice-300);
          border: 1px solid rgba(56, 182, 245, 0.3);
          white-space: nowrap;
        }

        .aeo-terminal-body {
          padding: 16px;
          font-family: var(--font-mono, monospace);
        }

        .aeo-terminal-prompt {
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.04);
          border-left: 3px solid var(--ice);
          border-radius: 6px;
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .prompt-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--ice-300);
          font-weight: 700;
        }

        .prompt-text {
          font-size: 12.5px;
          color: #fff;
          font-style: italic;
          line-height: 1.45;
        }

        .aeo-terminal-ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--sunrise);
          font-size: 11.5px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .aeo-terminal-response {
          font-family: var(--font-sans, sans-serif);
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--navy-100);
          margin: 0 0 14px;
        }

        .aeo-terminal-response strong {
          color: #fff;
          text-decoration: underline;
          text-decoration-color: var(--sunrise);
        }

        .aeo-citation-sources {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          padding-top: 10px;
          border-top: 1px solid var(--navy-700);
        }

        .sources-label {
          font-size: 11px;
          color: var(--navy-300);
          font-weight: 600;
        }

        .source-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--navy-600);
          border-radius: 4px;
          padding: 2px 7px;
          color: var(--navy-200);
        }

        .source-chip.active-chip {
          background: rgba(255, 107, 53, 0.15);
          border-color: rgba(255, 107, 53, 0.4);
          color: var(--sunrise-300);
          font-weight: 600;
        }

        .chip-index {
          width: 13px;
          height: 13px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 8.5px;
        }

        @media (max-width: 992px) {
          .aeo-hero {
            min-height: auto;
            padding: 50px 0 40px;
          }
          .aeo-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .aeo-hero-left {
            align-items: center;
            text-align: center;
          }
          .aeo-hero-body-wrap {
            max-width: 100%;
          }
          .aeo-hero-bullets {
            align-items: center;
          }
        }

        /* Generic Section Styling with Reduced Padding & Margins */
        .aeo-section {
          padding: 44px 0 48px;
          position: relative;
        }

        #snapshot.aeo-section {
          padding-top: 28px;
        }

        .bg-snow { background: var(--snow); }
        .bg-elevated { background: #ffffff; }
        .bg-navy { background: #0b1522; }

        .aeo-section-header {
          max-width: 780px;
          margin: 0 auto 30px;
        }

        .aeo-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--sunrise);
          margin-bottom: 8px;
        }

        .aeo-h2 {
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--summit);
          margin: 0 0 12px;
        }

        .aeo-lead {
          font-size: 16px;
          line-height: 1.55;
          color: var(--fg2);
          margin: 0;
        }

        /* High-Contrast Light Colors for Dark Engine Section */
        .bg-navy .aeo-h2 {
          color: #ffffff !important;
        }

        .bg-navy .aeo-lead {
          color: #D1D9E2 !important;
        }

        .bg-navy .aeo-eyebrow {
          color: var(--sunrise-300) !important;
        }

        /* AI Visibility Snapshot */
        .aeo-snapshot-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }

        .aeo-snapshot-card {
          background: #fff;
          border: 1px solid var(--border-strong);
          border-radius: 12px;
          padding: 24px;
          box-shadow: var(--shadow-1);
          transition: transform 170ms ease, box-shadow 170ms ease, border-color 170ms ease;
        }

        .aeo-snapshot-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-2);
          border-color: var(--sunrise-300);
        }

        .aeo-card-pill {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: var(--frost);
          color: var(--ice-700);
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 14px;
        }

        .aeo-snapshot-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--summit);
          margin: 0 0 10px;
        }

        .aeo-snapshot-desc {
          font-size: 14px;
          line-height: 1.55;
          color: var(--fg2);
          margin: 0;
        }

        /* Side-by-side Pull Quote & Context Insight Duo */
        .aeo-snapshot-duo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: stretch;
        }

        .aeo-duo-quote-card {
          background: linear-gradient(135deg, #0e1a2b 0%, #15273d 100%);
          border-radius: 14px;
          padding: 32px 30px;
          color: #fff;
          position: relative;
          border: 1px solid var(--navy-600);
          box-shadow: 0 12px 30px rgba(14, 26, 43, 0.25);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
        }

        .aeo-duo-card-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(255, 107, 53, 0.2);
          color: var(--sunrise-300);
          border: 1px solid rgba(255, 107, 53, 0.35);
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .aeo-quote-icon {
          color: var(--sunrise);
          margin-bottom: 12px;
        }

        .aeo-quote-text {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 700;
          font-style: italic;
          color: #ffffff;
          line-height: 1.3;
          margin: 0;
        }

        .aeo-duo-context-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 32px 30px;
          border: 1px solid var(--border-strong);
          box-shadow: var(--shadow-1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
          transition: border-color 170ms ease, box-shadow 170ms ease;
        }

        .aeo-duo-context-card:hover {
          border-color: var(--sunrise-300);
          box-shadow: var(--shadow-2);
        }

        .aeo-duo-card-badge-accent {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: var(--frost);
          color: var(--ice-700);
          border: 1px solid rgba(56, 182, 245, 0.3);
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 12px;
        }

        .aeo-duo-heading {
          font-size: 19px;
          font-weight: 800;
          color: var(--summit);
          margin: 0 0 12px;
          line-height: 1.25;
        }

        .aeo-duo-text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--fg2);
          margin: 0;
        }

        @media (max-width: 860px) {
          .aeo-snapshot-duo-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .aeo-duo-quote-card,
          .aeo-duo-context-card {
            padding: 24px 20px;
          }
        }

        /* ================= Core Services Horizontal Slider (Connected System) ================= */
        .aeo-connected-system-section {
          padding: 68px 0 76px;
          background: var(--bg-elevated, #F8FAFC);
          position: relative;
          overflow: hidden;
        }

        .aeo-services-split-wrap {
          display: grid;
          grid-template-columns: 410px 1fr;
          gap: 52px;
          align-items: center;
          position: relative;
        }

        .aeo-services-left-col {
          text-align: left;
          z-index: 2;
        }

        .aeo-services-h2 {
          margin: 0 0 16px;
        }

        .aeo-services-lead {
          margin: 0 0 28px;
        }

        .aeo-slider-controls {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .aeo-slider-nav-btns {
          display: flex;
          gap: 8px;
        }

        .aeo-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid var(--border-strong);
          background: #ffffff;
          color: var(--summit);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 170ms ease;
        }

        .aeo-nav-btn:hover {
          background: var(--sunrise);
          border-color: var(--sunrise);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .aeo-slider-counter {
          font-family: var(--font-mono, monospace);
          font-size: 14px;
          font-weight: 700;
          color: var(--fg2);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .aeo-slider-counter .count-active {
          color: var(--sunrise);
          font-size: 16px;
        }

        .aeo-slider-dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .aeo-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--border-strong);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .aeo-dot.active {
          width: 26px;
          background: var(--sunrise);
        }

        .aeo-slider-hint {
          font-size: 12.5px;
          color: var(--fg3);
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .aeo-services-slider-container {
          overflow: hidden;
          width: 100%;
          padding: 24px 8px 32px;
          position: relative;
          cursor: grab;
          touch-action: pan-y;
        }

        .aeo-services-slider-container:active {
          cursor: grabbing;
        }

        .aeo-services-motion-track {
          display: flex;
          gap: 28px;
          width: max-content;
          will-change: transform;
          user-select: none;
        }

        .aeo-service-slide-card {
          flex: 0 0 350px;
          width: 350px;
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: 16px;
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-1);
          cursor: pointer;
          min-height: 310px;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }

        .aeo-service-slide-card.is-selected {
          border-color: var(--sunrise);
          box-shadow: 0 16px 36px -8px rgba(255, 107, 53, 0.2);
        }

        .aeo-service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .aeo-service-num {
          font-family: var(--font-mono, monospace);
          font-size: 14px;
          font-weight: 700;
          color: var(--fg3);
        }

        .aeo-service-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--frost);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .aeo-service-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--summit);
          margin: 0 0 12px;
          line-height: 1.25;
        }

        .aeo-service-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--fg2);
          margin: 0 0 20px;
        }

        .aeo-service-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid var(--border-light, #edf2f7);
        }

        .aeo-service-status-pill {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--fg3);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .aeo-service-status-pill.active {
          color: var(--sunrise);
          font-weight: 700;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--sunrise);
          box-shadow: 0 0 6px rgba(255, 107, 53, 0.8);
          display: inline-block;
        }

        .aeo-service-arrow {
          color: var(--fg3);
          transition: transform 180ms ease, color 180ms ease;
        }

        .aeo-service-slide-card:hover .aeo-service-arrow,
        .aeo-service-slide-card.is-selected .aeo-service-arrow {
          color: var(--sunrise);
          transform: translateX(4px);
        }

        @media (max-width: 960px) {
          .aeo-services-split-wrap {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .aeo-services-slider-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          .aeo-service-slide-card {
            flex: 0 0 300px;
            width: 300px;
          }
        }

        /* ================= Platforms Grid (4 Square-Sized Cards in a Single Horizontal Row) ================= */
        .aeo-platforms-wrap {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 0 32px;
          box-sizing: border-box;
        }

        .aeo-platforms-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .aeo-platform-card {
          border: 1px solid;
          border-radius: 18px;
          padding: 24px 22px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          cursor: pointer;
          aspect-ratio: 1 / 1;
          min-height: 300px;
          box-sizing: border-box;
          overflow: hidden;
          transition: transform 260ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 260ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 260ms ease,
                      background 260ms ease;
        }

        .aeo-platform-card:hover,
        .aeo-platform-card.active-hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
        }

        .aeo-platform-card-main {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .aeo-platform-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }

        .aeo-platform-title {
          font-size: 19px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 3px;
          line-height: 1.25;
        }

        .aeo-platform-engine {
          font-size: 11.5px;
          font-family: var(--font-mono, monospace);
          font-weight: 500;
          line-height: 1.3;
          display: block;
        }

        .aeo-platform-chip {
          font-size: 10.5px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .aeo-platform-desc {
          font-size: 13.5px;
          line-height: 1.48;
          color: #94A3B8;
          margin: 0;
        }

        .aeo-platform-card-footer {
          position: relative;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          min-height: 28px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: border-color 240ms ease;
        }

        .aeo-platform-hover-hint {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          font-size: 11.5px;
          color: #64748B;
          font-weight: 500;
          transition: opacity 200ms ease, transform 200ms ease;
        }

        /* Hover Reveal Bullets */
        .aeo-platform-bullets {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(8px);
          transition: all 260ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .aeo-platform-card:hover .aeo-platform-card-footer,
        .aeo-platform-card.active-hover .aeo-platform-card-footer {
          border-top-color: rgba(255, 255, 255, 0.16);
        }

        .aeo-platform-card:hover .aeo-platform-hover-hint,
        .aeo-platform-card:focus-within .aeo-platform-hover-hint,
        .aeo-platform-card.active-hover .aeo-platform-hover-hint {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          pointer-events: none;
          display: none;
        }

        .aeo-platform-card:hover .aeo-platform-bullets,
        .aeo-platform-card:focus-within .aeo-platform-bullets,
        .aeo-platform-card.active-hover .aeo-platform-bullets {
          max-height: 120px;
          opacity: 1;
          transform: translateY(0);
        }

        .aeo-platform-bullet {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #F1F5F9;
          font-weight: 500;
          line-height: 1.35;
        }

        @media (max-width: 1080px) {
          .aeo-platforms-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 600px) {
          .aeo-platforms-grid {
            grid-template-columns: 1fr !important;
          }
          .aeo-platform-card {
            aspect-ratio: auto !important;
            min-height: auto !important;
          }
        }

        /* ================= Animated 4-Step Framework Timeline ================= */
        .aeo-timeline-controls {
          display: flex;
          justify-content: center;
          margin-top: 14px;
        }

        .aeo-timeline-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid var(--border-strong);
          font-size: 12px;
          font-weight: 600;
          color: var(--fg2);
          cursor: pointer;
          transition: all 170ms ease;
          box-shadow: var(--shadow-1);
        }

        .aeo-timeline-play-btn:hover {
          border-color: var(--sunrise);
          color: var(--sunrise);
          box-shadow: var(--shadow-2);
        }

        .aeo-timeline-bar-wrapper {
          max-width: 1000px;
          margin: 24px auto 36px;
          position: relative;
          padding: 10px 40px;
        }

        .aeo-timeline-bar-bg {
          height: 4px;
          background: rgba(14, 26, 43, 0.1);
          border-radius: 999px;
          position: relative;
        }

        .aeo-timeline-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--sunrise) 0%, var(--sunrise-300) 100%);
          border-radius: 999px;
          transition: width 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .aeo-timeline-plane-cursor {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--sunrise);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(255, 107, 53, 0.45);
          transition: left 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 2;
        }

        .aeo-plane-icon {
          transform: rotate(45deg);
        }

        .aeo-steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-bottom: 56px;
        }

        .aeo-step-card {
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: 14px;
          padding: 28px 24px;
          box-shadow: var(--shadow-1);
          transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: relative;
          opacity: 0.72;
          transform: scale(0.98);
        }

        .aeo-step-card:hover {
          opacity: 0.95;
          transform: scale(1);
          border-color: var(--sunrise-300);
        }

        .aeo-step-card.active-step {
          opacity: 1;
          transform: translateY(-6px) scale(1.02);
          border-color: var(--sunrise);
          border-width: 2px;
          box-shadow: 0 16px 36px rgba(255, 107, 53, 0.2);
        }

        .aeo-step-indicator {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .aeo-step-badge {
          background: var(--summit);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 999px;
          transition: all 250ms ease;
        }

        .aeo-step-card.active-step .aeo-step-badge {
          background: var(--sunrise);
          box-shadow: 0 0 12px rgba(255, 107, 53, 0.5);
        }

        .aeo-step-line {
          flex: 1;
          height: 2px;
          background: var(--border);
          position: relative;
          border-radius: 2px;
          overflow: hidden;
        }

        .aeo-step-line-fill {
          height: 100%;
          background: var(--sunrise);
          transition: width 400ms ease;
        }

        .aeo-step-title {
          font-size: 19px;
          font-weight: 700;
          color: var(--summit);
          margin: 0 0 10px;
        }

        .aeo-step-desc-wrap {
          flex-grow: 1;
        }

        .aeo-step-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--fg2);
          margin: 0;
        }

        .aeo-step-active-indicator {
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--sunrise);
        }

        .dot-live {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--sunrise);
          box-shadow: 0 0 8px var(--sunrise);
          animation: pulse-dot 1.8s infinite;
        }

        @keyframes pulse-dot {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255, 107, 53, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 107, 53, 0); }
        }

        /* Metrics Box */
        .aeo-metrics-wrapper {
          background: #fff;
          border: 1px solid var(--border-strong);
          border-radius: 14px;
          padding: 32px;
          box-shadow: var(--shadow-1);
        }

        .aeo-metrics-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }

        .aeo-metrics-heading {
          font-size: 18px;
          font-weight: 700;
          color: var(--summit);
          margin: 0;
        }

        .aeo-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .aeo-metric-card {
          background: var(--snow);
          border-radius: 10px;
          padding: 18px;
          border: 1px solid var(--border);
        }

        .aeo-metric-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          color: var(--summit);
          margin-bottom: 8px;
        }

        .aeo-metric-dot {
          width: 8px;
          height: 8px;
          background: var(--sunrise);
          border-radius: 50%;
        }

        .aeo-metric-desc {
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--fg2);
          margin: 0;
        }

        /* Why Clients Choose */
        .aeo-why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .aeo-why-card {
          background: #fff;
          border: 1px solid var(--border-strong);
          border-radius: 14px;
          padding: 30px;
          box-shadow: var(--shadow-1);
          transition: border-color 170ms ease, transform 170ms ease;
        }

        .aeo-why-card:hover {
          border-color: var(--sunrise);
          transform: translateY(-3px);
        }

        .aeo-why-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255, 107, 53, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .aeo-why-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--summit);
          line-height: 1.3;
          margin: 0 0 12px;
        }

        .aeo-why-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--fg2);
          margin: 0;
        }

        /* Proof Section */
        .aeo-proof-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          margin-bottom: 40px;
        }

        .aeo-proof-card {
          background: #fff;
          border: 1px solid var(--border-strong);
          border-radius: 14px;
          padding: 32px;
          box-shadow: var(--shadow-1);
        }

        .aeo-proof-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--frost);
          color: var(--ice-700);
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .aeo-proof-title {
          font-size: 21px;
          font-weight: 700;
          color: var(--summit);
          margin: 0 0 12px;
        }

        .aeo-proof-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--fg2);
          margin: 0 0 24px;
        }

        .aeo-outcomes-heading {
          display: block;
          font-size: 12.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--summit);
          margin-bottom: 12px;
        }

        .aeo-outcomes-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .aeo-outcome-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--fg1);
          font-weight: 500;
        }

        /* Testimonial Card */
        .aeo-testimonial-card {
          max-width: 820px;
          margin: 0 auto;
          background: linear-gradient(135deg, #0e1a2b 0%, #172a42 100%);
          border: 1px solid var(--navy-600);
          border-radius: 16px;
          padding: 36px 40px;
          color: #fff;
          text-align: center;
          box-shadow: var(--shadow-pop);
          position: relative;
        }

        .aeo-testimonial-tag {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--sunrise);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 12px;
          border-radius: 999px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .aeo-test-quote-icon {
          margin: 10px auto 16px;
        }

        .aeo-testimonial-quote {
          font-size: clamp(17px, 2.4vw, 22px);
          line-height: 1.5;
          font-style: italic;
          color: #ffffff;
          margin: 0 0 24px;
        }

        .aeo-testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .aeo-avatar-placeholder {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--sunrise);
          color: #fff;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .aeo-testimonial-author div {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .aeo-testimonial-author strong {
          font-size: 15px;
          color: #fff;
        }

        .aeo-testimonial-author span {
          font-size: 13px;
          color: var(--navy-300);
        }

        /* FAQ Section */
        .aeo-faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .aeo-faq-item {
          background: #fff;
          border: 1px solid var(--border-strong);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 170ms ease, box-shadow 170ms ease;
        }

        .aeo-faq-item.open {
          border-color: var(--sunrise);
          box-shadow: var(--shadow-1);
        }

        .aeo-faq-btn {
          width: 100%;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
        }

        .aeo-faq-question {
          font-size: 17px;
          font-weight: 700;
          color: var(--summit);
          line-height: 1.35;
        }

        .aeo-faq-chevron {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--fg2);
          transition: transform 170ms ease;
        }

        .aeo-faq-chevron.rotated {
          transform: rotate(180deg);
          color: var(--sunrise);
        }

        .aeo-faq-answer {
          padding: 0 24px 20px;
          border-top: 1px solid var(--border);
          margin-top: -4px;
          padding-top: 16px;
        }

        .aeo-faq-answer p {
          font-size: 15px;
          line-height: 1.65;
          color: var(--fg2);
          margin: 0;
        }

        /* Closing CTA Section */
        .aeo-cta-section {
          background: var(--snow);
          padding: 48px 0 64px;
        }

        .aeo-cta-box {
          max-width: 920px;
          margin: 0 auto;
          background: radial-gradient(circle at 50% 0%, #15273d 0%, #0a1320 100%);
          border-radius: 20px;
          padding: 44px 36px;
          color: #fff;
          text-align: center;
          border: 1px solid var(--navy-600);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          position: relative;
          overflow: hidden;
        }

        .aeo-cta-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--sunrise-300);
          margin-bottom: 16px;
        }

        .aeo-cta-heading {
          font-size: clamp(28px, 4.2vw, 44px);
          font-weight: 800;
          line-height: 1.15;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
          max-width: 780px;
          margin-left: auto;
          margin-right: auto;
        }

        .aeo-cta-lead {
          font-size: 16.5px;
          line-height: 1.6;
          color: var(--navy-200);
          max-width: 700px;
          margin: 0 auto 36px;
        }

        .aeo-cta-btn-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .aeo-cta-btn {
          font-size: 16px;
          padding: 14px 28px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .aeo-cta-ghost {
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.32) !important;
          background: rgba(255, 255, 255, 0.08) !important;
          transition: all 170ms ease;
        }

        .aeo-cta-ghost:hover {
          background: rgba(255, 255, 255, 0.18) !important;
          border-color: #ffffff !important;
          color: #ffffff !important;
          transform: translateY(-1px);
        }

        .aeo-cta-subtext {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          font-size: 13px;
          color: var(--navy-300);
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .aeo-hero {
            padding: 70px 0 50px;
          }
          .aeo-hero-bullets {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }
          .aeo-cta-box {
            padding: 40px 24px;
          }
          .aeo-pullquote-box {
            padding: 24px 20px;
          }
        }
      `}</style>
    </div>
  );
}
