import React, { useState } from 'react';

// Minimal setup navigation hook as provided in the core project configuration
const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function CTASectionVibrant() {
    const [selectedFocus, setSelectedFocus] = useState('learning');

    const options = [
        { key: 'learning', label: 'Corporate E-Learning Development', color: 'rgba(59, 130, 246, 0.1)', border: '#3b82f6' },
        { key: 'staffing', label: 'Contract or Permanent Talent Sourcing', color: 'rgba(168, 85, 247, 0.1)', border: '#a855f7' },
        { key: 'finance', label: 'Corporate Accounting & Financial Strategy', color: 'rgba(234, 179, 8, 0.1)', border: '#eab308' },
    ];

    return (
        <>
            <style>{`
                :root {
                    --vibrant-font: 'Inter', system-ui, -apple-system, sans-serif;
                    --vibrant-bg: #f8fafc;
                    --vibrant-card-bg: #ffffff;
                    --vibrant-text: #0f172a;
                    --vibrant-text-muted: #475569;
                    
                    /* Dynamic Color Triggers */
                    --color-blue: #3b82f6;
                    --color-purple: #a855f7;
                    --color-gold: #eab308;
                }

                .vibrant-section {
                    padding: 100px 0;
                    font-family: var(--vibrant-font);
                    background:

                        url('/assets/images/about/servicebg.png') center / cover no-repeat;
                    background-blend-mode: overlay;
                    position: relative;
                    overflow: hidden;
                }

                /* Subtle Colorful Background Glow Blobs */
                .vibrant-section::before {
                    content: '';
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%);
                    top: -100px;
                    left: -100px;
                    pointer-events: none;
                }

                .vibrant-section::after {
                    content: '';
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%);
                    bottom: -150px;
                    right: -50px;
                    pointer-events: none;
                }

                .vibrant-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 32px;
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 80px;
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
                    letter-spacing: 0.12em;
                    font-weight: 800;
                    background: linear-gradient(90deg, var(--color-blue), var(--color-purple));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    margin-bottom: 16px;
                }

                .vibrant-headline {
                    font-size: clamp(32px, 4vw, 46px);
                    font-weight: 850;
                    letter-spacing: -0.03em;
                    line-height: 1.15;
                    color: var(--vibrant-text);
                    margin: 0 0 24px;
                }

                /* Multi-colored text layout balance */
                .vibrant-headline span.blue-txt { color: var(--color-blue); }
                .vibrant-headline span.purple-txt { color: var(--color-purple); }
                .vibrant-headline span.gold-txt { color: var(--color-gold); }

                .vibrant-copy {
                    font-size: 16px;
                    color: var(--vibrant-text-muted);
                    line-height: 1.75;
                    margin: 0 0 36px;
                    max-width: 520px;
                }

                .vibrant-phone-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 16px;
                    font-weight: 700;
                    color: white;
                    background: linear-gradient(90deg, #1e293b 0%, #0f172a 100%);
                    border: none;
                    padding: 14px 28px;
                    border-radius: 50px;
                    cursor: pointer;
                    box-shadow: 0 10px 25px rgba(15, 23, 92, 0.15);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    margin-bottom: 48px;
                }

                .vibrant-phone-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(15, 23, 92, 0.2);
                }

                /* Multi-Colored Stats Section */
                .vibrant-stats {
                    display: flex;
                    gap: 36px;
                    width: 100%;
                    border-top: 1px solid #e2e8f0;
                    padding-top: 36px;
                }

                .vibrant-stat {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .vibrant-stat-val {
                    font-size: 34px;
                    font-weight: 850;
                    line-height: 1;
                    margin-bottom: 8px;
                }

                /* Explicit mapping of distinct metrics to corporate colors */
                .vibrant-stat:nth-child(1) .vibrant-stat-val { color: var(--color-blue); }
                .vibrant-stat:nth-child(2) .vibrant-stat-val { color: var(--color-purple); }
                .vibrant-stat:nth-child(3) .vibrant-stat-val { color: var(--color-gold); }

                .vibrant-stat-lbl {
                    font-size: 13px;
                    color: var(--vibrant-text-muted);
                    font-weight: 600;
                    line-height: 1.4;
                }

                /* Right Container Card Styles */
                .vibrant-form-card {
                    background: var(--vibrant-card-bg);
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    border-radius: 24px;
                    padding: 44px;
                    box-shadow: 0 25px 60px rgba(15, 23, 42, 0.06);
                    position: relative;
                }

                .vibrant-form-title {
                    font-size: 22px;
                    font-weight: 800;
                    color: var(--vibrant-text);
                    letter-spacing: -0.01em;
                    margin-bottom: 24px;
                }

                .vibrant-focus-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 32px;
                }

                /* Individual Option Buttons with dynamic active coloration */
                .vibrant-focus-btn {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px 20px;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    background: #ffffff;
                    cursor: pointer;
                    text-align: left;
                    font-family: var(--vibrant-font);
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--vibrant-text-muted);
                    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                    width: 100%;
                }

                .vibrant-focus-btn:hover {
                    border-color: #cbd5e1;
                    transform: translateX(4px);
                }

                /* Specific Active State Overrides Mapping directly to colors */
                .vibrant-focus-btn.active-learning {
                    border-color: var(--color-blue);
                    background-color: rgba(59, 130, 246, 0.05);
                    color: var(--color-blue);
                }
                .vibrant-focus-btn.active-staffing {
                    border-color: var(--color-purple);
                    background-color: rgba(168, 85, 247, 0.05);
                    color: var(--color-purple);
                }
                .vibrant-focus-btn.active-finance {
                    border-color: var(--color-gold);
                    background-color: rgba(234, 179, 8, 0.05);
                    color: #d97706; /* Darkened slightly for contrast safety */
                }

                .vibrant-indicator-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: transparent;
                    border: 2px solid #cbd5e1;
                    transition: all 0.2s ease;
                }

                .active-learning .vibrant-indicator-dot { background: var(--color-blue); border-color: var(--color-blue); }
                .active-staffing .vibrant-indicator-dot { background: var(--color-purple); border-color: var(--color-purple); }
                .active-finance .vibrant-indicator-dot { background: var(--color-gold); border-color: var(--color-gold); }

                /* Structured Input Management */
                .vibrant-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .vibrant-input {
                    width: 100%;
                    padding: 14px 18px;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    background: #f8fafc;
                    font-family: var(--vibrant-font);
                    font-size: 14px;
                    color: var(--vibrant-text);
                    transition: all 0.15s ease;
                    box-sizing: border-box;
                }

                .vibrant-input:focus {
                    outline: none;
                    border-color: #94a3b8;
                    background: #ffffff;
                    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
                }

                .vibrant-submit-btn {
                    width: 100%;
                    padding: 16px;
                    border: none;
                    border-radius: 10px;
                    background: linear-gradient(90deg, var(--color-blue) 0%, var(--color-purple) 100%);
                    color: white;
                    font-weight: 700;
                    font-size: 15px;
                    cursor: pointer;
                    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }

                .vibrant-submit-btn:hover {
                    opacity: 0.95;
                    transform: translateY(-1px);
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
                    .vibrant-stats {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }
            `}</style>

            <section className="vibrant-section">
                <div className="vibrant-container">
                    
                    {/* Left Column Layout Info */}
                    <div className="vibrant-intro">
                        <span className="vibrant-overline" style={{ color: 'black' }}>Start a Conversation</span>
                        <h2 className="vibrant-headline">
                            Connecting You to Solutions That <span className="blue-txt">Drive</span> <span className="purple-txt">Global</span> <span className="gold-txt">Results.</span>
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
                        
                        <div className="vibrant-stats">
                            {[
                                { val: '24h', lbl: 'Initial Assessment Turnaround' },
                                { val: 'Global', lbl: 'Cross-Border Delivery Hubs' },
                                { val: '100%', lbl: 'No-Obligation Consultation' }
                            ].map((s, i) => (
                                <div key={i} className="vibrant-stat">
                                    <div className="vibrant-stat-val">{s.val}</div>
                                    <div className="vibrant-stat-lbl">{s.lbl}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column Layout Form Card */}
                    <div className="vibrant-form-card">
                        <div className="vibrant-form-title">Book a Strategy Session</div>

                        <div className="vibrant-focus-list">
                            {options.map(opt => (
                                <button
                                    key={opt.key}
                                    type="button"
                                    className={`vibrant-focus-btn ${selectedFocus === opt.key ? `active-${opt.key}` : ''}`}
                                    onClick={() => setSelectedFocus(opt.key)}
                                >
                                    {opt.label}
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