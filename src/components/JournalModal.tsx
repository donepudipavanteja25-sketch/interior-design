import React, { useEffect } from 'react';
import { X, Clock, Calendar } from 'lucide-react';
import type { JournalArticle } from '../data/journal';
import '../styles/modal.css';
import '../styles/journal.css';

interface JournalModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="modal-backdrop active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="journal-modal-heading"
    >
      <div
        className="modal-container"
        style={{ maxWidth: 900 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-trigger"
          onClick={onClose}
          aria-label="Close article"
        >
          <X size={20} />
        </button>

        <div className="project-modal-hero" style={{ height: 320 }}>
          <img src={article.image} alt={article.title} />
        </div>

        <div className="journal-modal-body">
          <div className="journal-modal-tag">{article.category}</div>
          <h2 id="journal-modal-heading" className="journal-modal-title">
            {article.title}
          </h2>

          <div className="journal-author-row">
            <div>
              <strong>{article.author.name}</strong> · {article.author.role}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} />
              <span>{article.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="journal-article-content">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2rem', marginTop: '3rem', textAlign: 'center' }}>
            <button className="btn-secondary" onClick={onClose}>
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
