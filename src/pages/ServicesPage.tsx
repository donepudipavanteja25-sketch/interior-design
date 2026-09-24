import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Services } from '../components/Services';
import '../styles/pages.css';

interface ServicesPageProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceForInquiry,
  onOpenConsultation
}) => {
  const deliverablePillars = [
    {
      num: '01',
      title: 'Architectural Blueprint Package',
      items: [
        'Site solar orientation & microclimate audit',
        '2D spatial restructuring & partition demolition plans',
        'Reflected ceiling & architectural lighting plans',
        'Floor finishes & transition thresholds schedule'
      ]
    },
    {
      num: '02',
      title: 'Photorealistic Visualizations',
      items: [
        'High-fidelity 3D atmospheric perspective renders',
        'Accurate sun position & shadow study renders',
        'Physical tactile material & finish boards',
        'Virtual walk-through spatial simulations'
      ]
    },
    {
      num: '03',
      title: 'Technical Millwork Details',
      items: [
        '1:10 & 1:5 scale joinery & cabinetry working drawings',
        'Stone stone-cladding & dry-fixing engineering sets',
        'Concealed mechanical, HVAC & smart electrical layouts',
        'Comprehensive tender documentation & bill of quantities'
      ]
    },
    {
      num: '04',
      title: 'Artisan Sourcing & Turnkey Handover',
      items: [
        'Direct quarry stone block selection & dry-lay inspection',
        'Custom furniture prototyping with master craftsmen',
        'White-glove uncrating, alignment & artwork installation',
        'Client care guide for generational material maintenance'
      ]
    }
  ];

  return (
    <div className="services-page-container">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="page-breadcrumb-sep">/</span>
              <span>Services</span>
            </nav>
            <h1 className="page-header-title">Architectural & Interior Disciplines</h1>
            <p className="page-header-lead">
              We guide residential projects from initial spatial zoning to white-glove turnkey completion,
              acting as architect, interior designer, and meticulous material curator.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Disciplines Accordion Component */}
      <Services onSelectServiceForInquiry={onSelectServiceForInquiry} />

      {/* Comprehensive Deliverables Matrix */}
      <section className="services-deliverables-section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-tag">Deliverables</span>
            <h2 className="section-title">What You Receive</h2>
            <p className="section-lead">
              Our documentation leaves zero room for ambiguity on site, ensuring master craftspeople execute with millimeter precision.
            </p>
          </div>

          <div className="deliverables-cards-grid">
            {deliverablePillars.map((pillar) => (
              <div key={pillar.num} className="deliverable-card">
                <span className="deliverable-number">{pillar.num}</span>
                <h3 className="deliverable-title">{pillar.title}</h3>
                <ul className="deliverable-list">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="deliverable-item">
                      <span className="deliverable-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="page-cta-banner">
        <div className="container">
          <div className="page-cta-inner">
            <span className="page-cta-tag">Inquire About Scope</span>
            <h2 className="page-cta-heading">Discuss Your Architectural Project</h2>
            <p className="page-cta-desc">
              Every commission begins with an open conversation about your lifestyle rituals, property blueprints, and timeline expectations.
            </p>
            <div className="page-cta-buttons">
              <button onClick={onOpenConsultation} className="btn-light">
                Request Preliminary Scope Review <ArrowUpRight size={16} />
              </button>
              <Link to="/process" className="btn-secondary" style={{ borderColor: 'var(--ivory)', color: 'var(--ivory)' }}>
                Learn About Our 4-Phase Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
