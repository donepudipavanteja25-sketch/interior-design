import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, ArrowRight } from 'lucide-react';
import '../styles/construction-systems.css';

export const ConstructionSystems: React.FC = () => {
  const systems = [
    {
      id: 'ms-box',
      title: 'MS Box Shuttering',
      badge: 'We Deliver',
      badgeType: 'deliver',
      image: '/images/shuttering_ms_box.jpg',
      description:
        'Reusable mild-steel box formwork for durable, accurate and repeatable slab, beam and column work.',
      highlights: [
        'High structural strength',
        'Consistent dimensions',
        'Reusable across projects'
      ]
    },
    {
      id: 'pvc',
      title: 'PVC Shuttering',
      badge: 'We Deliver',
      badgeType: 'deliver',
      image: '/images/shuttering_pvc.jpg',
      description:
        'A lightweight, moisture-resistant shuttering option that enables quick handling and clean finishes.',
      highlights: [
        'Water resistant',
        'Lightweight handling',
        'Smooth concrete finish'
      ]
    },
    {
      id: 'mivan',
      title: 'Mivan Shuttering',
      badge: 'Market Option',
      badgeType: 'market',
      image: '/images/shuttering_mivan.jpg',
      description:
        'An aluminium formwork system widely used for high-volume, repetitive layouts and faster construction cycles.',
      highlights: [
        'Fast repetitive cycles',
        'Monolithic casting',
        'Best suited to scale'
      ]
    }
  ];

  return (
    <section className="construction-systems-section section-padding" id="systems">
      <div className="container">
        <div className="construction-systems-header reveal reveal-up">
          <span className="section-tag">CONSTRUCTION SYSTEMS</span>
          <h2 className="section-title">
            Know the shuttering options in today’s market
          </h2>
          <p className="section-lead">
            We specialize in MS Box and PVC shuttering. We also explain where Mivan sits in the market, so you can make an informed choice for your project.
          </p>
        </div>

        <div className="systems-grid">
          {systems.map((system, idx) => (
            <div
              key={system.id}
              className={`system-card reveal reveal-up delay-${idx + 1} ${
                system.badgeType === 'deliver' ? 'system-deliver' : 'system-market'
              }`}
            >
              <div className="system-img-wrap">
                <img
                  src={system.image}
                  alt={system.title}
                  className="system-img"
                  loading="lazy"
                />
                <span className={`system-badge ${system.badgeType}`}>
                  {system.badgeType === 'deliver' ? (
                    <Check size={13} style={{ display: 'inline', marginRight: 4 }} />
                  ) : (
                    <Info size={13} style={{ display: 'inline', marginRight: 4 }} />
                  )}
                  {system.badge}
                </span>
              </div>

              <div className="system-content">
                <h3 className="system-title">{system.title}</h3>
                <p className="system-desc">{system.description}</p>

                <div className="system-highlights-title">Key Highlights</div>
                <ul className="system-highlights-list">
                  {system.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="system-bullet" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="systems-note-banner reveal reveal-up delay-2">
          <p>
            <strong>Note for Builders & Homeowners:</strong> Vriksha provides engineered MS Box and PVC shuttering execution for our turnkey residential and commercial projects. Mivan shuttering is detailed above for market clarity and customer education.
          </p>
          <Link to="/construction-solutions" className="systems-banner-btn">
            Read Shuttering Guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
