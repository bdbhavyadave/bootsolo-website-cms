import { createServerSupabaseClient } from '@/lib/supabase'
import LeadForm from '@/components/LeadForm'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateMetadata({ params }) {
  const supabase = createServerSupabaseClient()
  
  const { data: post } = await supabase
    .from('blog_posts')
    .select('seo_title, seo_description, title, excerpt')
    .eq('slug', params.slug)
    .single()

  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
  }
}

export default async function BlogPost({ params }) {
  const supabase = createServerSupabaseClient()
  
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single()

  if (!post) return notFound()

  const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="blog-post" style={{ padding: 0, maxWidth: '100%' }}>
      <div className="post-detail-hero">
        <h1 className="post-detail-title">{post.title}</h1>
        <div className="post-detail-meta">
          {post.category && <span className="blog-category" style={{ marginBottom: 0 }}>{post.category}</span>}
          <span>Published on {formattedDate}</span>
          <span>5 min read</span>
        </div>
      </div>

      <div className="container">
        {post.featured_image_url ? (
          <img 
            src={post.featured_image_url} 
            alt={post.title}
            className="post-detail-image"
          />
        ) : (
          <div className="post-detail-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>[Featured Image Placeholder]</span>
          </div>
        )}
      </div>

      <div className="container post-detail-content" dangerouslySetInnerHTML={{ __html: post.content }} />

      <section className="section" style={{ background: 'var(--light)', marginTop: '4rem' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="post-sidebar">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Ready to discuss this?</h3>
            <p style={{ color: '#666', marginBottom: '2rem' }}>Schedule a free consultation with our experts to learn how we can implement these strategies for your business.</p>
            <LeadForm compact={true} />
          </div>
        </div>
      </section>
    </article>
  )
}
