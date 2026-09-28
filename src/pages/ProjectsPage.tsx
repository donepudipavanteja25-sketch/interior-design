import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MapPin, Maximize2, Calendar } from 'lucide-react';
import { projectsData, type Project } from '../data/projects';
import { ProjectModal } from '../components/ProjectModal';
import '../styles/projects.css';
import '../styles/pages.css';

interface ProjectsPageProps {
  onStartProjectWithRef: (projectTitle: string) => void;
  onOpenConsultation: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onStartProjectWithRef,
  onOpenConsultation
}) => {
  const { id } = useParams<{ id?: string }>();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      const found = projectsData.find((p) => p.id === id);
      if (found) {
        setSelectedProject(found);
      }
    }
  }, [id]);

  const categories = ['All', 'Residential', 'Commercial', 'Interior Design'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="subpage projects-page-wrapper">
      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content reveal reveal-up">
            <span className="section-tag">PROJECT PORTFOLIO</span>
            <h1 className="page-hero-title">Built with Care. Designed to Last.</h1>
            <p className="page-hero-lead">
              Discover our architectural villas, corporate headquarters, and bespoke interior sanctuaries engineered across Hyderabad and Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          {/* Filter Bar */}
          <div
            className="projects-filter-bar reveal reveal-up"
            role="tablist"
            aria-label="Filter projects by category"
            style={{ marginBottom: '3rem', justifyContent: 'center' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-editorial-grid">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className={`project-card reveal reveal-up delay-${(idx % 3) + 1}`}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                <div className="project-image-box">
                  <span className="project-category-badge">{project.category}</span>
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-hover-pill">
                    View Project <ArrowUpRight size={13} />
                  </div>
                </div>

                <div className="project-meta-box">
                  <div className="project-header-row">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-arrow-circle" aria-hidden="true">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--earth-light)', lineHeight: 1.5, margin: '0.5rem 0 1rem' }}>
                    {project.subtitle}
                  </p>

                  <div className="project-details-row">
                    <span className="project-detail-item">
                      <MapPin size={13} className="project-icon" /> {project.location}
                    </span>
                    <span className="project-tag-bullet">•</span>
                    <span className="project-detail-item">
                      <Maximize2 size={13} className="project-icon" /> {project.area}
                    </span>
                    <span className="project-tag-bullet">•</span>
                    <span className="project-detail-item">
                      <Calendar size={13} className="project-icon" /> {project.year}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProjectWithRef={(title: string) => {
          setSelectedProject(null);
          onStartProjectWithRef(title);
        }}
      />

      {/* Final Quote CTA */}
      <section className="section-padding final-page-cta">
        <div className="container text-center">
          <div className="reveal reveal-up" style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              Have a plot or property in mind?
            </h2>
            <p style={{ color: '#DCE4E9', fontSize: '1.05rem', margin: '1rem 0 2rem' }}>
              Connect with our principal architects and engineering directors to bring your project into focus.
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
