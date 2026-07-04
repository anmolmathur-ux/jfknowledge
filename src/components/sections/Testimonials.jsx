import React, { useState } from 'react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function Testimonials() {
    const [selected, setSelected] = useState(0);

    const reviews = [
        {
            initial: 'L',
            title: 'L&D Director',
            industry: 'Enterprise Technology Provider',
            service: 'E-Learning Module Upgrade',
            metric: '+82%',
            metricLabel: 'Course Completion',
            color: '#9747FF',
            quote: 'The team transformed our outdated training handbooks into clear, engaging, bite-sized mobile learning paths. Our global team completion rates increased dramatically in just a matter of weeks. Truly exceptional work.'
        },
        {
            initial: 'T',
            title: 'Global Talent Acquisition Manager',
            industry: 'International Logistics Group',
            service: 'IT Staff Augmentation',
            metric: '48h',
            metricLabel: 'Avg. Fill Time',
            color: '#22d3ee',
            quote: 'We needed pre-vetted cloud engineering contractors for an urgent software project in Europe. JF Knowledge Centre delivered certified experts within 48 hours — no compromise on quality, no hassle whatsoever.'
        },
        {
            initial: 'C',
            title: 'Chief Operating Officer',
            industry: 'Fast-Growing Retail Enterprise',
            service: 'Fractional CFO & Tax Strategy',
            metric: '100%',
            metricLabel: 'Audit Readiness',
            color: '#34d399',
            quote: 'Their certified CPAs straightened out our multi-region corporate tax reporting and set up crystal-clear cash tracking systems. We finally feel perfectly structured and confident to expand our operations globally.'
        }
    ];

    const active = reviews[selected];

    return (
        <>
            <style>{`
                .tes-selector {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 16px 20px;
                    border-radius: 14px;
                    border: 1px solid rgba(255,255,255,0.06);
                    background: rgba(255,255,255,0.02);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-family: 'Poppins', sans-serif;
                    text-align: left;
                    width: 100%;
                }
                .tes-selector:hover {
                    background: rgba(13, 148, 136,0.06);
                    border-color: rgba(13, 148, 136,0.2);
                }
                .tes-selector.active-sel {
                    border-color: var(--sel-color);
                    background: var(--sel-bg);
                }
                .tes-nav-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }
            `}</style>

            <section style={{ padding: '120px 40px', background: '#0a0a0d', fontFamily: "'Poppins', sans-serif", position: 'relative', overflow: 'hidden' }}>

                {/* Decorative */}
                <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13, 148, 136,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

                    {/* Header */}
                    <div style={{ marginBottom: '60px' }}>
                        <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: '700', color: '#0D9488', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '14px' }}>
                            Validated Outcomes
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', color: "var(--text-primary)", margin: '0 0 16px 0', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                            Success Stories<br />
                            <span style={{ background: 'linear-gradient(95deg, #0D9488, #0F766E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>From the Field</span>
                        </h2>
                    </div>

                    {/* Layout */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '24px', alignItems: 'start' }}>

                        {/* Left: Selectors */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {reviews.map((r, i) => (
                                <button key={i}
                                    className={`tes-selector ${selected === i ? 'active-sel' : ''}`}
                                    style={{ '--sel-color': r.color, '--sel-bg': `${r.color}12` }}
                                    onClick={() => setSelected(i)}>
                                    {/* Avatar */}
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${r.color}22`, border: `1px solid ${r.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <span style={{ fontSize: '16px', fontWeight: '800', color: r.color }}>{r.initial}</span>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '13px', fontWeight: '700', color: selected === i ? '#fef5f0' : 'rgba(254,245,240,0.6)', lineHeight: 1.3 }}>{r.title}</div>
                                        <div style={{ fontSize: '11px', color: 'rgba(254,245,240,0.3)', marginTop: '2px' }}>{r.industry}</div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Right: Active quote card */}
                        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(13, 148, 136,0.12)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px', backdropFilter: 'blur(12px)' }}>

                            {/* Quote mark */}
                            <div style={{ fontSize: '64px', lineHeight: 1, color: active.color, opacity: 0.3, fontFamily: 'Georgia, serif', marginBottom: '-16px' }}>"</div>

                            {/* Quote */}
                            <p style={{ fontSize: '16px', fontStyle: 'italic', color: 'rgba(254,245,240,0.75)', lineHeight: 1.8, margin: 0 }}>
                                {active.quote}
                            </p>

                            {/* Divider */}
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                            {/* Bottom row */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                                <div>
                                    <div style={{ fontSize: '14px', fontWeight: '700', color: "var(--text-primary)" }}>— Verified Partner Executive</div>
                                    <div style={{ fontSize: '12px', color: 'rgba(254,245,240,0.35)', marginTop: '3px' }}>{active.service}</div>
                                </div>
                                <div style={{ background: `${active.color}18`, border: `1px solid ${active.color}33`, borderRadius: '14px', padding: '14px 22px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '28px', fontWeight: '800', color: active.color, lineHeight: 1, letterSpacing: '-0.02em' }}>{active.metric}</div>
                                    <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(254,245,240,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '4px' }}>{active.metricLabel}</div>
                                </div>
                            </div>

                            {/* Nav dots */}
                            <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', paddingTop: '8px' }}>
                                {reviews.map((r, i) => (
                                    <button key={i} className="tes-nav-dot"
                                        onClick={() => setSelected(i)}
                                        style={{ background: selected === i ? '#0D9488' : 'rgba(255,255,255,0.15)' }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}