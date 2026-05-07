import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
import { createServerSupabaseClient } from '@/lib/supabase'
import './globals.css'

export const metadata = {
  title: `Enterprise Blockchain, AI & Web3 Development | ${process.env.NEXT_PUBLIC_SITE_NAME || 'Agency'}`,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Premium blockchain development, AI solutions, and digital marketing for enterprises in US, Europe, Middle East & Asia.',
  keywords: 'blockchain development, AI consulting, Web3 services, digital marketing',
}

export default async function RootLayout({ children }) {
  const supabase = createServerSupabaseClient()
  
  // Fetch default color palette
  const { data: defaultPalette } = await supabase
    .from('color_palettes')
    .select('*')
    .eq('is_default', true)
    .single()

  return (
    <html lang="en">
      <body>
        <ThemeProvider initialPalette={defaultPalette} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
