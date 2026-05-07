import { createServerSupabaseClient } from '@/lib/supabase'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | Insights & Articles',
  description: 'Industry trends, case studies, and practical guides for blockchain, AI, and digital transformation',
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  const supabase = createServerSupabaseClient()
  
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-1px' }}>Latest Insights & Articles</h1>
        <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: 600, margin: '0 auto' }}>Industry trends, case studies, and practical guides for blockchain, AI, and digital transformation</p>
      </div>

      <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
        {posts && posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {(!posts || posts.length === 0) && (
        <div className="no-posts" style={{ padding: '6rem 2rem', background: 'var(--light)', borderRadius: 8, marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No articles published yet</h3>
          <p style={{ color: '#666' }}>Our experts are currently writing amazing content. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
