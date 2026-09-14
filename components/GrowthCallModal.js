'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Clock, ArrowRight, CheckCircle2, Sparkles, Building2, Target } from 'lucide-react';

export default function GrowthCallModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goal: 'AI Search & AEO Visibility',
    teamSize: 'Solo / Founder-led',
    date: 'Tomorrow, 2:00 PM EST',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

      const payload = {
        name: formData.name || 'Growth Call Client',
        email: formData.email,
        company: formData.company || 'Direct Growth Call',
        service_interested: formData.goal || 'Growth Strategy Session',
        form_type: 'growth_call',
        budget_range: 'Strategy Session (Free)',
        timeline: 'Immediate',
        date: formattedDate,
        time: formattedTime,
        submitted_at: `${formattedDate} at ${formattedTime}`,
        message: `[BOOK A GROWTH CALL]\n` +
          `• Preferred Time: ${formData.date}\n` +
          `• Primary Growth Goal: ${formData.goal}\n` +
          `• Team Size / Stage: ${formData.teamSize}\n` +
          `• Company / Website: ${formData.company || 'N/A'}\n` +
          `• Booked At: ${formattedDate} at ${formattedTime}`
      };

      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn('Error submitting growth call lead:', err);
      }

      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target.classList.contains('modal-backdrop') && onClose()}
      aria-label="Growth Call Booking Modal"
    >
      <div className="modal-card shadow-pop">
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-content text-center">
            <div className="modal-success-icon-wrap">
              <CheckCircle2 size={48} color="var(--sunrise)" />
            </div>
            <h3 className="h3 font-heading text-summit mb-2">Growth Call Confirmed!</h3>
            <p className="body-text text-fg2 mb-6">
              We've reserved 30 minutes on our calendar for <strong>{formData.company || 'your brand'}</strong>. Check your inbox ({formData.email || 'your email'}) for the calendar invite and meeting details.
            </p>
            <div className="modal-summary-box mb-6 text-left">
              <div className="summary-row"><Calendar size={16} /> <span>{formData.date}</span></div>
              <div className="summary-row"><Target size={16} /> <span>{formData.goal}</span></div>
              <div className="summary-row"><Building2 size={16} /> <span>{formData.teamSize}</span></div>
            </div>
            <button onClick={handleReset} className="btn btn-primary btn-full">
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header-badge mb-3">
              <Sparkles size={14} color="var(--sunrise)" />
              <span>30-Min Strategy Session · Zero Pitch</span>
            </div>
            <h3 className="h3 font-heading text-summit mb-2">
              Book a Growth Call
            </h3>
            <p className="body-text text-fg2 mb-6">
              {step === 1
                ? 'Tell us a bit about your growth goals so we come prepared with actionable data.'
                : 'Select your preferred time slot to lock in your strategy call.'}
            </p>

            <div className="modal-stepper mb-6">
              <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1. Goals</div>
              <div className="step-line"></div>
              <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2. Schedule</div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="modal-form-step">
                  <div className="form-group mb-4">
                    <label className="form-label">Your Name & Company *</label>
                    <div className="form-row-2">
                      <input
                        type="text"
                        required
                        placeholder="Alex Tamboli"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Acme SaaS"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group mb-4">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label className="form-label">Primary Growth Focus</label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="form-input"
                    >
                      <option value="AI Search & AEO Visibility">AI Search & AEO Visibility (ChatGPT, Perplexity)</option>
                      <option value="Full-Funnel Demand Generation">Full-Funnel Demand Generation & Ads</option>
                      <option value="Conversion & Website Redesign">Conversion & Website Redesign</option>
                      <option value="Content & Founder Thought Leadership">Content & Founder Thought Leadership</option>
                    </select>
                  </div>

                  <div className="form-group mb-6">
                    <label className="form-label">Current Marketing Setup</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="form-input"
                    >
                      <option value="Solo / Founder-led">Solo / Founder-led (No full-time marketing team)</option>
                      <option value="Lean Team (1-3 people)">Lean Team (1-3 people)</option>
                      <option value="Working with freelancers">Working with freelancers</option>
                      <option value="Replacing existing agency">Replacing existing agency</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    Continue to Schedule <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <div className="modal-form-step">
                  <div className="form-group mb-4">
                    <label className="form-label">Select Preferred Time Slot *</label>
                    <div className="time-slot-grid">
                      {['Tomorrow, 2:00 PM EST', 'Tomorrow, 4:30 PM EST', 'Thursday, 11:00 AM EST', 'Thursday, 3:00 PM EST'].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`time-slot-btn ${formData.date === slot ? 'selected' : ''}`}
                          onClick={() => setFormData({ ...formData, date: slot })}
                        >
                          <Clock size={14} />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-note mb-6 text-fg3 font-mono text-xs">
                    🔒 Instant confirmation. No spam, zero high-pressure sales pitch.
                  </div>

                  <div className="btn-row">
                    <button type="button" onClick={() => setStep(1)} className="btn btn-secondary">
                      Back
                    </button>
                    <button type="submit" className="btn btn-primary flex-1">
                      Confirm Growth Call <CheckCircle2 size={16} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(14, 26, 43, 0.75);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 1.5rem;
          animation: fadeIn 170ms ease;
        }
        .modal-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-strong);
          padding: 2.5rem;
          width: 100%;
          max-width: 520px;
          position: relative;
          box-shadow: var(--shadow-pop);
          animation: popUp 220ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: var(--snow);
          border: 1px solid var(--border);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--fg2);
          transition: all 170ms ease;
        }
        .modal-close-btn:hover {
          background: var(--frost);
          color: var(--sunrise);
          border-color: var(--sunrise-300);
        }
        .modal-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--frost);
          border: 1px solid var(--border);
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--summit);
        }
        .modal-stepper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .step-dot {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--fg3);
        }
        .step-dot.active {
          color: var(--sunrise);
        }
        .step-line {
          flex: 1;
          height: 2px;
          background: var(--border);
        }
        .form-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--summit);
          margin-bottom: 0.4rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong);
          background: var(--snow);
          color: var(--summit);
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 170ms ease;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--sunrise);
          box-shadow: 0 0 0 3px var(--focus-ring);
          background: var(--white);
        }
        .time-slot-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .time-slot-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--snow);
          color: var(--summit);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 170ms ease;
        }
        .time-slot-btn:hover {
          border-color: var(--sunrise-300);
          background: var(--frost);
        }
        .time-slot-btn.selected {
          border-color: var(--sunrise);
          background: var(--frost);
          color: var(--sunrise-700);
          font-weight: 600;
        }
        .modal-summary-box {
          background: var(--frost);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
        }
        .summary-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--summit);
          margin-bottom: 0.5rem;
        }
        .summary-row:last-child {
          margin-bottom: 0;
        }
        .btn-full {
          width: 100%;
          justify-content: center;
        }
        .btn-row {
          display: flex;
          gap: 0.75rem;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
