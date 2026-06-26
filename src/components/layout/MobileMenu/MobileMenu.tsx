'use client';

import React, { useState } from 'react';
import { List, X } from 'phosphor-react';
import { withBasePath } from '@/utils/basePath';
import styles from './MobileMenu.module.css';

const LINKS = [
  { label: 'Work', href: withBasePath('/portfolio') },
  { label: 'Why me', href: withBasePath('/#why-me') },
  { label: 'Experience', href: withBasePath('/#experience') },
  { label: 'Articles', href: withBasePath('/#articles') },
  { label: 'Projects', href: withBasePath('/projects') },
];

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.toggle}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <List size={24} />
      </button>

      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.top}>
            <div className={styles.identity}>
              <span className={styles.name}>Andrey Sundiev</span>
              <span className={styles.role}>Design Director — Foundations, DevRev</span>
            </div>
            <button
              className={styles.toggle}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className={styles.nav}>
            {LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
