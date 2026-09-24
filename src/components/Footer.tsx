import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowRight, Check } from 'lucide-react';
import '../styles/footer.css';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-name">
              VERDÉ & FORM
            </Link>
            <p className="footer-tagline">
              Spaces shaped by nature, designed for living. Refined residential and boutique architectural sanctuaries.
            </p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-link" aria-label="Instagram">Instagram</a>
              <a href="#" className="footer-social-link" aria-label="Pinterest">Pinterest</a>
              <a href="#" className="footer-social-link" aria-label="Architectural Digest">AD Pro</a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

          {/* Navigation Links with React Router */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-nav-list">
              <li className="footer-nav-item"><Link to="/studio">The Studio</Link></li>
              <li className="footer-nav-item"><Link to="/projects">Selected Work</Link></li>
              <li className="footer-nav-item"><Link to="/philosophy">Our Philosophy</Link></li>
              <li className="footer-nav-item"><Link to="/services">Disciplines</Link></li>
              <li className="footer-nav-item"><Link to="/process">Our Methodology</Link></li>
              <li className="footer-nav-item"><Link to="/journal">Design Essays</Link></li>
              <li className="footer-nav-item"><Link to="/contact">Contact Atelier</Link></li>
            </ul>
          </div>

          {/* Studio Locations */}
          <div>
            <div className="footer-col-title">Practice Ateliers</div>
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <Link to="/contact" style={{ display: 'block' }}>
                  <span style={{ color: 'var(--ivory)', display: 'block', fontWeight: 500 }}>Hyderabad</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--taupe)' }}>Jubilee Hills, Rd 36</span>
                </Link>
              </li>
              <li className="footer-nav-item" style={{ marginTop: '0.5rem' }}>
                <Link to="/contact" style={{ display: 'block' }}>
                  <span style={{ color: 'var(--ivory)', display: 'block', fontWeight: 500 }}>Mumbai</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--taupe)' }}>Kala Ghoda Arts District</span>
                </Link>
              </li>
              <li className="footer-nav-item" style={{ marginTop: '0.5rem' }}>
                <Link to="/contact" style={{ display: 'block' }}>
                  <span style={{ color: 'var(--ivory)', display: 'block', fontWeight: 500 }}>Goa</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--taupe)' }}>Assagao Village</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / The Gazette */}
          <div className="footer-newsletter-col">
            <div className="footer-col-title">The Architectural Journal</div>
            <p>
              Receive seasonal dispatches on spatial design, natural materiality, and private residence reveals.
            </p>

            {subscribed ? (
              <div className="newsletter-feedback">
                <Check size={14} style={{ display: 'inline', marginRight: 4 }} />
                Thank you for subscribing to our dispatches.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe to dispatches">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} VERDÉ & FORM INTERIOR ARCHITECTURE STUDIO. ALL RIGHTS RESERVED.
          </div>

          <div className="footer-legal-links">
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms of Practice</a>
            <a href="#" style={{ color: 'inherit' }}>Editorial Inquiries</a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top of page">
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
