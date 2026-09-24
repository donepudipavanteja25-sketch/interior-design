import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
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
            Architecture & Interior Design Studio
          </div>

          <h1 className="hero-heading reveal reveal-up delay-1">
            <span>INTERIORS</span>
            <span>THAT FEEL</span>
            <span>LIKE <em>HOME.</em></span>
          </h1>

          <div className="hero-bottom-grid reveal reveal-up delay-2">
            <div>
              <p className="hero-description">
                Thoughtful spaces, natural materials, and timeless details designed around the way you live.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="hero-btn-primary" id="hero-explore-work-btn">
                  Explore Our Work <ArrowRight size={15} />
                </a>
                <button
                  onClick={onOpenConsultation}
                  className="hero-btn-secondary"
                  id="hero-start-project-btn"
                >
                  Start a Project
                </button>
              </div>
            </div>

            <div style={{ justifySelf: 'flex-start' }}>
              <a href="#studio" className="hero-scroll-cue" aria-label="Scroll to explore studio">
                <span>SCROLL TO EXPLORE</span>
                <span className="hero-scroll-arrow">
                  <ArrowDown size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
