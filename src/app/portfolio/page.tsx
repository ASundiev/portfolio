import React from 'react';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { imagePaths } from '@/data/images';
import styles from './page.module.css';

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <NavBar className={styles.portfolio__nav} />
      <section className={styles.portfolio__grid}>
        <div className={styles.portfolio__content}>
          <SectionHeader
            title="Work"
            alignment="center"
            size="big"
            className={`${styles.portfolio__header} sectionHeader--dark`}
          />
          <div className={styles.portfolio__cards}>
            <PortfolioCard
              title="Spearheading the AI-first design transformation"
              tags={['2025', 'Head of Design / Design Director']}
              imageUrl={imagePaths.portfolio['1']}
              href="https://pitch.com/v/spearheading-the-ai-first-design-transformation-gsqedn"
              variant="style05"
              theme="dark"
            />
            <PortfolioCard
              title="Setting up the design team for success and achieving 2x increase in productivity"
              tags={['2023-2024', 'Design Manager']}
              imageUrl={imagePaths.portfolio['2']}
              href="https://pitch.com/v/marketing-design-mwtw93"
              variant="style05"
              theme="dark"
            />
            <PortfolioCard
              title="Facilitating consistent design process and smooth handover"
              tags={['2023', 'Design Manager']}
              imageUrl={imagePaths.portfolio['5']}
              href="https://pitch.com/v/designer-enablement-dc69ey"
              variant="style05"
              theme="dark"
            />
            <PortfolioCard
              title="Supporting the company's strategic goals and saving over £5m with a robust design system"
              tags={['2021-2023', 'Design Lead, Acting Product Manager']}
              imageUrl={imagePaths.portfolio['3']}
              href="https://pitch.com/v/design-system-k92yxp"
              variant="style05"
              theme="dark"
            />
            <PortfolioCard
              title="Defining design direction for Beamery products and unblocking design system in a rapid design sprint"
              tags={['2021', 'Design Lead']}
              imageUrl={imagePaths.portfolio['4']}
              href="https://pitch.com/v/design-direction-s7mkjy"
              variant="style05"
              theme="dark"
            />
            <PortfolioCard
              title="Increasing the user engagement and gaining high adoption with Custom Reporting at Intercom"
              tags={['2020', 'Product Designer']}
              imageUrl={imagePaths.portfolio['6']}
              href="https://pitch.com/v/custom-reporting-4qmvuw"
              variant="style05"
              theme="dark"
            />
            <PortfolioCard
              title="Launching the first online course on design systems in Russia"
              tags={['2021', 'Author']}
              imageUrl={imagePaths.portfolio['7']}
              href="https://contented.ru/edu/design-systems"
              variant="style05"
              theme="dark"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

