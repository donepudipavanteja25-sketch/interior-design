import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, Palette } from 'lucide-react';
import '../styles/theme-switcher.css';

interface ThemeOption {
  id: string;
  name: string;
  color: string;
  description: string;
}

const themes: ThemeOption[] = [
  { id: 'warm-sandstone', name: 'Sandstone', color: '#DFD5C4', description: 'Warm sand & honed travertine' },
  { id: 'moody-dark', name: 'Dark Atelier', color: '#272420', description: 'Deep charcoal & bronze' },
  { id: 'muted-sage', name: 'Muted Sage', color: '#D6DAD0', description: 'Botanical stone & olive' },
  { id: 'terracotta', name: 'Terracotta', color: '#DAC9BE', description: 'Sun-baked clay & walnut' }
];

export const ThemeSwitcher: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<string>('warm-sandstone');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTheme === 'warm-sandstone') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', activeTheme);
    }
  }, [activeTheme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && customEvent.detail !== activeTheme) {
        setActiveTheme(customEvent.detail);
      }
    };
    window.addEventListener('themechange', handleThemeChange);
    return () => window.removeEventListener('themechange', handleThemeChange);
  }, [activeTheme]);

  const selectTheme = (themeId: string) => {
    setActiveTheme(themeId);
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('themechange', { detail: themeId }));
  };

  const currentThemeObj = themes.find((t) => t.id === activeTheme) || themes[0];

  return (
    <div className="theme-switcher-wrapper" ref={containerRef}>
      {/* Single Compact Option Button */}
      <button
        type="button"
        className={`theme-dropdown-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select atmosphere palette. Current: ${currentThemeObj.name}`}
        title={`Atmosphere: ${currentThemeObj.name}`}
        id="palette-dropdown-btn"
      >
        <Palette size={13} style={{ opacity: 0.85 }} />
        <span
          className="theme-current-dot"
          style={{ backgroundColor: currentThemeObj.color }}
        />
        <span className="theme-dropdown-label">{currentThemeObj.name}</span>
        <ChevronDown size={13} className="theme-chevron" />
      </button>

      {/* Floating Dropdown Selection */}
      {isOpen && (
        <div className="theme-dropdown-menu" role="listbox" aria-label="Color Palettes">
          {themes.map((theme) => {
            const isSelected = activeTheme === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                className={`theme-dropdown-item ${isSelected ? 'active' : ''}`}
                onClick={() => selectTheme(theme.id)}
                role="option"
                aria-selected={isSelected}
              >
                <div className="theme-item-left">
                  <span
                    className="theme-item-dot"
                    style={{ backgroundColor: theme.color }}
                  />
                  <span>{theme.name}</span>
                </div>
                {isSelected && <Check size={14} style={{ color: 'var(--charcoal)' }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
