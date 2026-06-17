import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import { LayoutTemplate, ShoppingCart } from 'lucide-react'

const FEATURES = [
  { icon: LayoutTemplate, title: "Web Design & UX", desc: "Mobile-first, lightning-fast landing pages and brochure sites." },
  { icon: ShoppingCart, title: "Ecommerce", desc: "Conversion-ready storefronts optimized for higher AOV and checkout rates." }
];

const PRICING_WEB = [
  {
    name: "Conversion Landing Page", amt: "$700", per: "", feat: false,
    desc: "Good",
    feats: ["Design + build of 1 responsive landing page", "Basic analytics and on-page SEO"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Mini Site Launch", amt: "$1,200", per: "", feat: true,
    desc: "Better",
    feats: ["3–5 page brochure site", "Home, about, services, contact, 1 LP", "Mobile-first and speed-focused"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Growth Website", amt: "$2,000+", per: "", feat: false,
    desc: "Best",
    feats: ["6–10 page site with blog", "Lead capture flows", "Performance-focused UX and tracking"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

const PRICING_ECOM = [
  {
    name: "Ecommerce Audit", amt: "$500", per: "", feat: false,
    desc: "Good",
    feats: ["UX and conversion audit of existing store", "Written recommendations"],
    cta: "Request custom quote", btn: "btn-ghost"
  },
  {
    name: "Ecommerce Conversion Starter", amt: "$900", per: "", feat: true,
    desc: "Better",
    feats: ["Audit plus improvements on templates", "Home, PDP, cart improvements", "Basic funnel mapping"],
    cta: "Start the climb", btn: "btn-primary"
  },
  {
    name: "Ecommerce Growth Partner", amt: "$1,600", per: "", feat: false,
    desc: "Best",
    feats: ["Ongoing optimization, CRO roadmap", "Email/automation integration recommendations", "Monthly performance reviews"],
    cta: "Talk to us", btn: "btn-ghost"
  }
];

export default function WebEcommercePage() {
  return (
    <>
      <ServiceHero 
        title="Web & Ecommerce" 
        subtitle="High-converting digital storefronts and experiences."
        kick="Services"
      />
      <ServiceFeatures 
        title="What's included" 
        features={FEATURES} 
      />
      <Pricing title="Web Designing Packages" lead="" kick="Pricing" tiers={PRICING_WEB} />
      <div style={{ padding: '0 0 60px' }}>
        <Pricing title="Ecommerce Packages" lead="" kick="" tiers={PRICING_ECOM} />
      </div>
      <CTA />
    </>
  );
}
