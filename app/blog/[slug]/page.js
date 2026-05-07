import { createServerSupabaseClient } from '@/lib/supabase'
import LeadForm from '@/components/LeadForm'

export default async function BlogPost({ params }) {
  const supabase = createServerSupabaseClient()
  
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single()

  if (!post) return <div>Post not found</div>

  return (
    <article className="blog-post">
      <div className="post-header">
        <h1>{post.title}</h1>
        <p className="post-meta">
          Published on {new Date(post.published_at).toLocaleDateString()} 
          {post.category && ` · ${post.category}`}
        </p>
      </div>

      {post.featured_image_url && (
        <img 
          src={post.featured_image_url} 
          alt={post.featured_image_alt || post.title}
          className="post-image"
        />
      )}

      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

      <aside className="post-sidebar">
        <h3>Ready to discuss this?</h3>
        <p>Schedule a free consultation with our experts.</p>
        <LeadForm compact={true} />
      </aside>
    </article>
  )
}
