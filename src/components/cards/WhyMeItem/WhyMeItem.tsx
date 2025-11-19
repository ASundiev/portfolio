'use client';

import React from 'react';
import { Plus, Minus } from 'phosphor-react';
import { Button } from '@/components/ui/Button';
import styles from './WhyMeItem.module.css';

export interface WhyMeItemProps {
  title: string;
  description: string;
  caseStudyUrl: string;
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const WhyMeItem: React.FC<WhyMeItemProps> = ({
  title,
  description,
  caseStudyUrl,
  className = '',
  isOpen,
  onToggle,
}) => {

  const itemClasses = [
    styles.whyMeItem,
    isOpen ? styles['whyMeItem--open'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={itemClasses}>
      <button
        className={styles.whyMeItem__header}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.whyMeItem__title}>{title}</span>
        <div className={styles.whyMeItem__icon}>
          {isOpen ? <Minus size={24} weight="bold" /> : <Plus size={24} weight="bold" />}
        </div>
      </button>
      {isOpen && (
        <div className={styles.whyMeItem__details}>
          <p className={styles.whyMeItem__description}>{description}</p>
          <Button
            variant="filled"
            size="xSmall"
            showArrow
            href={caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whyMeItem__button}
          >
            View the case study
          </Button>
        </div>
      )}
    </div>
  );
};
