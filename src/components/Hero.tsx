import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Compass, ShieldCheck, Users } from 'lucide-react';
import '../styles/hero.css';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="hero-section" id="hero">
      {/* Background Architectural Visual */}
      <div className="hero-background-wrapper">
        <img
          src="/images/hero.jpg"
          alt="Verdé & Form Architectural Living Space with Travertine Stone and Natural Sunlight"
          className="hero-background-image"
          fetchPriority="high"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-inner">
          <div className="hero-tagline-label reveal reveal-down">
            INTERIORS / CONSTRUCTION / BETTER LIVING
          </div>

          <h1 className="hero-heading reveal reveal-up delay-1">
            <span>Spaces Designed</span>
            <span>for a Brighter</span>
            <span><em>Tomorrow</em></span>
          </h1>

          <div className="hero-bottom-grid reveal reveal-up delay-2">
            <div>
              <p className="hero-description">
                We create beautiful, functional spaces through thoughtful design and reliable construction, turning your vision into reality.
              </p>

              <div className="hero-actions">
                <button
                  onClick={onOpenConsultation}
                  className="hero-btn-primary"
                  id="hero-get-consultation-btn"
                >
                  Get Free Consultation <ArrowRight size={15} />
                </button>
                <Link to="/projects" className="hero-btn-secondary" id="hero-view-work-btn">
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="hero-scroll-cue-wrapper">
              <Link to="/studio" className="hero-scroll-cue" aria-label="Explore the studio">
                <span>SCROLL TO EXPLORE</span>
                <span className="hero-scroll-arrow">
                  <ArrowDown size={14} />
                </span>
              </Link>
            </div>
          </div>

          {/* Key Value Props Bar from Nexora Design */}
          <div className="hero-value-props reveal reveal-up delay-3">
            <div className="hero-prop-item">
              <div className="hero-prop-icon">
                <Compass size={18} />
              </div>
              <div className="hero-prop-text">
                <strong>Creative Design</strong>
                <span>Tailored to You</span>
              </div>
            </div>
            <div className="hero-prop-divider" />
            <div className="hero-prop-item">
              <div className="hero-prop-icon">
                <ShieldCheck size={18} />
              </div>
              <div className="hero-prop-text">
                <strong>Quality Construction</strong>
                <span>Built to Last</span>
              </div>
            </div>
            <div className="hero-prop-divider" />
            <div className="hero-prop-item">
              <div className="hero-prop-icon">
                <Users size={18} />
              </div>
              <div className="hero-prop-text">
                <strong>End-to-End Support</strong>
                <span>From Concept to Completion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
