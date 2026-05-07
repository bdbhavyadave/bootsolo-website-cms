'use client'

import { useState } from 'react'

export default function LeadForm({ compact = false }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })

      if (response.ok) {
        setSuccess(true)
        e.target.reset()
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className={`lead-form ${compact ? 'compact' : ''}`}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="text" name="company" placeholder="Company Name" />
      
      <select name="service_interested" required>
        <option value="">Service Interested In</option>
        <option value="Development">Development</option>
        <option value="Marketing">Marketing</option>
        <option value="Consulting">Consulting</option>
      </select>

      <select name="budget_range">
        <option value="">Budget Range (Optional)</option>
        <option value="Under 5K">Under $5K</option>
        <option value="5K-25K">$5K - $25K</option>
        <option value="25K-100K">$25K - $100K</option>
        <option value="100K+">$100K+</option>
      </select>

      <textarea name="message" placeholder="Tell us about your project..."></textarea>

      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Request Free Consultation'}
      </button>

      {success && <p className="success">Thank you! We'll be in touch within 24 hours.</p>}
    </form>
  )
}
