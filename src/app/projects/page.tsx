import React from 'react';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { imagePaths } from '@/data/images';
import styles from './page.module.css';

export default function Projects() {
    return (
        <div className={styles.projects}>
            <NavBar className={styles.projects__nav} />
            <section className={styles.projects__grid}>
                <div className={styles.projects__content}>
                    <SectionHeader
                        title="Personal projects"
                        alignment="center"
                        size="big"
                        className={styles.projects__header}
                    />
                    <div className={styles.projects__cards}>
                        <PortfolioCard
                            title="NeuralStream | AI-powered cinematic recommendation tool"
                            tags={['2025', 'Creator']}
                            imageUrl={imagePaths.projects['1']}
                            href="https://neuralstream.mov/"
                            variant="style05"
                            theme="light"
                        />
                        <PortfolioCard
                            title="Lespal | Music lessons tracker with AI-powered insights"
                            tags={['2025', 'Creator']}
                            imageUrl={imagePaths.projects['2']}
                            href="https://lespal.app/"
                            variant="style05"
                            theme="light"
                        />
                        <PortfolioCard
                            title="The first online course on design systems in Russia"
                            tags={['2021', 'Author']}
                            imageUrl={imagePaths.portfolio['7']}
                            href="https://contented.ru/edu/design-systems"
                            variant="style05"
                            theme="light"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
