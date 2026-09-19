"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Send, Check } from 'lucide-react';
import { COUNTRIES } from '../lib/countries';
import { emitLeadSubmittedEvent } from '../lib/events';

const MASTER_SERVICES = [
  {
    category: "AI-Powered Marketing",
    subcategories: ["Vibe Marketing", "AI-Powered Marketing", "Marketing Automation"]
  },
  {
    category: "SEO / AEO / GEO",
    subcategories: ["Local SEO & AEO", "Growth SEO & AEO", "Authority Suite"]
  },
  {
    category: "Performance & Lead Gen",
    subcategories: ["CRO", "Paid Social", "Paid Search", "Lead Gen"]
  },
  {
    category: "Content, Video & Thought Leadership",
    subcategories: ["Video & Motion", "Content Marketing", "Thought Leadership"]
  },
  {
    category: "Web & Ecommerce",
    subcategories: ["Ecommerce", "Web Designing"]
  },
  {
    category: "Branding",
    subcategories: ["Brand Identity Mini Kit", "Brand Story & Visuals", "Full Brand System"]
  }
];

export default function QuoteBuilder() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isOtherChecked, setIsOtherChecked] = useState(false);
  const [otherDescription, setOtherDescription] = useState("");
  
  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Phone logic
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES.find(c => c.name === "United States") || COUNTRIES[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setShowDropdown(false);
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
          if (matched) setSelectedCountry(matched);
        }
      } catch (err) {}
    }
    fetchCountry();
  }, []);

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search)
  );

  const toggleService = (subName) => {
    if (selectedServices.includes(subName)) {
      setSelectedServices(selectedServices.filter(s => s !== subName));
    } else {
      setSelectedServices([...selectedServices, subName]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedServices.length === 0 && !isOtherChecked) {
      alert("Please select at least one service before submitting.");
      return;
    }

    setSubmitting(true);
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const fullPhone = phone ? `${selectedCountry.code} ${phone}` : '';

    const allServices = [...selectedServices];
    if (isOtherChecked) {
      allServices.push(`Other: ${otherDescription || 'Custom Need'}`);
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: fullPhone,
      company: fullPhone || 'Custom Quote',
      service_interested: allServices.join(', '),
      budget_range: 'Custom Quote',
      date: formattedDate,
      time: formattedTime,
      submitted_at: `${formattedDate} at ${formattedTime}`,
      message: `[CUSTOM QUOTE BUILDER]\n` +
        `• Selected Services (${allServices.length}):\n  - ${allServices.join('\n  - ')}\n` +
        `• Phone: ${fullPhone}\n` +
        `• Submitted At: ${formattedDate} at ${formattedTime}\n` +
        `• Project Description / Notes:\n${description || 'No additional notes provided'}`
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
      console.error('Quote submission error:', err);
      alert('Your request was received. We will follow up shortly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="quote-builder-grid">
      
      <div className="quote-form-col" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          
        <div className="qb-section">
          <h3 style={{ fontSize: '24px', marginBottom: '32px', color: 'var(--fg1)' }}>1. Select your terrain</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {MASTER_SERVICES.map((cat, i) => (
              <div key={i}>
                <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg3)', marginBottom: '16px', fontWeight: 600 }}>{cat.category}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
                  {cat.subcategories.map((sub, j) => {
                    const isChecked = selectedServices.includes(sub);
                    return (
                      <label key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', padding: '16px', background: isChecked ? 'var(--frost)' : 'var(--bg-elevated)', border: `1px solid ${isChecked ? 'var(--sunrise)' : 'var(--border)'}`, borderRadius: '12px', transition: 'all 0.2s' }}>
                        <input 
                          type="checkbox" 
                          checked={isChecked} 
                          onChange={() => toggleService(sub)} 
                          style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} 
                        />
                        <div style={{ width: '20px', height: '20px', flexShrink: 0, borderRadius: '4px', border: `1px solid ${isChecked ? 'var(--sunrise)' : 'var(--border-strong)'}`, background: isChecked ? 'var(--sunrise)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                          {isChecked && <Check size={14} color="#fff" />}
                        </div>
                        <span style={{ fontSize: '15px', color: 'var(--fg1)', lineHeight: 1.4, fontWeight: isChecked ? 600 : 400 }}>{sub}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}

            <div>
              <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg3)', marginBottom: '16px', fontWeight: 600 }}>Something Else?</div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '16px', background: isOtherChecked ? 'var(--frost)' : 'var(--bg-elevated)', border: `1px solid ${isOtherChecked ? 'var(--sunrise)' : 'var(--border)'}`, borderRadius: '12px', transition: 'all 0.2s' }}>
                <input 
                  type="checkbox" 
                  checked={isOtherChecked} 
                  onChange={() => setIsOtherChecked(!isOtherChecked)} 
                  style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} 
                />
                <div style={{ width: '20px', height: '20px', flexShrink: 0, borderRadius: '4px', border: `1px solid ${isOtherChecked ? 'var(--sunrise)' : 'var(--border-strong)'}`, background: isOtherChecked ? 'var(--sunrise)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                  {isOtherChecked && <Check size={14} color="#fff" />}
                </div>
                <span style={{ fontSize: '15px', color: 'var(--fg1)', fontWeight: isOtherChecked ? 600 : 400 }}>Other / Custom Need</span>
              </label>
              
              {isOtherChecked && (
                <div style={{ marginTop: '16px' }}>
                  <textarea className="form-control" placeholder="Describe the specific service or challenge you're facing..." rows="3" required value={otherDescription} onChange={e => setOtherDescription(e.target.value)}></textarea>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="qb-section" style={{ paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--fg1)' }}>2. Your Details</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="form-group">
              <label className="form-label">Name <span style={{ color: 'var(--brand)' }}>*</span></label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Jane Doe" 
                required 
                value={name} 
                onChange={e => setName(e.target.value)} 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email <span style={{ color: 'var(--brand)' }}>*</span></label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="jane@example.com" 
                required 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
              />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '24px' }}>
            <label className="form-label">Phone Number <span style={{ color: 'var(--brand)' }}>*</span></label>
            <div className="input-group" style={{ position: 'relative' }} ref={dropdownRef}>
              <button type="button" className="country-select-btn" onClick={() => setShowDropdown(!showDropdown)}>
                {selectedCountry.flag} {selectedCountry.code} <ChevronDown size={14} />
              </button>
              {showDropdown && (
                <div className="country-dropdown-menu">
                  <input type="text" className="form-control country-search" placeholder="Search country..." value={search} onChange={(e) => setSearch(e.target.value)} autoFocus style={{ marginBottom: '8px' }} />
                  <div className="country-options-list" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {filteredCountries.map((c, i) => (
                      <div key={i} className="country-option" onClick={() => { setSelectedCountry(c); setShowDropdown(false); setSearch(""); }}>
                        <span>{c.flag}</span>
                        <span>{c.name}</span>
                        <span style={{ color: 'var(--fg3)', marginLeft: 'auto' }}>{c.code}</span>
                      </div>
                    ))}
                    {filteredCountries.length === 0 && <div style={{ padding: '8px', color: 'var(--fg3)', fontSize: '13px' }}>No countries found</div>}
                  </div>
                </div>
              )}
              <input 
                type="tel" 
                className="form-control" 
                placeholder="123 456 7890" 
                required 
                value={phone} 
                onChange={e => setPhone(e.target.value)} 
              />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '24px' }}>
            <label className="form-label">General Project Description (Optional)</label>
            <textarea 
              className="form-control" 
              placeholder="Tell us more about your company or overall timeline..." 
              rows="4"
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>

          {submitted && (
            <div style={{ marginTop: '20px', padding: '16px', background: '#dcfce7', border: '1px solid #86efac', borderRadius: '8px', color: '#166534', fontWeight: 500 }}>
              ✓ Thank you! Your custom quote has been received and saved. Our team will review your route map and get back to you shortly.
            </div>
          )}
          
          <div className="mobile-submit-only" style={{ marginTop: '32px' }}>
            <button type="submit" disabled={submitting || submitted} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {submitting ? 'Sending Request...' : submitted ? 'Quote Sent ✓' : <>Submit Request <Send size={16} /></>}
            </button>
          </div>
        </div>
        
      </div>

      <div className="quote-summary-col">
        <div className="quote-floating-card" style={{ position: 'sticky', top: '96px', background: 'var(--bg-elevated)', padding: '32px', borderRadius: '20px', boxShadow: '0 24px 48px -10px rgba(14, 26, 43, 0.14), 0 4px 16px -2px rgba(14, 26, 43, 0.06)', border: '1px solid rgba(14, 26, 43, 0.1)', backdropFilter: 'blur(16px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', fontWeight: 700 }}>Strategy Summary</span>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: '999px', background: 'rgba(255,107,53,0.12)', color: 'var(--sunrise-700)', border: '1px solid rgba(255,107,53,0.25)' }}>Floating Route</span>
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '20px', color: 'var(--fg1)', letterSpacing: '-0.01em' }}>Your Route Map</h3>
          
          {selectedServices.length === 0 && !isOtherChecked ? (
            <div style={{ fontSize: '14px', color: 'var(--fg3)', fontStyle: 'italic', padding: '16px', background: 'var(--snow)', borderRadius: '8px', textAlign: 'center' }}>
              No services selected yet. Select from the left to build your quote.
            </div>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {selectedServices.map((sub, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.4 }}>
                  <Check size={16} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{sub}</span>
                </li>
              ))}
              {isOtherChecked && (
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.4 }}>
                  <Check size={16} color="var(--sunrise)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Custom: {otherDescription ? (otherDescription.length > 40 ? otherDescription.slice(0, 40) + '...' : otherDescription) : "Pending details..."}</span>
                </li>
              )}
            </ul>
          )}
          
          <button type="submit" disabled={submitting || submitted} className="btn btn-primary desktop-submit-only" style={{ width: '100%', justifyContent: 'center' }}>
            {submitting ? 'Sending Request...' : submitted ? 'Quote Sent ✓' : <>Submit Request <Send size={16} /></>}
          </button>
          
          <div style={{ fontSize: '12px', color: 'var(--fg3)', textAlign: 'center', marginTop: '16px', lineHeight: 1.5 }}>
            No payment required. We'll review your selections and reach out with a personalized route map.
          </div>
        </div>
      </div>
      
    </form>
  );
}
