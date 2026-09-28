import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import '../styles/contact.css';

interface ContactCTAProps {
  initialServiceOrProject?: string;
  onOpenConsultation?: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  initialServiceOrProject,
  onOpenConsultation
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: initialServiceOrProject || 'Residential Construction',
    budget: '50 Lakhs – 1 Crore',
    location: 'Hyderabad',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `*Project Enquiry - Vriksha Constructions*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Estimated Budget:* ${formData.budget}\n` +
      `*Location:* ${formData.location}\n` +
      `*Notes:* ${formData.notes || 'None'}`;

    const url = `https://wa.me/919989382877?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header reveal reveal-up">
          <span className="section-tag">START YOUR PROJECT</span>
          <h2 className="section-title">
            Have a space in mind? Let’s build it well.
          </h2>
          <p className="section-lead" style={{ marginTop: '0.75rem' }}>
            Tell us what you are planning and we will help you understand the right construction approach, materials and next steps.
          </p>

          {/* Direct Actions */}
          <div className="contact-header-actions">
            {onOpenConsultation && (
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn-primary"
                id="cta-get-quote-btn"
              >
                Get a Quote <ArrowRight size={15} />
              </button>
            )}

            <a
              href="tel:+919989382877"
              className="btn-secondary contact-call-btn"
              id="cta-call-btn"
            >
              <Phone size={15} style={{ marginRight: 6 }} /> Call +91 99893 82877
            </a>
          </div>
        </div>

        <div className="contact-grid">
          {/* Inquiry Form Column with WhatsApp Submission */}
          <div className="contact-form-box reveal reveal-left delay-1">
            {isSubmitted ? (
              <div className="inquiry-success-box">
                <CheckCircle2 size={44} color="var(--accent)" style={{ margin: '0 auto 1.25rem' }} />
                <h3 className="inquiry-success-title">Quotation Inquiry Formatted!</h3>
                <p className="inquiry-success-text">
                  Thank you, {formData.name}. Your project details have been prepared and sent via WhatsApp to our team at <strong>+91 99893 82877</strong>.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageSquare size={15} style={{ marginRight: 6 }} /> Open WhatsApp Again
                  </a>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="consultation-form">
                <div className="form-group-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="client-name">Full Name *</label>
                    <input
                      type="text"
                      id="client-name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="client-phone">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      id="client-phone"
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
                    <label className="form-label" htmlFor="client-email">Email Address</label>
                    <input
                      type="email"
                      id="client-email"
                      placeholder="e.g. ramesh@domain.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="project-type">Project Type</label>
                    <select
                      id="project-type"
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

                <div className="form-group-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="project-budget">Estimated Budget</label>
                    <select
                      id="project-budget"
                      className="form-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="₹10 Lakhs – ₹25 Lakhs">₹10 Lakhs – ₹25 Lakhs</option>
                      <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                      <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                      <option value="₹1 Crore – ₹2 Crores">₹1 Crore – ₹2 Crores</option>
                      <option value="₹2 Crores – ₹3 Crores+">₹2 Crores – ₹3 Crores+</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="project-location">Location in Hyderabad</label>
                    <input
                      type="text"
                      id="project-location"
                      placeholder="e.g. Jubilee Hills, Gachibowli, Kokapet"
                      className="form-input"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field" style={{ marginBottom: '1.75rem' }}>
                  <label className="form-label" htmlFor="project-notes">Project Notes & Specifications</label>
                  <textarea
                    id="project-notes"
                    rows={4}
                    placeholder="Tell us about your plot size, shuttering requirements, design preferences or estimated start date..."
                    className="form-textarea"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="submit-inquiry-whatsapp-btn"
                >
                  <MessageSquare size={16} style={{ marginRight: 6 }} /> Send via WhatsApp <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Location & Quick Contact */}
          <div className="contact-info-col reveal reveal-right delay-2">
            <div className="contact-info-card">
              <h3 className="contact-card-title">Hyderabad Headquarters</h3>
              <p className="contact-card-desc">
                Visit our design center or connect directly with our engineering team for on-site feasibility audits.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-row">
                  <MapPin size={18} className="contact-detail-icon" />
                  <div>
                    <strong>Office Address:</strong>
                    <span>Road No. 36, Jubilee Hills & Hitec City Corridor, Hyderabad, Telangana 500033</span>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <Phone size={18} className="contact-detail-icon" />
                  <div>
                    <strong>Direct Helpline:</strong>
                    <a href="tel:+919989382877">+91 99893 82877</a>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <Mail size={18} className="contact-detail-icon" />
                  <div>
                    <strong>Official Email:</strong>
                    <a href="mailto:contact@vrikshaconstructions.com">contact@vrikshaconstructions.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-hours-box">
                <strong>Working Hours:</strong>
                <span>Monday – Saturday: 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
