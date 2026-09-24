import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { journalArticles, type JournalArticle } from '../data/journal';
import { JournalModal } from '../components/JournalModal';
import '../styles/journal.css';
import '../styles/pages.css';

interface JournalPageProps {
  onOpenConsultation: () => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onOpenConsultation }) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Materiality', 'Atmosphere', 'Aesthetics', 'Biophilic'];

  const filteredArticles =
    activeCategory === 'All'
      ? journalArticles
      : journalArticles.filter((art) => art.category === activeCategory);

  return (
    <div className="journal-page-container">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="page-breadcrumb-sep">/</span>
              <span>The Journal</span>
            </nav>
            <h1 className="page-header-title">Essays on Space, Materiality & Light</h1>
            <p className="page-header-lead">
              Reflections, research notes, and quiet architectural philosophies from the Verdé & Form design atelier.
            </p>
          </div>
        </div>
      </section>

      {/* Main Journal Section */}
      <section className="journal-section section-padding">
        <div className="container">
          {/* Header & Filter Tabs */}
          <div className="journal-header">
            <div>
              <span className="section-tag">Thought & Practice</span>
              <h2 className="section-title">Architectural Perspectives</h2>
            </div>

            {/* Filter Tabs */}
            <div className="projects-filter-bar" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="journal-grid">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="journal-card"
                onClick={() => setSelectedArticle(article)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedArticle(article);
                  }
                }}
                aria-label={`Read essay: ${article.title}`}
              >
                <div className="journal-thumb-frame">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="journal-thumb-img"
                    loading="lazy"
                  />
                </div>

                <div className="journal-meta-row">
                  <span>{article.category}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="journal-card-title">{article.title}</h3>
                <p className="journal-card-excerpt">{article.excerpt}</p>

                <div className="journal-read-link">
                  <span>Read Article</span>
                  <ArrowUpRight size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reading Modal */}
      <JournalModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Bottom CTA Banner */}
      <section className="page-cta-banner">
        <div className="container">
          <div className="page-cta-inner">
            <span className="page-cta-tag">Collaborate</span>
            <h2 className="page-cta-heading">Translate Vision into Architecture</h2>
            <p className="page-cta-desc">
              Connect with our design partners to discuss custom residential architecture, bespoke interior curation, or material specification.
            </p>
            <div className="page-cta-buttons">
              <button onClick={onOpenConsultation} className="btn-light">
                Start a Conversation <ArrowUpRight size={16} />
              </button>
              <Link to="/contact" className="btn-secondary" style={{ borderColor: 'var(--ivory)', color: 'var(--ivory)' }}>
                Our Studio Ateliers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
