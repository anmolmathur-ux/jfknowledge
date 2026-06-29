import React, { useState, useEffect, useRef } from 'react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function ServiceGrid() {
    const [focusedCard, setFocusedCard] = useState(2); // Default to Finance initially
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const progressIntervalRef = useRef(null);

    const services = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            label: 'E-Learning',
            title: 'E-Learning & Digital Learning Solutions',
            tagline: 'Full-service digital learning powerhouse',
            desc: 'We design, develop, and deploy cutting-edge learning experiences tailored to your organisation\'s unique goals. From SCORM modules to LMS implementations.',
            color: '#9747FF',
            glow: 'rgba(151, 71, 255, 0.15)',
            href: '/e-learning',
            image: '/assets/images/about/1.png', // Maintained semantic reference paths
            bullets: [
                'Instructor-Led & Virtual ILT Training (VILT)',
                'Microlearning & Mobile-First Content',
                'Custom SCORM / xAPI eLearning Modules',
                'LMS Implementation & Configuration',
                'Gamification & Learning Experience Platforms',
                'Content Strategy & Instructional Design',
            ]
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            label: 'Recruitment',
            title: 'Recruitment, Staffing & Talent Solutions',
            tagline: 'End-to-end global talent partner',
            desc: 'We deliver permanent placement, contract staffing, staff augmentation, and executive search services across the US, UK, Europe, and GCC with a 48-hour shortlist promise.',
            color: '#22d3ee',
            glow: 'rgba(34, 211, 238, 0.15)',
            href: '/recruitment-staffing',
            image: '/assets/images/about/2.png',
            bullets: [
                'Permanent Placement & Direct Hire (90-day guarantee)',
                'Contract & Temporary Staffing (24–72hr deployment)',
                'IT & Non-IT Staff augmentation',
                'Executive Search & C-Suite Leadership Hiring',
                'Managed Staffing / RPO Solutions',
                'GCC, US, UK & European Market Specialists',
            ]
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            label: 'Finance',
            title: 'Financial Consultancy & Accounting Services',
            tagline: 'Big Four-grade expertise, startup agility',
            desc: 'Our qualified Chartered Accountants and CPAs deliver end-to-end financial services — from cloud bookkeeping to fractional CFO leadership — ensuring clarity and compliance.',
            color: '#34d399',
            glow: 'rgba(52, 211, 153, 0.15)',
            href: '/financial-consultancy',
            image: '/assets/images/about/3.png',
            bullets: [
                'Accounting, Bookkeeping & Cloud Financials',
                'Financial Reporting & Management Accounts',
                'Tax Planning, VAT/GST & Corporate Tax Compliance',
                'Payroll Management & HR Compliance',
                'Budgeting, Forecasting & Financial Modelling',
                'Fractional CFO & Finance Function Outsourcing',
            ]
        }
    ];

    useEffect(() => {
        if (isHovered) {
            clearInterval(progressIntervalRef.current);
            return;
        }

        setProgress(0);
        const duration = 15000; // 15 seconds
        const intervalStep = 100;
        let elapsed = 0;

        progressIntervalRef.current = setInterval(() => {
            elapsed += intervalStep;
            setProgress(Math.min((elapsed / duration) * 100, 100));

            if (elapsed >= duration) {
                setFocusedCard((prev) => (prev + 1) % services.length);
            }
        }, intervalStep);

        return () => clearInterval(progressIntervalRef.current);
    }, [focusedCard, isHovered]);

    return (
        <>
            <style>{`
                .bento-flex-container {
                    display: flex;
                    gap: 24px;
                    width: 100%;
                    min-height: 640px;
                    align-items: stretch;
                }
                @media (max-width: 991px) {
                    .bento-flex-container {
                        flex-direction: column;
                        min-height: auto;
                    }
                }
                .bento-card {
                    position: relative;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 28px;
                    padding: 40px 32px;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    flex: 1;
                    transition: flex 0.75s cubic-bezier(0.25, 1, 0.3, 1), 
                                background 0.4s ease, 
                                border-color 0.4s ease,
                                box-shadow 0.4s ease;
                }
                .bento-card.focused {
                    flex: 1.8;
                    background: rgba(25, 25, 30, 0.4);
                    border-color: var(--card-color);
                    box-shadow: 0 20px 50px var(--card-glow);
                    backdrop-filter: blur(8px);
                }
                @media (max-width: 991px) {
                    .bento-card.focused {
                        flex: none;
                    }
                }
                .bento-bg-image {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0;
                    transition: opacity 0.6s ease;
                    pointer-events: none;
                    z-index: 0;
                }
                .bento-card.focused .bento-bg-image {
                    opacity: 0.85;
                }
                .bento-content-wrap {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    flex-grow: 1;
                }
                .icon-box {
                    display: inline-flex;
                    padding: 14px;
                    border-radius: 18px;
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--card-color);
                    margin-bottom: 32px;
                    transition: all 0.4s ease;
                    width: max-content;
                }
                .bento-card.focused .icon-box {
                    background: var(--card-glow);
                    transform: scale(1.05);
                }
                .bullet-list {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: max-height 0.6s cubic-bezier(0.25, 1, 0.3, 1), opacity 0.4s ease;
                }
                .bento-card.focused .bullet-list {
                    max-height: 600px;
                    opacity: 1;
                    margin-top: 28px;
                    margin-bottom: 24px;
                }
                .bento-bullet {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.95);
                    padding: 11px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    transform: translateY(10px);
                    opacity: 0;
                    transition: all 0.4s ease;
                }
                .bento-card.focused .bento-bullet {
                    transform: translateY(0);
                    opacity: 1;
                }
                .bento-card.focused .bento-bullet:nth-child(1) { transition-delay: 0.1s; }
                .bento-card.focused .bento-bullet:nth-child(2) { transition-delay: 0.15s; }
                .bento-card.focused .bento-bullet:nth-child(3) { transition-delay: 0.2s; }
                .bento-card.focused .bento-bullet:nth-child(4) { transition-delay: 0.25s; }
                .bento-card.focused .bento-bullet:nth-child(5) { transition-delay: 0.3s; }
                .bento-card.focused .bento-bullet:nth-child(6) { transition-delay: 0.35s; }

                .action-btn {
                    margin-top: auto;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    padding: 16px 28px;
                    border-radius: 14px;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    color: #fff;
                    width: 100%;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(15px);
                }
                .bento-card.focused .action-btn {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                    transition: opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s, background 0.3s ease, box-shadow 0.3s ease;
                }
                .action-btn:hover {
                    box-shadow: 0 10px 25px var(--card-glow);
                    transform: translateY(-2px) !important;
                }
                .ticker-track {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.04);
                }
                .ticker-bar {
                    height: 100%;
                    background: var(--card-color);
                    width: 0%;
                    transition: width 0.1s linear;
                }
            `}</style>

            <section
                style={{ padding: '140px 24px', backgroundColor: '#040406', fontFamily: "'Poppins', sans-serif", position: 'relative', overflow: 'hidden' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: '900px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(151,71,255,0.03) 0%, transparent 65%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

                    {/* Header Space */}
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: '700', color: '#9747FF', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '16px', background: 'rgba(151,71,255,0.08)', padding: '6px 18px', borderRadius: '100px', border: '1px solid rgba(151,71,255,0.15)' }}>
                            Core Capabilities
                        </span>
                        <h2 style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: '800', color: '#ffffff', margin: '0 0 20px 0', letterSpacing: '-0.03em', lineHeight: 1.15, textAlign: 'center' }}>
                            Three Divisions. <span style={{ background: 'linear-gradient(90deg, #9747FF 0%, #22d3ee 50%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Infinite Scalability.</span>
                        </h2>
                        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.6, margin: '0 auto' }}>
                            One unified partner engine accelerating your strategic hyper-growth objectives across learning assets, talent engineering, and institutional finances.
                        </p>
                    </div>

                    {/* Interactive Fluid Component Space */}
                    <div className="bento-flex-container">
                        {services.map((s, i) => {
                            const isFocused = focusedCard === i;
                            return (
                                <div
                                    key={i}
                                    className={`bento-card ${isFocused ? 'focused' : ''}`}
                                    style={{ '--card-color': s.color, '--card-glow': s.glow }}
                                    onClick={() => setFocusedCard(i)}
                                >
                                    {/* Top ambient glow ray */}
                                    <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: isFocused ? `linear-gradient(90deg, transparent, ${s.color}, transparent)` : 'transparent', filter: 'blur(1px)' }} />

                                    {/* Compounded Layer: Black-10 protecting gradient explicitly layered cleanly over the top of the image source */}
                                    <div
                                        className="bento-bg-image"
                                        style={{
                                            backgroundImage: `linear-gradient(to top, #040406 0%, rgba(4, 4, 6, 0.85) 45%, rgba(4, 4, 6, 0.15) 75%, transparent 100%), url(${s.image})`
                                        }}
                                    />

                                    {/* Component Content Container */}
                                    <div className="bento-content-wrap">
                                        <div>
                                            <div className="icon-box">
                                                {s.icon}
                                            </div>
                                            <span style={{ fontSize: '11px', fontWeight: '700', color: s.color, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
                                                {s.label}
                                            </span>
                                            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', margin: '0 0 14px 0', lineHeight: 1.3 }}>
                                                {s.title}
                                            </h3>
                                            <p style={{ fontSize: '14.5px', color: isFocused ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0, transition: 'color 0.4s ease' }}>
                                                {s.desc}
                                            </p>
                                        </div>

                                        {/* Expandable Core Features list */}
                                        <div className="bullet-list">
                                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '12px' }} />
                                            {s.bullets.map((bullet, idx) => (
                                                <div key={idx} className="bento-bullet">
                                                    <span style={{ color: s.color, fontWeight: '900', fontSize: '15px', lineHeight: 1 }}>✓</span>
                                                    {bullet}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Route Action Anchor */}
                                        <button
                                            className="action-btn"
                                            style={{ background: s.color }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(s.href);
                                            }}
                                        >
                                            Explore {s.label}
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Tech Loader Track Timeline */}
                                    {isFocused && (
                                        <div className="ticker-track">
                                            <div className="ticker-bar" style={{ width: `${progress}%` }} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}