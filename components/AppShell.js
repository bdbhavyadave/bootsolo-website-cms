'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GlobalContact from '@/components/GlobalContact'
import PaperPlaneCursor from '@/components/PaperPlaneCursor'

export default function AppShell({ children }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    return <main style={{ minHeight: '100vh' }}>{children}</main>
  }

  return (
    <>
      <PaperPlaneCursor />
      <Header />
      <main>{children}</main>
      <GlobalContact />
      <Footer />
    </>
  )
}
