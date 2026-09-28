import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import { projectsData, type Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import '../styles/projects.css';

interface ProjectsProps {
  onStartProjectWithRef: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onStartProjectWithRef }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Take the 3 featured projects
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header-wrapper reveal reveal-up">
          <div className="projects-intro-left">
            <span className="section-tag">FEATURED WORK</span>
            <h2 className="section-title">
              Built with care. Designed to last.
            </h2>
          </div>

          <div className="projects-header-right">
            <p className="projects-header-desc">
              Explore a curated selection of our residential, commercial, and interior transformations executed across Hyderabad.
            </p>
            <Link
              to="/projects"
              className="btn-secondary"
              id="view-all-projects-btn"
            >
              View All Projects <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="projects-editorial-grid">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card reveal reveal-up delay-${idx + 1}`}
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

                <div className="project-details-row">
                  <span className="project-detail-item">
                    <MapPin size={13} className="project-icon" /> {project.location}
                  </span>
                  <span className="project-tag-bullet">•</span>
                  <span className="project-detail-item">
                    <Maximize2 size={13} className="project-icon" /> {project.area}
                  </span>
                </div>
              </div>
            </article>
          ))}
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
