'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Search, Filter, MoreVertical, Edit2, Trash2, Eye } from 'lucide-react'

export default function BlogManagement() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, fetch from /api/admin/posts
    setPosts([
      { id: 1, title: 'The Future of Web3 in Enterprise', author: 'Bhavya Dave', category: 'Development', status: 'published', date: '2026-05-07', views: 1240, seoScore: 92 },
      { id: 2, title: '10 AI Trends for 2027', author: 'Bhavya Dave', category: 'AI', status: 'draft', date: '-', views: 0, seoScore: 45 },
      { id: 3, title: 'Optimizing Blockchain Smart Contracts', author: 'Bhavya Dave', category: 'Development', status: 'scheduled', date: '2026-05-10', views: 0, seoScore: 88 },
    ])
    setLoading(false)
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return { bg: '#dcfce7', text: '#166534' }
      case 'draft': return { bg: '#f1f5f9', text: '#475569' }
      case 'scheduled': return { bg: '#fef3c7', text: '#92400e' }
      default: return { bg: '#f1f5f9', text: '#475569' }
    }
  }

  const getSeoColor = (score) => {
    if (score >= 67) return '#10b981' // Green
    if (score >= 34) return '#f59e0b' // Yellow
    return '#ef4444' // Red
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Blog Management</h1>
          <p style={{ color: '#666', marginTop: '0.25rem' }}>Manage your blog posts, drafts, and scheduled content.</p>
        </div>
        <Link 
          href="/admin/blog/edit/new" 
          style={{ 
            background: 'var(--accent)', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Plus size={20} />
          New Post
        </Link>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
            <div style={{ position: 'relative', width: '300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
              <input 
                type="text" 
                placeholder="Search posts..." 
                style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '6px', border: '1px solid #ddd' }}
              />
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', background: 'white', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer' }}>
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #eee', textAlign: 'left', color: '#64748b', fontSize: '0.875rem' }}>
              <th style={{ padding: '1rem 1.5rem', width: '40px' }}><input type="checkbox" /></th>
              <th style={{ padding: '1rem 1.5rem' }}>Post Title</th>
              <th style={{ padding: '1rem 1.5rem' }}>Category</th>
              <th style={{ padding: '1rem 1.5rem' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem' }}>Date</th>
              <th style={{ padding: '1rem 1.5rem' }}>SEO Score</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem 1.5rem' }}><input type="checkbox" /></td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <p style={{ fontWeight: 600, color: '#0f172a' }}>{post.title}</p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>By {post.author}</p>
                </td>
                <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{post.category}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ 
                    background: getStatusColor(post.status).bg, 
                    color: getStatusColor(post.status).text, 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '999px', 
                    fontSize: '0.75rem', 
                    fontWeight: 600,
                    textTransform: 'capitalize'
                  }}>
                    {post.status}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{post.date}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: getSeoColor(post.seoScore) }}></div>
                    <span style={{ fontWeight: 600 }}>{post.seoScore}</span>
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    <Link href={`/admin/blog/edit/${post.id}`} style={{ padding: '0.4rem', color: '#64748b', hover: { color: 'var(--accent)' } }}>
                      <Edit2 size={18} />
                    </Link>
                    <button style={{ padding: '0.4rem', color: '#64748b', background: 'none', border: 'none', cursor: 'pointer' }}>
                      <Eye size={18} />
                    </button>
                    <button style={{ padding: '0.4rem', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '0.875rem' }}>
          <span>Showing 1 to {posts.length} of {posts.length} entries</span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ padding: '0.5rem 1rem', border: '1px solid #ddd', background: 'white', borderRadius: '6px', cursor: 'pointer' }}>Previous</button>
            <button style={{ padding: '0.5rem 1rem', border: '1px solid #ddd', background: 'white', borderRadius: '6px', cursor: 'pointer' }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
