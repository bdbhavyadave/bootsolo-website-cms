import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import { MousePointerClick, Search, LineChart, Magnet } from 'lucide-react'

const FEATURES = [
  { icon: MousePointerClick, title: "Paid Social", desc: "Targeted campaigns to generate awareness and pipeline growth." },
  { icon: Search, title: "Paid Search", desc: "Capture high-intent searches with optimized search network ads." },
  { icon: LineChart, title: "CRO", desc: "Conversion rate optimization to get more out of your existing traffic." },
  { icon: Magnet, title: "Lead Gen", desc: "Outbound and inbound systems to generate MQLs and SQLs." }
];

const PRICING_SOCIAL = [
  {
    name: "Paid Social Lite", amt: "$400", per: "", feat: false,
    desc: "Good (excl. ad spend)",
    feats: ["1 platform, 1–2 campaigns", "3–4 static/short creatives", "Basic weekly checks", "Simple end-of-month report"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Paid Social Growth", amt: "$700", per: "", feat: true,
    desc: "Better (excl. ad spend)",
    feats: ["1–2 platforms, 3–4 campaigns", "6–8 creatives including variants", "Weekly optimization & reporting"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Paid Social Performance Max", amt: "$1,200", per: "", feat: false,
    desc: "Best (excl. ad spend)",
    feats: ["Multi-platform strategy", "Advanced creative testing", "Audience experiments", "Weekly deep-dive performance reviews"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

const PRICING_SEARCH = [
  {
    name: "Search Starter", amt: "$450", per: "", feat: false,
    desc: "Good (excl. ad spend)",
    feats: ["Setup/cleanup of 1 account", "Up to 3 campaigns", "Keyword & negative list basics", "Simple monthly report"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Search Optimizer", amt: "$750", per: "", feat: true,
    desc: "Better (excl. ad spend)",
    feats: ["More campaigns/ad groups", "Structured testing", "Weekly bid and query optimization", "Conversion tracking setup"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Search Growth Partner", amt: "$1,300", per: "", feat: false,
    desc: "Best (excl. ad spend)",
    feats: ["Full-funnel search strategy", "Landing page input", "Advanced scripts/automation", "Weekly strategy calls"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

const PRICING_CRO = [
  {
    name: "Landing Page Audit", amt: "$350", per: "", feat: false,
    desc: "Good",
    feats: ["Heuristic + analytics-based audit of 1 page", "Written recommendations"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Test-Ready CRO Plan", amt: "$600", per: "", feat: true,
    desc: "Better",
    feats: ["Audit plus test hypotheses", "Prioritized roadmap", "Basic wireframes for key changes"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "CRO Execution Sprint", amt: "$1,000", per: "", feat: false,
    desc: "Best",
    feats: ["Everything in Better", "Implementation support on 1–2 pages", "Monitoring of 1–2 test cycles"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

const PRICING_LEADGEN = [
  {
    name: "Lead Gen Lite", amt: "$500", per: "", feat: false,
    desc: "Good",
    feats: ["ICP definition, small prospect list", "1 outbound/email sequence", "Basic inbound lead form setup"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Pipeline Builder", amt: "$800", per: "", feat: true,
    desc: "Better",
    feats: ["Larger list size", "Multi-step sequence", "Simple scoring", "Weekly performance tweaks"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Revenue Pipeline Partner", amt: "$1,400", per: "", feat: false,
    desc: "Best",
    feats: ["Multi-channel lead gen (LinkedIn + email)", "Advanced sequences", "Reporting and SDR/closer collaboration"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

export default function PerformanceLeadGenPage() {
  return (
    <>
      <ServiceHero 
        title="Performance & Lead Generation" 
        subtitle="Performance marketing to grow pipeline, demo requests, and lower CAC."
        kick="Services"
      />
      <ServiceFeatures 
        title="What's included" 
        features={FEATURES} 
      />
      <Pricing title="Paid Social Packages" lead="" kick="Pricing" tiers={PRICING_SOCIAL} />
      <div style={{ padding: '0 0 60px' }}>
        <Pricing title="Paid Search Packages" lead="" kick="" tiers={PRICING_SEARCH} />
      </div>
      <div style={{ padding: '0 0 60px' }}>
        <Pricing title="CRO Packages" lead="" kick="" tiers={PRICING_CRO} />
      </div>
      <div style={{ padding: '0 0 60px' }}>
        <Pricing title="Lead Gen Packages" lead="" kick="" tiers={PRICING_LEADGEN} />
      </div>
      <CTA />
    </>
  );
}
