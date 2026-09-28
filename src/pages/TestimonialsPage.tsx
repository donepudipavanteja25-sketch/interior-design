import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { testimonialsData, pressMentions } from '../data/testimonials';
import '../styles/pages.css';

interface TestimonialsPageProps {
  onOpenConsultation?: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="subpage testimonials-page-wrapper">
      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content reveal reveal-up">
            <span className="section-tag">CLIENT VOICES & PRAISE</span>
            <h1 className="page-hero-title">Trusted by Homeowners & Commercial Leaders</h1>
            <p className="page-hero-lead">
              Hear directly from our clients across Hyderabad regarding their experience partnering with Vriksha on residential villas, corporate offices, and luxury interiors.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="testimonials-detailed-grid">
            {testimonialsData.map((item, idx) => (
              <div
                key={item.id}
                className={`testimonial-detail-card reveal reveal-up delay-${idx + 1}`}
              >
                {item.image && (
                  <div className="testimonial-img-box">
                    <img
                      src={item.image}
                      alt={`${item.projectTitle} project`}
                      className="testimonial-project-image"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="testimonial-card-inner">
                  <div className="testimonial-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--accent)" color="var(--accent)" />
                    ))}
                  </div>

                  <blockquote className="testimonial-body-quote">
                    “{item.quote}”
                  </blockquote>

                  <div className="testimonial-client-meta">
                    <strong className="client-full-name">{item.clientName}</strong>
                    <span className="client-role-badge">{item.clientRole}</span>
                    <span className="client-project-details">
                      {item.projectTitle} · {item.location} ({item.year})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Accolades Section */}
          <div className="press-section-wrap reveal reveal-up delay-2">
            <span className="section-tag text-center" style={{ display: 'block', margin: '0 auto 1rem' }}>
              CRITICAL RECOGNITION
            </span>
            <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>
              Standards of Distinction
            </h2>

            <div className="press-grid">
              {pressMentions.map((press) => (
                <div key={press.publication} className="press-item">
                  <div className="press-name">{press.publication}</div>
                  <div className="press-acclaim">{press.acclaim}</div>
                  <div className="press-quote-snippet">“{press.quote}”</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="section-padding final-page-cta">
        <div className="container text-center">
          <div className="reveal reveal-up" style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              Ready to start your own success story?
            </h2>
            <p style={{ color: '#DCE4E9', fontSize: '1.05rem', margin: '1rem 0 2rem' }}>
              Schedule a consultation with our team and let us build your vision with excellence.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {onOpenConsultation ? (
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="btn-primary"
                >
                  Get a Quote <ArrowRight size={15} />
                </button>
              ) : (
                <Link to="/contact" className="btn-primary">
                  Contact Us <ArrowRight size={15} />
                </Link>
              )}
              <a href="tel:+919989382877" className="btn-secondary">
                Call +91 99893 82877
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
