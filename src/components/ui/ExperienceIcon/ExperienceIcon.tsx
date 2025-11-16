import React from 'react';
import styles from './ExperienceIcon.module.css';

export interface ExperienceIconProps {
  className?: string;
}

export const ExperienceIcon: React.FC<ExperienceIconProps> = ({ className = '' }) => {
  return (
    <span className={`${styles.experienceIcon} ${className}`} aria-hidden="true">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <path
          d="M17 7H9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 7V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 16L17 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

