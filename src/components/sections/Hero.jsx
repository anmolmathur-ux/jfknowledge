import React, { useState, useEffect } from 'react';

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

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>{`
                .hero-shell {
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    min-height: 100dvh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    font-family: var(--font-family);
                    background: linear-gradient(120deg, rgba(1, 2, 10, 0.96) 0%, rgba(8, 15, 38, 0.92) 45%, rgba(1, 2, 10, 0.78) 100%);
                }

                .hero-video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        105deg,
                        rgba(1, 2, 10, 0.92) 0%,
                        rgba(8, 15, 38, 0.78) 45%,
                        rgba(1, 2, 10, 0.55) 100%
                    );
                    z-index: 1;
                }

                .hero-glow {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50%;
                    height: 50%;
                    background: radial-gradient(ellipse at 20% 80%, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
                    z-index: 2;
                    pointer-events: none;
                }

                .hero-inner {
                    position: relative;
                    z-index: 5;
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 120px max(24px, 4vw) 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    gap: 24px;
                }

                .hero-content-block {
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .hero-content-block.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-overline {
                    margin-bottom: 20px;
                }

                .hero-headline {
                    font-size: clamp(36px, 5.5vw, 64px);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    line-height: 1.08;
                    color: var(--text-heading);
                    margin: 0 auto 24px;
                    max-width: 780px;
                }

                .hero-headline em {
                    font-style: normal;
                    background: var(--gold-gradient-hero);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }

                .hero-subtext {
                    font-size: clamp(15px, 1.4vw, 17px);
                    line-height: 1.75;
                    color: var(--text-secondary);
                    max-width: 680px;
                    margin: 0 auto 36px;
                }

                .hero-cta-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                @media (max-width: 960px) {
                    .hero-inner {
                        padding-top: 100px;
                        padding-bottom: 60px;
                    }
                }

                .hero-strip-label {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                }

                .hero-strip-stats {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                    flex-wrap: wrap;
                }

                .hero-slide-indicators {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                }

                .hero-indicator {
                    width: 12px;
                    height: 12px;
                    border-radius: 999px;
                    background: rgba(255, 255, 255, 0.22);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    cursor: pointer;
                    transition: transform 0.2s ease, background 0.2s ease;
                }

                .hero-indicator.active {
                    width: 18px;
                    background: var(--gold);
                    transform: scale(1.05);
                }

                .hero-stat-val {
                    font-size: 22px;
                    font-weight: 800;
                    color: var(--gold);
                    letter-spacing: -0.03em;
                    line-height: 1;
                }

                .hero-stat-lbl {
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                    margin-top: 4px;
                }

                @media (max-width: 960px) {
                    .hero-inner {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        padding-top: 100px;
                        padding-bottom: 60px;
                    }
                    .hero-strip-stats { gap: 24px; }
                }
            `}</style>

            <section className="hero-shell">
                <video className="hero-video" autoPlay loop muted playsInline preload="auto">
                    <source src="/assets/images/about/bgvid.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay" />
                <div className="hero-glow" />

                <div className="hero-inner">
                    {slides.map((slide, index) => (
                        <div key={slide.title} className={`hero-content-block ${loaded ? 'visible' : ''}`} style={{ display: activeSlide === index ? 'block' : 'none' }}>
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

                    <div className="hero-slide-indicators" style={{ display: 'flex', gap: '12px', marginTop: '36px', justifyContent: 'center' }}>
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
            </section>
        </>
    );
}
