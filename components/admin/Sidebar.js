'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { BootsoloLogo } from '@/components/Brand'
import { 
  LayoutDashboard, 
  FileText, 
  Search, 
  Users, 
  BarChart, 
  Settings, 
  LogOut,
  UserCog
} from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const isActive = (path) => {
    if (path === '/admin') return pathname === '/admin'
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const NavItem = ({ href, icon: Icon, children }) => (
    <li>
      <Link 
        href={href}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          color: isActive(href) ? 'white' : '#a1a1aa',
          background: isActive(href) ? 'var(--accent)' : 'transparent',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'all 0.2s',
        }}
      >
        <Icon size={20} />
        {children}
      </Link>
    </li>
  )

  return (
    <aside style={{
      width: '260px',
      background: '#0E1A2B',
      color: '#ffffff',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid #1E2D45',
      zIndex: 100
    }}>
      <div style={{ padding: '1.75rem 1.5rem', borderBottom: '1px solid #1E2D45' }}>
        <Link 
          href="/admin" 
          style={{ 
            display: 'block', 
            textDecoration: 'none'
          }}
          title="Go to Admin Dashboard"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
            <BootsoloLogo height={28} color="#FFFFFF" planeColor="#FF6B35" />
            <span style={{ 
              fontSize: '0.65rem', 
              fontWeight: 700, 
              letterSpacing: '0.06em', 
              padding: '2px 7px', 
              borderRadius: '4px', 
              background: 'rgba(255, 107, 53, 0.18)', 
              color: '#FF6B35', 
              border: '1px solid rgba(255, 107, 53, 0.35)', 
              textTransform: 'uppercase' 
            }}>
              CMS
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <h2 style={{ 
              fontSize: '1.15rem', 
              fontWeight: 800, 
              letterSpacing: '-0.3px',
              margin: 0,
              background: 'linear-gradient(135deg, #FF6B35 0%, #FFA26B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: '#FF6B35'
            }}>
              Agency CMS
            </h2>
            <span style={{ fontSize: '0.65rem', color: '#8AA0B8', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Admin Portal
            </span>
          </div>
        </Link>
      </div>

      <nav style={{ flex: 1, padding: '0 1rem', overflowY: 'auto' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <NavItem href="/admin" icon={LayoutDashboard}>Dashboard</NavItem>
          
          <div style={{ marginTop: '1rem', marginBottom: '0.5rem', paddingLeft: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', color: '#666', fontWeight: 600 }}>Content</div>
          <NavItem href="/admin/blog" icon={FileText}>Blog Posts</NavItem>
          <NavItem href="/admin/seo" icon={Search}>SEO Tools</NavItem>
          
          <div style={{ marginTop: '1rem', marginBottom: '0.5rem', paddingLeft: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', color: '#666', fontWeight: 600 }}>Data</div>
          <NavItem href="/admin/leads" icon={Users}>Leads</NavItem>
          <NavItem href="/admin/analytics" icon={BarChart}>Analytics</NavItem>
          
          <div style={{ marginTop: '1rem', marginBottom: '0.5rem', paddingLeft: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', color: '#666', fontWeight: 600 }}>System</div>
          <NavItem href="/admin/users" icon={UserCog}>User Management</NavItem>
          <NavItem href="/admin/settings" icon={Settings}>Settings</NavItem>
        </ul>
      </nav>

      <div style={{ padding: '1.5rem', borderTop: '1px solid #2a2a2a' }}>
        <button 
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            width: '100%',
            background: 'transparent',
            border: 'none',
            color: '#a1a1aa',
            cursor: 'pointer',
            fontWeight: 500,
            textAlign: 'left'
          }}
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
