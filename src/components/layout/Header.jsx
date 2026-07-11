import React, { useState, useEffect, useRef } from 'react';

const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMobileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const navigate = (href) => {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
        setMobileOpen(false);
    };

    return (
        <>
            <style>{`
                /* Full screen-width header pinned straight to the top */
                .jf-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    
                    /* Left and right edge spacing slightly decreased */
                    padding: 0 max(16px, 3vw);
                    
                    /* Height decreased a little bit (68px default) */
                    height: 68px;
                    font-family: var(--font-family, sans-serif);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    
                    /* Custom Glassmorphism at 40% Opacity stretching full-width */
                    background: rgba(8, 15, 30, 0.40); 
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }

                /* Compact scroll transition state */
                .jf-header.scrolled-state {
                    height: 62px;
                    background: rgba(7, 17, 31, 0.85);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
                }

                .jf-logo-wrap {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    flex-shrink: 0;
                }

                /* Sophisticated White Logo with Opacity */
                .jf-logo-img {
                    height: 34px; /* Scaled down slightly to fit new height */
                    width: auto;
                    object-fit: contain;
                    filter: brightness(1.05) invert(1);
                    opacity: 0.82;
                    transition: all 0.3s ease;
                }

                .jf-logo-wrap:hover .jf-logo-img {
                    opacity: 1;
                }

                .jf-header.scrolled-state .jf-logo-img { 
                    height: 30px; 
                }

                .desktop-nav {
                    display: flex;
                    align-items: center;
                    gap: 28px; /* Slightly tighter link spacing */
                    height: 100%;
                    margin-left: auto;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 10px; /* Reduced gap between custom buttons by 2px */
                    margin-left: 28px;
                }

                /* Enterprise Navigation Typography */
                .jf-nav-link {
                    background: none;
                    border: none;
                    font-family: var(--font-family, sans-serif);
                    font-size: 13px;
                    font-weight: 500;
                    color: #D1D5DB;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    padding: 6px 0;
                    transition: color 0.25s ease;
                }

                .jf-nav-link:hover {
                    color: #FFFFFF;
                }

                .jf-nav-link.active {
                    color: #3B82F6;
                }

                /* Premium Button Frameworks with optimized top/bottom padding */
                .header-cta-primary {
                    background: linear-gradient(135deg, #2563EB, #3B82F6) !important;
                    color: #ffffff !important;
                    padding: 8px 18px !important; /* Shaved off internal padding height */
                    border-radius: 16px !important;
                    font-size: 13px !important;
                    font-weight: 600 !important;
                    letter-spacing: 0.01em !important;
                    border: none !important;
                    cursor: pointer;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }

                .header-cta-primary:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
                }

                .header-cta-secondary {
                    background: transparent !important;
                    color: #D1D5DB !important;
                    padding: 8px 18px !important; /* Shaved off internal padding height */
                    border-radius: 16px !important;
                    font-size: 13px !important;
                    font-weight: 600 !important;
                    letter-spacing: 0.01em !important;
                    border: 1px solid rgba(255, 255, 255, 0.12) !important;
                    cursor: pointer;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }

                .header-cta-secondary:hover {
                    color: #FFFFFF !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    border-color: rgba(255, 255, 255, 0.25) !important;
                    transform: translateY(-1px);
                }

                #jf-hamburger-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #D1D5DB;
                    cursor: pointer;
                    padding: 4px;
                }

                .mobile-menu {
                    position: fixed;
                    top: 68px;
                    left: 0;
                    right: 0;
                    background: #07111F;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 20px max(16px, 3vw) 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    z-index: 999;
                    max-height: calc(100vh - 68px);
                    overflow-y: auto;
                }

                .jf-header.scrolled-state ~ .mobile-menu {
                    top: 62px;
                    max-height: calc(100vh - 62px);
                }

                .jf-mobile-link {
                    background: none;
                    border: none;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    font-family: var(--font-family, sans-serif);
                    font-size: 14px;
                    font-weight: 500;
                    color: #D1D5DB;
                    text-align: left;
                    padding: 12px 0;
                    cursor: pointer;
                    width: 100%;
                    transition: color 0.2s ease;
                }

                .jf-mobile-link:hover { color: #FFFFFF; }

                @media (max-width: 960px) {
                    .desktop-nav { display: none !important; }
                    #desktop-actions-container { display: none !important; }
                    #jf-hamburger-btn { display: flex !important; }
                }
            `}</style>

            <header className={`jf-header ${scrolled ? 'scrolled-state' : ''}`} ref={navRef}>
                <div className="jf-logo-wrap" onClick={() => navigate('/')}>
                    <img src="/assets/images/about/logo.png" alt="JF Knowledge Centre" className="jf-logo-img" />
                </div>

                <div className="desktop-nav">
                    {navLinks.map((item, i) => (
                        <button
                            key={i}
                            className={`jf-nav-link ${window.location.pathname === item.href ? 'active' : ''}`}
                            onClick={() => navigate(item.href)}
                        >
                            {item.label}
                        </button>
                    ))}

                    <div id="desktop-actions-container" className="header-actions">
                        <button className="header-cta-secondary" onClick={() => navigate('/contact')}>
                            Contact Us
                        </button>
                        <button className="header-cta-primary" onClick={() => navigate('/contact')}>
                            Book Appointment
                        </button>
                    </div>
                </div>

                <button id="jf-hamburger-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                    {mobileOpen ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" />
                        </svg>
                    )}
                </button>

                {mobileOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((item, i) => (
                            <button key={i} className="jf-mobile-link" onClick={() => navigate(item.href)}>
                                {item.label}
                            </button>
                        ))}
                        <button className="header-cta-secondary" style={{ marginTop: '16px', justifyContent: 'center', width: '100%', textAlign: 'center' }} onClick={() => navigate('/contact')}>
                            Contact Us
                        </button>
                        <button className="header-cta-primary" style={{ marginTop: '8px', justifyContent: 'center', width: '100%', textAlign: 'center' }} onClick={() => navigate('/contact')}>
                            Book Appointment
                        </button>
                    </div>
                )}
            </header>
        </>
    );
}