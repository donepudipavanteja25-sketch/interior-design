import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowRight, Check, Phone, Mail, MapPin, Clock } from 'lucide-react';
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col with white logo container */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-badge" aria-label="Vriksha Home">
              <img
                src="/images/vriksha-logo-transparent.png"
                alt="Vriksha Constructions & Interior Designers"
                className="footer-vriksha-logo"
              />
            </Link>

            <p className="footer-tagline">
              Creating beautiful, functional and lasting spaces for a better tomorrow.
            </p>

            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                Facebook
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-nav-list">
              <li className="footer-nav-item"><Link to="/">Home</Link></li>
              <li className="footer-nav-item"><Link to="/about">About Vriksha</Link></li>
              <li className="footer-nav-item"><Link to="/services">Services</Link></li>
              <li className="footer-nav-item"><Link to="/projects">Featured Projects</Link></li>
              <li className="footer-nav-item"><Link to="/construction-solutions">Construction Solutions</Link></li>
              <li className="footer-nav-item"><Link to="/process">Our Process</Link></li>
              <li className="footer-nav-item"><Link to="/testimonials">Client Testimonials</Link></li>
              <li className="footer-nav-item"><Link to="/contact">Contact Atelier</Link></li>
            </ul>
          </div>

          {/* All Service Links */}
          <div>
            <div className="footer-col-title">Construction & Design</div>
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <Link to="/services">Residential Construction</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/services">Commercial Construction</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/services">Interior Design</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/services">Renovation & Remodeling</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/construction-solutions">MS Box Shuttering</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/construction-solutions">PVC Shuttering</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/construction-solutions">Sustainable Base Build</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-contact-col">
            <div className="footer-col-title">Hyderabad Headquarters</div>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>Road No. 36, Jubilee Hills & Hitec City Corridor, Hyderabad, Telangana 500033</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <a href="tel:+919989382877" className="footer-contact-link">+91 99893 82877</a>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <a href="mailto:contact@vrikshaconstructions.com" className="footer-contact-link">contact@vrikshaconstructions.com</a>
              </li>
              <li className="footer-contact-item">
                <Clock size={16} className="footer-contact-icon" />
                <span>Monday – Saturday: 9:00 AM – 7:00 PM IST</span>
              </li>
            </ul>

            {/* Newsletter dispatch */}
            <div className="footer-newsletter-wrap">
              <div className="footer-sub-label">Project Inquiries & Updates</div>
              {subscribed ? (
                <div className="newsletter-feedback">
                  <Check size={14} style={{ display: 'inline', marginRight: 4 }} />
                  Thank you. Our team will keep you updated.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <div className="newsletter-input-group">
                    <input
                      type="email"
                      required
                      placeholder="Enter email for brochure"
                      className="newsletter-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar with Legal Links and Dynamic Year */}
        <div className="footer-bottom-bar">
          <div className="footer-legal-links">
            <span>© {currentYear} Vriksha Constructions & Interior Designers. All rights reserved.</span>
            <span className="footer-divider-dot">•</span>
            <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <span className="footer-divider-dot">•</span>
            <Link to="/terms" className="footer-bottom-link">Terms and Conditions</Link>
          </div>

          <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Scroll back to top">
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
