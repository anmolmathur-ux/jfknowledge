import React from 'react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const FooterLink = ({ href, children }) => (
    <a href={href} onClick={(e) => { e.preventDefault(); navigate(href); }}
        style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s ease', display: 'block', lineHeight: 1 }}
        onMouseEnter={e => e.target.style.color = '#9747FF'}
        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
        {children}
    </a>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <style>{`
                .footer-social-btn {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.08);
                    background: rgba(255,255,255,0.03);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    color: rgba(255,255,255,0.4);
                    text-decoration: none;
                    font-size: 14px;
                }
                .footer-social-btn:hover {
                    background: rgba(151,71,255,0.15);
                    border-color: rgba(151,71,255,0.35);
                    color: #9747FF;
                }
            `}</style>

            <footer style={{ background: '#060608', borderTop: '1px solid rgba(255,255,255,0.06)', fontFamily: "'Poppins', sans-serif", paddingBottom: '32px' }}>

                {/* Top section */}
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 40px 48px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '48px' }}>

                        {/* Brand column */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
                            {/* Image-Based Logo Wrapper */}
                            <div className="jf-logo-wrap" style={{ width: '180px', display: 'flex', alignItems: 'center', filter: 'invert(1)', cursor: 'pointer' }} onClick={() => navigate('/')}>
                                <img
                                    src="/assets/images/about/logo.png"
                                    className="jf-logo-img"
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                            {/* Brand Tagline Description Text */}
                            <div style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.5)', lineHeight: '1.5', maxWidth: '280px', marginTop: '4px' }}>
                                Empowering Talent. Enabling Growth. Elevating Business.
                            </div>
                        </div>

                        {/* Services */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <div style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Services</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <FooterLink href="/e-learning">E-Learning Solutions</FooterLink>
                                <FooterLink href="/recruitment-staffing">Recruitment & Staffing</FooterLink>
                                <FooterLink href="/financial-consultancy">Financial Consultancy</FooterLink>
                                <FooterLink href="/e-learning">LMS Implementation</FooterLink>
                                <FooterLink href="/recruitment-staffing">Executive Search</FooterLink>
                                <FooterLink href="/financial-consultancy">Fractional CFO</FooterLink>
                            </div>
                        </div>

                        {/* Company */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <div style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Company</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <FooterLink href="/about">About Us</FooterLink>
                                <FooterLink href="/why-jf">Why Partner With Us</FooterLink>
                                <FooterLink href="/global-footprint">Global Delivery Network</FooterLink>
                                <FooterLink href="/contact">Contact Us</FooterLink>
                            </div>
                        </div>

                        {/* Contact */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <div style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Contact</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Email</div>
                                    <a href="mailto:info@jfknowledgecentre.com" style={{ color: '#9747FF', fontSize: '13px', textDecoration: 'none', fontWeight: '500' }}>
                                        info@jfknowledgecentre.com
                                    </a>
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Website</div>
                                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>www.jfknowledgecentre.com</span>
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Industries</div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
                                        BFSI · Healthcare · Tech · Oil & Gas · Manufacturing · Retail
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '28px', flexWrap: 'wrap', gap: '16px' }}>
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.2)' }}>
                            © {currentYear} JF Knowledge Centre. All rights reserved.
                        </span>
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.2)' }}>
                            Global Multi-Disciplinary Delivery Network
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}