import Sidebar from '@/components/admin/Sidebar'

export const metadata = {
  title: 'Admin Dashboard | CMS',
  robots: {
    index: false,
    follow: false,
  }
}

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5' }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: '260px', padding: '2rem' }}>
        {children}
      </main>
    </div>
  )
}
