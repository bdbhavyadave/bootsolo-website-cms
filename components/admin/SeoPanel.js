'use client'

import { useState, useEffect } from 'react'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

export default function SeoPanel({ 
  title, 
  content, 
  metaDesc, 
  setMetaDesc, 
  focusKeyword, 
  setFocusKeyword,
  slug,
  setSlug
}) {
  const [score, setScore] = useState(0)

  const checks = {
    titleLength: title.length >= 50 && title.length <= 60,
    descLength: metaDesc.length >= 120 && metaDesc.length <= 160,
    hasKeywordInTitle: focusKeyword && title.toLowerCase().includes(focusKeyword.toLowerCase()),
    hasKeywordInDesc: focusKeyword && metaDesc.toLowerCase().includes(focusKeyword.toLowerCase()),
    contentLength: content.split(' ').length > 300,
  }

  useEffect(() => {
    let newScore = 0
    if (checks.titleLength) newScore += 20
    if (checks.descLength) newScore += 20
    if (checks.hasKeywordInTitle) newScore += 20
    if (checks.hasKeywordInDesc) newScore += 20
    if (checks.contentLength) newScore += 20
    setScore(newScore)
  }, [checks])

  const getScoreColor = () => {
    if (score >= 80) return '#10b981'
    if (score >= 50) return '#f59e0b'
    return '#ef4444'
  }

  const CheckItem = ({ passed, text }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
      {passed ? <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '2px' }} /> : <XCircle size={16} color="#ef4444" style={{ marginTop: '2px' }} />}
      <span style={{ fontSize: '0.875rem', color: passed ? '#475569' : '#0f172a' }}>{text}</span>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Score Overview */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <div style={{ position: 'relative', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: `4px solid ${getScoreColor()}` }}>
          <span style={{ fontWeight: 700, fontSize: '1.25rem', color: getScoreColor() }}>{score}</span>
        </div>
        <div>
          <h4 style={{ fontWeight: 600, fontSize: '1rem' }}>SEO Health Score</h4>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            {score >= 80 ? 'Excellent! This post is well-optimized.' : score >= 50 ? 'Needs Improvement.' : 'Poor optimization. Fix issues below.'}
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Focus Keyword</label>
        <input 
          type="text" 
          value={focusKeyword}
          onChange={(e) => setFocusKeyword(e.target.value)}
          placeholder="e.g. enterprise blockchain"
          style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px' }}
        />
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Meta Description</label>
          <span style={{ fontSize: '0.75rem', color: checks.descLength ? '#10b981' : '#ef4444' }}>{metaDesc.length} / 160</span>
        </div>
        <textarea 
          value={metaDesc}
          onChange={(e) => setMetaDesc(e.target.value)}
          placeholder="A compelling summary of the post..."
          rows={3}
          style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', resize: 'vertical' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>URL Slug</label>
        <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #ddd', borderRadius: '6px', paddingRight: '0.5rem' }}>
          <span style={{ padding: '0.6rem', color: '#888', fontSize: '0.875rem', borderRight: '1px solid #ddd' }}>/blog/</span>
          <input 
            type="text" 
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', border: 'none', background: 'transparent', outline: 'none' }}
          />
        </div>
      </div>

      {/* Checklist */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>SEO Checklist</h4>
        <CheckItem passed={checks.titleLength} text={`Title length (current: ${title.length} chars, target: 50-60)`} />
        <CheckItem passed={checks.descLength} text={`Meta description length (target: 120-160 chars)`} />
        <CheckItem passed={checks.hasKeywordInTitle} text={`Focus keyword in title`} />
        <CheckItem passed={checks.hasKeywordInDesc} text={`Focus keyword in meta description`} />
        <CheckItem passed={checks.contentLength} text={`Content length > 300 words`} />
      </div>

      {/* Google Preview */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Search Preview</h4>
        <div style={{ padding: '1rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.875rem', color: '#1a0dab', cursor: 'pointer' }}>https://bootsolo.com › blog › {slug || 'example-slug'}</div>
          <div style={{ fontSize: '1.125rem', color: '#1a0dab', fontWeight: 500, margin: '0.25rem 0', textDecoration: 'none', cursor: 'pointer', hover: { textDecoration: 'underline' } }}>
            {title || 'Example Blog Post Title That Looks Good'}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#4d5156', lineHeight: 1.5 }}>
            {metaDesc || 'This is an example meta description. Please enter a compelling summary of your post that contains your focus keyword to encourage users to click.'}
          </div>
        </div>
      </div>
    </div>
  )
}
