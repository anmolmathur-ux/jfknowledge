import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { geographicFootprint } from '../data/recruitmentServices';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const regionColors = { 'United States': '#0D9488', 'United Kingdom': '#22d3ee', 'Europe': '#34d399', 'GCC': '#f59e0b' };
const regionFlags = { 'United States': '🇺🇸', 'United Kingdom': '🇬🇧', 'Europe': '🇪🇺', 'GCC': '🌍' };

export default function GlobalFootprintPage() {
    const footprints = Array.isArray(geographicFootprint) ? geographicFootprint : [];
    const [activeRegion, setActiveRegion] = useState(0);

    const activeData = footprints[activeRegion] || { region: '', hubs: [], insight: '', operationalCapabilities: [] };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: "var(--bg-main)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Header />

            <main style={{ flex: 1, paddingTop: '100px', overflow: 'hidden', position: 'relative' }}>

                {/* ADVANCED MATRIX EFFECTS & INTERACTIVE STYLING */}
                <style>{`
                    .region-pill {
                        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
                    }
                    .region-pill:hover {
                        transform: translateY(-2px);
                        background: rgba(255, 255, 255, 0.04) !important;
                        border-color: rgba(255, 255, 255, 0.15) !important;
                    }
                    .active-glow-card {
                        box-shadow: 0 30px 70px rgba(13, 148, 136, 0.7), 0 0 50px rgba(13, 148, 136, 0.05) !important;
                        transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    .hub-node {
                        transition: all 0.3s ease;
                    }
                    .hub-node:hover {
                        background: rgba(255,255,255,0.06) !important;
                        transform: scale(1.02);
                        border-color: rgba(255,255,255,0.2) !important;
                    }
                `}</style>

                {/* Ambient Depth Orbs */}
                <div style={{ position: 'absolute', top: '2%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '35vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13, 148, 136,0.1) 0%, transparent 75%)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 1 }} />
                <div style={{ position: 'absolute', bottom: '15%', left: '-10%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none', zIndex: 1 }} />

                {/* --- CINEMATIC HEADERS SECTION WITH INTERACTIVE BACKGROUND VIDEO --- */}
                <section style={{ position: 'relative', width: '100%', padding: '120px 40px 100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

                    {/* Background Video Wrapper */}
                    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--bg-main) 0%, var(--bg-surface) 40%, var(--bg-surface) 70%, var(--bg-main) 100%)', zIndex: 2 }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 35%, var(--bg-main) 95%)', zIndex: 2 }} />
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
                        >
                            <source src="/assets/images/about/global-Delivery-Network.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Centered High-Impact Text Group */}
                    <div style={{ position: 'relative', zIndex: 3, maxWidth: '1000px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        {/* Elite Status Badge */}
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255, 255, 255, 0.04)', border: "1px solid var(--border-light)", borderRadius: '999px', padding: '8px 20px', width: 'fit-content', marginBottom: '32px', backdropFilter: 'blur(16px)', boxShadow: '0 4px 24px rgba(13, 148, 136,0.4)' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0D9488', display: 'inline-block', boxShadow: '0 0 14px #0D9488' }} />
                            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.2em', color: "var(--text-primary)", textTransform: 'uppercase' }}>
                                Global Deployment Framework
                            </span>
                        </div>

                        {/* Trendy Main Title */}
                        <h1 style={{ margin: '0 0 24px 0', fontSize: 'clamp(46px, 6vw, 80px)', fontWeight: '800', lineHeight: 1.05, letterSpacing: '-0.04em', color: "var(--text-primary)", textShadow: '0 4px 30px rgba(13, 148, 136,0.8)' }}>
                            Our Geographic<br />
                            <span style={{ background: 'linear-gradient(90deg, #0D9488 0%, #22d3ee 50%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>
                                Footprint & Intelligence
                            </span>
                        </h1>

                        <p style={{ margin: '0', fontSize: '18px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.7, maxWidth: '720px', textShadow: '0 2px 16px rgba(13, 148, 136,0.9)' }}>
                            Cross-border placement channels, localized corporate regulatory consulting hubs, and agile digital instruction architectures engineered to scale human capital across high-growth hemispheres.
                        </p>
                    </div>
                </section>

                {/* --- PUSHED DOWN RE-ENGINEERED TWO-COLUMN INTERACTIVE MATRIX --- */}
                <section style={{ position: 'relative', zIndex: 4, padding: '0 40px 120px', maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '56px', alignItems: 'stretch' }}>

                        {/* LEFT SECTION: TACTILE REGION SWITCHERS */}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(13, 148, 136, 0.45)', border: '1px solid rgba(255,255,255,0.06)', padding: '32px', borderRadius: '28px', backdropFilter: 'blur(20px)', boxShadow: '0 30px 60px rgba(13, 148, 136,0.4)' }}>
                                <div style={{ marginBottom: '12px' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#0D9488', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '6px' }}>
                                        Interactive Hub Switcher
                                    </span>
                                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.45)' }}>
                                        Toggle key regions below to dynamically route operational logic:
                                    </span>
                                </div>

                                {footprints.map((foot, index) => {
                                    const isSelected = activeRegion === index;
                                    const currentThemeColor = regionColors[foot.region] || '#0D9488';

                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setActiveRegion(index)}
                                            className="region-pill"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '20px 24px',
                                                borderRadius: '20px',
                                                background: isSelected ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255,255,255,0.01)',
                                                border: '1px solid',
                                                borderColor: isSelected ? currentThemeColor : 'rgba(255,255,255,0.05)',
                                                cursor: 'pointer',
                                                boxShadow: isSelected ? `inset 0 0 20px ${currentThemeColor}15` : 'none'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                <span style={{ fontSize: '24px', filter: isSelected ? 'grayscale(0)' : 'grayscale(0.4)', transition: 'all 0.3s' }}>
                                                    {regionFlags[foot.region] || '🌐'}
                                                </span>
                                                <span style={{ fontSize: '18px', fontWeight: '700', color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.6)' }}>
                                                    {foot.region}
                                                </span>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <span style={{ fontSize: '12px', fontWeight: '700', color: isSelected ? currentThemeColor : 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.02)', padding: '4px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                                                    {foot.hubs?.length || 0} Hubs
                                                </span>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: isSelected ? currentThemeColor : 'rgba(255,255,255,0.15)', transform: isSelected ? 'translateX(4px)' : 'none', transition: 'all 0.3s' }}>
                                                    <polyline points="9 18 15 12 9 6" />
                                                </svg>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RIGHT SECTION: THE KNOWLEDGE MATRIX SCREEN */}
                        <div
                            className="active-glow-card"
                            style={{
                                background: 'rgba(13, 148, 136, 0.4)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '32px',
                                backdropFilter: 'blur(30px)',
                                padding: '48px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative'
                            }}
                        >
                            {/* Running Neon Top Highlight line dynamically synchronized to region colors */}
                            <div style={{ position: 'absolute', top: '-1px', left: '48px', right: '48px', height: '2px', background: `linear-gradient(90deg, transparent, ${regionColors[activeData.region] || '#0D9488'}, transparent)` }} />

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '800', color: regionColors[activeData.region] || '#0D9488', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                        Regional Intelligence Monitor
                                    </span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '600', color: "var(--text-muted)" }}>Status: Active Node</span>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: regionColors[activeData.region] || '#0D9488', boxShadow: `0 0 12px ${regionColors[activeData.region] || '#0D9488'}` }} />
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '36px', fontWeight: '800', color: "var(--text-primary)", margin: '0 0 18px 0', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>{regionFlags[activeData.region]}</span>
                                    {activeData.region}
                                </h3>

                                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.75', margin: '0 0 36px 0', fontWeight: '500' }}>
                                    {activeData.insight}
                                </p>

                                {/* Dynamic Sub-Grid: Operational Hub Locations */}
                                <div style={{ marginBottom: '40px' }}>
                                    <h4 style={{ fontSize: '12px', fontWeight: '800', color: "var(--text-muted)", textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                                        Established Business Hubs
                                    </h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                        {activeData.hubs?.map((hub, i) => (
                                            <div
                                                key={i}
                                                className="hub-node"
                                                style={{
                                                    background: 'rgba(255,255,255,0.02)',
                                                    border: '1px solid rgba(255,255,255,0.06)',
                                                    borderRadius: '12px',
                                                    padding: '10px 18px',
                                                    fontSize: '14px',
                                                    fontWeight: '700',
                                                    color: "var(--text-primary)",
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                }}
                                            >
                                                <span style={{ color: regionColors[activeData.region] }}>•</span>
                                                {hub}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 100%)', marginBottom: '32px' }} />

                                {/* Capability Streams */}
                                <div>
                                    <h4 style={{ fontSize: '12px', fontWeight: '800', color: "var(--text-muted)", textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '18px' }}>
                                        Core Strategic Deliverables
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                        {activeData.operationalCapabilities?.map((cap, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '14px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '50%', background: `${regionColors[activeData.region]}15`, border: `1px solid ${regionColors[activeData.region]}35`, flexShrink: 0, marginTop: '2px' }}>
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={regionColors[activeData.region]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                                <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', fontWeight: '500', lineHeight: '1.5' }}>{cap}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Global Action Router Trigger */}
                            <button
                                onClick={() => navigate('/contact')}
                                style={{
                                    marginTop: '56px',
                                    width: '100%',
                                    background: `linear-gradient(90deg, ${regionColors[activeData.region] || '#0D9488'}, #111424)`,
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '18px',
                                    padding: '20px 28px',
                                    color: "var(--text-primary)",
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: `0 10px 30px ${regionColors[activeData.region]}15`
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = `0 16px 40px ${regionColors[activeData.region]}35`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 10px 30px ${regionColors[activeData.region]}15`;
                                }}
                            >
                                Initiate Cross-Border Inception Model
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>

                    </div>

                    {/* LOW-GRADIENT TACTILE FOOTER BANNER */}
                    <div style={{ marginTop: '72px', padding: '36px 48px', background: 'rgba(13, 148, 136, 0.35)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '28px', boxShadow: '0 20px 50px rgba(13, 148, 136,0.3)' }}>
                        <div>
                            <div style={{ fontSize: '18px', fontWeight: '700', color: "var(--text-primary)", marginBottom: '4px' }}>Ready to optimize infrastructure footprints?</div>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)' }}>Accelerated global coordination channels. Zero local alignment delay frameworks.</div>
                        </div>
                        <button onClick={() => navigate('/contact')} style={{
                            padding: '16px 36px', borderRadius: '12px', background: 'transparent',
                            border: '1.5px solid #0D9488',
                            color: "var(--text-primary)", fontSize: '12px', fontWeight: '800', cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)', letterSpacing: '0.15em', textTransform: 'uppercase',
                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                        }}
                            onMouseEnter={e => { e.target.style.background = '#0D9488'; e.target.style.boxShadow = '0 8px 24px rgba(13, 148, 136,0.4)'; }}
                            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.boxShadow = 'none'; }}>
                            Secure Consultation Block
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}