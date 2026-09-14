'use client'

import { useState, useEffect } from 'react'
import { Download, Search, Mail, Eye, Trash2, X, Clock, Calendar, CheckCircle, ExternalLink, Phone } from 'lucide-react'

export default function LeadManagement() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedLead, setSelectedLead] = useState(null)
  const [activeTab, setActiveTab] = useState('all') // 'all', 'growth_call', 'custom_quote', 'roadmap'
  const [sortBy, setSortBy] = useState('date-desc') // 'date-desc', 'date-asc', 'name-asc', 'name-desc', 'type'

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/leads')
      const data = await res.json()
      if (Array.isArray(data)) {
        setLeads(data)
      } else {
        setLeads([])
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const handleDelete = async (id, e) => {
    if (e) e.stopPropagation()
    if (!window.confirm('Delete this lead?')) return
    try {
      await fetch(`/api/leads/${id}`, { method: 'DELETE' })
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead(null)
      }
      fetchLeads()
    } catch (err) {
      console.error(err)
    }
  }

  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('No leads available to export.')
      return
    }

    const headers = ['ID', 'Form Type', 'Name', 'Email', 'Phone/Company', 'Service', 'Budget', 'Date', 'Time', 'Submitted At', 'Status', 'Message/Quote']
    const rows = filteredLeads.map(l => [
      `"${l.id || ''}"`,
      `"${l.form_type || 'inquiry'}"`,
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.phone || l.company || '').replace(/"/g, '""')}"`,
      `"${(l.service || l.service_interested || '').replace(/"/g, '""')}"`,
      `"${(l.budget || l.budget_range || '').replace(/"/g, '""')}"`,
      `"${l.date || ''}"`,
      `"${l.time || ''}"`,
      `"${(l.submitted_at || '').replace(/"/g, '""')}"`,
      `"${l.status || 'new'}"`,
      `"${(l.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `bootsolo_${activeTab}_leads_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Filter by Tab and Search
  let processedLeads = leads.filter(l => {
    // Tab filtering
    if (activeTab !== 'all') {
      const type = l.form_type || 'inquiry'
      if (activeTab === 'growth_call' && type !== 'growth_call') return false
      if (activeTab === 'custom_quote' && type !== 'custom_quote') return false
      if (activeTab === 'roadmap' && (type !== 'roadmap' && type !== 'inquiry')) return false
    }

    // Search query filtering
    if (!search.trim()) return true
    const q = search.toLowerCase()
    const name = (l.name || '').toLowerCase()
    const email = (l.email || '').toLowerCase()
    const company = (l.company || l.phone || '').toLowerCase()
    const service = (l.service || l.service_interested || '').toLowerCase()
    const message = (l.message || '').toLowerCase()
    return name.includes(q) || email.includes(q) || company.includes(q) || service.includes(q) || message.includes(q)
  })

  // Sorting
  processedLeads.sort((a, b) => {
    if (sortBy === 'date-desc') {
      return new Date(b.created_at || 0) - new Date(a.created_at || 0)
    }
    if (sortBy === 'date-asc') {
      return new Date(a.created_at || 0) - new Date(b.created_at || 0)
    }
    if (sortBy === 'name-asc') {
      return (a.name || '').localeCompare(b.name || '')
    }
    if (sortBy === 'name-desc') {
      return (b.name || '').localeCompare(a.name || '')
    }
    if (sortBy === 'type') {
      return (a.form_type || '').localeCompare(b.form_type || '')
    }
    return 0
  })

  const filteredLeads = processedLeads

  // Counts for tabs
  const counts = {
    all: leads.length,
    growth_call: leads.filter(l => l.form_type === 'growth_call').length,
    custom_quote: leads.filter(l => l.form_type === 'custom_quote').length,
    roadmap: leads.filter(l => l.form_type === 'roadmap' || l.form_type === 'inquiry').length
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return { bg: '#dbeafe', text: '#1e3a8a' }
      case 'contacted': return { bg: '#fef3c7', text: '#92400e' }
      case 'converted': return { bg: '#dcfce7', text: '#166534' }
      default: return { bg: '#f1f5f9', text: '#475569' }
    }
  }

  const getFormTypeBadge = (type) => {
    switch (type) {
      case 'growth_call':
        return {
          label: 'Growth Call',
          bg: '#f5f3ff',
          text: '#6d28d9',
          border: '#ddd6fe',
          icon: '📞'
        }
      case 'custom_quote':
        return {
          label: 'Custom Quote',
          bg: '#ecfdf5',
          text: '#047857',
          border: '#a7f3d0',
          icon: '📋'
        }
      case 'roadmap':
        return {
          label: 'Roadmap Inquiry',
          bg: '#eff6ff',
          text: '#1d4ed8',
          border: '#bfdbfe',
          icon: '🗺️'
        }
      default:
        return {
          label: 'Website Inquiry',
          bg: '#fff7ed',
          text: '#c2410c',
          border: '#fed7aa',
          icon: '✉️'
        }
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Lead Management</h1>
          <p style={{ color: '#666', marginTop: '0.25rem' }}>Review, sort, and manage incoming leads across all website forms.</p>
        </div>
        <button 
          onClick={handleExportCSV}
          style={{ 
            background: 'white', 
            color: 'var(--primary)', 
            border: '1px solid #ddd',
            padding: '0.75rem 1.5rem', 
            borderRadius: '8px', 
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
          }}
        >
          <Download size={20} />
          Export CSV ({filteredLeads.length})
        </button>
      </div>

      {/* Form Type Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
        {[
          { id: 'all', label: 'All Forms', count: counts.all, icon: '📑' },
          { id: 'growth_call', label: 'Growth Calls', count: counts.growth_call, icon: '📞' },
          { id: 'custom_quote', label: 'Custom Quotes', count: counts.custom_quote, icon: '📋' },
          { id: 'roadmap', label: 'Roadmap & Inquiries', count: counts.roadmap, icon: '🗺️' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.1rem',
              borderRadius: '8px',
              border: activeTab === tab.id ? '1px solid var(--accent)' : '1px solid transparent',
              background: activeTab === tab.id ? 'var(--accent)' : 'white',
              color: activeTab === tab.id ? 'white' : '#475569',
              fontWeight: 600,
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.15s'
            }}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            <span style={{
              background: activeTab === tab.id ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
              color: activeTab === tab.id ? 'white' : '#64748b',
              padding: '0.1rem 0.5rem',
              borderRadius: '999px',
              fontSize: '0.75rem'
            }}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        {/* Search & Sort Controls Bar */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '360px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input 
              type="text" 
              placeholder="Search by name, email, service, or quote..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 1rem 0.65rem 2.5rem', borderRadius: '6px', border: '1px solid #ddd', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label htmlFor="sort-select" style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                style={{
                  padding: '0.55rem 0.9rem',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  fontSize: '0.875rem',
                  color: '#334155',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value="date-desc">Date & Time (Newest First)</option>
                <option value="date-asc">Date & Time (Oldest First)</option>
                <option value="name-asc">Client Name (A → Z)</option>
                <option value="name-desc">Client Name (Z → A)</option>
                <option value="type">Form Type (Grouped)</option>
              </select>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Showing <strong>{filteredLeads.length}</strong> {activeTab !== 'all' ? activeTab.replace('_', ' ') : ''} leads
            </span>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #eee', textAlign: 'left', color: '#64748b', fontSize: '0.85rem' }}>
                <th style={{ padding: '1rem 1.5rem', cursor: 'pointer' }} onClick={() => setSortBy(sortBy === 'name-asc' ? 'name-desc' : 'name-asc')}>
                  Contact Detail {sortBy === 'name-asc' ? '▲' : sortBy === 'name-desc' ? '▼' : ''}
                </th>
                <th style={{ padding: '1rem 1.5rem', cursor: 'pointer' }} onClick={() => setSortBy('type')}>
                  Form Source {sortBy === 'type' ? '▼' : ''}
                </th>
                <th style={{ padding: '1rem 1.5rem' }}>Company / Phone</th>
                <th style={{ padding: '1rem 1.5rem' }}>Service & Budget</th>
                <th style={{ padding: '1rem 1.5rem' }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', cursor: 'pointer' }} onClick={() => setSortBy(sortBy === 'date-desc' ? 'date-asc' : 'date-desc')}>
                  Date & Time {sortBy === 'date-desc' ? '▼' : sortBy === 'date-asc' ? '▲' : ''}
                </th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>Loading leads...</td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ padding: '2.5rem', textAlign: 'center', color: '#888' }}>
                    {search ? 'No leads matched your search query.' : 'No form submissions found in this category.'}
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr 
                    key={lead.id} 
                    onClick={() => setSelectedLead(lead)}
                    style={{ borderBottom: '1px solid #eee', cursor: 'pointer', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}
                  >
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <p style={{ fontWeight: 600, color: '#0f172a', margin: 0 }}>{lead.name}</p>
                      <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>{lead.email}</p>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      {(() => {
                        const badge = getFormTypeBadge(lead.form_type)
                        return (
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            background: badge.bg,
                            color: badge.text,
                            border: `1px solid ${badge.border}`,
                            padding: '0.25rem 0.65rem',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            whiteSpace: 'nowrap'
                          }}>
                            <span>{badge.icon}</span>
                            <span>{badge.label}</span>
                          </span>
                        )
                      })()}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>
                      {lead.phone || lead.company || '—'}
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <p style={{ color: '#0f172a', fontSize: '0.9rem', margin: 0, fontWeight: 500 }}>
                        {lead.service || lead.service_interested}
                      </p>
                      <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                        {lead.budget || lead.budget_range}
                      </p>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ 
                        background: getStatusColor(lead.status).bg, 
                        color: getStatusColor(lead.status).text, 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '999px', 
                        fontSize: '0.75rem', 
                        fontWeight: 600,
                        textTransform: 'capitalize'
                      }}>
                        {lead.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.875rem' }}>
                      <p style={{ margin: 0, fontWeight: 500, color: '#0f172a' }}>{lead.date}</p>
                      <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.78rem', color: '#64748b' }}>
                        {lead.time || (lead.created_at ? new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '')}
                      </p>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        <button 
                          title="View Full Details" 
                          onClick={(e) => { e.stopPropagation(); setSelectedLead(lead); }}
                          style={{ padding: '0.4rem', color: '#64748b', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <Eye size={18} />
                        </button>
                        {lead.email && (
                          <a 
                            href={`mailto:${lead.email}?subject=Follow up on your inquiry with Bootsolo`}
                            title="Email Contact" 
                            onClick={e => e.stopPropagation()}
                            style={{ padding: '0.4rem', color: '#64748b', display: 'flex', alignItems: 'center' }}
                          >
                            <Mail size={18} />
                          </a>
                        )}
                        <button 
                          title="Delete Lead"
                          onClick={(e) => handleDelete(lead.id, e)} 
                          style={{ padding: '0.4rem', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full Details Modal for Quote & Lead Details */}
      {selectedLead && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1.5rem'
        }} onClick={() => setSelectedLead(null)}>
          <div style={{
            background: 'white',
            width: '100%',
            maxWidth: '640px',
            maxHeight: '90vh',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }} onClick={e => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ 
                    background: getStatusColor(selectedLead.status).bg, 
                    color: getStatusColor(selectedLead.status).text, 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '999px', 
                    fontSize: '0.75rem', 
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>
                    {selectedLead.status}
                  </span>
                  {(() => {
                    const badge = getFormTypeBadge(selectedLead.form_type)
                    return (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        background: badge.bg,
                        color: badge.text,
                        border: `1px solid ${badge.border}`,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        <span>{badge.icon}</span>
                        <span>{badge.label}</span>
                      </span>
                    )
                  })()}
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0.4rem 0 0 0', color: '#0f172a' }}>
                  {selectedLead.name}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', padding: '0.4rem' }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Submission Date & Time */}
              <div style={{ display: 'flex', gap: '1.5rem', background: '#f1f5f9', padding: '0.85rem 1.25rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#334155' }}>
                  <Calendar size={16} color="var(--accent)" />
                  <strong>Date:</strong> {selectedLead.date}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#334155' }}>
                  <Clock size={16} color="var(--accent)" />
                  <strong>Time:</strong> {selectedLead.time || (selectedLead.created_at ? new Date(selectedLead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A')}
                </div>
              </div>

              {/* Contact Information */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: '#fafafa', padding: '1rem', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                  <p style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>Email Address</p>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 600, color: '#0f172a', wordBreak: 'break-all' }}>
                    {selectedLead.email ? (
                      <a href={`mailto:${selectedLead.email}`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                        {selectedLead.email}
                      </a>
                    ) : 'Not provided'}
                  </p>
                </div>
                <div style={{ background: '#fafafa', padding: '1rem', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                  <p style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>Phone / Website / Company</p>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 600, color: '#0f172a' }}>
                    {selectedLead.phone || selectedLead.company || 'Not provided'}
                  </p>
                </div>
              </div>

              {/* Service & Budget */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: '#fafafa', padding: '1rem', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                  <p style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>Service Requested</p>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 600, color: '#0f172a' }}>
                    {selectedLead.service || selectedLead.service_interested}
                  </p>
                </div>
                <div style={{ background: '#fafafa', padding: '1rem', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                  <p style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>Budget / Route Total</p>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 600, color: '#16a34a' }}>
                    {selectedLead.budget || selectedLead.budget_range}
                  </p>
                </div>
              </div>

              {/* Full Message / Custom Quote Breakdown */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                  Form Details / Custom Quote Breakdown:
                </h4>
                <div style={{ 
                  background: '#f8fafc', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '8px', 
                  padding: '1rem 1.25rem',
                  fontSize: '0.875rem',
                  color: '#1e293b',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap',
                  fontFamily: 'inherit'
                }}>
                  {selectedLead.message || 'No additional message was included in this submission.'}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafafa' }}>
              <button 
                onClick={(e) => handleDelete(selectedLead.id, e)}
                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <Trash2 size={16} /> Delete Lead
              </button>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {selectedLead.email && (
                  <a 
                    href={`mailto:${selectedLead.email}?subject=Your Bootsolo Custom Quote & Growth Plan`}
                    style={{ 
                      background: 'var(--accent)', 
                      color: 'white', 
                      padding: '0.6rem 1.2rem', 
                      borderRadius: '6px', 
                      fontWeight: 600, 
                      fontSize: '0.875rem', 
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Mail size={16} /> Reply via Email
                  </a>
                )}
                <button 
                  onClick={() => setSelectedLead(null)}
                  style={{ background: 'white', border: '1px solid #ddd', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, fontSize: '0.875rem' }}
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
