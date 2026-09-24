import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { processSteps } from '../data/studio';
import '../styles/process.css';

export const Process: React.FC = () => {
  return (
    <section className="process-section section-padding" id="process">
      <div className="container">
        <div className="process-header reveal reveal-up">
          <span className="section-tag">OUR METHODOLOGY</span>
          <h2 className="section-title">
            From raw inquiry to turnkey sanctuary.
          </h2>
          <p className="section-lead" style={{ marginTop: '1rem' }}>
            A disciplined four-phase progression that marries architectural rigor with intimate listening and artisanal execution.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, idx) => (
            <div key={step.number} className={`process-card reveal reveal-up delay-${idx + 1}`}>
              <div className="process-card-top">
                <span className="process-step-num">{step.number}</span>
                <div className="process-phase-tag">{step.tag}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-summary">{step.summary}</p>
              </div>

              <div className="process-card-bottom">
                <div className="process-timeline-badge">Timeline: {step.timeline}</div>
                <ul className="process-detail-list">
                  {step.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="process-detail-item">
                      <span className="process-bullet" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link to="/process" className="btn-secondary">
            Full Methodology & Timeline Guide <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
