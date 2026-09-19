'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import AiEra from '@/components/AiEra';
import WhyBootsolo from '@/components/WhyBootsolo';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FaqAccordion from '@/components/FaqAccordion';
import GrowthCallModal from '@/components/GrowthCallModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="landing-page-v4">
      {/* 1. Hero Section with Early Social Proof Integration */}
      <Hero onOpenModal={handleOpenModal} />

      {/* 3. Built for the AI Era */}
      <AiEra onOpenModal={handleOpenModal} />

      {/* 4. Why Bootsolo */}
      <WhyBootsolo onOpenModal={handleOpenModal} />

      {/* 5. Services (Content Locked to 7 modules x 4 bullets) */}
      <Services onOpenModal={handleOpenModal} />

      {/* 6. Client Testimonials (includes single Logo Marquee strip) */}
      <Testimonials />

      {/* 7. Objection-Handling FAQ Accordion */}
      <FaqAccordion />

      {/* Modal Scheduler */}
      <GrowthCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
