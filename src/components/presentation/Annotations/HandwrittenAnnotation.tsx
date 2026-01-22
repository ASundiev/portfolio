import React from 'react';
import styles from './HandwrittenAnnotation.module.css';
import { ANNOTATION_SHAPES, ArrowType, UnderlineType } from './shapes';

export interface HandwrittenAnnotationProps {
    /** The text content of the annotation */
    text?: string;
    /** Optional arrow type if the text points to something */
    arrow?: ArrowType;
    /** Optional underline type to highlight the child elements */
    underline?: UnderlineType;
    /** For placement (absolute positioning) */
    className?: string;
    style?: React.CSSProperties;
    /** Color override (defaults to --slide-accent-teal) */
    color?: string;
    /** Font size override in pixels */
    size?: number;
    /** Children to be underlined (if underline is provided) */
    children?: React.ReactNode;
}

/**
 * An expressive annotation component for adding handwritten notes,
 * arrows, and underlines to slides.
 */
export function HandwrittenAnnotation({
    text,
    arrow,
    underline,
    className = '',
    style,
    color,
    size,
    children
}: HandwrittenAnnotationProps) {
    const customStyle = {
        ...style,
        '--annotation-color': color || 'var(--slide-accent-teal)',
        '--annotation-size': size ? `${size}px` : undefined,
    } as React.CSSProperties;

    // Render logic:
    // If underline is provided, we wrap children.
    // Text and arrows are usually positioned relative to the parent slide,
    // so they might be used standalone.

    return (
        <div className={`${styles.annotationContainer} ${className}`} style={customStyle}>
            {children && (
                <div className={styles.contentWrapper}>
                    {children}
                    {underline && (
                        <svg
                            className={styles.underlineSvg}
                            viewBox={ANNOTATION_SHAPES.underlines[underline].viewBox}
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d={ANNOTATION_SHAPES.underlines[underline].path}
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </div>
            )}

            {text && <p className={styles.handwrittenText}>{text}</p>}

            {arrow && (
                <svg
                    className={styles.arrowSvg}
                    viewBox={ANNOTATION_SHAPES.arrows[arrow].viewBox}
                    fill="none"
                >
                    <path
                        d={ANNOTATION_SHAPES.arrows[arrow].path}
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </div>
    );
}
