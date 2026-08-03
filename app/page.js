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

      {/* 2. Early Social Proof Ticker */}
      <div className="early-trust-bar bg-summit py-4 border-b border-border">
        <div className="container flex items-center justify-between gap-4 flex-wrap text-snow text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            <span>LIVE ENGINE DATA: 312% Average Signup Growth across 50+ Bootstrapped Brands</span>
          </div>
          <div className="text-fg3">
            <span>ChatGPT · Perplexity · Google AI Overviews</span>
          </div>
        </div>
      </div>

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
