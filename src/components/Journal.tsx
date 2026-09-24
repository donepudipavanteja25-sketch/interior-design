import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { journalArticles, type JournalArticle } from '../data/journal';
import { JournalModal } from './JournalModal';
import '../styles/journal.css';

export const Journal: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section className="journal-section section-padding" id="journal">
      <div className="container">
        <div className="journal-header reveal reveal-up">
          <div>
            <span className="section-tag">JOURNAL & ESSAYS</span>
            <h2 className="section-title">
              Conversations on materiality, craft, and light.
            </h2>
          </div>
          <p className="section-lead" style={{ maxWidth: 460 }}>
            Writings from our design studio reflecting on timeless living, sustainable craftsmanship, and architectural restraint.
          </p>
        </div>

        <div className="journal-grid">
          {journalArticles.map((article, idx) => (
            <article
              key={article.id}
              className={`journal-card reveal reveal-up delay-${idx + 1}`}
              onClick={() => setSelectedArticle(article)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArticle(article);
                }
              }}
              aria-label={`Read article: ${article.title}`}
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
              </div>

              <h3 className="journal-card-title">{article.title}</h3>
              <p className="journal-card-excerpt">{article.excerpt}</p>

              <div className="journal-read-link">
                Read Essay <ArrowRight size={13} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <JournalModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
