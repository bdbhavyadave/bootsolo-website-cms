import { createServerSupabaseClient } from '@/lib/supabase'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

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
        <h1>Latest Insights & Articles</h1>
        <p>Industry trends, case studies, and practical guides for blockchain, AI, and digital transformation</p>
      </div>

      <div className="blog-grid-full">
        {posts && posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {!posts || posts.length === 0 && (
        <div className="no-posts">
          <p>No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
