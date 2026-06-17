import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import LeadForm from '@/components/LeadForm'
import { createServerSupabaseClient } from '@/lib/supabase'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const supabase = createServerSupabaseClient()
  
  // Fetch latest 3 blog posts
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(3)

  const services = [
    {
      title: 'Get found by AI',
      description: 'Show up when buyers ask ChatGPT, Perplexity, and Google\'s AI.',
      icon: 'radar',
      link: '/services/marketing',
      pricing: 'Climber tier · $2k/mo',
      badge: 'Popular',
      subservices: [
        'AI Search Engine Optimization',
        'LLM Context Injection',
        'Knowledge Graph Building',
        'Conversational Placement'
      ]
    },
    {
      title: 'Your AI team',
      description: 'Agents that research, write, and launch while you build the product.',
      icon: 'bot',
      link: '/services/development',
      pricing: 'Basecamp · free',
      badge: 'Start here',
      subservices: [
        'Automated Content Marketing',
        'Social Media Agents',
        'Outreach Automations',
        '24/7 Execution'
      ]
    },
    {
      title: 'A tracked route',
      description: 'Every dollar tied to a metric that moves your bottom line.',
      icon: 'route',
      link: '/services/consulting',
      pricing: 'Summit · Custom',
      badge: 'Pro',
      subservices: [
        'P&L Positive Strategy',
        'Backpack Budget Planning',
        'Weekly Metric Tracking',
        'Founder-to-Founder Advice'
      ]
    }
  ]

  return (
    <>
      <Hero 
        eyebrow="AI-Native Marketing"
        title="Start solo."
        highlightTitle="Climb fast."
        tag="AI-native marketing for bootstrapped solopreneurs. We pick up the marketing work where your time and budget run out — getting you found, running your agents, and spending campaign dollars that actually pull their weight."
        ctaPrimary="Start free"
        ctaSecondary="See the routes"
      />

      <section className="section" style={{ background: 'var(--snow)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--s-16)' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>01 — The Routes</span>
            <h2 className="sec-title">Pick your path to the summit</h2>
            <p className="sec-lead" style={{ margin: '0 auto' }}>Priced for a backpack, not a boardroom. We built these tiers for founders doing it solo on limited cash.</p>
          </div>
          <div className="grid-3">
            {services.map(service => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--s-16)' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>02 — Dispatch</span>
            <h2 className="sec-title">Notes from basecamp</h2>
            <p className="sec-lead" style={{ margin: '0 auto' }}>Real stories and tactics from indie founders climbing the same mountain.</p>
          </div>
          <div className="grid-3">
            {posts && posts.length > 0 ? (
              posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'var(--s-10)', background: 'var(--white)', borderRadius: 'var(--r-card)' }}>
                <p className="muted">Articles coming soon. Check back later.</p>
              </div>
            )}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--s-10)' }}>
            <Link href="/blog" className="btn btn-ghost">Read all notes →</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--frost)', borderBottom: 'none' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--s-10)' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>03 — First step</span>
            <h2 className="sec-title">Your first step is free</h2>
            <p className="sec-lead" style={{ margin: '0 auto' }}>You're wearing every hat already. Hand us the marketing one. Let's map your route.</p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
