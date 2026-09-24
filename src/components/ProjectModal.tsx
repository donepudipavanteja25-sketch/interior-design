import React, { useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import type { Project } from '../data/projects';
import '../styles/modal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProjectWithRef: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onStartProjectWithRef
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-heading"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-trigger"
          onClick={onClose}
          aria-label="Close project case study"
        >
          <X size={20} />
        </button>

        <div className="project-modal-hero">
          <img
            src={project.image}
            alt={project.title}
          />
        </div>

        <div className="project-modal-body">
          {/* Metadata Grid */}
          <div className="project-modal-meta-grid">
            <div className="meta-field">
              <div className="meta-field-label">Location</div>
              <div className="meta-field-value">{project.location}</div>
            </div>
            <div className="meta-field">
              <div className="meta-field-label">Discipline</div>
              <div className="meta-field-value">{project.category}</div>
            </div>
            <div className="meta-field">
              <div className="meta-field-label">Built Area</div>
              <div className="meta-field-value">{project.area}</div>
            </div>
            <div className="meta-field">
              <div className="meta-field-label">Completion</div>
              <div className="meta-field-value">{project.year}</div>
            </div>
          </div>

          <h2 id="project-modal-heading" className="project-modal-title">
            {project.title}
          </h2>
          <p className="project-modal-lead">{project.subtitle}</p>

          <div className="project-modal-two-col">
            <div>
              <h3 className="project-modal-subheading">Design Narrative</h3>
              <p style={{ marginBottom: '1.25rem' }}>{project.description}</p>
              <p>{project.architecturalPhilosophy}</p>

              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  Key Spatial Innovations
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--earth)' }}>
                      <Check size={16} color="var(--sage)" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="project-modal-subheading">Materiality Palette</h3>
              <div className="material-chip-list">
                {project.materials.map((mat, idx) => (
                  <div key={idx} className="material-chip-item">
                    <span className="material-chip-dot" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>

              {/* Client Story Quote */}
              <div className="client-quote-box">
                <div className="client-quote-text">“{project.clientStory.quote}”</div>
                <div className="client-quote-author">{project.clientStory.author}</div>
                <div className="client-quote-role">{project.clientStory.role}</div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  className="btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => {
                    onClose();
                    onStartProjectWithRef(project.title);
                  }}
                >
                  Inquire For Similar Residence <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
