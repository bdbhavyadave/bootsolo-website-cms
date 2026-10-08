import IndustriesClient from '@/components/IndustriesClient';

export const metadata = {
  title: 'Industries We Serve | AI-Powered Marketing for SaaS, Ecommerce, Real Estate, Healthcare & More | Bootsolo',
  description: 'Bootsolo builds AI-powered marketing for SaaS, ecommerce, real estate, healthcare, education, Web3 and more. Strategy by humans, speed by AI, no long-term contracts.',
  alternates: {
    canonical: 'https://bootsolo.com/industries',
  },
  openGraph: {
    title: 'Industries We Serve | AI-Powered Marketing for SaaS, Ecommerce, Real Estate, Healthcare & More | Bootsolo',
    description: 'Bootsolo builds AI-powered marketing for SaaS, ecommerce, real estate, healthcare, education, Web3 and more. Strategy by humans, speed by AI, no long-term contracts.',
    url: 'https://bootsolo.com/industries',
    siteName: 'Bootsolo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | AI-Powered Marketing for SaaS, Ecommerce, Real Estate, Healthcare & More | Bootsolo',
    description: 'Bootsolo builds AI-powered marketing for SaaS, ecommerce, real estate, healthcare, education, Web3 and more. Strategy by humans, speed by AI, no long-term contracts.',
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
