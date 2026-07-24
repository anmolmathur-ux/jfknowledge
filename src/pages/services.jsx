import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CTA from '../components/sections/CTASection';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const AnimatedCounter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let startTimestamp = null;
        const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
        if (isNaN(numericTarget)) {
            setCount(target);
            return;
        }
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * numericTarget));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [target, duration]);

    const suffix = target.replace(/[0-9]/g, '');
    return <span>{count}{suffix}</span>;
};

export default function ServicesPage() {
    const CARD_META = {
        learning: [
            { accent: '#2563eb', badge: 'INSTRUCTOR-LED TRAINING (ILT)', img: '/assets/images/services/1-1.jpg', stat: 'Custom', statLabel: 'Curriculum Design' },
            { accent: '#3b82f6', badge: 'VIRTUAL ILT (VILT)', img: '/assets/images/services/1-2.jpg', stat: 'Live', statLabel: 'Synchronous Sessions' },
            { accent: '#7c3aed', badge: 'MICROLEARNING', img: '/assets/images/services/1-3.jpg', stat: '3-7 Min', statLabel: 'Bite-Sized Modules' },
            { accent: '#059669', badge: 'GAMIFICATION', img: '/assets/images/services/1-4.jpg', stat: 'Engagement', statLabel: 'Game Mechanics' },
        ],
        recruitment: [
            { accent: '#3b82f6', badge: 'PERMANENT PLACEMENT', img: '/assets/images/services/3-1.jpg', stat: '90 Day', statLabel: 'Replacement Guarantee' },
            { accent: '#60a5fa', badge: 'CONTRACT & TEMPORARY STAFFING', img: '/assets/images/services/3-2.jpg', stat: '24-72h', statLabel: 'Rapid Deployment' },
            { accent: '#a855f7', badge: 'STAFF AUGMENTATION', img: '/assets/images/services/3-3.jpg', stat: 'IT & Non-IT', statLabel: 'Team Extensions' },
            { accent: '#10b981', badge: 'MANAGED STAFFING SOLUTIONS', img: '/assets/images/services/3-4.jpg', stat: 'RPO / MSP', statLabel: 'Outsourced Models' },
        ],
        finance: [
            { accent: '#2563eb', badge: 'ACCOUNTING & BOOKKEEPING', img: '/assets/images/services/2-1.jpg', stat: 'Cloud', statLabel: 'Xero, QuickBooks, Sage' },
            { accent: '#3b82f6', badge: 'TAX & COMPLIANCE', img: '/assets/images/services/2-2.jpg', stat: 'Advisory', statLabel: 'Planning & Filing' },
            { accent: '#059669', badge: 'CFO ADVISORY', img: '/assets/images/services/2-3.jpg', stat: 'Fractional', statLabel: 'Strategic Leadership' },
        ],
    };

    const PremiumCard = ({ title, desc, f1, f2, f3, meta, theme = 'dark' }) => {
        const isLight = theme === 'light';
        return (
            <div className={`wcu-premium-card-wrapper ${isLight ? 'wcu-light-theme' : 'wcu-dark-theme'}`}>
                <div className="wcu-premium-glow-border" />
                <div className="wcu-premium-card-inner">
                    <div className="wcu-card-dots">{'● ● ● ●\n● ● ● ●'}</div>

                    <div className="wcu-card-img-wrapper">
                        <img src={meta.img} alt={title} className="wcu-card-img-mask" />
                    </div>

                    <div style={{ padding: '28px' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            fontSize: 10, fontWeight: 800, letterSpacing: '0.15em',
                            color: meta.accent, background: `${meta.accent}12`,
                            border: `1px solid ${meta.accent}33`, borderRadius: 99, padding: '4px 12px', marginBottom: 16
                        }}>{meta.badge}</div>

                        <h3 className="wcu-card-title">{title}</h3>
                        <p className="wcu-card-desc">{desc}</p>

                        <div className="wcu-card-kpi-row" style={{ borderLeft: `3px solid ${meta.accent}` }}>
                            <span className="wcu-kpi-val">{meta.stat}</span>
                            <span className="wcu-kpi-label">{meta.statLabel}</span>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {[f1, f2, f3].filter(Boolean).map((chip, i) => (
                                <span key={i} className="wcu-card-mini-chip">{chip}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div style={{ background: '#060B17', color: '#ffffff', fontFamily: 'var(--font-family, "Inter", sans-serif)', overflowX: 'hidden' }}>
            {/* Google Fonts Material Symbols Support */}
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />

            <Header />

            <style dangerouslySetInnerHTML={{
                __html: `
    @keyframes pulseDot { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.5); opacity: 1; } }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .animate-on-load {
        animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .wcu-premium-bg {
        position: relative;
        background: radial-gradient(circle at top, #14284f 0%, #060B17 60%);
    }
    .wcu-noise-layer {
        position: absolute; inset: 0; pointer-events: none; z-index: 2; opacity: 0.02; mix-blend-mode: overlay;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    .wcu-animated-divider {
        display: flex; align-items: center; justify-content: center; margin: 40px 0; width: 100%; opacity: 0.4;
    }
    .wcu-divider-line { height: 1px; flex: 1; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent); }
    .wcu-divider-dot { width: 6px; height: 6px; background: #3b82f6; border-radius: 50%; margin: 0 20px; box-shadow: 0 0 10px #3b82f6; animation: pulseDot 2s infinite ease-in-out; }

    /* SPOTLIGHT MAIN CARD */
    .wcu-spotlight-card {
        position: relative; 
        overflow: hidden; 
        z-index: 5;
        padding: 64px; 
        border-radius: 32px;
        background: linear-gradient(180deg, #0F172A, #111827);
        box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .wcu-spotlight-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 25px 60px rgba(15, 23, 42, 0.14);
    }

    .wcu-spotlight-video-bg {
        position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -3; 
        opacity: 0.45; filter: brightness(0.98) saturate(1.08) contrast(1.02);
    }

    .wcu-spotlight-video-overlay {
        position: absolute; inset: 0; 
        background: linear-gradient(90deg, rgba(4, 12, 28, 0.50) 40%, rgba(4, 12, 28, 0.35) 100%); 
        z-index: -2; pointer-events: none;
    }

    .wcu-spotlight-label { font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: #60a5fa; font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }

    .wcu-spotlight-title { 
        font-size: clamp(36px, 4.5vw, 58px); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; color: #ffffff; margin: 0 0 20px 0;
    }

    .wcu-spotlight-desc {
        font-size: 16.5px; line-height: 1.7; color: rgba(255, 255, 255, 0.78); margin: 0 0 28px 0;
    }

    .wcu-bullet-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 32px 0; }
    .wcu-bullet-item { padding: 16px 20px; border-radius: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 12px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    .wcu-bullet-item:hover { transform: translateY(-4px); background: rgba(37,99,235,0.08); border-color: rgba(59,130,246,0.4); }

    /* FLOATING INFORMATION CARD SYSTEM */
    .wcu-premium-card-wrapper { 
        position: relative; 
        border-radius: 24px; 
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
        box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
    }

    .wcu-premium-card-wrapper:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 60px rgba(15, 23, 42, 0.14);
    }

    .wcu-premium-card-inner { 
        border-radius: 24px; 
        overflow: hidden; 
        height: 100%; 
        position: relative;
        transition: background 0.4s ease;
    }

    .wcu-premium-card-inner::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        z-index: 10;
        background: linear-gradient(90deg, #2563eb, #60a5fa, transparent);
    }

    /* DARK THEME CONFIG */
    .wcu-premium-card-wrapper.wcu-dark-theme .wcu-premium-card-inner {
        background: linear-gradient(180deg, #0F172A, #111827); 
    }
    .wcu-premium-card-wrapper.wcu-dark-theme .wcu-card-title { color: #ffffff; }
    .wcu-premium-card-wrapper.wcu-dark-theme .wcu-card-desc { color: #94a3b8; }
    .wcu-premium-card-wrapper.wcu-dark-theme .wcu-kpi-val { color: #ffffff; }
    .wcu-premium-card-wrapper.wcu-dark-theme .wcu-card-mini-chip { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); color: #94a3b8; }

    /* LIGHT THEME CONFIG */
    .wcu-premium-card-wrapper.wcu-light-theme .wcu-premium-card-inner {
        background: #ffffff; 
    }
    .wcu-premium-card-wrapper.wcu-light-theme .wcu-card-title { color: #0f172a; }
    .wcu-premium-card-wrapper.wcu-light-theme .wcu-card-desc { color: #475569; }
    .wcu-premium-card-wrapper.wcu-light-theme .wcu-kpi-val { color: #0f172a; }
    .wcu-premium-card-wrapper.wcu-light-theme .wcu-card-mini-chip { background: #f1f5f9; border: 1px solid #e2e8f0; color: #475569; }

    /* IMAGE STYLING AND CLEAN BOUNDARIES */
    .wcu-card-img-wrapper {
        width: 100%;
        height: 220px;
        overflow: hidden;
        position: relative;
    }

    .wcu-card-img-mask { 
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        display: block;
        filter: brightness(0.98) saturate(1.08) contrast(1.02); 
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); 
    }

    .wcu-premium-card-wrapper:hover .wcu-card-img-mask { 
        transform: scale(1.08); 
    }

    .wcu-card-dots { position: absolute; top: 20px; right: 20px; opacity: 0.05; font-size: 10px; line-height: 1.4; letter-spacing: 3px; color: #fff; }
    .wcu-premium-card-wrapper.wcu-light-theme .wcu-card-dots { color: #0f172a; opacity: 0.08; }

    .wcu-card-title { font-size: 22px; font-weight: 800; line-height: 1.3; margin-bottom: 12px; transition: color 0.3s ease; }
    .wcu-card-desc { font-size: 14.5px; line-height: 1.65; margin-bottom: 20px; transition: color 0.3s ease; }
    .wcu-card-kpi-row { display: flex; flex-direction: column; gap: 2px; padding-left: 14px; margin-bottom: 22px; }
    .wcu-kpi-val { font-size: 24px; font-weight: 900; line-height: 1; transition: color 0.3s ease; }
    .wcu-kpi-label { font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
    .wcu-card-mini-chip { padding: 5px 12px; border-radius: 99px; font-size: 12.5px; transition: all 0.3s ease; }

    /* SECTION LAYOUT SYSTEM */
    .wcu-section-dark {
        background: #060B17;
        color: #ffffff;
    }
    .wcu-section-light {
        background: #f8fafc;
        color: #0f172a;
    }

    .wcu-section-light h2 {
        color: #0f172a !important;
    }
    .wcu-section-light p {
        color: #475569 !important;
    }

    .wcu-media-wrapper {
        border-radius: 24px; 
        overflow: hidden; 
        height: 380px; 
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .wcu-section-dark .wcu-media-wrapper {
        border: 1px solid rgba(255, 255, 255, 0.08); 
        box-shadow: 0 30px 60px rgba(0,0,0,0.4);
    }
    .wcu-section-light .wcu-media-wrapper {
        border: 1px solid rgba(15, 23, 42, 0.08); 
        box-shadow: 0 30px 60px rgba(15, 23, 42, 0.08);
    }
    .wcu-media-wrapper:hover {
        transform: scale(1.02);
    }

    /* HONEYCOMB STYLES */
    .hexagon {
      width: 280px;
      height: 320px;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      transition: all 0.3s ease-in-out;
      position: relative;
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%);
      cursor: default;
    }

    .hexagon::before {
      content: "";
      position: absolute;
      inset: 0;
      padding: 2px;
      background: linear-gradient(180deg, rgba(56, 189, 248, 0.3), transparent);
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    .hexagon-center {
      background: radial-gradient(circle at center, rgba(14, 165, 233, 0.2) 0%, rgba(15, 23, 42, 0.95) 100%);
      border: 1px solid rgba(56, 189, 248, 0.4);
      z-index: 10;
    }

    .hexagon-center::before {
      background: linear-gradient(180deg, #0ea5e9, transparent);
    }

    .hexagon:hover {
      transform: scale(1.05);
      z-index: 50;
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(30, 58, 138, 0.5) 100%);
    }

    .hexagon:hover::before {
      background: linear-gradient(180deg, #38bdf8, #0ea5e9);
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
    }

    .honeycomb-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px 40px;
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px 0;
    }

    .icon-cyan { color: #38bdf8; }
    .icon-center { color: #22d3ee; }
` }} />

            <main style={{ flex: 1 }} className="wcu-premium-bg">
                <div className="wcu-noise-layer" />

                {/* ── 1. ULTRA-PREMIUM SPOTLIGHT HERO SECTION (DARK) ── */}
                <section style={{ padding: '140px 24px 100px 24px', position: 'relative', zIndex: 3 }} className="animate-on-load">
                    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                        <div className="wcu-spotlight-card">
                            <video autoPlay loop muted playsInline className="wcu-spotlight-video-bg">
                                <source src="/assets/images/about/service.mp4" type="video/mp4" />
                            </video>
                            <div className="wcu-spotlight-video-overlay" />

                            <div style={{ maxWidth: '680px' }}>
                                <div className="wcu-spotlight-label">JF KNOWLEDGE CENTRE</div>
                                <h1 className="wcu-spotlight-title">INTEGRATED<br /><span style={{ color: '#3b82f6' }}>SOLUTIONS</span></h1>
                                <p className="wcu-spotlight-desc">
                                    A globally oriented, multi-disciplinary professional services organisation committed to transforming the way businesses learn, hire, and grow across our powerful operational verticals.
                                </p>

                                <div className="wcu-bullet-grid">
                                    <div className="wcu-bullet-item">
                                        <CheckCircle2 size={16} color="#3b82f6" />
                                        <span style={{ fontSize: '14.5px', fontWeight: 600 }}>E-Learning Solutions</span>
                                    </div>
                                    <div className="wcu-bullet-item">
                                        <CheckCircle2 size={16} color="#3b82f6" />
                                        <span style={{ fontSize: '14.5px', fontWeight: 600 }}>Recruitment &amp; Staffing</span>
                                    </div>
                                    <div className="wcu-bullet-item">
                                        <CheckCircle2 size={16} color="#3b82f6" />
                                        <span style={{ fontSize: '14.5px', fontWeight: 600 }}>Financial Consultancy</span>
                                    </div>
                                    <div className="wcu-bullet-item">
                                        <CheckCircle2 size={16} color="#3b82f6" />
                                        <span style={{ fontSize: '14.5px', fontWeight: 600 }}>Accounting Services</span>
                                    </div>
                                </div>

                                <div style={{ marginTop: '36px' }}>
                                    <a href="#recruitment" className="wcu-pill-cta">
                                        Explore Talent Solutions <ArrowRight size={15} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="wcu-animated-divider">
                            <div className="wcu-divider-line" />
                            <div className="wcu-divider-dot" />
                            <div className="wcu-divider-line" />
                        </div>

                        {/* Geographic Footprint / Scale Section - CENTER ALIGNED */}
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '32px' }}>
                            <header style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '750px', padding: '0 16px' }}>
                                <h2 style={{
                                    fontSize: 'clamp(28px, 4vw, 44px)',
                                    fontWeight: '800',
                                    marginBottom: '16px',
                                    background: 'linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textAlign: 'center'
                                }}>
                                    Driven by Impact &amp; Proven Scale
                                </h2>
                                <p style={{ fontSize: '16.5px', color: '#94a3b8', lineHeight: '1.6', margin: '0 auto', textAlign: 'center' }}>
                                    Quantifying our commitment to global excellence, enterprise transformation, and operational reliability across sectors.
                                </p>
                            </header>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', paddingBottom: '48px' }}>
                                <div className="honeycomb-container" data-purpose="network-grid">
                                    {/* Node: Experience */}
                                    <div className="hexagon" data-purpose="fact-card">
                                        <div className="mb-4">
                                            <span className="material-symbols-outlined icon-cyan text-5xl">history_edu</span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-1 text-white"><AnimatedCounter target="15+" /> Years</h3>
                                        <p className="text-sm text-slate-400 px-4 uppercase tracking-wider font-semibold">Industry Experience</p>
                                    </div>

                                    {/* Node: Clients */}
                                    <div className="hexagon" data-purpose="fact-card">
                                        <div className="mb-4">
                                            <span className="material-symbols-outlined icon-cyan text-5xl">public</span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-1 text-white"><AnimatedCounter target="500+" /></h3>
                                        <p className="text-sm text-slate-400 px-4 uppercase tracking-wider font-semibold">Global Clients</p>
                                    </div>

                                    {/* Node: End Users (Center Focal Point) */}
                                    <div className="hexagon hexagon-center" data-purpose="center-fact-card">
                                        <div className="mb-4">
                                            <span className="material-symbols-outlined icon-center text-6xl">groups</span>
                                        </div>
                                        <h3 className="text-4xl font-bold mb-1 text-cyan-400"><AnimatedCounter target="1M+" /></h3>
                                        <p className="text-sm font-bold text-cyan-100 px-4 uppercase tracking-widest">Active End Users</p>
                                    </div>

                                    {/* Node: Uptime */}
                                    <div className="hexagon" data-purpose="fact-card">
                                        <div className="mb-4">
                                            <span className="material-symbols-outlined icon-cyan text-5xl">speed</span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-1 text-white"><AnimatedCounter target="99.9%" /></h3>
                                        <p className="text-sm text-slate-400 px-4 uppercase tracking-wider font-semibold">Service Uptime</p>
                                    </div>

                                    {/* Node: Support */}
                                    <div className="hexagon" data-purpose="fact-card">
                                        <div className="mb-4">
                                            <span className="material-symbols-outlined icon-cyan text-5xl">support_agent</span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-1 text-white">24/7</h3>
                                        <p className="text-sm text-slate-400 px-4 uppercase tracking-wider font-semibold">Managed Support</p>
                                    </div>

                                    {/* Node: Partners */}
                                    <div className="hexagon" data-purpose="fact-card">
                                        <div className="mb-4">
                                            <span className="material-symbols-outlined icon-cyan text-5xl">handshake</span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-1 text-white"><AnimatedCounter target="50+" /></h3>
                                        <p className="text-sm text-slate-400 px-4 uppercase tracking-wider font-semibold">Tech Partners</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 2. DIVISION 1: E-LEARNING (LIGHT SECTION) ── */}
                <section id="learning" className="wcu-section-light" style={{ padding: '100px 24px', position: 'relative', transition: 'background 0.5s' }}>
                    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '64px' }}>
                            <div>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#2563eb', letterSpacing: '0.2em', display: 'block', marginBottom: '12px' }}>DIVISION 1</span>
                                <h2 style={{ fontSize: '38px', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px', letterSpacing: '-0.02em' }}>E-Learning &amp; Digital Learning Solutions</h2>
                                <p style={{ fontSize: '16.5px', lineHeight: '1.7', color: '#475569', marginBottom: '28px' }}>
                                    Transforming complex knowledge, skills, and compliance requirements into engaging, impactful, and measurable learning journeys accessible anytime, anywhere, on any device.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['SCORM 1.2 / 2004', 'xAPI (Tin Can)', 'AICC Compliant', 'LMS Services', 'Instructional Design'].map((chip) => (
                                        <span key={chip} style={{ padding: '6px 14px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '50px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>{chip}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="wcu-media-wrapper">
                                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                                    <source src="/assets/images/about/e-learning.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(48%, 1fr))', gap: '32px' }}>
                            {[
                                { title: 'Instructor-Led Training (ILT)', desc: 'Expertly designed and facilitated by seasoned subject matter experts bringing real-world experience into the classroom.', f1: 'Custom Curriculum', f2: 'Pre/Post Assessments', f3: 'Training Needs Analysis' },
                                { title: 'Virtual Instructor-Led Training (VILT)', desc: 'Bringing the richness of classroom learning to digital environments via industry-leading collaboration platforms.', f1: 'Multi-Timezone Delivery', f2: 'Cohort-Based Learning', f3: 'Hybrid VILT Models' },
                                { title: 'Microlearning Solutions', desc: 'Focused, bite-sized learning content designed to be consumed in 3–7 minutes, perfectly suited for modern learners.', f1: 'Mobile-First Content', f2: 'Spaced Repetition', f3: 'Rapid Development' },
                                { title: 'Gamification Frameworks', desc: 'Applying behavioural psychology, motivational design, and game mechanics to dramatically improve completion rates.', f1: 'Points & Badges', f2: 'Leaderboards & Rewards', f3: 'Learning Quests' },
                            ].map((srv, idx) => (
                                <PremiumCard key={idx} {...srv} meta={CARD_META.learning[idx]} theme="light" />
                            ))}
                        </div>

                    </div>
                </section>

                {/* ── 3. DIVISION 2: RECRUITMENT (DARK SECTION) ── */}
                <section id="recruitment" className="wcu-section-dark" style={{ padding: '100px 24px', position: 'relative' }}>
                    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '64px' }}>
                            <div style={{ order: 2 }}>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#60a5fa', letterSpacing: '0.2em', display: 'block', marginBottom: '12px' }}>DIVISION 2</span>
                                <h2 style={{ fontSize: '38px', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px', letterSpacing: '-0.02em' }}>Recruitment, Staffing &amp; Talent Solutions</h2>
                                <p style={{ fontSize: '16.5px', lineHeight: '1.7', color: '#94a3b8', marginBottom: '28px' }}>
                                    End-to-end recruitment and staffing solutions across permanent placement, contract staffing, staff augmentation, and executive search serving global markets.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['Permanent Placement', 'Contract Staffing', 'IT Staff Augmentation', 'Non-IT Staff Augmentation', 'Executive Search'].map((chip) => (
                                        <span key={chip} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '50px', fontSize: '13px', color: '#64748b' }}>{chip}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="wcu-media-wrapper" style={{ order: 1 }}>
                                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                                    <source src="/assets/images/about/industries.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(48%, 1fr))', gap: '32px' }}>
                            {[
                                { title: 'Permanent Placement & Direct Hire', desc: 'Sourcing, screening, and presenting exceptional candidates across all seniority levels with multi-stage evaluation processes.', f1: 'AI Candidate Matching', f2: 'Competency Interviewing', f3: '90-Day Guarantee' },
                                { title: 'Contract & Temporary Staffing', desc: 'Flexible, quality talent deployed at speed to manage peak seasons or specific project cycles throughout the employee lifecycle.', f1: '24–72h Deployment', f2: 'Payroll Management', f3: 'Tax Compliance Support' },
                                { title: 'Staff Augmentation Model', desc: 'Seamlessly extending internal software engineering, data, cloud architectures, finance, HR, or operations teams without traditional overheads.', f1: 'IT Specialized Roles', f2: 'Non-IT Domain Experts', f3: 'Seamless Integration' },
                                { title: 'Executive Search & Leadership', desc: 'Applying a discreet, research-led methodology to identify and attract transformational leaders across C-suite and board levels.', f1: 'Market Mapping', f2: 'Leadership Assessment', f3: 'Confidential Mandates' },
                            ].map((srv, idx) => (
                                <PremiumCard key={idx} {...srv} meta={CARD_META.recruitment[idx]} theme="dark" />
                            ))}
                        </div>

                    </div>
                </section>

                {/* ── 4. DIVISION 3: FINANCE (LIGHT SECTION) ── */}
                <section id="finance" className="wcu-section-light" style={{ padding: '100px 24px', position: 'relative' }}>
                    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '64px' }}>
                            <div>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#2563eb', letterSpacing: '0.2em', display: 'block', marginBottom: '12px' }}>DIVISION 3</span>
                                <h2 style={{ fontSize: '38px', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px', letterSpacing: '-0.02em' }}>Financial Consultancy &amp; Accounting Services</h2>
                                <p style={{ fontSize: '16.5px', lineHeight: '1.7', color: '#475569', marginBottom: '28px' }}>
                                    Comprehensive end-to-end financial services designed to provide clarity, compliance, and strategic direction for businesses of all sizes.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['Accounting & Bookkeeping', 'Tax Planning', 'Financial Reporting', 'Budgeting & Forecasting', 'Audit Support'].map((chip) => (
                                        <span key={chip} style={{ padding: '6px 14px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '50px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>{chip}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="wcu-media-wrapper">
                                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                                    <source src="/assets/images/about/global-Delivery-Network.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '32px'
                        }}>
                            {[
                                { title: 'Accounting, Bookkeeping & Reporting Services', desc: 'Accurate, timely, and fully compliant transaction logging and management information generation across cloud accounting ecosystems.', f1: 'Xero & QuickBooks', f2: 'IFRS & GAAP Compliance', f3: 'AP/AR Management' },
                                { title: 'Tax Planning, Compliance & Advisory', desc: 'Navigating domestic and international tax obligations with precision, ensuring corporate and personal compliance across jurisdictions.', f1: 'VAT / GST Filings', f2: 'Transfer Pricing Docs', f3: 'Cross-Border Planning' },
                                { title: 'Budgeting, Forecasting & CFO Advisory', desc: 'Access to strategic board-level financial management, Three-Way financial modeling, and scenario planning tools for scalable growth.', f1: 'Scenario Modeling', f2: 'Fractional CFO Support', f3: 'Cash Flow Forecasting' },
                            ].map((srv, idx) => (
                                <PremiumCard key={idx} {...srv} meta={CARD_META.finance[idx]} theme="light" />
                            ))}
                        </div>

                    </div>
                </section>

                {/* ── 5. INTEGRATED EXPERTISE PROMISE (DARK SECTION) ── */}
                <section className="wcu-section-dark" style={{ padding: '100px 24px', position: 'relative' }}>
                    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                            <span style={{ fontSize: '11px', fontWeight: '800', color: '#60a5fa', letterSpacing: '0.2em' }}>OUR STRATEGIC ADVANTAGE</span>
                            <h2 style={{ fontSize: '38px', fontWeight: '900', marginTop: '8px' }}>Why Partner with JF Knowledge Centre?</h2>
                        </div>

                        <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: '2px solid rgba(255,255,255,0.06)' }}>
                            {[
                                { title: 'Integrated Expertise', desc: 'Three specialist divisions under one roof. Whether you need to train your people, hire the best, or manage your finances — we deliver it all with consistent quality and a single point of accountability.' },
                                { title: 'Global Reach, Local Insight', desc: 'Active presence across US, UK, Europe, GCC, and India. We understand local market nuances, regulatory landscapes, and cultural contexts that drive results in each geography.' },
                                { title: 'Technology-Driven Foundations', desc: 'We leverage AI, automation, and digital platforms to deliver faster, smarter, and more scalable solutions across all three divisions — from AI-powered candidate matching to real-time financial dashboards.' }
                            ].map((phase, index) => (
                                <div key={index} style={{ position: 'relative', marginBottom: '40px' }}>
                                    <div style={{ position: 'absolute', left: '-42px', top: '4px', width: '18px', height: '18px', borderRadius: '50%', background: '#060B17', border: '2px solid #3b82f6', boxShadow: '0 0 10px rgba(59,130,246,0.5)' }} />
                                    <h4 style={{ fontSize: '19px', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>
                                        {phase.title}
                                    </h4>
                                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#94a3b8', margin: 0 }}>{phase.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 6. PARAMETER CLARITY HUB / FAQ (LIGHT SECTION) ── */}
                <section className="wcu-section-light" style={{ padding: '100px 24px', borderTop: '1px solid rgba(15,23,42,0.04)' }}>
                    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                            <span style={{ fontSize: '11px', fontWeight: '800', color: '#2563eb', letterSpacing: '0.15em' }}>FAQ</span>
                            <h2 style={{ fontSize: '34px', fontWeight: '900', marginTop: '8px' }}>Frequently Asked Parameters</h2>
                        </div>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {[
                                { q: 'What compliance frameworks govern your Custom eLearning outputs?', a: 'Our custom modules are fully SCORM 1.2, SCORM 2004, xAPI (Tin Can), and AICC compliant, utilizing top-tier authoring tools like Articulate Storyline and Adobe Captivate.' },
                                { q: 'What specific timelines back your Contract and Temporary staffing placements?', a: 'We specialize in the rapid deployment of pre-vetted contract professionals within 24 to 72 hours, managing complete contractor payroll, tax compliance, and HR support requirements.' }
                            ].map((faq, index) => (
                                <div key={index} style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(15,23,42,0.02)', transition: 'transform 0.3s ease' }}>
                                    <h4 style={{ fontSize: '16.5px', fontWeight: '800', marginBottom: '8px', color: '#0f172a' }}>{faq.q}</h4>
                                    <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#475569', margin: 0 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>

            <Footer />
        </div>
    );
}