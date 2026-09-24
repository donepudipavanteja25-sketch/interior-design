import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
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
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Residential', 'Holiday Residence', 'Apartment'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-page-container">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="page-breadcrumb-sep">/</span>
              <span>Selected Works</span>
            </nav>
            <h1 className="page-header-title">Spaces Designed to Evolve With Time</h1>
            <p className="page-header-lead">
              Every commission is an exploration of topography, sunlight, and raw mineral permanence.
              Explore our architectural archives across India.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="projects-section section-padding">
        <div className="container">
          {/* Header & Filter Tabs */}
          <div className="projects-header-wrapper">
            <div className="projects-intro-left">
              <span className="section-tag">Portfolio</span>
              <h2 className="section-title">Architectural Archives</h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="projects-filter-bar" role="tablist" aria-label="Project Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeFilter === cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Even, Pristine Architectural Grid */}
          <div className="projects-editorial-grid">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="project-card"
                onClick={() => handleOpenProject(project)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenProject(project);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                <div className="project-image-box">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-number-badge">{project.number}</div>
                  <div className="project-hover-pill">
                    <span>Explore Case Study</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div className="project-meta-box">
                  <div className="project-header-row">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-location">{project.location}</span>
                  </div>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <div className="project-tag-row">
                    <span>{project.category}</span>
                    <span className="project-tag-bullet"></span>
                    <span>{project.area}</span>
                    <span className="project-tag-bullet"></span>
                    <span>Completed {project.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Architectural Metrics Bar */}
          <div
            className="studio-metrics-row"
            style={{
              marginTop: '5rem',
              backgroundColor: 'var(--ivory)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: '2px',
              border: '1px solid var(--border-light)'
            }}
          >
            <div className="metric-col">
              <div className="metric-number">148k+</div>
              <div className="metric-label">Square Feet Curated</div>
            </div>
            <div className="metric-col">
              <div className="metric-number">100%</div>
              <div className="metric-label">Natural Materials</div>
            </div>
            <div className="metric-col">
              <div className="metric-number">48</div>
              <div className="metric-label">Completed Sanctuaries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onStartProjectWithRef={(title: string) => {
          handleCloseProject();
          onStartProjectWithRef(title);
        }}
      />

      {/* Bottom CTA Banner */}
      <section className="page-cta-banner">
        <div className="container">
          <div className="page-cta-inner">
            <span className="page-cta-tag">Begin Your Journey</span>
            <h2 className="page-cta-heading">Ready to Shape Your Residence?</h2>
            <p className="page-cta-desc">
              Whether you are planning a new architectural build, an urban penthouse renovation, or a bespoke holiday retreat, our partners are ready to listen.
            </p>
            <div className="page-cta-buttons">
              <button onClick={onOpenConsultation} className="btn-light">
                Start a Project Consultation <ArrowRight size={16} />
              </button>
              <Link to="/process" className="btn-secondary" style={{ borderColor: 'var(--ivory)', color: 'var(--ivory)' }}>
                View Our 4-Phase Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
