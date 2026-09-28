import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Compass, ShieldCheck, Users } from 'lucide-react';
import '../styles/hero.css';

interface HeroProps {
  onOpenConsultation: () => void;
}

const slides = [
  {
    id: 'slide-1',
    eyebrow: 'Sustainable construction · thoughtful interiors',
    heading: 'Building Better. Living Greener.',
    description:
      'End-to-end construction and interior solutions shaped around your vision, delivered with durable materials, efficient planning and responsible building practices.',
    image: '/images/hero_hillside_infinity_villa.jpg',
    alt: 'Vriksha Sustainable Architectural Villa in Hyderabad with natural infinity pool and concrete canopy'
  },
  {
    id: 'slide-2',
    eyebrow: 'Homes · workplaces · turnkey delivery',
    heading: 'Spaces Built Around Your Life.',
    description:
      'From structure to final finish, Vriksha brings design, engineering and execution together under one accountable team.',
    image: '/images/hero_modern_villa.jpg',
    alt: 'Modern residential villa architecture with cantilevered concrete and double-height glazing'
  },
  {
    id: 'slide-3',
    eyebrow: 'Hyderabad · Telangana',
    heading: 'Strong Foundations. Lasting Value.',
    description:
      'We create high-performing residential and commercial spaces with clear communication, careful supervision and uncompromising quality.',
    image: '/images/hero_commercial_foundation.jpg',
    alt: 'Commercial structure engineered with precision formwork and high-strength concrete foundation'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="hero-section"
      id="hero"
      aria-label="Vriksha Architectural Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Architectural Visuals - Original Natural Colors */}
      <div className="hero-background-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide-bg ${index === currentSlide ? 'active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="hero-background-image"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Subtle, neutral contrast layer without color tint or gradient fade */}
        <div className="hero-subtle-scrim" />
      </div>

      <div className="container hero-content">
        <div className="hero-inner">
          {/* Eyebrow Label */}
          <div className="hero-tagline-label">
            {slides[currentSlide].eyebrow}
          </div>

          {/* Main Heading with subtle text shadow */}
          <h1 className="hero-heading">
            {slides[currentSlide].heading}
          </h1>

          <div className="hero-bottom-grid">
            <div>
              <p className="hero-description">
                {slides[currentSlide].description}
              </p>

              {/* Action Buttons: Clean buttons that do not inherit text shadow */}
              <div className="hero-actions">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hero-btn-primary"
                  id="hero-get-quote-btn"
                  aria-label="Get a Quote"
                >
                  Get a Quote <ArrowRight size={16} />
                </button>

                <Link
                  to="/projects"
                  className="hero-btn-secondary"
                  id="hero-explore-projects-btn"
                >
                  Explore Projects
                </Link>
              </div>
            </div>

            {/* Slider Controls: Arrows & Indicators */}
            <div className="hero-controls-box">
              <div className="hero-nav-arrows">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="hero-arrow-btn"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="hero-arrow-btn"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="hero-dots-row" role="tablist" aria-label="Hero slides">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={idx === currentSlide}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrentSlide(idx)}
                    className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Key Value Props Bar */}
          <div className="hero-value-props">
            <div className="hero-prop-item">
              <div className="hero-prop-icon">
                <Compass size={20} />
              </div>
              <div className="hero-prop-text">
                <strong>Creative Design</strong>
                <span>Tailored to Your Lifestyle</span>
              </div>
            </div>

            <div className="hero-prop-divider" />

            <div className="hero-prop-item">
              <div className="hero-prop-icon">
                <ShieldCheck size={20} />
              </div>
              <div className="hero-prop-text">
                <strong>Quality Construction</strong>
                <span>MS Box & PVC Precision</span>
              </div>
            </div>

            <div className="hero-prop-divider" />

            <div className="hero-prop-item">
              <div className="hero-prop-icon">
                <Users size={20} />
              </div>
              <div className="hero-prop-text">
                <strong>Accountable Team</strong>
                <span>Concept to Final Handover</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
