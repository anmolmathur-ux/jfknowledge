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
                    usePortrait: false,
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

                {/* NOTEBOOK FLIPBOOK SECTION */}
                <section className="handbook-hero-section">
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

                                    {/* PAGE 1: Front Cover (Dark Blue) */}
                                    <div className="handbook-page notebook-page-green" data-density="hard">
                                        <div className="title-content-wrapper">
                                            <div className="cover-logo-mark"><img src="/assets/images/about/logo-only.png" alt="" style={{ width: '60px', filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(200deg)' }} /></div>
                                            <h3 className="cover-branding-main" style={{ fontFamily: 'sans-serif', letterSpacing: '0.12em', fontSize: '24px', fontWeight: 800, margin: '20px 0 0' }}>JF KNOWLEDGE</h3>
                                            <div style={{ width: '44px', height: '1.5px', background: '#d18d2b', margin: '24px auto' }}></div>
                                            <h4 className="title-main" style={{ fontFamily: 'sans-serif', fontWeight: 800 }}>Vision & Mission</h4>

                                            <div style={{ position: 'absolute', bottom: '50px', left: '0', width: '100%', textAlign: 'center', color: '#d18d2b', fontWeight: 700, letterSpacing: '0.2em', fontSize: '14px' }}>
                                                2026
                                            </div>
                                        </div>
                                    </div>

                                    {/* PAGE 2: Mission (White) */}
                                    <div className="handbook-page notebook-page-cream" data-density="soft">
                                        <div className="cream-page-header">
                                            <span className="page-num">01</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#112d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                                            </div>
                                        </div>
                                        <h3 className="faq-question" style={{ fontFamily: 'sans-serif', fontWeight: 900, fontSize: '32px', width: '100%', textAlign: 'center', marginBottom: '10px', letterSpacing: '-1px' }}>MISSION</h3>
                                        <div className="faq-answer" style={{ textAlign: 'center', lineHeight: '1.6', marginBottom: '30px', color: '#4b5563', padding: '0 10px' }}>
                                            <p style={{ lineHeight: '1.6', top: 0 }}>Empowering individuals and organizations through innovative learning, strategic consulting, and measurable outcomes.</p>
                                        </div>

                                        <div className="highlight-cards" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                                            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '12px 20px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                                                <span style={{ color: '#4b5563' }}>✓</span> Future-ready Learning
                                            </div>
                                            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '12px 20px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                                                <span style={{ color: '#4b5563' }}>✓</span> Business Excellence
                                            </div>
                                            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '12px 20px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                                                <span style={{ color: '#4b5563' }}>✓</span> Sustainable Growth
                                            </div>
                                        </div>
                                    </div>

                                    {/* PAGE 3: Vision (White) */}
                                    <div className="handbook-page notebook-page-cream" data-density="soft">
                                        <div className="cream-page-header" style={{ justifyContent: 'flex-end' }}>
                                            <span className="page-num">02</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#112d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                            </div>
                                        </div>
                                        <h3 className="faq-question" style={{ fontFamily: 'sans-serif', fontWeight: 900, fontSize: '32px', width: '100%', textAlign: 'center', marginBottom: '10px', letterSpacing: '-1px' }}>VISION</h3>
                                        <div className="faq-answer" style={{ textAlign: 'center', lineHeight: '1.6', marginBottom: '30px', color: '#4b5563', padding: '0 10px' }}>
                                            <p style={{ lineHeight: '1.6', top: 0 }}>To become the most trusted professional services partner across learning, talent and finance.</p>
                                        </div>

                                        <div className="highlight-cards" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                                            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '12px 20px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                                                <span style={{ color: '#4b5563' }}>✓</span> Global Impact
                                            </div>
                                            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '12px 20px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                                                <span style={{ color: '#4b5563' }}>✓</span> Innovation
                                            </div>
                                            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '12px 20px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                                                <span style={{ color: '#4b5563' }}>✓</span> Leadership
                                            </div>
                                        </div>
                                    </div>

                                    {/* PAGE 4: Back Cover (Dark Blue) */}
                                    <div className="handbook-page notebook-page-green" data-density="hard">
                                        <div className="title-content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                            <div className="cover-logo-mark" style={{ marginBottom: '20px' }}><img src="/assets/images/about/logo-only.png" alt="" style={{ width: '70px', opacity: 0.15 }} /></div>
                                            <p className="faq-overline" style={{ color: '#8c9d96', letterSpacing: '0.15em', marginBottom: '10px' }}>TOGETHER WE BUILD</p>
                                            <h2 className="title-main" style={{ fontFamily: 'sans-serif', fontSize: '24px', fontWeight: 700, margin: '0 0 40px 0' }}>Future-ready Organizations</h2>

                                            <div style={{ color: '#d18d2b', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>
                                                jfknowledge.com
                                            </div>
                                        </div>
                                    </div>

                                </div>
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
                            justify-content: center;
                            background-image: url("/assets/images/about/aboutcta.jpg");
                            background-size: cover;
                            background-blend-mode: overlay;
                            padding: 80px 0;
                        }
                        .handbook-hero-container {
                            position: relative;
                            z-index: 5;
                            width: 100%;
                            max-width: 1200px;
                            margin: 0 auto;
                            padding: 0 40px;
                            display: grid;
                            grid-template-columns: 1fr 1.2fr;
                            gap: 40px;
                            align-items: center;
                        }
                        .handbook-text-panel {
                            text-align: left;
                        }
                        .handbook-overline {
                            font-size: 13px;
                            font-weight: 800;
                            letter-spacing: 0.25em;
                            color: #b2c9ee;
                            display: block;
                            margin-bottom: 16px;
                        }
                        .handbook-title {
                            font-size: clamp(38px, 4.5vw, 64px);
                            font-weight: 900;
                            color: #ffffff;
                            line-height: 1.1;
                            margin: 0 0 24px 0;
                            letter-spacing: -0.03em;
                            font-family: sans-serif;
                        }
                        .handbook-desc {
                            font-size: 18px;
                            line-height: 1.6;
                            color: #cee3e7;
                            margin-bottom: 36px;
                            max-width: 90%;
                        }
                        .handbook-book-wrapper {
                            position: relative;
                        }
                        .handbook-pedestal {
                            position: relative;
                            border-radius: 4px;
                            background: transparent;
                            padding: 0;
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
                        
                        /* BROWN BLANK PAGE */
                        .notebook-page-brown {
                            background: #4a2e1b;
                            box-shadow: none;
                        }

                        /* DARK GREEN PAGE */
                        .notebook-page-green {
                            background: #0d1f3b;
                            color: #fdfaf6;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        
                        .title-content-wrapper {
                            padding: 60px;
                            text-align: center;
                            width: 100%;
                        }
                        .lc-logo {
                            width: 50px;
                            height: 50px;
                            border: 1px solid #c9933b;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 0 auto 15px;
                            color: #c9933b;
                            font-size: 18px;
                            font-family: "Georgia", serif;
                        }
                        .subtitle {
                            font-size: 11px;
                            letter-spacing: 2px;
                            color: #8c9d96;
                            margin-bottom: 30px;
                        }
                        .faq-overline {
                            color: #d18d2b;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 1px;
                            margin-bottom: 10px;
                        }
                        .title-main {
                            font-family: "Georgia", serif;
                            font-size: 32px;
                            line-height: 1.2;
                            margin-bottom: 20px;
                            color: #fdfaf6;
                        }
                        .title-desc {
                            font-size: 14px;
                            line-height: 1.6;
                            color: #e5e5e5;
                            margin-bottom: 40px;
                        }
                        .stat-block {
                            border-top: 1px solid rgba(255,255,255,0.1);
                            padding: 15px 0;
                            text-align: left;
                        }
                        .border-none { border-bottom: 1px solid rgba(255,255,255,0.1); }
                        .stat-value {
                            color: #d18d2b;
                            font-size: 18px;
                            font-weight: 600;
                            margin-bottom: 5px;
                        }
                        .stat-label {
                            color: #8c9d96;
                            font-size: 10px;
                            letter-spacing: 1px;
                            font-weight: 600;
                        }
                        .open-book-btn {
                            margin-top: 40px;
                            font-size: 12px;
                            color: #8c9d96;
                            letter-spacing: 1px;
                            cursor: pointer;
                        }

                        /* CREAM PAGE */
                        .notebook-page-cream {
                            background-color: #ffffff;
                            color: #2b3b32;
                            /* background-image: repeating-linear-gradient(
                                transparent,
                                transparent 47px,
                                #e6e2d8 47px,
                                #e6e2d8 48px
                            ); */
                            background-attachment: local;
                            padding: 50px 40px;
                        }
                        .cream-page-header {
                            display: flex;
                            justify-content: space-between;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 2px;
                            margin-bottom: 40px;
                        }
                        .faq-tag {
                            color: #d18d2b;
                        }
                        .page-num {
                            color: #a0a095;
                        }
                        .faq-question {
                            font-family: "Georgia", serif;
                            font-size: 24px;
                            font-weight: 400;
                            line-height: 1.3;
                            color: #112d20;
                            margin-bottom: 20px;
                            padding-right: 10px;
                            background: #ffffff;
                            display: inline-block;
                        }
                        .faq-answer {
                            font-size: 14px;
                            line-height: 48px;
                            color: #4a5d53;
                        }
                        .faq-answer p {
                            margin: 0;
                            line-height: 48px;
                            position: relative;
                            top: -10px;
                        }
                        .faq-answer ul {
                            margin: 0;
                            padding-left: 20px;
                            list-style: none;
                        }
                        .faq-answer li {
                            line-height: 48px;
                            margin: 0;
                            position: relative;
                            top: -10px;
                        }
                        
                        /* NEXT STEP PAGE */
                        .next-step-wrapper {
                            padding: 60px;
                            text-align: center;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            height: 100%;
                            width: 100%;
                        }
                        .next-step-overline {
                            color: #d18d2b;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 2px;
                            margin-bottom: 15px;
                        }
                        .next-step-title {
                            font-family: "Georgia", serif;
                            font-size: 32px;
                            color: #fdfaf6;
                            margin-bottom: 50px;
                        }
                        .btn-primary-orange {
                            background-color: #f18d05;
                            color: #0f271a;
                            border: none;
                            border-radius: 30px;
                            padding: 16px 40px;
                            font-size: 14px;
                            font-weight: 700;
                            width: 100%;
                            max-width: 250px;
                            margin-bottom: 15px;
                            cursor: pointer;
                            transition: background-color 0.2s;
                        }
                        .btn-primary-orange:hover {
                            background-color: #f7a02b;
                        }
                        .btn-secondary-green {
                            background-color: transparent;
                            color: #fdfaf6;
                            border: 1px solid rgba(255,255,255,0.3);
                            border-radius: 30px;
                            padding: 16px 40px;
                            font-size: 14px;
                            font-weight: 700;
                            width: 100%;
                            max-width: 250px;
                            margin-bottom: 60px;
                            cursor: pointer;
                            transition: background-color 0.2s;
                        }
                        .btn-secondary-green:hover {
                            background-color: rgba(255,255,255,0.05);
                        }
                        .flip-back-link {
                            color: #6a7b74;
                            font-size: 11px;
                            letter-spacing: 1px;
                            text-transform: uppercase;
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
            url("/assets/images/about/ctaabt.jpg") center/cover no-repeat`,
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