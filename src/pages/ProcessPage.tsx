import React from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Process } from '../components/Process';
import '../styles/pages.css';

interface ProcessPageProps {
  onOpenConsultation: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenConsultation }) => {
  const detailedStages = [
    {
      num: '01',
      title: 'Consultation & Site Feasibility',
      duration: '1–2 Weeks',
      lead: 'Understand your needs, lifestyle parameters, and plot characteristics.',
      items: [
        'Detailed client brief and spatial wishlist formulation',
        'Topographical survey & on-site environmental assessment',
        'Soil testing & structural foundation feasibility calculations',
        'Preliminary budget allocation and milestone schedule framework'
      ]
    },
    {
      num: '02',
      title: 'Design, Engineering & Approvals',
      duration: '3–6 Weeks',
      lead: 'Create tailored designs and detailed plans balancing beauty with structural integrity.',
      items: [
        'Schematic floor plans and bioclimatic daylighting orientation',
        'High-fidelity 3D photorealistic architectural visualizations',
        'MEP planning (Mechanical, Electrical, Plumbing) & structural engineering calculations',
        'Municipal building approvals and statutory compliance dossiers'
      ]
    },
    {
      num: '03',
      title: 'Build, Shuttering & Execution',
      duration: '6–14 Months',
      lead: 'Bring your vision to life with expert execution and rigorous quality controls.',
      items: [
        'Precision MS Box and PVC shuttering execution for structural slabs & columns',
        'Rigorous laboratory quality testing for cement, TMT steel, and concrete cubes',
        'Daily engineering site supervision and strict safety management',
        'Transparent milestone updates with weekly photo and video progress reports'
      ]
    },
    {
      num: '04',
      title: 'Handover & Generational Assurance',
      duration: '2–3 Weeks',
      lead: 'Deliver a finished sanctuary you will love for years with complete documentation.',
      items: [
        'Comprehensive multi-point quality audit and snag rectification',
        'Deep architectural cleaning, surface sealing, and polish',
        'Complete as-built drawings, operations manuals, and structural warranty dossiers',
        'Seamless turnkey possession and dedicated post-handover warranty support'
      ]
    }
  ];

  const faqs = [
    {
      q: 'At what stage should we engage Vriksha Constructions?',
      a: 'Ideally before breaking ground or finalizing architectural plans. Engaging us during early land acquisition or before foundation design allows us to conduct soil testing, optimize solar orientation, and recommend the best shuttering system.'
    },
    {
      q: 'Do you provide both construction and interior design?',
      a: 'Yes. Vriksha provides turnkey delivery from foundation civil work to bespoke cabinetry, lighting design, and soft furnishings under one accountable team.'
    },
    {
      q: 'Why does Vriksha prioritize MS Box and PVC shuttering?',
      a: 'Traditional wooden formwork leads to inconsistent dimensions, water seepage, and deforestation. Our engineered MS Box and PVC formwork systems deliver millimeter-precise dimensions, mirror-smooth concrete surfaces, and reusable environmental efficiency.'
    },
    {
      q: 'How are project timelines and budgets managed?',
      a: 'We work on transparent, milestone-based schedules with an itemized Bill of Quantities (BoQ). You receive weekly digital progress reports and direct access to your project director in Hyderabad.'
    }
  ];

  return (
    <div className="subpage process-page-container">
      {/* Page Header */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content reveal reveal-up">
            <span className="section-tag">OUR METHODOLOGY</span>
            <h1 className="page-hero-title">A Clear Path from Idea to Handover</h1>
            <p className="page-hero-lead">
              A transparent, disciplined four-phase progression that marries architectural rigor with careful engineering supervision and generational quality.
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Summary Component */}
      <Process />

      {/* Detailed Technical Stages */}
      <section className="section-padding" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-center reveal reveal-up" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">DEEP DIVE</span>
            <h2 className="section-title">Milestone Breakdown & Deliverables</h2>
          </div>

          <div className="process-deep-grid">
            {detailedStages.map((stage, idx) => (
              <div key={stage.num} className={`process-deep-card reveal reveal-up delay-${idx + 1}`}>
                <div className="process-deep-top">
                  <span className="process-deep-num">{stage.num}</span>
                  <span className="process-deep-duration">
                    <Clock size={13} style={{ display: 'inline', marginRight: 4 }} />
                    {stage.duration}
                  </span>
                </div>

                <h3 className="process-deep-title">{stage.title}</h3>
                <p className="process-deep-lead">{stage.lead}</p>

                <ul className="process-deep-list">
                  {stage.items.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="process-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div className="section-header-center reveal reveal-up" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Building with Vriksha in Hyderabad</h2>
          </div>

          <div className="faq-grid" style={{ maxWidth: 840, margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item reveal reveal-up">
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote CTA */}
      <section className="section-padding final-page-cta">
        <div className="container text-center">
          <div className="reveal reveal-up" style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              Ready to begin phase one?
            </h2>
            <p style={{ color: '#DCE4E9', fontSize: '1.05rem', margin: '1rem 0 2rem' }}>
              Schedule an introductory site consultation with our engineering team in Jubilee Hills.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn-primary"
              >
                Get a Quote <ArrowRight size={15} />
              </button>
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
