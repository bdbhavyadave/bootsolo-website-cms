'use client'

import { useState, useEffect } from 'react'
import { Save, Plus, Trash2, CheckCircle2 } from 'lucide-react'

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general')
  
  // Settings State
  const [settings, setSettings] = useState({
    general: { site_name: '', site_description: '' },
    ai: { openai_key: '', claude_key: '', gemini_key: '' }
  })
  
  // Palettes State
  const [palettes, setPalettes] = useState([])
  const [newPalette, setNewPalette] = useState({ name: '', primary_color: '#000000', secondary_color: '#000000', accent_color: '#000000', background_color: '#ffffff' })
  
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchSettings()
    fetchPalettes()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings')
      const data = await res.json()
      if (res.ok) {
        setSettings({
          general: data.general || { site_name: '', site_description: '' },
          ai: data.ai || { openai_key: '', claude_key: '', gemini_key: '' }
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchPalettes = async () => {
    try {
      const res = await fetch('/api/admin/palettes')
      const data = await res.json()
      if (res.ok) setPalettes(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSaveSettings = async (key, value) => {
    setSaving(true)
    setMessage('')
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value })
      })
      if (!res.ok) throw new Error('Failed to save settings')
      setMessage('Settings saved successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setMessage(`Error: ${err.message}`)
    } finally {
      setSaving(false)
    }
  }

  const handleCreatePalette = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/palettes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPalette)
      })
      if (res.ok) {
        await fetchPalettes()
        setNewPalette({ name: '', primary_color: '#000000', secondary_color: '#000000', accent_color: '#000000', background_color: '#ffffff' })
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleSetDefaultPalette = async (palette) => {
    try {
      await fetch(`/api/admin/palettes/${palette.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_default: true })
      })
      await fetchPalettes()
      // Reload page to apply new theme across the admin panel layout (optional, but good for immediate feedback)
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeletePalette = async (id) => {
    if (!window.confirm('Delete this palette?')) return
    try {
      await fetch(`/api/admin/palettes/${id}`, { method: 'DELETE' })
      await fetchPalettes()
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <div style={{ padding: '2rem' }}>Loading settings...</div>

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Settings</h1>
        <p style={{ color: '#666', marginTop: '0.25rem' }}>Manage website configuration and integrations.</p>
      </div>

      {message && (
        <div style={{ background: message.includes('Error') ? '#fee2e2' : '#dcfce7', color: message.includes('Error') ? '#dc2626' : '#166534', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
          {message}
        </div>
      )}

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #e2e8f0', marginBottom: '2rem' }}>
        {['general', 'ai', 'themes'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid var(--accent, #000)' : '2px solid transparent',
              color: activeTab === tab ? 'var(--accent, #000)' : '#64748b',
              fontWeight: activeTab === tab ? 600 : 500,
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {tab === 'ai' ? 'AI Connections' : tab}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: '800px' }}>
        
        {/* General Settings Tab */}
        {activeTab === 'general' && (
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>General Settings</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Site Name</label>
                <input 
                  type="text" 
                  value={settings.general.site_name} 
                  onChange={(e) => setSettings({ ...settings, general: { ...settings.general, site_name: e.target.value } })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Site Description</label>
                <textarea 
                  value={settings.general.site_description} 
                  onChange={(e) => setSettings({ ...settings, general: { ...settings.general, site_description: e.target.value } })}
                  rows={4}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} 
                />
              </div>
              <button 
                onClick={() => handleSaveSettings('general', settings.general)}
                disabled={saving}
                style={{ background: 'var(--accent, #000)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}
              >
                <Save size={18} /> Save Changes
              </button>
            </div>
          </div>
        )}

        {/* AI Connections Tab */}
        {activeTab === 'ai' && (
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>AI Integrations</h2>
            <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Connect LLMs for automated content generation and SEO auditing.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>OpenAI API Key</label>
                <input 
                  type="password" 
                  value={settings.ai.openai_key} 
                  onChange={(e) => setSettings({ ...settings, ai: { ...settings.ai, openai_key: e.target.value } })}
                  placeholder="sk-..."
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Anthropic Claude Key</label>
                <input 
                  type="password" 
                  value={settings.ai.claude_key} 
                  onChange={(e) => setSettings({ ...settings, ai: { ...settings.ai, claude_key: e.target.value } })}
                  placeholder="sk-ant-..."
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Google Gemini Key</label>
                <input 
                  type="password" 
                  value={settings.ai.gemini_key} 
                  onChange={(e) => setSettings({ ...settings, ai: { ...settings.ai, gemini_key: e.target.value } })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} 
                />
              </div>
              <button 
                onClick={() => handleSaveSettings('ai', settings.ai)}
                disabled={saving}
                style={{ background: 'var(--accent, #000)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}
              >
                <Save size={18} /> Save AI Keys
              </button>
            </div>
          </div>
        )}

        {/* Themes Tab */}
        {activeTab === 'themes' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Create Palette */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Create Color Palette</h2>
              <form onSubmit={handleCreatePalette} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Palette Name</label>
                  <input type="text" required value={newPalette.name} onChange={e => setNewPalette({...newPalette, name: e.target.value})} placeholder="e.g. Dark Mode Ocean" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Primary</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input type="color" value={newPalette.primary_color} onChange={e => setNewPalette({...newPalette, primary_color: e.target.value})} style={{ width: '40px', height: '40px', padding: 0, border: 'none' }} />
                      <input type="text" value={newPalette.primary_color} onChange={e => setNewPalette({...newPalette, primary_color: e.target.value})} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Secondary</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input type="color" value={newPalette.secondary_color} onChange={e => setNewPalette({...newPalette, secondary_color: e.target.value})} style={{ width: '40px', height: '40px', padding: 0, border: 'none' }} />
                      <input type="text" value={newPalette.secondary_color} onChange={e => setNewPalette({...newPalette, secondary_color: e.target.value})} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Accent</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input type="color" value={newPalette.accent_color} onChange={e => setNewPalette({...newPalette, accent_color: e.target.value})} style={{ width: '40px', height: '40px', padding: 0, border: 'none' }} />
                      <input type="text" value={newPalette.accent_color} onChange={e => setNewPalette({...newPalette, accent_color: e.target.value})} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Background</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input type="color" value={newPalette.background_color} onChange={e => setNewPalette({...newPalette, background_color: e.target.value})} style={{ width: '40px', height: '40px', padding: 0, border: 'none' }} />
                      <input type="text" value={newPalette.background_color} onChange={e => setNewPalette({...newPalette, background_color: e.target.value})} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                  </div>
                </div>

                <button type="submit" style={{ background: '#10b981', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}>
                  <Plus size={18} /> Create Palette
                </button>
              </form>
            </div>

            {/* Saved Palettes */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Saved Palettes</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {palettes.map(palette => (
                  <div key={palette.id} style={{ border: palette.is_default ? '2px solid var(--accent, #000)' : '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', position: 'relative' }}>
                    
                    {palette.is_default && (
                      <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'var(--accent, #000)', color: 'white', borderRadius: '50%', padding: '4px' }}>
                        <CheckCircle2 size={16} />
                      </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <h3 style={{ fontWeight: 600 }}>{palette.name}</h3>
                      <button onClick={() => handleDeletePalette(palette.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ display: 'flex', height: '40px', borderRadius: '6px', overflow: 'hidden', marginBottom: '1rem' }}>
                      <div style={{ flex: 1, background: palette.primary_color }} title="Primary"></div>
                      <div style={{ flex: 1, background: palette.secondary_color }} title="Secondary"></div>
                      <div style={{ flex: 1, background: palette.accent_color }} title="Accent"></div>
                      <div style={{ flex: 1, background: palette.background_color, border: '1px solid #eee' }} title="Background"></div>
                    </div>

                    {!palette.is_default && (
                      <button 
                        onClick={() => handleSetDefaultPalette(palette)}
                        style={{ width: '100%', padding: '0.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer', fontWeight: 500 }}
                      >
                        Set as Active
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
