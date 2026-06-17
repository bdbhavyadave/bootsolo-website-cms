import QuoteBuilder from '@/components/QuoteBuilder'

export const metadata = {
  title: 'Build a Custom Quote | Bootsolo',
  description: 'Select the marketing services you need and request a custom quote tailored to your exact terrain.',
}

export default function CustomQuotePage() {
  return (
    <>
      <section className="hero" style={{ background: 'var(--summit)', color: '#fff', padding: '120px 0 80px' }}>
        <div className="wrap">
          <div style={{ maxWidth: '800px' }}>
            <h1 className="hero-t" style={{ fontSize: '56px', marginBottom: '24px' }}>Build Your Custom Quote</h1>
            <p className="hero-s" style={{ fontSize: '20px', color: 'var(--navy-200)', lineHeight: 1.5 }}>
              Mix and match services to build your perfect route map. Select your terrain below, tell us about your goals, and we'll map out a custom strategy with exact pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <QuoteBuilder />
        </div>
      </section>
    </>
  );
}
