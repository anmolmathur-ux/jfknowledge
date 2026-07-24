import React, { useState } from 'react';
import {
    GraduationCap,
    Users,
    TrendingUp,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

// Minimal setup navigation hook as provided in the core project configuration
const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function CTASectionVibrant() {
    const [selectedFocus, setSelectedFocus] = useState('learning');

    const options = [
        { key: 'learning', label: 'Corporate Learning', icon: GraduationCap, color: '#3B82F6', glow: 'rgba(59,130,246,0.35)' },
        { key: 'talent', label: 'Talent', icon: Users, color: '#A855F7', glow: 'rgba(168,85,247,0.35)' },
        { key: 'finance', label: 'Finance', icon: TrendingUp, color: '#10B981', glow: 'rgba(16,185,129,0.35)' },
    ];

    return (
        <>
            <style>{`
                :root {
                    --vibrant-font: 'Inter', system-ui, -apple-system, sans-serif;
                    --vibrant-bg: #050c1c;
                    --vibrant-text: #ffffff;
                }

                .vibrant-section {
                    padding: 100px 0;
                    font-family: var(--vibrant-font);
                    position: relative;
                    overflow: hidden;
                    color: var(--vibrant-text);
                    background-color: var(--vibrant-bg);
                }

                /* Improved Background Overlay */
                .vibrant-section::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        rgba(5, 12, 28, 0.82) 0%,
                        rgba(8, 20, 45, 0.62) 45%,
                        rgba(18, 40, 80, 0.35) 100%
                    );
                    z-index: 1;
                }

                /* Floating Ambient Elements */
                .vibrant-floating-decorations {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    opacity: 0.15;
                    z-index: 2;
                }
                .vibrant-blob-1 {
                    position: absolute;
                    top: 10%;
                    left: 5%;
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, #3b82f6, transparent 70%);
                    animation: floatSlow 12s infinite alternate ease-in-out;
                }
                .vibrant-blob-2 {
                    position: absolute;
                    bottom: 15%;
                    right: 45%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, #00e0ff, transparent 70%);
                    animation: floatSlow 18s infinite alternate-reverse ease-in-out;
                }
                .vibrant-grid-dots {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
                    background-size: 24px 24px;
                }

                @keyframes floatSlow {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(30px, -40px) scale(1.1); }
                }

                /* Container Layout Setup */
                .vibrant-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 32px;
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 60px;
                    align-items: center;
                    position: relative;
                    z-index: 3;
                }

                /* Glass Divider (Visible on Desktops Only) */
                @media (min-width: 961px) {
                    .vibrant-container::after {
                        content: "";
                        position: absolute;
                        top: 20%;
                        left: 56%;
                        width: 1px;
                        height: 60%;
                        background: rgba(255, 255, 255, 0.08);
                    }
                }

                /* Left Content Styles */
                .vibrant-intro {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                /* Heading setup with distinct line modifications */
                .vibrant-headline {
                    font-size: clamp(34px, 4.2vw, 48px);
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin: 0 0 24px;
                }
                .vh-white-1 { color: #FFFFFF; }
                .vh-blue-sub { color: #C7D2FE; font-size: 0.85em; display: block; margin: 2px 0; }
                .vh-white-2 { color: #FFFFFF; display: block; margin-top: 2px; }
                
                /* Gradient logic for the primary highlighted word */
                .blue-txt {
                    background: linear-gradient(90deg, #4F8CFF, #00E0FF);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    display: inline-block;
                }

                /* Upgraded readable text paragraph */
                .vibrant-copy {
                    font-size: 18px;
                    line-height: 1.8;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.85);
                    margin: 0 0 28px;
                    max-width: 520px;
                }

                /* Premium Main Call to Action Button */
                .vibrant-phone-btn-wrap {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 44px;
                    gap: 8px;
                }

                .vibrant-phone-btn {
                    display: inline-flex;
                    align-items: center;
                    font-size: 15px;
                    font-weight: 700;
                    color: white;
                    background: linear-gradient(180deg, #3B82F6, #2563EB);
                    border: none;
                    padding: 14px 32px;
                    border-radius: 50px;
                    cursor: pointer;
                    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.35);
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
                }

                .vibrant-phone-btn:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5);
                }

                .vibrant-phone-subtext {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.6);
                    padding-left: 14px;
                    font-weight: 500;
                }

                /* Floating Glass Metrics Component Configuration */
                .vibrant-stats-strip {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                    width: 100%;
                }

                .vibrant-stat-card {
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border-radius: 12px;
                    padding: 16px 12px;
                    text-align: center;
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background-color 0.3s ease;
                }

                .vibrant-stat-card:hover {
                    transform: translateY(-6px) scale(1.03);
                    background: rgba(255, 255, 255, 0.12);
                    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.15);
                }

                .vibrant-stat-val {
                    font-size: 26px;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 4px;
                    background: linear-gradient(180deg, #fff, rgba(255,255,255,0.7));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .vibrant-stat-lbl {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.65);
                    font-weight: 500;
                    line-height: 1.3;
                }

                /* --- COMPACT RIGHT COLUMN FORM CARD CHANGES --- */
                .vibrant-form-card {
                    background: linear-gradient(180deg, rgba(28, 40, 66, 0.94), rgba(9, 16, 28, 0.96));
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 32px 28px;
                    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    position: relative;
                    max-width: 400px;
                    justify-self: end;
                    width: 100%;
                }

                .vibrant-form-card::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 20px;
                    background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.22), transparent 70%);
                    pointer-events: none;
                    z-index: -1;
                }

                .vibrant-form-title-group {
                    margin-bottom: 16px;
                }

                .vibrant-form-title {
                    font-size: 22px;
                    font-weight: 800;
                    color: #fff;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin-bottom: 6px;
                }

                .vibrant-form-subtitle {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.55);
                    line-height: 1.4;
                }

                .vibrant-form-divider {
                    height: 1px;
                    background: rgba(255, 255, 255, 0.08);
                    margin: 16px 0;
                    border: none;
                }

                .vibrant-focus-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .vibrant-focus-btn {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 16px;
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    cursor: pointer;
                    font-family: var(--vibrant-font);
                    font-size: 13px;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.8);
                    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
                    width: 100%;
                }

                .vibrant-btn-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .vibrant-focus-btn:hover {
                    background: rgba(255, 255, 255, 0.06);
                    box-shadow: 0 4px 15px var(--hover-glow);
                    color: #fff;
                }

                .vibrant-focus-btn.active {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: #3B82F6;
                    color: #fff;
                    box-shadow: 0 0 20px rgba(59, 130, 246, 0.25);
                    border-left: 4px solid #3B82F6;
                    padding-left: 13px;
                }

                .vibrant-indicator-circle {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: transparent;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    transition: all 0.2s ease;
                }

                .vibrant-focus-btn.active .vibrant-indicator-circle {
                    background: #3B82F6;
                    border-color: #3B82F6;
                    box-shadow: 0 0 6px #3B82F6;
                }

                .vibrant-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .vibrant-input-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                /* Updated input padding without icons */
                .vibrant-input {
                    width: 100%;
                    padding: 11px 16px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border-radius: 8px;
                    font-family: var(--vibrant-font);
                    font-size: 13px;
                    color: #fff;
                    transition: all 0.25s ease;
                    box-sizing: border-box;
                }

                .vibrant-input:focus {
                    outline: none;
                    border-color: #3B82F6;
                    background: rgba(255, 255, 255, 0.07);
                    box-shadow: 0 0 12px rgba(59, 130, 246, 0.25);
                }

                .vibrant-submit-btn {
                    width: 100%;
                    padding: 13px;
                    border: none;
                    border-radius: 8px;
                    background: linear-gradient(135deg, #2563EB, #60A5FA);
                    color: white;
                    font-weight: 700;
                    font-size: 14px;
                    cursor: pointer;
                    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.35);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .vibrant-submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 40px rgba(37, 99, 235, 0.5);
                }

                .vibrant-submit-btn:hover span.arrow {
                    transform: translateX(4px);
                    display: inline-block;
                    transition: transform 0.2s ease;
                }

                .vibrant-form-note {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.5);
                    text-align: center;
                    margin-top: 14px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                }

                @media (max-width: 960px) {
                    .vibrant-container {
                        grid-template-columns: 1fr;
                        gap: 44px;
                    }
                    .vibrant-intro {
                        align-items: center;
                        text-align: center;
                    }
                    .vibrant-copy {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .vibrant-phone-btn-wrap {
                        align-items: center;
                        width: 100%;
                    }
                    .vibrant-phone-subtext {
                        padding-left: 0;
                    }
                    .vibrant-stats-strip {
                        grid-template-columns: 1fr;
                        gap: 12px;
                    }
                    .vibrant-form-card {
                        max-width: 100%;
                        justify-self: center;
                        padding: 28px 20px;
                    }
                }
            `}</style>

            <section
                className="vibrant-section"
                style={{
                    backgroundImage: "url('/assets/images/about/about.webp')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="vibrant-floating-decorations">
                    <div className="vibrant-grid-dots" />
                    <div className="vibrant-blob-1" />
                    <div className="vibrant-blob-2" />
                </div>

                <div className="vibrant-container">

                    {/* Left Column Area */}
                    <div className="vibrant-intro">
                        <h2 className="vibrant-headline">
                            <span className="vh-white-1">Connecting You to</span>
                            <span className="blue-txt">Solutions That</span>
                            <span className="vh-white-2">Drive Results.</span>
                        </h2>

                        <p className="vibrant-copy">
                            Whether you need custom e-learning platforms, enterprise executive recruitment
                            pipelines, or deep corporate financial audits — our integrated divisions deliver
                            seamless cross-border execution.
                        </p>

                        <div className="vibrant-phone-btn-wrap">
                            <button className="vibrant-phone-btn" onClick={() => navigate('/contact')}>
                                Talk to an Expert
                            </button>
                            <span className="vibrant-phone-subtext">Call us in 2 minutes →</span>
                        </div>

                        <div className="vibrant-stats-strip">
                            {[
                                { val: '24h', lbl: 'Response Time' },
                                { val: '40+', lbl: 'Countries' },
                                { val: '99%', lbl: 'Client Satisfaction' }
                            ].map((s, i) => (
                                <div key={i} className="vibrant-stat-card">
                                    <div className="vibrant-stat-val">{s.val}</div>
                                    <div className="vibrant-stat-lbl">{s.lbl}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Compacted Right Column Area Form Card */}
                    <div className="vibrant-form-card">
                        <div className="vibrant-form-title-group">
                            <div className="vibrant-form-title">Let's Build<br />Your Next Solution</div>
                            <div className="vibrant-form-subtitle">Tell us about your project and we'll connect you with the right specialist.</div>
                        </div>

                        <hr className="vibrant-form-divider" />

                        <div className="vibrant-focus-list">
                            {options.map(opt => {
                                const IconComponent = opt.icon;
                                return (
                                    <button
                                        key={opt.key}
                                        type="button"
                                        style={{ '--hover-glow': opt.glow }}
                                        className={`vibrant-focus-btn ${selectedFocus === opt.key ? 'active' : ''}`}
                                        onClick={() => setSelectedFocus(opt.key)}
                                    >
                                        <div className="vibrant-btn-content">
                                            <IconComponent className="w-4 h-4 text-white" style={{ color: selectedFocus === opt.key ? '#3B82F6' : undefined }} />
                                            <span>{opt.label}</span>
                                        </div>
                                        {selectedFocus === opt.key ? (
                                            <span style={{ color: '#3B82F6', fontWeight: 'bold' }}>→</span>
                                        ) : (
                                            <div className="vibrant-indicator-circle" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <hr className="vibrant-form-divider" />

                        <div className="vibrant-input-group">
                            <div className="vibrant-input-wrapper">
                                <input className="vibrant-input" type="text" placeholder="Name" />
                            </div>

                            <div className="vibrant-input-wrapper">
                                <input className="vibrant-input" type="email" placeholder="Email" />
                            </div>

                            <div className="vibrant-input-wrapper">
                                <input className="vibrant-input" type="text" placeholder="Company" />
                            </div>

                            <hr className="vibrant-form-divider" />

                            <button className="vibrant-submit-btn" onClick={() => navigate('/contact')}>
                                Schedule Free Consultation <ArrowRight className="w-4 h-4 arrow" />
                            </button>
                        </div>

                        <div className="vibrant-form-note">
                            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                            <span>Your information is completely confidential</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}