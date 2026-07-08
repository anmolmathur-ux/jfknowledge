import React, { useState } from 'react';
import { Layers, Globe, Cpu, Target, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const icons = [Layers, Globe, Cpu, Target, Award, TrendingUp];

export default function WhyChooseUs() {
    const [selectedPillar, setSelectedPillar] = useState(0);

    const pillars = [
        {
            label: 'INTEGRATED',
            title: 'Expertise',
            short: 'Three divisions. One trusted partner.',
            desc: 'Three corporate divisions unified under one roof. We coordinate your digital education, staff sourcing, and financial reporting with clear, single-point accountability — saving time, cost, and coordination overhead.',
            stat: '3',
            statLabel: 'Expert Divisions',
            bullets: ['Unified Accountability', 'Cost Reduction', 'Streamlined Workflows'],
            tags: ['Learning', 'Talent'],
            bgImage: '/assets/images/about/card1.png',
            position: 'center center'
        },
        {
            label: 'GLOBAL REACH',
            title: 'Local Insight',
            short: 'US · UK · Europe · GCC · India',
            desc: 'Active business hubs across the US, UK, Europe, GCC, and India. We understand local market nuances, regulatory landscapes, and cultural contexts that drive results in each geography.',
            stat: '5+',
            statLabel: 'Global Markets',
            bullets: ['Cross-border Compliance', 'Local Market Nuances', 'Multi-currency Support'],
            tags: ['US/UK Hubs', 'GCC Network'],
            bgImage: '/assets/images/about/card2.png',
            position: 'top center'
        },
        {
            label: 'TECH-DRIVEN',
            title: 'Digital Delivery',
            short: 'AI, automation & corporate platforms.',
            desc: 'We leverage AI-powered candidate matching, automated learning platforms, and real-time financial dashboards to deliver faster, smarter, and more scalable solutions across all three divisions.',
            stat: 'AI',
            statLabel: 'Powered Delivery',
            bullets: ['Smart Candidate Matching', 'Automated L&D Pipelines', 'Real-time Dashboards'],
            tags: ['AI Sourcing', 'L&D Platforms'],
            bgImage: '/assets/images/about/card3.png',
            position: 'right center'
        },
        {
            label: 'OUTCOME-FOCUSED',
            title: 'Guarantees',
            short: 'KPIs, milestones, measurable impact.',
            desc: 'We measure success by outcomes, not activity. Every engagement is defined by clear KPIs, milestones, and measurable impact that drives your business forward — guaranteed.',
            stat: '100%',
            statLabel: 'Outcome Tracked',
            bullets: ['Guaranteed Milestones', 'Transparent Analytics', 'ROI-centric Models'],
            tags: ['KPI Matrices', 'ROI Metrics'],
            bgImage: '/assets/images/about/card4.png',
            position: '30% center'
        },
        {
            label: 'QUALIFIED',
            title: 'Professionals',
            short: 'CAs, CPAs, CIPD & certified experts.',
            desc: 'Our team includes CIPD-qualified HR professionals, Chartered Accountants, CPAs, certified instructional designers, and senior talent consultants with decades of cross-industry experience.',
            stat: 'Big 4',
            statLabel: 'Grade Expertise',
            bullets: ['Certified Strategists', 'Senior Advisory Pools', 'Cross-industry Experience'],
            tags: ['CAs & CPAs', 'CIPD Grade'],
            bgImage: '/assets/images/about/card5.png',
            position: '70% center'
        },
        {
            label: 'SCALABLE',
            title: 'Solutions',
            short: 'Built to grow with your corporate ambitions.',
            desc: 'From start-ups building their first financial model to multinationals deploying training to 50,000 employees — our solutions are built to scale with your ambition without compromising quality.',
            stat: '50K+',
            statLabel: 'Learners Served',
            bullets: ['Startup Agility', 'Enterprise Infrastructure', 'Global Deployments'],
            tags: ['Scale Engine', 'Enterprise Sizing'],
            bgImage: '/assets/images/about/card6.png',
            position: 'center bottom'
        }
    ];

    const active = pillars[selectedPillar];
    const ActiveIcon = icons[selectedPillar];

    return (
        <>
            <style>{`
                /* Structural Matrix Foundations */
                .wcu-section {
                    padding: 120px 0;
                    font-family: var(--font-family, sans-serif);
                    background-color: #040A14;
                    position: relative;
                    overflow: hidden;
                }

                /* Immersive Enterprise Section Background Image Layer */
                .wcu-bg-image {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    overflow: hidden;
                    pointer-events: none;
                    background-image: url('/assets/images/about/principlebg.jpg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    filter: brightness(.72) contrast(1.08) saturate(1.08);
                }

                /* Dark Gradient Overlay with Dynamic Blur */
                .wcu-bg-gradient {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(4,10,20,.45) 0%, rgba(6,12,28,.35) 35%, rgba(5,8,18,.60) 100%);
                    backdrop-filter: blur(2px);
                }

                /* Immersive Ambient Blur Background Clusters */
                .wcu-blob-blue {
                    position: absolute;
                    width: 650px;
                    height: 650px;
                    top: -150px;
                    right: -100px;
                    background: radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 1;
                }

                .wcu-blob-gold {
                    position: absolute;
                    width: 550px;
                    height: 550px;
                    bottom: -80px;
                    left: -120px;
                    background: radial-gradient(circle, rgba(253,181,21,0.07) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 1;
                }

                .wcu-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 max(24px, 4vw);
                    position: relative;
                    z-index: 2;
                }

                /* Modernized Split Dashboard Core Grid Layout */
                .wcu-split-hero {
                    display: grid;
                    grid-template-columns: 1.1fr 1fr;
                    gap: 64px;
                    align-items: start;
                    margin-bottom: 80px;
                }

                .wcu-hero-left {
                    display: flex;
                    flex-direction: column;
                }

                .wcu-eyebrow {
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: #60A5FA;
                    margin-bottom: 16px;
                }

                .wcu-headline {
                    font-size: 64px;
                    font-weight: 900;
                    line-height: 1.05;
                    letter-spacing: -0.04em;
                    color: #ffffff;
                    margin: 0 0 24px 0;
                }

                .wcu-headline em {
                    font-style: normal;
                    background: linear-gradient(135deg, #60A5FA, #2563EB);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .wcu-subheading {
                    font-size: 22px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.5;
                    margin-bottom: 32px;
                }

                .wcu-hero-cta {
                    align-self: flex-start;
                    background: linear-gradient(135deg, #FDB515, #FFCB45);
                    color: #040A14;
                    font-weight: 700;
                    font-size: 16px;
                    border: none;
                    box-shadow: 0 12px 30px rgba(253,181,21,.35);
                    padding: 18px 38px;
                    border-radius: 999px;
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .wcu-hero-cta:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 50px rgba(253,181,21,.45);
                }

                /* Premium Dynamic Feature Spotlight Component */
                .wcu-spotlight-card {
                    background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.03));
                    border: 1px solid rgba(255,255,255,.10);
                    box-shadow: 0 30px 80px rgba(0,0,0,.35);
                    backdrop-filter: blur(24px);
                    border-radius: 28px;
                    padding: 40px;
                    min-height: 440px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    overflow: hidden;
                }

                .wcu-transition-group {
                    animation: wcuFadeSlide 0.40s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                @keyframes wcuFadeSlide {
                    0% { opacity: 0; transform: translateY(12px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                .wcu-spotlight-title {
                    font-size: 28px;
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: -0.02em;
                    margin-bottom: 12px;
                }

                .wcu-spotlight-desc {
                    font-size: 16px;
                    color: rgba(255, 255, 255, 0.65);
                    line-height: 1.6;
                    margin: 0;
                }

                .wcu-spotlight-stat-box {
                    text-align: right;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    padding: 16px 24px;
                    border-radius: 18px;
                    min-width: 110px;
                }

                .wcu-spotlight-stat {
                    font-size: 44px;
                    font-weight: 900;
                    color: #60A5FA;
                    line-height: 1;
                    text-shadow: 0 0 20px rgba(96,165,250,0.3);
                }

                .wcu-spotlight-lbl {
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255, 255, 255, 0.4);
                    margin-top: 4px;
                }

                .wcu-bullet-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 14px;
                    padding-top: 24px;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    margin-top: auto;
                }

                .wcu-bullet-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: rgba(255, 255, 255, 0.85);
                    font-size: 14px;
                    font-weight: 500;
                }

                .wcu-bullet-icon {
                    color: #FDB515;
                    flex-shrink: 0;
                }

                /* 6-Card Dashboard Matrix Architecture Workspace */
                .wcu-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    margin-top: 32px;
                }

                /* Enterprise Dashboard Card Configurations */
                .wcu-card {
                    position: relative;
                    background: linear-gradient(180deg, rgba(18,26,45,.18), rgba(18,26,45,.35));
                    border: 1px solid rgba(255,255,255,.06);
                    border-radius: 26px;
                    padding: 42px 32px; 
                    cursor: pointer;
                    text-align: left;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: .45s cubic-bezier(.16,1,.3,1);
                    backdrop-filter: blur(12px);
                }

                /* Image Visibility Setup Layer */
                .wcu-card-bg-image {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    background-size: cover;
                    pointer-events: none;
                    mix-blend-mode: normal;
                    opacity: 0.55; 
                    filter: brightness(.85) contrast(1.08) saturate(1.1);
                    transition: opacity .45s ease, transform .45s ease, filter .45s ease;
                }

                /* Brand overlay tint layers with Vignette */
                .wcu-card-bg-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    pointer-events: none;
                    background: linear-gradient(180deg, rgba(25,55,130,.12), rgba(8,15,35,.35), rgba(4,10,20,.72));
                }

                /* Centralized edge fade vignette layer */
                .wcu-card-bg-overlay::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, transparent 25%, rgba(0,0,0,.22) 100%);
                }

                /* Dedicated Bottom Gradient Protection Mask Layer */
                .wcu-card-bg-overlay-fade {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    pointer-events: none;
                    background: linear-gradient(180deg, transparent 0%, rgba(4,10,20,.25) 45%, rgba(4,10,20,.82) 100%);
                }

                /* Floating Content Layer Wrapper */
                .wcu-card-content {
                    position: relative;
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: 100%;
                }

                /* Card Hover Mechanics */
                .wcu-card:hover, .wcu-card.active {
                    transform: translateY(-8px) scale(1.02);
                    border-color: rgba(96,165,250,0.4);
                    box-shadow: 0 35px 85px rgba(37,99,235,0.22);
                }

                .wcu-card:hover .wcu-card-bg-image,
                .wcu-card.active .wcu-card-bg-image {
                    opacity: .65;
                    transform: scale(1.08);
                    filter: brightness(1) contrast(1.15) saturate(1.15);
                }

                /* Premium Thin 2px Top Accent Gradient Strip (Hover only) */
                .wcu-card::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #60A5FA, #2563EB, transparent);
                    transform: scaleX(0);
                    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
                    z-index: 5;
                }

                .wcu-card:hover::before, .wcu-card.active::before {
                    transform: scaleX(1);
                }

                /* Soft Blue Glow Icon Container Settings */
                .wcu-card-icon-container {
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #2563EB, #1D4ED8);
                    box-shadow: 0 0 45px rgba(37,99,235,.45), 0 18px 40px rgba(37,99,235,.25);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    margin-bottom: 24px;
                    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
                }

                .wcu-card:hover .wcu-card-icon-container {
                    transform: scale(1.08) rotate(5deg);
                }

                /* Typography Setup */
                .wcu-card-label {
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #60A5FA;
                    letter-spacing: 0.12em;
                    margin-bottom: 4px;
                }

                .wcu-card-title {
                    font-size: 26px;
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: -0.02em;
                    line-height: 1.15;
                    margin-bottom: 8px;
                }

                .wcu-card-desc {
                    font-size: 15px;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.55;
                    margin-bottom: 28px;
                }

                /* Capability Chips Container Workspace */
                .wcu-pill-box {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: auto;
                }

                /* Modern Rectangle Pill Styling */
                .wcu-pill-chip {
                    font-size: 11px;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.9);
                    background: rgba(37, 99, 235, 0.22);
                    border: 1px solid rgba(96, 165, 250, 0.3);
                    padding: 5px 12px;
                    border-radius: 10px;
                    letter-spacing: 0.02em;
                    backdrop-filter: blur(4px);
                }

                /* Clean Edge Gradient Boundary Section Divider */
                .wcu-section-divider {
                    margin-top: 96px;
                    height: 1px;
                    width: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08) 20%, rgba(255, 255, 255, 0.08) 80%, transparent);
                }

                /* Fluid Structural Responsive Breakpoint Matrix */
                @media (max-width: 1024px) {
                    .wcu-split-hero { grid-template-columns: 1fr; gap: 40px; }
                    .wcu-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 680px) {
                    .wcu-headline { font-size: 46px; }
                    .wcu-grid { grid-template-columns: 1fr; }
                    .wcu-bullet-grid { grid-template-columns: 1fr; }
                    .wcu-spotlight-top-row { grid-template-columns: 1fr; }
                    .wcu-spotlight-stat-box { text-align: left; align-self: start; }
                }
            `}</style>

            <section className="wcu-section">
                <div className="wcu-bg-image">
                    <div className="wcu-bg-gradient" />
                </div>

                <div className="wcu-blob-blue" />
                <div className="wcu-blob-gold" />

                <div className="wcu-container">
                    
                    <div className="wcu-split-hero">
                        <div className="wcu-hero-left">
                            <span className="wcu-eyebrow">Empowering Talent. Enabling Growth. Elevating Business.</span>
                            <h2 className="wcu-headline">
                                The JF Knowledge <em>Difference.</em>
                            </h2>
                            <p className="wcu-subheading">
                                The concept of integrated professional services means that different
                                aspects of your business — learning, talent, and finance — are
                                interconnected and influence each other. JF unifies all three under
                                one roof, contributing to your organisation's overall operational excellence.
                            </p>
                            <button className="wcu-hero-cta" onClick={() => navigate('/contact')}>
                                Book a Consultation
                            </button>
                        </div>

                        <div className="wcu-spotlight-card">
                            <div className="wcu-transition-group" key={selectedPillar}>
                                <div className="wcu-spotlight-top-row">
                                    <div>
                                        <h3 className="wcu-spotlight-title">{active.label} {active.title}</h3>
                                        <p className="wcu-spotlight-desc">{active.desc}</p>
                                    </div>
                                    <div className="wcu-spotlight-stat-box">
                                        <div className="wcu-spotlight-stat">{active.stat}</div>
                                        <div className="wcu-spotlight-lbl">{active.statLabel}</div>
                                    </div>
                                </div>
                                
                                <div className="wcu-bullet-grid">
                                    {active.bullets.map((bullet, index) => (
                                        <div className="wcu-bullet-item" key={index}>
                                            <CheckCircle2 size={16} className="wcu-bullet-icon" />
                                            <span>{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wcu-grid">
                        {pillars.map((p, i) => {
                            const CardIcon = icons[i];
                            return (
                                <div
                                    key={i}
                                    className={`wcu-card ${selectedPillar === i ? 'active' : ''}`}
                                    onMouseEnter={() => setSelectedPillar(i)}
                                    onClick={() => setSelectedPillar(i)}
                                >
                                    <div 
                                        className="wcu-card-bg-image" 
                                        style={{ 
                                            backgroundImage: `url(${p.bgImage})`,
                                            backgroundPosition: p.position 
                                        }} 
                                    />
                                    <div className="wcu-card-bg-overlay" />
                                    <div className="wcu-card-bg-overlay-fade" />

                                    <div className="wcu-card-content">
                                        <div className="wcu-card-icon-container">
                                            <CardIcon size={20} />
                                        </div>

                                        <span className="wcu-card-label">{p.label}</span>
                                        <h4 className="wcu-card-title">{p.title}</h4>
                                        <p className="wcu-card-desc">{p.short}</p>

                                        <div className="wcu-pill-box">
                                            {p.tags.map((tag, tIdx) => (
                                                <span className="wcu-pill-chip" key={tIdx}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="wcu-section-divider" />
                </div>
            </section>
        </>
    );
}