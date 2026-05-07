import Link from 'next/link'

export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary, primaryLink = "/contact", secondaryLink = "/services/development" }) {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-actions">
          {ctaPrimary && (
            <Link href={primaryLink} className="btn btn-primary">
              {ctaPrimary}
            </Link>
          )}
          {ctaSecondary && (
            <Link href={secondaryLink} className="btn btn-outline light">
              {ctaSecondary}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
