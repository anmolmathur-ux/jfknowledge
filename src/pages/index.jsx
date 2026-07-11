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

function WhyJFVideoSection() {
    return (
        <section style={{
            background: 'linear-gradient(135deg, #1034A6 0%, #0A2280 40%, #061660 100%)',
            padding: '10px 25px 72px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* subtle radial glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '900px', height: '500px',
                background: 'radial-gradient(ellipse, rgba(255,210,0,0.06), transparent 70%)',
                filter: 'blur(60px)', pointerEvents: 'none',
            }} />

            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 2 }}>
                <span style={{
                    display: 'inline-block',
                    fontSize: '11px', fontWeight: '800',
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: '#FFD200', marginBottom: '18px',
                }}>Why JF Knowledge Centre</span>
                <h2 style={{
                    fontSize: 'clamp(28px, 4vw, 52px)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    color: '#ffffff',
                    margin: 0,
                }}>
                    One Partner.{' '}
                    <span style={{ color: '#FFD200' }}>Three Divisions.</span>
                    <br />Unlimited Potential.
                </h2>
            </div>

            {/* Video */}
            <div style={{
                position: 'relative', zIndex: 2,
                maxWidth: '1100px',
                margin: '0 auto',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,210,0,0.08)',
                aspectRatio: '16/9',
            }}>
                <video
                    autoPlay loop muted playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                >
                    <source src="/assets/images/about/why-jf.mp4" type="video/mp4" />
                </video>
                {/* subtle bottom fade into next section */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '80px',
                    background: 'linear-gradient(to bottom, transparent, rgba(6,22,96,0.6))',
                    pointerEvents: 'none',
                }} />
            </div>
        </section>
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
                <WhyJFVideoSection />
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
