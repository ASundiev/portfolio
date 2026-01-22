'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import styles from './PresentationCanvas.module.css';

export interface PresentationCanvasProps {
    /** Slide components to render */
    children: React.ReactNode;
    /** Total number of slides */
    slideCount: number;
    /** Gap between slides in pixels */
    slideGap?: number;
}

interface Transform {
    x: number;
    y: number;
    scale: number;
}

const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;
const MIN_SCALE = 0.1;
const MAX_SCALE = 2;
const ZOOM_SENSITIVITY = 0.002;

/**
 * Infinite canvas for presenting slides with pan, zoom, and keyboard navigation.
 * Inspired by Figma's canvas interaction model.
 */
export function PresentationCanvas({
    children,
    slideCount,
    slideGap = 120,
}: PresentationCanvasProps) {
    const canvasRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [transform, setTransform] = useState<Transform>({ x: 0, y: 0, scale: 0.4 });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    // Calculate initial transform to center first slide
    useEffect(() => {
        if (!canvasRef.current) return;

        const { clientWidth, clientHeight } = canvasRef.current;
        const scale = Math.min(
            (clientWidth * 0.9) / SLIDE_WIDTH,
            (clientHeight * 0.9) / SLIDE_HEIGHT
        );

        const x = (clientWidth - SLIDE_WIDTH * scale) / 2;
        const y = (clientHeight - SLIDE_HEIGHT * scale) / 2;

        setTransform({ x, y, scale });
    }, []);

    // Navigate to specific slide
    const goToSlide = useCallback((index: number) => {
        if (!canvasRef.current || index < 0 || index >= slideCount) return;

        const { clientWidth, clientHeight } = canvasRef.current;
        const slideX = index * (SLIDE_WIDTH + slideGap);

        const x = (clientWidth - SLIDE_WIDTH * transform.scale) / 2 - slideX * transform.scale;
        const y = (clientHeight - SLIDE_HEIGHT * transform.scale) / 2;

        setTransform(prev => ({ ...prev, x, y }));
        setCurrentSlide(index);
    }, [slideCount, slideGap, transform.scale]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault();
                goToSlide(Math.min(currentSlide + 1, slideCount - 1));
            } else if (e.key === 'ArrowLeft' || e.key === 'Tab' && e.shiftKey) {
                e.preventDefault();
                goToSlide(Math.max(currentSlide - 1, 0));
            } else if (e.key === 'Home') {
                e.preventDefault();
                goToSlide(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                goToSlide(slideCount - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, slideCount, goToSlide]);

    // Mouse wheel for zoom (with Cmd/Ctrl) or horizontal scroll
    const handleWheel = useCallback((e: React.WheelEvent) => {
        e.preventDefault();

        if (e.metaKey || e.ctrlKey) {
            // Zoom
            const delta = -e.deltaY * ZOOM_SENSITIVITY;
            const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, transform.scale * (1 + delta)));

            // Zoom toward mouse position
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const scaleRatio = newScale / transform.scale;
            const newX = mouseX - (mouseX - transform.x) * scaleRatio;
            const newY = mouseY - (mouseY - transform.y) * scaleRatio;

            setTransform({ x: newX, y: newY, scale: newScale });
        } else {
            // Pan horizontally
            setTransform(prev => ({
                ...prev,
                x: prev.x - e.deltaX - e.deltaY,
            }));
        }
    }, [transform]);

    // Mouse drag for panning
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (e.button !== 0) return;
        setIsDragging(true);
        setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
    }, [transform]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging) return;
        setTransform(prev => ({
            ...prev,
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        }));
    }, [isDragging, dragStart]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    // Handle slide click to focus
    const handleSlideClick = useCallback((index: number) => {
        goToSlide(index);
    }, [goToSlide]);

    return (
        <div
            ref={canvasRef}
            className={styles.canvas}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
            <div
                ref={contentRef}
                className={styles.content}
                style={{
                    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                }}
            >
                {React.Children.map(children, (child, index) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child as React.ReactElement<{ isFocused?: boolean; onClick?: () => void }>, {
                            isFocused: index === currentSlide,
                            onClick: () => handleSlideClick(index),
                        })
                        : child
                )}
            </div>

            {/* Slide indicator */}
            <div className={styles.indicator}>
                <span className={styles.indicatorCurrent}>{currentSlide + 1}</span>
                <span className={styles.indicatorSeparator}>/</span>
                <span className={styles.indicatorTotal}>{slideCount}</span>
            </div>

            {/* Controls hint */}
            <div className={styles.hint}>
                <kbd>←</kbd><kbd>→</kbd> Navigate
                <span className={styles.hintSeparator}>·</span>
                <kbd>⌘</kbd> + scroll to zoom
            </div>
        </div>
    );
}
