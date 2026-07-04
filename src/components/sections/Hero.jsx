import React, { useState } from 'react';

export default function Hero() {
    const [activeTab, setActiveTab] = useState(0);

    const pillars = [
        {
            label: 'E-Learning',
            title: 'Digital Learning Solutions',
            stat: '94%',
            statLabel: 'Completion Rate',
            tagline: 'Transform complex knowledge, skills, and compliance requirements into engaging, impactful, and measurable learning journeys.',
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
            title: 'Accounting Services',
            stat: '100%',
            statLabel: 'Compliance',
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

                /* Override template styles that shrink or misalign the center viewport content */
                #root {
                    max-width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    text-align: inherit !important;
                }

                /* Premium Nav Tabs Styling */
                .hero-tab-nav {
                    display: flex;
                    gap: 8px;
                    background: var(--bg-surface);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    padding: 8px;
                    border-radius: 20px;
                    margin-bottom: 24px;
                    position: relative;
                    width: 100%;
                    max-width: 640px;
                    backdrop-filter: blur(20px);
                    box-shadow: 0 20px 40px rgba(13, 148, 136,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
                }
                .hero-tab-btn {
                    flex: 1;
                    padding: 14px 24px;
                    border-radius: 14px;
                    border: none;
                    cursor: pointer;
                    font-size: 13.5px;
                    font-weight: 700;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    white-space: nowrap;
                    background: transparent;
                    color: rgba(255, 255, 255, 0.5);
                    position: relative;
                    z-index: 2;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .hero-tab-btn:hover {
                    color: rgba(211, 103, 45, 0.55);
                }
                .hero-tab-btn.active {
                    color: rgba(211, 103, 45, 0.55);;
                }
                .tab-slider {
                    position: absolute;
                    top: 8px;
                    bottom: 8px;
                    border-radius: 14px;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    z-index: 1;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 4px 24px rgba(13, 148, 136,0.5);
                }

                /* Modernized Micro-Interactive CTA Buttons */
                .hero-cta-fill {
                    height: 56px;
                    padding: 0 36px;
                    border-radius: 14px;
                    color: var(--bg-main);
                    font-size: 15px;
                    font-weight: 800;
                    cursor: pointer;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    border: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 4px 20px var(--shadow-color);
                }
                .hero-cta-fill:hover {
                    filter: brightness(1.1) saturate(1.1);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 32px var(--shadow-color);
                }
                .hero-cta-outline {
                    height: 56px;
                    padding: 0 32px;
                    border-radius: 14px;
                    background: var(--bg-surface);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    color: #64c48fff;
                    font-size: 14.5px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    backdrop-filter: blur(16px);
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
                }
                .hero-cta-outline:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.35);
                    transform: translateY(-2px);
                }
                .brand-logo-strip svg {
                    opacity: 0.35;
                    filter: drop-shadow(0 2px 8px rgba(13, 148, 136,0.5));
                    transition: all 0.3s ease;
                }
                .brand-logo-strip svg:hover {
                    opacity: 0.85;
                    transform: scale(1.05);
                }
                @media (max-width: 768px) {
                    .pillars-summary-card {
                        flex-direction: column !important;
                        gap: 20px !important;
                        padding: 20px !important;
                    }
                    .pillar-item-box {
                        border-right: none !important;
                        border-bottom: 1px solid var(--border-light);
                        padding-bottom: 16px;
                    }
                    .pillar-item-box:last-child {
                        border-bottom: none !important;
                    }
                }
            `}</style>

            <section style={{
                position: 'relative',
                width: '100vw',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '120px 0 40px 0',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                overflow: 'hidden',
                backgroundColor: "var(--bg-main)",
                zIndex: 1
            }}>

                {/* Background Video Layer */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}>
                    {/* Corrected Overlay: Lower opacity gradient so the video can actually shine through */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.85) 100%)',
                        zIndex: 2
                    }} />

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            opacity: 0.95, /* Increased slightly from 0.15 so it's clearly visible against the pure white theme */
                        }}
                    >
                        <source src="/assets/images/about/bgvid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Ambient Glow Effects */}
                <div style={{
                    position: 'absolute',
                    top: '35%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '650px',
                    height: '650px',
                    borderRadius: '50%',
                    background: pillars[activeTab].color,
                    opacity: 0.22,
                    filter: 'blur(140px)',
                    pointerEvents: 'none',
                    zIndex: 1,
                    transition: 'background 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }} />

                {/* --- CENTRAL HERO GRID CONTAINER --- */}
                <div style={{
                    maxWidth: '1140px',
                    margin: 'auto',
                    padding: '0 24px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    zIndex: 5,
                    position: 'relative'
                }}>

                    {/* Meta Tag Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',

                        border: `1px solid ${pillars[activeTab].color}4D`,
                        borderRadius: '999px',
                        padding: '6px 16px',
                        marginBottom: '24px',
                        boxShadow: `0 8px 24px rgba(13, 148, 136,0.3), 0 0 15px ${pillars[activeTab].color}1A`,
                        transition: 'border-color 0.4s ease'
                    }}>
                        {/* Logo Image */}
                        <img
                            src="/assets/images/about/logo-only.png"
                            alt="Logo"
                            style={{
                                height: '96px', // Adjust height to fit nicely inside your pill container
                                width: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </div>

                    {/* Balanced Centered Header H1 with Text Shadow protection */}
                    <h1 style={{
                        margin: '0 0 16px 0',
                        padding: '50px 0px',
                        fontSize: 'clamp(40px, 5.2vw, 64px)',
                        fontWeight: '800',
                        lineHeight: 1.15,
                        letterSpacing: '-0.04em',
                        color: '#608bd1ff',
                        textShadow: '0 3px 2px rgba(135, 197, 140, 1)'
                    }}>
                        Empowering Talent.<br />
                        <span style={{
                            background: "#608bd1ff", WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',
                            filter: 'drop-shadow(0px 4px 12px rgba(13, 148, 136,0.3))'
                        }}>
                            Elevating Growth and Business.
                        </span>
                    </h1>

                    {/* Focused Body Description with Text Shadow protection */}
                    <p style={{
                        margin: '0 0 32px 0',
                        fontSize: 'clamp(0.97rem, 0.8rem + 0.5vw, 1.1rem)',
                        color: "Grey",
                        lineHeight: 1.7,
                        padding: '0px 100px',
                        maxWidth: '780px',
                        textShadow: "none"
                    }}>
                        JF Knowledge Centre is a globally oriented, multi-disciplinary professional services organisation committed to transforming the way businesses learn, hire, and grow.
                    </p>

                    {/* Active Tab Panel Summary - Enhanced compact view rendering all 3 pillars side-by-side */}
                    <div className="pillars-summary-card" style={{
                        width: '100%',
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-light)",
                        borderRadius: '20px',
                        padding: '24px 28px',
                        marginBottom: '36px',
                        backdropFilter: 'blur(24px)',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        justifyContent: 'space-between',
                        gap: '24px',
                        boxShadow: '0 20px 45px rgba(13, 148, 136,0.25)',
                        textAlign: 'left'
                    }}>
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className="pillar-item-box"
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    paddingRight: index !== 2 ? '16px' : '0',
                                    borderRight: index !== 2 ? '1px solid var(--border-light)' : 'none',
                                    opacity: activeTab === index ? 1 : 0.65,
                                    transform: activeTab === index ? 'scale(1.01)' : 'scale(1)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div>
                                    <h4 style={{ margin: '0 0 6px 0', fontSize: '14px', fontWeight: '800', color: pillar.color }}>
                                        {pillar.label}
                                    </h4>
                                    <p style={{ color: "var(--text-primary)", fontSize: '13px', lineHeight: '1.5', margin: '0 0 16px 0', fontWeight: '500' }}>
                                        {pillar.tagline}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto' }}>
                                    <span style={{ fontSize: '24px', fontWeight: '800', color: pillar.color }}>
                                        {pillar.stat}
                                    </span>
                                    <span style={{ fontSize: '11px', fontWeight: '700', color: "var(--text-muted)", textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                        {pillar.statLabel}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Execution Rows */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyYContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <button
                            className="hero-cta-fill"
                            style={{
                                background: pillars[activeTab].color,
                                '--shadow-color': `${pillars[activeTab].color}4D`
                            }}
                            onClick={() => navigate('/contact')}
                        >
                            Get Started Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>

                        <button className="hero-cta-outline" onClick={() => navigate(pillars[activeTab].link)}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: pillars[activeTab].color, transition: 'color 0.4s' }}>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                            {pillars[activeTab].linkLabel}
                        </button>
                    </div>

                </div>

                {/* Footer Enterprise Strip */}
                <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.08)', background: "var(--bg-surface)", backdropFilter: 'blur(12px)', paddingTop: '28px', marginTop: 'auto' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyCcontent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '11.5px', fontWeight: '800', color: "var(--text-muted)", letterSpacing: '0.18em' }}>TRUSTED BY ENTERPRISES GLOBALLY</span>
                        <div className="brand-logo-strip" style={{ display: 'flex', alignItems: 'center', gap: '44px', flexWrap: 'wrap' }}>
                            <svg width="85" height="24" viewBox="0 0 100 28" fill="currentColor" style={{ color: "var(--text-primary)" }}><path d="M10 5h12v3H10zm0 7h16v3H10zm0 7h10v3H10z" /></svg>
                            <svg width="75" height="22" viewBox="0 0 100 28" fill="currentColor" style={{ color: "var(--text-primary)" }}><path d="M5 14a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" /></svg>
                            <svg width="90" height="23" viewBox="0 0 100 28" fill="currentColor" style={{ color: "var(--text-primary)" }}><path d="M4 6h6v16H4zm12 0h14v4H16zm0 8h10v4H16z" /></svg>
                            <svg width="80" height="25" viewBox="0 0 100 28" fill="currentColor" style={{ color: "var(--text-primary)" }}><path d="M12 4l8 16H4z" /></svg>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}