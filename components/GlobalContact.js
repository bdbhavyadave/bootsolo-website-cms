"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ContactForm from './ContactForm';
import { ArrowRight } from 'lucide-react';

export default function GlobalContact() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  const isCustomQuotePage = pathname === '/custom-quote';

  return (
    <section className="section" id="global-contact" style={{ background: 'var(--frost)', borderTop: '1px solid var(--border)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 className="sec-title" style={{ marginBottom: '24px' }}>
              {isCustomQuotePage ? "Or request a single service" : "Get your free growth roadmap"}
            </h2>
            
            {!isCustomQuotePage ? (
              <>
                <p className="sec-lead" style={{ marginBottom: '32px' }}>
                  Whether you need a full marketing engine built from scratch, or just want to run an AI audit on your current funnels — we’re here to help you scale smartly.
                </p>
                <p className="sec-lead" style={{ fontSize: '16px', marginBottom: '32px' }}>
                  Fill out the form with a few details about your goals, and our team will get back to you with a personalized route map tailored to your exact terrain. No pitch, just strategy.
                </p>
                <div style={{ padding: '24px', background: 'rgba(255,107,53,0.1)', border: '1px solid var(--sunrise)', borderRadius: '16px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--sunrise-700)', marginBottom: '8px' }}>Need a tailored bundle?</h4>
                  <p style={{ fontSize: '14px', color: 'var(--fg2)', marginBottom: '16px' }}>Mix and match exactly what you need with our custom builder.</p>
                  <Link href="/custom-quote" className="btn btn-primary" style={{ height: 40, padding: '0 20px', fontSize: '13px' }}>
                    Request a custom quote <ArrowRight size={14} />
                  </Link>
                </div>
              </>
            ) : (
              <p className="sec-lead" style={{ fontSize: '16px' }}>
                If you already know exactly what you need, simply select a primary service from the form here and tell us about your goals.
              </p>
            )}
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-1)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--fg1)', marginBottom: '24px' }}>Get your AI-ready marketing plan</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
