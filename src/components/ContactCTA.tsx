import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { studioLocations } from '../data/studio';
import '../styles/contact.css';

interface ContactCTAProps {
  initialServiceOrProject?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ initialServiceOrProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    spaceType: 'Residential Villa',
    scope: initialServiceOrProject || 'Full-Scope Interior Design',
    area: '3,000 – 6,000 sq. ft',
    location: 'Hyderabad',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header reveal reveal-up">
          <span className="section-tag">COMMENCE A CONVERSATION</span>
          <h2 className="section-title">
            Ready to bring calm, intentional design to your space?
          </h2>
          <p className="section-lead" style={{ marginTop: '1rem' }}>
            We accept a limited number of commissions each calendar year to ensure uncompromised architectural dedication to every sanctuary.
          </p>
        </div>

        <div className="contact-grid">
          {/* Inquiry Form Column */}
          <div className="contact-form-box reveal reveal-left delay-1">
            {isSubmitted ? (
              <div className="inquiry-success-box">
                <CheckCircle2 size={44} color="var(--sage)" style={{ margin: '0 auto 1.25rem' }} />
                <h3 className="inquiry-success-title">Your Inquiry is Received</h3>
                <p className="inquiry-success-text">
                  Thank you, {formData.name}. Our principal design team will review your project parameters ({formData.spaceType} in {formData.location}) and contact you within 48 business hours to arrange an introductory consultation.
                </p>
                <button
                  className="btn-light"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      spaceType: 'Residential Villa',
                      scope: 'Full-Scope Interior Design',
                      area: '3,000 – 6,000 sq. ft',
                      location: 'Hyderabad',
                      message: ''
                    });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="consultation-form">
                <div className="form-group-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="client-name">Your Full Name *</label>
                    <input
                      type="text"
                      id="client-name"
                      required
                      placeholder="e.g. Anand Mahindra"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="client-email">Email Address *</label>
                    <input
                      type="email"
                      id="client-email"
                      required
                      placeholder="e.g. anand@domain.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="client-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="client-phone"
                      placeholder="+91 98490 12345"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="space-type">Typology</label>
                    <select
                      id="space-type"
                      className="form-select"
                      value={formData.spaceType}
                      onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                    >
                      <option value="Residential Villa">Private Residential Villa</option>
                      <option value="Holiday Residence">Tropical Holiday Residence</option>
                      <option value="Urban Apartment">High-Rise Apartment / Penthouse</option>
                      <option value="Heritage Restoration">Heritage Restoration & Bungalow</option>
                      <option value="Boutique Commercial">Boutique Commercial & Gallery</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="project-scope">Design Scope</label>
                    <select
                      id="project-scope"
                      className="form-select"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    >
                      <option value="Interior Architecture & Spatial Planning">Interior Architecture & Spatial Planning</option>
                      <option value="Full-Scope Interior Design">Full-Scope Interior Design</option>
                      <option value="Bespoke Furniture & Lighting Curation">Bespoke Furniture & Lighting Curation</option>
                      <option value="Heritage Renovation & Adaptive Reuse">Heritage Renovation & Adaptive Reuse</option>
                      <option value="Turnkey Styling & Art Advisory">Turnkey Styling & Art Advisory</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="project-location">Location</label>
                    <select
                      id="project-location"
                      className="form-select"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    >
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Goa">Goa</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="International">International / Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="project-message">Project Vision & Details</label>
                  <textarea
                    id="project-message"
                    className="form-textarea"
                    placeholder="Tell us about the property, your timeline expectations, and how you envision living in the space..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="form-submit-btn" id="submit-inquiry-btn">
                  Submit Project Inquiry <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Locations & Contact Info */}
          <div className="studio-hubs-col reveal reveal-right delay-2">
            <div>
              <h3 className="studio-hubs-title">Our Practice Ateliers</h3>
              <p style={{ color: 'var(--sand)', fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.85 }}>
                We welcome prospective clients to our material libraries by private appointment.
              </p>
            </div>

            {studioLocations.map((hub) => (
              <div key={hub.city} className="studio-hub-card">
                <h4 className="hub-city-name">{hub.city} Atelier</h4>
                <div className="hub-atelier-label">{hub.name}</div>
                <div className="hub-address-text">
                  <MapPin size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'text-bottom' }} />
                  {hub.address}, {hub.district}
                </div>
                <div className="hub-contact-links">
                  <a href={`tel:${hub.phone}`}>
                    <Phone size={13} /> {hub.phone}
                  </a>
                  <a href={`mailto:${hub.email}`}>
                    <Mail size={13} /> {hub.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
