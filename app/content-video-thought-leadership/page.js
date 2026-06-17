import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import { FileText, Video, Mic } from 'lucide-react'

const FEATURES = [
  { icon: FileText, title: "Content Marketing", desc: "Long-form articles and short-form posts built around SEO and authority." },
  { icon: Video, title: "Video & Motion", desc: "Short-form video and motion graphics to stop the scroll on social media." },
  { icon: Mic, title: "Thought Leadership", desc: "Executive branding, ghostwriting, and positioning for founders." }
];

const PRICING_CONTENT = [
  {
    name: "Content Essentials", amt: "$450", per: "", feat: false,
    desc: "Good",
    feats: ["2 blog/long-form pieces or 4 short-form posts", "Basic SEO optimization"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Content Growth", amt: "$700", per: "", feat: true,
    desc: "Better",
    feats: ["4 blog pieces or 6–8 mixed-format pieces", "Content calendar", "SEO briefs"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Content Authority System", amt: "$1,200", per: "", feat: false,
    desc: "Best",
    feats: ["Strategy + 8–10 pieces", "Pillar/cluster structure", "Content repurposing plan", "Performance review"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

const PRICING_VIDEO = [
  {
    name: "Social Video Starter", amt: "$400", per: "", feat: false,
    desc: "Good",
    feats: ["2 short-form videos (≤60s)", "Simple motion graphics", "Basic hooks"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Video Growth Pack", amt: "$700", per: "", feat: true,
    desc: "Better",
    feats: ["3–4 videos/month", "Storyboarding", "Hooks tailored to 2 platforms", "Light branding"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Video Brand Series", amt: "$1,300", per: "", feat: false,
    desc: "Best",
    feats: ["Ongoing episodic series", "Advanced motion graphics", "Scripting and creative direction"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

const PRICING_TL = [
  {
    name: "TL Ghostwriting Lite", amt: "$450", per: "", feat: false,
    desc: "Good",
    feats: ["2 LinkedIn posts or 1 article/month", "1 founder interview per quarter"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "TL Authority Builder", amt: "$750", per: "", feat: true,
    desc: "Better",
    feats: ["4 LinkedIn posts and 1 article", "Thematic narrative arcs", "Profile optimization suggestions"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Executive Influence Program", amt: "$1,400", per: "", feat: false,
    desc: "Best",
    feats: ["Comprehensive founder/exec brand system", "Multi-platform content", "Speaking/podcast pitch support"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

export default function ContentVideoPage() {
  return (
    <>
      <ServiceHero 
        title="Content, Video & TL" 
        subtitle="Build authority and audience with high-quality content, video, and executive thought leadership."
        kick="Services"
      />
      <ServiceFeatures 
        title="What's included" 
        features={FEATURES} 
      />
      <Pricing title="Content Marketing Packages" lead="" kick="Pricing" tiers={PRICING_CONTENT} />
      <div style={{ padding: '0 0 60px' }}>
        <Pricing title="Video & Motion Packages" lead="" kick="" tiers={PRICING_VIDEO} />
      </div>
      <div style={{ padding: '0 0 60px' }}>
        <Pricing title="Thought Leadership Packages" lead="" kick="" tiers={PRICING_TL} />
      </div>
      <CTA />
    </>
  );
}
