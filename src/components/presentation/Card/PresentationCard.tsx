import React from 'react';
import styles from './PresentationCard.module.css';

export type CardVariant = 'default' | 'metric';

interface PresentationCardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    /** Card style variant */
    variant?: CardVariant;
}

/**
 * Reusable presentation card with standard backdrop blur, 
 * subtle background, and gradient border.
 */
export function PresentationCard({
    children,
    className = '',
    style,
    variant = 'default'
}: PresentationCardProps) {
    const variantClass = variant === 'metric' ? styles.metricCard : '';

    return (
        <div
            className={`${styles.card} ${variantClass} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}
