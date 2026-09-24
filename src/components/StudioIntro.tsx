import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/studio.css';

export const StudioIntro: React.FC = () => {
  return (
    <section className="studio-section section-padding" id="studio">
      <div className="container">
        <div className="studio-grid">
          {/* Left Text Block */}
          <div className="studio-text-col reveal reveal-left">
            <span className="section-tag">THE STUDIO</span>

            <h2 className="studio-heading">
              We design spaces with a sense of place, purpose, and permanence.
            </h2>

            <p className="studio-paragraph">
              Verdé & Form is an interior design studio creating refined residential and boutique spaces through a thoughtful balance of architecture, material, light, and everyday life.
            </p>

            <p className="studio-secondary-text">
              Founded on the belief that environment shapes human emotion, we reject trend-driven clutter in favor of quiet architectural proportions, tactile natural stones, and unvarnished timbers that deepen in character alongside the people who inhabit them.
            </p>

            <Link to="/studio" className="studio-cta" id="discover-studio-cta">
              Discover the Studio <ArrowRight size={15} />
            </Link>

            {/* Metrics Bar */}
            <div className="studio-metrics-row">
              <div className="metric-item reveal reveal-up delay-1">
                <div className="metric-number">14+</div>
                <div className="metric-label">Years of Practice</div>
              </div>
              <div className="metric-item reveal reveal-up delay-2">
                <div className="metric-number">68</div>
                <div className="metric-label">Completed Sanctuaries</div>
              </div>
              <div className="metric-item reveal reveal-up delay-3">
                <div className="metric-number">03</div>
                <div className="metric-label">Design Ateliers</div>
              </div>
            </div>
          </div>

          {/* Right Architectural Visual */}
          <div className="studio-image-col reveal reveal-right delay-2">
            <div className="studio-image-frame">
              <img
                src="/images/studio.jpg"
                alt="Verdé & Form Design Studio and Material Archive"
                className="studio-image"
                loading="lazy"
              />
              <div className="studio-image-badge">
                <div className="studio-badge-title">Material Archive & Atelier</div>
                <div className="studio-badge-desc">
                  Where tactile stone, timber, and daylight studies convene.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
