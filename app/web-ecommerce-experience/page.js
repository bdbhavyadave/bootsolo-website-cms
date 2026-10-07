import WebEcommerceClient from '@/components/WebEcommerceClient';

export const metadata = {
  title: 'High-Converting Website Design & Shopify Development for Startups | Bootsolo',
  description: 'Fast websites and Shopify stores built to convert. Bootsolo designs landing pages, websites and ecommerce experiences for lean teams, with 95+ PageSpeed scores and no long-term contracts.',
  keywords: 'high-converting website design, shopify development for startups, landing page design, ecommerce optimization, bootsolo web design, 95+ pagespeed scores',
  openGraph: {
    title: 'High-Converting Website Design & Shopify Development for Startups | Bootsolo',
    description: 'Fast websites and Shopify stores built to convert. Bootsolo designs landing pages, websites and ecommerce experiences for lean teams, with 95+ PageSpeed scores and no long-term contracts.',
    url: 'https://bootsolo.com/web-ecommerce-experience',
    siteName: 'Bootsolo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Converting Website Design & Shopify Development for Startups | Bootsolo',
    description: 'Fast websites and Shopify stores built to convert. Bootsolo designs landing pages, websites and ecommerce experiences for lean teams, with 95+ PageSpeed scores and no long-term contracts.',
  }
};

export default function WebEcommercePage() {
  return <WebEcommerceClient />;
}
