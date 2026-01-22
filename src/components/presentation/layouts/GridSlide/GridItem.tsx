import React from 'react';
import styles from './GridSlide.module.css';

export interface GridItemProps {
    icon?: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
}

export function GridItem({ icon, title, description }: GridItemProps) {
    return (
        <div className={styles.gridItem}>
            {icon && <div className={styles.iconWrapper}>{icon}</div>}
            <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <div className={styles.itemDescription}>{description}</div>
            </div>
        </div>
    );
}
