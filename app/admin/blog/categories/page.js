'use client'

import { useState } from 'react'
import { Plus, Edit2, Trash2 } from 'lucide-react'

export default function CategoriesManagement() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Development', slug: 'development', postsCount: 15 },
    { id: 2, name: 'Marketing', slug: 'marketing', postsCount: 8 },
    { id: 3, name: 'Consulting', slug: 'consulting', postsCount: 5 },
    { id: 4, name: 'AI Solutions', slug: 'ai-solutions', postsCount: 12 },
  ])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Categories</h1>
          <p style={{ color: '#666', marginTop: '0.25rem' }}>Organize your blog posts into topics.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Add New Category Form */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Add New Category</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Name</label>
              <input type="text" placeholder="e.g. Technology" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Slug</label>
              <input type="text" placeholder="e.g. technology" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Description (Optional)</label>
              <textarea placeholder="Category description..." rows={4} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', resize: 'vertical' }}></textarea>
            </div>
            <button type="button" style={{ background: 'var(--primary)', color: 'white', padding: '0.75rem', borderRadius: '6px', border: 'none', fontWeight: 600, cursor: 'pointer', marginTop: '0.5rem' }}>
              Add Category
            </button>
          </form>
        </div>

        {/* Categories Table */}
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #eee', textAlign: 'left', color: '#64748b', fontSize: '0.875rem' }}>
                <th style={{ padding: '1rem 1.5rem' }}>Name</th>
                <th style={{ padding: '1rem 1.5rem' }}>Slug</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>Count</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#0f172a' }}>{cat.name}</td>
                  <td style={{ padding: '1rem 1.5rem', color: '#64748b', fontSize: '0.9rem' }}>{cat.slug}</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
                    <span style={{ background: '#f1f5f9', color: '#475569', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600 }}>
                      {cat.postsCount}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button style={{ padding: '0.4rem', color: '#64748b', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <Edit2 size={16} />
                      </button>
                      <button style={{ padding: '0.4rem', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
