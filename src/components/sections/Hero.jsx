import React, { useState } from 'react';

export default function Hero() {
    const [activeTab, setActiveTab] = useState(0);

    const pillars = [
        {
            label: 'E-Learning Solutions',
            title: 'Digital Learning Platforms',
            stat: '94%',
            statLabel: 'Completion Rate',
            tagline: 'Transform complex institutional knowledge into engaging, bite-sized digital courses for teams anywhere on Earth.',
            link: '/e-learning',
            linkLabel: 'Explore Digital Learning',
            color: '#22d3ee'
        },
        {
            label: 'Recruitment & Staffing',
            title: 'Global Talent Matching',
            stat: '500+',
            statLabel: 'Talents Placed',
            tagline: 'Connect with a curated network of pre-vetted, elite international professionals ready to scale your operational footprint.',
            link: '/recruitment-staffing',
            linkLabel: 'Find Global Talent',
            color: '#a855f7'
        },
        {
            label: 'Financial Consultancy',
            title: 'Strategic Capital Growth',
            stat: '100%',
            statLabel: 'Tax Compliance',
            tagline: 'Navigate complex global accounting standards with expert-led corporate bookkeeping and fractional CFO services.',
            link: '/financial-consultancy',
            linkLabel: 'Consult Financial Experts',
            color: '#34d399'
        }
    ];

    const navigate = (href) => {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

                .hero-tab-nav {
                    display: flex;
                    gap: 6px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    padding: 5px;
                    border-radius: 12px;
                    margin-bottom: 32px;
                    position: relative;
                }
                .hero-tab-btn {
                    flex: 1;
                    padding: 10px 16px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 600;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    white-space: nowrap;
                    background: transparent;
                    color: rgba(255, 255, 255, 0.45);
                    position: relative;
                    z-index: 2;
                }
                .hero-tab-btn:hover {
                    color: rgba(255, 255, 255, 0.9);
                }
                .hero-tab-btn.active {
                    color: #ffffff;
                }
                .tab-slider {
                    position: absolute;
                    top: 5px;
                    bottom: 5px;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    z-index: 1;
                }
                .hero-cta-fill {
                    height: 52px;
                    padding: 0 28px;
                    border-radius: 10px;
                    color: #04060b;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: none;
                }
                .hero-cta-fill:hover {
                    filter: brightness(1.1);
                }
                .hero-cta-outline {
                    height: 52px;
                    padding: 0 26px;
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: rgba(255, 255, 255, 0.85);
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    backdrop-filter: blur(8px);
                }
                .hero-cta-outline:hover {
                    background: rgba(255, 255, 255, 0.07);
                    border-color: rgba(255, 255, 255, 0.2);
                    color: #ffffff;
                }
                .hero-pill-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 14px;
                    font-weight: 600;
                    text-decoration: none;
                    margin-top: 24px;
                    cursor: pointer;
                    background: none;
                    border: none;
                    padding: 0;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }
                .hero-pill-link:hover { opacity: 0.9; }
                
                .metric-ring-container {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ring-bg { fill: none; stroke: rgba(255, 255, 255, 0.05); stroke-width: 6; }
                .ring-glow {
                    fill: none;
                    stroke-width: 6;
                    stroke-linecap: round;
                    transform: rotate(-90deg);
                    transform-origin: 50% 50%;
                }
                .brand-logo-strip svg {
                    opacity: 0.2;
                    filter: grayscale(100%);
                }
            `}</style>

            <section style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '140px 0 60px 0',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                overflow: 'hidden',
                backgroundColor: '#04060b',

                /* Modified to blend a 10% opacity black gradient over the background image */
                backgroundImage: "linear-gradient(rgba(4, 6, 11, 0.1), rgba(4, 6, 11, 0.1)), url('/assets/images/about/herobg2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 1
            }}>

                {/* --- CONTENT AREA --- */}
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', width: '100%', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center', zIndex: 5, flex: 1 }}>

                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Dynamic Tag Pill */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.07)',
                            borderRadius: '999px',
                            padding: '6px 14px',
                            width: 'fit-content',
                            marginBottom: '28px',
                            backdropFilter: 'blur(4px)'
                        }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: pillars[activeTab].color, display: 'inline-block' }} />
                            <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.65)' }}>
                                GLOBAL PROFESSIONAL NETWORK
                            </span>
                        </div>

                        {/* Crisp Bold Typography with Trendy Multi-color Gradient Line */}
                        <h1 style={{
                            margin: '0 0 24px 0',
                            fontSize: 'clamp(42px, 4.5vw, 62px)',
                            fontWeight: '800',
                            lineHeight: 1.12,
                            letterSpacing: '-0.03em',
                            color: '#ffffff'
                        }}>
                            Empowering Talent.<br />
                            <span style={{
                                background: 'linear-gradient(90deg, #9747FF 0%, #22d3ee 50%, #34d399 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                display: 'inline-block'
                            }}>
                                Elevating Business.
                            </span>
                        </h1>

                        {/* Highly Legible Body Prose */}
                        <p style={{
                            margin: '0 0 40px 0',
                            fontSize: '16px',
                            color: 'rgba(250, 250, 250, 0.83)',
                            lineHeight: 1.75,
                            maxWidth: '510px'
                        }}>
                            We are your single, trusted international partner providing top-tier solutions in digital corporate education, flexible staffing, and expert financial management.
                        </p>

                        {/* Action Buttons Container */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <button className="hero-cta-fill" style={{ background: pillars[activeTab].color }} onClick={() => navigate('/contact')}>
                                Get Started Now
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                            <button className="hero-cta-outline" onClick={() => navigate('/overview')}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: pillars[activeTab].color }}>
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                Watch Overview
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ background: 'rgba(10, 14, 23, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', backdropFilter: 'blur(24px)', padding: '36px', boxShadow: '0 30px 70px rgba(0,0,0,0.6)' }}>
                        <p style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 16px 4px' }}>CLICK TO EXPLORE OUR WORK:</p>

                        <div className="hero-tab-nav">
                            <div className="tab-slider" style={{
                                width: `calc((100% - 10px) / 3)`,
                                left: `calc(5px + (${activeTab} * (100% - 10px) / 3))`
                            }} />
                            {pillars.map((p, i) => (
                                <button key={i} className={`hero-tab-btn ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                                    {p.label}
                                </button>
                            ))}
                        </div>

                        <div style={{ minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '24px' }}>
                                <div className="metric-ring-container">
                                    <svg width="84" height="84" viewBox="0 0 60 60">
                                        <circle className="ring-bg" cx="30" cy="30" r="26" />
                                        <circle className="ring-glow" cx="30" cy="30" r="26"
                                            stroke={pillars[activeTab].color}
                                            style={{
                                                strokeDasharray: '163.36',
                                                strokeDashoffset: activeTab === 0 ? '9.8' : activeTab === 1 ? '35.5' : '0'
                                            }}
                                        />
                                    </svg>
                                    <span style={{ position: 'absolute', fontSize: '19px', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                                        {pillars[activeTab].stat}
                                    </span>
                                </div>

                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: '700', color: pillars[activeTab].color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                                        {pillars[activeTab].statLabel}
                                    </div>
                                    <div style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.01em' }}>
                                        {pillars[activeTab].title}
                                    </div>
                                </div>
                            </div>

                            <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 100%)', marginBottom: '20px' }} />

                            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.65, margin: '0' }}>
                                {pillars[activeTab].tagline}
                            </p>

                            <div>
                                <button className="hero-pill-link" style={{ color: pillars[activeTab].color }} onClick={() => navigate(pillars[activeTab].link)}>
                                    {pillars[activeTab].linkLabel}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Corporate Strip */}
                <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '40px', marginTop: '60px' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>TRUSTED BY ENTERPRISES GLOBALLY</span>
                        <div className="brand-logo-strip" style={{ display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
                            <svg width="85" height="24" viewBox="0 0 100 28" fill="currentColor" style={{ color: '#fff' }}><path d="M10 5h12v3H10zm0 7h16v3H10zm0 7h10v3H10z" /></svg>
                            <svg width="75" height="22" viewBox="0 0 100 28" fill="currentColor" style={{ color: '#fff' }}><path d="M5 14a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" /></svg>
                            <svg width="90" height="23" viewBox="0 0 100 28" fill="currentColor" style={{ color: '#fff' }}><path d="M4 6h6v16H4zm12 0h14v4H16zm0 8h10v4H16z" /></svg>
                            <svg width="80" height="25" viewBox="0 0 100 28" fill="currentColor" style={{ color: '#fff' }}><path d="M12 4l8 16H4z" /></svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}