import { Suspense } from 'react';
import SeoAeoGeoClient from '@/components/SeoAeoGeoClient';

export const metadata = {
  title: 'SEO, AEO & GEO Optimization Services | Bootsolo',
  description: 'Dominate traditional organic search (SEO), AI answer engines (AEO), and generative model citations (GEO) across Google, ChatGPT, Perplexity, and Gemini.',
  keywords: 'SEO, AEO, GEO, Answer Engine Optimization, Generative Engine Optimization, Search Engine Optimization, ChatGPT citations, Perplexity SEO',
};

export default function SeoAeoGeoPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh', background: 'var(--bg)' }} />}>
      <SeoAeoGeoClient />
    </Suspense>
  );
}
