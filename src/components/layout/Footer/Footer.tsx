import React from 'react';
import styles from './Footer.module.css';
import { Badge } from '@/components/ui/Badge';
import { withBasePath } from '@/utils/basePath';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const footerClasses = [
    styles.footer,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <footer className={footerClasses}>
      <div className={styles.footer__container}>
        <div className={styles.footer__left}>
          <h2 className={styles.footer__email}>inbox@asundiev.com</h2>
          <div className={styles.footer__social}>
            <Badge variant="dark">
              <a
                href="https://www.linkedin.com/in/asundiev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footer__link}
              >
                LinkedIn
              </a>
            </Badge>
            <Badge variant="dark">
              <a
                href="https://www.udrop.com/file/O1sr/Andrei-Sundiev_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footer__link}
              >
                Download CV
              </a>
            </Badge>
          </div>
        </div>
        <div className={styles.footer__menu}>
          <a href={withBasePath('/')} className={styles.footer__menuItem}>
            Home
          </a>
          <a href={withBasePath('/portfolio')} className={styles.footer__menuItem}>
            Case studies
          </a>
          <a href={withBasePath('/#experience')} className={styles.footer__menuItem}>
            About
          </a>
          <a href={withBasePath('/#contact')} className={styles.footer__menuItem}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

