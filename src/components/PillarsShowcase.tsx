import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/pillars-showcase.css';

interface PillarsShowcaseProps {
  onSelectServiceForInquiry?: (service: string) => void;
}

export const PillarsShowcase: React.FC<PillarsShowcaseProps> = () => {
  const cards = [
    {
      number: '01',
      title: 'Sustainable Construction',
      description:
        'Climate-responsive planning, efficient material use and resource-conscious building for better long-term performance.',
      image: '/images/service_residential.jpg',
      alt: 'Sustainable residential construction by Vriksha'
    },
    {
      number: '02',
      title: 'MS Box Shuttering',
      description:
        'A strong, reusable formwork system that supports consistent dimensions, cleaner finishes and reliable execution.',
      image: '/images/shuttering_ms_box.jpg',
      alt: 'Engineered MS Box formwork system on construction site'
    },
    {
      number: '03',
      title: 'PVC Shuttering',
      description:
        'Lightweight, water-resistant and reusable formwork suited to efficient construction and smooth concrete surfaces.',
      image: '/images/shuttering_pvc.jpg',
      alt: 'High-density PVC shuttering boards creating smooth concrete finish'
    }
  ];

  return (
    <section className="pillars-showcase-section" aria-label="Core Construction Solutions">
      <div className="container">
        <div className="pillars-grid">
          {cards.map((card, idx) => (
            <article
              key={card.number}
              className={`pillar-feature-card reveal reveal-up delay-${idx + 1}`}
            >
              <div className="pillar-feature-img-box">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="pillar-feature-img"
                  loading="lazy"
                />
                {/* Dark neutral overlay only where needed for text readability */}
                <div className="pillar-feature-overlay" />
              </div>

              <div className="pillar-feature-content">
                <span className="pillar-card-number">{card.number}</span>
                <h3 className="pillar-card-title">{card.title}</h3>
                <p className="pillar-card-desc">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Exactly ONE shared button below the entire card grid */}
        <div className="pillars-shared-btn-wrapper">
          <Link
            to="/construction-solutions"
            className="pillars-shared-cta-btn"
            id="explore-construction-solutions-btn"
          >
            Explore Construction Solutions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
