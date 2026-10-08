import SaasIndustryClient from '@/components/SaasIndustryClient';

export const metadata = {
  title: 'SaaS Marketing Agency for B2B Startups | Demo Bookings, Trial Signups & AI Search | Bootsolo',
  description: 'Bootsolo helps B2B SaaS and tech companies get more trial signups, demo bookings and pipeline with AI search visibility, paid campaigns, content and conversion-focused websites. No long-term contracts.',
  alternates: {
    canonical: 'https://bootsolo.com/industries/b2b-saas-technology',
  },
  openGraph: {
    title: 'SaaS Marketing Agency for B2B Startups | Demo Bookings, Trial Signups & AI Search | Bootsolo',
    description: 'Bootsolo helps B2B SaaS and tech companies get more trial signups, demo bookings and pipeline with AI search visibility, paid campaigns, content and conversion-focused websites. No long-term contracts.',
    url: 'https://bootsolo.com/industries/b2b-saas-technology',
    siteName: 'Bootsolo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Marketing Agency for B2B Startups | Demo Bookings, Trial Signups & AI Search | Bootsolo',
    description: 'Bootsolo helps B2B SaaS and tech companies get more trial signups, demo bookings and pipeline with AI search visibility, paid campaigns, content and conversion-focused websites. No long-term contracts.',
  },
};

export default function SaasIndustryPage() {
  return <SaasIndustryClient />;
}
