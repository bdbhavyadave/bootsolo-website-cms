import Link from 'next/link'
import HeroIllustration from './HeroIllustration'
import { ArrowRight } from 'lucide-react'

export default function Hero({ eyebrow, title, highlightTitle, tag, ctaPrimary, ctaSecondary, primaryLink = "/contact", secondaryLink = "/services/development" }) {
  return (
    <header className="cover dark">
      <div className="container grid-2" style={{ alignItems: 'center', gap: 'var(--s-10)' }}>
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>
            {title}
            {highlightTitle && <><br /><span className="o">{highlightTitle}</span></>}
          </h1>
          <p className="tag">{tag}</p>
          <div className="btnrow" style={{ marginTop: 'var(--s-10)' }}>
            {ctaPrimary && (
              <Link href={primaryLink} className="btn btn-primary">
                {ctaPrimary} <ArrowRight size={16} />
              </Link>
            )}
            {ctaSecondary && (
              <Link href={secondaryLink} className="btn btn-ghost">
                {ctaSecondary}
              </Link>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="heroshot" style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-2)', maxWidth: '100%' }}>
            <HeroIllustration style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </header>
  )
}
