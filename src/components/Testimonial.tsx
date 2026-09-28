import React from 'react';
import { Quote } from 'lucide-react';
import { testimonialsData, pressMentions } from '../data/testimonials';
import '../styles/testimonial.css';

export const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      {/* Full-width Blue Testimonial Section */}
      <div className="testimonial-blue-hero">
        <div className="container">
          <div className="testimonial-blue-content reveal reveal-up">
            <Quote size={48} className="testimonial-quote-icon" />

            <blockquote className="testimonial-hero-quote">
              “Vriksha delivered our dream home exactly as we envisioned. The design, quality and attention to detail were exceptional.”
            </blockquote>

            <div className="testimonial-hero-author">
              <div className="author-name">Ramesh Kumar</div>
              <div className="author-project">Modern Villa, Hyderabad</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Client Testimonials & Acclaim */}
      <div className="testimonial-reviews-section section-padding">
        <div className="container">
          <div className="testimonial-header reveal reveal-up">
            <span className="section-tag">CLIENT VOICES</span>
            <h2 className="section-title">
              Built on Trust. Delivered with Care.
            </h2>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map((item, idx) => (
              <div key={item.id} className={`testimonial-card reveal reveal-up delay-${idx + 1}`}>
                <blockquote className="testimonial-quote-text">
                  “{item.quote}”
                </blockquote>
                <div className="testimonial-author-box">
                  <div className="testimonial-client-name">{item.clientName}</div>
                  <div className="testimonial-project-info">
                    {item.clientRole} · {item.projectTitle}, {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Acclaim */}
          <div className="press-accolades-wrapper reveal reveal-up delay-2">
            <div className="press-title-label">CRITICAL RECOGNITION & INDUSTRY STANDARDS</div>
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
      </div>
    </section>
  );
};
