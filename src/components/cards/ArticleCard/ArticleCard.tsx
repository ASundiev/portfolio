'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ArticleCard.module.css';
import { Badge } from '@/components/ui/Badge';
import { isGifImage } from '@/utils/images';

export interface ArticleCardProps {
  title: string;
  imageUrl: string;
  tag: string;
  href?: string;
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  imageUrl,
  tag,
  href,
  className = '',
}) => {
  const cardClasses = [
    styles.articleCard,
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

  return (
    <div className={cardClasses} onClick={handleClick}>
      <div className={styles.articleCard__imageWrapper}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={styles.articleCard__image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized={isGif}
        />
      </div>
      <div className={styles.articleCard__content}>
        <h3 className={styles.articleCard__title}>{title}</h3>
        <Badge variant="default" className={styles.articleCard__tag}>
          {tag}
        </Badge>
      </div>
    </div>
  );
};

