import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Compass, Sparkles, Feather } from 'lucide-react';
import { StudioIntro } from '../components/StudioIntro';
import { studioLocations } from '../data/studio';
import '../styles/pages.css';

interface StudioPageProps {
  onOpenConsultation: () => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onOpenConsultation }) => {
  const teamMembers = [
    {
      name: 'Maya Lin-Sen',
      role: 'Founder & Principal Architect',
      credentials: 'M.Arch, AA London · Fellow of Architectural Heritage',
      bio: 'Trained at the Architectural Association in London and apprenticed in Kyoto, Maya shapes residential sanctuaries that celebrate silence, atmospheric natural lighting, and honest material permanence.',
      image: '/images/studio.jpg'
    },
    {
      name: 'Vikramaditya Rao',
      role: 'Partner & Director of Interior Architecture',
      credentials: 'B.Arch CEPT · Master of Craft & Joinery',
      bio: 'Specializing in tectonic joinery, raw limestones, and tactile millwork, Vikramaditya oversees detailing across our private residential commissions in Mumbai, Hyderabad, and Goa.',
      image: '/images/willow.jpg'
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Materiality & Curation',
      credentials: 'MA Material Ecology, Basel',
      bio: 'Elena curates our library of rare mineral plasters, reclaimed architectural timbers, unlacquered bronzes, and handcrafted textiles directly with multi-generational European and Indian craft guilds.',
      image: '/images/material-travertine.jpg'
    }
  ];

  const distinctions = [
    {
      icon: Award,
      title: 'Architectural Digest Top 50',
      year: '2024 · 2025',
      desc: 'Named among the most influential architectural & interior design studios in South Asia.'
    },
    {
      icon: Compass,
      title: 'Wallpaper* Design Award',
      year: '2024 Finalist',
      desc: 'Recognized for Quiet Luxury & Environmental Craftsmanship in Residential Architecture.'
    },
    {
      icon: Sparkles,
      title: 'Dezeen Awards Shortlist',
      year: '2023 · Assagao Residence',
      desc: 'Celebrated for innovative use of vernacular laterite and natural thermal microclimates.'
    },
    {
      icon: Feather,
      title: 'Elle Décor Atelier Honors',
      year: '2023',
      desc: 'Best Bespoke Furniture & Architectural Joinery Collection for Private Commissions.'
    }
  ];

  return (
    <div className="studio-page-container">
      {/* Editorial Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="page-breadcrumb-sep">/</span>
              <span>The Studio</span>
            </nav>
            <h1 className="page-header-title">The Architecture of Solitude & Light</h1>
            <p className="page-header-lead">
              Founded on the belief that spaces shape the soul. We practice quiet architecture,
              where light, raw minerals, and proportion cultivate a sanctuary from the relentless pace of modern life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Studio Introduction Component */}
      <StudioIntro />

      {/* Architectural Leadership Section */}
      <section className="studio-team-section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">The Minds Behind the Space</h2>
            <p className="section-lead">
              An interdisciplinary collective of architects, interior architects, master millworkers, and material researchers united by a devotion to quiet luxury.
            </p>
          </div>

          <div className="studio-team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member-card">
                <div className="team-member-photo-frame">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-photo"
                    loading="lazy"
                  />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-role">{member.role}</span>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Ateliers Across India */}
      <section className="studio-spaces-section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-tag">Sanctuaries</span>
            <h2 className="section-title">Our Physical Ateliers</h2>
            <p className="section-lead">
              Three contemplative design sanctuaries where clients meet with architects and interact with raw stones, full-scale timber mockups, and natural textiles.
            </p>
          </div>

          <div className="studio-spaces-grid">
            {studioLocations.map((loc) => (
              <div key={loc.city} className="space-card">
                <div className="space-image-frame">
                  <img
                    src={
                      loc.city === 'Hyderabad'
                        ? '/images/studio.jpg'
                        : loc.city === 'Mumbai'
                        ? '/images/stone-sage.jpg'
                        : '/images/casa-terra.jpg'
                    }
                    alt={`${loc.city} Atelier`}
                    className="space-image"
                    loading="lazy"
                  />
                </div>
                <div className="space-info">
                  <h3 className="space-city">{loc.city}</h3>
                  <span className="space-tag">{loc.name}</span>
                  <p className="space-desc">{loc.address}, {loc.district}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinctions & Awards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div className="section-header-block" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">Recognition</span>
            <h2 className="section-title">Awards & Critical Accolades</h2>
          </div>

          <div className="philosophy-pillars-grid">
            {distinctions.map((d) => (
              <div key={d.title} className="pillar-card">
                <d.icon size={26} color="var(--sage)" style={{ marginBottom: '1.25rem' }} />
                <span className="pillar-number">{d.year}</span>
                <h3 className="pillar-title" style={{ fontSize: '1.35rem' }}>{d.title}</h3>
                <p className="pillar-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="page-cta-banner">
        <div className="container">
          <div className="page-cta-inner">
            <span className="page-cta-tag">Engage With Verdé & Form</span>
            <h2 className="page-cta-heading">Commission a Private Sanctuary</h2>
            <p className="page-cta-desc">
              We take on a strictly limited roster of 6 to 8 residential commissions each year to ensure uncompromising artisanal devotion.
            </p>
            <div className="page-cta-buttons">
              <button onClick={onOpenConsultation} className="btn-light">
                Request Studio Consultation <ArrowUpRight size={16} />
              </button>
              <Link to="/projects" className="btn-secondary" style={{ borderColor: 'var(--ivory)', color: 'var(--ivory)' }}>
                Explore Selected Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
