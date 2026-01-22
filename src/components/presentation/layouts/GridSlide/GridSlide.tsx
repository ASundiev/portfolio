import React from 'react';
import { Slide } from '../../Slide';
import { GridItem, GridItemProps } from './GridItem';
import styles from './GridSlide.module.css';

export interface GridSlideProps {
    id: string;
    breadcrumb: string;
    heading: React.ReactNode;
    items: GridItemProps[];
    columns?: 1 | 2;
    isFocused?: boolean;
    onClick?: () => void;
}

/**
 * Flexible grid layout slide (2x2 or 1x3 variants).
 * Used for DD-4, DD-17, DD-21
 */
export function GridSlide({
    id,
    breadcrumb,
    heading,
    items,
    columns = 2,
    isFocused,
    onClick,
}: GridSlideProps) {
    return (
        <Slide id={id} breadcrumb={breadcrumb} isFocused={isFocused} onClick={onClick}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{heading}</h2>
                <div
                    className={styles.grid}
                    style={{
                        gridTemplateColumns: columns === 2 ? '1fr 1fr' : '1fr',
                        columnGap: '80px',
                        rowGap: '64px'
                    } as React.CSSProperties}
                >
                    {items.map((item, index) => (
                        <GridItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </Slide>
    );
}
