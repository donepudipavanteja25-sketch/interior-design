import React from 'react';
import { ChevronLeft, ChevronRight, Triangle, Square, Layers, CircleDot, Grid, Hexagon } from 'lucide-react';
import '../styles/partner-ribbon.css';

export const PartnerRibbon: React.FC = () => {
  const partners = [
    { name: 'ARKSTONE', icon: <Triangle size={15} /> },
    { name: 'LUMINA', icon: <Square size={15} /> },
    { name: 'VERTEX', icon: <Layers size={15} /> },
    { name: 'CRESCENT', icon: <CircleDot size={15} /> },
    { name: 'HORIZON', icon: <Grid size={15} /> },
    { name: 'PINNACLE', icon: <Hexagon size={15} /> }
  ];

  return (
    <section className="partner-ribbon-section" aria-label="Architectural Partners">
      <div className="container partner-ribbon-container">
        <button className="partner-arrow-nav" aria-label="Previous partners">
          <ChevronLeft size={16} />
        </button>

        <div className="partner-logos-track">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo-item">
              {partner.icon}
              <span>{partner.name}</span>
            </div>
          ))}
        </div>

        <button className="partner-arrow-nav" aria-label="Next partners">
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};
