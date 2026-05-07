import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      {post.featured_image_url && (
        <Link href={`/blog/${post.slug}`}>
          <img 
            src={post.featured_image_url} 
            alt={post.featured_image_alt || post.title}
            className="blog-image"
          />
        </Link>
      )}
      <div className="blog-content">
        {post.category && <span className="category">{post.category}</span>}
        <Link href={`/blog/${post.slug}`}>
          <h3>{post.title}</h3>
        </Link>
        <p className="excerpt">{post.excerpt}</p>
        <div className="blog-meta">
          <span>{new Date(post.published_at).toLocaleDateString()}</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="read-more">
          Read More →
        </Link>
      </div>
    </article>
  )
}
