'use client';

import React from 'react';
import styles from './Slide.module.css';

export interface SlideProps {
    /** Unique slide identifier */
    id: string;
    /** Breadcrumb title shown in header */
    breadcrumb?: string;
    /** Whether this is the cover slide (no header) */
    isCover?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Slide content */
    children: React.ReactNode;
    /** Click handler for canvas focus */
    onClick?: () => void;
    /** Whether this slide is currently focused */
    isFocused?: boolean;
}

/**
 * Base slide component with consistent dimensions and optional header.
 * All slide layouts build on top of this component.
 */
export function Slide({
    id,
    breadcrumb = 'Case studies',
    isCover = false,
    className,
    children,
    onClick,
    isFocused = false,
}: SlideProps) {
    return (
        <article
            id={id}
            className={`${styles.slide} ${isFocused ? styles.focused : ''} ${className || ''}`}
            onClick={onClick}
            tabIndex={0}
            role="group"
            aria-label={`Slide: ${breadcrumb}`}
        >
            {!isCover && (
                <header className={styles.header}>
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <span className={styles.breadcrumbLink}>Case studies</span>
                        <span className={styles.breadcrumbSeparator}>/</span>
                        <span className={styles.breadcrumbCurrent}>{breadcrumb}</span>
                    </nav>
                </header>
            )}
            <div className={styles.content}>
                {children}
            </div>
        </article>
    );
}
