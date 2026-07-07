import React, { useState, useEffect, useRef } from 'react';

const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
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
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const navigate = (href) => {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
        setMobileOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            <style>{`
                .jf-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 max(24px, 4vw);
                    height: 80px;
                    font-family: var(--font-family);
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    background: rgba(1, 2, 10, 0.22);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }

                .jf-header.scrolled {
                    height: 72px;
                    background: rgba(1, 2, 10, 0.94);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-bottom: 1px solid var(--border-dark);
                    box-shadow: var(--shadow-sm);
                }

                .jf-logo-wrap {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    cursor: pointer;
                    flex-shrink: 0;
                }

                .jf-logo-img {
                    height: 40px;
                    width: auto;
                    object-fit: contain;
                    filter: brightness(0) invert(1);
                    transition: height 0.3s ease;
                }

                .jf-header.scrolled .jf-logo-img { height: 34px; }

                .jf-brand-text {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .jf-brand-name {
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--text-primary);
                    line-height: 1;
                }

                .jf-brand-tagline {
                    font-size: 10px;
                    font-weight: 500;
                    letter-spacing: 0.08em;
                    color: var(--text-secondary);
                    line-height: 1;
                }

                .desktop-nav {
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    height: 100%;
                    margin-left: auto;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }

                .nav-item-container {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                }

                .jf-nav-link {
                    background: none;
                    border: none;
                    font-family: var(--font-family);
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-secondary);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 8px 0;
                    transition: color 0.2s ease;
                }

                .jf-nav-link:hover,
                .nav-item-container.active .jf-nav-link {
                    color: var(--text-primary);
                }

                .jf-dropdown-menu {
                    position: absolute;
                    top: calc(100% + 4px);
                    left: 50%;
                    transform: translateX(-50%) translateY(8px);
                    min-width: 260px;
                    background: var(--bg-elevated);
                    border: 1px solid var(--border-dark);
                    border-radius: 12px;
                    padding: 8px;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                    box-shadow: var(--shadow-md);
                }

                .nav-item-container.active .jf-dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(-50%) translateY(0);
                    pointer-events: auto;
                }

                .jf-dropdown-item {
                    width: 100%;
                    text-align: left;
                    background: none;
                    border: none;
                    border-radius: 8px;
                    font-family: var(--font-family);
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-secondary);
                    padding: 11px 14px;
                    cursor: pointer;
                    transition: all 0.18s ease;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .jf-dropdown-item:hover {
                    background: var(--primary-muted);
                    color: var(--primary-light);
                }

                .chevron-icon {
                    transition: transform 0.22s ease;
                    color: var(--text-muted);
                }

                .nav-item-container.active .chevron-icon {
                    transform: rotate(180deg);
                    color: var(--primary-light);
                }

                .header-cta {
                    padding: 12px 24px !important;
                    border-radius: 100px !important;
                    font-size: 13px !important;
                    letter-spacing: 0.04em !important;
                    text-transform: none !important;
                }

                #jf-hamburger-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    cursor: pointer;
                    padding: 4px;
                }

                .mobile-menu {
                    position: fixed;
                    top: 80px;
                    left: 0;
                    right: 0;
                    background: var(--bg-main);
                    border-bottom: 1px solid var(--border-dark);
                    padding: 24px max(24px, 4vw) 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    z-index: 999;
                    max-height: calc(100vh - 80px);
                    overflow-y: auto;
                }

                .jf-mobile-link {
                    background: none;
                    border: none;
                    border-bottom: 1px solid var(--border-dark);
                    font-family: var(--font-family);
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--text-secondary);
                    text-align: left;
                    padding: 14px 0;
                    cursor: pointer;
                    width: 100%;
                    transition: color 0.2s ease;
                }

                .jf-mobile-link:hover { color: var(--primary-light); }

                .mobile-dropdown-header {
                    font-size: 11px;
                    font-weight: 700;
                    color: var(--primary-light);
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    margin-top: 12px;
                    margin-bottom: 4px;
                }

                @media (max-width: 960px) {
                    .jf-brand-text { display: none; }
                    .desktop-nav { display: none !important; }
                    #desktop-cta { display: none !important; }
                    #jf-hamburger-btn { display: flex !important; }
                }
            `}</style>

            <header className={`jf-header ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
                <div className="jf-logo-wrap" onClick={() => navigate('/')}>
                    <img src="/assets/images/about/logo.png" alt="JF Knowledge Centre" className="jf-logo-img" />
                </div>

                <div className="desktop-nav header-actions">
                    {navLinks.map((item, i) => (
                        <button
                            key={i}
                            className="jf-nav-link"
                            onClick={() => navigate(item.href)}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button className="jf-nav-link" onClick={() => navigate('/contact')}>
                        Contact Us
                    </button>
                    <button id="desktop-cta" className="jf-btn-primary header-cta" onClick={() => navigate('/contact')}>
                        Book Appointment
                    </button>
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
                        <button className="jf-btn-primary header-cta" style={{ marginTop: '16px', justifyContent: 'center', width: '100%' }} onClick={() => navigate('/contact')}>
                            Contact Us
                        </button>
                    </div>
                )}
            </header>
        </>
    );
}
