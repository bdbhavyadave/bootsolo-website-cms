import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'
import CTA from '@/components/CTA'
import { ChevronRight } from 'lucide-react'

const MASTER_PRICING = [
  {
    category: "AI-Powered Marketing",
    slug: "/ai-powered-marketing#pricing",
    gist: "AI campaigns, psychographics, and automated funnels.",
    subcategories: [
      { name: "Vibe Marketing", start: "$300" },
      { name: "AI-Powered Marketing", start: "$400" },
      { name: "Marketing Automation", start: "$700" }
    ]
  },
  {
    category: "SEO / AEO / GEO",
    slug: "/seo-aeo-geo#pricing",
    gist: "Traditional search, AI-engines, and local maps.",
    subcategories: [
      { name: "Local SEO & AEO", start: "$400" },
      { name: "Growth SEO & AEO", start: "$700" },
      { name: "Authority Suite", start: "$1,200" }
    ]
  },
  {
    category: "Performance & Lead Gen",
    slug: "/performance-lead-generation#pricing",
    gist: "Paid media, CRO, and outbound sequences.",
    subcategories: [
      { name: "CRO", start: "$350" },
      { name: "Paid Social", start: "$400" },
      { name: "Paid Search", start: "$450" },
      { name: "Lead Gen", start: "$500" }
    ]
  },
  {
    category: "Content, Video & Thought Leadership",
    slug: "/content-video-thought-leadership#pricing",
    gist: "High-converting copy, short-form video, and executive branding.",
    subcategories: [
      { name: "Video & Motion", start: "$400" },
      { name: "Content Marketing", start: "$450" },
      { name: "Thought Leadership", start: "$450" }
    ]
  },
  {
    category: "Web & Ecommerce",
    slug: "/web-ecommerce-experience#pricing",
    gist: "Landing pages, brochure sites, and store optimization.",
    subcategories: [
      { name: "Ecommerce", start: "$500" },
      { name: "Web Designing", start: "$700" }
    ]
  },
  {
    category: "Branding",
    slug: "/branding#pricing",
    gist: "Visual identity, brand stories, and messaging.",
    subcategories: [
      { name: "Brand Identity Mini Kit", start: "$600" },
      { name: "Brand Story & Visuals", start: "$1,000" },
      { name: "Full Brand System", start: "$1,800" }
    ]
  }
];

export default function MasterPricingPage() {
  return (
    <>
      <ServiceHero 
        title="Plans & Packages" 
        subtitle="Transparent pricing built for bootstrapped budgets. Find the tier that fits your next stage of growth."
        kick="Pricing Directory"
      />
      
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="svc-grid">
            {MASTER_PRICING.map((cat, i) => (
              <div className="svc-card" key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="svc-t" style={{ fontSize: '20px', marginBottom: '8px' }}>{cat.category}</div>
                <div className="svc-d" style={{ marginBottom: '24px' }}>{cat.gist}</div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg3)', marginBottom: '12px', fontWeight: 600 }}>Starting At</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                    {cat.subcategories.map((sub, j) => (
                      <li key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '14px', color: 'var(--fg2)' }}>
                        <span>{sub.name}</span>
                        <span style={{ fontWeight: 600, color: 'var(--fg1)' }}>{sub.start}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={cat.slug} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
                  View detailed packages <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <CTA 
        title="Need a custom bundle?" 
        subtitle="If you need to mix and match services across categories or need an enterprise scope, let's talk. Fill out the form and we'll build a custom route map tailored to your exact terrain."
      />
    </>
  );
}
