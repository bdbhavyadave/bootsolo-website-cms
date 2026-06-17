import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'
import CTA from '@/components/CTA'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Our Work | Bootsolo',
  description: 'Case studies and portfolio of brands scaled by Bootsolo.',
}

const PLACEHOLDER_WORK = [
  {
    title: "Scaling a SaaS to $1M ARR",
    client: "TechFlow",
    category: "Performance & Lead Gen",
    excerpt: "How we completely rebuilt their paid search strategy and integrated AI-driven CRM workflows to triple their enterprise pipeline.",
    metrics: ["+210% Pipeline", "-40% CAC", "3x ROI"],
    slug: "#"
  },
  {
    title: "Local Domination for a Medical Group",
    client: "Apex Health",
    category: "SEO / AEO / GEO",
    excerpt: "Dominating local search and map packs across 15 locations using our proprietary Authority Suite and localized AI content engines.",
    metrics: ["+450% Map Views", "1.2k New Leads", "#1 Ranking"],
    slug: "#"
  },
  {
    title: "Full Brand System & Web Experience",
    client: "Lumina Edge",
    category: "Branding & Web",
    excerpt: "A complete zero-to-one rebrand, including visual identity, custom Framer website, and high-converting copy.",
    metrics: ["2 Week Launch", "+85% Conversion", "Award Winning"],
    slug: "#"
  }
];

export default function WorkPage() {
  return (
    <>
      <ServiceHero 
        title="Our Work" 
        subtitle="We don't just talk strategy — we execute. Here are a few examples of how we've helped bootstrapped founders reach the summit."
        kick="Portfolio & Case Studies"
      />
      
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <div className="svc-grid">
            {PLACEHOLDER_WORK.map((work, i) => (
              <Link href={work.slug} className="svc-card" key={i} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg3)', marginBottom: '8px', fontWeight: 600 }}>{work.client}</div>
                <div className="svc-t" style={{ fontSize: '24px', marginBottom: '8px' }}>{work.title}</div>
                <div style={{ fontSize: '14px', color: 'var(--brand)', marginBottom: '16px', fontWeight: 500 }}>{work.category}</div>
                <div className="svc-d" style={{ marginBottom: '24px', flex: 1 }}>{work.excerpt}</div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
                  {work.metrics.map((metric, j) => (
                    <div key={j} style={{ background: 'var(--frost)', padding: '8px', borderRadius: '8px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: 'var(--fg1)' }}>
                      {metric}
                    </div>
                  ))}
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--fg1)', fontSize: '14px', fontWeight: 500 }}>
                    View case study <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <CTA 
        title="Want your brand to be next?" 
        subtitle="Let's build a custom route map tailored to your exact terrain."
      />
    </>
  );
}
