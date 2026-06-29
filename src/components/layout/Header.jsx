import React, { useState, useEffect, useRef } from 'react';

const navLinks = [
    { label: 'Home', href: '/' },
    {
        label: 'Our Services',
        dropdown: [
            { label: '💻 E-Learning Solutions', href: '/e-learning' },
            { label: '👥 Recruitment & Staffing', href: '/recruitment-staffing' },
            { label: '📊 Financial Consultancy', href: '/financial-consultancy' },
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

    // Listen for clicks outside of the header to close any open dropdowns
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

    const handleDropdownToggle = (index, e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevents immediate closing from bubbling events
        setActiveDropdown(activeDropdown === index ? null : index);
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
                }
                .jf-header.scrolled {
                    height: 70px;
                    background: rgba(4, 4, 6, 0.75);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
                }
                .jf-logo-wrap {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }
                .jf-logo-img {
                    height: 40px; /* Standard corporate navbar size */
                    width: auto;
                    object-fit: contain;
                    display: block;
                    transition: height 0.3s ease;
                }
                .jf-header.scrolled .jf-logo-img {
                    height: 34px; /* Gracefully shrinks slightly when layout scrolls */
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
                    font-size: 14px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 8px 0;
                    transition: color 0.25s ease;
                }
                .jf-nav-link:hover, .nav-item-container.active .jf-nav-link {
                    color: #ffffff;
                }
                .jf-dropdown-menu {
                    position: absolute;
                    top: calc(100% - 10px);
                    left: 50%;
                    transform: translateX(-50%) translateY(10px);
                    width: 260px;
                    background: #0d0b14;
                    border: 1px solid rgba(151, 71, 255, 0.2);
                    border-radius: 16px;
                    padding: 10px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 12px rgba(151,71,255,0.05);
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
                    font-size: 13.5px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.7);
                    padding: 12px 16px;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                }
                .jf-dropdown-item:hover {
                    background: rgba(151, 71, 255, 0.12);
                    color: #ffffff;
                    padding-left: 20px;
                }
                .jf-btn-solid {
                    background: #9747FF;
                    color: #ffffff;
                    border: none;
                    padding: 10px 24px;
                    border-radius: 10px;
                    font-size: 13.5px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    box-shadow: 0 4px 15px rgba(151, 71, 255, 0.2);
                    font-family: 'Poppins', sans-serif;
                }
                .jf-btn-solid:hover {
                    background: #8333ec;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(151, 71, 255, 0.3);
                }
                #jf-hamburger-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #ffffff;
                    cursor: pointer;
                    padding: 4px;
                }
                .mobile-menu {
                    position: fixed;
                    top: 80px;
                    left: 20px;
                    right: 20px;
                    background: #07060a;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.8);
                    z-index: 999;
                }
                .jf-mobile-link {
                    background: none;
                    border: none;
                    font-family: 'Poppins', sans-serif;
                    font-size: 15px;
                    font-weight: 600;
                    color: #ffffff;
                    text-align: left;
                    padding: 10px 0;
                    cursor: pointer;
                    width: 100%;
                }
                .mobile-dropdown-header {
                    font-size: 12px;
                    font-weight: 700;
                    color: #9747FF;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-top: 10px;
                    margin-bottom: 4px;
                }
                .chevron-icon {
                    transition: transform 0.25s ease;
                }
                .nav-item-container.active .chevron-icon {
                    transform: rotate(180deg);
                }
            `}</style>

            <header ref={navRef} className={`jf-header ${scrolled ? 'scrolled' : ''}`}>
                {/* Image-Based Logo Wrapper */}
                <div className="jf-logo-wrap " style={{ width: '300px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'invert(1)' }} onClick={() => navigate('/')}>
                    <img
                        src="/assets/images/about/logo.png"
                        className="jf-logo-img"
                    />
                </div>

                {/* Desktop Navigation Links */}
                <nav className="desktop-nav">
                    {navLinks.map((item, i) => (
                        item.dropdown ? (
                            <div key={i} className={`nav-item-container ${activeDropdown === i ? 'active' : ''}`}>
                                <button
                                    className="jf-nav-link"
                                    onClick={(e) => handleDropdownToggle(i, e)}
                                >
                                    {item.label}
                                    <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>
                                <div className="jf-dropdown-menu">
                                    {item.dropdown.map((dropItem, idx) => (
                                        <button key={idx} className="jf-dropdown-item" onClick={() => navigate(dropItem.href)}>
                                            {dropItem.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <button key={i} className="jf-nav-link" onClick={() => navigate(item.href)}>
                                {item.label}
                            </button>
                        )
                    ))}
                </nav>

                {/* Right side CTA Button Element */}
                <div id="desktop-cta" style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="jf-btn-solid" onClick={() => navigate('/contact')}>Get In Touch</button>
                </div>

                {/* Responsive Layout Mobile Menu Hamburger Trigger */}
                <button id="jf-hamburger-btn" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                    )}
                </button>

                {/* Mobile Navigation Drawer */}
                {mobileOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((item, i) => (
                            item.dropdown ? (
                                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className="mobile-dropdown-header">{item.label}</div>
                                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '8px', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                                        {item.dropdown.map((d, di) => (
                                            <button key={di} className="jf-mobile-link"
                                                style={{ fontSize: '14px', paddingTop: '10px', paddingBottom: '10px' }}
                                                onClick={() => navigate(d.href)}>
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
                        <button className="jf-btn-solid" style={{ marginTop: '16px', width: '100%', justifyContent: 'center', height: '44px', borderRadius: '12px' }}
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