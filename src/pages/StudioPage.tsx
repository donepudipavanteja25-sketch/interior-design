import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, Layers, Leaf } from 'lucide-react';
import '../styles/pages.css';

interface StudioPageProps {
  onOpenConsultation: () => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onOpenConsultation }) => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Quality Craftsmanship',
      desc: 'Uncompromising engineering standards, high-tolerance shuttering formwork, and premium grade raw materials sourced exclusively from certified manufacturers.'
    },
    {
      icon: HeartHandshake,
      title: 'Client-Centric Approach',
      desc: 'Clear communication, transparent milestone budgeting, and dedicated supervision ensuring your vision and lifestyle remain at the heart of every decision.'
    },
    {
      icon: Layers,
      title: 'End-to-End Solutions',
      desc: 'One accountable team from initial soil feasibility, architectural drawings, and civil shuttering to custom millwork, lighting automation, and final handover.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Construction Commitment',
      desc: 'Climate-responsive orientation, passive daylighting, reusable shuttering systems, and rainwater harvesting that enhance long-term building performance.'
    }
  ];

  return (
    <div className="subpage studio-page-wrapper">
      {/* 1. Large Architectural Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content reveal reveal-up">
            <span className="section-tag">ABOUT VRIKSHA CONSTRUCTIONS</span>
            <h1 className="page-hero-title">
              Crafting Enduring Spaces with Purpose & Precision
            </h1>
            <p className="page-hero-lead">
              “At Vriksha, we create spaces that inspire, with a perfect balance of aesthetics, functionality and long-lasting quality. From homes to offices, we bring your vision to life with thoughtful design and expert execution.”
            </p>
          </div>
        </div>
      </section>

      {/* 2. Vriksha Story & Stats */}
      <section className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="two-column-narrative">
            <div className="narrative-left reveal reveal-left">
              <span className="section-tag">OUR JOURNEY</span>
              <h2 className="section-title">The Vriksha Story</h2>
              <p className="narrative-paragraph">
                Founded in Hyderabad, Vriksha Constructions & Interior Designers was established on a single powerful conviction: that modern construction should never force a compromise between aesthetic elegance, engineering durability, and environmental responsibility.
              </p>
              <p className="narrative-paragraph">
                Over the past half-decade, our practice has grown into a multidisciplinary construction and design house serving homeowners, visionary entrepreneurs, and commercial leaders across Telangana. Whether engineering cantilevered hillside villas or corporate headquarters, we eliminate the friction between designers, structural engineers, and contractors by bringing everyone together under one accountable roof.
              </p>

              {/* Statistics */}
              <div className="studio-page-stats-grid">
                <div className="studio-stat-box">
                  <div className="stat-value">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="studio-stat-box">
                  <div className="stat-value">100+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="studio-stat-box">
                  <div className="stat-value">5+</div>
                  <div className="stat-label">Years of Experience</div>
                </div>
              </div>
            </div>

            <div className="narrative-right reveal reveal-right delay-1">
              <div className="narrative-image-frame">
                <img
                  src="/images/about_architecture_studio.jpg"
                  alt="Vriksha Architecture and Construction Studio in Hyderabad"
                  className="narrative-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card reveal reveal-up">
              <span className="mission-tag">OUR MISSION</span>
              <h3 className="mission-title">To build with integrity, innovation, and lasting beauty.</h3>
              <p className="mission-desc">
                We strive to elevate living standards across Hyderabad through durable construction techniques, high-efficiency shuttering systems, and bespoke interior craftsmanship that enrich human lives while respecting natural resources.
              </p>
            </div>

            <div className="mission-card reveal reveal-up delay-1">
              <span className="mission-tag">OUR VISION</span>
              <h3 className="mission-title">The premier turnkey construction partner in Telangana.</h3>
              <p className="mission-desc">
                To be celebrated as the benchmark for accountable, sustainable construction and thoughtful interior design—delivering enduring structures that inspire pride for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header-center reveal reveal-up">
            <span className="section-tag">GUIDING PRINCIPLES</span>
            <h2 className="section-title">The Values That Shape Every Build</h2>
          </div>

          <div className="values-grid">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div key={v.title} className={`value-card reveal reveal-up delay-${idx + 1}`}>
                  <div className="value-icon-box">
                    <IconComp size={22} />
                  </div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Final Quote CTA */}
      <section className="section-padding final-page-cta">
        <div className="container text-center">
          <div className="reveal reveal-up" style={{ maxWidth: 750, margin: '0 auto' }}>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              Have a space in mind? Let’s build it well.
            </h2>
            <p style={{ color: '#DCE4E9', fontSize: '1.05rem', margin: '1rem 0 2rem', lineHeight: 1.6 }}>
              Connect directly with our Hyderabad directors to review site drawings, explore shuttering solutions, or schedule a consultation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn-primary"
              >
                Get a Quote <ArrowRight size={15} />
              </button>
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
