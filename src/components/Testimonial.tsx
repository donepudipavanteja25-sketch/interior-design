import React from 'react';
import { testimonialsData, pressMentions } from '../data/testimonials';
import '../styles/testimonial.css';

export const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section section-padding" id="testimonials">
      <div className="container">
        <div className="testimonial-header reveal reveal-up">
          <span className="section-tag">VOICES & ACCLAIM</span>
          <h2 className="section-title">
            Words from those who live within our spaces.
          </h2>
        </div>

        {/* Client Quotes */}
        <div className="testimonials-grid">
          {testimonialsData.map((item, idx) => (
            <div key={item.id} className={`testimonial-card reveal reveal-up delay-${idx + 1}`}>
              <blockquote className="testimonial-quote-text">
                “{item.quote}”
              </blockquote>
              <div className="testimonial-author-box">
                <div className="testimonial-client-name">{item.clientName}</div>
                <div className="testimonial-project-info">
                  {item.projectTitle} · {item.location} ({item.year})
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Accolades */}
        <div className="press-accolades-wrapper reveal reveal-up delay-2">
          <div className="press-title-label">CRITICAL RECOGNITION & FEATURES</div>
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
  );
};
