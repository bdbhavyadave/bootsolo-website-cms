'use client'

import { useState, useEffect } from 'react'
import { Download, Search, Mail, Eye, Trash2 } from 'lucide-react'

export default function LeadManagement() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/leads')
      const data = await res.json()
      setLeads(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this lead?')) return
    try {
      await fetch(`/api/leads/${id}`, { method: 'DELETE' })
      fetchLeads()
    } catch (err) {
      console.error(err)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return { bg: '#dbeafe', text: '#1e3a8a' }
      case 'contacted': return { bg: '#fef3c7', text: '#92400e' }
      case 'converted': return { bg: '#dcfce7', text: '#166534' }
      default: return { bg: '#f1f5f9', text: '#475569' }
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Lead Management</h1>
          <p style={{ color: '#666', marginTop: '0.25rem' }}>Manage and analyze incoming sales leads.</p>
        </div>
        <button 
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
          Export CSV
        </button>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input 
              type="text" 
              placeholder="Search leads by name or email..." 
              style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '6px', border: '1px solid #ddd' }}
            />
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #eee', textAlign: 'left', color: '#64748b', fontSize: '0.875rem' }}>
              <th style={{ padding: '1rem 1.5rem' }}>Contact Detail</th>
              <th style={{ padding: '1rem 1.5rem' }}>Company</th>
              <th style={{ padding: '1rem 1.5rem' }}>Service & Budget</th>
              <th style={{ padding: '1rem 1.5rem' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem' }}>Date</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <p style={{ fontWeight: 600, color: '#0f172a' }}>{lead.name}</p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>{lead.email}</p>
                </td>
                <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{lead.company}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <p style={{ color: '#0f172a', fontSize: '0.9rem' }}>{lead.service}</p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>{lead.budget}</p>
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
                <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{lead.date}</td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    <button title="View Details" style={{ padding: '0.4rem', color: '#64748b', background: 'none', border: 'none', cursor: 'pointer' }}>
                      <Eye size={18} />
                    </button>
                    <button title="Email Contact" style={{ padding: '0.4rem', color: '#64748b', background: 'none', border: 'none', cursor: 'pointer' }}>
                      <Mail size={18} />
                    </button>
                    <button onClick={() => handleDelete(lead.id)} style={{ padding: '0.4rem', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
