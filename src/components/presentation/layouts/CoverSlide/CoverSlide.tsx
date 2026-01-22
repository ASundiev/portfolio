'use client';

import React from 'react';
import { Slide } from '../../Slide';
import styles from './CoverSlide.module.css';

export interface CoverSlideProps {
    id: string;
    title: React.ReactNode;
    /** Background video or image URL */
    backgroundSrc?: string;
    /** Whether background is a video */
    isVideo?: boolean;
    isFocused?: boolean;
    onClick?: () => void;
}

/**
 * Cover slide layout with full-bleed background and centered title.
 */
export function CoverSlide({
    id,
    title,
    backgroundSrc,
    isVideo = false,
    isFocused,
    onClick,
}: CoverSlideProps) {
    return (
        <Slide id={id} isCover isFocused={isFocused} onClick={onClick} className={styles.cover}>
            {backgroundSrc && (
                <div className={styles.background}>
                    {isVideo ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={styles.backgroundVideo}
                        >
                            <source src={backgroundSrc} />
                        </video>
                    ) : (
                        <div
                            className={styles.backgroundImage}
                            style={{ backgroundImage: `url(${backgroundSrc})` }}
                        />
                    )}
                </div>
            )}
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </Slide>
    );
}
