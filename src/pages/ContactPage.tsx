import React from 'react';
import { Link } from 'react-router-dom';
import { ContactCTA } from '../components/ContactCTA';
import '../styles/pages.css';

interface ContactPageProps {
  initialPreset?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialPreset }) => {
  return (
    <div className="contact-page-container">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="page-breadcrumb-sep">/</span>
              <span>Contact & Ateliers</span>
            </nav>
            <h1 className="page-header-title">Begin an Architectural Dialogue</h1>
            <p className="page-header-lead">
              Every meaningful sanctuary starts with an unhurried conversation.
              Reach our principal partners directly or schedule a private studio visit in Hyderabad, Mumbai, or Goa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact CTA with Form and Atelier Locations */}
      <ContactCTA initialServiceOrProject={initialPreset} />
    </div>
  );
};
