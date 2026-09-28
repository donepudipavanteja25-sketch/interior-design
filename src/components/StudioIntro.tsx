import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/studio.css';

export const StudioIntro: React.FC = () => {
  return (
    <section className="studio-section section-padding" id="about">
      <div className="container">
        <div className="studio-grid">
          {/* Left Text Block */}
          <div className="studio-text-col reveal reveal-left">
            <span className="section-tag">ABOUT VRIKSHA</span>

            <h2 className="studio-heading">
              We build spaces that work beautifully—for people and the planet.
            </h2>

            <p className="studio-paragraph">
              At Vriksha, we create spaces that inspire, balancing aesthetics, functionality and long-lasting quality. From homes to offices, our team brings your vision to life with thoughtful design, expert execution and more responsible construction choices.
            </p>

            {/* Statistics */}
            <div className="studio-stats-row">
              <div className="studio-stat-item">
                <div className="studio-stat-num">50+</div>
                <div className="studio-stat-lbl">Projects Completed</div>
              </div>
              <div className="studio-stat-divider" />
              <div className="studio-stat-item">
                <div className="studio-stat-num">100+</div>
                <div className="studio-stat-lbl">Happy Clients</div>
              </div>
              <div className="studio-stat-divider" />
              <div className="studio-stat-item">
                <div className="studio-stat-num">5+</div>
                <div className="studio-stat-lbl">Years of Experience</div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/about" className="btn-primary" id="know-more-about-us-btn">
                Know More About Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Visual with Blue Information Block */}
          <div className="studio-image-col reveal reveal-right delay-2">
            <div className="studio-image-frame">
              <img
                src="/images/about_architecture_studio.jpg"
                alt="Vriksha architecture and engineering studio team at work"
                className="studio-image"
                loading="lazy"
              />

              {/* Blue Information Block over lower part of image */}
              <div className="studio-info-block">
                <p className="studio-info-text">
                  “One accountable team from first sketch to final handover.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
