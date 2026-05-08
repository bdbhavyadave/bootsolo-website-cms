'use client'

import { useState } from 'react'
import { Activity, Search, Code, Map, FileCode, CheckCircle, AlertTriangle } from 'lucide-react'

export default function SeoManagement() {
  const [activeTab, setActiveTab] = useState('health')

  const tabs = [
    { id: 'health', name: 'SEO Health', icon: Activity },
    { id: 'keywords', name: 'Keyword Tracking', icon: Search },
    { id: 'schema', name: 'Schema Markup', icon: Code },
    { id: 'sitemap', name: 'Sitemap & Robots', icon: Map },
    { id: 'llms', name: 'Llms.txt', icon: FileCode },
  ]

  const SeoHealth = () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '8px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>85</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Overall SEO Score</h3>
          <p style={{ color: '#64748b', marginTop: '0.5rem', fontSize: '0.875rem' }}>Your site is performing well. Fix the warnings below to reach 100.</p>
        </div>
        
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Quick Stats</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Indexed Pages</span>
              <span style={{ fontWeight: 600 }}>42</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Ranking Keywords</span>
              <span style={{ fontWeight: 600 }}>156</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Average Position</span>
              <span style={{ fontWeight: 600 }}>14.2</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Action Items</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#fffbeb', borderRadius: '8px', border: '1px solid #fde68a' }}>
            <AlertTriangle color="#d97706" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontWeight: 600, color: '#92400e' }}>Missing Meta Descriptions</h4>
              <p style={{ fontSize: '0.875rem', color: '#b45309', marginTop: '0.25rem' }}>3 pages are missing meta descriptions. This affects CTR in search results.</p>
              <button style={{ marginTop: '0.5rem', background: '#d97706', color: 'white', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}>Fix Now</button>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <CheckCircle color="#16a34a" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontWeight: 600, color: '#166534' }}>Mobile Usability</h4>
              <p style={{ fontSize: '0.875rem', color: '#15803d', marginTop: '0.25rem' }}>All 42 pages pass Google's Mobile-Friendly Test.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <CheckCircle color="#16a34a" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontWeight: 600, color: '#166534' }}>SSL Certificate</h4>
              <p style={{ fontSize: '0.875rem', color: '#15803d', marginTop: '0.25rem' }}>Valid HTTPS connection established.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const KeywordsTab = () => {
    const [keywords, setKeywords] = useState([])
    const [newKeyword, setNewKeyword] = useState('')

    const fetchKeywords = async () => {
      const res = await fetch('/api/admin/keywords')
      const data = await res.json()
      if (res.ok) setKeywords(data)
    }

    const handleAddKeyword = async () => {
      if (!newKeyword) return
      const res = await fetch('/api/admin/keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword: newKeyword })
      })
      if (res.ok) {
        setNewKeyword('')
        fetchKeywords()
      }
    }

    const handleDeleteKeyword = async (id) => {
      await fetch(`/api/admin/keywords/${id}`, { method: 'DELETE' })
      fetchKeywords()
    }

    useState(() => {
      fetchKeywords()
    }, [])

    return (
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Tracked Keywords</h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              placeholder="Enter keyword..." 
              value={newKeyword} 
              onChange={e => setNewKeyword(e.target.value)} 
              style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
            />
            <button onClick={handleAddKeyword} style={{ background: 'var(--accent, #0f172a)', color: 'white', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Add Keyword</button>
          </div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #eee', textAlign: 'left', color: '#64748b', fontSize: '0.875rem' }}>
              <th style={{ padding: '1rem 1.5rem' }}>Keyword</th>
              <th style={{ padding: '1rem 1.5rem' }}>Volume</th>
              <th style={{ padding: '1rem 1.5rem' }}>Current Rank</th>
              <th style={{ padding: '1rem 1.5rem' }}>Difficulty</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{item.keyword}</td>
                <td style={{ padding: '1rem 1.5rem', color: '#64748b' }}>{item.search_volume.toLocaleString()}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ color: item.current_rank <= 3 ? '#10b981' : item.current_rank <= 10 ? '#f59e0b' : '#ef4444', fontWeight: 600 }}>
                    #{item.current_rank}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ width: '100px', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.difficulty_score}%`, height: '100%', background: item.difficulty_score > 70 ? '#ef4444' : '#f59e0b' }}></div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.difficulty_score} / 100</span>
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <button onClick={() => handleDeleteKeyword(item.id)} style={{ padding: '0.4rem', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <AlertTriangle size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const LlmsTxtTab = () => (
    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Llms.txt Generator</h3>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>Create a markdown file to help AI models like ChatGPT and Claude understand your website structure and content.</p>
        </div>
        <button style={{ background: 'var(--accent)', color: 'white', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600, height: 'fit-content' }}>Auto-Generate</button>
      </div>
      <textarea 
        defaultValue={`# About [Company Name]\nWe are a premium B2B agency specializing in Web3 and AI development.\n\n## Services\n- Development\n- Marketing\n- Consulting\n\n## Blog\nRead our latest insights at /blog`}
        style={{ width: '100%', height: '300px', padding: '1rem', background: '#1e293b', color: '#f8fafc', fontFamily: 'monospace', borderRadius: '8px', border: 'none' }}
      />
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{ background: '#10b981', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Save Llms.txt</button>
      </div>
    </div>
  )

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>SEO Management</h1>
        <p style={{ color: '#666', marginTop: '0.25rem' }}>Optimize your site for search engines and AI models.</p>
      </div>

      {/* Tabs Navigation */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid #e2e8f0', marginBottom: '2rem', overflowX: 'auto' }}>
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'none',
                border: 'none',
                borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                color: isActive ? 'var(--accent)' : '#64748b',
                fontWeight: isActive ? 600 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              <Icon size={18} />
              {tab.name}
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'health' && <SeoHealth />}
        {activeTab === 'keywords' && <KeywordsTab />}
        {activeTab === 'llms' && <LlmsTxtTab />}
        {(activeTab === 'schema' || activeTab === 'sitemap') && (
          <div style={{ textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '12px' }}>
            <Map size={48} color="#cbd5e1" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Module in Development</h3>
            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>This feature will be available in the next release.</p>
          </div>
        )}
      </div>
    </div>
  )
}
