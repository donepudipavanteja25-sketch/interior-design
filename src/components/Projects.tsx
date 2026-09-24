import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData, type Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import '../styles/projects.css';

interface ProjectsProps {
  onStartProjectWithRef: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onStartProjectWithRef }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Residential', 'Holiday Residence', 'Apartment'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        {/* Section Header with Category Filters */}
        <div className="projects-header-wrapper reveal reveal-up">
          <div className="projects-intro-left">
            <span className="section-tag">SELECTED WORK</span>
            <h2 className="section-title">
              Spaces designed to evolve beautifully over time.
            </h2>
          </div>

          <div className="projects-filter-bar reveal reveal-up delay-1" role="tablist" aria-label="Project Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Even 2-Column Architectural Grid */}
        <div className="projects-editorial-grid">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card reveal reveal-up delay-${(idx % 2) + 1}`}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`View case study for ${project.title}`}
            >
              <div className="project-image-box">
                <span className="project-number-badge">{project.number}</span>
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.location}`}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-hover-pill">
                  View Case Study <ArrowUpRight size={13} />
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
                  <span className="project-tag-bullet" />
                  <span>{project.area}</span>
                  <span className="project-tag-bullet" />
                  <span>{project.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects Link */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/projects" className="btn-secondary">
            View All Architectural Works <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProjectWithRef={(title: string) => {
          setSelectedProject(null);
          onStartProjectWithRef(title);
        }}
      />
    </section>
  );
};
