import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/shared/ContactForm';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function ContactPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-main)', fontFamily: "'Poppins', sans-serif" }}>
            <Header />
            <main style={{ flex: 1, paddingTop: '68px' }}>

                <style>{`
                    .contact-quick-btn {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        padding: 20px 24px;
                        background: var(--bg-surface);
                        border: 1px solid var(--border-light);
                        border-radius: 16px;
                        color: var(--text-muted);
                        font-family: 'Poppins', sans-serif;
                        font-size: 14px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.25s ease;
                        text-align: left;
                    }
                    .contact-quick-btn:hover {
                        background: var(--bg-main);
                        border-color: var(--brand-teal);
                        color: var(--text-primary);
                        transform: translateX(4px);
                    }
                    .info-block {
                        padding: 30px;
                        background: var(--bg-surface);
                        border: 1px solid var(--border-light);
                        border-radius: 20px;
                        box-shadow: var(--shadow-sm);
                    }
                `}</style>

                {/* Hero */}
                <section style={{ position: 'relative', padding: '120px 40px 80px', overflow: 'hidden' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
                        <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: 'var(--brand-teal)', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '16px' }}>
                            Get In Touch
                        </span>
                        <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: '800', color: "var(--text-primary)", margin: '0 0 20px 0', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                            Contact Us
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
                            We would love to understand your challenges and explore how JF Knowledge Centre can create value for your organisation. Reach out to us today for a confidential, no-obligation consultation.
                        </p>
                    </div>
                </section>

                {/* Main content */}
                <section style={{ padding: '40px 40px 140px' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '60px', alignItems: 'start' }}>

                        {/* Left: Contact info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div className="info-block">
                                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--brand-teal)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>Official Channels</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <div>
                                        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: '600' }}>Email</div>
                                        <a href="mailto:info@jfknowledgecentre.com" style={{ fontSize: '18px', fontWeight: '700', color: "var(--text-primary)", textDecoration: 'none' }}>
                                            info@jfknowledgecentre.com
                                        </a>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: '600' }}>Phone</div>
                                        <div style={{ fontSize: '16px', fontWeight: '600', color: "var(--text-primary)", lineHeight: 1.6 }}>
                                            +1 (XXX) XXX-XXXX<br />
                                            +44 (0) XXXX XXXXXX
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-block">
                                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--brand-teal)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>Our Offices</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: '500' }}>
                                    <div>🇺🇸 United States</div>
                                    <div>🇬🇧 United Kingdom</div>
                                    <div>🇦🇪 UAE</div>
                                    <div>🇮🇳 India</div>
                                </div>
                            </div>

                            <div className="info-block">
                                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--brand-teal)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>Social Media</div>
                                <div style={{ display: 'flex', gap: '24px', fontSize: '15px', color: 'var(--brand-teal)', fontWeight: '600' }}>
                                    <span style={{ cursor: 'pointer' }}>LinkedIn</span>
                                    <span style={{ cursor: 'pointer' }}>Twitter</span>
                                    <span style={{ cursor: 'pointer' }}>Facebook</span>
                                    <span style={{ cursor: 'pointer' }}>Instagram</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: '32px', padding: '50px', boxShadow: 'var(--shadow-md)' }}>
                            <h2 style={{ fontSize: '28px', fontWeight: '800', color: "var(--text-primary)", margin: '0 0 12px 0' }}>Send Us a Message</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '15px', margin: '0 0 36px 0', lineHeight: 1.7 }}>
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