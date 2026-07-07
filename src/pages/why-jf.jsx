import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Immersive vector engine elements requested
import {
    BriefcaseBusiness,
    Globe2,
    Cpu,
    Target,
    GraduationCap,
    TrendingUp
} from 'lucide-react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function WhyJfPage() {
    const [activePillar, setActivePillar] = useState(0);

    const pillars = [
        {
            icon: <BriefcaseBusiness size={24} />,
            matrixIcon: <Target size={15} />,
            title: 'Unified Corporate Framework',
            tagline: 'Three divisions, single-point ecosystem',
            desc: 'We coordinate your digital enterprise learning, cross-border staff sourcing, and regulatory corporate consulting with complete architectural unity—reducing delivery overhead and synchronization delays.',
            badge: '01',
            matrixHighlights: [
                'E-Learning & Digital Delivery Engine',
                'Global Talent Placement Channels',
                'Fractional CFO & Compliance Services',
                'Unified Resource Orchestration'
            ]
        },
        {
            icon: <Globe2 size={24} />,
            matrixIcon: <GraduationCap size={15} />,
            title: 'Transnational Deployment',
            tagline: 'US · UK · Europe · GCC · India footprints',
            desc: 'Operating high-velocity business hubs across key regulatory hemispheres. We translate local compliance mandates and geo-specific talent standards into immediate market advantages.',
            badge: '02',
            matrixHighlights: [
                'Cross-Hemisphere Talent Logistics',
                'Localized Fiscal Alignment',
                'Multi-Region Instructional Design',
                'Zero-Lag Knowledge Transfers'
            ]
        },
        {
            icon: <Cpu size={24} />,
            matrixIcon: <TrendingUp size={15} />,
            title: 'Agile Technology Pipelines',
            tagline: 'Continuous micro-retention engineering',
            desc: 'Deploying high-speed SCORM-compliant modules, adaptive interactive engines, and AI-accelerated sourcing workflows that scale alongside exponential enterprise expansion parameters.',
            badge: '03',
            matrixHighlights: [
                'Next-Gen SCORM Implementations',
                'Data-Driven Skill Engineering',
                'Predictive Placement Channels',
                'Automated Advisory Dashboards'
            ]
        }
    ];

    const currentPillar = pillars[activePillar];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: "var(--bg-main)", fontFamily: 'var(--font-family)' }}>
            <Header />

            <main style={{ flex: 1, paddingTop: '100px', overflow: 'hidden', position: 'relative' }}>

                {/* ADVANCED ADVANCED MOTION MATRIX STYLING CLASSES */}
                <style>{`
                    .interactive-control-node {
                        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
                    }
                    .interactive-control-node:hover {
                        transform: translateY(-2px);
                        background: rgba(255, 255, 255, 0.04) !important;
                        border-color: rgba(255, 255, 255, 0.15) !important;
                    }
                    .quad-matrix-card {
                        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    .quad-matrix-card:hover {
                        transform: translateY(-5px);
                        border-color: rgba(13, 148, 136, 0.4) !important;
                        background: rgba(13, 148, 136, 0.55) !important;
                        box-shadow: 0 20px 40px rgba(13, 148, 136, 0.06), 0 0 30px rgba(13, 148, 136, 0.03) !important;
                    }
                    @media (max-width: 1150px) {
                        .main-split-architecture {
                            grid-template-columns: 1fr !important;
                            gap: 48px !important;
                        }
                        .quad-matrix-container {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>

                {/* Stunning Fluid Deep Light Drops */}
                <div style={{ position: 'absolute', top: '4%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '35vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13, 148, 136,0.1) 0%, transparent 75%)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 1 }} />
                <div style={{ position: 'absolute', bottom: '20%', right: '-5%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none', zIndex: 1 }} />

                {/* --- EMBEDDED CINEMATIC HERO FIELD WITH STREAMING BACKGROUND VIDEO --- */}
                <section className="theme-section theme-section--dark" style={{ position: 'relative', width: '100%', padding: '120px 40px 100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

                    {/* Background hero image container */}
                    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', backgroundImage: "url('/assets/images/about/whyus.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8, 20, 46, 0.72) 0%, rgba(8, 20, 46, 0.42) 45%, rgba(8, 20, 46, 0.72) 100%)', zIndex: 1 }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, rgba(15, 23, 55, 0.76) 90%)', zIndex: 2 }} />
                    </div>

                    {/* Centered Attentional Grab Headings Block */}
                    <div style={{ position: 'relative', zIndex: 3, maxWidth: '1000px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        {/* Glassmorphic Strategic Badge */}
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255, 255, 255, 0.04)', border: "1px solid var(--border-light)", borderRadius: '999px', padding: '8px 20px', width: 'fit-content', marginBottom: '32px', backdropFilter: 'blur(16px)', boxShadow: '0 4px 24px rgba(13, 148, 136,0.4)' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', display: 'inline-block', boxShadow: '0 0 14px var(--primary)' }} />
                            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.22em', color: "var(--text-primary)", textTransform: 'uppercase' }}>
                                Core Architectural Advantages
                            </span>
                        </div>

                        {/* Trendy Premium Typography Title */}
                        <h1 style={{ margin: '0 0 24px 0', fontSize: 'clamp(46px, 6.2vw, 82px)', fontWeight: '800', lineHeight: 1.05, letterSpacing: '-0.04em', color: "var(--text-primary)", textShadow: '0 4px 30px rgba(13, 148, 136,0.8)' }}>
                            Why Partner With<br />
                            <span style={{ background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 50%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>
                                JF Knowledge Centre
                            </span>
                        </h1>

                        <p style={{ margin: '0', fontSize: '18px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.7, maxWidth: '720px', textShadow: '0 2px 16px rgba(13, 148, 136,0.9)' }}>
                            We are not just an outsourced service node—we design corporate convergence systems combining knowledge architecture, regulatory security, and global elite capital workflows.
                        </p>
                    </div>
                </section>

                {/* --- TWO-COLUMN INTERACTIVE SWITCHER + 2X2 KNOWLEDGE MATRIX GRID --- */}
                <section className="theme-section theme-section--dark" style={{ position: 'relative', zIndex: 4, padding: '0 40px 120px', maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
                    <div className="main-split-architecture" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '60px', alignItems: 'stretch' }}>

                        {/* LEFT ELEMENT: INTERACTIVE HUB SWITCHER CONTROLLER WITH LUCIDE ICONS */}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(13, 148, 136, 0.45)', border: '1px solid rgba(255,255,255,0.06)', padding: '32px', borderRadius: '28px', backdropFilter: 'blur(20px)', boxShadow: '0 30px 60px rgba(13, 148, 136,0.4)', position: 'sticky', top: '120px' }}>

                                <div style={{ marginBottom: '12px' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '6px' }}>
                                        Interactive Hub Switcher
                                    </span>
                                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.45)' }}>
                                        Toggle structural vectors below to remap delivery nodes into the live 2x2 grid:
                                    </span>
                                </div>

                                {pillars.map((pillar, idx) => {
                                    const isSelected = activePillar === idx;
                                    return (
                                        <div
                                            key={idx}
                                            onClick={() => setActivePillar(idx)}
                                            className="interactive-control-node"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '22px 24px',
                                                borderRadius: '20px',
                                                background: isSelected ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255,255,255,0.01)',
                                                border: '1px solid',
                                                borderColor: isSelected ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                                cursor: 'pointer',
                                                boxShadow: isSelected ? 'inset 0 0 20px rgba(13, 148, 136, 0.15), 0 10px 30px rgba(13, 148, 136,0.3)' : 'none'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                                                <span style={{ color: isSelected ? 'var(--primary)' : 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', transform: isSelected ? 'scale(1.1)' : 'none', transition: 'all 0.3s' }}>
                                                    {pillar.icon}
                                                </span>
                                                <div>
                                                    <span style={{ fontSize: '17px', fontWeight: '700', color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.65)', display: 'block', marginBottom: '2px' }}>
                                                        {pillar.title}
                                                    </span>
                                                    <span style={{ fontSize: '13px', color: isSelected ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.35)' }}>
                                                        {pillar.tagline}
                                                    </span>
                                                </div>
                                            </div>

                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: isSelected ? 'var(--primary-light)' : 'rgba(255,255,255,0.15)', transform: isSelected ? 'translateX(4px)' : 'none', transition: 'all 0.3s' }}>
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    );
                                })}

                                {/* Dynamic Narrative Synopsis Sub-box */}
                                <div style={{ marginTop: '16px', padding: '22px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '18px' }}>
                                    <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--primary-light)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Operational Intent Monograph</div>
                                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.65' }}>{currentPillar.desc}</div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT ELEMENT: TRENDY 2X2 KNOWLEDGE MATRIX CARDS GRID */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                            {/* Matrix Controller Realtime Status Bar */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(13, 148, 136,0.3)', padding: '22px 32px', borderRadius: '22px', border: '1px solid rgba(255,255,255,0.04)', backdropFilter: 'blur(10px)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>{currentPillar.icon}</span>
                                    <div>
                                        <h2 style={{ fontSize: '20px', fontWeight: '800', color: "var(--text-primary)", margin: '0' }}>{currentPillar.title}</h2>
                                        <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vector Matrix Node Active</span>
                                    </div>
                                </div>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 12px #34d399' }} />
                            </div>

                            {/* THE 2X2 GRID CONTAINER */}
                            <div className="quad-matrix-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                {currentPillar.matrixHighlights.map((highlight, index) => (
                                    <div
                                        key={index}
                                        className="quad-matrix-card"
                                        style={{
                                            background: 'rgba(13, 148, 136, 0.4)',
                                            border: '1px solid rgba(255, 255, 255, 0.06)',
                                            borderRadius: '24px',
                                            backdropFilter: 'blur(24px)',
                                            padding: '36px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            position: 'relative',
                                            minHeight: '210px',
                                            boxShadow: '0 15px 35px rgba(13, 148, 136,0.4)'
                                        }}
                                    >
                                        {/* Neon Tracker Line Pin */}
                                        <div style={{ position: 'absolute', top: '-1px', left: '36px', width: '36px', height: '2px', background: 'linear-gradient(90deg, var(--primary), var(--primary-light))' }} />

                                        <div>
                                            {/* Top Indexing Counter Elements */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(13, 148, 136, 0.1)', border: '1px solid rgba(13, 148, 136, 0.25)' }}>
                                                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#0F766E' }}>0{index + 1}</span>
                                                </div>
                                                <span style={{ color: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center' }}>
                                                    {currentPillar.matrixIcon}
                                                </span>
                                            </div>

                                            {/* Primary Framework Knowledge Title */}
                                            <h4 style={{ fontSize: '17.5px', fontWeight: '800', color: "var(--text-primary)", lineHeight: '1.45', margin: '0', letterSpacing: '-0.01em' }}>
                                                {highlight}
                                            </h4>
                                        </div>

                                        {/* Dynamic Lower Action Tagline */}
                                        <div style={{ fontSize: '13px', color: "var(--text-muted)", fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '16px', marginTop: '16px' }}>
                                            <span style={{ color: 'var(--primary-light)', display: 'flex', alignItems: 'center' }}>✦</span> Continuous Architecture Optimization
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Core Action Pipeline Launcher */}
                            <button
                                onClick={() => navigate('/contact')}
                                style={{
                                    width: '100%',
                                    background: 'linear-gradient(90deg, var(--primary), #111424)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '20px',
                                    padding: '22px 28px',
                                    color: "var(--text-primary)",
                                    fontSize: '14px',
                                    fontWeight: '800',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 30px rgba(13, 148, 136, 0.15)'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(13, 148, 136, 0.35)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(13, 148, 136, 0.15)';
                                }}
                            >
                                Secure System Infrastructure Strategy
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>

                        </div>

                    </div>

                    {/* INTERACTIVE COMPREHENSIVE BOTTOM CALLOUT STRIP */}
                    <div style={{ marginTop: '72px', padding: '36px 48px', background: 'rgba(13, 148, 136, 0.35)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '28px', boxShadow: '0 20px 50px rgba(13, 148, 136,0.3)' }}>
                        <div>
                            <div style={{ fontSize: '18px', fontWeight: '700', color: "var(--text-primary)", marginBottom: '4px' }}>Ready to launch corporate convergence architecture?</div>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)' }}>Zero obligation strategic consultations. Enterprise deployment frameworks.</div>
                        </div>
                        <button onClick={() => navigate('/contact')} style={{
                            padding: '16px 36px', borderRadius: '12px', background: 'transparent',
                            border: '1.5px solid var(--primary)',
                            color: "var(--text-primary)", fontSize: '12px', fontWeight: '800', cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)', letterSpacing: '0.15em', textTransform: 'uppercase',
                            fontFamily: 'var(--font-family)'
                        }}
                            onMouseEnter={e => { e.target.style.background = 'var(--primary)'; e.target.style.boxShadow = '0 8px 24px rgba(13, 148, 136,0.4)'; }}
                            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.boxShadow = 'none'; }}>
                            Book A Free Strategy Block
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}