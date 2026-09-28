import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, MessageSquare, Phone } from 'lucide-react';
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
    phone: '',
    email: '',
    projectType: presetScopeOrProject || 'Residential Construction',
    budgetLakhs: 50, // Slider from 10 to 300 (₹10 Lakhs to ₹3 Crores+)
    location: 'Hyderabad',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Sync preset if passed
  useEffect(() => {
    if (presetScopeOrProject) {
      setFormData((prev) => ({ ...prev, projectType: presetScopeOrProject }));
    }
  }, [presetScopeOrProject]);

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

  const formatBudgetText = (lakhs: number) => {
    if (lakhs >= 300) return '₹3 Crores+';
    if (lakhs >= 100) return `₹${(lakhs / 100).toFixed(1)} Crores`;
    return `₹${lakhs} Lakhs`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const formattedBudget = formatBudgetText(formData.budgetLakhs);
    const message =
      `*New Project Quotation Request - Vriksha Constructions*\n\n` +
      `*Client Name:* ${formData.name}\n` +
      `*WhatsApp / Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Estimated Budget:* ${formattedBudget}\n` +
      `*Project Location:* ${formData.location || 'Hyderabad'}\n` +
      `*Project Notes:* ${formData.notes || 'None'}\n\n` +
      `_Submitted via Vriksha Constructions Website Quotation Modal_`;

    const url = `https://wa.me/919989382877?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div
      className="modal-backdrop active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quotation-modal-title"
    >
      <div
        className="modal-container"
        style={{
          maxWidth: 720,
          backgroundColor: '#FFFFFF',
          color: 'var(--earth)',
          borderRadius: '6px',
          boxShadow: '0 25px 60px rgba(6, 63, 87, 0.35)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-trigger"
          onClick={onClose}
          aria-label="Close quotation modal"
          style={{
            backgroundColor: 'var(--ivory)',
            color: 'var(--charcoal)',
            border: '1px solid var(--border-light)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <span className="section-tag">PROJECT QUOTATION</span>
          <h2
            id="quotation-modal-title"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 800,
              color: 'var(--charcoal)',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            Get an Accurate Project Estimate
          </h2>
          <p
            style={{
              color: 'var(--earth-light)',
              fontSize: '0.95rem',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}
          >
            Share your requirements and we will connect via WhatsApp with budget guidance, structural formwork feasibility, and architectural recommendations.
          </p>

          {isSubmitted ? (
            <div
              className="inquiry-success-box"
              style={{
                background: 'var(--ivory)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '2.5rem 2rem',
                textAlign: 'center'
              }}
            >
              <CheckCircle2
                size={48}
                color="var(--accent)"
                style={{ margin: '0 auto 1.25rem' }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--charcoal)',
                  marginBottom: '0.75rem'
                }}
              >
                Quotation Ready on WhatsApp
              </h3>
              <p
                style={{
                  color: 'var(--earth-light)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  maxWidth: 500,
                  margin: '0 auto 2rem'
                }}
              >
                Thank you, <strong>{formData.name}</strong>. Your project parameters for{' '}
                <strong>{formData.projectType}</strong> have been formatted for our engineering team at{' '}
                <strong>+91 99893 82877</strong>.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <MessageSquare size={16} /> Open WhatsApp Again
                </a>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={onClose}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="modal-quotation-form">
              <div className="form-group-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="modal-name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="modal-phone">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    required
                    placeholder="e.g. +91 99893 82877"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="modal-email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    placeholder="e.g. ramesh@domain.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="modal-project-type">
                    Project Type
                  </label>
                  <select
                    id="modal-project-type"
                    className="form-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                  </select>
                </div>
              </div>

              {/* Budget Slider: ₹10 Lakhs to ₹3 Crores+ */}
              <div className="form-field" style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '0.65rem'
                  }}
                >
                  <label className="form-label" htmlFor="modal-budget" style={{ margin: 0 }}>
                    Estimated Budget Range
                  </label>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      color: 'var(--brand-blue)',
                      fontSize: '1rem'
                    }}
                  >
                    {formatBudgetText(formData.budgetLakhs)}
                  </span>
                </div>
                <input
                  type="range"
                  id="modal-budget"
                  min={10}
                  max={300}
                  step={5}
                  value={formData.budgetLakhs}
                  onChange={(e) =>
                    setFormData({ ...formData, budgetLakhs: Number(e.target.value) })
                  }
                  style={{
                    width: '100%',
                    accentColor: 'var(--accent)',
                    cursor: 'pointer'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: 'var(--earth-light)',
                    marginTop: '0.35rem'
                  }}
                >
                  <span>₹10 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crores</span>
                  <span>₹3 Crores+</span>
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="modal-location">
                  Project Location & Notes
                </label>
                <textarea
                  id="modal-location"
                  rows={3}
                  placeholder="Location in Hyderabad (e.g. Jubilee Hills, Kokapet), approximate area in sq.ft, or specific shuttering/interior requirements..."
                  className="form-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div style={{ marginTop: '1.75rem' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="modal-submit-whatsapp-btn"
                >
                  <MessageSquare size={16} style={{ marginRight: 6 }} /> Get Quote via WhatsApp <ArrowRight size={16} />
                </button>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--earth-light)',
                  marginTop: '1rem'
                }}
              >
                <Phone size={13} style={{ color: 'var(--accent)' }} />
                <span>Or call directly: <a href="tel:+919989382877" style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>+91 99893 82877</a></span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
