'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SeoTabContent from '@/components/SeoTabContent';
import AeoPageContent from '@/components/AeoPageContent';
import GeoTabContent from '@/components/GeoTabContent';
import GrowthCallModal from '@/components/GrowthCallModal';

export default function SeoAeoGeoClient() {
  const searchParams = useSearchParams();

  const tabQuery = searchParams.get('tab');
  const validTab = (tabQuery && ['seo', 'aeo', 'geo'].includes(tabQuery.toLowerCase())) 
    ? tabQuery.toLowerCase() 
    : 'aeo';

  const [activeTab, setActiveTab] = useState(validTab);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (tabQuery && ['seo', 'aeo', 'geo'].includes(tabQuery.toLowerCase())) {
      setActiveTab(tabQuery.toLowerCase());
    }
  }, [tabQuery]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="seo-aeo-geo-master">
      {/* Content Viewport */}
      <main className="tab-content-viewport">
        {activeTab === 'seo' && (
          <SeoTabContent onOpenModal={handleOpenModal} />
        )}

        {activeTab === 'aeo' && (
          <AeoPageContent onOpenModal={handleOpenModal} />
        )}

        {activeTab === 'geo' && (
          <GeoTabContent onOpenModal={handleOpenModal} />
        )}
      </main>

      {/* Shared Universal Growth Call Modal */}
      <GrowthCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
