import Link from 'next/link'

export default function BlogCard({ post }) {
  if (!post) return null

  const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
      <div style={{ height: '200px', background: 'var(--frost)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg3)', overflow: 'hidden' }}>
        {post.featured_image_url ? (
          <img src={post.featured_image_url} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ fontSize: '13px' }}>No Image</span>
        )}
      </div>
      
      <div style={{ padding: 'var(--s-5)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div>
          {post.category && (
            <span className="badge" style={{ background: 'var(--bg-inset)', color: 'var(--fg2)', marginBottom: 'var(--s-3)', display: 'inline-block' }}>
              {post.category}
            </span>
          )}
          
          <h3 className="ct" style={{ fontSize: '18px', marginBottom: 'var(--s-2)', lineHeight: '1.4' }}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>
          
          <p className="cd" style={{ marginBottom: 'var(--s-5)' }}>
            {post.excerpt || (post.content && post.content.substring(0, 150) + '...')}
          </p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 'var(--s-4)', marginTop: 'auto' }}>
          <span className="text-mono" style={{ fontSize: '12px', color: 'var(--fg3)' }}>{formattedDate}</span>
          <Link href={`/blog/${post.slug}`} style={{ fontSize: '13.5px', color: 'var(--sunrise)', fontWeight: 'var(--w-semi)' }}>
            Read More →
          </Link>
        </div>
      </div>
    </div>
  )
}
