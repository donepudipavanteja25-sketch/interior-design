import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';
import '../styles/pages.css';

interface ContactPageProps {
  initialPreset?: string;
  onOpenConsultation?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialPreset, onOpenConsultation }) => {
  return (
    <div className="subpage contact-page-wrapper">
      {/* Contact Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content reveal reveal-up">
            <span className="section-tag">GET IN TOUCH</span>
            <h1 className="page-hero-title">Start a Conversation with Vriksha</h1>
            <p className="page-hero-lead">
              Whether you are planning a luxury villa, commercial development, interior renovation, or specialized shuttering execution—we are here to guide your build in Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--cream)', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="contact-cards-grid">
            <div className="contact-direct-card reveal reveal-up delay-1">
              <div className="contact-direct-icon">
                <Phone size={22} />
              </div>
              <h3 className="contact-direct-title">Call or WhatsApp</h3>
              <p className="contact-direct-desc">Direct line for project consultations & site inquiries.</p>
              <a href="tel:+919989382877" className="contact-direct-link">
                +91 99893 82877
              </a>
            </div>

            <div className="contact-direct-card reveal reveal-up delay-2">
              <div className="contact-direct-icon">
                <Mail size={22} />
              </div>
              <h3 className="contact-direct-title">Email Us</h3>
              <p className="contact-direct-desc">Send us architectural drawings or RFPs.</p>
              <a href="mailto:contact@vrikshaconstructions.com" className="contact-direct-link">
                contact@vrikshaconstructions.com
              </a>
              <span style={{ fontSize: '0.8rem', color: 'var(--earth-light)', display: 'block', marginTop: 4 }}>
                inquiry@vrikshaconstructions.com
              </span>
            </div>

            <div className="contact-direct-card reveal reveal-up delay-3">
              <div className="contact-direct-icon">
                <MapPin size={22} />
              </div>
              <h3 className="contact-direct-title">Hyderabad Headquarters</h3>
              <p className="contact-direct-desc">Road No. 36, Jubilee Hills & Hitec City Corridor, Hyderabad, Telangana 500033</p>
              <span className="contact-direct-hours">
                <Clock size={13} style={{ display: 'inline', marginRight: 4 }} />
                Mon–Sat: 9:00 AM – 7:00 PM IST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form & WhatsApp CTA */}
      <ContactCTA
        initialServiceOrProject={initialPreset}
        onOpenConsultation={onOpenConsultation}
      />

      {/* Map Area */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory)', paddingTop: '0' }}>
        <div className="container">
          <div className="contact-map-card reveal reveal-up">
            <div className="contact-map-header">
              <div>
                <span className="section-tag" style={{ margin: 0 }}>STUDIO LOCATION</span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--charcoal)', marginTop: '0.25rem' }}>
                  Road No. 36, Jubilee Hills & Hitec City Corridor
                </h3>
              </div>
              <a
                href="https://maps.google.com/?q=Road+No+36+Jubilee+Hills+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.75rem', padding: '0.6rem 1.25rem' }}
              >
                Open in Google Maps <ArrowRight size={13} />
              </a>
            </div>

            <div className="map-placeholder-frame">
              <div className="map-interactive-view">
                <iframe
                  title="Vriksha Constructions Location in Jubilee Hills Hyderabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.78657682226!2d78.3965!3d17.4365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbeb301bc2dc3b!2sRoad%20No.%2036%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
