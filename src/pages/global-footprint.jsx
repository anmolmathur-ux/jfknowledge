import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { geographicFootprint } from '../data/recruitmentServices';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const regionColors = { 'United States': '#9747FF', 'United Kingdom': '#22d3ee', 'Europe': '#34d399', 'GCC': '#f59e0b' };
const regionFlags = { 'United States': '🇺🇸', 'United Kingdom': '🇬🇧', 'Europe': '🇪🇺', 'GCC': '🌍' };

export default function GlobalFootprintPage() {
    // Fail-safe default fallback in case data structure doesn't exist yet
    const footprints = Array.isArray(geographicFootprint) ? geographicFootprint : [];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#040406', fontFamily: "'Poppins', sans-serif" }}>
            <Header />
            <main style={{ flex: 1, paddingTop: '68px' }}>

                <style>{`
                    .region-card {
                        background: rgba(255,255,255,0.01);
                        border: 1px solid rgba(255,255,255,0.04);
                        border-radius: 24px;
                        padding: 40px;
                        transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    .region-card:hover {
                        transform: translateY(-5px);
                        background: rgba(255,255,255,0.02);
                        border-color: rgba(255,255,255,0.1);
                    }
                    .compliance-badge {
                        display: inline-block;
                        padding: 6px 14px;
                        background: rgba(255,255,255,0.04);
                        border: 1px solid rgba(255,255,255,0.08);
                        border-radius: 10px;
                        font-size: 12px;
                        font-weight: 600;
                        color: rgba(255,255,255,0.7);
                    }
                `}</style>

                {/* Hero */}
                <section style={{ position: 'relative', padding: '120px 40px 80px', overflow: 'hidden', background: 'radial-gradient(circle at 50% -20%, #120e24 0%, #040406 100%)' }}>
                    <div style={{ position: 'absolute', top: '-40px', left: '20%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
                    <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
                        <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#9747FF', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '16px' }}>
                            Global Operations
                        </span>
                        <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: '800', color: '#ffffff', margin: '0 0 20px 0', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                            Global Delivery <span style={{ background: 'linear-gradient(95deg, #22d3ee, #9747FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Network</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '17px', lineHeight: 1.75, maxWidth: '750px', margin: 0 }}>
                            Cross-border operations aligned with regional regulatory frameworks — IR35, GDPR, EEO, ESR, and beyond.
                        </p>
                    </div>
                </section>

                {/* Stats bar */}
                <section style={{ padding: '80px 40px', background: '#07070a', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
                        {[
                            { val: '5+', label: 'Primary Economic Hubs' },
                            { val: '100%', label: 'Compliance Alignment' },
                            { val: '24/7', label: 'Cross-Border Execution' },
                            { val: 'Multi', label: 'Disciplinary Oversight' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '40px', fontWeight: '900', color: '#ffffff', marginBottom: '8px', letterSpacing: '-0.02em' }}>{stat.val}</div>
                                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: '500' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Regions Grid */}
                <section style={{ padding: '120px 40px', background: '#040406' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                        {footprints.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '40px', color: 'rgba(255,255,255,0.4)' }}>
                                No geographic data currently available.
                            </div>
                        ) : (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                                {footprints.map((region, idx) => {
                                    const color = regionColors[region.region] || '#9747FF';
                                    const flag = regionFlags[region.region] || '🌍';
                                    return (
                                        <div key={idx} className="region-card" style={{ borderLeft: `4px solid ${color}` }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                                                <span style={{ fontSize: '28px' }}>{flag}</span>
                                                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', margin: 0 }}>{region.region}</h3>
                                            </div>

                                            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '32px' }}>
                                                {region.description}
                                            </p>

                                            <div style={{ marginBottom: '28px' }}>
                                                <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Regulatory Frameworks</div>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                                    {region.frameworks?.map((f, fIdx) => (
                                                        <span key={fIdx} className="compliance-badge">{f}</span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Core Operational Hubs</div>
                                                <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: '500', opacity: 0.85 }}>
                                                    {region.hubs?.join('  ·  ')}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        <div style={{ marginTop: '80px', padding: '40px 50px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
                            <div>
                                <div style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>Expanding globally?</div>
                                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>Let us support your international talent and learning needs.</div>
                            </div>
                            <button onClick={() => navigate('/contact')} style={{ padding: '16px 36px', borderRadius: '12px', background: '#9747FF', border: 'none', color: '#ffffff', fontSize: '14px', fontWeight: '700', cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Poppins', sans-serif", transition: 'all 0.25s', boxShadow: '0 8px 25px rgba(151,71,255,0.3)' }}
                                onMouseEnter={e => { e.target.style.background = '#7c2fe0'; e.target.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={e => { e.target.style.background = '#9747FF'; e.target.style.transform = 'translateY(0)'; }}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}