import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Philosophy } from '../components/Philosophy';
import { VisualBreak } from '../components/VisualBreak';
import '../styles/pages.css';

interface PhilosophyPageProps {
  onOpenConsultation: () => void;
}

export const PhilosophyPage: React.FC<PhilosophyPageProps> = ({ onOpenConsultation }) => {
  const manifestoPillars = [
    {
      title: 'Material Honesty',
      desc: 'We never fake materials. Wood is solid and unvarnished so you touch the raw grain. Stone is honed and porous. Plasters are hand-troweled slaked lime that breathe with atmospheric humidity.'
    },
    {
      title: 'The Art of the Void',
      desc: 'Empty space is not an absence of furniture; it is the presence of calm. We choreograph circulation so that walking through a home feels like an unhurried meditation.'
    },
    {
      title: 'Shadow as a Building Material',
      desc: 'Direct harsh light exhausts the human eye. We carve light wells, clerestory apertures, and deep teak eaves to soften the tropical sun into golden ambient luminescence.'
    },
    {
      title: 'Generational Patina',
      desc: 'A great home should look better after twenty years than on day one. We choose unlacquered brass that darkens under touch, and natural Kota stone that polishes gently under footsteps.'
    }
  ];

  return (
    <div className="philosophy-page-container">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="page-breadcrumb-sep">/</span>
              <span>Design Philosophy</span>
            </nav>
            <h1 className="page-header-title">Honest Materials & The Poetry of Proportion</h1>
            <p className="page-header-lead">
              We reject fleeting interior trends and synthetic finishes. Our work is grounded in the belief that true luxury is tactile, sustainable, and intimately connected to natural light.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Interactive Tactile Lab Component */}
      <Philosophy />

      {/* Visual Atmospheric Break */}
      <VisualBreak />

      {/* Environmental & Craftsmanship Manifesto */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div className="section-header-block" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">Our Manifesto</span>
            <h2 className="section-title">The Four Tenets of Lasting Design</h2>
            <p className="section-lead">
              Principles that guide every sketch, every timber selection, and every physical mortar joint on site.
            </p>
          </div>

          <div className="philosophy-pillars-grid">
            {manifestoPillars.map((item, idx) => (
              <div key={item.title} className="pillar-card">
                <span className="pillar-number">0{idx + 1}</span>
                <h3 className="pillar-title">{item.title}</h3>
                <p className="pillar-desc">{item.desc}</p>
                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--sage)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  <CheckCircle2 size={14} /> Living Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="page-cta-banner">
        <div className="container">
          <div className="page-cta-inner">
            <span className="page-cta-tag">Tactile Archive</span>
            <h2 className="page-cta-heading">Experience the Materials in Person</h2>
            <p className="page-cta-desc">
              Visit our physical material archives in Hyderabad, Mumbai, or Goa to touch our collection of over 200 hand-selected stones, slaked limes, and reclaimed woods.
            </p>
            <div className="page-cta-buttons">
              <button onClick={onOpenConsultation} className="btn-light">
                Schedule Atelier Visit <ArrowUpRight size={16} />
              </button>
              <Link to="/services" className="btn-secondary" style={{ borderColor: 'var(--ivory)', color: 'var(--ivory)' }}>
                View Our Disciplines
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
