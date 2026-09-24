import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import '../styles/navbar.css';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isSubpage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { label: 'Studio', path: '/studio', num: '01' },
    { label: 'Projects', path: '/projects', num: '02' },
    { label: 'Philosophy', path: '/philosophy', num: '03' },
    { label: 'Services', path: '/services', num: '04' },
    { label: 'Process', path: '/process', num: '05' },
    { label: 'Journal', path: '/journal', num: '06' },
    { label: 'Contact', path: '/contact', num: '07' }
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled || isSubpage ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="brand-logo" aria-label="Verdé & Form Home">
            <span className="brand-name">VERDÉ & FORM</span>
            <span className="brand-sub">Architectural Interiors</span>
          </Link>

          {/* Desktop Navigation */}
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

            <div className="nav-actions-group">
              <ThemeSwitcher />

              <button
                onClick={onOpenConsultation}
                className="nav-cta"
                id="start-project-nav-btn"
                aria-label="Start a Project Consultation"
              >
                Start a Project
              </button>
            </div>
          </nav>

          {/* Mobile/Tablet Controls */}
          <div className="mobile-nav-controls">
            <div className="mobile-theme-wrapper">
              <ThemeSwitcher />
            </div>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              id="mobile-menu-trigger"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="mobile-menu-header">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-logo">
            VERDÉ & FORM
          </Link>
          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          <li className="mobile-menu-item">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>Home</span>
              <span className="menu-num">00</span>
            </NavLink>
          </li>
          {navItems.map((item) => (
            <li key={item.label} className="mobile-menu-item">
              <NavLink
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <span>{item.label}</span>
                <span className="menu-num">{item.num}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-palette-row">
            <span className="mobile-menu-palette-title">Atmosphere</span>
            <ThemeSwitcher />
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="mobile-menu-cta"
          >
            Start a Project <ArrowUpRight size={16} style={{ display: 'inline', marginLeft: 4 }} />
          </button>
          <div className="mobile-menu-contact">
            <span>Hyderabad · Mumbai · Goa</span>
            <span>inquire@verdeform.com</span>
          </div>
        </div>
      </div>
    </>
  );
};
