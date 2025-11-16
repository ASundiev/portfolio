import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const badgeClasses = [
    styles.badge,
    styles[`badge--${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={badgeClasses}>
      <div className={styles.badge__content}>{children}</div>
    </div>
  );
};

