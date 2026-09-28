import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/pages.css';

export const TermsPage: React.FC = () => {
  return (
    <div className="subpage legal-page-wrapper">
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">LEGAL & COMPLIANCE</span>
            <h1 className="page-hero-title">Terms & Conditions</h1>
            <p className="page-hero-lead">
              Operating principles and service terms of Vriksha Constructions & Interior Designers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="legal-content-body" style={{ lineHeight: 1.8, color: 'var(--earth)' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              1. Scope of Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Vriksha Constructions & Interior Designers provides residential construction, commercial construction, interior architecture, renovation & remodeling, and specialized shuttering formwork solutions in Hyderabad and across Telangana.
            </p>

            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              2. Quotations & Contracts
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Preliminary estimates generated through our website or WhatsApp are indicative and subject to structural soil testing, topographical surveys, municipal approval parameters, and finalized Bill of Quantities (BoQ). All binding contracts are formalized in signed agreements detailing milestone schedules and material specifications.
            </p>

            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              3. Intellectual Property
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              All architectural renderings, photographs, technical drawings, and brand assets presented on this website are the proprietary intellectual property of Vriksha Constructions & Interior Designers.
            </p>

            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              4. Governing Law
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              Any contractual disputes arising in relation to our services shall be governed exclusively by the laws of India and subject to the jurisdiction of the courts of Hyderabad, Telangana.
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
