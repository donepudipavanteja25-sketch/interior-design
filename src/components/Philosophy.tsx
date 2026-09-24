import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { philosophyPillars, materialsData, type MaterialItem } from '../data/philosophy';
import '../styles/philosophy.css';

export const Philosophy: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<MaterialItem>(materialsData[0]);

  return (
    <section className="philosophy-section section-padding" id="philosophy">
      <div className="container">
        {/* Section Header */}
        <div className="philosophy-header reveal reveal-up">
          <span className="section-tag">OUR PHILOSOPHY</span>
          <h2 className="section-title">
            The quiet luxury of enduring materials and intentional space.
          </h2>
        </div>

        {/* 4 Pillars of Design */}
        <div className="philosophy-pillars-grid">
          {philosophyPillars.map((pillar, idx) => (
            <div key={pillar.number} className={`pillar-card reveal reveal-up delay-${idx + 1}`}>
              <span className="pillar-number">{pillar.number}</span>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-lead">{pillar.lead}</p>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Tactile Materiality Explorer */}
        <div className="materials-showcase-box reveal reveal-up delay-1">
          <div className="materials-section-tag">TACTILE ARCHIVE</div>
          <h3 className="materials-main-title">
            Explore our curated material vocabulary.
          </h3>

          {/* Selector Tabs */}
          <div className="material-selector-tabs" role="tablist" aria-label="Tactile Materials">
            {materialsData.map((mat) => (
              <button
                key={mat.id}
                role="tab"
                aria-selected={activeMaterial.id === mat.id}
                className={`material-tab-btn ${activeMaterial.id === mat.id ? 'active' : ''}`}
                onClick={() => setActiveMaterial(mat)}
              >
                {mat.name}
              </button>
            ))}
          </div>

          {/* Active Material Detail Panel */}
          <div className="material-detail-panel">
            <div className="material-preview-frame">
              <img
                src={activeMaterial.image}
                alt={`${activeMaterial.name} texture detail`}
                className="material-preview-img"
                loading="lazy"
              />
              <div className="material-preview-origin">
                Origin: {activeMaterial.origin}
              </div>
            </div>

            <div className="material-content-col">
              <span className="material-category-tag">{activeMaterial.category}</span>
              <h4 className="material-name">{activeMaterial.name}</h4>
              <div className="material-sensory">“{activeMaterial.sensoryQuality}”</div>
              <p className="material-desc">{activeMaterial.description}</p>

              <div className="material-specs-grid">
                <div>
                  <div className="spec-title">Architectural Application</div>
                  <div className="spec-text">{activeMaterial.application}</div>
                </div>
                <div>
                  <div className="spec-title">Aging & Patina Narrative</div>
                  <div className="spec-text">{activeMaterial.patinaNote}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Link to Philosophy Page */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link to="/philosophy" className="btn-secondary">
            Explore Full Materiality Lab & Manifesto <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
