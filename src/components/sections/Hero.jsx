import React, { useState, useEffect, useRef } from 'react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function Hero() {
    const slides = [
        {
            eyebrow: 'Global Professional Services',
            title: 'Empowering Talent.',
            accent: 'Elevating Growth.',
            description: 'JF Knowledge Centre blends learning, staffing, and finance into a single delivery engine that helps organisations scale faster with lower risk.',
            cta: 'Begin Your Journey',
            subCta: 'Discover Our Story',
            href: '/contact',
            subHref: '/about',
        },
        {
            eyebrow: 'Integrated Business Solutions',
            title: 'Learn Better.',
            accent: 'Hire Smarter.',
            description: 'From custom digital learning to executive recruitment and financial optimisation, our teams deliver seamless value across every business function.',
            cta: 'Book a Consultation',
            subCta: 'View Services',
            href: '/contact',
            subHref: '/services',
        },
        {
            eyebrow: 'Performance-Driven Outcomes',
            title: 'Scale With Confidence.',
            accent: 'Operate With Clarity.',
            description: 'We help leaders build durable talent systems, modern learning ecosystems, and finance functions that support rapid global expansion.',
            cta: 'Schedule a Call',
            subCta: 'Why JF Works',
            href: '/contact',
            subHref: '/why-jf',
        }
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);
    const [showHint, setShowHint] = useState(true);

    // Initial load transition trigger
    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(t);
    }, []);

    // Slide rotation interval logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const toggleAudio = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setMuted(videoRef.current.muted);
        if (showHint) setShowHint(false);
    };

    return (
        <>
            <style>{`
                /* Container fits viewport minus custom navbar height */
                .hero-shell {
                    position: relative;
                    width: 100%;
                    height: calc(100vh - 90px);
                    min-height: 620px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    font-family: var(--font-family);
                    background: #000;
                }

                /* Fixed base video element layer */
                .hero-video-wrapper {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .hero-video {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    object-position: right center;
                }

                /* Translucent shadow panel to optimize left-side typography contrast */
                .hero-left-gradient {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.85) 0%,
                        rgba(0, 0, 0, 0.4) 45%,
                        transparent 75%
                    );
                    z-index: 2;
                    pointer-events: none;
                }

                /* Grid shell mapping space across the frame */
                .hero-inner {
                    position: relative;
                    z-index: 5;
                    width: 100%;
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 max(24px, 4vw);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                }

                /* Content slide block structure */
                .hero-content-block {
                    max-width: 540px;
                    text-align: left;
                    opacity: 0;
                    transform: translateX(-20px);
                    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
                }

                .hero-content-block.visible {
                    opacity: 1;
                    transform: translateX(0);
                }

                .hero-overline {
                    margin-bottom: 20px;
                    display: inline-block;
                }

                .hero-headline {
                    font-size: clamp(34px, 4.2vw, 54px);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    line-height: 1.12;
                    color: var(--text-heading, #fff);
                    margin: 0 0 20px 0;
                }

                .hero-headline em {
                    font-style: normal;
                    background: var(--gold-gradient-hero, linear-gradient(90deg, #f59e0b, #d97706));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }

                .hero-subtext {
                    font-size: clamp(15px, 1.2vw, 16px);
                    line-height: 1.65;
                    color: var(--text-secondary, #cbd5e1);
                    margin: 0 0 32px 0;
                    min-height: 80px; /* Reserves uniform spacing for varying text lengths */
                }

                .hero-cta-row {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                /* Left-aligned pagination dots */
                .hero-slide-indicators {
                    display: flex;
                    gap: 12px;
                    margin-top: 40px;
                    justify-content: flex-start;
                }

                .hero-indicator {
                    width: 12px;
                    height: 12px;
                    border-radius: 999px;
                    background: rgba(255, 255, 255, 0.25);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    cursor: pointer;
                    padding: 0;
                    transition: transform 0.2s ease, background 0.2s ease, width 0.2s ease;
                }

                .hero-indicator.active {
                    width: 22px;
                    background: var(--gold, #f59e0b);
                    transform: scale(1.02);
                }

                /* Sound controls HUD */
                .hero-audio-btn {
                    position: absolute;
                    right: 32px;
                    bottom: 32px;
                    width: 54px;
                    height: 54px;
                    border-radius: 50%;
                    border: 1px solid rgba(255, 255, 255, .15);
                    background: rgba(8, 15, 30, .6);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    cursor: pointer;
                    transition: .3s ease;
                    z-index: 10;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, .4);
                }

                .hero-audio-btn:hover {
                    transform: scale(1.05);
                    background: #2563EB;
                    border-color: #2563EB;
                }

                .hero-audio-hint {
                    position: absolute;
                    right: 98px;
                    bottom: 42px;
                    background: rgba(0, 0, 0, 0.8);
                    color: #fff;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 500;
                    pointer-events: none;
                    z-index: 10;
                    white-space: nowrap;
                    opacity: 1;
                    transition: opacity 0.4s ease, transform 0.4s ease;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .hero-audio-hint.fade-out {
                    opacity: 0;
                    transform: translateX(10px);
                }

                /* Responsive formatting fallback for smaller viewports */
                @media (max-width: 820px) {
                    .hero-shell {
                        height: auto;
                        min-height: 100vh;
                        padding-top: 60px;
                        padding-bottom: 90px;
                    }
                    .hero-video {
                        object-position: center center;
                    }
                    .hero-left-gradient {
                        background: linear-gradient(
                            180deg,
                            rgba(0, 0, 0, 0.85) 0%,
                            rgba(0, 0, 0, 0.65) 60%,
                            rgba(0, 0, 0, 0.5) 100%
                        );
                    }
                    .hero-inner {
                        align-items: center;
                    }
                    .hero-content-block {
                        text-align: center;
                        max-width: 100%;
                    }
                    .hero-subtext {
                        min-height: auto;
                    }
                    .hero-cta-row {
                        justify-content: center;
                    }
                    .hero-slide-indicators {
                        justify-content: center;
                        margin-top: 30px;
                    }
                    .hero-audio-btn {
                        right: 20px;
                        bottom: 20px;
                    }
                    .hero-audio-hint {
                        right: 84px;
                        bottom: 30px;
                    }
                }
            `}</style>

            <section className="hero-shell">
                {/* Background Video Frame Canvas */}
                <div className="hero-video-wrapper">
                    <video 
                        ref={videoRef}
                        className="hero-video" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        preload="auto"
                    >
                        <source src="/assets/images/about/hero.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Left Side Shadow Gradient Matting */}
                <div className="hero-left-gradient" />

                {/* Left Aligned Dynamic Slide Track */}
                <div className="hero-inner">
                    {slides.map((slide, index) => (
                        <div 
                            key={slide.title} 
                            className={`hero-content-block ${loaded && activeSlide === index ? 'visible' : ''}`} 
                            style={{ display: activeSlide === index ? 'block' : 'none' }}
                        >
                            <span className="jf-overline hero-overline">{slide.eyebrow}</span>
                            <h1 className="hero-headline">
                                {slide.title}<br />
                                <em>{slide.accent}</em>
                            </h1>
                            <p className="hero-subtext">{slide.description}</p>
                            
                            <div className="hero-cta-row hero-cta">
                                <button className="jf-btn-primary jf-btn-primary-hero" onClick={() => navigate(slide.href)}>
                                    {slide.cta}
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>
                                <button className="jf-btn-outline" onClick={() => navigate(slide.subHref)}>
                                    {slide.subCta}
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Indicators aligned to the left matching text framework */}
                    <div className="hero-slide-indicators">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                className={`hero-indicator ${activeSlide === idx ? 'active' : ''}`}
                                onClick={() => setActiveSlide(idx)}
                                aria-label={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating Sound Controller elements */}
                <div className={`hero-audio-hint ${!showHint ? 'fade-out' : ''}`}>
                    🔊 Tap for sound
                </div>

                <button 
                    className="hero-audio-btn" 
                    onClick={toggleAudio}
                    aria-label={muted ? "Unmute sound" : "Mute sound"}
                >
                    {muted ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <line x1="22" y1="9" x2="16" y2="15"></line>
                            <line x1="16" y1="9" x2="22" y2="15"></line>
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        </svg>
                    )}
                </button>
            </section>
        </>
    );
}