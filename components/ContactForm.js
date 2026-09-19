"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Send } from 'lucide-react';

import { COUNTRIES } from '../lib/countries';
import { emitLeadSubmittedEvent } from '../lib/events';

export default function ContactForm() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch('https://get.geojs.io/v1/ip/country.json');
        const data = await res.json();
        if (data && data.name) {
          const matched = COUNTRIES.find(c => c.name.toLowerCase() === data.name.toLowerCase());
          if (matched) {
            setSelectedCountry(matched);
          }
        }
      } catch (err) {
        console.error("Failed to fetch IP location", err);
      }
    }
    fetchCountry();
  }, []);

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.code.includes(search)
  );

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    
    const payload = {
      name: formData.get('name'),
      phone: `${selectedCountry.code} ${formData.get('phone')}`,
      email: formData.get('email'),
      service_interested: formData.get('service_interested'),
      message: formData.get('message') || ''
    };

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      emitLeadSubmittedEvent();
      setSubmitted(true);
    } catch (err) {
      console.warn('Note:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: '24px', background: 'rgba(31, 191, 117, 0.1)', border: '1px solid var(--success)', borderRadius: '12px', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--success)', fontWeight: 600, marginBottom: '8px' }}>Thank You!</h4>
        <p style={{ color: 'var(--fg2)', fontSize: '14.5px' }}>Your details have been saved. Our growth team will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Name <span style={{ color: 'var(--brand)' }}>*</span></label>
        <input type="text" name="name" className="form-control" placeholder="Jane Doe" required />
      </div>
      
      <div className="form-group">
        <label className="form-label">Phone Number <span style={{ color: 'var(--brand)' }}>*</span></label>
        <div className="input-group" style={{ position: 'relative' }} ref={dropdownRef}>
          <button 
            type="button" 
            className="country-select-btn" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedCountry.flag} {selectedCountry.code} <ChevronDown size={14} />
          </button>
          
          {showDropdown && (
            <div className="country-dropdown-menu">
              <input 
                type="text" 
                className="form-control country-search" 
                placeholder="Search country..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                style={{ marginBottom: '8px' }}
              />
              <div className="country-options-list" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {filteredCountries.map((c, i) => (
                  <div 
                    key={i} 
                    className="country-option"
                    onClick={() => {
                      setSelectedCountry(c);
                      setShowDropdown(false);
                      setSearch("");
                    }}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                    <span style={{ color: 'var(--fg3)', marginLeft: 'auto' }}>{c.code}</span>
                  </div>
                ))}
                {filteredCountries.length === 0 && (
                  <div style={{ padding: '8px', color: 'var(--fg3)', fontSize: '13px' }}>No countries found</div>
                )}
              </div>
            </div>
          )}
          
          <input type="tel" name="phone" className="form-control" placeholder="123 456 7890" required />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">Email <span style={{ color: 'var(--brand)' }}>*</span></label>
        <input type="email" name="email" className="form-control" placeholder="jane@example.com" required />
      </div>
      
      <div className="form-group">
        <label className="form-label">Service of Interest <span style={{ color: 'var(--brand)' }}>*</span></label>
        <select className="form-select" name="service_interested" required defaultValue="">
          <option value="" disabled>Select a service</option>
          <option value="AI-Powered Marketing">AI-Powered Marketing</option>
          <option value="SEO / AEO / GEO">SEO / AEO / GEO</option>
          <option value="Performance & Lead Generation">Performance & Lead Generation</option>
          <option value="Content, Video & Thought Leadership">Content, Video & Thought Leadership</option>
          <option value="Web & Ecommerce Experience">Web & Ecommerce Experience</option>
          <option value="Branding">Branding</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Description (Optional)</label>
        <textarea name="message" className="form-control" placeholder="Tell us about your goals..." rows="3"></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
        Submit Details <Send size={16} />
      </button>
    </form>
  );
}
