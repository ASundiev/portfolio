'use client';

import React from 'react';
import {
    PresentationCanvas,
    CoverSlide,
    TwoColumnSlide,
    HeroWithContentSlide,
    GridSlide,
    SplitContentSlide,
    PresentationCard,
    HandwrittenAnnotation,
} from '@/components/presentation';
import { SpeedometerIcon, RobotIcon } from './icons/index';
import styles from './page.module.css';

/**
 * AI-First Design Transformation presentation
 * First slides for direction confirmation
 */
export default function AITransformationPresentation() {
    return (
        <PresentationCanvas slideCount={10}>
            {/* DD-1: Cover */}
            <CoverSlide
                id="slide-1"
                title="Spearheading the AI-First Design Transformation"
            />

            {/* DD-2: The company */}
            <TwoColumnSlide
                id="slide-2"
                breadcrumb="Spearheading the AI-First Design Transformation"
                heading={<span className="gradient">The company</span>}
                bullets={[
                    'Beamery is a B2B Enterprise scale-up in HR tech.',
                    'Enabling Fortune 500 companies to manage their end-to-end talent lifecycle with our AI-assisted tooling.',
                    '150+ employees, 8 designers.',
                ]}
                illustration={
                    <div className={styles.companyIllustration}>
                        <div className={styles.productMockup}>
                            <div className={styles.productLogo}>
                                <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                                    <rect width="120" height="40" rx="20" fill="white" />
                                    <text x="60" y="26" textAnchor="middle" fill="#111" fontSize="14" fontWeight="600">Ray</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                }
            />

            {/* DD-3: My role */}
            <TwoColumnSlide
                id="slide-3"
                breadcrumb="Spearheading the AI-First Design Transformation"
                heading={<span className="gradient">My role</span>}
                showGlow={false}
                alignCenter={true}
                bullets={[
                    'Hands-on player-coach for Product & Marketing design teams',
                    'Facilitator of the AI-first shift in the Product & Design team',
                    'Strategic enabler across the org',
                    'Brand guardian and the driver of brand evolution',
                ]}
                illustration={
                    <div className={styles.cardStack}>
                        <HandwrittenAnnotation
                            text="That's me"
                            arrow="curvedUpRight"
                            size={40}
                            className={styles.meAnnotation}
                        />
                        <PresentationCard>
                            <div className={styles.cardContent}>
                                <p className={styles.cardSubtitle}>My team</p>
                                <div className={styles.cardList}>
                                    <div className={styles.cardItem}>Product designers <span>x 6</span></div>
                                    <div className={styles.cardItem}>Marketing designers <span>x 2</span></div>
                                    <HandwrittenAnnotation underline="smooth">
                                        <div className={styles.cardItem}>Design Director</div>
                                    </HandwrittenAnnotation>
                                </div>
                            </div>
                        </PresentationCard>

                        <PresentationCard>
                            <div className={styles.cardContent}>
                                <p className={styles.cardSubtitle}>Contributors/Partners</p>
                                <div className={styles.cardList}>
                                    <div className={styles.cardItem}>VP of Product</div>
                                    <div className={styles.cardItem}>Director of Engineering</div>
                                    <div className={styles.cardItem}>CEO</div>
                                    <div className={styles.cardItem}>Product teams</div>
                                </div>
                            </div>
                        </PresentationCard>
                    </div>
                }
            />

            {/* DD-4: Challenges */}
            <GridSlide
                id="slide-4"
                breadcrumb="Spearheading the AI-First Design Transformation"
                heading="Challenges"
                items={[
                    {
                        icon: <SpeedometerIcon />,
                        title: "Resource constraints",
                        description: "Product teams were significantly under-resourced after multiple layoff cycles"
                    },
                    {
                        icon: <SpeedometerIcon />,
                        title: "Workflow fragmentation",
                        description: "Frequent changes in the org fragmented workflows and tools"
                    },
                    {
                        icon: <RobotIcon />,
                        title: "Outdated execution model",
                        description: "Our discovery processes were optimised for a pre-GenAI world, slowing down our pace"
                    },
                    {
                        icon: <RobotIcon />,
                        title: "AI-assisted development gap",
                        description: "Our robust design system wasn't yet optimised for AI-assisted execution, creating friction"
                    }
                ]}
            />
            {/* DD-5: Strategy */}
            <HeroWithContentSlide
                id="slide-5"
                breadcrumb="Spearheading the AI-First Design Transformation"
                heading={
                    <>
                        <span className="gradient">Strategy:</span>{' '}
                        reducing time to market through AI-enabled execution and systems thinking
                    </>
                }
                bullets={[
                    <>
                        I developed a two-pillar strategy to unlock <span className="bold-white">speed</span>, <span className="bold-white">clarity</span>, and <span className="bold-white">alignment</span> across Engineering, Product and Design
                    </>,
                ]}
                cards={[
                    {
                        icon: <SpeedometerIcon />,
                        title: 'Rapid discovery and validation',
                        description: 'Compress the time from idea to validated concept',
                    },
                    {
                        icon: <RobotIcon />,
                        title: 'AI-first DS extension',
                        description: "Ship faster and keep the system's integrity with less frontend resource",
                    },
                ]}
            />

            {/* DD-6: Rapid Discovery */}
            <SplitContentSlide
                id="slide-6"
                breadcrumb="Spearheading the AI-First Design Transformation"
                heading={
                    <>
                        <span className="gradient">Initiative:</span> Rapid discovery and validation
                    </>
                }
                subHeading="Problems"
                leftBullets={[
                    <>The <span className="bold-white">pace of the competition</span> in the B2B Enterprise SaaS has <span className="bold-white">increased dramatically</span></>,
                    <>Our product <span className="bold-white">discovery process is too slow</span> for the new AI-first world</>,
                ]}
                rightBullets={[
                    <>Sales needed <span className="bold-white">artefacts for quick validation</span> and <br className={styles.desktopOnly} /> early demos</>,
                    <>Teams <span className="bold-white">lacked a modern workflow</span> for GenAI-era <br className={styles.desktopOnly} /> prototyping</>,
                ]}
                illustration={
                    <div className={styles.illustrationWrapper}>
                        <HandwrittenAnnotation
                            text="Discovery should take days, not months"
                            arrow="curvedUpRight"
                            className={styles.discoveryAnnotation}
                        />
                    </div>
                }
            />

            {/* DD-7: The approach */}
            <TwoColumnSlide
                id="slide-7"
                breadcrumb="Spearheading the AI-First Design Transformation"
                heading={
                    <>
                        <span className="gradient">Initiative:</span> Rapid discovery and validation
                    </>
                }
                subHeading="The approach"
                bullets={[
                    <>Evaluated leading <span className="bold-white">GenAI prototyping tools</span> and <span className="bold-white">enabled PMs and Designers</span> to use our tool of choice with training, templates, and best practices.</>,
                    <>Built <span className="bold-white">high-fidelity proof-of-concept prototypes</span> myself to demonstrate the potential</>,
                ]}
                illustration={
                    <div className={styles.placeholderIllustration}>
                        <p>[Figma Make Mockup]</p>
                    </div>
                }
            >
                <div className={styles.statsRow}>
                    <PresentationCard variant="metric">
                        <p className={styles.statValue}>100%</p>
                        <p className={styles.statLabel}>ADOPTION</p>
                    </PresentationCard>
                    <PresentationCard variant="metric">
                        <p className={styles.statValue}>3x</p>
                        <p className={styles.statLabel}>TIME TO FIRST VALIDATION</p>
                    </PresentationCard>
                </div>
            </TwoColumnSlide>

            {/* DD-8: The outcomes */}
            <TwoColumnSlide
                id="slide-8"
                breadcrumb="Spearheading the AI-First Design Transformation"
                heading={
                    <>
                        <span className="gradient">Initiative:</span> Rapid discovery and validation
                    </>
                }
                subHeading="The outcomes"
                bullets={[
                    <>AI prototypes have <span className="bold-white">become core Sales assets</span> for early validation.</>,
                    <>The POC prototype I’ve built <span className="bold-white">inspired the active phase of product development</span> for our new AI product.</>,
                ]}
                illustration={
                    <div className={styles.placeholderIllustration}>
                        <p>[Ray Chat Mockup]</p>
                    </div>
                }
            />

            {/* DD-9: Caveat */}
            <TwoColumnSlide
                id="slide-9"
                breadcrumb="Spearheading the AI-First Design Transformation"
                heading={
                    <>
                        <span className="gradient">Caveat:</span> Speed vs quality tension
                    </>
                }
                subHeading="The risks"
                bullets={[
                    <>Stronger <span className="bold-white">push for speed</span> from leadership</>,
                    <>Rapid prototypes open <span className="bold-white">flood gates to uncontrolled decision-making</span></>,
                    <><span className="bold-white">Fragmentation</span> becomes worse</>,
                ]}
                illustration={
                    <div className={styles.chaosIllustration}>
                        <div className={styles.chaosText}>Speed</div>
                        <div className={styles.notEqualSign}>≠</div>
                        <div className={styles.chaosBubble}>CHAOS</div>
                    </div>
                }
            />

            {/* DD-21: Impact/Summary */}
            <GridSlide
                id="slide-10"
                breadcrumb="Impact"
                heading="The overall impact of the new strategy"
                columns={1}
                items={[
                    {
                        icon: <SpeedometerIcon />,
                        title: "Embrace the change of pace",
                        description: "Speed and quality are no longer mutually exclusive"
                    },
                    {
                        icon: <SpeedometerIcon />,
                        title: "No excuse for skipping steps",
                        description: "Speed doesn't imply chaos"
                    },
                    {
                        icon: <RobotIcon />,
                        title: "Make yourself indispensable",
                        description: "Step beyond the constraints of your role to bring more value"
                    }
                ]}
            />
        </PresentationCanvas>
    );
}
