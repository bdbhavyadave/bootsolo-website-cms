import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'
import CTA from '@/components/CTA'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Blog | Bootsolo',
  description: 'Insights, strategies, and updates on AI marketing, SEO, and growth.',
}

const PLACEHOLDER_BLOGS = [
  {
    title: "How to Build a Marketing Engine with AI",
    date: "October 12, 2026",
    category: "AI Marketing",
    excerpt: "Discover the step-by-step process of leveraging AI agents to automate your entire marketing funnel without losing the human touch.",
    slug: "#"
  },
  {
    title: "The Future of Search: AEO vs SEO",
    date: "September 28, 2026",
    category: "SEO / AEO",
    excerpt: "Why optimizing for AI engines (AEO) is fundamentally changing how we approach traditional Google search optimization.",
    slug: "#"
  },
  {
    title: "Vibe Marketing: Connecting Beyond the Screen",
    date: "September 15, 2026",
    category: "Branding",
    excerpt: "A deep dive into psychographics and how targeting the 'vibe' of your audience drastically outperforms traditional demographics.",
    slug: "#"
  },
  {
    title: "Stop Renting Your Audience",
    date: "August 30, 2026",
    category: "Lead Gen",
    excerpt: "Why owning your email list and building zero-party data funnels is the only way to survive the upcoming algorithm shifts.",
    slug: "#"
  }
];

export default function BlogsPage() {
  return (
    <>
      <ServiceHero 
        title="Insights & Updates" 
        subtitle="Strategies, teardowns, and thoughts on the future of marketing, AI, and building brands that last."
        kick="The Bootsolo Blog"
      />
      
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <div className="svc-grid">
            {PLACEHOLDER_BLOGS.map((blog, i) => (
              <Link href={blog.slug} className="svc-card" key={i} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--sunrise)', marginBottom: '16px', fontWeight: 600 }}>{blog.category}</div>
                <div className="svc-t" style={{ fontSize: '24px', marginBottom: '12px' }}>{blog.title}</div>
                <div className="svc-d" style={{ marginBottom: '24px', flex: 1 }}>{blog.excerpt}</div>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ fontSize: '14px', color: 'var(--fg3)' }}>{blog.date}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--fg1)', fontSize: '14px', fontWeight: 500 }}>
                    Read article <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <CTA 
        title="Ready to apply this to your brand?" 
        subtitle="Let's build a custom route map tailored to your exact terrain."
      />
    </>
  );
}
