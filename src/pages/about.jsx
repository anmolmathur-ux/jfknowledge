import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Target, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function AboutPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flipbookRef = useRef(null);
    const pageFlipInstance = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(4);

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

    useEffect(() => {
        let isMounted = true;
        let flip = null;

        const initFlipbook = async () => {
            try {
                const module = await import('page-flip');
                if (!flipbookRef.current || !isMounted) return;

                const PageFlipConstructor = module.PageFlip || module.default?.PageFlip || module.default;

                if (!PageFlipConstructor) {
                    throw new Error("Target PageFlip module constructor parsing failed.");
                }

                flip = new PageFlipConstructor(flipbookRef.current, {
                    width: 580,
                    height: 760,
                    size: "stretch",
                    minWidth: 400,
                    maxWidth: 600,
                    minHeight: 550,
                    maxHeight: 800,
                    drawShadow: true,
                    flippingTime: 800,
                    usePortrait: true,
                    startPage: 0,
                    showCover: true,
                    mobileScrollSupport: false
                });

                const targetPages = flipbookRef.current.querySelectorAll('.handbook-page');
                if (targetPages.length > 0) {
                    flip.loadFromHTML(targetPages);
                    pageFlipInstance.current = flip;
                    setTotalPages(flip.getPageCount() || 4);

                    flip.on('flip', (e) => {
                        if (isMounted) setCurrentPage(e.data);
                    });
                }
            } catch (err) {
                console.error("Vite dynamic module resolver caught an error: ", err);
            }
        };

        // Delay setup slightly to guarantee full rendering of elements inside the DOM structure
        const loadTimeout = setTimeout(() => {
            initFlipbook();
        }, 150);

        return () => {
            isMounted = false;
            clearTimeout(loadTimeout);
            if (pageFlipInstance.current) {
                try {
                    pageFlipInstance.current.destroy();
                } catch (e) {
                    console.warn("Soft handling error during destruction phase:", e);
                }
                pageFlipInstance.current = null;
            }
        };
    }, []);

    const nextSide = () => pageFlipInstance.current?.flipNext();
    const prevSide = () => pageFlipInstance.current?.flipPrev();

    const formatPageNumber = (current, total) => {
        const paddedCurrent = String(current + 1).padStart(2, '0');
        const paddedTotal = String(total).padStart(2, '0');
        return `${paddedCurrent} / ${paddedTotal}`;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-main)', fontFamily: 'var(--font-family)' }}>
            <Header />
            <main style={{ flex: 1, overflow: 'hidden', position: 'relative', paddingTop: '80px' }}>

                {/* HERO SECTION */}
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

                {/* PREMIUM 4-PAGE EXECUTIVE HANDBOOK SECTION */}
                <section className="handbook-hero-section">
                    <div className="handbook-hero-blueprint"></div>
                    <div className="handbook-hero-glow"></div>
                    <div className="handbook-hero-particles"></div>
                    <div className="handbook-hero-spotlight"></div>

                    <div className="handbook-hero-container">
                        {/* LEFT SIDE ONLY AS CONTEXT */}
                        <div className="handbook-text-panel">
                            <span className="handbook-overline">OUR PURPOSE</span>
                            <h2 className="handbook-title">Vision &amp; Mission</h2>
                            <p className="handbook-desc">
                                Discover the principles guiding every transformation, learning journey, and client partnership.
                            </p>
                        </div>

                        {/* RIGHT VISUAL CENTERPIECE */}
                        <div className="handbook-book-wrapper">
                            <div className="handbook-pedestal">
                                <div ref={flipbookRef} className="stf__wrapper">

                                    {/* PAGE 1: Hardcover Front */}
                                    <div className="handbook-page book-cover-front" data-density="hard">
                                        <div className="cover-leather-texture"></div>
                                        <div className="cover-gold-overlay"></div>
                                        <div className="cover-content-shell">
                                            <div className="cover-logo-mark" style={{ width: 100, height: 100 }}><img src="/assets/images/about/logo-only.png" alt="" /></div>
                                            <h3 className="cover-branding-main">JF KNOWLEDGE</h3>
                                            <div className="cover-gold-divider"></div>
                                            <h4 className="cover-title-main">Vision &amp; Mission</h4>                                            <div className="cover-date-stamp">2026</div>
                                        </div>
                                        <div className="page-edge-shimmer"></div>
                                    </div>

                                    {/* PAGE 2: Mission */}
                                    <div className="handbook-page book-page-internal page-state-mission" data-density="soft">
                                        <div className="paper-grain-overlay"></div>
                                        <div className="internal-page-padding">
                                            <div className="page-inner-icon-wrapper scale-anim">
                                                <Target size={36} className="handbook-icon-accent text-blue" />
                                            </div>

                                            <h4 className="page-large-heading fade-up-anim">MISSION</h4>

                                            <p className="page-small-description">
                                                Empowering individuals and organizations through innovative learning, strategic consulting, and measurable outcomes.
                                            </p>

                                            <div className="page-structural-divider"></div>

                                            <div className="page-highlight-cards-container">
                                                <div className="page-highlight-card stagger-1">
                                                    <span className="card-check">✓</span>
                                                    <span className="card-label">Future-ready Learning</span>
                                                </div>
                                                <div className="page-highlight-card stagger-2">
                                                    <span className="card-check">✓</span>
                                                    <span className="card-label">Business Excellence</span>
                                                </div>
                                                <div className="page-highlight-card stagger-3">
                                                    <span className="card-check">✓</span>
                                                    <span className="card-label">Sustainable Growth</span>
                                                </div>
                                            </div>

                                            <div className="page-handbook-footer">
                                                <span>JF KNOWLEDGE</span>
                                                <span>01</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PAGE 3: Vision */}
                                    <div className="handbook-page book-page-internal page-state-vision" data-density="soft">
                                        <div className="paper-grain-overlay"></div>
                                        <div className="internal-page-padding">
                                            <div className="page-inner-icon-wrapper eye-glow-anim">
                                                <Eye size={36} className="handbook-icon-accent text-cyan" />
                                            </div>

                                            <h4 className="page-large-heading fade-up-anim">VISION</h4>

                                            <p className="page-small-description">
                                                To become the most trusted professional services partner across learning, talent and finance.
                                            </p>

                                            <div className="page-structural-divider"></div>

                                            <div className="page-highlight-cards-container">
                                                <div className="page-highlight-card stagger-1">
                                                    <span className="card-check">✓</span>
                                                    <span className="card-label">Global Impact</span>
                                                </div>
                                                <div className="page-highlight-card stagger-2">
                                                    <span className="card-check">✓</span>
                                                    <span className="card-label">Innovation</span>
                                                </div>
                                                <div className="page-highlight-card stagger-3">
                                                    <span className="card-check">✓</span>
                                                    <span className="card-label">Leadership</span>
                                                </div>
                                            </div>

                                            <div className="page-handbook-footer">
                                                <span>JF KNOWLEDGE</span>
                                                <span>02</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PAGE 4: Hardcover Back */}
                                    <div className="handbook-page book-cover-back" data-density="hard">
                                        <div className="cover-leather-texture"></div>
                                        <div className="cover-content-shell back-casing-center">
                                            <div className="back-casing-logo"><img src="/assets/images/about/logo-only.png" alt="learning--v1 filter-invert: white" /></div>
                                            <p className="back-casing-motto-headline">Together We Build</p>
                                            <h5 className="back-casing-sub-motto">Future-ready Organizations</h5>
                                            <div className="back-casing-web-link">jfknowledge.com</div>
                                        </div>
                                        <div className="page-edge-shimmer left-oriented"></div>
                                    </div>

                                </div>
                            </div>

                            {/* FLOATING GLASS PILL NAVIGATION */}
                            <div className="handbook-floating-pill-nav">
                                <button
                                    onClick={prevSide}
                                    disabled={currentPage === 0}
                                    className="pill-nav-arrow"
                                    aria-label="Previous Page"
                                >
                                    ←
                                </button>
                                <span className="pill-nav-indicator">
                                    {formatPageNumber(currentPage, totalPages)}
                                </span>
                                <button
                                    onClick={nextSide}
                                    disabled={currentPage === totalPages - 1}
                                    className="pill-nav-arrow"
                                    aria-label="Next Page"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>

                    <style>{`
                        .handbook-hero-section {
                            position: relative;
                            width: 100%;
                            min-height: 980px;
                            display: flex;
                            align-items: center;
                            background-image: url("/assets/images/about/aboutcta.jpg");
                            overflow: hidden;
                            background-gradient: linear-gradient(to right, #43a1b1ff, #cee3e7ff);
                            background-repeat: no-repeat;
                            background-size: cover;
                            padding: 80px 0 120px 0;
                        }
                        .handbook-hero-blueprint {
                            position: absolute;
                            inset: 0;
                            background-image: linear-gradient(rgba(59, 130, 246, 0.025) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(59, 130, 246, 0.025) 1px, transparent 1px);
                            background-size: 50px 50px;
                            z-index: 1;
                        }
                        .handbook-hero-glow {
                            position: absolute;
                            top: 40%;
                            right: 15%;
                            transform: translate(50%, -50%);
                            width: 800px;
                            height: 800px;
                            background: radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%);
                            z-index: 2;
                            pointer-events: none;
                        }
                        .handbook-hero-particles {
                            position: absolute;
                            inset: 0;
                            background: radial-gradient(circle at 75% 35%, rgba(14, 165, 233, 0.04), transparent 45%),
                                        radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.03), transparent 50%);
                            z-index: 2;
                            pointer-events: none;
                        }
                        .handbook-hero-spotlight {
                            position: absolute;
                            top: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            width: 100%;
                            max-width: 1400px;
                            height: 100%;
                            background: radial-gradient(circle at top, rgba(255, 255, 255, 0.02), transparent 60%);
                            z-index: 2;
                            pointer-events: none;
                        }
                        .handbook-hero-container {
                            position: relative;
                            z-index: 5;
                            width: 100%;
                            max-width: 1440px;
                            margin: 0 auto;
                            padding: 0 60px;
                            display: grid;
                            grid-template-columns: 0.85fr 1.15fr;
                            gap: 40px;
                            align-items: center;
                        }
                        .handbook-text-panel {
                            max-width: 480px;
                        }
                        .handbook-overline {
                            font-size: 12px;
                            font-weight: 800;
                            letter-spacing: 0.25em;
                            color: #b2c9eeff;
                            display: inline-block;
                            margin-bottom: 16px;
                        }
                        .handbook-title {
                            font-size: clamp(38px, 4.5vw, 56px);
                            font-weight: 850;
                            color: #ffffff;
                            line-height: 1.15;
                            margin: 0 0 24px 0;
                            letter-spacing: -0.03em;
                        }
                        .handbook-desc {
                            font-size: 17px;
                            line-height: 1.7;
                            color: #cee3e7ff;
                            margin-bottom: 36px;
                        }
                        .handbook-feature-pills {
                            list-style: none;
                            padding: 0;
                            margin: 0;
                            display: flex;
                            flex-direction: column;
                            gap: 14px;
                        }
                        .handbook-feature-pills li {
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            font-size: 14px;
                            font-weight: 500;
                            color: #cbd5e1;
                        }
                        .pill-dot {
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            background: transparent;
                            border: 2px solid #3b82f6;
                        }
                        .handbook-book-wrapper {
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }
                        .handbook-pedestal {
                            position: relative;
                            padding: 10px;
                            border-radius: 8px;
                            background: transparent;
                            box-shadow: 0 60px 120px rgba(0,0,0,.45);
                        }
                        .stf__wrapper {
                            background: transparent;
                        }
                        .handbook-page {
                            width: 100%;
                            height: 100%;
                            box-sizing: border-box;
                            overflow: hidden;
                            position: relative;
                        }
                        
                        /* COVER STRUCTURES */
                        .book-cover-front, .book-cover-back {
                            background: linear-gradient(145deg, #081932, #102d59, #081932);
                            color: #ffffff;
                            border: 1px solid rgba(255,255,255,.08);
                            border-radius: 0 6px 6px 0;
                        }
                        .book-cover-back {
                            border-radius: 6px 0 0 6px;
                        }
                        .cover-leather-texture {
                            position: absolute;
                            inset: 0;
                            opacity: 0.07;
                            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
                            pointer-events: none;
                        }
                        .cover-gold-overlay {
                            position: absolute;
                            inset: 0;
                            background: radial-gradient(circle at top, rgba(59,130,246,.2), transparent 70%);
                            pointer-events: none;
                        }
                        .cover-content-shell {
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            padding: 60px;
                            text-align: center;
                            position: relative;
                            z-index: 3;
                        }
                        .cover-logo-mark {
                            font-size: 26px;
                            font-weight: 900;
                            color: #f59e0b;
                            border: 2.5px solid #f59e0b;
                            width: 64px;
                            height: 64px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            margin-bottom: 30px;
                        }
                        .cover-branding-main {
                            font-size: 24px;
                            font-weight: 800;
                            letter-spacing: 0.12em;
                            color: #ffffff;
                            margin: 0;
                        }
                        .cover-gold-divider {
                            width: 44px;
                            height: 1.5px;
                            background: #f59e0b;
                            margin: 28px 0;
                        }
                        .cover-title-main {
                            font-size: 36px;
                            font-weight: 750;
                            letter-spacing: -0.02em;
                            color: #ffffff;
                            margin: 0 0 16px 0;
                        }
                        .cover-subtitle-badge {
                            font-size: 13px;
                            font-weight: 600;
                            letter-spacing: 0.06em;
                            color: #94a3b8;
                            text-transform: uppercase;
                            margin: 0;
                        }
                        .cover-date-stamp {
                            position: absolute;
                            bottom: 50px;
                            font-size: 14px;
                            font-weight: 700;
                            letter-spacing: 0.2em;
                            color: #f59e0b;
                        }
                        
                        /* INTERNAL PREMIUM ARCHITECTURAL PAPER STYLE */
                        .book-page-internal {
                            background: #FCFBF7;
                            color: #0f172a;
                        }
                        .paper-grain-overlay {
                            position: absolute;
                            inset: 0;
                            opacity: 0.02;
                            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                            pointer-events: none;
                        }
                        .internal-page-padding {
    padding: 45px 45px 30px 45px; /* Reduced top/bottom padding to gain vertical space */
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
    box-sizing: border-box;
}
                        .page-inner-icon-wrapper {
    margin-bottom: 18px; /* Reduced from 36px */
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.page-large-heading {
    font-size: 34px; /* Slightly scaled down from 40px */
    font-weight: 900;
    letter-spacing: -0.01em;
    color: #0f172a;
    margin: 0 0 14px 0; /* Reduced from 24px */
}

.page-small-description {
    font-size: 16px; /* Optimized from 18px */
    line-height: 1.6;
    color: #475569;
    margin: 0 0 20px 0; /* Reduced from 40px */
}

.page-structural-divider {
    width: 100%;
    height: 1px;
    background: #e2e8f0;
    margin-bottom: 20px; /* Reduced from 40px */
}

.page-highlight-cards-container {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Reduced gap from 16px to prevent spilling */
    flex-grow: 1;
}

.page-highlight-card {
    background: rgba(15, 23, 42, 0.03);
    border: 1px solid rgba(15, 23, 42, 0.05);
    padding: 12px 20px; /* Streamlined layout padding from 20px 24px */
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 14px;
}

.page-handbook-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e2e8f0;
    padding-top: 14px;
    margin-top: auto; /* Solidifies placement at the absolute bottom */
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #94a3b8;
}
                        
                        /* BACK CASING */
                        .back-casing-center {
                            justify-content: center;
                        }
                        .back-casing-logo {
                            font-size: 32px;
                            font-weight: 900;
                            color: rgba(255, 255, 255, 0.08);
                            border: 2.5px solid rgba(255, 255, 255, 0.08);
                            width: 76px;
                            height: 76px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            margin-bottom: 24px;
                        }
                        .back-casing-motto-headline {
                            font-size: 14px;
                            font-weight: 600;
                            letter-spacing: 0.15em;
                            color: #94a3b8;
                            text-transform: uppercase;
                            margin: 0 0 8px 0;
                        }
                        .back-casing-sub-motto {
                            font-size: 20px;
                            font-weight: 700;
                            color: #ffffff;
                            margin: 0 0 40px 0;
                        }
                        .back-casing-web-link {
                            font-size: 13px;
                            font-weight: 500;
                            color: #f59e0b;
                            letter-spacing: 0.05em;
                        }
                        
                        /* EDGE SHIMMERS */
                        .page-edge-shimmer {
                            position: absolute;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            width: 14px;
                            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03));
                        }
                        .page-edge-shimmer.left-oriented {
                            right: auto;
                            left: 0;
                            background: linear-gradient(90deg, rgba(255,255,255,0.03), transparent);
                        }
                        
                        /* FLOATING GLASS PILL CONTROLS */
                        .handbook-floating-pill-nav {
                            margin-top: 40px;
                            display: inline-flex;
                            align-items: center;
                            gap: 24px;
                            padding: 10px 24px;
                            border-radius: 999px;
                            background: rgba(15, 23, 42, 0.4);
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            backdrop-filter: blur(16px);
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                            z-index: 10;
                        }
                        .pill-nav-arrow {
                            background: transparent;
                            border: none;
                            color: #ffffff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            font-size: 16px;
                            opacity: 0.7;
                            transition: all 0.2s ease;
                        }
                        .pill-nav-arrow:hover:not(:disabled) {
                            opacity: 1;
                            transform: scale(1.15);
                            color: #3b82f6;
                        }
                        .pill-nav-arrow:disabled {
                            opacity: 0.15;
                            cursor: not-allowed;
                        }
                        .pill-nav-indicator {
                            font-size: 13px;
                            font-weight: 600;
                            color: #94a3b8;
                            letter-spacing: 0.15em;
                            min-width: 65px;
                            text-align: center;
                        }
                        
                        /* ANIMATIONS */
                        .scale-anim {
                            animation: scaleUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                        }
                        .eye-glow-anim {
                            animation: glowEye 2s infinite ease-in-out;
                        }
                        .fade-up-anim {
                            opacity: 0;
                            transform: translateY(12px);
                            animation: fadeUp 0.5s ease-out forwards;
                            animation-delay: 0.1s;
                        }
                        .stagger-1 { animation: itemFade 0.4s ease forwards; animation-delay: 0.2s; opacity: 0; }
                        .stagger-2 { animation: itemFade 0.4s ease forwards; animation-delay: 0.28s; opacity: 0; }
                        .stagger-3 { animation: itemFade 0.4s ease forwards; animation-delay: 0.36s; opacity: 0; }
                        
                        @keyframes scaleUp {
                            0% { transform: scale(0.6) rotate(-8deg); opacity: 0; }
                            100% { transform: scale(1) rotate(0deg); opacity: 1; }
                        }
                        @keyframes glowEye {
                            0%, 100% { filter: drop-shadow(0 0 2px rgba(14,165,233,0.1)); opacity: 0.9; }
                            50% { filter: drop-shadow(0 0 12px rgba(14,165,233,0.4)); opacity: 1; }
                        }
                        @keyframes fadeUp {
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes itemFade {
                            to { opacity: 1; transform: translateY(0); }
                        }

                        @media (max-width: 1024px) {
                            .handbook-hero-container {
                                grid-template-columns: 1fr;
                                gap: 60px;
                                padding: 0 30px;
                                text-align: center;
                            }
                            .handbook-text-panel {
                                max-width: 100%;
                            }
                            .handbook-feature-pills {
                                align-items: center;
                            }
                        }
                    `}</style>
                </section>

                {/* PRINCIPLES HOLLOW WHEEL SECTION */}
                <section
                    className="theme-section theme-section--dark"
                    style={{
                        padding: '100px 24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundImage: ' url("/assets/images/about/principlebg.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div
                        style={{
                            display: 'inline-block',
                            padding: '14px 28px',
                            borderRadius: '20px',
                            background: 'rgba(15,23,42,0.35)',
                            backdropFilter: 'blur(12px)',
                        }}
                    >
                        <h2
                            style={{
                                color: '#fff',
                                fontSize: 'clamp(36px,4vw,54px)',
                                fontWeight: 800,
                                margin: 0,
                            }}
                        >
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
                <section
                    className="theme-section"
                    style={{
                        padding: '80px 24px 140px',
                        background: `
            linear-gradient(
                rgba(28, 45, 82, .55),
                rgba(18, 31, 61, .55)
            ),
            url("/assets/images/about/aboutcta.jpg") center/cover no-repeat`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: `
                radial-gradient(circle at 15% 20%, rgba(59, 130, 246, .20), transparent 30%),
                radial-gradient(circle at 80% 80%, rgba(34, 211, 238, .12), transparent 35%)
            `,
                            pointerEvents: 'none',
                            zIndex: 1
                        }}
                    />

                    <div
                        style={{
                            maxWidth: '1080px',
                            margin: '0 auto',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 2
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                inset: '-60px',
                                background: 'radial-gradient(circle, rgba(59, 130, 246, .25), transparent 70%)',
                                filter: 'blur(70px)',
                                zIndex: 0,
                                pointerEvents: 'none'
                            }}
                        />

                        <div
                            className="section-panel"
                            style={{
                                padding: '64px 40px',
                                background: `
                    linear-gradient(
                        180deg,
                        rgba(34, 52, 93, .88),
                        rgba(24, 38, 70, .82)
                    )
                `,
                                backdropFilter: 'blur(12px)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, .12)',
                                boxShadow: `
                    0 20px 60px rgba(0, 0, 0, .18),
                    0 0 80px rgba(59, 130, 246, .18)
                `,
                                position: 'relative',
                                zIndex: 2
                            }}
                        >
                            <h2
                                className="section-title"
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 'clamp(48px, 5vw, 72px)',
                                    fontWeight: 800,
                                    letterSpacing: '-2px',
                                    lineHeight: 1.05,
                                    textShadow: '0 4px 20px rgba(0, 0, 0, .25)',
                                    margin: 0
                                }}
                            >
                                Book an Appointment
                            </h2>

                            <p
                                className="section-copy"
                                style={{
                                    color: '#CBD5E1',
                                    fontSize: '20px',
                                    lineHeight: 1.8,
                                    maxWidth: '760px',
                                    margin: '24px auto 40px'
                                }}
                            >
                                Speak with our team to explore a custom service package that combines learning, talent, and financial advisory into one powerful delivery suite.
                            </p>

                            <button
                                className="jf-btn-primary jf-btn-primary-hero"
                                onClick={() => navigate('/contact')}
                            >
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}