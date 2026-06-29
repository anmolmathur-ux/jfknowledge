import React from 'react';
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
        <>
            <style>{`
                @keyframes scroll-left-idx {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    animation: scroll-left-idx 35s linear infinite;
                    width: max-content;
                }
                .marquee-track:hover { animation-play-state: paused; }
                .marquee-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0 48px;
                    white-space: nowrap;
                    border-right: 1px solid rgba(255,255,255,0.06);
                }
            `}</style>
            <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0a0a0c', overflow: 'hidden', padding: '20px 0' }}>
                <div className="marquee-track">
                    {[...stats, ...stats].map((s, i) => (
                        <div key={i} className="marquee-item">
                            <span style={{ fontSize: '16px', fontWeight: '800', color: '#9747FF' }}>{s.val}</span>
                            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: "'Poppins', sans-serif" }}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

/* Division cards section */
function DivisionCards() {
    const divisions = [
        {
            num: '01',
            icon: '💻',
            title: 'E-Learning & Digital Learning Solutions',
            desc: 'Full-service digital learning powerhouse — from SCORM modules and VILT sessions to LMS implementations and microlearning. Anytime, anywhere, on any device.',
            href: '/e-learning',
            imageUrl: '/assets/images/about/elearning.png',
            color: '#9747FF',
            tags: ['ILT & VILT', 'Microlearning', 'Gamification', 'LXP', 'SCORM/xAPI'],
        },
        {
            num: '02',
            icon: '👥',
            title: 'Recruitment, Staffing & Talent Solutions',
            desc: 'End-to-end talent partner with deep expertise across global markets — permanent placement, contract staffing, IT/non-IT augmentation, and executive search.',
            href: '/recruitment-staffing',
            imageUrl: '/assets/images/about/recruitment.png',
            color: '#22d3ee',
            tags: ['Permanent Hire', 'Contract Staffing', 'IT Augmentation', 'Executive Search', 'RPO/MSP'],
        },
        {
            num: '03',
            icon: '📊',
            title: 'Financial Consultancy & Accounting Services',
            desc: 'Qualified CAs and CPAs delivering bookkeeping, tax compliance, financial modelling, payroll management, and fractional CFO services for businesses at every stage.',
            href: '/financial-consultancy',
            imageUrl: '/assets/images/about/financial.png',
            color: '#34d399',
            tags: ['Bookkeeping', 'Tax & VAT', 'Payroll', 'CFO Advisory', 'M&A Support'],
        },
    ];

    return (
        <>
            <style>{`
                .div-card {
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.07);
                    background-size: cover;
                    background-position: center;
                    padding: 36px;
                    transition: border-color 0.3s ease, transform 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }
                /* Tinted dark overlay covering the image to make typography readable */
                .div-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(180deg, rgba(6, 6, 8, 0.94) 0%, rgba(6, 6, 8, 0.97) 100%);
                    transition: background 0.3s ease;
                    z-index: -1;
                }
                .div-card:hover {
                    border-color: var(--div-color);
                    transform: translateY(-2px);
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
            <Header />
            <Hero />
            <StatsMarquee />
            <DivisionCards />
            <ServiceGrid />
            <WhyChooseUs />
            <CTASection />
            <Footer />
        </div>
    );
}