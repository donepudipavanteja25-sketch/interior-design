import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/pillars-showcase.css';

interface PillarsShowcaseProps {
  onSelectServiceForInquiry?: (service: string) => void;
}

export const PillarsShowcase: React.FC<PillarsShowcaseProps> = () => {
  const pillars = [
    {
      id: 'interior-styling',
      title: 'Interior Design & Styling',
      description: 'Elegant, functional interiors tailored to your lifestyle and personality.',
      image: '/images/stone-sage.jpg',
      alt: 'Elegant interior design and styling in living room',
      btnText: 'Explore Interiors',
      link: '/services'
    },
    {
      id: 'construction-build',
      title: 'Construction & Build Solutions',
      description: 'High-quality construction with modern techniques and trusted expertise.',
      image: '/images/willow.jpg',
      alt: 'Luxury architectural modern exterior construction',
      btnText: 'Our Construction Services',
      link: '/services'
    },
    {
      id: 'renovation-remodeling',
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space into something extraordinary.',
      image: '/images/casa-terra.jpg',
      alt: 'Sophisticated marble and stone kitchen living renovation',
      btnText: 'View Renovation Work',
      link: '/services'
    }
  ];

  return (
    <section className="pillars-showcase-section" aria-label="Core Services">
      <div className="container">
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <article
              key={pillar.id}
              className={`pillar-showcase-card reveal reveal-up delay-${idx + 1}`}
            >
              <div className="pillar-card-image-box">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  className="pillar-card-img"
                  loading="lazy"
                />
              </div>

              <div className="pillar-card-body">
                <h3 className="pillar-card-title">{pillar.title}</h3>
                <p className="pillar-card-desc">{pillar.description}</p>

                <Link
                  to={pillar.link}
                  className="pillar-card-btn"
                  id={`pillar-btn-${pillar.id}`}
                >
                  {pillar.btnText} <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
