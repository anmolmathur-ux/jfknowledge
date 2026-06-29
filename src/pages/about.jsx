import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { companyInfo } from '../data/companyInfo';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const valueIcons = { Excellence: '⭐', Innovation: '💡', Integrity: '🔒', Partnership: '🤝', Impact: '🎯' };
const valueColors = ['#9747FF', '#22d3ee', '#f59e0b', '#34d399', '#f472b6'];

export default function AboutPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#040406', fontFamily: "'Poppins', sans-serif" }}>
            <Header />
            <main style={{ flex: 1, paddingTop: '68px' }}>

                <style>{`
                    .value-card {
                        background: rgba(255,255,255,0.01);
                        border: 1px solid rgba(255,255,255,0.04);
                        border-radius: 24px;
                        padding: 40px;
                        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                        position: relative;
                        overflow: hidden;
                    }
                    .value-card:hover {
                        transform: translateY(-6px);
                        background: rgba(255,255,255,0.02);
                    }
                    .mv-card {
                        background: rgba(151,71,255,0.02);
                        border: 1px solid rgba(151,71,255,0.1);
                        border-radius: 28px;
                        padding: 50px;
                        transition: all 0.3s ease;
                    }
                    .mv-card:hover {
                        border-color: rgba(151,71,255,0.3);
                        box-shadow: 0 20px 40px rgba(151,71,255,0.05);
                    }
                `}</style>

                {/* Hero banner */}
                <section style={{ position: 'relative', padding: '140px 40px 100px', overflow: 'hidden', background: 'radial-gradient(circle at 80% 20%, #0f0e1a 0%, #040406 100%)' }}>
                    <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(151,71,255,0.12) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
                    <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
                        <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#9747FF', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '20px' }}>
                            Global Multi-Disciplinary Practice
                        </span>
                        <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: '800', color: '#ffffff', margin: '0 0 28px 0', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                            About <span style={{ background: 'linear-gradient(95deg, #9747FF, #d8b4fe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>JF Knowledge Centre</span>
                        </h1>
                        <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: 0 }}>
                            {companyInfo.whyChooseUs}
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section style={{ padding: '100px 40px', background: '#07070a', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                        {[
                            { label: 'Our Mission', text: companyInfo.mission, color: '#9747FF', icon: '🚀' },
                            { label: 'Our Vision', text: companyInfo.vision, color: '#22d3ee', icon: '🔭' }
                        ].map((item, idx) => (
                            <div key={idx} className="mv-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <span style={{ fontSize: '32px', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>{item.icon}</span>
                                    <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#ffffff', margin: 0 }}>{item.label}</h2>
                                </div>
                                <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core Values */}
                <section style={{ padding: '120px 40px', background: '#040406' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                            <span style={{ fontSize: '12px', fontWeight: '800', color: '#9747FF', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Principles That Drive Us</span>
                            <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#ffffff', margin: '12px 0 0 0', letterSpacing: '-0.02em' }}>Our Core Values</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                            {companyInfo.values.map((v, i) => {
                                const color = valueColors[i % valueColors.length];
                                return (
                                    <div key={i} className="value-card" style={{ borderTop: `4px solid ${color}` }}>
                                        <div style={{ fontSize: '36px', marginBottom: '24px' }}>{valueIcons[v.title] || '✨'}</div>
                                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '0 0 14px 0' }}>{v.title}</h3>
                                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{v.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA frame replacement link block */}
                <section style={{ padding: '0 40px 120px', background: '#040406' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', background: 'linear-gradient(135deg, #110c1f 0%, #08070f 100%)', border: '1px solid rgba(151,71,255,0.2)', padding: '60px', borderRadius: '32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '150px', background: 'rgba(151,71,255,0.2)', filter: 'blur(50px)', borderRadius: '50%' }} />
                        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '0 0 16px 0', letterSpacing: '-0.02em' }}>Ready to discover the JF advantage?</h2>
                        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '540px', margin: '0 auto 36px', lineHeight: 1.6 }}>Connect with our global consultants for personalized operations architecture optimization.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <button onClick={() => navigate('/contact')} style={{ padding: '16px 36px', borderRadius: '12px', background: '#9747FF', border: 'none', color: '#ffffff', fontSize: '14px', fontWeight: '700', cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Poppins', sans-serif", boxShadow: '0 8px 30px rgba(151,71,255,0.3)', transition: 'all 0.25s' }}
                                onMouseEnter={e => { e.target.style.background = '#7c2fe0'; e.target.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={e => { e.target.style.background = '#9747FF'; e.target.style.transform = 'translateY(0)'; }}>
                                Contact Us
                            </button>
                            <button onClick={() => navigate('/why-jf')} style={{ padding: '16px 36px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: '14px', fontWeight: '600', cursor: 'pointer', letterSpacing: '0.06em', fontFamily: "'Poppins', sans-serif", transition: 'all 0.25s' }}
                                onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                                onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.03)'; }}>
                                Why JF Knowledge Centre
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}