'use client';

import { useState } from 'react';
import AeoPageContent from '@/components/AeoPageContent';
import GrowthCallModal from '@/components/GrowthCallModal';

export default function HomePageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <AeoPageContent onOpenModal={handleOpenModal} />
      <GrowthCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
