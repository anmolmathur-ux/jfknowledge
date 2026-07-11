import React, { useState } from 'react';
import { Layers, Globe, Cpu, Target, Award, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

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
            statLabel: 'DIVISIONS',
            bullets: ['Unified Accountability', 'Cost Reduction', 'Streamlined Workflows', 'Centralized Reporting'],
            tags: ['Learning', 'Talent'],
            bgImage: '/assets/images/about/card1.png',
            position: 'center center',
            footerText: 'Trusted by 150+ Enterprises'
        },
        {
            label: 'GLOBAL REACH',
            title: 'Local Insight',
            short: 'US · UK · Europe · GCC · India',
            desc: 'Active business hubs across the US, UK, Europe, GCC, and India. We understand local market nuances, regulatory landscapes, and cultural contexts that drive results in each geography.',
            stat: '5+',
            statLabel: 'MARKETS',
            bullets: ['Cross-border Compliance', 'Local Market Nuances', 'Multi-currency Support', 'Global Delivery Network'],
            tags: ['US/UK Hubs', 'GCC Network'],
            bgImage: '/assets/images/about/card2.png',
            position: 'top center',
            footerText: 'Global Operational Readiness'
        },
        {
            label: 'TECH-DRIVEN',
            title: 'Digital Delivery',
            short: 'AI, automation & corporate platforms.',
            desc: 'We leverage AI-powered candidate matching, automated learning platforms, and real-time financial dashboards to deliver faster, smarter, and more scalable solutions across all three divisions.',
            stat: 'AI',
            statLabel: 'POWERED',
            bullets: ['Smart Candidate Matching', 'Automated L&D Pipelines', 'Real-time Dashboards', 'Predictive Resource Models'],
            tags: ['AI Sourcing', 'L&D Platforms'],
            bgImage: '/assets/images/about/card3.png',
            position: 'right center',
            footerText: 'Next-Gen Enterprise Infrastructure'
        },
        {
            label: 'OUTCOME-FOCUSED',
            title: 'Guarantees',
            short: 'KPIs, milestones, measurable impact.',
            desc: 'We measure success by outcomes, not activity. Every engagement is defined by clear KPIs, milestones, and measurable impact that drives your business forward — guaranteed.',
            stat: '100%',
            statLabel: 'OUTCOME TRACKED',
            bullets: ['Guaranteed Milestones', 'Transparent Analytics', 'ROI-centric Models', 'SLA Alignment Assurance'],
            tags: ['KPI Matrices', 'ROI Metrics'],
            bgImage: '/assets/images/about/card4.png',
            position: '30% center',
            footerText: 'Milestone Assurance Architecture'
        },
        {
            label: 'QUALIFIED',
            title: 'Professionals',
            short: 'CAs, CPAs, CIPD & certified experts.',
            desc: 'Our team includes CIPD-qualified HR professionals, Chartered Accountants, CPAs, certified instructional designers, and senior talent consultants with decades of cross-industry experience.',
            stat: 'BIG 4',
            statLabel: 'GRADE EXPERTISE',
            bullets: ['Certified Strategists', 'Senior Advisory Pools', 'Cross-industry Experience', 'Rigorous Compliance Auditing'],
            tags: ['CAs & CPAs', 'CIPD Grade'],
            bgImage: '/assets/images/about/card5.png',
            position: '70% center',
            footerText: 'Industry Certified Subject Experts'
        },
        {
            label: 'SCALABLE',
            title: 'Solutions',
            short: 'Built to grow with your corporate ambitions.',
            desc: 'From start-ups building their first financial model to multinationals deploying training to 50,000 employees — our solutions are built to scale with your ambition without compromising quality.',
            stat: '50K+',
            statLabel: 'LEARNERS SERVED',
            bullets: ['Startup Agility Matrix', 'Enterprise Infrastructure', 'Global Scalability Deployments', 'On-Demand Elastic Sizing'],
            tags: ['Scale Engine', 'Enterprise Sizing'],
            bgImage: '/assets/images/about/card6.png',
            position: 'center bottom',
            footerText: 'Built for Fortune 500 Sizing'
        }
    ];

    const active = pillars[selectedPillar];
    const paddedIndex = String(selectedPillar + 1).padStart(2, '0');

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
                    background-image: url('/assets/images/about/whyus3.jpg');
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
                    grid-template-columns: 1fr 1.10fr;
                    gap: 56px;
                    align-items: center;
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
                    font-size: 20px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.55;
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

                /* --- 💎 PREMIUM SPOTLIGHT CARD RE-ENGINEERING --- */
                .wcu-spotlight-card {
                    position: relative;
                    overflow: hidden;
                    background: 
                        radial-gradient(circle at top right, rgba(37,99,235,.22), transparent 45%),
                        linear-gradient(180deg, rgba(16,23,40,.98), rgba(10,17,33,.98));
                    border: 1px solid rgba(255,255,255,.08);
                    border-radius: 30px;
                    box-shadow: 
                        0 30px 70px rgba(0,0,0,.45),
                        inset 0 1px rgba(255,255,255,.05);
                    backdrop-filter: blur(30px);
                    padding: 42px;
                    min-height: 460px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                /* Depth Glow Decoration */
                .wcu-spotlight-card::before {
                    content: "";
                    position: absolute;
                    top: -120px;
                    right: -80px;
                    width: 280px;
                    height: 280px;
                    background: radial-gradient(circle, rgba(59,130,246,.35), transparent 70%);
                    filter: blur(20px);
                    pointer-events: none;
                    z-index: 1;
                }

                /* Floating Ambient Background Digit */
                .wcu-spotlight-card::after {
                    content: "${paddedIndex}";
                    position: absolute;
                    right: 25px;
                    bottom: -20px;
                    font-size: 140px;
                    font-weight: 900;
                    color: rgba(255, 255, 255, 0.025);
                    pointer-events: none;
                    line-height: 1;
                    z-index: 0;
                }

                .wcu-transition-group {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: 100%;
                    animation: wcuFadeSlide 0.40s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                @keyframes wcuFadeSlide {
                    0% { opacity: 0; transform: translateY(12px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                /* Layout Upgrades */
                .wcu-spotlight-top-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 30px;
                    padding-bottom: 28px;
                    border-bottom: 1px solid rgba(255,255,255,.06);
                    margin-bottom: 30px;
                }

                .wcu-spotlight-title {
                    font-size: 42px;
                    font-weight: 800;
                    line-height: 1.05;
                    letter-spacing: -1px;
                    color: white;
                    margin-bottom: 14px;
                }

                .wcu-spotlight-desc {
                    font-size: 18px;
                    line-height: 1.7;
                    color: rgba(255,255,255,.72);
                    max-width: 560px;
                    margin: 0;
                }

                /* Glowing Stat Box Pill */
                .wcu-spotlight-stat-box {
                    background: linear-gradient(135deg, #2563eb, #4f8cff);
                    padding: 16px 22px;
                    border-radius: 18px;
                    min-width: 120px;
                    text-align: center;
                    box-shadow: 0 15px 40px rgba(37,99,235,.35);
                    flex-shrink: 0;
                }

                .wcu-spotlight-stat {
                    font-size: 36px;
                    font-weight: 800;
                    color: white;
                    line-height: 1;
                }

                .wcu-spotlight-lbl {
                    margin-top: 6px;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: white;
                    opacity: .85;
                    line-height: 1.2;
                }

                /* Structured 2-Column Bullet Layout */
                .wcu-bullet-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 18px;
                }

                .wcu-bullet-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 18px;
                    border-radius: 16px;
                    background: rgba(255,255,255,.03);
                    border: 1px solid rgba(255,255,255,.05);
                    transition: .35s ease;
                }

                .wcu-bullet-item:hover {
                    background: rgba(37,99,235,.12);
                    border-color: #3b82f6;
                    transform: translateY(-3px);
                }

                .wcu-bullet-item span {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 15px;
                    font-weight: 500;
                }

                .wcu-bullet-icon {
                    color: #4ea7ff;
                    padding: 8px;
                    background: rgba(78,167,255,.12);
                    border-radius: 50%;
                    min-width: 34px;
                    height: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                }

                /* Bottom Interactive CTA Strip */
                .wcu-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 28px;
                    margin-top: 30px;
                    border-top: 1px solid rgba(255,255,255,.06);
                }

                .wcu-footer-badge {
                    font-size: 14px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.45);
                    letter-spacing: 0.02em;
                }

                .wcu-footer-action {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #60A5FA;
                    cursor: pointer;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .wcu-footer-action:hover {
                    color: #93C5FD;
                    transform: translateX(4px);
                }

                /* 6-Card Grid Matrices */
                .wcu-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    margin-top: 32px;
                }

                .wcu-card {
                    position: relative;
                    height: 460px;
                    background: linear-gradient(180deg, rgba(18,26,45,.18), rgba(18,26,45,.35));
                    border: 1px solid rgba(255,255,255,.06);
                    border-radius: 26px;
                    padding: 34px; 
                    cursor: pointer;
                    text-align: left;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    transition: all .45s cubic-bezier(.16,1,.3,1);
                    backdrop-filter: blur(12px);
                }

                .wcu-card-bg-image {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    background-size: cover;
                    pointer-events: none;
                    opacity: 1;
                    filter: brightness(.95) contrast(1.08) saturate(1.1);
                    transition: all .45s cubic-bezier(.16,1,.3,1);
                }

                .wcu-card-bg-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    pointer-events: none;
                    background: linear-gradient(180deg, rgba(0,0,0,.05) 0%, rgba(0,0,0,.15) 35%, rgba(4,10,20,.92) 100%);
                }

                .wcu-card-bg-overlay-fade {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    pointer-events: none;
                    background: radial-gradient(circle at bottom, rgba(37,99,235,.28), transparent 70%);
                }

                .wcu-card-content {
                    position: relative;
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

                .wcu-card-stat-badge {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    z-index: 4;
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(16px);
                    padding: 10px 16px;
                    border-radius: 16px;
                    text-align: right;
                    pointer-events: none;
                    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
                }

                .wcu-card:hover .wcu-card-stat-badge {
                    transform: translateY(-2px);
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(96, 165, 250, 0.3);
                }

                .wcu-card-stat-value {
                    font-size: 22px;
                    font-weight: 900;
                    color: #ffffff;
                    line-height: 1;
                }

                .wcu-card-stat-label {
                    font-size: 9px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255, 255, 255, 0.5);
                    margin-top: 2px;
                }

                .wcu-card:hover, .wcu-card.active {
                    transform: translateY(-12px) scale(1.02);
                    border-color: rgba(96,165,250,0.4);
                    box-shadow: 0 40px 90px rgba(37,99,235,.28);
                }

                .wcu-card:hover .wcu-card-bg-image,
                .wcu-card.active .wcu-card-bg-image {
                    transform: scale(1.1);
                    filter: brightness(1.15) contrast(1.2) saturate(1.2);
                }

                .wcu-card::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    padding: 1px;
                    border-radius: 26px;
                    background: linear-gradient(135deg, #2563EB, #60A5FA, transparent);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity .4s ease;
                    z-index: 5;
                }

                .wcu-card:hover::after, .wcu-card.active::after {
                    opacity: 1;
                }

                .wcu-card-label {
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #5EA3FF;
                    letter-spacing: 0.18em;
                    margin-bottom: 6px;
                }

                .wcu-card-title {
                    font-size: 42px;
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -0.03em;
                    line-height: 1;
                    margin-bottom: 12px;
                }

                .wcu-card-desc {
                    font-size: 15px;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.55;
                    margin-bottom: 28px;
                }

                .wcu-pill-box {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: auto;
                }

                .wcu-pill-chip {
                    padding: 10px 18px;
                    background: rgba(255,255,255,.12);
                    border: 1px solid rgba(255,255,255,.18);
                    backdrop-filter: blur(12px);
                    border-radius: 999px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #ffffff;
                }

                .wcu-section-divider {
                    margin-top: 96px;
                    height: 1px;
                    width: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08) 20%, rgba(255, 255, 255, 0.08) 80%, transparent);
                }

                /* Fluid Structural Responsive Matrix */
                @media (max-width: 1140px) {
                    .wcu-split-hero { grid-template-columns: 1fr; gap: 48px; }
                    .wcu-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .wcu-headline { font-size: 46px; }
                    .wcu-grid { grid-template-columns: 1fr; }
                    .wcu-bullet-grid { grid-template-columns: 1fr; }
                    .wcu-spotlight-top-row { gap: 20px; }
                    .wcu-spotlight-title { font-size: 32px; }
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

                        {/* --- 🏁 COMPREHENSIVELY UPGRADED SPOTLIGHT HERO PANEL --- */}
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
                                            <div className="wcu-bullet-icon">
                                                <CheckCircle2 size={16} strokeWidth={2.5} />
                                            </div>
                                            <span>{bullet}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="wcu-card-footer">
                                    <div className="wcu-footer-badge">{active.footerText}</div>
                                    <div className="wcu-footer-action" onClick={() => navigate('/contact')}>
                                        <span>Learn More</span>
                                        <ArrowRight size={14} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wcu-grid">
                        {pillars.map((p, i) => {
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

                                    <div className="wcu-card-stat-badge">
                                        <div className="wcu-card-stat-value">{p.stat}</div>
                                        <div className="wcu-card-stat-label">{p.statLabel.toLowerCase()}</div>
                                    </div>

                                    <div className="wcu-card-content">
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