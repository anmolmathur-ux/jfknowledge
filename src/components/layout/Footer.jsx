import React from 'react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const FooterLink = ({ href, children }) => (
    <a
        href={href}
        onClick={(e) => { e.preventDefault(); navigate(href); }}
        className="footer-link"
    >
        {children}
    </a>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <style>{`
                .footer-shell {
                    background: var(--bg-main);
                    border-top: 1px solid var(--border-dark);
                    font-family: var(--font-family);
                    color: var(--text-primary);
                }

                .footer-main {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 72px max(24px, 4vw) 48px;
                    display: grid;
                    grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
                    gap: 48px;
                }

                @media (max-width: 1000px) {
                    .footer-main { grid-template-columns: 1fr 1fr; gap: 40px; }
                }

                @media (max-width: 600px) {
                    .footer-main { grid-template-columns: 1fr; gap: 32px; padding: 48px 24px 36px; }
                }

                .footer-brand-col {
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                }

                .footer-logo-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .footer-logo-img {
                    height: 32px;
                    width: auto;
                    object-fit: contain;
                    filter: brightness(0) invert(1);
                }

                .footer-brand-name {
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-primary);
                }

                .footer-brand-desc {
                    font-size: 14px;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    max-width: 300px;
                }

                .footer-socials {
                    display: flex;
                    gap: 10px;
                    margin-top: 4px;
                }

                .footer-social-btn {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    border: 1px solid var(--border-visible);
                    background: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.22s ease;
                    color: var(--text-secondary);
                }

                .footer-social-btn:hover {
                    border-color: var(--primary);
                    color: var(--primary-light);
                    background: var(--primary-muted);
                    transform: translateY(-2px);
                }

                .footer-col-title {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                    margin-bottom: 18px;
                }

                .footer-link-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .footer-link {
                    font-size: 14px;
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: color 0.2s ease;
                    font-weight: 400;
                }

                .footer-link:hover { color: var(--primary-light); }

                .footer-newsletter-desc {
                    font-size: 13px;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 14px;
                }

                .footer-newsletter-input {
                    width: 100%;
                    padding: 12px 14px;
                    background: rgba(8, 15, 38, 0.6);
                    border: 1px solid var(--border-visible);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-family: var(--font-family);
                    font-size: 13px;
                    outline: none;
                    box-sizing: border-box;
                    margin-bottom: 10px;
                    transition: border-color 0.2s ease;
                }

                .footer-newsletter-input::placeholder { color: var(--text-placeholder); }
                .footer-newsletter-input:focus { border-color: var(--primary); }

                .footer-newsletter-btn {
                    width: 100%;
                    padding: 12px 14px;
                    background: var(--gold-gradient);
                    border: none;
                    border-radius: 8px;
                    color: rgb(0, 0, 0);
                    font-family: var(--font-family);
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.22s ease;
                }

                .footer-newsletter-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: var(--shadow-gold);
                }

                .footer-industry-tags {
                    margin-top: 14px;
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    color: var(--text-muted);
                    line-height: 1.8;
                }

                .footer-bottom {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 20px max(24px, 4vw);
                    border-top: 1px solid var(--border-dark);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .footer-copy {
                    font-size: 13px;
                    color: var(--text-muted);
                }

                .footer-copy strong {
                    color: var(--text-secondary);
                    font-weight: 600;
                }

                .footer-global-tag {
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                }
            `}</style>

            <footer className="footer-shell">
                <div className="footer-main">
                    <div className="footer-brand-col">
                        <div className="footer-logo-row">
                            <img src="/assets/images/about/logo.png" alt="JF Knowledge Centre" className="footer-logo-img" />
                        </div>
                        <p className="footer-brand-desc">
                            Empowering Talent. Enabling Growth. Elevating Business.
                        </p>
                        <div style={{ display: 'grid', gap: '14px', maxWidth: '320px' }}>
                            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                123 Knowledge Way<br />
                                London, UK<br />
                                <a href="mailto:info@jfknowledgecentre.com" className="footer-link">info@jfknowledgecentre.com</a>
                            </div>
                            <button className="jf-btn-primary header-cta" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/contact')}>
                                Book Appointment
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">E-Learning Solutions</div>
                        <div className="footer-link-list">
                            <FooterLink href="/e-learning">Instructor-Led Training</FooterLink>
                            <FooterLink href="/e-learning">Microlearning</FooterLink>
                            <FooterLink href="/e-learning">Custom SCORM / xAPI</FooterLink>
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">Recruitment & Staffing</div>
                        <div className="footer-link-list">
                            <FooterLink href="/recruitment-staffing">Contract Staffing</FooterLink>
                            <FooterLink href="/recruitment-staffing">Permanent Placement</FooterLink>
                            <FooterLink href="/recruitment-staffing">Executive Search</FooterLink>
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">Financial Consultancy</div>
                        <div className="footer-link-list">
                            <FooterLink href="/financial-consultancy">Accounting Services</FooterLink>
                            <FooterLink href="/financial-consultancy">Fractional CFO</FooterLink>
                            <FooterLink href="/financial-consultancy">Tax & Compliance</FooterLink>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span className="footer-copy">
                        © {currentYear} <strong>JF Knowledge Centre</strong>. All rights reserved.
                    </span>
                    <span className="footer-global-tag">Global Support Ecosystem</span>
                </div>
            </footer>
        </>
    );
}
