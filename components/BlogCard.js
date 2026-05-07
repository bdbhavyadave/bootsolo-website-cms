import Link from 'next/link'

export default function BlogCard({ post }) {
  if (!post) return null

  const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="blog-card">
      <div className="blog-image-wrapper">
        {post.featured_image_url ? (
          <img src={post.featured_image_url} alt={post.title} className="blog-image" />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            No Image
          </div>
        )}
      </div>
      
      <div className="blog-content">
        {post.category && <span className="blog-category">{post.category}</span>}
        
        <h3>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="blog-excerpt">
          {post.excerpt || (post.content && post.content.substring(0, 150) + '...')}
        </p>
        
        <div className="blog-footer">
          <span>{formattedDate}</span>
          <Link href={`/blog/${post.slug}`} className="btn-link" style={{ color: 'var(--accent)', fontWeight: '600' }}>
            Read More →
          </Link>
        </div>
      </div>
    </div>
  )
}
