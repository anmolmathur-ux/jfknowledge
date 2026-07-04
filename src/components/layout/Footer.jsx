import React from 'react';
import { Briefcase, MessageSquare, Globe } from 'lucide-react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const FooterLink = ({ href, children }) => (
    <a href={href} onClick={(e) => { e.preventDefault(); navigate(href); }}
        className="compact-footer-link">
        <span className="link-arrow">→</span>{children}
    </a>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <style>{`
                .compact-footer-wrapper {
                    background: #F9FAFC;
                    border-top: 1px solid #E2E8F0;
                    padding: 56px 0 28px 0;
                    font-family: 'Poppins', sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                .compact-footer-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 600px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(13, 148, 136, 0.3), transparent);
                }

                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 32px;
                    width: 100%;
                }

                .footer-main-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr 0.8fr 1.1fr;
                    gap: 24px;
                    padding-bottom: 36px;
                    border-bottom: 1px solid #E2E8F0;
                }

                @media (max-width: 960px) {
                    .footer-main-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 28px;
                    }
                }

                @media (max-width: 480px) {
                    .footer-main-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }
                }

                .footer-section-title {
                    font-size: 11px;
                    font-weight: 700;
                    color: #475569;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    margin: 0 0 16px 0;
                }

                .footer-link-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .compact-footer-link {
                    color: #475569;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0px;
                    line-height: 1.4;
                }

                .link-arrow {
                    opacity: 0;
                    width: 0;
                    transition: all 0.18s ease;
                    color: #0D9488;
                }

                .compact-footer-link:hover {
                    color: #0D9488;
                    gap: 6px;
                }

                .compact-footer-link:hover .link-arrow {
                    opacity: 1;
                    width: auto;
                }

                .footer-social-strip {
                    display: flex;
                    gap: 10px;
                    margin-top: 14px;
                }

                .social-icon-box {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 1px solid #E2E8F0;
                    background: #FFFFFF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.25s ease;
                }

                .social-icon-box svg {
                    display: block;
                    width: 16px;
                    height: 16px;
                    stroke: #475569;
                    transition: stroke 0.25s ease;
                }

                .social-icon-box:hover {
                    background: rgba(13, 148, 136, 0.06);
                    border-color: rgba(13, 148, 136, 0.4);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 18px rgba(13, 148, 136, 0.1);
                }

                .social-icon-box:hover svg {
                    stroke: #0D9488;
                }

                .footer-newsletter-input {
                    width: 100%;
                    padding: 10px 14px;
                    border-radius: 8px;
                    border: 1px solid #E2E8F0;
                    background: #FFFFFF;
                    color: #0D9488;
                    font-size: 13px;
                    font-family: 'Poppins', sans-serif;
                    outline: none;
                    box-sizing: border-box;
                    transition: border-color 0.2s ease;
                    margin-bottom: 10px;
                }

                .footer-newsletter-input::placeholder {
                    color: #94A3B8;
                }

                .footer-newsletter-input:focus {
                    border-color: rgba(13, 148, 136, 0.5);
                }

                .footer-newsletter-btn {
                    width: 100%;
                    padding: 10px 14px;
                    border-radius: 8px;
                    border: 1.5px solid #0D9488;
                    background: transparent;
                    color: #0D9488;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    cursor: pointer;
                    font-family: 'Poppins', sans-serif;
                    transition: all 0.25s ease;
                }

                .footer-newsletter-btn:hover {
                    background: #0D9488;
                    color: var(--text-primary);
                    box-shadow: 0 4px 16px rgba(13, 148, 136, 0.2);
                }

                .footer-newsletter-btn:active {
                    transform: scale(0.97);
                }

                .bottom-utility-strip {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 20px;
                    flex-wrap: wrap;
                    gap: 12px;
                }
            `}</style>

            <footer className="compact-footer-wrapper">
                <div className="footer-container">
                    <div className="footer-main-grid">

                        {/* Brand section */}
                        <div>
                            <img
                                src="/assets/images/about/logo.png"
                                alt="JF"
                                style={{ height: '32px', width: 'auto', objectFit: 'contain', display: 'block', marginBottom: '14px' }}
                            />
                            <p style={{ fontSize: '13px', color: '#0D9488', margin: '0 0 16px 0', lineHeight: 1.5, fontWeight: '500' }}>
                                Unified solutions in corporate education, global talent placement, and corporate accounting optimization.
                            </p>
                            <div className="footer-social-strip">
                                <div className="social-icon-box">
                                    <Briefcase strokeWidth={2} />
                                </div>
                                <div className="social-icon-box">
                                    <MessageSquare strokeWidth={2} />
                                </div>
                                <div className="social-icon-box">
                                    <Globe strokeWidth={2} />
                                </div>
                            </div>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h4 className="footer-section-title">Our Core Pillars</h4>
                            <div className="footer-link-list">
                                <FooterLink href="/e-learning">E-Learning Division</FooterLink>
                                <FooterLink href="/recruitment-staffing">Talent Sourcing</FooterLink>
                                <FooterLink href="/financial-consultancy">Financial Advisory</FooterLink>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="footer-section-title">Corporate</h4>
                            <div className="footer-link-list">
                                <FooterLink href="/about">About Our Group</FooterLink>
                                <FooterLink href="/why-jf">Why Partner With Us</FooterLink>
                                <FooterLink href="/global-footprint">Global Footprint</FooterLink>
                                <FooterLink href="/contact">Contact Hub</FooterLink>
                            </div>
                        </div>

                        {/* Newsletter card */}
                        <div>
                            <h4 className="footer-section-title">Stay Informed</h4>
                            <p style={{ fontSize: '12px', color: '#475569', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                                Insights on talent, learning & finance — direct to your inbox.
                            </p>
                            <input
                                type="email"
                                placeholder="work@company.com"
                                className="footer-newsletter-input"
                            />
                            <button className="footer-newsletter-btn">Subscribe</button>
                            <div style={{ marginTop: '14px', fontSize: '11px', color: '#0D9488', fontWeight: '700', letterSpacing: '0.04em', lineHeight: 1.5 }}>
                                BFSI · HEALTHCARE · TECH · RETAIL · MANUFACTURING
                            </div>
                        </div>

                    </div>

                    {/* Bottom Legal bar */}
                    <div className="bottom-utility-strip">
                        <span style={{ fontSize: '12px', color: '#0D9488', fontWeight: '500' }}>
                            © {currentYear} <span style={{ color: '#0D9488', fontWeight: '600' }}>Core Corporate Solutions</span>. All rights reserved.
                        </span>
                        <span style={{ fontSize: '11px', color: '#475569', letterSpacing: '0.06em', fontWeight: '600' }}>
                            GLOBAL SUPPORT ECOSYSTEM
                        </span>
                    </div>

                </div>
            </footer>
        </>
    );
}