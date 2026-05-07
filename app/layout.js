import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: `Enterprise Blockchain, AI & Web3 Development | ${process.env.NEXT_PUBLIC_SITE_NAME || 'Agency'}`,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Premium blockchain development, AI solutions, and digital marketing for enterprises in US, Europe, Middle East & Asia.',
  keywords: 'blockchain development, AI consulting, Web3 services, digital marketing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
