import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import LeadForm from '@/components/LeadForm'
import { createServerSupabaseClient } from '@/lib/supabase'

export default async function Home() {
  const supabase = createServerSupabaseClient()
  
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(3)

  const services = [
    {
      title: 'Blockchain & AI Development',
      description: 'Custom blockchain apps, smart contracts, AI/ML solutions, and Web3 applications.',
      icon: '💻',
      link: '/services/development'
    },
    {
      title: 'Digital Marketing & Growth',
      description: 'Web3 marketing, AI automation, performance marketing, and SEO strategies.',
      icon: '📈',
      link: '/services/marketing'
    },
    {
      title: 'Strategic Consulting',
      description: 'Blockchain strategy, AI implementation, digital transformation guidance.',
      icon: '🎯',
      link: '/services/consulting'
    }
  ]

  return (
    <>
      <Hero 
        title="Enterprise Blockchain, AI & Web3 Development"
        subtitle="Premium digital solutions trusted by companies across US, Europe, Middle East & Asia"
        cta="Start Free Consultation"
      />

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="blog-section">
        <h2>Latest Insights</h2>
        <div className="blog-grid">
          {posts && posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <Link href="/blog" className="view-all-link">View All Articles →</Link>
      </section>

      <section className="lead-section">
        <h2>Get Your Free Consultation</h2>
        <p>Start with a free 1-2 day consultation. No strings attached.</p>
        <LeadForm />
      </section>
    </>
  )
}
