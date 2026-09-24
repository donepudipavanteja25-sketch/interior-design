import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import '../styles/navbar.css';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Studio', href: '#studio', num: '01' },
    { label: 'Projects', href: '#projects', num: '02' },
    { label: 'Philosophy', href: '#philosophy', num: '03' },
    { label: 'Services', href: '#services', num: '04' },
    { label: 'Process', href: '#process', num: '05' },
    { label: 'Journal', href: '#journal', num: '06' },
    { label: 'Contact', href: '#contact', num: '07' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="brand-logo" aria-label="Verdé & Form Home">
            <span className="brand-name">VERDÉ & FORM</span>
            <span className="brand-sub">Architectural Interiors</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeSwitcher />

            <button
              onClick={onOpenConsultation}
              className="nav-cta"
              id="start-project-nav-btn"
              aria-label="Start a Project Consultation"
            >
              Start a Project
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            id="mobile-menu-trigger"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="mobile-menu-header">
          <span className="mobile-menu-logo">VERDÉ & FORM</span>
          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          {navItems.map((item) => (
            <li key={item.label} className="mobile-menu-item">
              <a href={item.href} onClick={handleLinkClick}>
                <span>{item.label}</span>
                <span className="menu-num">{item.num}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
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
