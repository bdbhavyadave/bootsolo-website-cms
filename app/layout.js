import AppShell from '@/components/AppShell'
import './globals.css'
import './pages.css'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'

const dmSans = DM_Sans({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
})
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
})

export const metadata = {
  title: `Start Solo. Climb Fast. | ${process.env.NEXT_PUBLIC_SITE_NAME || 'Bootsolo'}`,
  description: 'AI-native marketing for bootstrapped solopreneurs. Start solo, scale smart.',
  keywords: 'solopreneur, indie hacker, AI marketing, startup growth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=JetBrains+Mono:ital,wght@0,400..700;1,400..700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
