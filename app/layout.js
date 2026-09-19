import AppShell from '@/components/AppShell'
import './globals.css'
import './pages.css'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: `Start Solo. Climb Fast. | ${process.env.NEXT_PUBLIC_SITE_NAME || 'Bootsolo'}`,
  description: 'AI-native marketing for bootstrapped solopreneurs. Start solo, scale smart.',
  keywords: 'solopreneur, indie hacker, AI marketing, startup growth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
