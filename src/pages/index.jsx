import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import ServiceGrid from '../components/sections/ServiceGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

function MotionReveal({ children, delay = 0, direction = 'up' }) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const getDirectionClass = () => {
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

function StatsMarquee() {
    const stats = [
        { val: '92%+', label: 'Talent Retention Rate' },
        { val: '48h', label: 'Average Time-to-Shortlist' },
        { val: '30+', label: 'Languages Delivered' },
        { val: '3', label: 'Expert Divisions' },
        { val: 'US · UK · UAE · IN', label: 'Global Offices' },
        { val: 'SCORM / xAPI', label: 'eLearning Standards' },
        { val: 'Big 4', label: 'Grade Financial Expertise' },
        { val: 'WCAG 2.1', label: 'Accessibility Compliant' },
    ];

    return (
        <>
            <style>{`
                @keyframes scroll-left-idx {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    animation: scroll-left-idx 32s linear infinite;
                    width: max-content;
                }
                .marquee-track:hover { animation-play-state: paused; }
                .marquee-shell {
                    background: var(--bg-surface);
                    border-top: 1px solid var(--border-dark);
                    border-bottom: 1px solid var(--border-dark);
                    overflow: hidden;
                    padding: 16px 0;
                }
                .marquee-val {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--gold);
                    letter-spacing: -0.02em;
                }
                .marquee-lbl {
                    font-size: 11px;
                    font-weight: 600;
                    color: var(--text-muted);
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }
                .marquee-sep {
                    color: var(--border-dark);
                    margin-left: 28px;
                    font-size: 18px;
                }
            `}</style>
            <div className="marquee-shell">
                <div className="marquee-track">
                    {[...stats, ...stats].map((s, idx) => (
                        <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '0 44px', whiteSpace: 'nowrap' }}>
                            <span className="marquee-val">{s.val}</span>
                            <span className="marquee-lbl">{s.label}</span>
                            <span className="marquee-sep">·</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default function IndexPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Hero />
            <StatsMarquee />
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
