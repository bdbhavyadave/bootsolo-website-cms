"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Send, Check } from 'lucide-react';
import { COUNTRIES } from '../lib/countries';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedServices.length === 0 && !isOtherChecked) {
      alert("Please select at least one service before submitting.");
      return;
    }
    alert("Thank you! Your custom quote request has been received.");
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
              <input type="text" className="form-control" placeholder="Jane Doe" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email <span style={{ color: 'var(--brand)' }}>*</span></label>
              <input type="email" className="form-control" placeholder="jane@example.com" required />
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
              <input type="tel" className="form-control" placeholder="123 456 7890" required />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '24px' }}>
            <label className="form-label">General Project Description (Optional)</label>
            <textarea className="form-control" placeholder="Tell us more about your company or overall timeline..." rows="4"></textarea>
          </div>
          
          <div className="mobile-submit-only" style={{ marginTop: '32px' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Request <Send size={16} />
            </button>
          </div>
        </div>
        
      </div>

      <div className="quote-summary-col">
        <div style={{ position: 'sticky', top: '100px', background: 'var(--bg-elevated)', padding: '32px', borderRadius: '24px', boxShadow: 'var(--shadow-2)', border: '1px solid var(--border)' }}>
          <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px', color: 'var(--fg1)' }}>Your Route Map</h4>
          
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
          
          <button type="submit" className="btn btn-primary desktop-submit-only" style={{ width: '100%', justifyContent: 'center' }}>
            Submit Request <Send size={16} />
          </button>
          
          <div style={{ fontSize: '12px', color: 'var(--fg3)', textAlign: 'center', marginTop: '16px', lineHeight: 1.5 }}>
            No payment required. We'll review your selections and reach out with a personalized route map.
          </div>
        </div>
      </div>
      
    </form>
  );
}
