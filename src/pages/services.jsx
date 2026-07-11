import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CTA from '../components/sections/CTAsection';
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
            { accent: '#3b82f6', badge: 'INSTRUCTOR-LED TRAINING (ILT)', img: '/assets/images/services/1-1.jpg', stat: 'Custom', statLabel: 'Curriculum Design' },
            { accent: '#60a5fa', badge: 'VIRTUAL ILT (VILT)', img: '/assets/images/services/1-2.jpg', stat: 'Live', statLabel: 'Synchronous Sessions' },
            { accent: '#a855f7', badge: 'MICROLEARNING', img: '/assets/images/services/1-3.jpg', stat: '3-7 Min', statLabel: 'Bite-Sized Modules' },
            { accent: '#10b981', badge: 'GAMIFICATION', img: '/assets/images/services/1-4.jpg', stat: 'Engagement', statLabel: 'Game Mechanics' },
        ],
        recruitment: [
            { accent: '#3b82f6', badge: 'PERMANENT PLACEMENT', img: '/assets/images/services/3-1.jpg', stat: '90 Day', statLabel: 'Replacement Guarantee' },
            { accent: '#60a5fa', badge: 'CONTRACT & TEMPORARY STAFFING', img: '/assets/images/services/3-2.jpg', stat: '24-72h', statLabel: 'Rapid Deployment' },
            { accent: '#a855f7', badge: 'STAFF AUGMENTATION', img: '/assets/images/services/3-3.jpg', stat: 'IT & Non-IT', statLabel: 'Team Extensions' },
            { accent: '#10b981', badge: 'MANAGED STAFFING SOLUTIONS', img: '/assets/images/services/3-4.jpg', stat: 'RPO / MSP', statLabel: 'Outsourced Models' },
        ],
        finance: [
            { accent: '#3b82f6', badge: 'ACCOUNTING & BOOKKEEPING', img: '/assets/images/services/2-1.jpg', stat: 'Cloud', statLabel: 'Xero, QuickBooks, Sage' },
            { accent: '#60a5fa', badge: 'TAX & COMPLIANCE', img: '/assets/images/services/2-2.jpg', stat: 'Advisory', statLabel: 'Planning & Filing' },
            { accent: '#10b981', badge: 'CFO ADVISORY', img: '/assets/images/services/2-3.jpg', stat: 'Fractional', statLabel: 'Strategic Leadership' },
        ],
    };

    const PremiumCard = ({ title, desc, f1, f2, f3, meta }) => {
        return (
            <div className="wcu-premium-card-wrapper">
                <div className="wcu-premium-glow-border" />
                <div className="wcu-premium-card-inner">
                    <div className="wcu-card-dots">{'● ● ● ●\n● ● ● ●'}</div>

                    <div style={{ height: 210, position: 'relative', overflow: 'hidden' }}>
                        <img src={meta.img} alt={title} className="wcu-card-img-mask" />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0b1220 5%, transparent 70%)' }} />
                    </div>

                    <div style={{ padding: '28px' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            fontSize: 10, fontWeight: 800, letterSpacing: '0.15em',
                            color: meta.accent, background: `${meta.accent}12`,
                            border: `1px solid ${meta.accent}33`, borderRadius: 99, padding: '4px 12px', marginBottom: 16
                        }}>{meta.badge}</div>

                        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', lineHeight: 1.3, marginBottom: 12 }}>{title}</h3>
                        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#94a3b8', marginBottom: 20 }}>{desc}</p>

                        <div className="wcu-card-kpi-row" style={{ borderLeft: `3px solid ${meta.accent}` }}>
                            <span style={{ fontSize: 24, fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>{meta.stat}</span>
                            <span style={{ fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{meta.statLabel}</span>
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
            <Header />

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pulseDot { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.5); opacity: 1; } }
                
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
                
                /* PREMIUM FROSTED APPLE/OPENAI STYLE SPOTLIGHT CARD */
                .wcu-spotlight-card {
                    position: relative; 
                    overflow: hidden; 
                    z-index: 5;
                    padding: 64px; 
                    border-radius: 32px;
                    background: linear-gradient(180deg, rgba(17, 24, 39, 0.35), rgba(17, 24, 39, 0.22));
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(14px); 
                    -webkit-backdrop-filter: blur(14px);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
                    transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                /* Radial Blue Edge Glow Inside Card */
                .wcu-spotlight-card::before {
                    content: "";
                    position: absolute; 
                    inset: 0;
                    background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.14), transparent 45%);
                    pointer-events: none;
                    z-index: -1;
                }
                
                /* Expensive Light Inner Border Highlight */
                .wcu-spotlight-card::after {
                    content: "";
                    position: absolute; 
                    inset: 1px; 
                    border-radius: 30px;
                    border: 1px solid rgba(255, 255, 255, 0.04);
                    pointer-events: none;
                    z-index: -1;
                }
                
                .wcu-spotlight-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(59, 130, 246, 0.28);
                    box-shadow: 0 35px 90px rgba(37, 99, 235, 0.18);
                }
                
                /* ACCENTUATED ACCESSIBLE VIDEO STYLING */
                .wcu-spotlight-video-bg {
                    position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -3; 
                    opacity: 0.45; filter: brightness(0.95) contrast(1.1) saturate(1.15);
                }
                
                /* Translucent Text Overlay Mask */
                .wcu-spotlight-video-overlay {
                    position: absolute; inset: 0; 
                    background: linear-gradient(90deg, rgba(4, 12, 28, 0.50) 40%, rgba(4, 12, 28, 0.35) 100%); 
                    z-index: -2; pointer-events: none;
                }
                
                .wcu-spotlight-label { font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: #60a5fa; font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
                
                /* Readability Text Shadows */
                .wcu-spotlight-title { 
                    font-size: clamp(36px, 4.5vw, 58px); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; color: #ffffff; margin: 0 0 20px 0;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
                }
                
                .wcu-spotlight-desc {
                    font-size: '16.5px'; line-height: 1.7; color: rgba(255, 255, 255, 0.78); margin: 0 0 28px 0;
                    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
                }
                
                .wcu-bullet-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 32px 0; }
                .wcu-bullet-item { padding: 16px 20px; border-radius: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 12px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
                .wcu-bullet-item:hover { transform: translateY(-4px); background: rgba(37,99,235,0.08); border-color: rgba(59,130,246,0.4); }
                
                .wcu-pill-cta { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(90deg, #2563eb, #3b82f6); color: #ffffff; padding: 14px 28px; border-radius: 999px; font-weight: 700; font-size: 15px; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(37,99,235,0.3); text-decoration: none; }
                .wcu-pill-cta:hover { transform: translateX(3px); filter: brightness(1.1); box-shadow: 0 12px 30px rgba(37,99,235,0.45); }
                
                .wcu-premium-card-wrapper { position: relative; border-radius: 24px; padding: 1px; background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
                .wcu-premium-card-inner { background: #0b1220; border-radius: 23px; overflow: hidden; height: 100%; position: relative; }
                .wcu-card-dots { position: absolute; top: 20px; right: 20px; opacity: 0.05; font-size: 10px; line-height: 1.4; letter-spacing: 3px; color: #fff; }
                .wcu-card-img-mask { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.05) brightness(0.9); transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
                .wcu-premium-card-wrapper:hover { transform: translateY(-8px) rotateX(1.5deg); background: linear-gradient(135deg, rgba(59,130,246,0.4), transparent 60%); }
                .wcu-premium-card-wrapper:hover .wcu-card-img-mask { transform: scale(1.04); }
                .wcu-card-kpi-row { display: flex; flex-direction: column; gap: 2px; padding-left: 14px; margin-bottom: 22px; }
                .wcu-card-mini-chip { padding: 5px 12px; border-radius: 99px; font-size: 12.5px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); color: #94a3b8; }
            ` }} />

            <main style={{ flex: 1 }} className="wcu-premium-bg">
                <div className="wcu-noise-layer" />

                {/* ── 1. ULTRA-PREMIUM SPOTLIGHT HERO SECTION ── */}
                <section style={{ padding: '140px 24px 100px 24px', position: 'relative', zIndex: 3 }}>
                    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                        <div className="wcu-spotlight-card">
                            {/* high visibility video elements */}
                            <video autoPlay loop muted playsInline className="wcu-spotlight-video-bg">
                                <source src="/assets/images/about/e-learning.mp4" type="video/mp4" />
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

                        {/* Document-Backed Geographic Footprint Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', background: 'rgba(15,23,42,0.3)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.04)' }}>
                            {[
                                { region: 'United States', sub: 'EEO & ITAR Compliant' },
                                { region: 'United Kingdom', sub: 'IR35 & GDPR Compliant' },
                                { region: 'Europe', sub: 'Pan-European Sourcing' },
                                { region: 'GCC', sub: 'Visa & Relocation Support' },
                                { region: 'India', sub: 'Global Delivery Hub' }
                            ].map((footprint, i) => (
                                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <div style={{ fontSize: '18px', fontWeight: '900', color: '#ffffff' }}>
                                        {footprint.region}
                                    </div>
                                    <div style={{ fontSize: '11px', fontWeight: 500, color: '#64748b', marginTop: '4px' }}>
                                        {footprint.sub}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* ── 2. DIVISION 1: E-LEARNING & DIGITAL LEARNING SOLUTIONS ── */}
                <section id="learning" style={{ padding: '100px 24px', background: '#0b1220', position: 'relative' }}>
                    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '64px' }}>
                            <div>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#60a5fa', letterSpacing: '0.2em', display: 'block', marginBottom: '12px' }}>DIVISION 1</span>
                                <h2 style={{ fontSize: '38px', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px', letterSpacing: '-0.02em' }}>E-Learning &amp; Digital Learning Solutions</h2>
                                <p style={{ fontSize: '16.5px', lineHeight: '1.7', color: '#94a3b8', marginBottom: '28px' }}>
                                    Transforming complex knowledge, skills, and compliance requirements into engaging, impactful, and measurable learning journeys accessible anytime, anywhere, on any device.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['SCORM 1.2 / 2004', 'xAPI (Tin Can)', 'AICC Compliant', 'LMS Services', 'Instructional Design'].map((chip) => (
                                        <span key={chip} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '50px', fontSize: '13px', color: '#64748b' }}>{chip}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '380px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
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
                                <PremiumCard key={idx} {...srv} meta={CARD_META.learning[idx]} />
                            ))}
                        </div>

                    </div>
                </section>

                {/* ── 3. DIVISION 2: RECRUITMENT, STAFFING & TALENT SOLUTIONS ── */}
                <section id="recruitment" style={{ padding: '100px 24px', position: 'relative' }}>
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
                            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '380px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', order: 1 }}>
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
                                <PremiumCard key={idx} {...srv} meta={CARD_META.recruitment[idx]} />
                            ))}
                        </div>

                    </div>
                </section>

                {/* ── 4. DIVISION 3: FINANCIAL CONSULTANCY & ACCOUNTING SERVICES ── */}
                <section id="finance" style={{ padding: '100px 24px', background: '#0b1220', position: 'relative' }}>
                    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '64px' }}>
                            <div>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#60a5fa', letterSpacing: '0.2em', display: 'block', marginBottom: '12px' }}>DIVISION 3</span>
                                <h2 style={{ fontSize: '38px', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px', letterSpacing: '-0.02em' }}>Financial Consultancy &amp; Accounting Services</h2>
                                <p style={{ fontSize: '16.5px', lineHeight: '1.7', color: '#94a3b8', marginBottom: '28px' }}>
                                    Comprehensive end-to-end financial services designed to provide clarity, compliance, and strategic direction for businesses of all sizes.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['Accounting & Bookkeeping', 'Tax Planning', 'Financial Reporting', 'Budgeting & Forecasting', 'Audit Support'].map((chip) => (
                                        <span key={chip} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '50px', fontSize: '13px', color: '#64748b' }}>{chip}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '380px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
                                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                                    <source src="/assets/images/about/global-Delivery-Network.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
                            {[
                                { title: 'Accounting, Bookkeeping & Reporting Services', desc: 'Accurate, timely, and fully compliant transaction logging and management information generation across cloud accounting ecosystems.', f1: 'Xero & QuickBooks', f2: 'IFRS & GAAP Compliance', f3: 'AP/AR Management' },
                                { title: 'Tax Planning, Compliance & Advisory', desc: 'Navigating domestic and international tax obligations with precision, ensuring corporate and personal compliance across jurisdictions.', f1: 'VAT / GST Filings', f2: 'Transfer Pricing Docs', f3: 'Cross-Border Planning' },
                                { title: 'Budgeting, Forecasting & CFO Advisory', desc: 'Access to strategic board-level financial management, Three-Way financial modeling, and scenario planning tools for scalable growth.', f1: 'Scenario Modeling', f2: 'Fractional CFO Support', f3: 'Cash Flow Forecasting' },
                            ].map((srv, idx) => (
                                <PremiumCard key={idx} {...srv} meta={CARD_META.finance[idx]} />
                            ))}
                        </div>

                    </div>
                </section>

                {/* ── 5. INTEGRATED EXPERTISE PROMISE ── */}
                <section style={{ padding: '100px 24px', position: 'relative' }}>
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

                {/* ── 6. PARAMETER CLARITY HUB (FAQ) ── */}
                <section style={{ padding: '100px 24px', background: '#0b1220', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                            <span style={{ fontSize: '11px', fontWeight: '800', color: '#60a5fa', letterSpacing: '0.15em' }}>FAQ</span>
                            <h2 style={{ fontSize: '34px', fontWeight: '900', marginTop: '8px' }}>Frequently Asked Parameters</h2>
                        </div>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {[
                                { q: 'What compliance frameworks govern your Custom eLearning outputs?', a: 'Our custom modules are fully SCORM 1.2, SCORM 2004, xAPI (Tin Can), and AICC compliant, utilizing top-tier authoring tools like Articulate Storyline and Adobe Captivate.' },
                                { q: 'What specific timelines back your Contract and Temporary staffing placements?', a: 'We specialize in the rapid deployment of pre-vetted contract professionals within 24 to 72 hours, managing complete contractor payroll, tax compliance, and HR support requirements.' }
                            ].map((faq, index) => (
                                <div key={index} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <h4 style={{ fontSize: '16.5px', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>{faq.q}</h4>
                                    <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#94a3b8', margin: 0 }}>{faq.a}</p>
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