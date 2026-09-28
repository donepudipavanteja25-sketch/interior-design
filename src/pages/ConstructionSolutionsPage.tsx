import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, SunMedium, Droplets, Recycle, Wind, Info } from 'lucide-react';
import '../styles/construction-solutions.css';

interface ConstructionSolutionsPageProps {
  onOpenConsultation?: () => void;
}

export const ConstructionSolutionsPage: React.FC<ConstructionSolutionsPageProps> = ({
  onOpenConsultation
}) => {
  const baseBuildCards = [
    {
      title: 'Passive Planning',
      desc: 'Orientation, shading and daylight planning that reduce heat gain and dependence on artificial lighting.',
      icon: <SunMedium size={24} />
    },
    {
      title: 'Water Management',
      desc: 'Rainwater harvesting, low-flow fixtures and practical provisions for greywater reuse where the project allows.',
      icon: <Droplets size={24} />
    },
    {
      title: 'Lower Material Waste',
      desc: 'Accurate quantity planning, reusable shuttering and lower-waste procurement throughout the construction cycle.',
      icon: <Recycle size={24} />
    },
    {
      title: 'Healthier Interiors',
      desc: 'Cross ventilation, low-VOC finishes and material choices that support comfortable indoor environments.',
      icon: <Wind size={24} />
    }
  ];

  const shutteringOptions = [
    {
      id: 'ms-box',
      name: 'MS Box Shuttering',
      status: 'Vriksha Service',
      statusType: 'vriksha',
      image: '/images/shuttering_ms_box.jpg',
      description:
        'Reusable mild-steel box formwork for accurate and repeatable slab, beam and column execution. Its strength and dimensional consistency make it a dependable option for quality-focused construction.',
      benefits: [
        'High structural strength under concrete hydrostatic loads',
        'Consistent dimensions with minimal tolerance deviation',
        'Reusable across projects without warping or rotting',
        'Reliable for repeated structural column and beam casting'
      ]
    },
    {
      id: 'pvc',
      name: 'PVC Shuttering',
      status: 'Vriksha Service',
      statusType: 'vriksha',
      image: '/images/shuttering_pvc.jpg',
      description:
        'A lightweight, moisture-resistant shuttering system that is easy to handle and supports smooth concrete finishes with efficient site execution.',
      benefits: [
        'Water and moisture resistant — no expansion or shrinkage',
        'Lightweight handling speeds up installation and de-shuttering',
        'Smooth, mirror-like concrete surfaces requiring minimal plaster',
        'Reusable and easy to maintain across multiple construction phases'
      ]
    },
    {
      id: 'mivan',
      name: 'Mivan Shuttering',
      status: 'Market Comparison',
      statusType: 'market',
      image: '/images/shuttering_mivan.jpg',
      description:
        'An aluminium formwork system commonly used for high-volume developments with repetitive layouts. It supports rapid monolithic casting but is most effective where scale justifies the setup.',
      benefits: [
        'Fast repetitive construction cycles for high-rise towers',
        'Monolithic wall-and-slab casting executed simultaneously',
        'Consistent large-scale output across hundreds of identical units',
        'Best suited to repetitive mass housing layouts'
      ]
    }
  ];

  return (
    <div className="solutions-page">
      {/* 1. Hero Section */}
      <section className="solutions-hero-section">
        <div className="solutions-hero-bg">
          <img
            src="/images/materials_details.jpg"
            alt="Vriksha Sustainable Construction Solutions"
            className="solutions-hero-img"
          />
          <div className="solutions-hero-scrim" />
        </div>

        <div className="container solutions-hero-content">
          <span className="solutions-eyebrow">CONSTRUCTION SOLUTIONS</span>
          <h1 className="solutions-hero-title">
            Build responsibly. Choose the right system.
          </h1>
          <p className="solutions-hero-desc">
            Understand how sustainable base-build decisions and the right shuttering system can improve quality, efficiency and long-term project performance.
          </p>

          <div style={{ marginTop: '2rem' }}>
            {onOpenConsultation ? (
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn-primary"
              >
                Get a Quote <ArrowRight size={15} />
              </button>
            ) : (
              <Link to="/contact" className="btn-primary">
                Discuss Your Project <ArrowRight size={15} />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 2. Sustainable Base Build Section */}
      <section className="section-padding sustainable-base-section">
        <div className="container">
          <div className="sustainable-base-header reveal reveal-up">
            <span className="section-tag">SUSTAINABLE BASE BUILD</span>
            <h2 className="section-title">
              Green construction begins before the finishes
            </h2>
            <p className="section-lead" style={{ maxWidth: 850, margin: '1rem auto 0' }}>
              The most meaningful environmental improvements are planned into the structure, services and material strategy early. Vriksha focuses on practical measures that improve comfort, reduce resource demand and remain realistic for the project budget.
            </p>
          </div>

          <div className="sustainable-cards-grid">
            {baseBuildCards.map((card, idx) => (
              <div
                key={card.title}
                className={`sustainable-feature-card reveal reveal-up delay-${idx + 1}`}
              >
                <div className="sustainable-icon-wrap">{card.icon}</div>
                <h3 className="sustainable-card-title">{card.title}</h3>
                <p className="sustainable-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Shuttering Comparison (Alternating Rows) */}
      <section className="section-padding shuttering-comparison-section">
        <div className="container">
          <div className="shuttering-header reveal reveal-up">
            <span className="section-tag">SHUTTERING & FORMWORK</span>
            <h2 className="section-title">Compare the options before you build</h2>
            <p className="section-lead" style={{ maxWidth: 750, margin: '1rem auto 0' }}>
              Vriksha delivers MS Box and PVC shuttering. Mivan is included so you can understand how the major market systems differ.
            </p>
          </div>

          <div className="shuttering-rows-list">
            {shutteringOptions.map((opt, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={opt.id}
                  className={`shuttering-row reveal reveal-up delay-${idx + 1} ${
                    isEven ? 'row-reversed' : ''
                  }`}
                >
                  <div className="shuttering-row-image-col">
                    <div className="shuttering-image-frame">
                      <img
                        src={opt.image}
                        alt={`${opt.name} formwork execution`}
                        className="shuttering-row-img"
                        loading="lazy"
                      />
                      <span className={`shuttering-status-tag ${opt.statusType}`}>
                        {opt.statusType === 'vriksha' ? (
                          <Check size={14} style={{ display: 'inline', marginRight: 5 }} />
                        ) : (
                          <Info size={14} style={{ display: 'inline', marginRight: 5 }} />
                        )}
                        {opt.status}
                      </span>
                    </div>
                  </div>

                  <div className="shuttering-row-content-col">
                    <h3 className="shuttering-row-title">{opt.name}</h3>
                    <p className="shuttering-row-desc">{opt.description}</p>

                    <h4 className="shuttering-benefits-label">Key Engineering Benefits</h4>
                    <ul className="shuttering-benefits-list">
                      {opt.benefits.map((b, i) => (
                        <li key={i}>
                          <span className="shuttering-bullet" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {opt.statusType === 'vriksha' && (
                      <div className="shuttering-action-box">
                        <Link to="/contact" className="btn-secondary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.75rem' }}>
                          Inquire for this System <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <section className="section-padding solutions-final-cta-section">
        <div className="container text-center">
          <div className="solutions-final-cta-box reveal reveal-up">
            <h2 className="solutions-cta-title">
              Let’s choose the right construction approach for your project.
            </h2>
            <p className="solutions-cta-desc">
              Every site and architectural vision requires a tailored formwork and sustainable base-build strategy. Connect with our engineering directors in Hyderabad.
            </p>

            <div className="solutions-cta-actions">
              <Link to="/contact" className="btn-primary" id="discuss-project-cta-btn">
                Discuss Your Project <ArrowRight size={15} />
              </Link>
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
