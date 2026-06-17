import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import { Target, Smile, Repeat } from 'lucide-react'

const FEATURES = [
  { icon: Target, title: "Strategy", desc: "Data-driven AI strategies tailored to your unique audience." },
  { icon: Smile, title: "Vibe / Persona Intelligence", desc: "Deep psychographic profiling and vibe analysis." },
  { icon: Repeat, title: "Automation & Funnels", desc: "Multi-step automated nurture systems that convert." }
];

const PRICING_AI_MKT = [
  {
    name: "AI Launch Lite", amt: "$400", per: "", feat: false,
    desc: "Good",
    feats: ["1 AI-assisted campaign concept", "Prompt set for 1 channel", "Basic setup in 1 tool", "Simple end-of-month report"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "AI Growth Engine", amt: "$700", per: "", feat: true,
    desc: "Better",
    feats: ["Everything in Lite", "2 channels", "AI content outlines", "Fortnightly optimization", "Light funnel automation"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "AI Performance System", amt: "$1,200", per: "", feat: false,
    desc: "Best",
    feats: ["Full AI strategy", "3–4 channels", "Advanced prompt libraries", "Multi-step automation", "Weekly optimization + review"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

const PRICING_VIBE = [
  {
    name: "Vibe Snapshot", amt: "$300", per: "", feat: false,
    desc: "Good",
    feats: ["One-time audience vibe scan", "Simple persona profile", "1 campaign angle/hook sheet"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Vibe Positioning Sprint", amt: "$500", per: "", feat: true,
    desc: "Better",
    feats: ["Snapshot plus deeper psychographics", "3–4 vibe segments", "Campaign messaging map and examples"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Always-On Vibe Lab", amt: "$900", per: "", feat: false,
    desc: "Best",
    feats: ["Ongoing vibe tracking", "Monthly insights", "Campaign idea backlog", "Quarterly repositioning recommendations"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

const PRICING_AUTOMATION = [
  {
    name: "Automation Starter Funnel", amt: "$700", per: "", feat: false,
    desc: "Good",
    feats: ["1 basic funnel (opt-in → 3–4 emails)", "Tags/segments setup", "Monthly health check"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Multi-Step Nurture System", amt: "$1,000", per: "", feat: true,
    desc: "Better",
    feats: ["2 funnels (lead magnet + demo)", "6–8 emails", "Scoring rules", "Monthly optimization with simple reporting"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Revenue Automation Suite", amt: "$1,600", per: "", feat: false,
    desc: "Best",
    feats: ["Full funnel design (multi-offer)", "10+ emails", "Advanced scoring", "Integrations, dashboards and weekly optimization"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

export default function AIPoweredMarketingPage() {
  return (
    <>
      <ServiceHero 
        title="AI-Powered Marketing" 
        subtitle="Smarter campaigns, deeper audience intelligence, and automated funnels."
        kick="Services"
      />
      <ServiceFeatures 
        title="What's included" 
        features={FEATURES} 
        style={{ paddingBottom: '60px' }}
      />
      <Pricing title="AI-Powered Marketing Packages" lead="" kick="Pricing" tiers={PRICING_AI_MKT} className="" style={{ paddingBottom: '80px' }} />
      <Pricing title="Vibe Marketing Packages" lead="" kick="" tiers={PRICING_VIBE} className="" style={{ paddingBottom: '80px' }} />
      <Pricing title="Marketing Automation Packages" lead="" kick="" tiers={PRICING_AUTOMATION} className="" style={{ paddingBottom: '120px' }} />
      <CTA />
    </>
  );
}
