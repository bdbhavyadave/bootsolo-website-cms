'use client'

import { useState } from 'react'
import { emitLeadSubmittedEvent } from '@/lib/events'

export default function LeadForm({ compact = false }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    setSuccess(false)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSuccess(true)
        emitLeadSubmittedEvent()
        e.target.reset()
      } else {
        const err = await response.json()
        setErrorMsg(err.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMsg('Failed to submit form. Please check your connection.')
    }

    setLoading(false)
  }

  return (
    <div className="card" style={{ maxWidth: compact ? '100%' : '600px', margin: '0 auto' }}>
      {success ? (
        <div style={{ textAlign: 'center', padding: 'var(--s-10) 0' }}>
          <div style={{ width: 64, height: 64, background: 'var(--success)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--s-5)', fontSize: '32px' }}>✓</div>
          <h3 className="ct" style={{ marginBottom: 'var(--s-3)', fontSize: '20px' }}>Request Received!</h3>
          <p className="cd">Thank you for reaching out. We will get back to you within 24 hours.</p>
          <button onClick={() => setSuccess(false)} className="btn btn-ghost" style={{ marginTop: 'var(--s-5)' }}>Send Another Request</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {errorMsg && <div style={{ color: 'var(--destructive)', marginBottom: 'var(--s-4)', padding: 'var(--s-3)', background: '#FFE9DF', borderRadius: 'var(--r-sm)', fontSize: '14px', fontWeight: 'var(--w-semi)' }}>{errorMsg}</div>}
          
          <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: 'var(--s-4)', marginBottom: 'var(--s-4)' }}>
            <div className="field" style={{ maxWidth: '100%' }}>
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            
            <div className="field" style={{ maxWidth: '100%' }}>
              <label htmlFor="email">Work Email *</label>
              <input type="email" id="email" name="email" required placeholder="john@startup.com" />
            </div>
          </div>
          
          <div className="field" style={{ maxWidth: '100%', marginBottom: 'var(--s-4)' }}>
            <label htmlFor="company">Company Name *</label>
            <input type="text" id="company" name="company" required placeholder="Acme Corp" />
          </div>
          
          <div className="field" style={{ maxWidth: '100%', marginBottom: 'var(--s-4)' }}>
            <label htmlFor="service_interested">What are you climbing?</label>
            <select id="service_interested" name="service_interested">
              <option value="Marketing">Indie SaaS, $0 marketing budget</option>
              <option value="Development">Building an MVP solo</option>
              <option value="Consulting">Trying to scale beyond 10k MRR</option>
            </select>
          </div>
          
          <div className="field" style={{ maxWidth: '100%', marginBottom: 'var(--s-6)' }}>
            <label htmlFor="message">Project Details (Optional)</label>
            <textarea id="message" name="message" placeholder="Tell us about your goals..."></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
            {loading ? 'Submitting...' : 'Request your free route'}
          </button>
          <p className="muted" style={{ textAlign: 'center', fontSize: '13px', marginTop: 'var(--s-3)' }}>We'll respond within 24 hours.</p>
        </form>
      )}
    </div>
  )
}
