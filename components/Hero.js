'use client'

import { useState } from 'react'
import LeadForm from './LeadForm'

export default function Hero({ title, subtitle, cta }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="cta-button" onClick={() => setShowForm(!showForm)}>
          {cta}
        </button>
        {showForm && <LeadForm compact={true} />}
      </div>
    </section>
  )
}
