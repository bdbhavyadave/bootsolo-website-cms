'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ResultsSnapshot from '@/components/ResultsSnapshot';
import AiEra from '@/components/AiEra';
import WhyBootsolo from '@/components/WhyBootsolo';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FaqAccordion from '@/components/FaqAccordion';
import CTA from '@/components/CTA';
import GrowthCallModal from '@/components/GrowthCallModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="landing-page-v4">
      {/* 1. Hero Section */}
      <Hero onOpenModal={handleOpenModal} />

      {/* 2. Results Snapshot: +312%, -58%, 4.1x */}
      <ResultsSnapshot onOpenModal={handleOpenModal} />

      {/* 3. Built for the AI Era */}
      <AiEra onOpenModal={handleOpenModal} />

      {/* 4. Why Bootsolo */}
      <WhyBootsolo onOpenModal={handleOpenModal} />

      {/* 5. Services: Six ways we drive your growth */}
      <Services onOpenModal={handleOpenModal} />

      {/* 6. Social Proof: Client Testimonials & Logo Marquee */}
      <Testimonials />

      {/* 7. Final Call to Action */}
      <CTA onOpenModal={handleOpenModal} />

      {/* 8. Objection-Handling FAQ Accordion */}
      <FaqAccordion />

      {/* Modal Scheduler */}
      <GrowthCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
