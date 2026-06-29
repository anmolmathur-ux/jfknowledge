import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { elearningServices, elearningIndustries } from '../../data/elearningServices';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const serviceLinks = [
    { label: 'Instructor-Led Training', href: '/e-learning/instructor-led' },
    { label: 'Virtual ILT (VILT)', href: '/e-learning/virtual-instructor-led' },
    { label: 'Microlearning', href: '/e-learning/microlearning' },
    { label: 'Custom eLearning', href: '/e-learning/custom-elearning' },
    { label: 'Learning Consulting', href: '/e-learning/learning-consulting' },
];

export default function ElearningIndex() {
    const [activeService, setActiveService] = useState(0);
    const active = elearningServices[activeService];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#04060b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Header />

            <main style={{ flex: 1, paddingTop: '100px', overflow: 'hidden', position: 'relative' }}>
                {/* Stunning Glowing Backdrop Elements */}
                <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(151,71,255,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '20%', right: '-10%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

                {/* --- HERO SECTION --- */}
                <section style={{ position: 'relative', padding: '60px 40px 80px', maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.10fr 0.90fr', gap: '80px', alignItems: 'center' }}>

                        {/* LEFT HEADER AREA */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* Glass Tag Pill */}
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '999px', padding: '8px 16px', width: 'fit-content', marginBottom: '32px', backdropFilter: 'blur(8px)' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#9747FF', display: 'inline-block', boxShadow: '0 0 12px #9747FF' }} />
                                <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase' }}>
                                    Enterprise Knowledge Systems
                                </span>
                            </div>

                            {/* Trendy Typography */}
                            <h1 style={{ margin: '0 0 28px 0', fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#ffffff' }}>
                                Scalable Systems.<br />
                                <span style={{ background: 'linear-gradient(90deg, #9747FF 0%, #22d3ee 50%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>
                                    Measurable Learning.
                                </span>
                            </h1>

                            <p style={{ margin: '0 0 44px 0', fontSize: '16.5px', color: 'rgba(243, 244, 246, 0.75)', lineHeight: 1.8, maxWidth: '540px' }}>
                                Transform corporate performance through tailored educational frameworks, data-driven micro-retention strategies, and cross-modality learning tracks optimized for global workforces.
                            </p>

                            {/* Interactive Segment Switcher Grid */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
                                <span style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', display: 'block' }}>
                                    Select Architectural Segment:
                                </span>
                                {elearningServices.map((srv, idx) => (
                                    <div
                                        key={srv.id}
                                        onClick={() => setActiveService(idx)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '14px 20px',
                                            borderRadius: '12px',
                                            background: activeService === idx ? 'rgba(151, 71, 255, 0.08)' : 'rgba(255,255,255,0.02)',
                                            border: '1px solid',
                                            borderColor: activeService === idx ? 'rgba(151, 71, 255, 0.3)' : 'rgba(255,255,255,0.06)',
                                            cursor: 'pointer',
                                            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                                        }}
                                        onMouseEnter={e => {
                                            if (activeService !== idx) {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                                            }
                                        }}
                                        onMouseLeave={e => {
                                            if (activeService !== idx) {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                            }
                                        }}
                                    >
                                        <span style={{ fontSize: '15px', fontWeight: '600', color: activeService === idx ? '#ffffff' : 'rgba(255,255,255,0.65)' }}>
                                            {srv.title}
                                        </span>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <span style={{ fontSize: '12px', fontWeight: '500', color: activeService === idx ? '#c4a0ff' : 'rgba(255,255,255,0.35)' }}>
                                                {srv.id === 'instructor-led' ? 'ILT' : srv.id === 'virtual-instructor-led' ? 'VILT' : srv.id === 'microlearning' ? 'Micro' : srv.id === 'custom-elearning' ? 'Custom' : 'Consulting'}
                                            </span>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: activeService === idx ? '#9747FF' : 'rgba(255,255,255,0.2)', transform: activeService === idx ? 'translateX(2px)' : 'none', transition: 'transform 0.2s' }}>
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT INTERACTIVE CONTENT BOX */}
                        <div style={{
                            background: 'rgba(10, 14, 23, 0.45)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '24px',
                            backdropFilter: 'blur(24px)',
                            padding: '40px',
                            boxShadow: '0 30px 70px rgba(0,0,0,0.6)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '520px'
                        }}>
                            {/* Decorative Neon Node */}
                            <div style={{ position: 'absolute', top: '-1px', right: '40px', width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }} />

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                                        Active Modality Overview
                                    </span>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 8px #22d3ee' }} />
                                </div>

                                <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#ffffff', margin: '0 0 16px 0', letterSpacing: '-0.02em' }}>
                                    {active.title}
                                </h2>

                                <p style={{ fontSize: '16px', fontWeight: '500', color: '#c4a0ff', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                                    {active.summary}
                                </p>

                                <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 100%)', marginBottom: '24px' }} />

                                <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.52)', lineHeight: '1.7', margin: '0 0 32px 0' }}>
                                    {active.description}
                                </p>

                                {/* Features List Block */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                    {active.features.map((feat, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', fontWeight: '500' }}>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action Navigation Link */}
                            <button
                                onClick={() => navigate(serviceLinks[activeService].href)}
                                style={{
                                    width: '100%',
                                    background: 'linear-gradient(90deg, #9747FF, #7a22ff)',
                                    border: 'none',
                                    borderRadius: '14px',
                                    padding: '16px 24px',
                                    color: '#ffffff',
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 8px 24px rgba(151,71,255,0.25)'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(151,71,255,0.4)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(151,71,255,0.25)';
                                }}
                            >
                                Explore Architectural Framework
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </section>

                {/* --- SECTORS SERVED STRIP --- */}
                <section style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)', padding: '60px 40px', backdropFilter: 'blur(4px)' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        <div>
                            <span style={{ fontSize: '11px', fontWeight: '800', color: '#9747FF', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '6px' }}>
                                Sectors Served
                            </span>
                            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#ffffff', margin: '0', letterSpacing: '-0.02em' }}>
                                Industries We Serve
                            </h2>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {elearningIndustries.map((ind, i) => (
                                <span
                                    key={i}
                                    style={{
                                        fontSize: '13.5px',
                                        fontWeight: '600',
                                        color: 'rgba(255,255,255,0.6)',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                        borderRadius: '999px',
                                        padding: '8px 20px',
                                        transition: 'all 0.25s ease',
                                        cursor: 'default'
                                    }}
                                    onMouseEnter={e => {
                                        e.target.style.background = 'rgba(151,71,255,0.1)';
                                        e.target.style.borderColor = 'rgba(151,71,255,0.35)';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.boxShadow = '0 0 15px rgba(151,71,255,0.15)';
                                    }}
                                    onMouseLeave={e => {
                                        e.target.style.background = 'rgba(255,255,255,0.03)';
                                        e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                                        e.target.style.color = 'rgba(255,255,255,0.6)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    {ind}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}