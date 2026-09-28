import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import '../styles/navbar.css';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Large Vriksha Logo on the left */}
          <Link to="/" className="brand-logo" aria-label="Vriksha Constructions & Interior Designers Home">
            <img
              src="/images/vriksha-logo-transparent.png"
              alt="Vriksha Constructions & Interior Designers"
              className="vriksha-navbar-logo"
            />
          </Link>

          {/* Desktop Navigation in the Center */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions: Theme Switcher, Thin Divider & Phone Number */}
          <div className="nav-right-group">
            <ThemeSwitcher />

            <div className="nav-action-divider" />

            <a
              href="tel:+919989382877"
              className="nav-phone-link"
              aria-label="Call Vriksha Constructions at +91 99893 82877"
            >
              <Phone size={15} className="nav-phone-icon" />
              <span>+91 99893 82877</span>
            </a>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="mobile-nav-controls">
            <a
              href="tel:+919989382877"
              className="mobile-call-icon-btn"
              aria-label="Call +91 99893 82877"
            >
              <Phone size={17} />
            </a>

            <div className="mobile-theme-wrapper">
              <ThemeSwitcher />
            </div>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-trigger"
            >
              <Menu size={24} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Drawer */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="mobile-menu-header">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-logo-link">
            <img
              src="/images/vriksha-logo-transparent.png"
              alt="Vriksha Constructions"
              className="vriksha-mobile-drawer-logo"
            />
          </Link>
          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} strokeWidth={1.8} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          {navItems.map((item, idx) => (
            <li key={item.label} className="mobile-menu-item">
              <NavLink
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <span>{item.label}</span>
                <span className="menu-num">0{idx + 1}</span>
              </NavLink>
            </li>
          ))}
          <li className="mobile-menu-item">
            <NavLink
              to="/construction-solutions"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>Construction Solutions</span>
              <span className="menu-num">06</span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-palette-row">
            <span className="mobile-menu-palette-title">Color Palette</span>
            <ThemeSwitcher />
          </div>

          {/* Full-width phone link inside mobile menu */}
          <a
            href="tel:+919989382877"
            className="mobile-menu-phone-cta"
            aria-label="Call +91 99893 82877"
          >
            <Phone size={18} />
            <span>+91 99893 82877</span>
          </a>

          <div className="mobile-menu-contact">
            <span>Road No. 36, Jubilee Hills, Hyderabad</span>
            <span>contact@vrikshaconstructions.com</span>
          </div>
        </div>
      </div>
    </>
  );
};
