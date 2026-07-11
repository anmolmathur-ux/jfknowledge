import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function AboutPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Wheel Layout Configurations
    const wheelSize = 650;
    const items = [
        {
            title: 'Excellence',
            text: 'We pursue the highest standards in everything we deliver.',
            img: '/assets/images/about/1.webp'
        },
        {
            title: 'Innovation',
            text: 'We continuously evolve our solutions to stay ahead of industry trends.',
            img: '/assets/images/about/2.jpg'
        },
        {
            title: 'Integrity',
            text: 'We operate with transparency, honesty, and accountability.',
            img: '/assets/images/about/3.jpg'
        },
        {
            title: 'Partnership',
            text: 'We build long-term relationships grounded in mutual trust.',
            img: '/assets/images/about/4.jpg'
        },
        {
            title: 'Impact',
            text: 'We measure our success by the tangible outcomes we create for our clients.',
            img: '/assets/images/about/5.jpg'
        }
    ];

    // Trigonometric function to generate paths for the hollow wheel slices
    const getAnnularSectorPath = (cx, cy, rInner, rOuter, startAngle, endAngle) => {
        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;

        const x1 = cx + rOuter * Math.cos(startRad);
        const y1 = cy + rOuter * Math.sin(startRad);
        const x2 = cx + rOuter * Math.cos(endRad);
        const y2 = cy + rOuter * Math.sin(endRad);

        const x3 = cx + rInner * Math.cos(endRad);
        const y3 = cy + rInner * Math.sin(endRad);
        const x4 = cx + rInner * Math.cos(startRad);
        const y4 = cy + rInner * Math.sin(startRad);

        const largeArcFlag = (endAngle - startAngle) > 180 ? 1 : 0;

        return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-main)', fontFamily: 'var(--font-family)' }}>
            <Header />
            <main style={{ flex: 1, overflow: 'hidden', position: 'relative', paddingTop: '80px' }}>

                {/* ENHANCED HERO SECTION */}
                <section className="page-hero-shell theme-section theme-section--light" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
                    <div className="page-hero-media" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'hidden' }}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: "center center",
                                filter: 'brightness(.82) contrast(1.05) saturate(1.1)',
                                transform: 'none'
                            }}
                        >
                            <source src="/assets/images/about/about2.mp4" type="video/mp4" />
                        </video>
                        <div
                            className="hero-video-gradient"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: `
                            linear-gradient(
                            180deg,
                            rgba(0,0,0,.08) 0%,
                            rgba(0,0,0,.04) 35%,
                            rgba(0,0,0,.12) 70%,
                            rgba(0,0,0,.28) 100%
                            )
                            `,
                                pointerEvents: 'none'
                            }}
                        />
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: 100,
                            background: "linear-gradient(180deg, transparent, #060B17)"
                        }} />
                    </div>

                    {/* Exact One Screen Fit Layout Container - Realigned Left */}
                    <div style={{
                        position: "relative",
                        zIndex: 3,
                        maxWidth: "1280px",
                        margin: "0 auto",
                        padding: "70px 50px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        height: "calc(100vh - 80px)",
                        textAlign: "left"
                    }}>
                        {/* Ambient background glow repositioned to align with content */}
                        <div style={{
                            position: "absolute",
                            width: 600,
                            height: 600,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(253,181,21,.12), transparent 70%)",
                            filter: "blur(60px)",
                            left: "0px",
                            top: "20%",
                            zIndex: -1
                        }} />

                        {/* Tagline Above - Left Aligned */}
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "10px 18px",
                            borderRadius: 50,
                            background: "rgba(255,255,255,.08)",
                            border: "1px solid rgba(255,255,255,.12)",
                            backdropFilter: "blur(15px)",
                            marginBottom: 28,
                            color: "rgba(255,255,255,.9)",
                            fontSize: "13px",
                            fontWeight: "500",
                            letterSpacing: "0.02em"
                        }}>
                            <div style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: "#FDB515"
                            }} />
                            <span>Corporate Learning • Leadership • Business Growth</span>
                        </div>

                        {/* Left Aligned Premium Heading - Scale Adjusted Smaller */}
                        <h1 style={{
                            fontSize: "clamp(36px, 4.2vw, 62px)",
                            fontWeight: 850,
                            lineHeight: 1.15,
                            letterSpacing: "-0.03em",
                            maxWidth: "880px",
                            color: "#fff",
                            textShadow: "0 10px 30px rgba(0,0,0,.35)",
                            margin: 0
                        }}>
                            Empowering Talent. <span style={{ color: '#fff' }}>Enabling Growth.</span>
                            <span className="gold" style={{ display: 'block', color: "#3B82F6" }}>Elevating Business.</span>
                        </h1>

                        {/* Description - Left Aligned */}
                        <p style={{
                            maxWidth: 640,
                            margin: "24px 0 0 0",
                            fontSize: "clamp(15px, 1.6vw, 18px)",
                            lineHeight: 1.75,
                            color: "rgba(255,255,255,.82)",
                            fontWeight: "400"
                        }}>
                            Transforming individuals and organizations through future-ready learning experiences, strategic consulting, and measurable business outcomes.
                        </p>

                        {/* CTA Buttons - Left Aligned */}
                        <div style={{
                            display: "flex",
                            gap: 18,
                            marginTop: 40
                        }}>
                            <button style={{
                                background: "#3B82F6",
                                color: "#ffffff",
                                height: 54,
                                padding: "0 30px",
                                borderRadius: "999px",
                                fontWeight: 700,
                                fontSize: "15px",
                                border: "none",
                                cursor: "pointer",
                                transition: "transform 0.25s ease, opacity 0.25s ease"
                            }} onClick={() => navigate('#programs')}>
                                Explore Programs
                            </button>
                            <button style={{
                                background: "transparent",
                                border: "1px solid rgba(255,255,255,.2)",
                                color: "white",
                                backdropFilter: "blur(20px)",
                                height: 54,
                                padding: "0 30px",
                                borderRadius: "999px",
                                fontWeight: 600,
                                fontSize: "15px",
                                cursor: "pointer",
                                transition: "all 0.25s ease"
                            }} onClick={() => navigate('/contact')}>
                                Talk to an Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* MIDDLE CONTENT SECTION - FIXED ACCORDING TO REFERENCE IMAGE */}
                <section
                    className="theme-section theme-section--light"
                    style={{
                        padding: '120px 24px',
                        /* Abstract matrix/line decoration applied here to wrap behind elements flawlessly */
                        backgroundImage: 'url("/assets/images/about/servicebg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div style={{
                        maxWidth: '1280px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap-reverse',
                        gap: '64px',
                        alignItems: 'center'
                    }}>

                        {/* Left Side: Dark Blue Base Panel containing the Cards */}
                        <div style={{
                            flex: '1.4 1 500px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '24px',
                            /* Dark blue housing panel container from image reference */
                            background: 'linear-gradient(180deg, #051334 0%, #020b24 100%)',
                            padding: '40px',
                            borderRadius: '24px',
                            boxShadow: '0 25px 60px rgba(2, 11, 36, 0.16)'
                        }}>

                            {/* Mission Card */}
                            <div
                                style={{
                                    padding: '44px 32px',
                                    borderRadius: '20px',
                                    background: 'rgba(255, 255, 255, 0.93)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                                }}
                            >
                                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>Our Mission</h3>
                                <p style={{ fontSize: '15.5px', color: '#334155', lineHeight: 1.75, margin: 0, fontWeight: '500' }}>
                                    To empower organisations and individuals with innovative learning experiences, world-class talent solutions, and strategic financial expertise — enabling them to thrive in a rapidly evolving global landscape.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div
                                style={{
                                    padding: '44px 32px',
                                    borderRadius: '20px',
                                    background: 'rgba(255, 255, 255, 0.93)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                                }}
                            >
                                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>Our Vision</h3>
                                <p style={{ fontSize: '15.5px', color: '#334155', lineHeight: 1.75, margin: 0, fontWeight: '500' }}>
                                    To be the most trusted and transformative professional services partner across learning, talent, and finance — known for quality, innovation, and measurable outcomes.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Bold Structural Typography Title */}
                        <div style={{
                            flex: '1 1 400px',
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                color: '#20459cff',
                                fontSize: 'clamp(32px, 3.8vw, 46px)',
                                fontWeight: '850',
                                lineHeight: 1.2,
                                margin: 0,
                                letterSpacing: '-0.02em'
                            }}>
                                Purpose-driven strategy for learning, talent, and finance.
                            </h2>
                        </div>

                    </div>
                </section>

                {/* HOLLOW WHEEL SECTION */}
                <section
                    className="theme-section theme-section--dark"
                    style={{
                        padding: '100px 24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundImage: ' url("/assets/images/about/cta.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="section-title" style={{ color: 'white', textShadow: '', marginTop: '16px', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800' }}>
                            The principles that guide every engagement.
                        </h2>
                    </div>

                    <div style={{
                        position: 'relative',
                        width: `${wheelSize}px`,
                        height: `${wheelSize}px`,
                        margin: '80px auto 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <svg viewBox="0 0 650 650" style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'visible' }}>
                            <defs>
                                {items.map((item, index) => (
                                    <pattern key={`pattern-${index}`} id={`bg-image-${index}`} patternUnits="userSpaceOnUse" width="650" height="650">
                                        <image href={item.img} width="650" height="650" x="0" y="0" preserveAspectRatio="xMidYMid slice" />
                                    </pattern>
                                ))}
                            </defs>
                            <g>
                                <circle cx="325" cy="325" r="215" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="220" />
                                {items.map((item, index) => {
                                    const slicesCount = items.length;
                                    const angleStep = 360 / slicesCount;
                                    const gapSpacing = 4;
                                    const startAngle = (index * angleStep) - 90 + (gapSpacing / 2);
                                    const endAngle = ((index + 1) * angleStep) - 90 - (gapSpacing / 2);
                                    const isSelected = activeIndex === index;

                                    const INNER_RADIUS = 105;
                                    const OUTER_RADIUS = 325;
                                    const pathData = getAnnularSectorPath(325, 325, INNER_RADIUS, OUTER_RADIUS, startAngle, endAngle);

                                    return (
                                        <g
                                            key={index}
                                            onMouseEnter={() => setActiveIndex(index)}
                                            onClick={() => setActiveIndex(index)}
                                            filter="drop-shadow(0 0 8px rgba(0,0,0,.35))"
                                            style={{
                                                cursor: 'pointer',
                                                transformOrigin: "325px 325px",
                                                transform: isSelected ? "scale(1.03)" : "scale(1)",
                                                transition: "all .35s ease"
                                            }}
                                        >
                                            <path d={pathData} fill={isSelected ? "rgba(35,20,70,.95)" : "rgba(8,10,18,.95)"} />
                                            <path d={pathData} fill={`url(#bg-image-${index})`} opacity={isSelected ? 0.45 : 0.18} style={{ transition: 'opacity 0.35s ease' }} />
                                            <>
                                                <path d={pathData} fill="none" stroke="rgba(167,139,250,.15)" strokeWidth="7" />
                                                <path d={pathData} fill="none" stroke={isSelected ? "#c084fc" : "rgba(255,255,255,.08)"} strokeWidth={isSelected ? 3 : 2} />
                                            </>
                                        </g>
                                    );
                                })}
                                <circle cx="325" cy="325" r="108" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
                                <circle cx="325" cy="325" r="318" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
                            </g>
                        </svg>

                        <div style={{ position: "absolute", width: 230, height: 230, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,.25), transparent 70%)", filter: "blur(18px)", zIndex: 2 }} />

                        <div style={{
                            position: 'absolute', zIndex: 10, width: 190, height: 190, borderRadius: '50%',
                            background: "radial-gradient(circle at 30% 30%, #1b1f35 0%, #090d18 70%, #04060d 100%)", border: "2px solid rgba(192,132,252,.6)",
                            boxShadow: `0 0 60px rgba(168,85,247,.35), 0 0 120px rgba(168,85,247,.15), inset 0 0 30px rgba(255,255,255,.04), inset 0 -15px 30px rgba(0,0,0,.8)`,
                            display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none'
                        }}>
                            <img src="/assets/images/about/logo-only.png" alt="Logo" style={{ width: '85px', height: '85px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                        </div>

                        {items.map((item, index) => {
                            const totalItems = items.length;
                            const angleStep = 360 / totalItems;
                            const midAngleDeg = (index * angleStep) - 90 + (angleStep / 2);
                            const midAngleRad = (midAngleDeg * Math.PI) / 180;
                            const placementRadius = 215;
                            const x = Math.cos(midAngleRad) * placementRadius;
                            const y = Math.sin(midAngleRad) * placementRadius;
                            const isSelected = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    style={{
                                        position: 'absolute', left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, zIndex: 5, width: '180px', textAlign: 'center',
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', userSelect: 'none', pointerEvents: 'auto',
                                        transform: isSelected ? "translate(-50%,-50%) scale(1.08)" : "translate(-50%,-50%) scale(1)", transition: "all .35s ease"
                                    }}
                                >
                                    <div style={{ fontSize: '11px', color: isSelected ? '#c084fc' : '#a78bfa', fontWeight: '800', marginBottom: '4px', opacity: isSelected ? 1 : 0.7 }}>0{index + 1}</div>
                                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: isSelected ? '#ffffff' : 'var(--text-primary)', marginBottom: '6px', letterSpacing: '-0.02em', transition: 'color 0.25s ease' }}>{item.title}</h3>
                                    <p style={{ fontSize: '11.5px', color: isSelected ? '#e2e8f0' : 'var(--text-secondary)', lineHeight: 1.4, margin: 0, opacity: isSelected ? 1 : 0.65, transition: 'all 0.25s ease' }}>{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* BOTTOM CALL TO ACTION */}
                <section className="theme-section" style={{ padding: '80px 24px 140px', background: 'url("/assets/images/about/aboutcta.jpg") center/cover no-repeat' }}>
                    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="section-panel" style={{ padding: '64px 40px', background: 'rgba(9, 13, 22, 0.75)', backdropFilter: 'blur(12px)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                            <h2 className="section-title" style={{ color: 'var(--text-primary, #ffffff)', fontWeight: '800' }}>Book an Appointment</h2>
                            <p className="section-copy" style={{ color: 'var(--text-secondary, #94a3b8)', margin: '18px auto 32px', maxWidth: '760px', lineHeight: 1.7 }}>
                                Speak with our team to explore a custom service package that combines learning, talent, and financial advisory into one powerful delivery suite.
                            </p>
                            <button className="jf-btn-primary jf-btn-primary-hero" onClick={() => navigate('/contact')}>Book an Appointment</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}