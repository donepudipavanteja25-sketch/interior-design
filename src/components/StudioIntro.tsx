import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Building2 } from 'lucide-react';
import '../styles/studio.css';

export const StudioIntro: React.FC = () => {
  return (
    <section className="studio-section section-padding" id="studio">
      <div className="container">
        <div className="studio-grid">
          {/* Left Text Block */}
          <div className="studio-text-col reveal reveal-left">
            <span className="section-tag">ABOUT VERDÉ & FORM</span>

            <h2 className="studio-heading">
              Designing Spaces.<br />Building Lifestyles.
            </h2>

            <p className="studio-paragraph">
              We are a full-service interiors and construction company, passionate about creating inspiring spaces that blend aesthetics, functionality, and lasting value.
            </p>

            <p className="studio-secondary-text">
              From foundational architecture and bespoke masonry to turn-key styling and lighting atmospheres, we turn visionary sketches into extraordinary, lived-in realities.
            </p>

            <div style={{ marginTop: '0.5rem' }}>
              <Link to="/studio" className="btn-primary" id="discover-studio-cta">
                More About Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Architectural Visual with Floating Stats Card */}
          <div className="studio-image-col reveal reveal-right delay-2">
            {/* Floating Stats Card matching Nexora screenshot */}
            <div className="studio-floating-stats">
              <div className="studio-stat-row">
                <div className="studio-stat-icon-box">
                  <Sparkles size={20} />
                </div>
                <div className="studio-stat-info">
                  <span className="studio-stat-val">10+</span>
                  <span className="studio-stat-lbl">Years of Experience</span>
                </div>
              </div>

              <div className="studio-stat-row">
                <div className="studio-stat-icon-box">
                  <Users size={20} />
                </div>
                <div className="studio-stat-info">
                  <span className="studio-stat-val">250+</span>
                  <span className="studio-stat-lbl">Happy Clients</span>
                </div>
              </div>

              <div className="studio-stat-row">
                <div className="studio-stat-icon-box">
                  <Building2 size={20} />
                </div>
                <div className="studio-stat-info">
                  <span className="studio-stat-val">500+</span>
                  <span className="studio-stat-lbl">Projects Delivered</span>
                </div>
              </div>
            </div>

            <div className="studio-image-frame">
              <img
                src="/images/studio.jpg"
                alt="Verdé & Form Contemporary Dining and Living Space"
                className="studio-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
