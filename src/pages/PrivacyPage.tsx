import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/pages.css';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="subpage legal-page-wrapper">
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">LEGAL & COMPLIANCE</span>
            <h1 className="page-hero-title">Privacy Policy</h1>
            <p className="page-hero-lead">
              Last updated: September 2024. Your privacy is paramount to Vriksha Constructions & Interior Designers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="legal-content-body" style={{ lineHeight: 1.8, color: 'var(--earth)' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              1. Information We Collect
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              When you submit a quotation inquiry or contact form on our website, we collect your name, phone/WhatsApp number, email address, project type, estimated budget, and project location. This information is gathered solely to facilitate architectural consultations and provide detailed cost estimates.
            </p>

            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We use your contact details exclusively to communicate regarding your construction or interior design inquiry, schedule site visits, and share technical documentation. We do not sell, rent, or trade your personal data to any third-party marketing services.
            </p>

            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              3. WhatsApp Communications
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              By submitting your information via our quotation tool, you initiate direct end-to-end encrypted messaging with our engineering office in Hyderabad (+91 99893 82877). You may opt out of further communications at any time by messaging us directly.
            </p>

            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              4. Contact Us
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              If you have any questions regarding this Privacy Policy, please email us at <strong>contact@vrikshaconstructions.com</strong> or write to our Hyderabad office at Road No. 36, Jubilee Hills & Hitec City Corridor, Hyderabad, Telangana 500033.
            </p>

            <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <ArrowLeft size={15} /> Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
