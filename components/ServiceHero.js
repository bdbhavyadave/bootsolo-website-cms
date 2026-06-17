export default function ServiceHero({ title, subtitle, kick }) {
  return (
    <header className="hero dark" style={{ padding: '80px 0 60px' }}>
      <div className="wrap">
        <div className="hero-copy" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {kick && <span className="kick">{kick}</span>}
          <h1 className="h-display" style={{ fontSize: '56px', marginTop: '16px' }}>
            {title}
          </h1>
          {subtitle && (
            <p className="h-sub" style={{ margin: '24px auto 0' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
