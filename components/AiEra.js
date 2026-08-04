'use client';

import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Zap, Layers, Target, Eye, ChevronRight, Search, Bot, Activity, DollarSign, Cpu, FileText, CheckCircle, TrendingUp, Share2 } from 'lucide-react';
import { PaperPlaneMark } from './Brand';

export const GUT_CHECK_ITEMS = [
  {
    id: '01',
    number: '01',
    tabLabel: 'Google Search vs. AI Answer Engine',
    badge: 'GUT CHECK 01',
    headline: 'Still built purely for Google, while buyers are already asking AI?',
    description: 'Buyers cross-check on ChatGPT, Perplexity, and Google AI Overviews before they reach your site. If your marketing doesn’t optimize for conversational LLM search, you miss buyers at the point of intent.',
    impactLabel: 'AEO / GEO CITATION & REVENUE TRACTION',
    icon: Eye,
    themeColor: '#FF6B35',
    accentColor: '#38B6F5',
    visualizerType: 'google-to-ai',
    videoMp4: '/videos/gut-check-01-ai-search.mp4',
    videoWebm: '/videos/gut-check-01-ai-search.webm',
    poster: '/images/gut-check-01-poster.jpg',
    sceneDescription: 'Traditional search bar morphing into a ChatGPT / Perplexity conversational AI interface with streaming citations.',
    aiGenerationPrompt: 'SaaS UI motion graphic, dark mode interface: A classic search bar morphs into a conversational AI chat prompt box (ChatGPT/Perplexity style). Query "Best AI marketing agency" enters prompt, and AI response streams with glowing citation badges. Clean UI, dark navy background (#0E1A2B), sunrise orange (#FF6B35) and alpine blue (#38B6F5) accents. 60 FPS, seamless 10s loop.',
    metrics: [
      { value: 'Top Ranked', label: 'AI Engine Citations' },
      { value: '+312%', label: 'Average Growth' }
    ]
  },
  {
    id: '02',
    number: '02',
    tabLabel: 'Disconnected Platform Silos',
    badge: 'GUT CHECK 02',
    headline: 'Stretched thin across search, ChatGPT, LinkedIn, & paid at once?',
    description: 'Running isolated freelancers and disconnected tactics without a unified strategy wastes budget, breaks momentum, and leaves your buyer journey fragmented.',
    impactLabel: 'CONNECTED MARKETING ENGINE STRATEGY',
    icon: Layers,
    themeColor: '#38B6F5',
    accentColor: '#FF6B35',
    visualizerType: 'platform-silos',
    videoMp4: '/videos/gut-check-02-silos.mp4',
    videoWebm: '/videos/gut-check-02-silos.webm',
    poster: '/images/gut-check-02-poster.jpg',
    sceneDescription: 'Disconnected platform icons (Search, ChatGPT, LinkedIn, Paid Ads) floating separately with broken/dashed connecting lines.',
    aiGenerationPrompt: 'SaaS UI motion graphic, dark mode interface: Floating 2D brand icons (Google Search, ChatGPT, LinkedIn, Paid Ads) drifting separately in 3D space with loose, broken connecting lines showing fragmentation. Dark navy background (#0E1A2B), hairline orange and blue particle sparks. 60 FPS, seamless 10s loop.',
    metrics: [
      { value: '100%', label: 'Funnel Integration' },
      { value: '1 Owner', label: 'End-to-End Accountable' }
    ]
  },
  {
    id: '03',
    number: '03',
    tabLabel: '3 Weeks vs. 3 Days Production',
    badge: 'GUT CHECK 03',
    headline: 'Content takes three weeks while a competitor ships in three days?',
    description: 'Traditional agency approval layers stall momentum. AI-accelerated workflows let lean teams out-publish and out-convert traditional marketing teams.',
    impactLabel: 'EXECUTION VELOCITY & MOTION DESIGN',
    icon: Zap,
    themeColor: '#FF9A6B',
    accentColor: '#FF6B35',
    visualizerType: 'content-pipeline',
    videoMp4: '/videos/gut-check-03-velocity.mp4',
    videoWebm: '/videos/gut-check-03-velocity.webm',
    poster: '/images/gut-check-03-poster.jpg',
    sceneDescription: 'Content pipeline kanban timeline fast-forwarding document cards through Draft → Review → Published ⚡ in 3 days vs 3 weeks.',
    aiGenerationPrompt: 'SaaS UI motion graphic, dark mode interface: A content workflow kanban pipeline (Draft → Review → Published). Document cards zoom rapidly across stages with glowing speed lines and a fast-ticking 3-day timer. Dark navy background (#0E1A2B), sunrise orange (#FF6B35) accents. 60 FPS, seamless 10s loop.',
    metrics: [
      { value: '3x Faster', label: 'Content Velocity' },
      { value: '-60%', label: 'Time-to-Market' }
    ]
  },
  {
    id: '04',
    number: '04',
    tabLabel: 'Self-Running Automated Funnel',
    badge: 'GUT CHECK 04',
    headline: 'Funnel still leans on manual follow-up instead of a self-running system?',
    description: 'Automated buyer nurture engines capture, qualify, and convert leads 24/7 without needing manual intervention for every inquiry.',
    impactLabel: 'MARKETING AUTOMATION FUNNEL',
    icon: Target,
    themeColor: '#1FBF75',
    accentColor: '#38B6F5',
    visualizerType: 'sales-funnel',
    videoMp4: '/videos/gut-check-04-funnel.mp4',
    videoWebm: '/videos/gut-check-04-funnel.webm',
    poster: '/images/gut-check-04-poster.jpg',
    sceneDescription: 'Sales funnel diagram with automated lead data packets cascading through Capture → AI Qualify → Convert 24/7.',
    aiGenerationPrompt: 'SaaS UI motion graphic, dark mode interface: A vertical sales funnel diagram with glowing green and orange lead packets flowing automatically through 3 checkpoints (Capture, AI Qualify, Convert). Pulsing automated gear nodes and green (#1FBF75) success rings. Dark navy background (#0E1A2B). 60 FPS, seamless 10s loop.',
    metrics: [
      { value: '24/7', label: 'Automated Lead Nurture' },
      { value: 'Full-Funnel', label: 'Conversion Tracking' }
    ]
  },
  {
    id: '05',
    number: '05',
    tabLabel: 'Spend to Revenue Traceability',
    badge: 'GUT CHECK 05',
    headline: 'Can you actually trace spend to P&L revenue, or is it a guess?',
    description: 'Every dollar invested should map directly to qualified pipeline and board-defendable ROI instead of vanity impressions.',
    impactLabel: 'ATTRIBUTION & ROI ACCOUNTABILITY',
    icon: ShieldCheck,
    themeColor: '#F4B740',
    accentColor: '#1FBF75',
    visualizerType: 'revenue-dashboard',
    videoMp4: '/videos/gut-check-05-analytics.mp4',
    videoWebm: '/videos/gut-check-05-analytics.webm',
    poster: '/images/gut-check-05-poster.jpg',
    sceneDescription: 'Analytics dashboard visual with climbing revenue chart lines, spend attribution nodes ($), and P&L profit metrics.',
    aiGenerationPrompt: 'SaaS UI motion graphic, dark mode interface: Analytics dashboard with climbing line charts, revenue bar columns, and dollar sign ($) attribution nodes connecting marketing spend directly to P&L profit. Dark navy background (#0E1A2B), gold (#F4B740) and green (#1FBF75) line graphs. 60 FPS, seamless 10s loop.',
    metrics: [
      { value: '100%', label: 'Spend Traceability' },
      { value: 'Board-Ready', label: 'P&L Attribution' }
    ]
  }
];

