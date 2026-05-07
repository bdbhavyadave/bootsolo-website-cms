import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import LeadForm from '@/components/LeadForm'
import { createServerSupabaseClient } from '@/lib/supabase'
import { Globe, Shield, Users, BarChart } from 'lucide-react'

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
      title: 'Blockchain & AI Development',
      description: 'Enterprise-grade software development with proven expertise in blockchain, AI, and web technologies. From MVPs to full-scale production systems.',
      icon: 'code',
      link: '/services/development',
      pricing: 'Starting at $2,500+',
      subservices: [
        'Blockchain/Web3 Solutions',
        'AI & Gen AI Development',
        'Web2/Web3 Applications',
        'Custom Website Development',
        'Mobile App Development'
      ]
    },
    {
      title: 'Digital Marketing & Growth',
      description: 'Data-driven marketing strategies designed to scale your digital presence. We specialize in emerging tech niches and high-growth markets.',
      icon: 'rocket',
      link: '/services/marketing',
      pricing: 'Starting at $1,000+',
      subservices: [
        'Web3 Marketing Strategy',
        'AI-Powered Marketing Automation',
        'Growth Consulting',
        'Performance Marketing',
        'Content Strategy & SEO'
      ]
    },
    {
      title: 'Business & Tech Consulting',
      description: 'Strategic guidance for enterprises navigating blockchain, AI, and digital transformation. Our consultants bring 15+ years of industry experience.',
      icon: 'briefcase',
      link: '/services/consulting',
      pricing: 'From $500+ or free initial audit',
      subservices: [
        'Blockchain Strategy & Readiness',
        'AI Implementation Planning',
        'Tech Stack Evaluation',
        'Digital Transformation',
        'Growth Strategy'
      ]
    }
  ]

  return (
    <>
      <Hero 
        title="Enterprise Blockchain, AI & Web3 Development"
        subtitle="Premium digital solutions trusted by companies across the US, Europe, Middle East, and Asia"
        ctaPrimary="Start Free Consultation"
        ctaSecondary="View Our Services"
      />

      <section className="trust-section">
        <div className="container trust-grid">
          <div className="trust-item">
            <Globe className="trust-icon" size={36} />
            <h4>Global Reach</h4>
            <p>Clients across 4 continents</p>
          </div>
          <div className="trust-item">
            <Shield className="trust-icon" size={36} />
            <h4>Enterprise-Grade</h4>
            <p>Bank-level security & scale</p>
          </div>
          <div className="trust-item">
            <Users className="trust-icon" size={36} />
            <h4>Expert Team</h4>
            <p>15+ years average experience</p>
          </div>
          <div className="trust-item">
            <BarChart className="trust-icon" size={36} />
            <h4>Proven Results</h4>
            <p>ROI-focused delivery</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p style={{ color: '#666', fontSize: '1.125rem' }}>Comprehensive solutions for the modern enterprise</p>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest Insights from Our Team</h2>
            <p style={{ color: '#666', fontSize: '1.125rem' }}>Industry trends, case studies, and expert analysis</p>
          </div>
          <div className="blog-grid">
            {posts && posts.length > 0 ? (
              posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', background: '#fff', borderRadius: 8 }}>
                <p style={{ color: '#666' }}>Articles coming soon. Check back later.</p>
              </div>
            )}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link href="/blog" className="btn btn-outline">View All Articles →</Link>
          </div>
        </div>
      </section>

      <section className="lead-capture-section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get Your Free Consultation</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem' }}>Start with a free 1-2 day consultation. No strings attached.</p>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
