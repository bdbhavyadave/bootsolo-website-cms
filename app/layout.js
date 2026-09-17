import AppShell from '@/components/AppShell'
import './globals.css'
import './pages.css'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'Answer Engine Optimization Services | Bootsolo',
  description: 'Bootsolo helps B2B and SaaS brands earn visibility inside AI answer engines like ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews with structured Answer Engine Optimization (AEO) focused on leads, citations, and pipeline.',
  keywords: 'Answer Engine Optimization, AEO, AI search, ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude, B2B SaaS',
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
