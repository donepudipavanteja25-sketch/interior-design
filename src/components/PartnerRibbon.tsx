import React from 'react';
import '../styles/partner-ribbon.css';

interface BrandItem {
  name: string;
  category: string;
  logo: string;
}

const brands: BrandItem[] = [
  { name: 'UltraTech Cement', category: 'Cement', logo: '/images/brands/ultratech.svg' },
  { name: 'Birla Cement', category: 'Cement', logo: '/images/brands/birla-cement.svg' },
  { name: 'Maha Cement', category: 'Cement', logo: '/images/brands/maha-cement.svg' },
  { name: 'Jindal Steel', category: 'Steel', logo: '/images/brands/jindal-steel.svg' },
  { name: 'Shree Steel', category: 'Steel', logo: '/images/brands/shree-steel.svg' },
  { name: 'CenturyPly', category: 'Plywood & Boards', logo: '/images/brands/centuryply.svg' },
  { name: 'Greenply', category: 'Plywood & Boards', logo: '/images/brands/greenply.svg' },
  { name: 'Austin Plywood', category: 'Plywood & Boards', logo: '/images/brands/austin-plywood.svg' },
  { name: 'Action TESA', category: 'Boards', logo: '/images/brands/action-tesa.svg' },
  { name: 'Asian Paints', category: 'Paints', logo: '/images/brands/asian-paints.svg' },
  { name: 'Birla Opus', category: 'Paints', logo: '/images/brands/birla-opus.svg' },
  { name: 'Havells', category: 'Electrical & Lighting', logo: '/images/brands/havells.svg' },
  { name: 'Philips', category: 'Lighting', logo: '/images/brands/philips.svg' },
  { name: 'Wipro Lighting', category: 'Lighting', logo: '/images/brands/wipro-lighting.svg' },
  { name: 'Filux', category: 'Lighting', logo: '/images/brands/filux.svg' },
  { name: 'Finolex', category: 'Wires & Cables', logo: '/images/brands/finolex.svg' },
  { name: 'RR Kabel', category: 'Wires & Electrical', logo: '/images/brands/rr-kabel.svg' }
];

export const PartnerRibbon: React.FC = () => {
  // Duplicate array internally to create a seamless infinite loop
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="brand-carousel-section" aria-label="Brand Partners">
      <div className="container">
        <div className="brand-carousel-header reveal reveal-up">
          <span className="section-tag">MATERIALS & SOURCING</span>
          <h2 className="section-title">We work across all major brands</h2>
          <p className="section-lead" style={{ maxWidth: 650, margin: '0 auto' }}>
            Brand selection is based on your specification, budget, availability and approved quality requirements—not a single-brand tie-up.
          </p>
        </div>
      </div>

      <div className="brand-marquee-container">
        <div className="brand-marquee-track">
          {marqueeItems.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="brand-card-tile">
              <div className="brand-card-img-wrap">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand-card-img"
                  loading="lazy"
                />
              </div>
              <span className="brand-card-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
