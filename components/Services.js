import { Radar, FileText, Megaphone, Workflow, Layout, LineChart, Check } from 'lucide-react';

const SERVICES = [
  { 
    icon: Radar, 
    t: "AI Visibility", 
    d: "Make your brand discoverable across Google, ChatGPT, Perplexity, Gemini, and AI-assisted search experiences.",
    bullets: ["SEO, AEO, and GEO strategy", "Topic clusters and entity-focused content planning", "AI citation and answer-surface optimization", "On-page improvements for trust, clarity, and relevance"]
  },
  { 
    icon: FileText, 
    t: "Content That Compounds", 
    d: "Create expert-led content that ranks, earns trust, and supports every stage of the funnel.",
    bullets: ["Website copy and landing pages", "Thought leadership and founder-led content", "Blog strategy and content production", "Case studies, use cases, and comparison pages"]
  },
  { 
    icon: Megaphone, 
    t: "Performance Marketing", 
    d: "Launch lean campaigns designed to generate measurable demand without wasting budget.",
    bullets: ["Google Ads and paid search", "LinkedIn campaigns for B2B growth", "Retargeting and funnel-stage messaging", "Ad creative and landing page alignment"]
  },
  { 
    icon: Workflow, 
    t: "Automation & Lifecycle", 
    d: "Turn one-time traffic into repeatable pipeline with smarter follow-up systems.",
    bullets: ["Lead capture and CRM flows", "Email nurture and lifecycle journeys", "Automated follow-ups and segmentation", "Marketing operations and workflow design"]
  },
  { 
    icon: Layout, 
    t: "Conversion & Web Experience", 
    d: "Improve the pages and journeys that turn interest into action.",
    bullets: ["Homepage and service page messaging", "Landing page strategy", "UX and CRO recommendations", "Funnel analysis and conversion fixes"]
  },
  { 
    icon: LineChart, 
    t: "Reporting & Growth Intelligence", 
    d: "Get reporting that helps you decide, not dashboards that look impressive and say nothing.",
    bullets: ["Plain-language reporting", "KPI tracking tied to business goals", "Channel attribution snapshots", "Monthly priorities and growth opportunities"]
  },
];

function ServiceCard({ icon: Icon, t, d, bullets }) {
  return (
    <div className="svc-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="svc-ico"><Icon /></div>
      <div className="svc-t">{t}</div>
      <div className="svc-d" style={{ marginBottom: '24px' }}>{d}</div>
      <div style={{ flex: 1 }}></div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
        {bullets.map((bullet, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px', fontSize: '14px', color: 'var(--fg2)' }}>
            <Check size={14} color="var(--brand)" style={{ flexShrink: 0, marginTop: '3px' }} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Growth System</span>
          <h2 className="sec-title">A full-stack growth system for modern digital marketing</h2>
          <p className="sec-lead">We do not sell disconnected tactics. We build a growth engine where each channel strengthens the next.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map(s => <ServiceCard key={s.t} {...s} />)}
        </div>
      </div>
    </section>
  );
}
