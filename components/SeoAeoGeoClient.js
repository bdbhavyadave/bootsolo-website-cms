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
      {/* Sticky Sub-Tab Switcher Bar */}
      <div className="seo-aeo-geo-nav-bar">
        <div className="wrap tab-control-wrapper">
          <div className="tab-buttons-container" role="tablist" aria-label="Search Optimization Disciplines">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'seo'}
              className={`tab-switch-btn ${activeTab === 'seo' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('seo');
                window.history.replaceState(null, '', '/seo-aeo-geo?tab=seo');
              }}
            >
              <div className="tab-btn-inner">
                <div className="tab-icon-box">
                  <span style={{ fontWeight: 800, fontSize: '13px' }}>S</span>
                </div>
                <div className="tab-text-box">
                  <div className="tab-main-label">
                    <span>SEO</span>
                    <span className="tab-badge-mini">Search</span>
                  </div>
                  <span className="tab-sub-label">Traditional Search Engine</span>
                </div>
              </div>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'aeo'}
              className={`tab-switch-btn ${activeTab === 'aeo' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('aeo');
                window.history.replaceState(null, '', '/seo-aeo-geo?tab=aeo');
              }}
            >
              <div className="tab-btn-inner">
                <div className="tab-icon-box">
                  <span style={{ fontWeight: 800, fontSize: '13px' }}>A</span>
                </div>
                <div className="tab-text-box">
                  <div className="tab-main-label">
                    <span>AEO</span>
                    <span className="tab-badge-mini">Answers</span>
                  </div>
                  <span className="tab-sub-label">Answer Engine Citations</span>
                </div>
              </div>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'geo'}
              className={`tab-switch-btn ${activeTab === 'geo' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('geo');
                window.history.replaceState(null, '', '/seo-aeo-geo?tab=geo');
              }}
            >
              <div className="tab-btn-inner">
                <div className="tab-icon-box">
                  <span style={{ fontWeight: 800, fontSize: '13px' }}>G</span>
                </div>
                <div className="tab-text-box">
                  <div className="tab-main-label">
                    <span>GEO</span>
                    <span className="tab-badge-mini">LLMs</span>
                  </div>
                  <span className="tab-sub-label">Generative AI Models</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

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
