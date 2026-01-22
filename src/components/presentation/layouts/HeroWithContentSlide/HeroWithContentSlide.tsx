'use client';

import React from 'react';
import { Slide } from '../../Slide';
import { PresentationCard } from '../../Card';
import styles from './HeroWithContentSlide.module.css';

export interface FeatureCard {
    icon?: React.ReactNode;
    title: string;
    description: string;
}

export interface HeroWithContentSlideProps {
    id: string;
    breadcrumb: string;
    /** Main heading - can include JSX for gradient text */
    heading: React.ReactNode;
    /** Optional bullets below heading */
    bullets?: React.ReactNode[];
    /** Feature cards or other supplementary content */
    cards?: FeatureCard[];
    /** Alternative: custom content area */
    children?: React.ReactNode;
    /** Show background glow */
    showGlow?: boolean;
    isFocused?: boolean;
    onClick?: () => void;
}

/**
 * Hero layout: large heading + bullets + supplementary cards/images below.
 * Used for DD-4, DD-5, DD-6, DD-11, DD-12, DD-17
 */
export function HeroWithContentSlide({
    id,
    breadcrumb,
    heading,
    bullets,
    cards,
    children,
    showGlow = false,
    isFocused,
    onClick,
}: HeroWithContentSlideProps) {
    return (
        <Slide id={id} breadcrumb={breadcrumb} isFocused={isFocused} onClick={onClick}>
            {showGlow && <div className={styles.glow} />}

            <div className={styles.layout}>
                <header className={styles.header}>
                    <h2 className={styles.heading}>{heading}</h2>
                    {bullets && bullets.length > 0 && (
                        <ul className={styles.bullets}>
                            {bullets.map((bullet, index) => (
                                <li key={index} className={styles.bullet}>{bullet}</li>
                            ))}
                        </ul>
                    )}
                </header>

                {cards && cards.length > 0 && (
                    <div className={styles.cards}>
                        {cards.map((card, index) => (
                            <PresentationCard key={index} className={styles.cardLayout}>
                                {card.icon && <div className={styles.cardIcon}>{card.icon}</div>}
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDescription}>{card.description}</p>
                            </PresentationCard>
                        ))}
                    </div>
                )}

                {children && <div className={styles.customContent}>{children}</div>}
            </div>
        </Slide>
    );
}
