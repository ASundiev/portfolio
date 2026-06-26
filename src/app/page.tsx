'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '@/components/layout/Footer';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperienceItem } from '@/components/cards/ExperienceItem';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { WhyMeItem } from '@/components/cards/WhyMeItem';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { imagePaths } from '@/data/images';
import { withBasePath } from '@/utils/basePath';
import styles from './page.module.css';

/* Project rail data — all case studies from /portfolio */
const projects = [
  {
    title: 'Spearheading the AI-first design transformation',
    year: '2025',
    role: 'Head of Design / Design Director',
    href: 'https://pitch.com/v/spearheading-the-ai-first-design-transformation-gsqedn',
    src: imagePaths.portfolio['1'],
  },
  {
    title: 'Setting up the design team for success and achieving 2x increase in productivity',
    year: '2023—2024',
    role: 'Design Manager',
    href: 'https://pitch.com/v/marketing-design-mwtw93',
    src: imagePaths.portfolio['2'],
  },
  {
    title: 'Facilitating consistent design process and smooth handover',
    year: '2023',
    role: 'Design Manager',
    href: 'https://pitch.com/v/designer-enablement-dc69ey',
    src: imagePaths.portfolio['5'],
  },
  {
    title: 'Supporting the company’s strategic goals and saving over £5m with a robust design system',
    year: '2021—2023',
    role: 'Design Lead, Acting Product Manager',
    href: 'https://pitch.com/v/design-system-k92yxp',
    src: imagePaths.portfolio['3'],
  },
  {
    title: 'Defining design direction for Beamery products and unblocking design system in a rapid design sprint',
    year: '2021',
    role: 'Design Lead',
    href: 'https://pitch.com/v/design-direction-s7mkjy',
    src: imagePaths.portfolio['4'],
  },
  {
    title: 'Increasing the user engagement and gaining high adoption with Custom Reporting at Intercom',
    year: '2020',
    role: 'Product Designer',
    href: 'https://pitch.com/v/custom-reporting-4qmvuw',
    src: imagePaths.portfolio['6'],
  },
];

/* Hero rail — a highlight of 3 featured case studies (full list lives on /portfolio) */
const railItems = [projects[0], projects[1], projects[5]];

function RailMedia({ src, alt }: { src: string; alt: string }) {
  const ext = src.split('.').pop()?.toLowerCase();
  if (ext === 'mp4') {
    return (
      <video
        className={styles.rail__media}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
      />
    );
  }
  // png / jpg / gif
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={styles.rail__media} src={src} alt={alt} loading="lazy" />;
}

export default function Home() {
  const [openWhyMeIndex, setOpenWhyMeIndex] = useState<number | null>(0);
  const [whyMeRef, isWhyMeVisible] = useIntersectionObserver({ threshold: 0.2 });

  const handleWhyMeToggle = (index: number) => {
    setOpenWhyMeIndex(openWhyMeIndex === index ? null : index);
  };

  /* Horizontal rail — vertical scroll drives the rail sideways while the landing is pinned,
     then releases naturally into the vertical content below. Real scroll, no hijack library. */
  const landingRef = useRef<HTMLElement>(null);
  const railWrapRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const measure = () => {
      const desktop = window.matchMedia('(min-width: 1024px)').matches;
      setIsDesktop(desktop);
      if (!desktop || !railRef.current || !railWrapRef.current) {
        setTravel(0);
        return;
      }
      const railW = railRef.current.scrollWidth;
      const wrapW = railWrapRef.current.clientWidth;
      setTravel(Math.max(0, railW - wrapW));
    };

    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    const t1 = setTimeout(measure, 600);
    const t2 = setTimeout(measure, 1600);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('load', measure);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    if (!isDesktop || travel === 0) {
      rail.style.transform = '';
      return;
    }
    const onScroll = () => {
      const landing = landingRef.current;
      if (!landing) return;
      const scrolled = window.scrollY - landing.offsetTop;
      const progress = Math.min(Math.max(scrolled / travel, 0), 1);
      rail.style.transform = `translate3d(${-progress * travel}px, 0, 0)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [travel, isDesktop]);

  return (
    <div className={styles.homepage}>
      {/* Landing — fixed corner chrome + central horizontal rail */}
      <section
        className={styles.landing}
        ref={landingRef}
        style={{ height: isDesktop && travel > 0 ? `calc(100vh + ${travel}px)` : undefined }}
      >
        <div className={styles.landing__sticky}>
          {/* Top row */}
          <div className={styles.landing__top}>
            <div className={styles.cornerLabel}>
              <span className={styles.cornerLabel__strong}>Andrey Sundiev</span>
              <span>Design Director — Foundations, DevRev</span>
            </div>
            <nav className={styles.landing__nav}>
              <a href={withBasePath('/portfolio')}>Work</a>
              <a href="#why-me">Why me</a>
              <a href="#experience">Experience</a>
              <a href="#articles">Articles</a>
              <a href={withBasePath('/projects')}>Projects</a>
            </nav>
            <MobileMenu />
          </div>

          {/* Rail */}
          <div className={styles.landing__railWrap} ref={railWrapRef}>
            <div className={styles.rail} ref={railRef}>
              {railItems.map((p, i) => (
                <a
                  key={`${p.href}-${i}`}
                  className={styles.rail__item}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} — view case study`}
                >
                  <RailMedia src={p.src} alt={p.title} />
                  <span className={styles.rail__title}>{p.title} ↗</span>
                  <span className={styles.rail__tag}>
                    {p.year} — {p.role}
                  </span>
                </a>
              ))}
            </div>
            <span className={styles.landing__hint}>Scroll →</span>
          </div>

          {/* Bottom row */}
          <div className={styles.landing__bottom}>
            <h1 className={styles.landing__statement}>
              I make design a force multiplier: design systems that cut cost, teams that
              ship, and an AI-first practice that keeps both moving.
            </h1>
            <div className={styles.landing__contact}>
              <a
                href="https://www.linkedin.com/in/asundiev"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:inbox@asundiev.com">inbox@asundiev.com</a>
              <a
                href="https://www.udrop.com/file/Oxm2/Andrei-Sundiev_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV ↗
              </a>
            </div>
          </div>
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
              defaultOpen={false}
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
              defaultOpen={false}
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
            alignment="left"
            size="big"
            className={styles.articles__header}
          />
          <div className={styles.articles__rail}>
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
