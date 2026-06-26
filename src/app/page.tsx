'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { ExperienceItem } from '@/components/cards/ExperienceItem';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { WhyMeItem } from '@/components/cards/WhyMeItem';
import { ExperienceIcon } from '@/components/ui/ExperienceIcon';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { imagePaths } from '@/data/images';
import heroPortrait from '@/imports/DSC00131_Large_1.jpg';
import { withBasePath } from '@/utils/basePath';
import styles from './page.module.css';

export default function Home() {
  const [openWhyMeIndex, setOpenWhyMeIndex] = useState<number | null>(0);
  const [whyMeRef, isWhyMeVisible] = useIntersectionObserver({ threshold: 0.2 });

  const handleWhyMeToggle = (index: number) => {
    setOpenWhyMeIndex(openWhyMeIndex === index ? null : index);
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setScrollProgress(max > 0 ? el.scrollTop / max : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.homepage}>
      {/* Scroll progress hairline */}
      <div
        className={styles.scrollProgress}
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Structural column grid backdrop */}
      <div className={styles.gridBg} aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* Navigation - Outside hero for sticky behavior */}
      <NavBar className={styles.homepage__nav} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles.hero__content}>
            <span className={styles.hero__kicker}>
              <span className={styles.tk}>//</span> design director · foundations, devrev
            </span>
            <h1 className={styles.hero__name}>
              Andrey<br />Sundiev
            </h1>
            <p className={styles.hero__description}>
              I make design a force multiplier: design systems that cut cost, teams that ship, and an AI-first practice that keeps both moving.
            </p>
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
                variant="filled"
                size="xSmall"
                showArrow
                href="https://www.udrop.com/file/Oxm2/Andrei-Sundiev_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Button>
            </div>
          </div>
          <aside className={styles.hero__panel}>
            <div className={styles.hero__portrait}>
              <Image
                src={heroPortrait}
                alt="Andrey Sundiev"
                width={600}
                height={600}
                className={styles.hero__portraitImage}
                style={{ objectFit: 'cover' }}
              />
              <span className={styles.hero__portraitCap}>profile-photo.jpg</span>
            </div>
            <div className={styles.hero__spec}>
              <div className={styles.hero__specHead}>// profile.spec</div>
              <dl className={styles.hero__specList}>
                <dt>focus</dt><dd>Design leadership · AI</dd>
                <dt>tenure</dt><dd>13+ yrs in product design</dd>
                <dt>contact</dt><dd>inbox@asundiev.com</dd>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Why Me Section */}
      <section
        className={`${styles.whyMe} ${isWhyMeVisible ? styles.inView : ''}`}
        id="why-me"
        ref={whyMeRef as React.RefObject<HTMLElement>}
      >
        <div className={styles.whyMe__content}>
          <SectionHeader
            title="Why me"
            alignment="left"
            size="big"
            className={styles.whyMe__header}
          />
          <div className={styles.whyMe__list}>
            <WhyMeItem
              title="Spearheaded the AI-first transformation in Product & Design org"
              description="Integrated GenAI prototyping into the Product & Design workflows with 100% adoption. Built proof-of-concept prototypes to enable early customer validation for Sales. Initiated the work on the AI-first design system."
              caseStudyUrl="https://pitch.com/v/spearheading-the-ai-first-design-transformation-gsqedn"
              isOpen={openWhyMeIndex === 0}
              onToggle={() => handleWhyMeToggle(0)}
            />
            <WhyMeItem
              title="Player-coach with a diverse skillset"
              description="Drove the adoption of the structured discovery process and simplified the handover process with consistent templates for design files in Figma."
              caseStudyUrl="https://pitch.com/v/designer-enablement-dc69ey"
              isOpen={openWhyMeIndex === 1}
              onToggle={() => handleWhyMeToggle(1)}
            />
            <WhyMeItem
              title="Nurturing high-performance design teams for real impact"
              description="Rebuilt Marketing Design as a lean, high-impact function, boosting teams' customer satisfaction by +16% YoY (CSAT: 92%) and eNPS by +8% (eNPS: 92). Contributed to 6x increase in deal close rate and 2x increase in deal size by enabling Sales with templates and automations."
              caseStudyUrl="https://pitch.com/v/marketing-design-mwtw93"
              isOpen={openWhyMeIndex === 2}
              onToggle={() => handleWhyMeToggle(2)}
            />
            <WhyMeItem
              title="Strategic thinker, focused on tangible outcomes"
              description="Saved more than 33,845 engineering hours (~£5m in savings) to the business over 1.5 years by leading the implementation of a company-wide design system."
              caseStudyUrl="https://pitch.com/v/design-system-k92yxp"
              isOpen={openWhyMeIndex === 3}
              onToggle={() => handleWhyMeToggle(3)}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className={styles.portfolioPreview} id="portfolio">
        <div className={styles.portfolioPreview__content}>
          <SectionHeader
            title="Work"
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
              title="Increasing the user engagement and gaining high adoption with Custom Reporting at Intercom"
              tags={['2020', 'Product Designer']}
              imageUrl={imagePaths.portfolio['6']}
              href="https://pitch.com/v/custom-reporting-4qmvuw"
              variant="style05"
            />
          </div>
          <Button
            variant="outline"
            size="large"
            showArrow
            href={withBasePath('/portfolio')}
            className={styles.portfolioPreview__button}
          >
            All Case Studies
          </Button>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experience} id="experience">
        <div className={styles.experience__content}>
          <SectionHeader
            title="Experience"
            alignment="left"
            size="big"
            className={styles.experience__header}
          />
          <div className={styles.experience__list}>
              <ExperienceItem
                title="Design Director"
                company="DevRev"
                period="2026 — current"
                defaultOpen={true}
                description="Leading the Foundations division (~10 teams): a suite of cross-cutting services for the entire organisation"
                achievements={[
                  <>Established and made operational the design system team. <strong>Reducing the entropy and fragmentation in the product</strong>. Increasing the product velocity through tooling, systems and operations.</>,
                  <>Facilitating <strong>AI-first design culture</strong>.</>,
                ]}

              />
              <ExperienceItem
                title="Design Director"
                company="Beamery"
                period="2021 — 2026"
                defaultOpen={true}
                description="Led Product Design and Marketing Design functions. Spearheaded the AI-first transformation of the EPD department. Developed and propagated Product & Design strategy as a part of the Senior Leadership Team."
                achievements={[
                  "Inspired an active phase of work on the company's flagship conversational AI product.",
                  "Established design review process that de-risked the fast-paced design discovery and provided more transparency to the leadership.",
                  "Rebuilt Marketing Design as a lean, high-impact function, driving higher engagement and lead generation while cutting spend on critical assets. The team's customer satisfaction was boosted by +16% YoY (CSAT: 92%) and eNPS by +8% (eNPS: 92).",
                  "Contributed to 6x increase in deal close rate and 2x increase in deal size by enabling Sales with templates and automations.",
                  "Saved more than 33,845 engineering hours (~£5m in savings) to the business over 1.5 years by leading the implementation of a company-wide design system.",
                ]}

              />
              <ExperienceItem
                title="Product Designer"
                company="Intercom"
                period="2018 — 2021"
                defaultOpen={true}
                description="Drove the development of the design system, and brought it to high maturity and adoption with 50+ components, internal Figma plugins, and a Mac app."
                achievements={[
                  <><strong>Saved 40+ engineering days</strong> and achieved <strong>100% designer engagement</strong> during the pilot launch by transitioning the design system to a federated model.</>,
                  <>Enhanced the Reporting product, leading to a <strong>42% increase in report views</strong>, <strong>+3% increase of Weekly Active Users</strong> and zero customer churn.</>,
                  <>Launched several internal Figma plugins that <strong>streamlined designers&#39; workflows</strong> and <strong>increased design consistency</strong>. Developed <strong>onboarding processes</strong> for new designers and <strong>improved the design critique process</strong>.</>,
                ]}

              />
              <ExperienceItem
                title="Chief Designer"
                company="Mail.Ru Group"
                period="2016 — 2018"
                interactive={false}
                hideIcon
              />
              <ExperienceItem
                title="Product Design Lead"
                company="Yandex"
                period="2013 — 2016"
                interactive={false}
                hideIcon
              />
          </div>
          <Button
            variant="filled"
            size="xSmall"
            href="https://www.udrop.com/file/Oxm2/Andrei-Sundiev_CV.pdf"
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
              title="Ready for AI: design system for the agentic era"
              description="Showcasing how we build Arcade design system with DevRev's own Agentic AI."
              imageUrl={imagePaths.articles['8']}
              tag="Webinar"
              href="https://www.youtube.com/live/JIHJjy9iKYQ?si=0p7U1F4nOa2b6nu0"
            />
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
              imageUrl={imagePaths.articles['5']}
              tag="Article"
              href="https://medium.com/hacking-talent/design-direction-as-a-step-before-design-system-89218ba79659"
            />
            <ArticleCard
              title="Tool tips: How our design team switched to Figma"
              description="It's increasingly clear that the tools we use shape the work we do in all sorts of ways, so picking the right tool for your task is absolutely critical."
              imageUrl={imagePaths.articles['6']}
              tag="Article"
              href="https://www.intercom.com/blog/design-team-switching-to-figma/"
            />
            <ArticleCard
              title="Working as a designer in a foreign language"
              description="The design industry speaks English. The articles we read, the tools we use, the conferences we attend: we all speak the same language when it comes to design."
              imageUrl={imagePaths.articles['7']}
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
