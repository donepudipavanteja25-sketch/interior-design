import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Process } from '../components/Process';
import '../styles/pages.css';

interface ProcessPageProps {
  onOpenConsultation: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenConsultation }) => {
  const faqs = [
    {
      q: 'At what stage should we engage Verdé & Form?',
      a: 'Ideally before breaking ground or purchasing an existing property. Engaging us during early land acquisition or before structural planning allows us to shape building orientation, natural light funnels, and breezeways.'
    },
    {
      q: 'Do you manage construction and artisan contractors on site?',
      a: 'Yes. We provide complete site superintendence. We coordinate directly with specialized masonry crews, master joiners, metal smiths, and MEP engineers to guarantee architectural drawings are realized with millimeter accuracy.'
    },
    {
      q: 'Can you source rare materials and international antique pieces?',
      a: 'We personally visit quarries across Rajasthan, Italy, and Portugal to select individual slabs of marble and limestone. Our curation team also sources rare architectural antiques and ceramics from Japan, France, and craft guilds across India.'
    },
    {
      q: 'What is the typical timeline for a complete residential commission?',
      a: 'A bespoke 4,000–8,000 sq. ft residence typically requires 4–6 months of design development and 10–14 months of physical craftsmanship and turnkey delivery.'
    }
  ];

  return (
    <div className="process-page-container">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="page-breadcrumb-sep">/</span>
              <span>Methodology</span>
            </nav>
            <h1 className="page-header-title">The 4-Phase Architectural Journey</h1>
            <p className="page-header-lead">
              A transparent, calm, and rigorous architectural methodology designed to remove friction and ensure every millwork detail is built to endure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Timeline Component */}
      <Process />

      {/* Architectural Process FAQ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-block" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Navigating the Architectural Journey</h2>
            <p className="section-lead">
              Common questions regarding our engagement models, site supervision, and timelines.
            </p>
          </div>

          <div className="philosophy-pillars-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="pillar-card" style={{ backgroundColor: 'var(--ivory)', padding: '2rem', borderRadius: '2px', border: '1px solid var(--border-light)' }}>
                <span className="pillar-number">0{idx + 1}</span>
                <h3 className="pillar-title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p className="pillar-desc" style={{ fontSize: '0.9rem', lineHeight: '1.75' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="page-cta-banner">
        <div className="container">
          <div className="page-cta-inner">
            <span className="page-cta-tag">Start Phase One</span>
            <h2 className="page-cta-heading">Initiate Your Spatial Audit</h2>
            <p className="page-cta-desc">
              Schedule a dedicated introductory meeting with our partners in Hyderabad, Mumbai, or Goa to review your site layout and project vision.
            </p>
            <div className="page-cta-buttons">
              <button onClick={onOpenConsultation} className="btn-light">
                Begin Phase 01 Inquiry <ArrowUpRight size={16} />
              </button>
              <Link to="/contact" className="btn-secondary" style={{ borderColor: 'var(--ivory)', color: 'var(--ivory)' }}>
                View Atelier Locations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
