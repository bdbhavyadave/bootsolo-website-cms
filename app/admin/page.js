'use client'

import { useState, useEffect } from 'react'
import { FileText, Users, Eye, TrendingUp } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ posts: 0, leads: 0, views: '45.2k', readingTime: '4m 12s' })
  const [recentPosts, setRecentPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/dashboard')
        const data = await res.json()
        if (res.ok && data.totals) {
          setStats(data.totals)
          setRecentPosts(data.recentPosts || [])
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  // Mock data for analytics
  const trafficData = [
    { name: 'Mon', views: 400 },
    { name: 'Tue', views: 300 },
    { name: 'Wed', views: 550 },
    { name: 'Thu', views: 450 },
    { name: 'Fri', views: 700 },
    { name: 'Sat', views: 800 },
    { name: 'Sun', views: 950 },
  ]

  const StatCard = ({ title, value, icon: Icon, trend }) => (
    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>{title}</p>
        <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>{value}</h3>
        {trend && (
          <p style={{ color: trend > 0 ? '#10b981' : '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <TrendingUp size={16} style={{ transform: trend < 0 ? 'scaleY(-1)' : 'none' }} />
            {Math.abs(trend)}% from last month
          </p>
        )}
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
        <StatCard title="Total Published Posts" value={loading ? '...' : stats.posts} icon={FileText} trend={12} />
        <StatCard title="Total Leads" value={loading ? '...' : stats.leads} icon={Users} trend={8} />
        <StatCard title="Total Blog Views" value={stats.views} icon={Eye} trend={24} />
        <StatCard title="Avg. Reading Time" value={stats.readingTime} icon={TrendingUp} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Traffic Overview (Last 7 Days)</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#888' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: 'var(--accent)', fontWeight: 600 }}
                />
                <Line type="monotone" dataKey="views" stroke="var(--accent)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
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
