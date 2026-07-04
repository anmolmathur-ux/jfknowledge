import React, { useState, useEffect, useRef } from 'react';
import { Laptop, Users, BarChart3 } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '/' },
    {
        label: 'Our Services',
        dropdown: [
            {
                label: 'E-Learning Solutions',
                href: '/e-learning',
                icon: <Laptop size={16} strokeWidth={2} style={{ marginRight: '10px', color: '#0D9488', flexShrink: 0 }} />
            },
            {
                label: 'Recruitment & Staffing',
                href: '/recruitment-staffing',
                icon: <Users size={16} strokeWidth={2} style={{ marginRight: '10px', color: '#0D9488', flexShrink: 0 }} />
            },
            {
                label: 'Financial Consultancy',
                href: '/financial-consultancy',
                icon: <BarChart3 size={16} strokeWidth={2} style={{ marginRight: '10px', color: '#0D9488', flexShrink: 0 }} />
            },
        ]
    },
    {
        label: 'Company',
        dropdown: [
            { label: 'About Us', href: '/about' },
            { label: 'Why Partner With Us', href: '/why-jf' },
            { label: 'Global Delivery Network', href: '/global-footprint' },
        ]
    },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
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
                    height: 80px;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 40px;
                    font-family: 'Poppins', sans-serif;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: #F9FAFC;
                }
                .jf-header.scrolled {
                    height: 70px;
                    background: rgba(249, 250, 252, 0.85);
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    border-bottom: 1px solid #E2E8F0;
                    box-shadow: 0 10px 30px -15px rgba(15, 23, 42, 0.08);
                }
                .jf-logo-wrap {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }
                .jf-logo-img {
                    height: 40px;
                    width: auto;
                    object-fit: contain;
                    display: block;
                    transition: height 0.3s ease;
                }
                .jf-header.scrolled .jf-logo-img {
                    height: 34px;
                }
                .desktop-nav {
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    height: 100%;
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
                    font-family: 'Poppins', sans-serif;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #475569;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 8px 0;
                    transition: color 0.25s ease;
                }
                .jf-nav-link:hover, .nav-item-container.active .jf-nav-link {
                    color: #0D9488;
                }
                .jf-dropdown-menu {
                    position: absolute;
                    top: calc(100% - 10px);
                    left: 50%;
                    transform: translateX(-50%) translateY(10px);
                    width: 270px;
                    background: #FFFFFF;
                    border: 1px solid #E2E8F0;
                    border-radius: 16px;
                    padding: 10px;
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
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
                    font-family: 'Poppins', sans-serif;
                    font-size: 13px;
                    font-weight: 500;
                    color: #0D9488;
                    padding: 12px 16px;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                }
                .jf-dropdown-item:hover {
                    background: rgba(13, 148, 136, 0.06);
                    color: #0D9488;
                    padding-left: 18px;
                }
                .jf-btn-solid {
                    background: transparent;
                    color: #0D9488;
                    border: 1.5px solid #0D9488;
                    padding: 9px 22px;
                    border-radius: 8px;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    font-family: 'Poppins', sans-serif;
                    display: flex;
                    align-items: center;
                }
                .jf-btn-solid:hover {
                    background: #0D9488;
                    color: var(--text-primary);
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(13, 148, 136, 0.2);
                }
                .jf-btn-solid:active {
                    transform: scale(0.97);
                }
                #jf-hamburger-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #0D9488;
                    cursor: pointer;
                    padding: 4px;
                }
                .mobile-menu {
                    position: fixed;
                    top: 80px;
                    left: 20px;
                    right: 20px;
                    background: #FFFFFF;
                    border: 1px solid #E2E8F0;
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.1);
                    z-index: 999;
                }
                .jf-mobile-link {
                    background: none;
                    border: none;
                    font-family: 'Poppins', sans-serif;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #0D9488;
                    text-align: left;
                    padding: 10px 0;
                    cursor: pointer;
                    width: 100%;
                }
                .mobile-dropdown-header {
                    font-size: 11px;
                    font-weight: 700;
                    color: #0D9488;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    margin-top: 10px;
                    margin-bottom: 4px;
                }
                .chevron-icon {
                    transition: transform 0.25s ease;
                    color: #475569;
                }
                .nav-item-container.active .chevron-icon {
                    transform: rotate(180deg);
                    color: #0D9488;
                }
            `}</style>

            <header className={`jf-header ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
                <div className="jf-logo-wrap" onClick={() => navigate('/')}>
                    <img
                        src="/assets/images/about/logo.png"
                        alt="JF Knowledge Centre"
                        className="jf-logo-img"
                    />
                </div>

                <nav className="desktop-nav">
                    {navLinks.map((item, i) => (
                        <div
                            key={i}
                            className={`nav-item-container ${activeDropdown === i ? 'active' : ''}`}
                            onMouseEnter={() => item.dropdown && setActiveDropdown(i)}
                            onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                        >
                            <button
                                className="jf-nav-link"
                                onClick={() => !item.dropdown && navigate(item.href)}
                            >
                                {item.label}
                                {item.dropdown && (
                                    <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                )}
                            </button>

                            {item.dropdown && (
                                <div className="jf-dropdown-menu">
                                    {item.dropdown.map((sub, j) => (
                                        <button
                                            key={j}
                                            className="jf-dropdown-item"
                                            onClick={() => navigate(sub.href)}
                                        >
                                            {sub.icon && sub.icon}
                                            {sub.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div id="desktop-cta">
                    <button className="jf-btn-solid" onClick={() => navigate('/contact')}>
                        Get In Touch
                    </button>
                </div>

                <button id="jf-hamburger-btn" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>

                {mobileOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((item, i) => (
                            item.dropdown ? (
                                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className="mobile-dropdown-header">{item.label}</div>
                                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '8px', borderLeft: '1.5px solid #E2E8F0' }}>
                                        {item.dropdown.map((d, j) => (
                                            <button key={j} className="jf-mobile-link" style={{ fontSize: '13px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}
                                                onClick={() => navigate(d.href)}>
                                                {d.icon && d.icon}
                                                {d.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <button key={i} className="jf-mobile-link"
                                    onClick={() => navigate(item.href)}>
                                    {item.label}
                                </button>
                            )
                        ))}
                        <button className="jf-btn-solid" style={{ marginTop: '16px', width: '100%', justifyContent: 'center', height: '44px', borderRadius: '10px' }}
                            onClick={() => navigate('/contact')}>
                            Get In Touch
                        </button>
                    </div>
                )}

                <style>{`
                    @media (max-width: 820px) {
                        .desktop-nav { display: none !important; }
                        #jf-hamburger-btn { display: flex !important; }
                        #desktop-cta { display: none !important; }
                        a.jf-btn-solid { display: none !important; }
                    }
                `}</style>
            </header>
        </>
    );
}