import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import ServiceGrid from '../components/sections/ServiceGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

/**
 * High-performance Motion Wrapper Component using Intersection Observer
 */
function MotionReveal({ children, delay = 0, direction = 'up' }) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target); // Reveal once
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const getDirectionClass = () => {
        if (direction === 'up') return 'reveal-reveal-up';
        if (direction === 'left') return 'reveal-reveal-left';
        if (direction === 'right') return 'reveal-reveal-right';
        return 'reveal-reveal-up';
    };

    return (
        <div
            ref={ref}
            className={`motion-reveal-container ${getDirectionClass()} ${isIntersecting ? 'revealed' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

/* Scrolling marquee of stats */
function StatsMarquee() {
    const stats = [
        { val: '92%+', label: 'Talent Retention Rate' },
        { val: '48h', label: 'Average Time-to-Shortlist' },
        { val: '30+', label: 'Languages Delivered' },
        { val: '3', label: 'Expert Divisions' },
        { val: 'US·UK·UAE·IN', label: 'Global Offices' },
        { val: 'SCORM/xAPI', label: 'eLearning Standards' },
        { val: 'Big 4', label: 'Grade Financial Expertise' },
        { val: 'WCAG 2.1', label: 'Accessibility Compliant' },
    ];

    return (
        <>           <style>{`               @keyframes scroll-left-idx {                0% { transform: translateX(0); }\n                    100% { transform: translateX(-50%); }\n                }\n                .marquee-track {\n                    display: flex;\n                    animation: scroll-left-idx 30s linear infinite;\n                    width: max-content;\n                }\n                .marquee-track:hover {\n                    animation-play-state: paused;\n                }\n            `}</style>
            <div style={{ background: '#0a0a0d', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)', overflow: 'hidden', padding: '18px 0', position: 'relative', zIndex: 10 }}>
                <div className="marquee-track">
                    {[...stats, ...stats].map((s, idx) => (
                        <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '0 40px', whiteSpace: 'nowrap' }}>
                            <span style={{ fontSize: '18px', fontWeight: '800', color: '#0D9488', letterSpacing: '-0.02em' }}>{s.val}</span>
                            <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(254,245,240,0.38)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</span>
                            <span style={{ margin: '0 0 0 30px', color: 'rgba(255,255,255,0.1)' }}>•</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

/* Three Core Functional Divisions */
function DivisionCards() {
    const divisions = [
        {
            title: 'Corporate E-Learning Solutions',
            slug: 'e-learning',
            color: '#22d3ee',
            glow: 'rgba(34,211,238,0.03)',
            desc: 'Custom LMS architectures, dynamic high-engagement SCORM frameworks, and tailored modern micro-learning ecosystems engineered for performance enterprise teams.',
            features: ['Custom Instructional Design', 'SCORM / xAPI LMS Frameworks', 'Interactive Video Systems']
        },
        {
            title: 'Global Recruitment & Staffing',
            slug: 'recruitment-staffing',
            color: '#a855f7',
            glow: 'rgba(168,85,247,0.03)',
            desc: 'Elite global talent pooling across technical hubs. Executing agile direct placement frameworks and cross-border flexible contractor deployment with zero overhead compliance risk.',
            features: ['Pre-Vetted Professional Network', 'Cross-Border Contingent Staffing', 'Executive Search & Placement']
        },
        {
            title: 'Strategic Financial Consultancy',
            slug: 'financial-consultancy',
            color: '#34d399',
            glow: 'rgba(52,211,153,0.03)',
            desc: 'Fractional corporate advisory, multi-jurisdictional clean corporate bookkeeping frameworks, and premium outsourced strategic CFO operations designed to optimize capital allocation.',
            features: ['Fractional Advisory Frameworks', 'Outsourced Bookkeeping Systems', 'Multi-State Tax Structuring']
        }
    ];

    return (
        <>
            <style>{`
                .div-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: transparent;
                    transition: background 0.3s ease;
                    z-index: -1;
                }
                .div-card:hover {
                    border-color: var(--div-color) !important;
                    transform: translateY(-6px) scale(1.01);
                    box-shadow: 0 20px 40px rgba(61, 224, 211, 0.4);
                }
                .div-card:hover::before {
                    background: linear-gradient(135deg, var(--div-glow) 0%, rgba(6, 6, 8, 0.93) 100%);
                }
                .div-explore-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    text-decoration: none;
                    cursor: pointer;
                    transition: gap 0.2s ease;
                    background: none;
                    border: none;
                    padding: 0;
                    font-family: 'Poppins', sans-serif;
                }
                .div-explore-link:hover { gap: 10px; }
            `}</style>
        </>
    );
}

export default function IndexPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#060608' }}>
            {/* Global Smooth Motion Style Injection */}
            <style>{`
                /* Initial Layout Animation States */
                .motion-reveal-container {
                    opacity: 0;
                    will-change: transform, opacity, filter;
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                                filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                .reveal-reveal-up {
                    transform: translateY(40px);
                    filter: blur(4px);
                }
                
                .reveal-reveal-left {
                    transform: translateX(-40px);
                }
                
                .reveal-reveal-right {
                    transform: translateX(40px);
                }

                /* Active Triggered Animation State */
                .motion-reveal-container.revealed {
                    opacity: 1;
                    transform: translate(0, 0);
                    filter: blur(0px);
                }
            `}</style>

            <Header />

            {/* Hero loads organically without delaying fold mechanics */}
            <Hero />

            <StatsMarquee />

            <DivisionCards />

            <MotionReveal direction="up">
                <ServiceGrid />
            </MotionReveal>

            <MotionReveal direction="up">
                <WhyChooseUs />
            </MotionReveal>

            <MotionReveal direction="up">
                <CTASection />
            </MotionReveal>

            <Footer />
        </div>
    );
}