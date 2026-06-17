import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import { Search, Bot, MapPin } from 'lucide-react'

const FEATURES = [
  { icon: Search, title: "SEO (Search Engine Optimization)", desc: "Traditional search optimization to drive organic traffic from Google." },
  { icon: Bot, title: "AEO (AI-Engine Optimization)", desc: "Optimizing your content for ChatGPT, Perplexity, and LLM answer boxes." },
  { icon: MapPin, title: "GEO (Geo/Local Optimization)", desc: "Local and map-based visibility to capture high-intent regional traffic." }
];

const PRICING_SEO = [
  {
    name: "Local SEO & AEO Lite", amt: "$400", per: "", feat: false,
    desc: "Good",
    feats: ["Keyword & intent mapping", "On-page optimization for up to 5 pages", "1 AEO-ready FAQ block", "Basic local listings"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Growth SEO & AEO", amt: "$700", per: "", feat: true,
    desc: "Better",
    feats: ["Everything in Lite plus 10 pages", "Content briefs, technical fixes", "Enhanced FAQs for AI engines", "Monthly report"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Authority SEO & AEO Suite", amt: "$1,200", per: "", feat: false,
    desc: "Best",
    feats: ["Full SEO roadmap", "15–20 pages, link-building plan", "Schema, AEO playbook for AI search", "Detailed monthly insights"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

export default function SeoAeoGeoPage() {
  return (
    <>
      <ServiceHero 
        title="SEO, AEO & GEO" 
        subtitle="Dominate traditional search, AI engines, and local map packs."
        kick="Services"
      />
      <ServiceFeatures 
        title="What's included" 
        features={FEATURES} 
        style={{ paddingBottom: '60px' }}
      />
      <Pricing title="Search & Visibility Packages" lead="" kick="Pricing" tiers={PRICING_SEO} className="" style={{ paddingBottom: '120px' }} />
      <CTA />
    </>
  );
}
