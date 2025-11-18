import React from 'react';
import Image from 'next/image';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { ExperienceItem } from '@/components/cards/ExperienceItem';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { ExperienceIcon } from '@/components/ui/ExperienceIcon';
import { imagePaths } from '@/data/images';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* Navigation - Outside hero for sticky behavior */}
      <NavBar className={styles.homepage__nav} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles.hero__content}>
            <div className={styles.hero__title}>
              <div className={styles.hero__nameLine}>
                <h1 className={styles.hero__firstName}>Andrey</h1>
                <div className={styles.hero__avatar}>
                  <Image
                    src={imagePaths.profile}
                    alt="Andrey Sundiev"
                    width={80}
                    height={80}
                    className={styles.hero__avatarImage}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h1 className={styles.hero__lastName}>Sundiev</h1>
              </div>
              <h2 className={styles.hero__subtitle}>Design leader</h2>
            </div>
            <p className={styles.hero__description}>
              I've been leading teams and driving change at organisations of various scale for over 12 years. Currently overseeing Product and Marketing Design at Beamery.
            </p>
          </div>
          <div className={styles.hero__actions}>
            <Button
              variant="outline"
              size="xSmall"
              href="https://www.linkedin.com/in/asundiev"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="xSmall"
              showArrow
              href="https://www.udrop.com/file/O1sr/Andrei-Sundiev_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className={styles.whyMe} id="why-me">
        <div className={styles.whyMe__content}>
          <SectionHeader
            title="Why me"
            alignment="left"
            size="big"
            className={styles.whyMe__header}
          />
          <div className={styles.whyMe__list}>
            <div className={styles.whyMe__item}>
              Spearheading the AI-first transformation in Product & Design org
            </div>
            <div className={styles.whyMe__item}>
              Player-coach with a diverse skillset
            </div>
            <div className={styles.whyMe__item}>
              Nurturing high-performance design teams for real impact
            </div>
            <div className={styles.whyMe__item}>
              Strategic thinker, focused on tangible outcomes
            </div>
            <div className={styles.whyMe__item}>
              Experienced in scaling high-impact products
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className={styles.portfolioPreview} id="portfolio">
        <div className={styles.portfolioPreview__content}>
          <SectionHeader
            title="Case studies"
            alignment="center"
            size="big"
            className={styles.portfolioPreview__header}
          />
          <div className={styles.portfolioPreview__cards}>
            <PortfolioCard
              title="Spearheading the AI-first design transformation"
              tags={['2025', 'Head of Design / Design Director']}
              imageUrl={imagePaths.portfolio['1']}
              href="https://pitch.com/v/spearheading-the-ai-first-design-transformation-gsqedn"
              variant="style05"
            />
            <PortfolioCard
              title="Setting up the design team for success and achieving 2x increase in productivity"
              tags={['2023-2024', 'Design Manager']}
              imageUrl={imagePaths.portfolio['2']}
              href="https://pitch.com/v/marketing-design-mwtw93"
              variant="style05"
            />
            <PortfolioCard
              title="Facilitating consistent design process and smooth handover"
              tags={['2023', 'Design Manager']}
              imageUrl={imagePaths.portfolio['3']}
              href="https://pitch.com/v/designer-enablement-dc69ey"
              variant="style05"
            />
          </div>
          <Button
            variant="outline"
            size="large"
            showArrow
            href="/portfolio"
            className={styles.portfolioPreview__button}
          >
            All Case Studies
          </Button>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experience} id="experience">
        <div className={styles.experience__content}>
          <div className={styles.experience__grid}>
            <div className={styles.experience__title}>
              <ExperienceIcon className={styles.experience__icon} />
              <span className={styles.experience__label}>E X P E R I E N C E</span>
            </div>
            <div className={styles.experience__list}>
              <ExperienceItem
                title="Design Director"
                company="Beamery"
                period="2021 — Current"
                defaultOpen={true}
                description="Overseeing Product Design and Marketing Design functions. Spearheading the AI-first transformation of the EPD department. Developing and propagating Product & Design strategy as a part of the Senior Leadership Team."
                achievements={[
                  "Inspired an active phase of work on the company's flagship conversational AI product.",
                  "Established design review process that de-risked the fast-paced design discovery and provided more transparency to the leadership.",
                  "Rebuilt Marketing Design as a lean, high-impact function, driving higher engagement and lead generation while cutting spend on critical assets. The team's customer satisfaction was boosted by +16% YoY (CSAT: 92%) and eNPS by +8% (eNPS: 92).",
                  "Contributed to 6x increase in deal close rate and 2x increase in deal size by enabling Sales with templates and automations.",
                  "Saved more than 33,845 engineering hours (~£5m in savings) to the business over 1.5 years by leading the implementation of a company-wide design system.",
                ]}
                hideIcon={true}
                interactive={false}
              />
              <ExperienceItem
                title="Product Designer"
                company="Intercom"
                period="2018 — 2021"
                hideIcon={true}
                interactive={false}
              />
              <ExperienceItem
                title="Chief Designer"
                company="Mail.Ru Group"
                period="2016 — 2018"
                hideIcon={true}
                interactive={false}
              />
              <ExperienceItem
                title="Product Design Lead"
                company="Yandex"
                period="2013 — 2016"
                hideIcon={true}
                interactive={false}
              />
            </div>
          </div>
          <Button
            variant="filled"
            size="xSmall"
            href="https://www.udrop.com/file/O1sr/Andrei-Sundiev_CV.pdf"
            className={styles.experience__button}
          >
            Download full CV
          </Button>
        </div>
      </section>

      {/* Articles & Talks Section */}
      <section className={styles.articles} id="articles">
        <div className={styles.articles__content}>
          <SectionHeader
            title="Articles & talks"
            alignment="center"
            size="big"
            className={styles.articles__header}
          />
          <div className={styles.articles__grid}>
            <ArticleCard
              title="Inspect & Reflect Wise com's Design System"
              description="Exploring Wise.com's Design System implementation alongside a group of industry professionals"
              imageUrl={imagePaths.articles['1']}
              tag="Webinar"
              href="https://www.youtube.com/watch?v=YSWG98qiwJg"
            />
            <ArticleCard
              title="Design Systems and the Volatile Economy"
              description="An honest conversation about the life of design systems and design ops specialists in the current economic environment. Challenges, hopes and nuggets of advice from the past 8 years in this field."
              imageUrl={imagePaths.articles['2']}
              tag="Podcast"
              href="https://youtu.be/mXB5WVAjR8A?si=PGsrgGe1DfOk3HR-"
            />
            <ArticleCard
              title="Building the design system as you fly it"
              description="I shared how new challenges forced me to become more flexible and pragmatic whilst abandoning some of the old mental models."
              imageUrl={imagePaths.articles['3']}
              tag="Talk"
              href="https://youtu.be/S5QyazMwvWg"
            />
            <ArticleCard
              title="Design direction as a step before design system"
              description="Long-lasting design systems need solid foundations. Sometimes this requires taking a step back."
              imageUrl={imagePaths.articles['4']}
              tag="Article"
              href="https://medium.com/hacking-talent/design-direction-as-a-step-before-design-system-89218ba79659"
            />
            <ArticleCard
              title="Tool tips: How our design team switched to Figma"
              description="It's increasingly clear that the tools we use shape the work we do in all sorts of ways, so picking the right tool for your task is absolutely critical."
              imageUrl={imagePaths.articles['5']}
              tag="Article"
              href="https://www.intercom.com/blog/design-team-switching-to-figma/"
            />
            <ArticleCard
              title="Working as a designer in a foreign language"
              description="The design industry speaks English. The articles we read, the tools we use, the conferences we attend: we all speak the same language when it comes to design."
              imageUrl={imagePaths.articles['6']}
              tag="Article"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
