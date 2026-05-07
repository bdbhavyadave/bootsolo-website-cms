'use client'

import { useState } from 'react'

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
    <div className="lead-form-wrapper" style={compact ? { padding: '2rem', maxWidth: '100%' } : {}}>
      {success ? (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{ width: 64, height: 64, background: '#10b981', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem' }}>✓</div>
          <h3 style={{ marginBottom: '1rem' }}>Request Received!</h3>
          <p style={{ color: '#666' }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          <button onClick={() => setSuccess(false)} className="btn btn-outline" style={{ marginTop: '2rem' }}>Send Another Request</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="lead-form">
          {errorMsg && <div style={{ color: '#ef4444', marginBottom: '1rem', padding: '0.75rem', background: '#fee2e2', borderRadius: '4px' }}>{errorMsg}</div>}
          
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name *</label>
            <input type="text" id="name" name="name" required className="form-input" placeholder="John Doe" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Work Email *</label>
            <input type="email" id="email" name="email" required className="form-input" placeholder="john@company.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="company" className="form-label">Company Name *</label>
            <input type="text" id="company" name="company" required className="form-input" placeholder="Acme Corp" />
          </div>
          
          <div className="form-group">
            <label htmlFor="service_interested" className="form-label">Service Interested In</label>
            <select id="service_interested" name="service_interested" className="form-select">
              <option value="Development">Blockchain & AI Development</option>
              <option value="Marketing">Digital Marketing & Growth</option>
              <option value="Consulting">Strategic Consulting</option>
            </select>
          </div>
          
          {!compact && (
            <>
              <div className="form-group">
                <label htmlFor="budget_range" className="form-label">Budget Range</label>
                <select id="budget_range" name="budget_range" className="form-select">
                  <option value="Under $5K">Under $5K</option>
                  <option value="$5K-$25K">$5K - $25K</option>
                  <option value="$25K-$100K">$25K - $100K</option>
                  <option value="$100K+">$100K+</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="timeline" className="form-label">Timeline</label>
                <select id="timeline" name="timeline" className="form-select">
                  <option value="ASAP">ASAP</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="Planning">Just Planning</option>
                </select>
              </div>
            </>
          )}
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Project Details (Optional)</label>
            <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your goals..."></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', marginTop: '1rem' }}>
            {loading ? 'Submitting...' : 'Request Free Consultation'}
          </button>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#888', marginTop: '1rem' }}>We'll respond within 24 hours.</p>
        </form>
      )}
    </div>
  )
}
