import React from 'react';
import styles from './SectionHeader.module.css';
import { Badge } from '../Badge';
import { Button } from '../Button';

export interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string;
  alignment?: 'center' | 'left';
  size?: 'big' | 'medium';
  badge?: string;
  buttons?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tagline,
  title,
  description,
  alignment = 'center',
  size = 'big',
  badge,
  buttons,
  className = '',
}) => {
  const headerClasses = [
    styles.sectionHeader,
    styles[`sectionHeader--${alignment}`],
    styles[`sectionHeader--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={headerClasses}>
      <div className={styles.sectionHeader__header}>
        {tagline && (
          <p className={styles.sectionHeader__tagline}>{tagline}</p>
        )}
        {badge && (
          <Badge variant="dark" className={styles.sectionHeader__badge}>
            {badge}
          </Badge>
        )}
        <h2 className={styles.sectionHeader__title}>{title}</h2>
      </div>
      {description && (
        <p className={styles.sectionHeader__description}>{description}</p>
      )}
      {buttons && (
        <div className={styles.sectionHeader__buttons}>{buttons}</div>
      )}
    </div>
  );
};

