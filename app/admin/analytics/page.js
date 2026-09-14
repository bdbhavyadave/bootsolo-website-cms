'use client'

import { useState, useEffect } from 'react'
import { Activity, Users, Eye, ArrowUpRight, BarChart3, Smartphone, Laptop } from 'lucide-react'

export default function Analytics() {
  const [leadsCount, setLeadsCount] = useState(0)

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then(res => res.json())
      .then(data => {
        if (data?.totals?.leads) setLeadsCount(data.totals.leads)
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Analytics & Performance</h1>
        <p style={{ color: '#666', marginTop: '0.25rem' }}>Live audience traffic, impressions, and conversion analytics.</p>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500, margin: '0 0 0.5rem 0' }}>Live Visitors Today</p>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>0</h3>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem', display: 'block' }}>Telemetry active</span>
        </div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500, margin: '0 0 0.5rem 0' }}>Total Page Views (7d)</p>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>0</h3>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem', display: 'block' }}>No demo data</span>
        </div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500, margin: '0 0 0.5rem 0' }}>Captured Inquiries</p>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>{leadsCount}</h3>
          <span style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.35rem', display: 'block', fontWeight: 500 }}>Genuine submissions</span>
        </div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500, margin: '0 0 0.5rem 0' }}>Avg. Session Duration</p>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>0m 00s</h3>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem', display: 'block' }}>Awaiting traffic</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div style={{ background: 'white', padding: '1.75rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: 0 }}>Traffic Activity (Last 7 Days)</h3>
            <span style={{ fontSize: '0.75rem', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>Live Telemetry</span>
          </div>
          <div style={{ height: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fafbfc', borderRadius: '8px', border: '1px dashed #e2e8f0', padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <BarChart3 size={24} color="#94a3b8" />
            </div>
            <h4 style={{ fontWeight: 600, fontSize: '1rem', color: '#334155', margin: 0 }}>No Live Visitor Events Recorded</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.4rem', maxWidth: '340px', lineHeight: 1.5 }}>
              Daily page views and organic referral sources will populate automatically as users navigate your live website.
            </p>
          </div>
        </div>

        <div style={{ background: 'white', padding: '1.75rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1.5rem' }}>Device Breakdown</h3>
          <div style={{ height: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fafbfc', borderRadius: '8px', border: '1px dashed #e2e8f0', padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Laptop size={24} color="#94a3b8" />
            </div>
            <h4 style={{ fontWeight: 600, fontSize: '0.95rem', color: '#334155', margin: 0 }}>Awaiting Device Data</h4>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginTop: '0.4rem', lineHeight: 1.5 }}>
              Desktop vs. mobile breakdown will calculate dynamically once live user agent traffic begins.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
