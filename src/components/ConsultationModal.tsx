import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import '../styles/modal.css';
import '../styles/contact.css';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetScopeOrProject?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  presetScopeOrProject
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    spaceType: 'Residential Villa',
    scope: presetScopeOrProject || 'Full-Scope Interior Design',
    location: 'Hyderabad',
    timeline: 'Immediate (Next 1–3 Months)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [prevPreset, setPrevPreset] = useState(presetScopeOrProject);
  if (presetScopeOrProject !== prevPreset) {
    setPrevPreset(presetScopeOrProject);
    if (presetScopeOrProject) {
      setFormData((prev) => ({ ...prev, scope: presetScopeOrProject }));
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <div
      className="modal-backdrop active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div
        className="modal-container"
        style={{ maxWidth: 740, backgroundColor: 'var(--charcoal)', color: 'var(--ivory)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-trigger"
          onClick={onClose}
          aria-label="Close consultation modal"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--ivory)' }}
        >
          <X size={20} />
        </button>

        <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <span className="section-tag" style={{ color: 'var(--sand)' }}>PRIVATE CONSULTATION</span>
          <h2 id="consultation-modal-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--ivory)', marginBottom: '0.75rem' }}>
            Commence Your Project Journey
          </h2>
          <p style={{ color: 'var(--sand)', fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.85 }}>
            Share your project parameters with Verdé & Form. We will connect directly with you to schedule a confidential design audit.
          </p>

          {isSubmitted ? (
            <div className="inquiry-success-box" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              <CheckCircle2 size={44} color="var(--sage)" style={{ margin: '0 auto 1.25rem' }} />
              <h3 className="inquiry-success-title">Thank You, {formData.name}</h3>
              <p className="inquiry-success-text">
                Your consultation request has been submitted to our Studio Director. We will review your vision for {formData.spaceType} ({formData.scope}) and contact you within 48 hours.
              </p>
              <button
                className="btn-light"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-field">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Reddy"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. priya@domain.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98490 12345"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Location</label>
                  <select
                    className="form-select"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Goa">Goa</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Other">Other Region / International</option>
                  </select>
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label className="form-label">Typology</label>
                  <select
                    className="form-select"
                    value={formData.spaceType}
                    onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                  >
                    <option value="Residential Villa">Private Residential Villa</option>
                    <option value="Holiday Residence">Tropical Holiday Residence</option>
                    <option value="Urban Apartment">Penthouse / Urban Apartment</option>
                    <option value="Heritage Restoration">Heritage Restoration</option>
                    <option value="Boutique Commercial">Boutique Commercial</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Target Timeline</label>
                  <select
                    className="form-select"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option value="Immediate (Next 1–3 Months)">Immediate (Next 1–3 Months)</option>
                    <option value="3–6 Months">3–6 Months</option>
                    <option value="Planning Phase (6+ Months)">Planning Phase (6+ Months)</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Project Vision & Space Parameters</label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe your architectural aspirations, preferred natural materials, or specific spaces..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" className="form-submit-btn">
                Send Consultation Request <ArrowRight size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
