import React from 'react';
import '../styles/visual-break.css';

export const VisualBreak: React.FC = () => {
  return (
    <section className="visual-break-section" aria-label="Architectural Atmosphere">
      <div className="visual-break-media">
        <img
          src="/images/visual-break.jpg"
          alt="Architectural pavilion living space with limestone arches and linen drapery"
          className="visual-break-img"
          loading="lazy"
        />
        <div className="visual-break-overlay" />
      </div>

      <div className="visual-break-content reveal reveal-scale duration-slow">
        <span className="visual-break-label">ATMOSPHERE & LIGHT</span>
        <blockquote className="visual-break-quote">
          “Architecture is the learned game, correct and magnificent, of forms assembled in the light.”
        </blockquote>
        <div className="visual-break-author">— Le Corbusier</div>
      </div>
    </section>
  );
};
