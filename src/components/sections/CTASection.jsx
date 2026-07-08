import React, { useState } from 'react';

// Minimal setup navigation hook as provided in the core project configuration
const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function CTASectionVibrant() {
    const [selectedFocus, setSelectedFocus] = useState('learning');

    const options = [
        { key: 'learning', label: 'Corporate E-Learning Development', icon: '🎓' },
        { key: 'staffing', label: 'Talent Sourcing', icon: '👥' },
        { key: 'finance', label: 'Financial Strategy', icon: '📊' },
    ];

    return (
        <>
            <style>{`
                :root {
                    --vibrant-font: 'Inter', system-ui, -apple-system, sans-serif;
                    --vibrant-bg: #07101f;
                    --vibrant-card-bg: rgba(14, 22, 40, 0.78);
                    --vibrant-text: #ffffff;
                    --vibrant-text-muted: rgba(255, 255, 255, 0.72);
                    
                    /* Dynamic Color Triggers */
                    --color-blue: #3b82f6;
                    --color-purple: #a855f7;
                    --color-gold: #eab308;
                }

                .vibrant-section {
                    padding: 120px 0;
                    font-family: var(--vibrant-font);
                    position: relative;
                    overflow: hidden;
                    color: var(--vibrant-text);
                }

                /* 1. Premium Overlays and 9. Floating Decorative Elements */
                .vibrant-section::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        rgba(6, 12, 24, 0.72) 0%,
                        rgba(6, 12, 24, 0.58) 35%,
                        rgba(6, 12, 24, 0.42) 70%,
                        rgba(6, 12, 24, 0.55) 100
                    );
                    z-index: 1;
                }

                /* Top Right Floating Glow */
                .vibrant-section-glow-tr {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(37, 99, 235, 0.14), transparent 70%);
                    pointer-events: none;
                    z-index: 2;
                }

                /* Bottom Left Floating Glow */
                .vibrant-section-glow-bl {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(96, 165, 250, 0.08), transparent 70%);
                    pointer-events: none;
                    z-index: 2;
                }

                /* 12. Increased Space Between Columns to 110px */
                .vibrant-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 32px;
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: 110px;
                    align-items: center;
                    position: relative;
                    z-index: 3;
                }

                /* Left Content Styles */
                .vibrant-intro {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .vibrant-overline {
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    font-weight: 700;
                    color: #60A5FA;
                    margin-bottom: 20px;
                }

                /* 2. Headline Ambient Glow & 10. Styled Headings with Height adjustments */
                .vibrant-headline {
                    position: relative;
                    font-size: clamp(34px, 4.2vw, 48px);
                    font-weight: 850;
                    letter-spacing: -0.03em;
                    line-height: 1.25;
                    color: var(--vibrant-text);
                    margin: 0 0 24px;
                }

                .vibrant-headline::before {
                    content: "";
                    position: absolute;
                    width: 420px;
                    height: 220px;
                    background: radial-gradient(circle, rgba(37, 99, 235, 0.18), transparent 70%);
                    left: -80px;
                    top: -60px;
                    filter: blur(40px);
                    z-index: -1;
                    pointer-events: none;
                }

                .vibrant-headline span.blue-txt { 
                    color: var(--color-blue); 
                }

                /* 10. Reduced Paragraph Width to 520px */
                .vibrant-copy {
                    font-size: 16px;
                    color: var(--vibrant-text-muted);
                    line-height: 1.8;
                    margin: 0 0 40px;
                    max-width: 520px;
                }

                /* 3. Premium Glass Phone Button */
                .vibrant-phone-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 15px;
                    font-weight: 700;
                    color: white;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.08));
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    padding: 14px 28px;
                    border-radius: 50px;
                    cursor: pointer;
                    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
                    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
                    margin-bottom: 56px;
                }

                .vibrant-phone-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 25px 60px rgba(37, 99, 235, 0.30);
                }

                /* 11. Integrated Apple/Vercel-Style Glass Metric Strip */
                .vibrant-stats-strip {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    width: 100%;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 24px 16px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                }

                /* 8. Modern Metrics Box styling instead of equal rectangles */
                .vibrant-stat-box {
                    display: flex;
                    flex-direction: column;
                    padding: 4px 20px;
                    background: rgba(255, 255, 255, 0.04);
                    border-left: 3px solid #2563EB;
                }

                .vibrant-stat-box:not(:first-child) {
                    margin-left: -1px;
                }

                .vibrant-stat-val {
                    font-size: 28px;
                    font-weight: 900;
                    line-height: 1.1;
                    color: white;
                    margin-bottom: 4px;
                }

                .vibrant-stat-lbl {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.55);
                    font-weight: 500;
                    line-height: 1.3;
                }

                /* 4. Premium Form Card with Blue Top Accent Bar */
                .vibrant-form-card {
                    background: linear-gradient(180deg, rgba(18, 28, 48, 0.82), rgba(8, 15, 28, 0.94));
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    border-radius: 24px;
                    padding: 44px;
                    box-shadow: 0 35px 90px rgba(0, 0, 0, 0.45);
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                    position: relative;
                    overflow: hidden;
                }

                .vibrant-form-card::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(90deg, #2563EB, #60A5FA, #2563EB);
                }

                .vibrant-form-title-group {
                    margin-bottom: 28px;
                }

                .vibrant-form-title {
                    font-size: 26px;
                    font-weight: 800;
                    color: #fff;
                    letter-spacing: -0.01em;
                    margin-bottom: 6px;
                }

                .vibrant-form-subtitle {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.55);
                }

                .vibrant-focus-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 32px;
                }

                /* 5. Focus Button Configurations (Active & Inactive) */
                .vibrant-focus-btn {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px 20px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    cursor: pointer;
                    text-align: left;
                    font-family: var(--vibrant-font);
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.75);
                    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
                    width: 100%;
                }

                .vibrant-focus-btn:hover {
                    background: rgba(255, 255, 255, 0.07);
                    color: #fff;
                }

                /* Interactive Active State Overrides */
                .vibrant-focus-btn.active {
                    background: linear-gradient(90deg, rgba(37, 99, 235, 0.28), rgba(37, 99, 235, 0.10));
                    border-color: #60A5FA;
                    color: #fff;
                    transform: translateX(8px);
                    box-shadow: 0 0 25px rgba(37, 99, 235, 0.20);
                }

                .vibrant-btn-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .vibrant-indicator-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: transparent;
                    border: 2px solid rgba(255, 255, 255, 0.25);
                    transition: all 0.2s ease;
                }

                .vibrant-focus-btn.active .vibrant-indicator-dot {
                    background: #60A5FA;
                    border-color: #60A5FA;
                    box-shadow: 0 0 8px #60A5FA;
                }

                /* 7. Input Fields Depth Enhancement */
                .vibrant-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .vibrant-input {
                    width: 100%;
                    padding: 14px 18px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border-radius: 10px;
                    font-family: var(--vibrant-font);
                    font-size: 14px;
                    color: #fff;
                    transition: all 0.2s ease;
                    box-sizing: border-box;
                }
                
                .vibrant-input::placeholder {
                    color: rgba(255, 255, 255, 0.45);
                }

                .vibrant-input:focus {
                    outline: none;
                    border-color: #60A5FA;
                    background: rgba(255, 255, 255, 0.07);
                    box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.12);
                }

                /* Solid High-Contrast Bottom CTA Button */
                .vibrant-submit-btn {
                    width: 100%;
                    padding: 16px;
                    border: none;
                    border-radius: 10px;
                    background: linear-gradient(135deg, #2563EB, #1D4ED8);
                    color: white;
                    font-weight: 700;
                    font-size: 15px;
                    cursor: pointer;
                    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.35);
                    transition: filter 0.2s ease, transform 0.2s ease;
                }

                .vibrant-submit-btn:hover {
                    transform: translateY(-3px);
                    filter: brightness(1.08);
                }

                .vibrant-form-note {
                    font-size: 12px;
                    color: var(--vibrant-text-muted);
                    text-align: center;
                    margin-top: 24px;
                    font-weight: 500;
                }

                @media (max-width: 960px) {
                    .vibrant-container {
                        grid-template-columns: 1fr;
                        gap: 56px;
                        text-align: center;
                    }
                    .vibrant-intro {
                        align-items: center;
                    }
                    .vibrant-stats-strip {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    .vibrant-stat-box {
                        border-left: 3px solid #2563EB;
                        padding: 4px 16px;
                    }
                    .vibrant-focus-btn.active {
                        transform: none;
                    }
                }
            `}</style>

            <section 
                className="vibrant-section"
                style={{
                    backgroundImage: "url('/assets/images/about/contactbg.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Decorative depth blobs */}
                <div className="vibrant-section-glow-tr" />
                <div className="vibrant-section-glow-bl" />

                <div className="vibrant-container">
                    
                    {/* Left Column Area */}
                    <div className="vibrant-intro">
                        <span className="vibrant-overline">Start a Conversation</span>
                        <h2 className="vibrant-headline">
                            Connecting You<br />to <span className="blue-txt">Solutions</span> That Drive Results.
                        </h2>
                        <p className="vibrant-copy">
                            Whether you need custom e-learning platforms, enterprise executive recruitment
                            pipelines, or deep corporate financial audits — our integrated divisions deliver 
                            seamless cross-border execution.
                        </p>
                        
                        <button className="vibrant-phone-btn" onClick={() => navigate('/contact')}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Talk to an Expert
                        </button>
                        
                        {/* 11. Glass Ribbon Metrics Block Container */}
                        <div className="vibrant-stats-strip">
                            {[
                                { val: '24h', lbl: 'Initial Response Assessment' },
                                { val: 'Global', lbl: 'Active Delivery Network' },
                                { val: '100%', lbl: 'Confidential Consultation' }
                            ].map((s, i) => (
                                <div key={i} className="vibrant-stat-box">
                                    <div className="vibrant-stat-val">{s.val}</div>
                                    <div className="vibrant-stat-lbl">{s.lbl}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column Area Form Card */}
                    <div className="vibrant-form-card">
                        <div className="vibrant-form-title-group">
                            <div className="vibrant-form-title">Book a Strategy Session</div>
                            <div className="vibrant-form-subtitle">Select a focus area below to begin</div>
                        </div>

                        {/* 6. List with Unicode Scan Icons & State triggers */}
                        <div className="vibrant-focus-list">
                            {options.map(opt => (
                                <button
                                    key={opt.key}
                                    type="button"
                                    className={`vibrant-focus-btn ${selectedFocus === opt.key ? 'active' : ''}`}
                                    onClick={() => setSelectedFocus(opt.key)}
                                >
                                    <div className="vibrant-btn-content">
                                        <span style={{ fontSize: '16px' }}>{opt.icon}</span>
                                        <span>{opt.label}</span>
                                    </div>
                                    <div className="vibrant-indicator-dot" />
                                </button>
                            ))}
                        </div>

                        <div className="vibrant-input-group">
                            <input className="vibrant-input" type="text" placeholder="Your Name" />
                            <input className="vibrant-input" type="email" placeholder="Work Email" />
                            <input className="vibrant-input" type="text" placeholder="Company / Organization" />
                            <button className="vibrant-submit-btn" onClick={() => navigate('/contact')}>
                                Submit Request
                            </button>
                        </div>
                        <p className="vibrant-form-note">Complete confidentiality guaranteed.</p>
                    </div>

                </div>
            </section>
        </>
    );
}