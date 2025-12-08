'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'phosphor-react';
import styles from './PortfolioCard.module.css';
import { Badge } from '@/components/ui/Badge';
import { isGifImage, isVideoImage } from '@/utils/images';

export interface PortfolioCardProps {
  title: string;
  tags: string[];
  imageUrl: string;
  href?: string;
  variant?: 'style05' | 'style06';
  showButton?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  tags,
  imageUrl,
  href,
  variant = 'style05',
  showButton = true,
  className = '',
  theme = 'light',
}) => {
  const cardClasses = [
    styles.portfolioCard,
    styles[`portfolioCard--${variant}`],
    theme === 'dark' ? styles['portfolioCard--dark'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const isGif = isGifImage(imageUrl);
  const isVideo = isVideoImage(imageUrl);

  return (
    <div className={cardClasses}>
      <div className={styles.portfolioCard__imageWrapper} onClick={handleClick}>
        {isVideo ? (
          <video
            src={imageUrl}
            autoPlay
            loop
            muted
            playsInline
            className={styles.portfolioCard__image}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={styles.portfolioCard__image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            unoptimized={isGif}
          />
        )}
      </div>
      <div className={styles.portfolioCard__info}>
        <div className={styles.portfolioCard__content}>
          <h3 className={styles.portfolioCard__title}>{title}</h3>
          <div className={styles.portfolioCard__tags}>
            {tags.map((tag, index) => (
              <Badge key={index} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        {showButton && (
          <button
            className={styles.portfolioCard__button}
            onClick={handleClick}
            aria-label={href ? `View ${title}` : title}
            disabled={!href}
          >
            <ArrowUpRight size={24} weight="bold" />
          </button>
        )}
      </div>
    </div>
  );
};

