import React from 'react';
import { SunMedium, Droplets, Recycle, Wind } from 'lucide-react';
import '../styles/green-construction.css';

export const GreenConstruction: React.FC = () => {
  const practices = [
    {
      title: 'Passive Design',
      desc: 'Orientation, shading and daylight planning that reduce heat gain and dependence on artificial lighting.',
      icon: <SunMedium size={22} />
    },
    {
      title: 'Water Responsibility',
      desc: 'Rainwater harvesting, low-flow fixtures and practical provisions for greywater reuse where the project allows.',
      icon: <Droplets size={22} />
    },
    {
      title: 'Material Efficiency',
      desc: 'Accurate quantity planning, reusable shuttering and lower-waste procurement throughout the construction cycle.',
      icon: <Recycle size={22} />
    },
    {
      title: 'Healthier Spaces',
      desc: 'Cross ventilation, low-VOC finishes and material choices that support comfortable indoor environments.',
      icon: <Wind size={22} />
    }
  ];

  return (
    <section className="green-construction-section section-padding" id="sustainability">
      <div className="container">
        <div className="green-construction-grid">
          {/* Left Column: Heading, Body and 4 Practices */}
          <div className="green-content-col reveal reveal-left">
            <span className="green-eyebrow">SUSTAINABLE BASE BUILD</span>
            <h2 className="green-heading">
              Sustainability starts with the base build
            </h2>
            <p className="green-body">
              The greatest environmental gains are designed into the structure early. We help clients prioritize measures that improve comfort, reduce resource demand and add lasting value without losing sight of buildability or budget.
            </p>

            <div className="green-practices-grid">
              {practices.map((item, idx) => (
                <div key={idx} className="green-practice-card">
                  <div className="green-practice-icon">{item.icon}</div>
                  <div>
                    <h3 className="green-practice-title">{item.title}</h3>
                    <p className="green-practice-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Image and Small Orange Feature Block */}
          <div className="green-visual-col reveal reveal-right delay-2">
            <div className="green-image-frame">
              <img
                src="/images/materials_details.jpg"
                alt="Sustainable architecture and energy-efficient building envelope by Vriksha"
                className="green-image"
                loading="lazy"
              />

              {/* Small Orange Feature Block */}
              <div className="green-orange-block">
                <p className="green-orange-text">
                  “Smarter choices at every stage of the build.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
