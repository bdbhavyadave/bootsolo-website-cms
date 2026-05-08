'use client'

import { useState, useEffect } from 'react'
import { Save, Calendar, Send, Image as ImageIcon, Sparkles } from 'lucide-react'
import RichTextEditor from '@/components/admin/RichTextEditor'
import SeoPanel from '@/components/admin/SeoPanel'
import { useRouter } from 'next/navigation'

export default function EditPost({ params }) {
  const router = useRouter()
  const isNew = params.id === 'new'

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [metaDesc, setMetaDesc] = useState('')
  const [focusKeyword, setFocusKeyword] = useState('')
  const [slug, setSlug] = useState('')
  const [category, setCategory] = useState('Development')
  const [status, setStatus] = useState('draft')
  const [featuredImage, setFeaturedImage] = useState('')
  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!isNew) {
      fetchPost()
    }
  }, [isNew])

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/posts/${params.id}`)
      const data = await res.json()
      if (res.ok) {
        setTitle(data.title || '')
        setContent(data.content || '')
        setMetaDesc(data.seo_description || '')
        setFocusKeyword(data.focus_keyword || '')
        setSlug(data.slug || '')
        setCategory(data.category || 'Development')
        setStatus(data.status || 'draft')
        setFeaturedImage(data.featured_image_url || '')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleTitleChange = (e) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    if (isNew && (!slug || slug === '')) {
      setSlug(newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
    }
  }

  const handleSave = async (saveStatus) => {
    setSaving(true)
    try {
      const postData = {
        title,
        content,
        seo_description: metaDesc,
        focus_keyword: focusKeyword,
        slug,
        category,
        status: saveStatus || status,
        featured_image_url: featuredImage
      }

      const url = isNew ? '/api/posts' : `/api/posts/${params.id}`
      const method = isNew ? 'POST' : 'PUT'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })

      if (res.ok) {
        if (isNew) {
          const newPost = await res.json()
          router.push(`/admin/blog/edit/${newPost.id}`)
        } else {
          alert('Post saved successfully!')
        }
      } else {
        const error = await res.json()
        alert(`Error: ${error.error}`)
      }
    } catch (err) {
      console.error(err)
      alert('An error occurred while saving.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div style={{ padding: '2rem' }}>Loading post...</div>

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>{isNew ? 'New Post' : 'Edit Post'}</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => handleSave('draft')} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'white', border: '1px solid #ddd', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
            <Save size={18} /> Save Draft
          </button>
          <button onClick={() => handleSave('published')} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--accent, #0f172a)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
            <Send size={18} /> Publish
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '2rem' }}>
        {/* Left Column: Content Editor */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Title */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <input 
              type="text" 
              value={title}
              onChange={handleTitleChange}
              placeholder="Post Title..."
              style={{ width: '100%', fontSize: '2rem', fontWeight: 700, border: 'none', outline: 'none', background: 'transparent' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
              <div style={{ color: '#888', fontSize: '0.875rem' }}>Permalink: bootsolo.com/blog/{slug}</div>
              <div style={{ color: '#888', fontSize: '0.875rem' }}>{title.length} / 60</div>
            </div>
          </div>

          {/* Featured Image */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Featured Image</h3>
            {featuredImage ? (
              <div style={{ position: 'relative' }}>
                <img src={featuredImage} alt="Featured" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
                <button onClick={() => setFeaturedImage('')} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>Remove</button>
              </div>
            ) : (
              <div style={{ border: '2px dashed #ddd', borderRadius: '8px', padding: '3rem', textAlign: 'center', color: '#888', cursor: 'pointer', hover: { borderColor: 'var(--accent)', color: 'var(--accent)' } }}>
                <ImageIcon size={48} style={{ margin: '0 auto 1rem' }} />
                <p>Click to upload or drag and drop</p>
                <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>SVG, PNG, JPG or WebP (max. 5MB)</p>
              </div>
            )}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <input 
                type="text" 
                placeholder="Or paste an image URL..." 
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                style={{ flex: 1, padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} 
              />
            </div>
          </div>

          {/* AI Toolbar */}
          <div style={{ background: 'linear-gradient(to right, #f8fafc, #e0f2fe)', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0369a1', fontWeight: 600 }}>
              <Sparkles size={20} />
              AI Assistant
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ padding: '0.5rem 1rem', background: 'white', color: '#0369a1', border: '1px solid #bae6fd', borderRadius: '6px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}>Generate Outline</button>
              <button style={{ padding: '0.5rem 1rem', background: 'white', color: '#0369a1', border: '1px solid #bae6fd', borderRadius: '6px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}>Expand Section</button>
            </div>
          </div>

          {/* Editor */}
          <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <RichTextEditor content={content} onChange={setContent} />
          </div>
        </div>

        {/* Right Column: Settings & SEO */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Publishing */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Publishing</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="radio" name="status" checked={status === 'draft'} onChange={() => setStatus('draft')} />
                Draft
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="radio" name="status" checked={status === 'scheduled'} onChange={() => setStatus('scheduled')} />
                Schedule
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="radio" name="status" checked={status === 'published'} onChange={() => setStatus('published')} />
                Publish Immediately
              </label>
            </div>

            {status === 'scheduled' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Publish Date & Time</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }}>
                  <Calendar size={18} color="#888" />
                  <input type="datetime-local" style={{ border: 'none', outline: 'none', width: '100%' }} />
                </div>
              </div>
            )}

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', background: 'white' }}
              >
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Consulting">Consulting</option>
                <option value="AI">AI Solutions</option>
              </select>
            </div>
          </div>

          {/* SEO Panel Component */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>SEO Optimization</h3>
            <SeoPanel 
              title={title}
              content={content}
              metaDesc={metaDesc}
              setMetaDesc={setMetaDesc}
              focusKeyword={focusKeyword}
              setFocusKeyword={setFocusKeyword}
              slug={slug}
              setSlug={setSlug}
            />
          </div>

        </div>
      </div>
    </div>
  )
}
