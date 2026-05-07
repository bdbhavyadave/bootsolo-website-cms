'use client'

import { useEffect, useState } from 'react'
import { User, Shield, ChevronDown, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Topbar() {
  const [user, setUser] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // In a real app, this would fetch from the session endpoint.
    // For now, since the layout is protected by middleware, we can fetch from an endpoint.
    const fetchUser = async () => {
      try {
        // We'll create a simple /api/auth/me endpoint later to get the current user session
        const res = await fetch('/api/auth/me')
        if (res.ok) {
          const data = await res.json()
          setUser(data.user)
        } else {
          // fallback if endpoint doesn't exist yet
          setUser({ first_name: 'Bhavya', last_name: 'Dave', role: 'admin' })
        }
      } catch (err) {
        setUser({ first_name: 'Bhavya', last_name: 'Dave', role: 'admin' })
      }
    }
    fetchUser()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
      router.refresh()
    } catch (err) {
      console.error(err)
    }
  }

  if (!user) return <div style={{ height: '70px', background: 'white', borderBottom: '1px solid #eee' }} />

  return (
    <div style={{ 
      height: '70px', 
      background: 'white', 
      borderBottom: '1px solid #eee', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-end',
      padding: '0 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ position: 'relative' }}>
        <button 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '8px',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#f8fafc'}
          onMouseOut={(e) => e.currentTarget.style.background = 'none'}
        >
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#0f172a' }}>
              {user.first_name} {user.last_name}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'flex-end', color: '#64748b', fontSize: '0.75rem', textTransform: 'capitalize' }}>
              <Shield size={12} color={user.role === 'admin' ? '#10b981' : '#f59e0b'} />
              {user.role}
            </div>
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <User size={20} />
          </div>
          <ChevronDown size={16} color="#64748b" />
        </button>

        {dropdownOpen && (
          <div style={{ 
            position: 'absolute', 
            top: '100%', 
            right: 0, 
            marginTop: '0.5rem',
            background: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
            border: '1px solid #e2e8f0',
            width: '200px',
            overflow: 'hidden'
          }}>
            <button 
              onClick={() => {
                setDropdownOpen(false)
                router.push('/admin/settings')
              }}
              style={{ width: '100%', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', color: '#475569', textAlign: 'left', borderBottom: '1px solid #eee' }}
            >
              <User size={16} /> My Profile
            </button>
            <button 
              onClick={handleLogout}
              style={{ width: '100%', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', color: '#ef4444', textAlign: 'left' }}
            >
              <LogOut size={16} /> Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
