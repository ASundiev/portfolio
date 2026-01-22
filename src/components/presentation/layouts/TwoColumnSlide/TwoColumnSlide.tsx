'use client';

import React from 'react';
import Image from 'next/image';
import { Slide } from '../../Slide';
import styles from './TwoColumnSlide.module.css';

export interface TwoColumnSlideProps {
    id: string;
    breadcrumb: string;
    heading: React.ReactNode;
    /** Bullet points */
    bullets: React.ReactNode[];
    /** Right side illustration/image */
    illustration?: React.ReactNode;
    /** Optional blurred glow effect */
    showGlow?: boolean;
    glowColor?: string;
    /** Switch illustration to the left side */
    reverse?: boolean;
    /** Vertically center the content */
    alignCenter?: boolean;
    /** Optional sub-heading above bullets */
    subHeading?: string;
    /** Content to render below the bullets in the text column */
    children?: React.ReactNode;
    isFocused?: boolean;
    onClick?: () => void;
}

/**
 * Two-column layout: heading + bullets on left, illustration on right.
 * Used for DD-2, DD-3, DD-7, DD-8, DD-9, DD-10, DD-13, DD-14, DD-15, DD-16
 */
export function TwoColumnSlide({
    id,
    breadcrumb,
    heading,
    subHeading,
    bullets,
    illustration,
    showGlow = true,
    glowColor = 'var(--slide-accent-purple)',
    reverse = false,
    alignCenter = false,
    children,
    isFocused,
    onClick,
}: TwoColumnSlideProps) {
    return (
        <Slide id={id} breadcrumb={breadcrumb} isFocused={isFocused} onClick={onClick}>
            {showGlow && (
                <div
                    className={styles.glow}
                    style={{ '--glow-color': glowColor } as React.CSSProperties}
                />
            )}
            <div className={`${styles.layout} ${reverse ? styles.reverse : ''} ${alignCenter ? styles.alignCenter : ''}`}>
                <div className={styles.textColumn}>
                    <h2 className={styles.heading}>{heading}</h2>
                    <div className={styles.contentGroup}>
                        {subHeading && <h3 className={styles.subHeading}>{subHeading}</h3>}
                        <ul className={styles.bullets}>
                            {bullets.map((bullet, index) => (
                                <li key={index} className={styles.bullet}>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {children && <div className={styles.extraContent}>{children}</div>}
                </div>
                <div className={styles.illustrationColumn}>
                    {illustration}
                </div>
            </div>
        </Slide>
    );
}
