import React, { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
    const [selected, setSelected] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef(null);

    const reviews = [
        {
            initial: 'L',
            title: 'L&D Director',
            industry: 'Enterprise Technology Provider',
            service: 'E-Learning Module Upgrade',
            metric: '+82%',
            metricLabel: 'Course Completion',
            quote: 'The team transformed our outdated training handbooks into clear, engaging, bite-sized mobile learning paths. Our global team completion rates increased dramatically in just weeks. Truly exceptional work.'
        },
        {
            initial: 'T',
            title: 'Global Talent Acquisition Manager',
            industry: 'International Logistics Group',
            service: 'IT Staff Augmentation',
            metric: '48h',
            metricLabel: 'Avg. Fill Time',
            quote: 'We needed pre-vetted cloud engineering contractors for an urgent software project in Europe. JF Knowledge Centre delivered certified experts within 48 hours — no compromise on quality, no hassle whatsoever.'
        },
        {
            initial: 'C',
            title: 'Chief Operating Officer',
            industry: 'Fast-Growing Retail Enterprise',
            service: 'Fractional CFO & Tax Strategy',
            metric: '100%',
            metricLabel: 'Audit Readiness',
            quote: 'Their certified CPAs straightened out our multi-region corporate tax reporting and set up crystal-clear cash tracking systems. We finally feel perfectly structured to expand globally.'
        }
    ];

    const active = reviews[selected];

    useEffect(() => {
        if (isHovered) { clearTimeout(timerRef.current); return; }
        timerRef.current = setTimeout(() => {
            setSelected(prev => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearTimeout(timerRef.current);
    }, [selected, isHovered, reviews.length]);

    return (
        <>
            <style>{`
                .tes-section {
                    padding: 96px 0;
                    font-family: var(--font-family);
                }

                .tes-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 max(24px, 4vw);
                }

                .tes-header {
                    text-align: center;
                    max-width: 560px;
                    margin: 0 auto 48px;
                }

                .tes-headline {
                    font-size: clamp(28px, 4vw, 40px);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    line-height: 1.15;
                    color: var(--text-heading);
                    margin-top: 12px;
                }

                .tes-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-dark);
                    border-radius: 20px;
                    padding: 48px;
                    max-width: 900px;
                    margin: 0 auto;
                    text-align: center;
                    position: relative;
                }

                .tes-quote-mark {
                    font-size: 64px;
                    line-height: 0.6;
                    color: var(--gold-muted);
                    font-family: "Playfair Display", Georgia, serif;
                    margin-bottom: 16px;
                }

                .tes-quote-text {
                    font-size: clamp(16px, 2vw, 20px);
                    font-style: italic;
                    font-family: "Playfair Display", Georgia, serif;
                    color: var(--text-secondary);
                    line-height: 1.8;
                    margin: 0 0 32px;
                }

                .tes-footer-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 32px;
                    flex-wrap: wrap;
                    padding-top: 24px;
                    border-top: 1px solid var(--border-dark);
                }

                .tes-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: var(--gold-muted);
                    border: 1px solid var(--border-amber);
                    color: var(--gold);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    font-weight: 800;
                }

                .tes-attribution {
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--text-heading);
                }

                .tes-attribution-sub {
                    font-size: 12px;
                    color: var(--text-muted);
                    margin-top: 2px;
                }

                .tes-metric-box {
                    background: var(--gold-muted);
                    border: 1px solid var(--border-amber);
                    border-radius: 12px;
                    padding: 16px 24px;
                }

                .tes-metric-val {
                    font-size: 28px;
                    font-weight: 800;
                    color: var(--gold);
                    line-height: 1;
                }

                .tes-metric-lbl {
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                    margin-top: 4px;
                }

                .tes-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                    margin-top: 32px;
                }

                .tes-tab {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 18px;
                    border-radius: 100px;
                    border: 1px solid var(--border-dark);
                    background: transparent;
                    cursor: pointer;
                    font-family: var(--font-family);
                    font-size: 13px;
                    color: var(--text-secondary);
                    transition: all 0.25s ease;
                }

                .tes-tab.active {
                    border-color: var(--primary);
                    background: var(--primary-muted);
                    color: var(--text-heading);
                }

                .tes-tab-avatar {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: var(--bg-elevated);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                    font-weight: 800;
                    color: var(--gold);
                }

                .tes-tab.active .tes-tab-avatar {
                    background: var(--gold);
                    color: rgb(0, 0, 0);
                }

                @media (max-width: 600px) {
                    .tes-card { padding: 32px 24px; }
                    .tes-tabs { flex-direction: column; align-items: stretch; }
                }
            `}</style>

            <section
                className="tes-section theme-section theme-section--dark"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="tes-container">
                    <div className="tes-header">
                        <span className="jf-overline">Validated Outcomes</span>
                        <h2 className="tes-headline">Success Stories From the Field</h2>
                    </div>

                    <div className="tes-card">
                        <div className="tes-quote-mark">"</div>
                        <p className="tes-quote-text">{active.quote}</p>
                        <div className="tes-footer-row">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <div className="tes-avatar">{active.initial}</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className="tes-attribution">{active.title}</div>
                                    <div className="tes-attribution-sub">{active.industry} · {active.service}</div>
                                </div>
                            </div>
                            <div className="tes-metric-box">
                                <div className="tes-metric-val">{active.metric}</div>
                                <div className="tes-metric-lbl">{active.metricLabel}</div>
                            </div>
                        </div>
                    </div>

                    <div className="tes-tabs">
                        {reviews.map((r, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`tes-tab ${selected === i ? 'active' : ''}`}
                                onClick={() => setSelected(i)}
                            >
                                <span className="tes-tab-avatar">{r.initial}</span>
                                {r.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
