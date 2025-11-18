'use client';

import React, { useState } from 'react';
import { List, X } from 'phosphor-react';
import styles from './NavBar.module.css';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navClasses = [
    styles.navBar,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClasses}>
      <div className={styles.navBar__container}>
        <div className={styles.navBar__social}>
          <Badge variant={className?.includes('portfolio') ? 'light' : 'dark'}>
            <a
              href="https://www.linkedin.com/in/asundiev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navBar__link}
            >
              LinkedIn
            </a>
          </Badge>
          <Badge variant={className?.includes('portfolio') ? 'light' : 'dark'}>
            <a
              href="https://www.udrop.com/file/O1sr/Andrei-Sundiev_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navBar__link}
            >
              Download CV
            </a>
          </Badge>
        </div>

        {/* Desktop Menu */}
        <div className={styles.navBar__menu}>
          <a href="/" className={styles.navBar__menuItem}>
            Home
          </a>
          <a href="/portfolio" className={styles.navBar__menuItem}>
            Work
          </a>
          <a href="/#experience" className={styles.navBar__menuItem}>
            Experience
          </a>
          <a href="/#articles" className={styles.navBar__menuItem}>
            Articles & talks
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.navBar__mobileToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.navBar__mobileMenu}>
          <a href="/" className={styles.navBar__mobileMenuItem} onClick={toggleMobileMenu}>
            Home
          </a>
          <a href="/portfolio" className={styles.navBar__mobileMenuItem} onClick={toggleMobileMenu}>
            Work
          </a>
          <a href="/#experience" className={styles.navBar__mobileMenuItem} onClick={toggleMobileMenu}>
            Experience
          </a>
          <a href="/#articles" className={styles.navBar__mobileMenuItem} onClick={toggleMobileMenu}>
            Articles & talks
          </a>
        </div>
      )}
    </nav>
  );
};

