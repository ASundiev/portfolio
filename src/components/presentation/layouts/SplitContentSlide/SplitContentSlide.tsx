import React from 'react';
import { Slide } from '../../Slide';
import styles from './SplitContentSlide.module.css';

export interface SplitContentSlideProps {
    id: string;
    breadcrumb: string;
    heading: React.ReactNode;
    subHeading?: string;
    leftBullets: React.ReactNode[];
    rightBullets: React.ReactNode[];
    illustration?: React.ReactNode;
    showGlow?: boolean;
    isFocused?: boolean;
    onClick?: () => void;
}

/**
 * Slide layout with a heading and two columns of bullets above an illustration area.
 * Used for DD-6
 */
export function SplitContentSlide({
    id,
    breadcrumb,
    heading,
    subHeading,
    leftBullets,
    rightBullets,
    illustration,
    showGlow = true,
    isFocused,
    onClick,
}: SplitContentSlideProps) {
    return (
        <Slide id={id} breadcrumb={breadcrumb} isFocused={isFocused} onClick={onClick}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{heading}</h2>

                <div className={styles.contentWrapper}>
                    {subHeading && <h3 className={styles.subHeading}>{subHeading}</h3>}
                    <div className={styles.columns}>
                        <div className={styles.column}>
                            <ul className={styles.bulletList}>
                                {leftBullets.map((bullet, index) => (
                                    <li key={index} className={styles.bulletItem}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <ul className={styles.bulletList}>
                                {rightBullets.map((bullet, index) => (
                                    <li key={index} className={styles.bulletItem}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.illustrationArea}>
                    {illustration}
                </div>

                {showGlow && <div className={styles.glow} />}
            </div>
        </Slide>
    );
}
