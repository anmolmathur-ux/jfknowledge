import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const navigate = (href) => {
    if (href.startsWith('#')) {
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            return;
        }
    }
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

// Simple animated counter utility component to meet the requested feature cleanly
const AnimatedCounter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
        const suffix = target.replace(/[0-9]/g, '');

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * numericTarget));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [target, duration]);

    return <span>{count}{target.replace(/[0-9]/g, '')}</span>;
};

export default function ServicesPage() {
    const [activeSection, setActiveSection] = useState('hero');
    // Track content variation dynamically from floating glass pill interaction
    const [heroVariant, setHeroVariant] = useState('learning'); 

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['learning', 'recruitment', 'finance'];
            const scrollPosition = window.scrollY + 300;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Global glass styling configuration
    const glassCardStyle = {
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '28px',
        padding: '40px',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease',
        position: 'relative',
        overflow: 'hidden'
    };

    // Hero content maps based on the Active Floating Selector Selection
    const heroContentMap = {
        learning: {
            desc: "Supporting organisations through integrated digital knowledge frameworks, modern LMS enterprise architectures, and agile live framework training tracks.",
            targetId: "#learning"
        },
        recruitment: {
            desc: "Supporting organisations through permanent enterprise staffing solutions, contract staff augmentation, and elite global executive headhunting pipelines.",
            targetId: "#recruitment"
        },
        finance: {
            desc: "Supporting organisations through structured corporate asset auditing, global sovereign tax advisory, and strategic fractional CFO consultancy.",
            targetId: "#finance"
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#060B17', color: '#ffffff', fontFamily: 'var(--font-family)', overflowX: 'hidden' }}>
            <Header />
            
            {/* 12. Sticky Navigation Bar */}
            <div style={{
                position: 'sticky',
                top: '80px',
                zIndex: 100,
                background: 'rgba(6, 11, 23, 0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'block'
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '0.15em', color: '#FDB515' }}>SERVICES NAV</span>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        {[
                            { id: 'learning', label: 'Learning' },
                            { id: 'recruitment', label: 'Recruitment' },
                            { id: 'finance', label: 'Finance' }
                        ].map((navItem) => (
                            <button
                                key={navItem.id}
                                onClick={() => navigate(`#${navItem.id}`)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: activeSection === navItem.id ? '#FDB515' : 'rgba(255,255,255,0.6)',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                <span style={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: activeSection === navItem.id ? '#FDB515' : 'transparent',
                                    border: activeSection === navItem.id ? 'none' : '1px solid rgba(255,255,255,0.4)',
                                    transition: 'all 0.3s ease'
                                }} />
                                {navItem.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <main style={{ flex: 1 }}>
                {/* 1. Cinematic Premium Hero Section */}
                <section style={{ position: 'relative', minHeight: '120vh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 0 80px 0' }}>
                    
                    {/* Video and Overlay Gradients Container */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.75) contrast(1.08) saturate(1.15)', transform: 'scale(1.05)' }}>
                            <source src="/assets/images/about/about.mp4" type="video/mp4" />
                        </video>
                        {/* Cinematic Linear Shadow Matrix Layer */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.12) 30%, rgba(0,0,0,0.28) 70%, rgba(0,0,0,0.55) 100%)',
                            zIndex: 2
                        }} />
                        {/* Enterprise Blueprint Grid Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
                            backgroundSize: '80px 80px',
                            opacity: 0.18,
                            zIndex: 3
                        }} />
                        {/* Immersive Blue Glow Backdrop */}
                        <div style={{
                            position: 'absolute',
                            top: '45%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '900px',
                            height: '600px',
                            background: 'radial-gradient(circle, rgba(37,99,235,.18), transparent 70%)',
                            filter: 'blur(80px)',
                            zIndex: 4,
                            pointerEvents: 'none'
                        }} />
                    </div>

                    {/* Content Layer */}
                    <div style={{ position: 'relative', zIndex: 5, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 50px', textAlign: 'center' }}>
                        
                        {/* Huge Abstract Background Content Text */}
                        <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', fontSize: '220px', fontWeight: '900', color: 'rgba(255,255,255,0.05)', userSelect: 'none', pointerEvents: 'none', zIndex: 1, letterSpacing: '0.05em' }}>
                            SERVICES
                        </div>

                        <div style={{ position: 'relative', zIndex: 2 }}>
                            {/* Small Eyebrow Text */}
                            <span style={{ fontSize: '14px', fontWeight: '800', letterSpacing: '.35em', textTransform: 'uppercase', color: '#3B82F6', display: 'block', marginBottom: '28px' }}>
                                GLOBAL PROFESSIONAL SERVICES
                            </span>

                            {/* Clean Multi-Tone Headline */}
                            <h1 style={{ fontSize: 'clamp(60px, 7vw, 88px)', fontWeight: 900, lineHeight: 0.98, letterSpacing: '-0.05em', color: '#ffffff', margin: '0 auto 32px', maxWidth: '1100px' }}>
                                Empowering Talent.<br />
                                <span style={{ color: '#FDB515', display: 'block', margin: '12px 0' }}>Elevating Business.</span>
                                Accelerating Success.
                            </h1>

                            {/* Context-Narrowed Dynamic Description */}
                            <p style={{ maxWidth: '760px', fontSize: '22px', lineHeight: '1.75', color: 'rgba(255,255,255,0.82)', margin: '0 auto 48px', fontWeight: '400', minHeight: '76px', transition: 'all 0.3s' }}>
                                {heroContentMap[heroVariant].desc}
                            </p>

                            {/* Two Actions Button Section */}
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', marginBottom: '56px', flexWrap: 'wrap' }}>
                                <button 
                                    onClick={() => navigate(heroContentMap[heroVariant].targetId)}
                                    style={{ background: '#FDB515', color: '#060B17', height: '62px', padding: '0 42px', borderRadius: '999px', fontWeight: '700', fontSize: '18px', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 12px 35px rgba(253,181,21,.35)' }}
                                    className="primary-button-accent"
                                >
                                    Explore Services
                                </button>
                                <button 
                                    onClick={() => navigate('/contact')}
                                    style={{ color: '#ffffff', height: '62px', padding: '0 42px', borderRadius: '999px', fontWeight: '700', fontSize: '18px', cursor: 'pointer', transition: 'all 0.3s ease', background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,.15)' }}
                                    className="secondary-glass-button"
                                >
                                    Book Consultation
                                </button>
                            </div>

                            {/* Floating Service Selector (Interactive Navigation Pills) */}
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', marginBottom: '64px' }}>
                                {[
                                    { key: 'learning', label: 'Learning' },
                                    { key: 'recruitment', label: 'Recruitment' },
                                    { key: 'finance', label: 'Finance' }
                                ].map((pill) => (
                                    <button
                                        key={pill.key}
                                        onClick={() => setHeroVariant(pill.key)}
                                        style={{
                                            padding: '10px 20px',
                                            borderRadius: '999px',
                                            background: heroVariant === pill.key ? '#FDB515' : 'rgba(255,255,255,.08)',
                                            backdropFilter: 'blur(15px)',
                                            WebkitBackdropFilter: 'blur(15px)',
                                            color: heroVariant === pill.key ? '#060B17' : '#ffffff',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            fontWeight: '700',
                                            fontSize: '15px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                        }}
                                    >
                                        <span style={{ fontSize: '11px' }}>{heroVariant === pill.key ? '◉' : '○'}</span>
                                        {pill.label}
                                    </button>
                                ))}
                            </div>

                            {/* In-Line High-Impact Animated Stats Metric Row */}
                            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', alignItems: 'center', position: 'relative', padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                {[
                                    { target: '20+', title: 'Years' },
                                    { target: '500+', title: 'Clients' },
                                    { target: '50K+', title: 'Learners' },
                                    { target: '5', title: 'Countries' }
                                ].map((stat, i) => (
                                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                                        <div style={{ fontSize: '36px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                                            <AnimatedCounter target={stat.target} />
                                        </div>
                                        <div style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: '2px', letterSpacing: '0.05em' }}>
                                            {stat.title}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Integrated Scroll Indicator */}
                    <div 
                        onClick={() => navigate('#learning')}
                        style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 5, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}
                        className="hero-scroll-indicator"
                    >
                        <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Explore Services</span>
                        <span style={{ fontSize: '20px', animation: 'bounce 2s infinite', display: 'inline-block' }}>↓</span>
                    </div>
                </section>

                {/* 2. Three Premium Highlight Cards */}
                <section style={{ padding: '120px 24px', position: 'relative', background: '#060B17', zIndex: 5 }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
                        
                        {/* Card 1: Learning */}
                        <div 
                            style={glassCardStyle}
                            className="premium-hover-card"
                            onClick={() => navigate('#learning')}
                        >
                            <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'start', width: '100%', marginBottom: '24px' }}>
                                <span style={{ fontSize: '14px', fontWeight: '800', color: '#FDB515', letterSpacing: '0.1em' }}>01 / ARCHITECTURE</span>
                                <span style={{ fontSize: '32px' }}>🎓</span>
                            </div>
                            <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em' }}>Learning</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'grid', gap: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>
                                <li>• Digital Learning Systems</li>
                                <li>• Corporate Framework Training</li>
                                <li>• LMS Architecture Solutions</li>
                            </ul>
                            <div style={{ fontWeight: '700', color: '#FDB515', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', cursor: 'pointer' }}>
                                Explore Architecture <span style={{ transition: 'transform 0.3s ease' }} className="arrow-icon">→</span>
                            </div>
                        </div>

                        {/* Card 2: Recruitment */}
                        <div 
                            style={glassCardStyle}
                            className="premium-hover-card"
                            onClick={() => navigate('#recruitment')}
                        >
                            <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'start', width: '100%', marginBottom: '24px' }}>
                                <span style={{ fontSize: '14px', fontWeight: '800', color: '#FDB515', letterSpacing: '0.1em' }}>02 / PLACEMENT</span>
                                <span style={{ fontSize: '32px' }}>👥</span>
                            </div>
                            <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em' }}>Recruitment</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'grid', gap: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>
                                <li>• Permanent Enterprise Hiring</li>
                                <li>• Tactical Staff Augmentation</li>
                                <li>• Executive Retained Search</li>
                            </ul>
                            <div style={{ fontWeight: '700', color: '#FDB515', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', cursor: 'pointer' }}>
                                Explore Talent Solutions <span style={{ transition: 'transform 0.3s ease' }} className="arrow-icon">→</span>
                            </div>
                        </div>

                        {/* Card 3: Financial */}
                        <div 
                            style={glassCardStyle}
                            className="premium-hover-card"
                            onClick={() => navigate('#finance')}
                        >
                            <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'start', width: '100%', marginBottom: '24px' }}>
                                <span style={{ fontSize: '14px', fontWeight: '800', color: '#FDB515', letterSpacing: '0.1em' }}>03 / INTELLIGENCE</span>
                                <span style={{ fontSize: '32px' }}>📈</span>
                            </div>
                            <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em' }}>Financial</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'grid', gap: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>
                                <li>• Corporate Asset Accounting</li>
                                <li>• Sovereign Tax Advisory</li>
                                <li>• Business Growth Consulting</li>
                            </ul>
                            <div style={{ fontWeight: '700', color: '#FDB515', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', cursor: 'pointer' }}>
                                Explore Consultancy <span style={{ transition: 'transform 0.3s ease' }} className="arrow-icon">→</span>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 3. Individual Story Sections — Division 01: Learning */}
                <section id="learning" style={{ padding: '120px 24px', background: '#0B1224', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '40px', right: '10%', fontSize: '220px', fontWeight: '900', color: 'rgba(255,255,255,0.03)', userSelect: 'none', lineHeight: 1 }}>01</div>
                    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '64px', alignItems: 'center', marginBottom: '80px' }}>
                            <div>
                                <span style={{ fontSize: '13px', fontWeight: '800', color: '#FDB515', letterSpacing: '0.2em', display: 'block', marginBottom: '16px' }}>DIVISION ONE</span>
                                <h2 style={{ fontSize: '44px', fontWeight: '900', lineHeight: '1.2', marginBottom: '24px', letterSpacing: '-0.03em' }}>E-Learning & Digital Learning Solutions</h2>
                                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.75)', marginBottom: '32px' }}>
                                    Transforming complex corporate assets, regulatory frameworks, and enterprise skills into agile, highly engaging digital knowledge architectures accessible globally.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                                    {['SCORM', 'xAPI', 'AI Architecture', 'Mobile Ecosystems', 'Predictive Analytics', 'Microlearning'].map((chip) => (
                                        <span key={chip} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.06)', borderRadius: '50px', fontSize: '13px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.1)' }}>{chip}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '440px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
                                <img src="/assets/images/about/1.webp" alt="Digital Learning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* 4. Service Grid Layout */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(45%, 1fr))', gap: '32px' }}>
                            {[
                                { title: 'Instructor Led Training (ILT)', desc: 'Immersive deep-dive learning environments mapped out by elite subject experts.', f1: 'Custom Syllabus Layout', f2: 'Certified Live Experts', f3: 'Pre/Post Gap Assessment' },
                                { title: 'Virtual Classrooms (VILT)', desc: 'Synchronous high-engagement platforms bringing classroom proximity anywhere globally.', f1: 'Live Interactive Cohorts', f2: 'Cross-Border Access', f3: 'Dynamic Breakout Workshops' },
                                { title: 'Microlearning Snippets', desc: 'Focused behavioral skill chunks deployed to match diminishing modern cognitive bandwidth.', f1: 'Mobile-Optimized Assets', f2: '3-7 Minute Slices', f3: 'Spaced Memory Retention' },
                                { title: 'Enterprise Gamification', desc: 'Applying rigorous psychological drive mechanics directly onto mission-critical benchmarks.', f1: 'Real-Time Achievement Leaderboards', f2: 'Interactive Context Quests', f3: 'Infrastructure Integrations' }
                            ].map((srv, idx) => (
                                <div key={idx} style={glassCardStyle} className="premium-hover-card">
                                    <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px', color: '#ffffff' }}>{srv.title}</h3>
                                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>{srv.desc}</p>
                                    <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                                            <span style={{ color: '#FDB515' }}>✔</span> {srv.f1}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                                            <span style={{ color: '#FDB515' }}>✔</span> {srv.f2}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                                            <span style={{ color: '#FDB515' }}>✔</span> {srv.f3}
                                        </div>
                                    </div>
                                    <div style={{ color: '#FDB515', fontWeight: '700', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }} onClick={() => navigate('/contact')}>
                                        Learn More <span className="arrow-icon">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 13. Contextual Division Call To Action */}
                        <div style={{ marginTop: '64px', textAlign: 'center', padding: '40px', background: 'rgba(253,181,21,0.04)', borderRadius: '24px', border: '1px solid rgba(253,181,21,0.15)' }}>
                            <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px' }}>Ready to transform your technical enterprise learning track?</h4>
                            <button onClick={() => navigate('/contact')} style={{ background: 'transparent', border: '1px solid #FDB515', color: '#FDB515', padding: '12px 28px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s' }}>Consult Learning Architects</button>
                        </div>

                    </div>
                </section>

                {/* 6. Dynamic High-Impact Statistics Intermission */}
                <section style={{ padding: '80px 24px', background: '#060B17', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', textAlign: 'center' }}>
                        {[
                            { metric: '20+', description: 'Years Global Experience' },
                            { metric: '500+', description: 'Corporate Enterprises Served' },
                            { metric: '50K+', description: 'Professionals Track Certified' },
                            { metric: '12', description: 'Sovereign Markets Engaged' }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div style={{ fontSize: '64px', fontWeight: '900', color: '#FDB515', marginBottom: '8px', letterSpacing: '-0.02em' }}>{stat.metric}</div>
                                <div style={{ fontSize: '15px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Individual Story Sections — Division 02: Recruitment */}
                <section id="recruitment" style={{ padding: '120px 24px', background: '#060B17', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '40px', left: '10%', fontSize: '220px', fontWeight: '900', color: 'rgba(255,255,255,0.03)', userSelect: 'none', lineHeight: 1 }}>02</div>
                    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                        
                        {/* Alternating Layout: Image Left, Content Right */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '64px', alignItems: 'center', marginBottom: '80px' }}>
                            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '440px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', order: typeof window !== 'undefined' && window.innerWidth > 768 ? 1 : 2 }}>
                                <img src="/assets/images/about/2.jpg" alt="Recruitment Ecosystem" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ order: typeof window !== 'undefined' && window.innerWidth > 768 ? 2 : 1 }}>
                                <span style={{ fontSize: '13px', fontWeight: '800', color: '#FDB515', letterSpacing: '0.2em', display: 'block', marginBottom: '16px' }}>DIVISION TWO</span>
                                <h2 style={{ fontSize: '44px', fontWeight: '900', lineHeight: '1.2', marginBottom: '24px', letterSpacing: '-0.03em' }}>Recruitment, Staffing & Talent Solutions</h2>
                                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.75)', marginBottom: '32px' }}>
                                    Securing mission-critical Human Capital assets globally across the US, UK, EMEA, and GCC regions utilizing precision target mapping and AI matchmaking architecture.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                                    {['Executive Headhunting', 'Contract Staffing', 'Sovereign Compliance', 'Global Payroll Integrations', 'Vetted Pipelines'].map((chip) => (
                                        <span key={chip} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.06)', borderRadius: '50px', fontSize: '13px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.1)' }}>{chip}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(45%, 1fr))', gap: '32px' }}>
                            {[
                                { title: 'Permanent Direct Placement', desc: 'Deploying strategic psychological profile matrices to match long-term cultural alignment perfectly.', f1: 'Deep Market Talent Intelligence', f2: 'Rigorous Background Checks', f3: '90-Day Placement Guarantee' },
                                { title: 'Agile Staff Augmentation', desc: 'On-demand scaling protocols delivering vetted project contractors directly to integrated environments.', f1: 'Rapid Deployment (24-72h)', f2: 'Full Compliance Shielding', f3: 'Flexible Scale Structures' },
                                { title: 'Retained Executive Search', desc: 'Discreet, high-level structural headhunting targeting industry-defining transformational leadership vectors.', f1: 'Global Board Mapping', f2: 'Strict Anonymity Protocols', f3: 'Competency Psychometrics' },
                                { title: 'Managed Staffing (RPO/MSP)', desc: 'Consolidating cross-vendor overhead architectures under unified service agreements.', f1: 'Embedded Talent Squads', f2: 'Centralized Performance SLAs', f3: 'Advanced Funnel Analytics' }
                            ].map((srv, idx) => (
                                <div key={idx} style={glassCardStyle} className="premium-hover-card">
                                    <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px', color: '#ffffff' }}>{srv.title}</h3>
                                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>{srv.desc}</p>
                                    <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                                            <span style={{ color: '#FDB515' }}>✔</span> {srv.f1}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                                            <span style={{ color: '#FDB515' }}>✔</span> {srv.f2}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                                            <span style={{ color: '#FDB515' }}>✔</span> {srv.f3}
                                        </div>
                                    </div>
                                    <div style={{ color: '#FDB515', fontWeight: '700', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }} onClick={() => navigate('/contact')}>
                                        Secure Talent Pipeline <span className="arrow-icon">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 13. Contextual Division Call To Action */}
                        <div style={{ marginTop: '64px', textAlign: 'center', padding: '40px', background: 'rgba(253,181,21,0.04)', borderRadius: '24px', border: '1px solid rgba(253,181,21,0.15)' }}>
                            <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px' }}>Need custom executive parameters targeted immediately?</h4>
                            <button onClick={() => navigate('/contact')} style={{ background: '#FDB515', border: 'none', color: '#060B17', padding: '14px 32px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s' }}>Deploy Talent Acquisition Request</button>
                        </div>

                    </div>
                </section>

                {/* 7. Animated Functional Process Timeline */}
                <section style={{ padding: '120px 24px', background: '#0B1224', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <span style={{ fontSize: '13px', fontWeight: '800', color: '#FDB515', letterSpacing: '0.2em' }}>OPERATIONAL ARCHITECTURE</span>
                            <h2 style={{ fontSize: '44px', fontWeight: '900', marginTop: '12px' }}>The Blueprint of Engagement</h2>
                        </div>

                        <div style={{ position: 'relative', paddingLeft: '40px', borderLeft: '2px solid rgba(253,181,21,0.2)' }} className="timeline-container">
                            {[
                                { step: 'Consult & Diagnose', text: 'Conducting technical diagnostics, resource gap analyses, and regulatory tracking metrics.' },
                                { step: 'Architectural Blueprint Strategy', text: 'Mapping out precise delivery timelines, instructional frameworks, and fiscal compliance targets.' },
                                { step: 'Ecosystem Engineering', text: 'Developing custom SCORM suites, sourcing niche professional profiles, or structuring balance engines.' },
                                { step: 'Deployment Activation', text: 'Launching global LMS access nodes, integrating staff, and stabilizing regulatory accounting paths.' },
                                { step: 'Optimization Measurement', text: 'Evaluating ROI data arrays, corporate churn profiles, and organizational efficiency parameters.' }
                            ].map((phase, index) => (
                                <div key={index} style={{ position: 'relative', marginBottom: '50px' }} className="timeline-node">
                                    <div style={{
                                        position: 'absolute',
                                        left: '-51px',
                                        top: '4px',
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        background: '#060B17',
                                        border: '3px solid #FDB515',
                                        boxShadow: '0 0 15px #FDB515',
                                        zIndex: 10
                                    }} />
                                    <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                                        <span style={{ color: '#FDB515', marginRight: '12px', fontSize: '16px' }}>PHASE 0{index + 1}</span>
                                        {phase.step}
                                    </h4>
                                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', maxWidth: '780px' }}>{phase.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Individual Story Sections — Division 03: Finance */}
                <section id="finance" style={{ padding: '120px 24px', background: '#060B17', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '40px', right: '10%', fontSize: '220px', fontWeight: '900', color: 'rgba(255,255,255,0.03)', userSelect: 'none', lineHeight: 1 }}>03</div>
                    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '64px', alignItems: 'center', marginBottom: '80px' }}>
                            <div>
                                <span style={{ fontSize: '13px', fontWeight: '800', color: '#FDB515', letterSpacing: '0.2em', display: 'block', marginBottom: '16px' }}>DIVISION THREE</span>
                                <h2 style={{ fontSize: '44px', fontWeight: '900', lineHeight: '1.2', marginBottom: '24px', letterSpacing: '-0.03em' }}>Financial Consultancy & Accounting Services</h2>
                                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.75)', marginBottom: '32px' }}>
                                    Maximizing bottom-line stability, operational clarity, and international cross-border tax compliance through elite Chartered Accountancy and corporate advisory structures.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                                    {['IFRS Reporting', 'Corporate Tax Optimization', 'Risk Control Frameworks', 'Fractional CFO Support', 'M&A Due Diligence'].map((chip) => (
                                        <span key={chip} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.06)', borderRadius: '50px', fontSize: '13px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.1)' }}>{chip}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '440px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
                                <img src="/assets/images/about/3.jpg" alt="Corporate Finance Advisory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(45%, 1fr))', gap: '32px' }}>
                            {[
                                { title: 'Enterprise Asset Accounting', desc: 'Daily general ledger management, accounts profiling, and multi-currency structural data streaming.', f1: 'AP/AR Automated Mapping', f2: 'Fixed Asset Registers', f3: 'Daily Flow Reconciliation' },
                                { title: 'Strategic Financial Architecture', desc: 'Board-ready packs and quarterly reporting matrices fully tracking IFRS and local sovereign statutory configurations.', f1: 'P&L Variance Audits', f2: 'Integrated Flow Projections', f3: 'Consolidated Group Maps' },
                                { title: 'Sovereign Tax Planning & Risk', desc: 'Navigating domestic and international cross-border tax shields completely aligned with regulatory code.', f1: 'Corporate Tax Returns', f2: 'Cross-Border Planning Protection', f3: 'Audit Interface Alignment' },
                                { title: 'Fractional CFO Advisory', desc: 'High-tier strategic financial intelligence tailored directly for mid-market scale-ups and operations.', f1: 'M&A Structural Optimization', f2: 'Risk Control Audits', f3: 'Working Capital Maximization' }
                            ].map((srv, idx) => (
                                <div key={idx} style={glassCardStyle} className="premium-hover-card">
                                    <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px', color: '#ffffff' }}>{srv.title}</h3>
                                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>{srv.desc}</p>
                                    <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                                            <span style={{ color: '#FDB515' }}>✔</span> {srv.f1}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                                            <span style={{ color: '#FDB515' }}>✔</span> {srv.f2}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                                            <span style={{ color: '#FDB515' }}>✔</span> {srv.f3}
                                        </div>
                                    </div>
                                    <div style={{ color: '#FDB515', fontWeight: '700', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }} onClick={() => navigate('/contact')}>
                                        Consult Financial Advisory <span className="arrow-icon">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 13. Contextual Division Call To Action */}
                        <div style={{ marginTop: '64px', textAlign: 'center', padding: '40px', background: 'rgba(253,181,21,0.04)', borderRadius: '24px', border: '1px solid rgba(253,181,21,0.15)' }}>
                            <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px' }}>Seeking an enterprise-grade financial optimization diagnostic?</h4>
                            <button onClick={() => navigate('/contact')} style={{ background: 'transparent', border: '1px solid #FDB515', color: '#FDB515', padding: '12px 28px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s' }}>Initiate Fiscal Diagnostic Review</button>
                        </div>

                    </div>
                </section>

                {/* FAQ Section */}
                <section style={{ padding: '100px 24px', background: '#0B1224', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <span style={{ fontSize: '13px', fontWeight: '800', color: '#FDB515', letterSpacing: '0.2em' }}>FAQ</span>
                            <h2 style={{ fontSize: '38px', fontWeight: '900', marginTop: '10px' }}>Frequently Asked Questions</h2>
                        </div>
                        <div style={{ display: 'grid', gap: '24px' }}>
                            {[
                                { q: 'Can we cross-engage multiple divisions concurrently?', a: 'Yes. Our infrastructure model is deliberately built to allow seamless strategic integration across learning architecture, talent pipelines, and financial consultancy under a single unified master client file.' },
                                { q: 'What compliance frameworks govern your financial consultancy services?', a: 'Our operations fully align with IFRS, US GAAP, and regional tax governance regulations across jurisdictions in the United Kingdom, United States, and the Gulf Cooperation Council.' }
                            ].map((faq, index) => (
                                <div key={index} style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#FDB515' }}>{faq.q}</h4>
                                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 14. Large Premium Final Call To Action */}
                <section style={{ padding: '140px 24px', background: 'radial-gradient(circle at 50% 50%, #111A30 0%, #060B17 100%)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(253,181,21,0.08), transparent 70%)',
                        filter: 'blur(80px)',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }} />

                    <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                        <h2 style={{ fontSize: '52px', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: '1.15', marginBottom: '24px' }}>
                            Let&apos;s Build Your <br />Growth Strategy.
                        </h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.75)', maxWidth: '620px', margin: '0 auto 40px' }}>
                            Partner with our multidisciplinary strategy architects to transform capability matrices, optimize human capital deployment, and maximize structural fiscal health.
                        </p>
                        <button 
                            onClick={() => navigate('/contact')}
                            style={{
                                background: '#FDB515',
                                color: '#060B17',
                                padding: '20px 42px',
                                borderRadius: '999px',
                                fontWeight: '700',
                                fontSize: '16px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                boxShadow: '0 15px 40px rgba(253,181,21,0.25)'
                            }}
                            className="primary-button-accent"
                        >
                            Book Consultation Matrix
                        </button>
                    </div>
                </section>
            </main>
            
            <Footer />

            {/* Custom global CSS injection for clean interactions */}
            <style dangerouslySetInnerHTML={{__html: `
                .premium-hover-card:hover {
                    transform: translateY(-10px);
                    border-color: #FDB515 !important;
                    box-shadow: 0 20px 40px rgba(253,181,21,0.08) !important;
                }
                .premium-hover-card:hover .arrow-icon {
                    transform: translateX(6px);
                }
                .primary-button-accent:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 50px rgba(253,181,21,0.35) !important;
                }
                .secondary-glass-button:hover {
                    background: rgba(255,255,255,.1) !important;
                    border-color: rgba(255,255,255,.3) !important;
                    transform: translateY(-2px);
                }
                .hero-scroll-indicator:hover {
                    color: #FDB515 !important;
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-6px); }
                    60% { transform: translateY(-3px); }
                }
            `}} />
        </div>
    );
}