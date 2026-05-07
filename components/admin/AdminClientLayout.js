'use client'

import Sidebar from '@/components/admin/Sidebar'
import { usePathname } from 'next/navigation'

export default function AdminClientLayout({ children }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) {
    return (
      <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {children}
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5' }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: '260px', padding: '2rem' }}>
        {children}
      </main>
    </div>
  )
}
