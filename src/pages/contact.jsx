import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/shared/ContactForm';
import { companyInfo } from '../data/companyInfo';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function ContactPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#040406', fontFamily: "'Poppins', sans-serif" }}>
            <Header />
            <main style={{ flex: 1, paddingTop: '68px' }}>

                <style>{`
                    .contact-quick-btn {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        padding: 20px 24px;
                        background: rgba(255,255,255,0.01);
                        border: 1px solid rgba(255,255,255,0.04);
                        border-radius: 16px;
                        color: rgba(255,255,255,0.6);
                        font-family: 'Poppins', sans-serif;
                        font-size: 14px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.25s ease;
                        text-align: left;
                    }
                    .contact-quick-btn:hover {
                        background: rgba(151,71,255,0.08);
                        border-color: rgba(151,71,255,0.4);
                        color: #ffffff;
                        transform: translateX(4px);
                    }
                    .info-block {
                        padding: 30px;
                        background: rgba(255,255,255,0.01);
                        border: 1px solid rgba(255,255,255,0.03);
                        border-radius: 20px;
                    }
                `}</style>

                {/* Hero */}
                <section style={{ position: 'relative', padding: '120px 40px 80px', overflow: 'hidden', background: 'radial-gradient(circle at 10% 20%, #0e0d1a 0%, #040406 100%)' }}>
                    <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(151,71,255,0.12) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
                    <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
                        <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#9747FF', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '16px' }}>
                            Get In Touch
                        </span>
                        <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: '800', color: '#ffffff', margin: '0 0 20px 0', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                            Connect With an <span style={{ background: 'linear-gradient(95deg, #9747FF, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Expert</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '17px', lineHeight: 1.75, maxWidth: '700px', margin: 0 }}>
                            Reach out for a confidential, no-obligation consultation. Our specialist team will respond within 24 hours.
                        </p>
                    </div>
                </section>

                {/* Main content */}
                <section style={{ padding: '80px 40px 140px', background: '#040406' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '60px', alignItems: 'start' }}>

                        {/* Left: Contact info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div className="info-block">
                                <div style={{ fontSize: '11px', fontWeight: '800', color: '#9747FF', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>Official Channels</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div>
                                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '4px' }}>Email Address</div>
                                        <a href={`mailto:${companyInfo.email}`} style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#9747FF'} onMouseLeave={e => e.target.style.color = '#ffffff'}>
                                            {companyInfo.email}
                                        </a>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '4px' }}>Global Headquarters</div>
                                        <div style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', lineHeight: 1.5 }}>
                                            {companyInfo.address}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-block">
                                <div style={{ fontSize: '11px', fontWeight: '800', color: '#9747FF', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>Operational Hubs</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                                    <div>🇺🇸 United States</div>
                                    <div>🇬🇧 United Kingdom</div>
                                    <div>🇪🇺 Europe Hub</div>
                                    <div>🌍 GCC & India</div>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 16px 0' }}>Explore Specific Divisions</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {[
                                        { label: 'E-Learning Development Solutions', path: '/services/elearning' },
                                        { label: 'Executive & Strategic Talent Sourcing', path: '/services/recruitment' },
                                        { label: 'Corporate Finance & Accounting Advisors', path: '/services/finance' }
                                    ].map((item, index) => (
                                        <button key={index} className="contact-quick-btn" onClick={() => navigate(item.path)}>
                                            <span>{item.label}</span>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', borderRadius: '32px', padding: '50px', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', margin: '0 0 8px 0' }}>Send Us a Message</h2>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: '0 0 36px 0' }}>
                                We'll respond within 24 business hours. Complete structural privacy guaranteed.
                            </p>
                            <ContactForm />
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}