'use client';
import { useState } from 'react';
import Link from 'next/link';
import Brand, { PaperPlaneMark } from './Brand';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const FOOT_SERVICES = [
    { name: "AI-Powered Marketing", href: "/ai-powered-marketing" },
    { name: "SEO / AEO / GEO", href: "/seo-aeo-geo" },
    { name: "Performance Marketing", href: "/performance-lead-generation" },
    { name: "Content & Video", href: "/content-video-thought-leadership" },
    { name: "Web Experience", href: "/web-ecommerce-experience" },
    { name: "Branding", href: "/branding" }
  ];

  const FOOT_RESOURCES = [
    { name: "Founder Guides", href: "/resources" },
    { name: "Growth Route Map", href: "/resources" },
    { name: "Blog & Insights", href: "/blogs" },
    { name: "Brand Guidelines", href: "/resources" }
  ];

  const FOOT_COMPANY = [
    { name: "Work & Results", href: "/work" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "#top" },
    { name: "Custom Quote", href: "/custom-quote" }
  ];

  return (
    <footer className="footer dark" style={{ background: 'var(--summit)', color: '#EEF3F8', padding: '80px 0 48px', borderTop: '1px solid var(--navy-700)' }}>
      <div className="wrap">
        <div className="foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' }}>
          {/* Brand & Newsletter Column */}
          <div className="foot-col">
            <Brand />
            <p className="foot-tag" style={{ fontSize: '14.5px', color: 'var(--navy-300)', lineHeight: 1.6, margin: '18px 0 24px', maxWidth: '320px' }}>
              Bootsolo. AI-powered marketing for brands in a hurry. Strategy by humans. Speed by AI. Growth for you.
            </p>

            {/* Newsletter Form */}
            <div style={{ maxWidth: '340px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy-400)', marginBottom: '10px' }}>
                Join 4,000+ Solopreneurs
              </div>
              {subscribed ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontSize: '14px', fontWeight: 500 }}>
                  <CheckCircle2 size={16} />
                  <span>You're subscribed to founder insights!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="email"
                    placeholder="you@startup.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      height: '42px',
                      borderRadius: '10px',
                      background: 'var(--navy-800)',
                      border: '1px solid var(--navy-700)',
                      color: '#fff',
                      padding: '0 14px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  <button type="submit" className="btn btn-primary" style={{ height: '42px', padding: '0 16px', borderRadius: '10px' }}>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links Column 1: Services */}
          <div className="foot-col">
            <h5 style={{ fontSize: '12px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--navy-400)', margin: '0 0 18px', fontWeight: 600 }}>
              Services
            </h5>
            {FOOT_SERVICES.map((item) => (
              <Link href={item.href} key={item.name} style={{ display: 'block', fontSize: '14px', color: 'var(--navy-300)', marginBottom: '11px', transition: 'color 170ms var(--ease)' }}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Quick Links Column 2: Resources */}
          <div className="foot-col">
            <h5 style={{ fontSize: '12px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--navy-400)', margin: '0 0 18px', fontWeight: 600 }}>
              Resources
            </h5>
            {FOOT_RESOURCES.map((item) => (
              <Link href={item.href} key={item.name} style={{ display: 'block', fontSize: '14px', color: 'var(--navy-300)', marginBottom: '11px', transition: 'color 170ms var(--ease)' }}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Quick Links Column 3: Company */}
          <div className="foot-col">
            <h5 style={{ fontSize: '12px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--navy-400)', margin: '0 0 18px', fontWeight: 600 }}>
              Company
            </h5>
            {FOOT_COMPANY.map((item) => (
              <Link href={item.href} key={item.name} style={{ display: 'block', fontSize: '14px', color: 'var(--navy-300)', marginBottom: '11px', transition: 'color 170ms var(--ease)' }}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="foot-bottom" style={{ paddingTop: '28px', borderTop: '1px solid var(--navy-700)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--navy-400)', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PaperPlaneMark size={16} color="#FF9A6B" planeColor="#FF6B35" />
            <span>© 2026 Bootsolo, Inc. All rights reserved.</span>
          </div>
          <span>For the ones who started solo.</span>
        </div>
      </div>
    </footer>
  );
}
