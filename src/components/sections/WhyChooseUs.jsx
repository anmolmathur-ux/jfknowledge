import React, { useState, useEffect, useRef } from 'react';
import {
    BriefcaseBusiness,
    Globe2,
    Cpu,
    Target,
    GraduationCap,
    TrendingUp
} from "lucide-react";

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function WhyChooseUs() {
    const [selectedPillar, setSelectedPillar] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const progressIntervalRef = useRef(null);
    const sliderRef = useRef(null);

    const pillars = [
        {
            icon: BriefcaseBusiness,
            title: 'Integrated Expertise',
            short: 'Three divisions, one partner',
            desc: 'Three corporate divisions unified under one roof. We coordinate your digital education, staff sourcing, and financial reporting with clear, single-point accountability — saving time, cost, and coordination overhead.',
            stat: '3',
            backgroundImage: "/assets/images/about/card1.png",
            statLabel: 'Expert Divisions'
        },
        {
            icon: Globe2,
            title: 'Global Reach, Local Insight',
            short: 'US · UK · Europe · GCC · India',
            desc: 'Active business hubs across the US, UK, Europe, GCC, and India. We understand local market nuances, regulatory landscapes, and cultural contexts that drive results in each geography.',
            stat: '5+',
            backgroundImage: "/assets/images/about/card2.png",
            statLabel: 'Global Markets'
        },
        {
            icon: Cpu,
            title: 'Technology-Driven',
            short: 'AI, automation & digital platforms',
            desc: 'We leverage AI-powered candidate matching, automated learning platforms, and real-time financial dashboards to deliver faster, smarter, and more scalable solutions across all three divisions.',
            stat: 'AI',
            backgroundImage: "/assets/images/about/card3.png",
            statLabel: 'Powered Delivery'
        },
        {
            icon: Target,
            title: 'Outcome-Focused',
            short: 'KPIs, milestones, measurable impact',
            desc: 'We measure success by outcomes, not activity. Every engagement is defined by clear KPIs, milestones, and measurable impact that drives your business forward — guaranteed.',
            stat: '100%',
            backgroundImage: "/assets/images/about/card4.png",
            statLabel: 'Outcome Tracked'
        },
        {
            icon: GraduationCap,
            title: 'Qualified Professionals',
            short: 'CAs, CPAs, CIPD & certified designers',
            desc: 'Our team includes CIPD-qualified HR professionals, Chartered Accountants, CPAs, certified instructional designers, and senior talent consultants with decades of cross-industry experience.',
            stat: 'Big 4',
            backgroundImage: "/assets/images/about/card5.png",
            statLabel: 'Grade Expertise'
        },
        {
            icon: TrendingUp,
            title: 'Scalable Solutions',
            short: 'Built to grow with your ambitions',
            desc: 'From start-ups building their first financial model to multinationals deploying training to 50,000 employees — our solutions are built to scale with your ambition without compromising quality.',
            stat: '50K+',
            backgroundImage: "/assets/images/about/card6.png",
            statLabel: 'Learners Served'
        }
    ];

    const active = pillars[selectedPillar];
    const ActiveIcon = active.icon;

    // Smooth scroll active item into visibility context
    useEffect(() => {
        if (sliderRef.current) {
            const activeChild = sliderRef.current.children[selectedPillar];
        }
    }, [selectedPillar]);

    useEffect(() => {
        if (isHovered) {
            clearInterval(progressIntervalRef.current);
            return;
        }

        setProgress(0);
        const duration = 4000;
        const intervalStep = 50;

        progressIntervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setSelectedPillar((curr) => (curr + 1) % pillars.length);
                    return 0;
                }
                return prev + (intervalStep / duration) * 100;
            });
        }, intervalStep);

        return () => clearInterval(progressIntervalRef.current);
    }, [selectedPillar, isHovered, pillars.length]);

    return (
        <>
            <style>{`
                /* Clean custom scrollbar formatting for slider interface navigating */
                .horizontal-slider-container::-webkit-scrollbar {
                    height: 6px;
                }
                .horizontal-slider-container::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 10px;
                }
                .horizontal-slider-container::-webkit-scrollbar-thumb {
                    background: rgba(13, 148, 136, 0.3);
                    border-radius: 10px;
                }
                .horizontal-slider-container::-webkit-scrollbar-thumb:hover {
                    background: rgba(13, 148, 136, 0.6);
                }

                .wcu-pill {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 14px 24px;
                    border-radius: 100px;
                    font-family: 'Poppins', sans-serif;
                    text-align: left;
                    white-space: nowrap;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: rgba(227, 229, 234, 0.4) !important;
                    border: 1px solid rgba(57, 174, 165, 0.2) !important;
                    box-shadow: none !important;
                    backdrop-filter: blur(12px);
                    flex-shrink: 0; /* Keeps the capsule solid in width */
                }
                
                .wcu-pill:hover {
                    background: rgba(75, 205, 194, 0.1) !important;
                    border-color: rgba(13, 148, 136, 0.5) !important;
                    transform: translateY(-2px);
                }

                .wcu-pill.selected-active {
                    background: rgba(13, 148, 136, 0.15) !important;
                    border-color: rgba(13, 148, 136, 0.8) !important;
                    box-shadow: inset 0 0 15px rgba(13, 148, 136, 0.2) !important;
                }

                .pill-progress-track {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: transparent;
                }
                .pill-progress-bar {
                    height: 100%;
                    background: #0D9488;
                    width: 0%;
                    transition: width 0.05s linear;
                }
            `}</style>

            <section
                style={{
                    padding: '100px 24px',
                    backgroundColor: "var(--bg-main)",
                    fontFamily: "'Poppins', sans-serif",
                    position: 'relative',
                    overflow: 'hidden'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
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
                        dangerouslySetInnerHTML={{ __html: '<source src="/assets/images/about/whyus.mp4" type="video/mp4" />' }}
                        preload="auto"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1
                        }}
                    />
                </div>

                {/* Decorative Radials */}
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13, 148, 136,0.07) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 1 }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13, 148, 136,0.05) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 1 }} />

                {/* Main Component Wrapper Limit */}
                <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 3, width: '100%' }}>

                    {/* Centered Heading Group */}
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{
                            fontSize: 'clamp(32px, 4.2vw, 54px)',
                            fontWeight: '800',
                            color: "var(--text-primary)",
                            margin: '0 0 20px 0',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            textShadow: '0 2px 8px rgba(255, 255, 255, 1)'
                        }}>
                            Why Leading Global <span style={{ color: '#0D9488' }}>Brands Choose Us</span>
                        </h2>
                    </div>

                    {/* Content Stack */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>

                        {/* Row 1: Horizontal Capsule Slider Container */}
                        <div
                            ref={sliderRef}
                            className="horizontal-slider-container"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '12px',
                                overflowX: 'auto',
                                padding: '10px 4px 16px 4px',
                                scrollBehavior: 'smooth',
                                width: '100%', /* Forces layout constraints within container bounds */
                                boxSizing: 'border-box'
                            }}
                        >
                            {pillars.map((p, i) => {
                                const isSelected = selectedPillar === i;
                                return (
                                    <button
                                        key={i}
                                        className={`wcu-pill ${isSelected ? 'selected-active' : ''}`}
                                        onClick={() => setSelectedPillar(i)}
                                    >
                                        {/* Icon Wrapper Layer */}
                                        <div
                                            style={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                background: isSelected ? '#0D9488' : 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0, /* FIX: Stop layout compression from shrinking icons */
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <p.icon
                                                size={16}
                                                strokeWidth={2.2}
                                                color={isSelected ? '#ffffff' : '#0D9488'}
                                            />
                                        </div>
                                        <div>
                                            <div style={{
                                                fontSize: '14px',
                                                fontWeight: '700',
                                                color: isSelected ? '#0D9488' : 'var(--text-primary)',
                                                lineHeight: 1.2,
                                                transition: 'all 0.3s ease'
                                            }}>
                                                {p.title}
                                            </div>
                                        </div>
                                        {isSelected && (
                                            <div className="pill-progress-track">
                                                <div className="pill-progress-bar" style={{ width: `${progress}%` }} />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Row 2: Active Detailed Presentation Card (Centered) */}
                        <div style={{
                            backgroundImage: `url("${active.backgroundImage}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            border: "1px solid var(--border-light)",
                            borderRadius: '24px',
                            padding: '48px',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minHeight: '400px',
                            maxWidth: 'auto',
                            width: '100%',
                            margin: '0 auto',
                            boxSizing: 'border-box',
                            boxShadow: '0 25px 50px -12px rgba(13, 148, 136, 0.3)'
                        }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(15, 43, 82, 0.4) 15%, rgba(51, 49, 49, 0.85) 100%) ', zIndex: 1 }} />

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-24px',
                                        right: '-12px',
                                        fontSize: '90px',
                                        fontWeight: '900',
                                        color: 'rgba(13, 148, 136, 0.15)',
                                        lineHeight: 1,
                                        userSelect: 'none',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    0{selectedPillar + 1}
                                </div>

                                <div style={{ marginBottom: '24px', color: '#0D9488' }}>
                                    <ActiveIcon size={44} strokeWidth={1.8} />
                                </div>

                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
                                    <span style={{
                                        fontSize: 'clamp(38px, 4.5vw, 52px)',
                                        fontWeight: '800',
                                        color: "var(--text-primary)",
                                        lineHeight: 1,
                                        letterSpacing: '-0.02em',
                                        textShadow: '0 2px 10px rgba(220, 178, 178, 0.5)'
                                    }}>
                                        {active.stat}
                                    </span>
                                    <span style={{
                                        fontSize: '11px',
                                        fontWeight: '700',
                                        color: '#6ad6cdff',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em'
                                    }}>
                                        {active.statLabel}
                                    </span>
                                </div>

                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: '700',
                                    color: "var(--text-primary)",
                                    margin: '0 0 12px 0',
                                    textShadow: '0 2px 10px rgba(220, 178, 178, 0.5)'
                                }}>
                                    {active.title}
                                </h3>

                                <p style={{
                                    fontSize: '15px',
                                    color: "var(--brand-peach)",
                                    lineHeight: 1.7,
                                    margin: 0,
                                    fontWeight: '400'
                                }}>
                                    {active.desc}
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Action Area */}
                    <div style={{ marginTop: '56px', padding: '32px 40px', background: 'var(--bg-surface)', border: "1px solid var(--border-light)", backdropFilter: 'blur(16px)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', boxShadow: '0 12px 40px rgba(246, 250, 250, 0.15)' }}>
                        <div>
                            <div style={{ fontSize: '17px', fontWeight: '700', color: "var(--text-primary)", marginBottom: '4px' }}>Ready to partner with us?</div>
                            <div style={{ fontSize: '14px', color: "var(--text-muted)" }}>No-obligation consultation. Global delivery network.</div>
                        </div>
                        <button onClick={() => navigate('/contact')} style={{
                            padding: '14px 32px', borderRadius: '8px', background: 'transparent',
                            border: '1.5px solid #0D9488',
                            color: '#0D9488', fontSize: '12px', fontWeight: '700', cursor: 'pointer',
                            transition: 'all 0.25s ease', letterSpacing: '0.1em', textTransform: 'uppercase',
                            fontFamily: "'Poppins', sans-serif"
                        }}
                            onMouseEnter={e => { e.target.style.background = '#0D9488'; e.target.style.color = '#ffffff'; e.target.style.boxShadow = '0 6px 20px rgba(32, 176, 164, 0.3)'; }}
                            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#0D9488'; e.target.style.boxShadow = 'none'; }}>
                            Book a Free Consultation
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}