'use client'

import { useState, useEffect } from 'react'
import { CheckCircle2, XCircle, AlertCircle, Plus, X } from 'lucide-react'

export default function SeoPanel({ 
  title, 
  content, 
  metaDesc, 
  setMetaDesc, 
  focusKeyword, 
  setFocusKeyword,
  slug,
  setSlug,
  secondaryKeywords = [],
  setSecondaryKeywords,
  longTailKeywords = [],
  setLongTailKeywords,
  lsiKeywords = [],
  setLsiKeywords,
  schemaType = 'Article',
  setSchemaType,
  targetAudience = '',
  setTargetAudience
}) {
  const [score, setScore] = useState(0)

  const checks = {
    titleLength: title.length >= 50 && title.length <= 60,
    descLength: metaDesc.length >= 120 && metaDesc.length <= 160,
    hasKeywordInTitle: focusKeyword && title.toLowerCase().includes(focusKeyword.toLowerCase()),
    hasKeywordInDesc: focusKeyword && metaDesc.toLowerCase().includes(focusKeyword.toLowerCase()),
    contentLength: content.split(' ').length > 300,
    hasSecondaryKeywords: secondaryKeywords.length > 0,
    hasTargetAudience: targetAudience.length > 0
  }

  useEffect(() => {
    let newScore = 0
    if (checks.titleLength) newScore += 15
    if (checks.descLength) newScore += 15
    if (checks.hasKeywordInTitle) newScore += 20
    if (checks.hasKeywordInDesc) newScore += 20
    if (checks.contentLength) newScore += 10
    if (checks.hasSecondaryKeywords) newScore += 10
    if (checks.hasTargetAudience) newScore += 10
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

  const TagInput = ({ tags = [], setTags, placeholder, label }) => {
    const [input, setInput] = useState('')
    
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && input.trim()) {
        e.preventDefault()
        if (!tags.includes(input.trim())) {
          setTags([...tags, input.trim()])
        }
        setInput('')
      }
    }

    const removeTag = (tagToRemove) => {
      setTags(tags.filter(tag => tag !== tagToRemove))
    }

    return (
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>{label}</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
          {tags.map((tag, idx) => (
            <div key={idx} style={{ background: '#f1f5f9', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {tag}
              <button onClick={() => removeTag(tag)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
                <X size={12} color="#64748b" />
              </button>
            </div>
          ))}
        </div>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px' }}
        />
        <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Press Enter to add</p>
      </div>
    )
  }

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

      {/* Meta Information */}
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

      <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />

      {/* Content Specs */}
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Target Audience</label>
        <input 
          type="text" 
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Enterprise CTOs, Developers..."
          style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Schema Type</label>
        <select 
          value={schemaType}
          onChange={(e) => setSchemaType(e.target.value)}
          style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', background: 'white' }}
        >
          <option value="Article">Article (Default)</option>
          <option value="BlogPosting">Blog Posting</option>
          <option value="HowTo">How-To Guide</option>
          <option value="FAQPage">FAQ Page</option>
          <option value="Review">Review</option>
        </select>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />

      {/* Keyword Planning */}
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Primary (Focus) Keyword</label>
        <input 
          type="text" 
          value={focusKeyword}
          onChange={(e) => setFocusKeyword(e.target.value)}
          placeholder="e.g. enterprise blockchain"
          style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', marginBottom: '1rem' }}
        />

        {setSecondaryKeywords && (
          <TagInput 
            label="Secondary Keywords (Medium Volume)" 
            tags={secondaryKeywords} 
            setTags={setSecondaryKeywords} 
            placeholder="e.g. decentralized file sharing" 
          />
        )}
        
        {setLongTailKeywords && (
          <TagInput 
            label="Long-Tail Keywords (High Intent)" 
            tags={longTailKeywords} 
            setTags={setLongTailKeywords} 
            placeholder="e.g. how does blockchain secure file transfers" 
          />
        )}

        {setLsiKeywords && (
          <TagInput 
            label="LSI Keywords (Contextual)" 
            tags={lsiKeywords} 
            setTags={setLsiKeywords} 
            placeholder="e.g. cryptographic hashing" 
          />
        )}
      </div>

      {/* Checklist */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>SEO Checklist</h4>
        <CheckItem passed={checks.titleLength} text={`Title length (current: ${title.length} chars, target: 50-60)`} />
        <CheckItem passed={checks.descLength} text={`Meta description length (target: 120-160 chars)`} />
        <CheckItem passed={checks.hasKeywordInTitle} text={`Focus keyword in title`} />
        <CheckItem passed={checks.hasKeywordInDesc} text={`Focus keyword in meta description`} />
        <CheckItem passed={checks.hasTargetAudience} text={`Target audience defined`} />
        <CheckItem passed={checks.hasSecondaryKeywords} text={`Secondary keywords added`} />
      </div>

      {/* Google Preview */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Search Preview</h4>
        <div style={{ padding: '1rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.875rem', color: '#1a0dab', cursor: 'pointer' }}>https://bootsolo.com › blog › {slug || 'example-slug'}</div>
          <div style={{ fontSize: '1.125rem', color: '#1a0dab', fontWeight: 500, margin: '0.25rem 0', textDecoration: 'none', cursor: 'pointer' }}>
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
