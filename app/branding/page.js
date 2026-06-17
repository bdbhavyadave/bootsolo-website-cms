import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import { PenTool, Image as ImageIcon, MessageSquare } from 'lucide-react'

const FEATURES = [
  { icon: PenTool, title: "Brand Identity", desc: "Logos, color palettes, and typography that represent your core values." },
  { icon: ImageIcon, title: "Visual Storytelling", desc: "Cohesive visual assets for web, social, and print." },
  { icon: MessageSquare, title: "Messaging Pillars", desc: "Clear, compelling brand stories and positioning frameworks." }
];

const PRICING_BRANDING = [
  {
    name: "Brand Identity Mini Kit", amt: "$600", per: "", feat: false,
    desc: "Good",
    feats: ["Light discovery", "Logo refresh or simple logo", "Basic color palette and typography suggestions"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Brand Story & Visuals", amt: "$1,000", per: "", feat: true,
    desc: "Better",
    feats: ["Mini Kit plus brand story", "Messaging pillars", "Extended color/typography system", "Simple social templates"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Full Brand System", amt: "$1,800", per: "", feat: false,
    desc: "Best",
    feats: ["Comprehensive visual identity", "Messaging framework, usage guidelines", "Starter asset pack (decks, banners, etc.)"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

export default function BrandingPage() {
  return (
    <>
      <ServiceHero 
        title="Branding" 
        subtitle="Brand identity, visual storytelling, and messaging to stand out."
        kick="Services"
      />
      <ServiceFeatures 
        title="What's included" 
        features={FEATURES} 
      />
      <Pricing title="Branding Packages" lead="" kick="Pricing" tiers={PRICING_BRANDING} />
      <CTA />
    </>
  );
}
