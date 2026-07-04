import React, { useState } from 'react';
import { GraduationCap, Users, Briefcase } from 'lucide-react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function CTASection() {
    const [selectedFocus, setSelectedFocus] = useState('learning');

    const options = [
        { key: 'learning', icon: GraduationCap, label: 'Corporate E-Learning Development' },
        { key: 'staffing', icon: Users, label: 'Contract or Permanent Talent Sourcing' },
        { key: 'finance', icon: Briefcase, label: 'Corporate Accounting & Financial Strategy' },
    ];

    return (
        <>
            <style>{`
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 24px rgba(13, 148, 136, 0.15); }
                    50%  { box-shadow: 0 0 48px rgba(13, 148, 136, 0.3); }
                }
                .cta-focus-btn {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 18px;
                    border-radius: 12px;
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    background: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-family: 'Poppins', sans-serif;
                    color: #475569;
                    width: 100%;
                    text-align: left;
                }
                .cta-focus-btn:hover {
                    background: #ffffff;
                    color: #0f172a;
                    border-color: rgba(13, 148, 136, 0.3);
                    transform: translateX(2px);
                }
                .cta-focus-btn:hover .lucide-icon-wrapper {
                    color: #0D9488;
                }
                .cta-focus-btn.active {
                    background: rgba(13, 148, 136, 0.08) !important;
                    border-color: #0D9488 !important;
                    color: #0F766E !important;
                    font-weight: 600;
                }
                .cta-focus-btn.active .lucide-icon-wrapper {
                    color: #0D9488;
                }
                .cta-book-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    width: 100%;
                    padding: 15px;
                    background: #0D9488;
                    color: #ffffff;
                    border: 1.5px solid #0D9488;
                    border-radius: 10px;
                    font-family: 'Poppins', sans-serif;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    text-decoration: none;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: pulse-glow 3s infinite;
                }
                .cta-book-btn:hover {
                    background: #0F766E;
                    border-color: #0F766E;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(13, 148, 136, 0.25);
                }
                .cta-book-btn:active {
                    transform: scale(0.97);
                }
            `}</style>

            <section
                style={{
                    padding: '140px 40px',
                    backgroundColor: '#ffffff',
                    backgroundImage: 'linear-gradient(90deg, #FEDCB4 0%, #D3F0EC 50%, #E1F2C6 100%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    fontFamily: "'Poppins', sans-serif",
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Refined bright backdrop overlay masking */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)', zIndex: 1 }} />

                <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center' }}>

                        <div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'left',
                                gap: '10px',
                                borderRadius: '999px',
                                padding: '6px 0px',
                                marginBottom: '10px',
                                backdropFilter: 'blur(12px)',
                                transition: 'border-color 0.4s ease'
                            }}>
                                {/* Logo Image */}
                                <img
                                    src="/assets/images/about/logo-only.png"
                                    alt="Logo"
                                    style={{
                                        height: '48px', // Adjust height to fit nicely inside your pill container
                                        width: 'auto',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                            <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: '800', color: '#0f172a', margin: '0 0 24px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                                Let's Build Something<br />
                                <span style={{ color: '#0D9488' }}>Exceptional Together</span>
                            </h2>
                            <p style={{ fontSize: '16px', color: '#334155', lineHeight: 1.7, maxWidth: '580px', margin: '0 0 40px 0' }}>
                                Whether you need custom e-learning platforms, executive recruitment pipelines, or deep corporate financial structural audits, our integrated operational divisions deliver seamless global execution.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div>
                                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>24-Hour</div>
                                    <div style={{ fontSize: '13px', color: '#64748b' }}>Initial project assessment turn-around framework.</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>Global</div>
                                    <div style={{ fontSize: '13px', color: '#64748b' }}>Cross-border delivery hubs matching localized compliance.</div>
                                </div>
                            </div>
                        </div>

                        {/* Translucent Right Interactive Card Box Container */}
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.45)',
                            border: '1px solid rgba(13, 148, 136, 0.18)',
                            backdropFilter: 'blur(24px)',
                            borderRadius: '24px',
                            padding: '40px',
                            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.05)'
                        }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' }}>Select Your Core Objective</h3>
                            <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 24px 0' }}>Choose an area to tailor our strategy consultation session.</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                                {options.map((opt) => {
                                    const IconComponent = opt.icon;
                                    return (
                                        <button key={opt.key}
                                            className={`cta-focus-btn ${selectedFocus === opt.key ? 'active' : ''}`}
                                            onClick={() => setSelectedFocus(opt.key)}>
                                            <span className="lucide-icon-wrapper" style={{ display: 'flex', alignItems: 'center', color: '#64748b', transition: 'color 0.2s ease' }}>
                                                <IconComponent size={18} strokeWidth={2} />
                                            </span>
                                            <span style={{ fontSize: '13px', fontWeight: '500' }}>{opt.label}</span>
                                            {selectedFocus === opt.key && (
                                                <span style={{ marginLeft: 'auto', color: '#0D9488', display: 'flex', alignItems: 'center' }}>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" fill="currentColor" /></svg>
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            <a href={`/contact?focus=${selectedFocus}`}
                                onClick={(e) => { e.preventDefault(); navigate(`/contact`); }}
                                className="cta-book-btn">
                                Book Strategy Session
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>

                            <p style={{ color: '#94a3b8', fontSize: '12px', margin: '14px 0 0 0', textAlign: 'center' }}>
                                No obligation. Complete confidentiality guaranteed.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}