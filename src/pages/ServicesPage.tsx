import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, Clock, Home, Building2, Palette, Hammer } from 'lucide-react';
import { servicesData } from '../data/services';
import '../styles/pages.css';

interface ServicesPageProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceForInquiry,
  onOpenConsultation
}) => {
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [id]);
  const iconsMap: Record<string, React.ReactNode> = {
    'residential-construction': <Home size={24} />,
    'commercial-construction': <Building2 size={24} />,
    'interior-design': <Palette size={24} />,
    'renovation-remodeling': <Hammer size={24} />
  };

  return (
    <div className="subpage services-page-wrapper">
      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content reveal reveal-up">
            <span className="section-tag">SERVICES & DISCIPLINES</span>
            <h1 className="page-hero-title">Complete Turnkey Solutions Under One Roof</h1>
            <p className="page-hero-lead">
              From bespoke architectural villas to corporate headquarters, interior styling, and structural renovations—Vriksha brings design, engineering, and execution together with total accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="services-detailed-list">
            {servicesData.map((service, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`service-detail-block reveal reveal-up ${isEven ? 'detail-reversed' : ''}`}
                >
                  <div className="service-detail-visual">
                    <div className="service-image-holder">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-detail-img"
                        loading="lazy"
                      />
                      <span className="service-detail-num">{service.number}</span>
                    </div>
                  </div>

                  <div className="service-detail-info">
                    <div className="service-icon-header">
                      <div className="service-icon-pill">
                        {iconsMap[service.id] || <Home size={22} />}
                      </div>
                      <span className="service-timeline-tag">
                        <Clock size={13} style={{ display: 'inline', marginRight: 4 }} />
                        Timeline: {service.timeline}
                      </span>
                    </div>

                    <h2 className="service-title-h2">{service.title}</h2>
                    <p className="service-tagline-p">{service.tagline}</p>
                    <p className="service-description-p">{service.description}</p>

                    <div className="service-scope-deliverables-grid">
                      <div className="service-box">
                        <h4 className="service-box-title">Key Scope of Work</h4>
                        <ul className="service-check-ul">
                          {service.scope.map((item, i) => (
                            <li key={i}>
                              <Check size={14} className="service-check-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="service-box">
                        <h4 className="service-box-title">Core Deliverables</h4>
                        <ul className="service-check-ul">
                          {service.deliverables.map((item, i) => (
                            <li key={i}>
                              <Check size={14} className="service-check-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="service-action-row">
                      <button
                        type="button"
                        onClick={() => onSelectServiceForInquiry(service.title)}
                        className="btn-primary"
                      >
                        Get a Quote for this Service <ArrowRight size={15} />
                      </button>

                      <a href="tel:+919989382877" className="btn-secondary">
                        Call +91 99893 82877
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Quote CTA */}
      <section className="section-padding final-page-cta">
        <div className="container text-center">
          <div className="reveal reveal-up" style={{ maxWidth: 750, margin: '0 auto' }}>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              Have a space in mind? Let’s build it well.
            </h2>
            <p style={{ color: '#DCE4E9', fontSize: '1.05rem', margin: '1rem 0 2rem' }}>
              Discuss your plot, commercial facility, or interior remodel directly with our Hyderabad engineering leaders.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn-primary"
              >
                Get a Quote <ArrowRight size={15} />
              </button>
              <Link to="/contact" className="btn-secondary">
                Visit Hyderabad Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
