import React, { useState, useEffect, useRef } from 'react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function WhyChooseUs() {
    const [selectedPillar, setSelectedPillar] = useState(4);
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const progressIntervalRef = useRef(null);

    const pillars = [
        {
            icon: '🤝',
            title: 'Integrated Expertise',
            short: 'Three divisions, one partner',
            desc: 'Three corporate divisions unified under one roof. We coordinate your digital education, staff sourcing, and financial reporting with clear, single-point accountability — saving time, cost, and coordination overhead.',
            stat: '3',
            backgroundImage: "/assets/images/about/card1.png",
            statLabel: 'Expert Divisions'
        },
        {
            icon: '🌍',
            title: 'Global Reach, Local Insight',
            short: 'US · UK · Europe · GCC · India',
            desc: 'Active business hubs across the US, UK, Europe, GCC, and India. We understand local market nuances, regulatory landscapes, and cultural contexts that drive results in each geography.',
            stat: '5+',
            backgroundImage: "/assets/images/about/card2.png",
            statLabel: 'Global Markets'
        },
        {
            icon: '⚡',
            title: 'Technology-Driven',
            short: 'AI, automation & digital platforms',
            desc: 'We leverage AI-powered candidate matching, automated learning platforms, and real-time financial dashboards to deliver faster, smarter, and more scalable solutions across all three divisions.',
            stat: 'AI',
            backgroundImage: "/assets/images/about/card3.png",
            statLabel: 'Powered Delivery'
        },
        {
            icon: '🎯',
            title: 'Outcome-Focused',
            short: 'KPIs, milestones, measurable impact',
            desc: 'We measure success by outcomes, not activity. Every engagement is defined by clear KPIs, milestones, and measurable impact that drives your business forward — guaranteed.',
            stat: '100%',
            backgroundImage: "/assets/images/about/card4.png",
            statLabel: 'Outcome Tracked'
        },
        {
            icon: '🎓',
            title: 'Qualified Professionals',
            short: 'CAs, CPAs, CIPD & certified designers',
            desc: 'Our team includes CIPD-qualified HR professionals, Chartered Accountants, CPAs, certified instructional designers, and senior talent consultants with decades of cross-industry experience.',
            stat: 'Big 4',
            backgroundImage: "/assets/images/about/card5.png",
            statLabel: 'Grade Expertise'
        },
        {
            icon: '📈',
            title: 'Scalable Solutions',
            short: 'Built to grow with your ambitions',
            desc: 'From start-ups building their first financial model to multinationals deploying training to 50,000 employees — our solutions are built to scale with your ambition without compromising quality.',
            stat: '50K+',
            backgroundImage: "/assets/images/about/card6.png",
            statLabel: 'Learners Served'
        }
    ];

    const active = pillars[selectedPillar];

    useEffect(() => {
        if (isHovered) {
            clearInterval(progressIntervalRef.current);
            return;
        }

        setProgress(0);
        const duration = 1000;
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
    }, [selectedPillar, isHovered]);

    return (
        <>
            <style>{`
                .wcu-pill {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 20px;
                    border-radius: 16px;
                    font-family: 'Poppins', sans-serif;
                    text-align: left;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: rgba(151, 71, 255, 0.12) !important;
                    border: 1px solid rgba(151, 71, 255, 0.5) !important;
                    box-shadow: inset 0 0 12px rgba(151, 71, 255, 0.15) !important;
                }
                
                .wcu-pill:hover {
                    background: rgba(151, 71, 255, 0.18) !important;
                    border-color: rgba(151, 71, 255, 0.7) !important;
                    transform: translateY(-2px);
                }

                .wcu-pill.selected-active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: #9747FF;
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
                    background: #ffffff;
                    width: 0%;
                    transition: width 0.05s linear;
                }
            `}</style>

            <section
                style={{
                    padding: '100px 40px',
                    backgroundColor: '#040406',
                    backgroundImage: 'url("/assets/images/about/whyus.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    fontFamily: "'Poppins', sans-serif",
                    position: 'relative',
                    overflow: 'hidden'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(151,71,255,0.06) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(151,71,255,0.04) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

                    {/* Master Grid Layout */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: '40px', alignItems: 'start' }}>

                        {/* Left Content Column */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* Header Text Group */}
                            <div style={{ marginBottom: '40px' }}>
                                <h2 style={{ fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: '800', color: '#ffffff', margin: '0 0 20px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                                    Why Leading Global<br />
                                    <span style={{ color: '#a855f7' }}>Brands Choose Us</span>
                                </h2>
                                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', maxWidth: '540px', lineHeight: 1.6, margin: 0 }}>
                                    We don't act as an ordinary contractor. We function as an integrated extension of your organisation.
                                </p>
                            </div>

                            {/* 2x3 Button Pill Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                {pillars.map((p, i) => {
                                    const isSelected = selectedPillar === i;
                                    return (
                                        <button key={i}
                                            className={`wcu-pill ${isSelected ? 'selected-active' : ''}`}
                                            onClick={() => setSelectedPillar(i)}>
                                            <span style={{ fontSize: '20px', flexShrink: 0, opacity: 1 }}>
                                                {p.icon}
                                            </span>
                                            <div>
                                                <div style={{ fontSize: '14px', fontWeight: '700', color: '#d8b4fe', lineHeight: 1.3 }}>
                                                    {p.title}
                                                </div>
                                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginTop: '4px', fontWeight: '400' }}>
                                                    {p.short}
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
                        </div>

                        {/* Right Content Column: Loads absolute clean assets without background masking */}
                        <div style={{
                            marginTop: '10px',
                            backgroundImage: `url("${active.backgroundImage}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            border: '1px solid rgba(151,71,255,0.35)',
                            borderRadius: '24px',
                            padding: '44px 48px',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minHeight: '480px'
                        }}>
                            {/* Background shadow layer to maximize readability of white texts */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,4,6,0.85) 40%, rgba(4,4,6,0.1) 100%)', zIndex: 1 }} />

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div style={{ position: 'absolute', top: '-28px', right: '-16px', fontSize: '100px', fontWeight: '900', color: 'rgba(255,255,255,0.12)', lineHeight: 1, userSelect: 'none', letterSpacing: '-0.02em' }}>
                                    0{selectedPillar + 1}
                                </div>

                                <span style={{ fontSize: '48px', display: 'block', marginBottom: '24px' }}>{active.icon}</span>

                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
                                    <span style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', fontWeight: '800', color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                                        {active.stat}
                                    </span>
                                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#e9d5ff', textTransform: 'uppercase', letterSpacing: '0.1em', textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}>
                                        {active.statLabel}
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', margin: '0 0 12px 0', textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}>{active.title}</h3>
                                <p style={{ fontSize: '15px', color: '#ffffff', lineHeight: 1.7, margin: 0, fontWeight: '500', textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}>{active.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA block */}
                    <div style={{ marginTop: '56px', padding: '32px 40px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
                        <div>
                            <div style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>Ready to partner with us?</div>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>No-obligation consultation. Global delivery network.</div>
                        </div>
                        <button onClick={() => navigate('/contact')} style={{
                            padding: '14px 32px', borderRadius: '10px', background: '#9747FF', border: 'none',
                            color: '#ffffff', fontSize: '13px', fontWeight: '700', cursor: 'pointer',
                            transition: 'all 0.25s ease', letterSpacing: '0.05em', textTransform: 'uppercase',
                            fontFamily: "'Poppins', sans-serif", boxShadow: '0 4px 20px rgba(151,71,255,0.25)'
                        }}
                            onMouseEnter={e => { e.target.style.background = '#8333ec'; e.target.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.target.style.background = '#9747FF'; e.target.style.transform = 'translateY(0)'; }}>
                            Book a Free Consultation
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}