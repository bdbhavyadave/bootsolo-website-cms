'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, Users, Eye, TrendingUp, ArrowRight, Mail, Phone } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ posts: 0, leads: 0, views: 0, readingTime: '0m' })
  const [recentPosts, setRecentPosts] = useState([])
  const [recentLeads, setRecentLeads] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/dashboard', { cache: 'no-store' })
        const data = await res.json()
        if (res.ok && data.totals) {
          setStats(data.totals)
          setRecentPosts(data.recentPosts || [])
          setRecentLeads(data.recentLeads || [])
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()

    let bc = null
    try {
      bc = new BroadcastChannel('bootsolo_leads_channel')
      bc.onmessage = (event) => {
        if (event.data?.type === 'LEAD_SUBMITTED') {
          fetchStats()
        }
      }
    } catch (e) {}

    const onStorage = (e) => {
      if (e.key === 'bootsolo_last_lead_event') {
        fetchStats()
      }
    }
    window.addEventListener('storage', onStorage)

    const timer = setInterval(fetchStats, 3000)
    return () => {
      if (bc) bc.close()
      window.removeEventListener('storage', onStorage)
      clearInterval(timer)
    }
  }, [])

  const StatCard = ({ title, value, icon: Icon }) => (
    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>{title}</p>
        <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>{value}</h3>
      </div>
      <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '50%' }}>
        <Icon size={24} color="var(--accent, #0f172a)" />
      </div>
    </div>
  )

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Dashboard Overview</h1>
          <p style={{ color: '#666', marginTop: '0.25rem' }}>Welcome back. Here's what's happening with your CMS today.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <StatCard title="Total Published Posts" value={loading ? '...' : stats.posts} icon={FileText} />
        <StatCard title="Total Leads / Inquiries" value={loading ? '...' : stats.leads} icon={Users} />
        <StatCard title="Total Blog Views" value={loading ? '...' : stats.views} icon={Eye} />
        <StatCard title="Avg. Reading Time" value={loading ? '...' : stats.readingTime} icon={TrendingUp} />
      </div>

      {/* Recent Form Inquiries Banner */}
      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Recent Form Submissions (Leads)</h3>
            <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.2rem' }}>Latest leads captured from website forms and quote builders.</p>
          </div>
          <Link 
            href="/admin/leads" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              color: 'var(--accent)', 
              fontWeight: 600, 
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}
          >
            View All Leads ({stats.leads}) <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #eee', textAlign: 'left', color: '#64748b', fontSize: '0.825rem' }}>
                <th style={{ padding: '0.75rem 1rem' }}>Contact</th>
                <th style={{ padding: '0.75rem 1rem' }}>Phone / Company</th>
                <th style={{ padding: '0.75rem 1rem' }}>Service Requested</th>
                <th style={{ padding: '0.75rem 1rem' }}>Budget</th>
                <th style={{ padding: '0.75rem 1rem' }}>Date & Time</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ padding: '1.5rem', textAlign: 'center', color: '#888' }}>
                    No leads recorded yet. Submissions from website forms will appear here.
                  </td>
                </tr>
              ) : (
                recentLeads.map((lead) => (
                  <tr key={lead.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <p style={{ fontWeight: 600, color: '#0f172a', margin: 0 }}>{lead.name}</p>
                      <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.15rem 0 0 0' }}>{lead.email}</p>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#475569', fontSize: '0.875rem' }}>
                      {lead.phone || lead.company || '—'}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#0f172a', fontSize: '0.875rem' }}>
                      {lead.service || lead.service_interested || 'Custom Plan'}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 500 }}>
                      {lead.budget || lead.budget_range || 'Flexible'}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#64748b', fontSize: '0.85rem' }}>
                      <p style={{ margin: 0, fontWeight: 500, color: '#0f172a' }}>{lead.date}</p>
                      <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.75rem', color: '#64748b' }}>
                        {lead.time || (lead.created_at ? new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '')}
                      </p>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                      <span style={{ 
                        background: '#dbeafe', 
                        color: '#1e3a8a', 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '999px', 
                        fontSize: '0.75rem', 
                        fontWeight: 600,
                        textTransform: 'capitalize'
                      }}>
                        {lead.status || 'new'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>Traffic Overview (Last 7 Days)</h3>
            <span style={{ fontSize: '0.75rem', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>Live Telemetry</span>
          </div>
          <div style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fafbfc', borderRadius: '8px', border: '1px dashed #e2e8f0', padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.85rem' }}>
              <Eye size={22} color="#94a3b8" />
            </div>
            <h4 style={{ fontWeight: 600, fontSize: '0.95rem', color: '#334155', margin: 0 }}>No Live Visitor Traffic Recorded Yet</h4>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginTop: '0.35rem', maxWidth: '320px', lineHeight: 1.5 }}>
              Traffic impressions and visitor analytics will stream here as visitors view your live marketing pages.
            </p>
          </div>
        </div>

        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Recent Posts</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentPosts.length === 0 ? (
              <p style={{ color: '#888', fontSize: '0.875rem' }}>No recent posts found.</p>
            ) : recentPosts.map((post, i) => (
              <div key={post.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: i !== recentPosts.length - 1 ? '1px solid #eee' : 'none' }}>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '0.9rem' }}>{post.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem' }}>
                    {new Date(post.created_at).toLocaleDateString()} • Category: {post.category || 'N/A'}
                  </p>
                </div>
                <div style={{ 
                  background: post.status === 'published' ? '#dcfce7' : '#f1f5f9', 
                  color: post.status === 'published' ? '#166534' : '#475569', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '4px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600,
                  textTransform: 'capitalize' 
                }}>
                  {post.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
