import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'
import CTA from '@/components/CTA'
import { Download } from 'lucide-react'

export const metadata = {
  title: 'Resources | Bootsolo',
  description: 'Free guides, templates, and AI prompt libraries for marketing.',
}

const PLACEHOLDER_RESOURCES = [
  {
    title: "The Ultimate AI Prompt Library for SEO",
    type: "Template / Notion",
    category: "SEO / AEO",
    excerpt: "Over 50 battle-tested prompts to generate high-ranking blog outlines, meta descriptions, and localized service pages.",
    slug: "#"
  },
  {
    title: "Zero-to-One Brand Messaging Framework",
    type: "PDF Guide",
    category: "Branding",
    excerpt: "A workbook designed for founders to nail their positioning, audience psychographics, and unique value proposition in one afternoon.",
    slug: "#"
  },
  {
    title: "B2B Lead Gen Playbook 2026",
    type: "E-Book",
    category: "Lead Gen",
    excerpt: "Learn how we use outbound email sequences mixed with hyper-targeted paid social to book 20+ qualified enterprise calls per month.",
    slug: "#"
  }
];

export default function ResourcesPage() {
  return (
    <>
      <ServiceHero 
        title="Free Resources" 
        subtitle="Templates, guides, and playbooks we use internally to scale brands. Yours for free."
        kick="Tools & Downloads"
      />
      
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <div className="svc-grid">
            {PLACEHOLDER_RESOURCES.map((res, i) => (
              <Link href={res.slug} className="svc-card" key={i} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand)', fontWeight: 600, background: 'var(--frost)', padding: '4px 12px', borderRadius: '12px' }}>
                    {res.type}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--fg3)', fontWeight: 500 }}>{res.category}</div>
                </div>
                
                <div className="svc-t" style={{ fontSize: '24px', marginBottom: '12px' }}>{res.title}</div>
                <div className="svc-d" style={{ marginBottom: '24px', flex: 1 }}>{res.excerpt}</div>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--fg1)', fontSize: '14px', fontWeight: 500 }}>
                    Download <Download size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <CTA 
        title="Need more than just a template?" 
        subtitle="Let's build a custom route map tailored to your exact terrain."
      />
    </>
  );
}
