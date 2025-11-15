'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'phosphor-react';
import styles from './ExperienceItem.module.css';

export interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description?: string;
  achievements?: string[];
  className?: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  achievements,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const itemClasses = [
    styles.experienceItem,
    isOpen ? styles['experienceItem--open'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={itemClasses}>
      <button
        className={styles.experienceItem__header}
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <div className={styles.experienceItem__content}>
          <span className={styles.experienceItem__title}>
            {title} — {company}
          </span>
          <span className={styles.experienceItem__period}>{period}</span>
        </div>
        <div className={styles.experienceItem__icon}>
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>
      {isOpen && (description || achievements) && (
        <div className={styles.experienceItem__details}>
          {description && (
            <p className={styles.experienceItem__description}>{description}</p>
          )}
          {achievements && achievements.length > 0 && (
            <ul className={styles.experienceItem__achievements}>
              {achievements.map((achievement, index) => (
                <li key={index} className={styles.experienceItem__achievement}>
                  {achievement}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

