import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import '../styles/services.css';

interface ServicesProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header reveal reveal-up">
          <div>
            <span className="section-tag">SERVICES</span>
            <h2 className="section-title">
              Complete solutions under one roof
            </h2>
          </div>
          <p className="section-lead" style={{ maxWidth: 480 }}>
            From concept to completion, we tailor every construction and interior solution to your lifestyle, business and site.
          </p>
        </div>

        {/* 4 Service Cards Grid with Image, Number, Title, Summary, Hover Zoom */}
        <div className="services-cards-grid">
          {servicesData.map((service, idx) => (
            <article
              key={service.id}
              className={`service-feature-card reveal reveal-up delay-${idx + 1}`}
            >
              <div className="service-card-img-box">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                  loading="lazy"
                />
                <span className="service-card-number">{service.number}</span>
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                <div className="service-card-footer">
                  <Link
                    to={`/services#${service.id}`}
                    className="service-learn-more-link"
                    id={`service-learn-more-${service.id}`}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>

                  {onSelectServiceForInquiry && (
                    <button
                      type="button"
                      onClick={() => onSelectServiceForInquiry(service.title)}
                      className="service-inquire-quick-btn"
                    >
                      Inquire
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Services Link */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link to="/services" className="btn-secondary">
            Explore All Disciplines & Specifications <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
