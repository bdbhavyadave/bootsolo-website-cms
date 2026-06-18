import { MonitorSmartphone, Briefcase, ShoppingBag, User } from 'lucide-react';

export default function Audience() {
  const audiences = [
    {
      icon: MonitorSmartphone,
      t: "For SaaS startups",
      d: "Drive demo requests, free trial signups, and category visibility."
    },
    {
      icon: Briefcase,
      t: "For service businesses",
      d: "Generate qualified leads with stronger search presence, better pages, and follow-up automation."
    },
    {
      icon: ShoppingBag,
      t: "For D2C and ecommerce brands",
      d: "Support product discovery, paid performance, lifecycle retention, and conversion."
    },
    {
      icon: User,
      t: "For founders building personal authority",
      d: "Turn founder expertise into content, visibility, trust, and pipeline."
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-elevated)' }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Who we work with</span>
          <h2 className="sec-title">Built for teams that need smart growth without enterprise overhead</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {audiences.map((aud, i) => {
            const Icon = aud.icon;
            return (
              <div key={i} style={{ 
                background: 'var(--bg)', 
                padding: '32px', 
                borderRadius: 'var(--r-card)',
                border: '1px solid var(--border)'
              }}>
                <div style={{ 
                  background: 'var(--frost)', 
                  width: '48px', height: '48px', 
                  borderRadius: '12px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                  color: 'var(--brand)'
                }}>
                  <Icon size={24} />
                </div>
                <h3 className="ds-h4" style={{ marginBottom: '12px' }}>{aud.t}</h3>
                <p className="ds-body" style={{ color: 'var(--fg2)' }}>{aud.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
