'use client';

import React from 'react';
import styles from './NavBar.module.css';
import { withBasePath } from '@/utils/basePath';
import { MobileMenu } from '@/components/layout/MobileMenu';

export interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
  const navClasses = [
    styles.navBar,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClasses}>
      <div className={styles.navBar__container}>
        <a href={withBasePath('/')} className={styles.navBar__identity}>
          <span className={styles.navBar__name}>Andrey Sundiev</span>
          <span className={styles.navBar__role}>Design Director — Foundations, DevRev</span>
        </a>

        {/* Desktop Menu */}
        <div className={styles.navBar__menu}>
          <a href={withBasePath('/portfolio')} className={styles.navBar__menuItem}>
            Work
          </a>
          <a href={withBasePath('/#why-me')} className={styles.navBar__menuItem}>
            Why me
          </a>
          <a href={withBasePath('/#experience')} className={styles.navBar__menuItem}>
            Experience
          </a>
          <a href={withBasePath('/#articles')} className={styles.navBar__menuItem}>
            Articles
          </a>
          <a href={withBasePath('/projects')} className={styles.navBar__menuItem}>
            Projects
          </a>
        </div>

        {/* Mobile Menu (shared component) */}
        <MobileMenu />
      </div>
    </nav>
  );
};