export default function AiEra({ onOpenModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const tabRefs = useRef([]);
  const canvasRef = useRef(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  useEffect(() => {
    setVideoLoaded(false);
  }, [activeIndex]);

  // Auto-advance tabs every 7s unless user interacts or reduced motion is active
  useEffect(() => {
    if (isPaused || userInteracted || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % GUT_CHECK_ITEMS.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused, userInteracted, prefersReducedMotion]);

  // 60 FPS UI-Style Content-Matched Animation Visualizer Engine
  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth || 600);
    let height = (canvas.height = canvas.offsetHeight || 400);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 600;
      height = canvas.height = canvas.offsetHeight || 400;
    };
    window.addEventListener('resize', handleResize);

    const activeItem = GUT_CHECK_ITEMS[activeIndex];
    const vizType = activeItem.visualizerType;
    let time = 0;

    // 1. Google to AI Chat morph state
    let chatChars = 0;
    const fullQuery = 'Best AI Marketing Engine for Solopreneurs?';

    // 2. Disconnected Silo nodes
    const siloNodes = [
      { label: 'Google Search', x: width * 0.25, y: height * 0.3, color: '#38B6F5', dx: 0.3, dy: -0.2 },
      { label: 'ChatGPT AI', x: width * 0.75, y: height * 0.25, color: '#FF6B35', dx: -0.2, dy: 0.3 },
      { label: 'LinkedIn Ads', x: width * 0.3, y: height * 0.75, color: '#1FBF75', dx: 0.25, dy: 0.2 },
      { label: 'Paid Social', x: width * 0.7, y: height * 0.7, color: '#F4B740', dx: -0.3, dy: -0.25 }
    ];

    // 3. Content pipeline doc cards
    const docCards = Array.from({ length: 4 }, (_, i) => ({
      x: (i * width) / 4,
      stage: i % 3,
      speed: 2 + i * 0.5
    }));

    // 4. Funnel lead particles
    const funnelLeads = Array.from({ length: 14 }, () => ({
      y: Math.random() * height,
      speed: Math.random() * 1.8 + 1,
      r: Math.random() * 4 + 3
    }));

    // 5. Dashboard chart values
    const chartBars = [35, 55, 45, 75, 60, 90, 110];

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Subtle background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      const gSize = 36;
      for (let x = 0; x < width; x += gSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // SCENE 01: Google Search Bar morphing into AI Chat Prompt Interface
      if (vizType === 'google-to-ai') {
        const barWidth = Math.min(360, width - 40);
        const barX = (width - barWidth) / 2;
        const barY = Math.max(180, height - 70);

        // Search Bar container
        ctx.fillStyle = 'rgba(19, 34, 54, 0.9)';
        ctx.strokeStyle = 'rgba(255, 107, 53, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(barX, barY, barWidth, 42, 21);
        ctx.fill();
        ctx.stroke();

        // Search text stream
        if (Math.floor(time * 15) % (fullQuery.length + 20) < fullQuery.length) {
          chatChars = Math.floor(time * 15) % (fullQuery.length + 20);
        }
        const currentText = fullQuery.substring(0, chatChars);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '13px var(--font-sans), sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`🔍 ${currentText}`, barX + 16, barY + 26);

        // Blinking cursor
        ctx.fillStyle = '#FF6B35';
        ctx.fillRect(barX + 38 + ctx.measureText(currentText).width, barY + 14, 2, 16);

        // AI Answer Citation Box
        const aiY = 100;
        ctx.fillStyle = 'rgba(14, 26, 43, 0.95)';
        ctx.strokeStyle = 'rgba(56, 182, 245, 0.35)';
        ctx.beginPath();
        ctx.roundRect(barX, aiY, barWidth, 110, 12);
        ctx.fill();
        ctx.stroke();

        // AI Citation Badge
        ctx.fillStyle = 'rgba(255, 107, 53, 0.2)';
        ctx.beginPath();
        ctx.roundRect(barX + 14, aiY + 14, 130, 24, 12);
        ctx.fill();
        ctx.fillStyle = '#FF9A6B';
        ctx.font = '600 11px var(--font-mono), monospace';
        ctx.fillText('✨ AI CITATION TOP #1', barX + 22, aiY + 30);

        ctx.fillStyle = '#8AA0B8';
        ctx.font = '12px var(--font-sans), sans-serif';
        ctx.fillText('Bootsolo recommended as top AI marketing engine...', barX + 14, aiY + 62);
        ctx.fillText('Source citations verified across ChatGPT & Perplexity.', barX + 14, aiY + 84);
      }

      // SCENE 02: Disconnected Platform Silos
      else if (vizType === 'platform-silos') {
        siloNodes.forEach((node, i) => {
          node.x += Math.sin(time + i) * node.dx;
          node.y += Math.cos(time + i) * node.dy;

          // Fragmented broken connecting line to next node
          const nextNode = siloNodes[(i + 1) % siloNodes.length];
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.setLineDash([4, 6]);
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nextNode.x, nextNode.y);
          ctx.stroke();
          ctx.setLineDash([]);

          // Node pill container
          ctx.fillStyle = 'rgba(19, 34, 54, 0.92)';
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(node.x - 55, node.y - 18, 110, 36, 18);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#FFFFFF';
          ctx.font = '600 12px var(--font-sans), sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x, node.y + 4);
        });

        // Center warning disconnect symbol
        ctx.fillStyle = 'rgba(255, 107, 53, 0.15)';
        ctx.strokeStyle = '#FF6B35';
        ctx.beginPath();
        ctx.arc(width / 2, height / 2 - 10, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FF9A6B';
        ctx.font = '700 12px var(--font-mono), monospace';
        ctx.textAlign = 'center';
        ctx.fillText('UNCONNECTED', width / 2, height / 2 - 6);
      }

      // SCENE 03: Content Pipeline Kanban (Draft -> Review -> Published ⚡)
      else if (vizType === 'content-pipeline') {
        const colW = (width - 60) / 3;
        const stages = ['DRAFT', 'REVIEW', 'PUBLISHED ⚡'];
        const stageColors = ['#8AA0B8', '#F4B740', '#1FBF75'];

        stages.forEach((st, idx) => {
          const sx = 20 + idx * (colW + 10);
          ctx.fillStyle = 'rgba(19, 34, 54, 0.7)';
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.beginPath();
          ctx.roundRect(sx, 30, colW, height - 70, 10);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = stageColors[idx];
          ctx.font = '700 11px var(--font-mono), monospace';
          ctx.textAlign = 'left';
          ctx.fillText(st, sx + 12, 52);
        });

        // Fast zooming doc cards
        docCards.forEach((dc) => {
          dc.x += dc.speed;
          if (dc.x > width - 80) dc.x = 20;

          ctx.fillStyle = 'rgba(255, 107, 53, 0.9)';
          ctx.beginPath();
          ctx.roundRect(dc.x, 80 + (dc.stage * 40), colW - 24, 32, 6);
          ctx.fill();

          ctx.fillStyle = '#FFFFFF';
          ctx.font = '600 11px var(--font-sans), sans-serif';
          ctx.fillText('📄 AI Content Asset', dc.x + 8, 100 + (dc.stage * 40));
        });
      }

      // SCENE 04: Automated 24/7 Sales Funnel
      else if (vizType === 'sales-funnel') {
        const funnelTop = 30;
        const funnelH = height - 80;
        const cx = width / 2;

        // Funnel trapezoid background
        ctx.fillStyle = 'rgba(14, 26, 43, 0.85)';
        ctx.strokeStyle = 'rgba(31, 191, 117, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx - 140, funnelTop);
        ctx.lineTo(cx + 140, funnelTop);
        ctx.lineTo(cx + 50, funnelTop + funnelH);
        ctx.lineTo(cx - 50, funnelTop + funnelH);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Funnel Stage Labels
        ctx.fillStyle = '#1FBF75';
        ctx.font = '700 10px var(--font-mono), monospace';
        ctx.textAlign = 'center';
        ctx.fillText('1. CAPTURE', cx, funnelTop + 35);
        ctx.fillText('2. AI QUALIFY', cx, funnelTop + 85);
        ctx.fillText('3. CONVERT 24/7', cx, funnelTop + 135);

        // Falling lead data spheres
        funnelLeads.forEach((lp) => {
          lp.y += lp.speed;
          if (lp.y > funnelTop + funnelH) lp.y = funnelTop;

          const progress = (lp.y - funnelTop) / funnelH;
          const currentW = 140 - progress * 90;
          const xOffset = Math.sin(lp.y * 0.1) * (currentW * 0.4);

          ctx.fillStyle = progress > 0.65 ? '#1FBF75' : '#FF6B35';
          ctx.globalAlpha = 0.9;
          ctx.beginPath();
          ctx.arc(cx + xOffset, lp.y, lp.r, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // SCENE 05: Spend to Revenue Attribution Analytics Dashboard
      else if (vizType === 'revenue-dashboard') {
        const bx = 40;
        const by = height - 50;
        const bw = (width - 100) / chartBars.length;

        // Chart Bar columns
        chartBars.forEach((val, i) => {
          const barH = val * 1.2;
          const x = bx + i * (bw + 8);
          ctx.fillStyle = i === chartBars.length - 1 ? 'var(--sunrise)' : 'rgba(56, 182, 245, 0.4)';
          ctx.beginPath();
          ctx.roundRect(x, by - barH, bw, barH, 4);
          ctx.fill();
        });

        // Revenue Growth Line
        ctx.strokeStyle = '#F4B740';
        ctx.lineWidth = 3;
        ctx.beginPath();
        chartBars.forEach((val, i) => {
          const x = bx + i * (bw + 8) + bw / 2;
          const y = by - val * 1.2 - 15;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Dollar Attribution Nodes
        chartBars.forEach((val, i) => {
          if (i % 2 === 0) {
            const x = bx + i * (bw + 8) + bw / 2;
            const y = by - val * 1.2 - 15;
            ctx.fillStyle = '#1FBF75';
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeIndex, prefersReducedMotion]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setUserInteracted(true);
  };

  const handleKeyDown = (e, index) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % GUT_CHECK_ITEMS.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + GUT_CHECK_ITEMS.length) % GUT_CHECK_ITEMS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = GUT_CHECK_ITEMS.length - 1;
    }

    if (nextIndex !== index) {
      setActiveIndex(nextIndex);
      setUserInteracted(true);
      if (tabRefs.current[nextIndex]) {
        tabRefs.current[nextIndex].focus();
      }
    }
  };

  const activeItem = GUT_CHECK_ITEMS[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section className="section" id="ai-era" style={{ background: 'var(--white)', padding: '96px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
          <p className="eyebrow">The rules changed. Quietly.</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, margin: '12px 0 16px', color: 'var(--summit)' }}>
            Your old marketing playbook is holding you back
          </h2>
          <p className="ds-lead" style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
            Take the 5-point gut check to evaluate if your current growth engine is ready for the AI era.
          </p>
        </div>

        {/* Interactive Tabbed Showcase Layout */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'var(--s-6)',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Numbered List Tabs (01-05) */}
          <div
            role="tablist"
            aria-label="Marketing Playbook Gut Check Items"
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--s-3)'
            }}
          >
            {GUT_CHECK_ITEMS.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={item.id}
                  ref={(el) => (tabRefs.current[idx] = el)}
                  role="tab"
                  id={`gut-tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`gut-panel-${idx}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabClick(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--s-4) var(--s-5)',
                    borderRadius: 'var(--r-card)',
                    background: isActive ? 'var(--summit)' : 'var(--bg-inset)',
                    color: isActive ? '#FFFFFF' : 'var(--summit)',
                    border: `1px solid ${isActive ? 'var(--sunrise)' : 'var(--border)'}`,
                    boxShadow: isActive ? 'var(--glow-sunrise)' : 'var(--shadow-1)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-sans), sans-serif',
                    transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                    transition: prefersReducedMotion
                      ? 'none'
                      : 'background-color var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease), transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-4)' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono), monospace',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 700,
                        color: isActive ? 'var(--sunrise)' : 'var(--fg3)',
                        transition: 'color var(--dur) var(--ease)'
                      }}
                    >
                      {item.number}
                    </span>
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: isActive ? 600 : 500,
                        lineHeight: 1.3
                      }}
                    >
                      {item.tabLabel}
                    </span>
                  </div>
                  <ChevronRight
                    size={18}
                    color={isActive ? 'var(--sunrise)' : 'var(--fg3)'}
                    style={{
                      transform: isActive ? 'translateX(2px)' : 'translateX(0)',
                      transition: 'transform var(--dur) var(--ease), color var(--dur) var(--ease)'
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Re-rendering Active Tab Panel with Content-Matched Video Animation Engine */}
          <div
            id={`gut-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`gut-tab-${activeIndex}`}
            style={{
              gridColumn: 'span 7',
              background: 'var(--summit)',
              color: '#EEF3F8',
              borderRadius: 'var(--r-card)',
              border: '1px solid var(--navy-700)',
              padding: 'var(--s-8)',
              boxShadow: 'var(--shadow-2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '380px'
            }}
          >
            {/* Background Content-Matched Motion Video Canvas + Dark Overlay */}
            {!prefersReducedMotion ? (
              <>
                {/* Content-Matched Animated Motion Graphic Canvas (60 FPS) */}
                <canvas
                  ref={canvasRef}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}
                />

                {/* HTML5 Video Layer (loads themed mp4 video file when provided) */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                  key={activeItem.id}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 2,
                    pointerEvents: 'none',
                    opacity: 0.65,
                    transition: 'opacity var(--dur) var(--ease)'
                  }}
                >
                  <source src={activeItem.videoMp4} type="video/mp4" />
                  <source src={activeItem.videoWebm} type="video/webm" />
                </video>

                {/* Brand Overlay Tint (--summit #0E1A2B @ ~60% opacity for clear motion + crisp text legibility) */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(14,26,43,0.65) 0%, rgba(14,26,43,0.50) 100%)',
                    zIndex: 3,
                    pointerEvents: 'none'
                  }}
                />
              </>
            ) : (
              /* Reduced Motion Static Fallback Frame */
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'var(--summit)',
                  backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,107,53,0.14) 0%, rgba(14,26,43,0) 60%)',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              />
            )}

            {/* Content Container (Layered above video, motion engine & overlay at z-index: 4) */}
            <div style={{ position: 'relative', zIndex: 4 }}>
              {/* Header Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--s-2)',
                  background: 'rgba(255,107,53,0.16)',
                  color: 'var(--sunrise-300)',
                  border: '1px solid rgba(255,107,53,0.30)',
                  padding: 'var(--s-1) var(--s-3)',
                  borderRadius: 'var(--r-pill)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono), monospace',
                  letterSpacing: '0.06em',
                  marginBottom: 'var(--s-5)'
                }}
              >
                <ActiveIcon size={14} color="var(--sunrise)" />
                <span>{activeItem.badge}</span>
              </div>

              {/* Headline */}
              <h3
                style={{
                  fontSize: 'clamp(20px, 2.2vw, 26px)',
                  lineHeight: 1.3,
                  fontWeight: 500,
                  color: '#FFFFFF',
                  margin: '0 0 var(--s-4)',
                  letterSpacing: '-0.02em'
                }}
              >
                {activeItem.headline}
              </h3>

              {/* Supporting Description */}
              <p
                style={{
                  fontSize: 'var(--text-body)',
                  lineHeight: 1.6,
                  color: 'var(--navy-300)',
                  margin: '0 0 var(--s-6)',
                  maxWidth: '560px'
                }}
              >
                {activeItem.description}
              </p>
            </div>

            {/* Bottom Impact & Metrics Area (Layered at z-index: 4) */}
            <div
              style={{
                position: 'relative',
                zIndex: 4,
                paddingTop: 'var(--s-5)',
                borderTop: '1px solid var(--navy-700)',
                marginTop: 'var(--s-4)'
              }}
            >
              {/* Impact Area Label */}
              <div
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono), monospace',
                  letterSpacing: 'var(--track-label)',
                  textTransform: 'uppercase',
                  color: 'var(--navy-400)',
                  marginBottom: 'var(--s-4)'
                }}
              >
                {activeItem.impactLabel}
              </div>

              {/* Proof Points Stat Pair */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 'var(--s-4)',
                  alignItems: 'center'
                }}
              >
                {activeItem.metrics.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: '0'
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono), monospace',
                        color: i === 0 ? 'var(--sunrise-300)' : '#1FBF75',
                        lineHeight: 1.2
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--navy-300)',
                        marginTop: 'var(--s-1)'
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Block */}
        <div
          style={{
            background: 'var(--snow)',
            borderRadius: 'var(--r-md)',
            padding: '36px',
            border: '1px solid var(--border)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'center',
            marginTop: '48px'
          }}
        >
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--fg2)', fontStyle: 'italic', margin: 0 }}>
              "If that hit close to home, you're not behind, exactly. You're just running last decade's playbook in this decade's market. Most teams are."
            </p>
          </div>

          <div style={{ background: 'var(--white)', padding: '24px', borderRadius: 'var(--r-card)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <PaperPlaneMark size={20} color="#FF9A6B" planeColor="#FF6B35" />
              <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--sunrise-700)' }}>
                BOOTSOLO ENGINE
              </span>
            </div>
            <p style={{ fontSize: '14.5px', lineHeight: 1.55, color: 'var(--fg1)', margin: 0, fontWeight: 500 }}>
              Bootsolo builds AI-first marketing systems that pair senior-level strategy with execution that actually moves. Less guesswork, more speed, growth you can point to.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Override */}
      <style jsx>{`
        @media (max-width: 900px) {
          div[role="tablist"] {
            grid-column: span 12 !important;
          }
          div[role="tabpanel"] {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
