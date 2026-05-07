'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
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

  const isActive = (path) => pathname === path || pathname.startsWith(`${path}/`)

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
      background: 'var(--primary)',
      color: 'white',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid #2a2a2a'
    }}>
      <div style={{ padding: '2rem 1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.5px' }}>Agency CMS</h2>
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
