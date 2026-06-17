"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Send } from 'lucide-react';

const COUNTRIES = [
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
];

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

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.code.includes(search)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    alert("Thank you! Your message has been received.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Name <span style={{ color: 'var(--brand)' }}>*</span></label>
        <input type="text" className="form-control" placeholder="Jane Doe" required />
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
              />
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
          )}
          
          <input type="tel" className="form-control" placeholder="123 456 7890" required />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">Email <span style={{ color: 'var(--brand)' }}>*</span></label>
        <input type="email" className="form-control" placeholder="jane@example.com" required />
      </div>
      
      <div className="form-group">
        <label className="form-label">Service of Interest <span style={{ color: 'var(--brand)' }}>*</span></label>
        <select className="form-select" required defaultValue="">
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
        <textarea className="form-control" placeholder="Tell us about your goals..." rows="3"></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
        Submit Details <Send size={16} />
      </button>
    </form>
  );
}
