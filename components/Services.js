'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import InteractiveGlobe, { SERVICES } from './InteractiveGlobe';
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, BookOpen, LayoutGrid, RotateCcw } from 'lucide-react';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('book'); // 'book' | 'grid'
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const totalCards = SERVICES.length;

  // Auto-flip book page every 6s when not hovered/paused
  useEffect(() => {
    if (viewMode !== 'book' || isPaused) return;
    const timer = setInterval(() => {
      handleNextPage();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex, viewMode, isPaused]);

  const handleNextPage = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setActiveIndex((prev) => (prev + 1) % totalCards);
    setTimeout(() => setIsFlipping(false), 500);
  };

  const handlePrevPage = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setTimeout(() => setIsFlipping(false), 500);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNextPage(); // Swiped left -> Next page
    } else if (distance < -minSwipeDistance) {
      handlePrevPage(); // Swiped right -> Prev page
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="section" id="services" style={{ background: 'var(--white)', padding: '96px 0', overflow: 'hidden' }}>
      <div className="wrap">
        {/* Main Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <p className="eyebrow">What We Do</p>
          <h2 className="ds-h2" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', margin: '12px 0 16px', color: 'var(--summit)', lineHeight: 1.1 }}>
            Seven ways we drive your growth
          </h2>
          <p className="ds-lead" style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6 }}>
            We run the whole marketing engine, start to finish, and we build it so every piece feeds the next one.
          </p>
        </div>

        {/* 1. Global AI Citation & Traction Footprint Interactive 3D Globe */}
        <div style={{ marginBottom: '80px' }}>
          <InteractiveGlobe />
        </div>

        {/* 2. Interactive Book Deck & Stacked Tiles Section */}
        <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
          
          {/* Section Header Controls & View Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div>
              <span style={{ fontSize: '12px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--brand-fg)', fontWeight: 700 }}>
                Full-Stack Growth Capability Modules
              </span>
              <h3 className="ds-h3" style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginTop: '6px', color: 'var(--summit)' }}>
                Explore Our Core Service Modules
              </h3>
            </div>

            {/* View Mode Toggle: Interactive Book Flip Deck vs Full Grid */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-inset)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <button
                onClick={() => setViewMode('book')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9px',
                  border: 'none',
                  background: viewMode === 'book' ? 'var(--summit)' : 'transparent',
                  color: viewMode === 'book' ? '#FFFFFF' : 'var(--fg2)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 200ms var(--ease)'
                }}
              >
                <BookOpen size={16} />
                <span>Stacked Book View</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9px',
                  border: 'none',
                  background: viewMode === 'grid' ? 'var(--summit)' : 'transparent',
                  color: viewMode === 'grid' ? '#FFFFFF' : 'var(--fg2)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 200ms var(--ease)'
                }}
              >
                <LayoutGrid size={16} />
                <span>Grid View</span>
              </button>
            </div>
          </div>

          {/* Module Selector Pills / Page Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '16px',
              marginBottom: '32px',
              scrollbarWidth: 'none'
            }}
          >
            {SERVICES.map((svc, idx) => {
              const isSelected = idx === activeIndex && viewMode === 'book';
              return (
                <button
                  key={svc.id}
                  onClick={() => {
                    setActiveIndex(idx);
                    if (viewMode !== 'book') setViewMode('book');
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    border: `1px solid ${isSelected ? 'var(--sunrise)' : 'var(--border)'}`,
                    background: isSelected ? 'var(--summit)' : 'var(--bg-elevated)',
                    color: isSelected ? '#FFFFFF' : 'var(--fg2)',
                    fontSize: '13px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 200ms var(--ease)',
                    boxShadow: isSelected ? 'var(--glow-sunrise)' : 'none'
                  }}
                >
                  <span style={{ fontSize: '11px', opacity: 0.7, fontFamily: 'var(--font-mono)' }}>0{svc.id}</span>
                  <span>{svc.title}</span>
                </button>
              );
            })}
          </div>

          {/* =========================================================================
              VIEW MODE A: STACKED BOOK FLIP DECK VIEW (Interactive Page Cards)
             ========================================================================= */}
          {viewMode === 'book' ? (
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{ position: 'relative', width: '100%', maxWidth: '840px', margin: '0 auto' }}
            >
              {/* Stacked Deck Viewport Container with 3D Perspective */}
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: '460px',
                  perspective: '1400px',
                  padding: '20px 0 40px'
                }}
              >
                {SERVICES.map((svc, idx) => {
                  const Icon = svc.icon;
                  // Compute offset index relative to active card
                  const relativeIdx = (idx - activeIndex + totalCards) % totalCards;
                  const isTop = relativeIdx === 0;

                  // Render top 4 visible cards in the stack deck; hide others deep behind
                  if (relativeIdx > 3) return null;

                  // Compute depth transformations
                  const offsetScale = 1 - relativeIdx * 0.045;
                  const offsetY = relativeIdx * 18;
                  const offsetX = relativeIdx * 14;
                  const offsetRotate = relativeIdx * 2.5;
                  const zIndex = 10 - relativeIdx;
                  const opacity = relativeIdx === 0 ? 1 : 0.88 - relativeIdx * 0.22;

                  return (
                    <div
                      key={svc.id}
                      onClick={() => !isTop && setActiveIndex(idx)}
                      style={{
                        position: isTop ? 'relative' : 'absolute',
                        top: isTop ? 'auto' : 0,
                        left: isTop ? 'auto' : 0,
                        width: '100%',
                        zIndex: zIndex,
                        transformOrigin: 'left center',
                        transform: isTop
                          ? 'translate3d(0,0,0) scale(1) rotate(0deg)'
                          : `translate3d(${offsetX}px, ${offsetY}px, -${relativeIdx * 40}px) scale(${offsetScale}) rotate(${offsetRotate}deg)`,
                        opacity: opacity,
                        transition: isFlipping
                          ? 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1), opacity 450ms ease, box-shadow 450ms ease'
                          : 'transform 300ms var(--ease), opacity 300ms var(--ease), box-shadow 300ms var(--ease)',
                        background: 'var(--bg-elevated)',
                        border: isTop ? '2px solid var(--sunrise)' : '1px solid var(--border)',
                        borderRadius: '24px',
                        padding: 'clamp(24px, 4vw, 40px)',
                        boxShadow: isTop ? 'var(--shadow-pop)' : 'var(--shadow-2)',
                        cursor: isTop ? 'default' : 'pointer',
                        userSelect: 'none'
                      }}
                    >
                      {/* Top Header Badge & Navigation Indicator */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <div
                            style={{
                              width: '52px',
                              height: '52px',
                              borderRadius: '14px',
                              background: 'var(--summit)',
                              color: 'var(--sunrise-300)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: 'var(--glow-sunrise)'
                            }}
                          >
                            <Icon size={26} />
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.10em',
                                color: 'var(--brand-fg)',
                                fontWeight: 700
                              }}
                            >
                              PAGE 0{svc.id} OF 07
                            </span>
                            <h4 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 600, color: 'var(--summit)', margin: '4px 0 0', letterSpacing: '-0.02em' }}>
                              {svc.title}
                            </h4>
                          </div>
                        </div>

                        <span
                          className="ds-mono"
                          style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: 'var(--fg3)',
                            background: 'var(--bg-inset)',
                            padding: '6px 14px',
                            borderRadius: '999px',
                            border: '1px solid var(--border)'
                          }}
                        >
                          MODULE 0{svc.id}
                        </span>
                      </div>

                      {/* Eyebrow & Description */}
                      <p style={{ fontSize: '15px', color: 'var(--brand-fg)', fontWeight: 600, margin: '0 0 12px' }}>
                        {svc.eyebrow}
                      </p>
                      <p style={{ fontSize: '16px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 0 28px', maxWidth: '640px' }}>
                        {svc.headline}
                      </p>

                      {/* Deliverables List Grid */}
                      <div
                        style={{
                          background: 'var(--snow)',
                          borderRadius: '16px',
                          padding: '24px',
                          border: '1px solid var(--border)',
                          marginBottom: '28px'
                        }}
                      >
                        <h5 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', fontWeight: 700, margin: '0 0 16px' }}>
                          Core Deliverables & Capabilities
                        </h5>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                          {svc.deliverables.map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                              <CheckCircle2 size={17} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span style={{ fontSize: '14px', color: 'var(--fg1)', lineHeight: 1.45, fontWeight: 500 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Footer */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                        <div style={{ fontSize: '13px', color: 'var(--fg3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>Swipe or click arrows to flip page</span>
                        </div>
                        <Link
                          href={svc.slug}
                          className="btn btn-primary glow-sunrise"
                          style={{ borderRadius: '11px', padding: '0 24px' }}
                        >
                          <span>{svc.ctaText}</span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Book Deck Controls & Pagination Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '24px',
                  padding: '16px 24px',
                  background: 'var(--summit)',
                  color: '#FFFFFF',
                  borderRadius: '18px',
                  boxShadow: 'var(--shadow-pop)',
                  border: '1px solid var(--navy-700)'
                }}
              >
                <button
                  onClick={handlePrevPage}
                  aria-label="Previous Page"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--navy-800)',
                    border: '1px solid var(--navy-700)',
                    color: '#FFFFFF',
                    padding: '10px 18px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 200ms var(--ease)'
                  }}
                  className="btn-hover-sunrise"
                >
                  <ChevronLeft size={18} />
                  <span>Previous Page</span>
                </button>

                {/* Page Counter & Progress Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="ds-mono" style={{ fontSize: '14px', color: 'var(--sunrise-300)', fontWeight: 700 }}>
                    Page 0{activeIndex + 1} / 07
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {SERVICES.map((_, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        style={{
                          width: i === activeIndex ? '20px' : '6px',
                          height: '6px',
                          borderRadius: '999px',
                          background: i === activeIndex ? 'var(--sunrise)' : 'var(--navy-600)',
                          cursor: 'pointer',
                          transition: 'all 300ms var(--ease)'
                        }}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNextPage}
                  aria-label="Next Page"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--navy-800)',
                    border: '1px solid var(--navy-700)',
                    color: '#FFFFFF',
                    padding: '10px 18px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 200ms var(--ease)'
                  }}
                  className="btn-hover-sunrise"
                >
                  <span>Next Page</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ) : (
            /* =========================================================================
                VIEW MODE B: FULL GRID TILES VIEW
               ========================================================================= */
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px'
              }}
            >
              {SERVICES.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--r-card)',
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: 'var(--shadow-1)',
                      transition: 'transform var(--dur) var(--ease), border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)'
                    }}
                    className="svc-card-hover"
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'var(--frost)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--brand-fg)'
                          }}
                        >
                          <Icon size={24} />
                        </div>
                        <span
                          className="ds-mono"
                          style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: 'var(--fg3)',
                            letterSpacing: '0.05em'
                          }}
                        >
                          MODULE 0{svc.id}
                        </span>
                      </div>

                      <h4 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                        {svc.title}
                      </h4>
                      <p style={{ fontSize: '14px', color: 'var(--brand-fg)', fontWeight: 500, margin: '0 0 14px' }}>
                        {svc.eyebrow}
                      </p>
                      <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: '0 0 20px' }}>
                        {svc.headline}
                      </p>

                      <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '16px', marginBottom: '24px' }}>
                        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', fontWeight: 600, marginBottom: '10px' }}>
                          Key Deliverables
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {svc.deliverables.map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <CheckCircle2 size={15} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '3px' }} />
                              <span style={{ fontSize: '13.5px', color: 'var(--fg1)', lineHeight: 1.4 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={svc.slug}
                      className="btn btn-ghost"
                      style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginTop: 'auto'
                      }}
                    >
                      <span>{svc.ctaText.replace(' →', '')}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
