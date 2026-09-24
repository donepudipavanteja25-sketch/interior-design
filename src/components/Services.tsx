import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import '../styles/services.css';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [openServiceId, setOpenServiceId] = useState<string>(servicesData[0].id);

  const toggleService = (id: string) => {
    setOpenServiceId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header reveal reveal-up">
          <div>
            <span className="section-tag">SERVICES & DISCIPLINES</span>
            <h2 className="section-title">
              Complete architectural and interior disciplines.
            </h2>
          </div>
          <p className="section-lead" style={{ maxWidth: 450 }}>
            From structural transformations to turnkey styling, we oversee every square foot with architectural precision.
          </p>
        </div>

        {/* Services List / Accordion */}
        <div className="services-list-wrapper">
          {servicesData.map((service, idx) => {
            const isOpen = openServiceId === service.id;
            return (
              <div
                key={service.id}
                className={`service-accordion-item reveal reveal-up delay-${(idx % 3) + 1} ${isOpen ? 'open' : ''}`}
              >
                <button
                  className="service-header-trigger"
                  onClick={() => toggleService(service.id)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.id}`}
                >
                  <div className="service-title-group">
                    <span className="service-num">{service.number}</span>
                    <h3 className="service-main-heading">{service.title}</h3>
                  </div>

                  <div className="service-icon-box">
                    <Plus size={18} />
                  </div>
                </button>

                <div
                  id={`service-panel-${service.id}`}
                  className="service-details-panel"
                  role="region"
                >
                  <div className="service-inner-content">
                    {/* Left Column: Description & Metadata */}
                    <div>
                      <div className="service-tagline-text">{service.tagline}</div>
                      <p className="service-desc-text">{service.description}</p>

                      <div className="service-meta-badge-row">
                        <div>
                          <strong>Typical Duration:</strong> {service.timeline}
                        </div>
                        <div>
                          <strong>Ideal For:</strong> {service.idealFor}
                        </div>
                      </div>

                      <div style={{ marginTop: '1.75rem' }}>
                        <button
                          onClick={() => onSelectServiceForInquiry(service.title)}
                          className="btn-primary"
                          style={{ padding: '0.85rem 1.6rem', fontSize: '0.75rem' }}
                        >
                          Inquire for this Discipline <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Scope & Deliverables */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div className="service-scope-col">
                        <h4>Scope of Work</h4>
                        <ul className="service-checklist">
                          {service.scope.map((item, idx) => (
                            <li key={idx}>
                              <Check size={15} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="service-deliverables-col">
                        <h4>Core Deliverables</h4>
                        <ul className="service-checklist">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx}>
                              <Check size={15} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link to="/services" className="btn-secondary">
            View All Disciplines & Deliverables <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
