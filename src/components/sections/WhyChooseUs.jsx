import React, { useState, useEffect, useRef } from 'react';
import { Layers, Globe, Cpu, Target, Award, TrendingUp } from 'lucide-react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const icons = [Layers, Globe, Cpu, Target, Award, TrendingUp];

export default function WhyChooseUs() {
    const [selectedPillar, setSelectedPillar] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef(null);

    const pillars = [
        {
            title: 'Integrated Expertise',
            short: 'Three divisions, one partner',
            desc: 'Three corporate divisions unified under one roof. We coordinate your digital education, staff sourcing, and financial reporting with clear, single-point accountability — saving time, cost, and coordination overhead.',
            stat: '3',
            statLabel: 'Expert Divisions'
        },
        {
            title: 'Global Reach, Local Insight',
            short: 'US · UK · Europe · GCC · India',
            desc: 'Active business hubs across the US, UK, Europe, GCC, and India. We understand local market nuances, regulatory landscapes, and cultural contexts that drive results in each geography.',
            stat: '5+',
            statLabel: 'Global Markets'
        },
        {
            title: 'Technology-Driven',
            short: 'AI, automation & digital platforms',
            desc: 'We leverage AI-powered candidate matching, automated learning platforms, and real-time financial dashboards to deliver faster, smarter, and more scalable solutions across all three divisions.',
            stat: 'AI',
            statLabel: 'Powered Delivery'
        },
        {
            title: 'Outcome-Focused',
            short: 'KPIs, milestones, measurable impact',
            desc: 'We measure success by outcomes, not activity. Every engagement is defined by clear KPIs, milestones, and measurable impact that drives your business forward — guaranteed.',
            stat: '100%',
            statLabel: 'Outcome Tracked'
        },
        {
            title: 'Qualified Professionals',
            short: 'CAs, CPAs, CIPD & certified designers',
            desc: 'Our team includes CIPD-qualified HR professionals, Chartered Accountants, CPAs, certified instructional designers, and senior talent consultants with decades of cross-industry experience.',
            stat: 'Big 4',
            statLabel: 'Grade Expertise'
        },
        {
            title: 'Scalable Solutions',
            short: 'Built to grow with your ambitions',
            desc: 'From start-ups building their first financial model to multinationals deploying training to 50,000 employees — our solutions are built to scale with your ambition without compromising quality.',
            stat: '50K+',
            statLabel: 'Learners Served'
        }
    ];

    const active = pillars[selectedPillar];
    const ActiveIcon = icons[selectedPillar];

    useEffect(() => {
        if (isHovered) {
            clearTimeout(timerRef.current);
            return;
        }
        timerRef.current = setTimeout(() => {
            setSelectedPillar(prev => (prev + 1) % pillars.length);
        }, 4500);
        return () => clearTimeout(timerRef.current);
    }, [selectedPillar, isHovered, pillars.length]);

    return (
        <>
            <style>{`
                .wcu-section {
                    padding: 96px 0;
                    font-family: var(--font-family);
                }

                .wcu-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 max(24px, 4vw);
                }

                .wcu-header {
                    text-align: center;
                    max-width: 720px;
                    margin: 0 auto 56px;
                }

                .wcu-headline {
                    font-size: clamp(34px, 4vw, 52px);
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 12px 0 18px;
                    letter-spacing: -0.03em;
                    line-height: 1.08;
                }

                .wcu-headline em {
                    font-style: normal;
                    color: var(--primary);
                }

                .wcu-intro {
                    font-size: 15px;
                    color: var(--text-secondary);
                    line-height: 1.75;
                }

                .wcu-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-bottom: 48px;
                }

                .wcu-card {
                    background: rgba(255, 255, 255, 0.16);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 22px;
                    padding: 28px;
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                    text-align: left;
                    font-family: var(--font-family);
                }

                .wcu-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 48px rgba(37, 99, 235, 0.16);
                    border-color: rgba(37, 99, 235, 0.28);
                }

                .wcu-card.active {
                    border-color: var(--primary);
                    box-shadow: 0 12px 36px rgba(37, 99, 235, 0.25);
                }

                .wcu-card-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    background: var(--primary-muted);
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 14px;
                }

                .wcu-card.active .wcu-card-icon {
                    background: var(--primary);
                    color: var(--primary-contrast);
                }

                .wcu-card-title {
                    font-size: 15px;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 4px;
                }

                .wcu-card-short {
                    font-size: 12px;
                    color: var(--text-secondary);
                }

                .wcu-detail {
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    padding: 42px;
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    gap: 32px;
                    align-items: center;
                }

                .wcu-detail-icon {
                    width: 72px;
                    height: 72px;
                    border-radius: 18px;
                    background: rgba(251, 191, 36, 0.14);
                    color: var(--gold-dark);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .wcu-detail-stat {
                    font-size: 48px;
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    color: var(--text-primary);
                    line-height: 1;
                }

                .wcu-detail-stat-lbl {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--text-on-light-muted);
                    margin-top: 4px;
                }

                .wcu-detail-title {
                    font-size: 22px;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 10px;
                    letter-spacing: -0.02em;
                }

                .wcu-detail-desc {
                    font-size: 15px;
                    color: var(--text-secondary);
                    line-height: 1.75;
                    max-width: 560px;
                }

                @media (max-width: 960px) {
                    .wcu-grid { grid-template-columns: repeat(2, 1fr); }
                    .wcu-detail {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    .wcu-detail-icon { margin: 0 auto; }
                }

                @media (max-width: 600px) {
                    .wcu-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <section
                className="wcu-section theme-section theme-section--dark"
                style={{ position: 'relative', overflow: 'hidden' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none', backgroundImage: "url('/assets/images/about/whyusbg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(1,2,10,0.35) 0%, rgba(1,2,10,0.65) 100%)' }} />
                </div>
                <div className="wcu-container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="wcu-header section-intro">
                        <span className="jf-overline-light">Why Partner With Us</span>
                        <h2 className="wcu-headline section-title">
                            The <em>JF</em> Difference.<br />
                            Measurable. Integrated. Global.
                        </h2>
                        <p className="wcu-intro section-copy">
                            The concept of integrated professional services means that different
                            aspects of your business — learning, talent, and finance — are
                            interconnected and influence each other. JF unifies all three under
                            one roof, contributing to your organisation's overall operational excellence.
                        </p>
                    </div>

                    <div className="wcu-grid">
                        {pillars.map((p, i) => {
                            const Icon = icons[i];
                            return (
                                <button
                                    key={i}
                                    type="button"
                                    className={`wcu-card ${selectedPillar === i ? 'active' : ''}`}
                                    onClick={() => setSelectedPillar(i)}
                                >
                                    <div className="wcu-card-icon"><Icon size={20} /></div>
                                    <div className="wcu-card-title">{p.title}</div>
                                    <div className="wcu-card-short">{p.short}</div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="wcu-detail">
                        <div className="wcu-detail-icon"><ActiveIcon size={32} /></div>
                        <div>
                            <h3 className="wcu-detail-title">{active.title}</h3>
                            <p className="wcu-detail-desc">{active.desc}</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div className="wcu-detail-stat">{active.stat}</div>
                            <div className="wcu-detail-stat-lbl">{active.statLabel}</div>
                            <button className="jf-btn-primary" style={{ marginTop: '20px' }} onClick={() => navigate('/contact')}>
                                Book a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
