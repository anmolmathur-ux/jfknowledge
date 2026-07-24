import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Check, Calendar, Users, ShieldCheck, Globe } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const offices = [
    { flag: '🇬🇧', country: 'United Kingdom', city: 'London' },
    { flag: '🇺🇸', country: 'United States', city: 'New York' },
    { flag: '🇦🇪', country: 'United Arab Emirates', city: 'Dubai' },
    { flag: '🇮🇳', country: 'India', city: 'Mumbai' },
];

const channels = [
    {
        label: 'General Enquiries',
        value: 'info@jfknowledgecentre.com',
        href: 'mailto:info@jfknowledgecentre.com',
        icon: <Mail size={16} strokeWidth={2} />,
    },
    {
        label: 'UK Office',
        value: '+44 (0) 20 XXXX XXXX',
        href: 'tel:+44020XXXXXXXX',
        icon: <Phone size={16} strokeWidth={2} />,
    },
    {
        label: 'US Office',
        value: '+1 (XXX) XXX-XXXX',
        href: 'tel:+1XXXXXXXXXX',
        icon: <Phone size={16} strokeWidth={2} />,
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        workEmail: '',
        company: '',
        interest: '',
        summary: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call/transmission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);

            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    fullName: '',
                    workEmail: '',
                    company: '',
                    interest: '',
                    summary: '',
                });
            }, 3000);
        }, 1500);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: '#f8fafc',
            color: '#0f172a',
            fontFamily: 'var(--font-family, "Inter", sans-serif)',
            overflowX: 'hidden',
        }}>
            <Header />

            <style>{`
                @keyframes gridMove {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-40px); }
                }
                @keyframes bgScale {
                    0% { transform: scale(1.00); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1.00); }
                }
                @keyframes heroFadeUp {
                    0% { opacity: 0; transform: translateY(20px); filter: blur(4px); }
                    100% { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                @keyframes floatStat {
                    0% { transform: translateY(4px); }
                    50% { transform: translateY(-4px); }
                    100% { transform: translateY(4px); }
                }
                @keyframes lineWidth {
                    0% { width: 0%; opacity: 0; }
                    100% { width: 100%; opacity: 1; }
                }

                .contact-hero-section {
                    position: relative;
                    padding: 140px 0 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    overflow: hidden;
                    background-color: #08152A;
                    text-align: left;
                }

                .contact-hero-bg-wrapper {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    animation: bgScale 30s infinite ease-in-out;
                }
                .contact-hero-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.80) contrast(1.10) saturate(1.10);
                }

                .contact-hero-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    background: linear-gradient(180deg, rgba(8,15,32,.75) 0%, rgba(8,15,32,.82) 50%, rgba(8,15,32,.95) 100%);
                }

                .contact-hero-grid-decoration {
                    position: absolute;
                    inset: -40px 0;
                    z-index: 3;
                    opacity: 0.04;
                    pointer-events: none;
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: gridMove 60s linear infinite;
                }

                .contact-hero-glow-back {
                    position: absolute;
                    top: 35%;
                    left: 20%;
                    width: 600px;
                    height: 450px;
                    z-index: 4;
                    background: radial-gradient(circle, rgba(37,99,235,.20), transparent 70%);
                    filter: blur(50px);
                    opacity: 0.30;
                    pointer-events: none;
                }

                .contact-hero-container {
                    position: relative;
                    z-index: 5;
                    max-width: 1200px;
                    width: 100%;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    box-sizing: border-box;
                }

                .contact-hero-eyebrow {
                    display: inline-block;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                    color: #FBBF24;
                    margin-bottom: 20px;
                }

                .contact-hero-headline {
                    font-size: clamp(38px, 4.5vw, 56px);
                    font-weight: 900;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    color: #FFFFFF;
                    margin: 0 0 32px 0;
                    max-width: 800px;
                }

                .contact-hero-headline span.accent-wrapper {
                    position: relative;
                    display: inline-block;
                    color: #FFFFFF;
                }
                .contact-hero-headline span.accent-wrapper::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    height: 4px;
                    background: linear-gradient(90deg, #2563EB, #38BDF8, transparent);
                    border-radius: 99px;
                    animation: lineWidth 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .contact-hero-paragraph-glass {
                    background: rgba(255, 255, 255, .04);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, .08);
                    border-radius: 16px;
                    padding: 22px 32px;
                    max-width: 620px;
                    width: 100%;
                    margin-bottom: 40px;
                    box-sizing: border-box;
                }
                .contact-hero-desc {
                    font-size: 16px;
                    line-height: 1.65;
                    color: #CBD5E1;
                    margin: 0;
                }

                .contact-hero-btn-group {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 70px;
                    flex-wrap: wrap;
                }
                .contact-btn-primary {
                    background: linear-gradient(135deg, #2563EB, #3B82F6);
                    color: #ffffff;
                    border: none;
                    border-radius: 12px;
                    padding: 15px 30px;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(37,99,235,0.25);
                }
                .contact-btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 14px 28px rgba(37,99,235,0.35);
                    filter: brightness(1.08);
                }
                .contact-btn-secondary {
                    background: rgba(255, 255, 255, .06);
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(8px);
                    border-radius: 12px;
                    padding: 15px 30px;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                }
                .contact-btn-secondary:hover {
                    background: rgba(255, 255, 255, .1);
                    border-color: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }

                .contact-stats-dashboard {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    width: 100%;
                    max-width: 1000px;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    padding-top: 32px;
                }
                .contact-stat-glass-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(16px);
                    border-radius: 14px;
                    padding: 18px 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 4px;
                    animation: floatStat 6s ease-in-out infinite;
                }
                .contact-stat-glass-card:nth-child(even) {
                    animation-delay: 1.5s;
                }
                .contact-stat-number {
                    font-size: 32px;
                    font-weight: 900;
                    color: #FFFFFF;
                    line-height: 1;
                    letter-spacing: -0.02em;
                }
                .contact-stat-label {
                    font-size: 12px;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.45);
                    letter-spacing: 0.01em;
                }

                .compact-form-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 18px;
                    padding: 24px 28px;
                    box-shadow: 0 15px 35px -10px rgba(15,23,42,0.03);
                }
                .contact-input {
                    width: 100%;
                    box-sizing: border-box;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    padding: 11px 14px;
                    color: #0f172a;
                    font-size: 14px;
                    font-family: var(--font-family, "Inter", sans-serif);
                    outline: none;
                    transition: all 0.2s ease;
                    -webkit-appearance: none;
                }
                .contact-input::placeholder {
                    color: #94a3b8;
                }
                .contact-input:focus {
                    border-color: #2563EB;
                    background: #ffffff;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
                }
                .contact-input option {
                    background: #ffffff;
                    color: #0f172a;
                }
                .channel-link {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 18px;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    background: #ffffff;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    color: inherit;
                }
                .channel-link:hover {
                    border-color: #2563EB;
                    background: rgba(37, 99, 235, 0.01);
                    transform: translateY(-1px);
                }
                .office-card {
                    padding: 14px 16px;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    background: #ffffff;
                    transition: all 0.2s ease;
                }
                .office-card:hover {
                    border-color: #cbd5e1;
                    background: #f1f5f9;
                }
                .submit-btn {
                    width: 100%;
                    padding: 13px 24px;
                    background: linear-gradient(135deg, #2563EB, #3B82F6);
                    color: #ffffff;
                    border: none;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 700;
                    font-family: var(--font-family, "Inter", sans-serif);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: 0 5px 15px rgba(37,99,235,0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .submit-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 10px 22px rgba(37,99,235,0.25);
                    filter: brightness(1.05);
                }
                .submit-btn:disabled {
                    opacity: 0.8;
                    cursor: not-allowed;
                }
                .form-label {
                    display: block;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #64748b;
                    margin-bottom: 6px;
                }

                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    .contact-stats-dashboard {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 550px) {
                    .contact-stats-dashboard {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <main style={{ flex: 1 }}>

                {/* Hero Panel */}
                <section className="contact-hero-section">
                    <div className="contact-hero-bg-wrapper">
                        <video autoPlay loop muted playsInline className="contact-hero-video">
                            <source src="/assets/images/about/about.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="contact-hero-overlay" />
                    <div className="contact-hero-grid-decoration" />
                    <div className="contact-hero-glow-back" />

                    <div className="contact-hero-container">
                        <span className="contact-hero-eyebrow">Get In Touch</span>

                        <h1 className="contact-hero-headline">
                            Let's Start Your Next<br />
                            <span className="accent-wrapper">Success Story</span>
                        </h1>

                        <div className="contact-hero-paragraph-glass">
                            <p className="contact-hero-desc">
                                Reach out for a confidential consultation. We'll evaluate your requirements and check configurations within 24 business hours.
                            </p>
                        </div>

                        <div className="contact-hero-btn-group">
                            <button className="contact-btn-primary" onClick={() => document.getElementById('message-form-panel').scrollIntoView({ behavior: 'smooth' })}>
                                <Calendar size={16} />
                                <span>Schedule Consultation</span>
                            </button>
                            <button className="contact-btn-secondary" onClick={() => document.getElementById('message-form-panel').scrollIntoView({ behavior: 'smooth' })}>
                                <span>Contact Our Team</span>
                                <ArrowRight size={14} />
                            </button>
                        </div>

                        <div className="contact-stats-dashboard">
                            <div className="contact-stat-glass-card">
                                <span className="contact-stat-number">24h</span>
                                <span className="contact-stat-label">Response Time</span>
                            </div>
                            <div className="contact-stat-glass-card">
                                <span className="contact-stat-number">250+</span>
                                <span className="contact-stat-label">Enterprise Clients</span>
                            </div>
                            <div className="contact-stat-glass-card">
                                <span className="contact-stat-number">99%</span>
                                <span className="contact-stat-label">Satisfaction Rate</span>
                            </div>
                            <div className="contact-stat-glass-card">
                                <span className="contact-stat-number">40+</span>
                                <span className="contact-stat-label">Countries Active</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Configuration Section */}
                <section style={{
                    padding: '60px 24px',
                    background: '#f8fafc',
                    position: 'relative',
                    zIndex: 2,
                    boxSizing: 'border-box'
                }}>
                    <div className="contact-grid" style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1.25fr',
                        gap: '32px',
                        alignItems: 'stretch',
                    }}>

                        {/* Left Column Information */}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
                            <div>
                                <p style={{
                                    fontSize: '11px', fontWeight: '800',
                                    letterSpacing: '0.1em', textTransform: 'uppercase',
                                    color: '#2563EB', marginBottom: '6px',
                                }}>
                                    Contact Information
                                </p>
                                <h2 style={{
                                    fontSize: 'clamp(22px, 2vw, 28px)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1.2,
                                    color: '#0f172a',
                                    margin: '0 0 10px',
                                }}>
                                    Global Hub Coordinates
                                </h2>
                                <p style={{
                                    fontSize: '14.5px', lineHeight: 1.55,
                                    color: '#475569',
                                    margin: 0,
                                }}>
                                    Our specialists stand ready globally to execute digital learning architecture adjustments, strategic recruitment setups, and active financial reporting assistance.
                                </p>
                            </div>

                            <div style={{ height: '1px', background: '#e2e8f0' }} />

                            <div>
                                <p style={{
                                    fontSize: '10px', fontWeight: '700',
                                    letterSpacing: '0.08em', textTransform: 'uppercase',
                                    color: '#94a3b8', marginBottom: '10px',
                                }}>
                                    Official Channels
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {channels.map((ch) => (
                                        <a key={ch.label} href={ch.href} className="channel-link">
                                            <span style={{
                                                width: '34px', height: '34px',
                                                borderRadius: '8px',
                                                background: 'rgba(37,99,235,0.06)',
                                                border: '1px solid rgba(37,99,235,0.12)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: '#2563EB', flexShrink: 0,
                                            }}>
                                                {ch.icon}
                                            </span>
                                            <div>
                                                <div style={{
                                                    fontSize: '9px', fontWeight: '700',
                                                    letterSpacing: '0.05em', textTransform: 'uppercase',
                                                    color: '#64748b', marginBottom: '1px',
                                                }}>
                                                    {ch.label}
                                                </div>
                                                <div style={{
                                                    fontSize: '14px', fontWeight: '600',
                                                    color: '#0f172a', letterSpacing: '-0.01em',
                                                }}>
                                                    {ch.value}
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div style={{ height: '1px', background: '#e2e8f0' }} />

                            <div>
                                <p style={{
                                    fontSize: '10px', fontWeight: '700',
                                    letterSpacing: '0.08em', textTransform: 'uppercase',
                                    color: '#94a3b8', marginBottom: '10px',
                                }}>
                                    Global Footprint
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    {offices.map((o) => (
                                        <div key={o.country} className="office-card">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                                                <span style={{ fontSize: '18px', lineHeight: 1 }}>{o.flag}</span>
                                                <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#0f172a' }}>{o.country}</span>
                                            </div>
                                            <div style={{ fontSize: '12.5px', color: '#64748b', fontWeight: '500', paddingLeft: '26px' }}>{o.city}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Updated Contact Form */}
                        <div id="message-form-panel" className="compact-form-card">
                            <div style={{ marginBottom: '14px' }}>
                                <h2 style={{
                                    fontSize: '22px',
                                    fontWeight: 800,
                                    letterSpacing: '-0.02em',
                                    color: '#0f172a',
                                    margin: '0 0 4px',
                                }}>
                                    Send Us a Message
                                </h2>
                                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                                    Required options are annotated with <span style={{ color: '#2563EB' }}>*</span>.
                                </p>
                            </div>

                            <div style={{
                                height: '2px',
                                background: 'linear-gradient(90deg, #2563EB, transparent)',
                                marginBottom: '20px',
                            }} />

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                    <div>
                                        <label className="form-label" htmlFor="fullName">
                                            Full Name <span style={{ color: '#2563EB' }}>*</span>
                                        </label>
                                        <input
                                            id="fullName"
                                            type="text"
                                            required
                                            className="contact-input"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label" htmlFor="workEmail">
                                            Work Email <span style={{ color: '#2563EB' }}>*</span>
                                        </label>
                                        <input
                                            id="workEmail"
                                            type="email"
                                            required
                                            className="contact-input"
                                            value={formData.workEmail}
                                            onChange={handleChange}
                                            placeholder="work@company.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label" htmlFor="company">
                                        Company / Organisation
                                    </label>
                                    <input
                                        id="company"
                                        type="text"
                                        className="contact-input"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your organisation name"
                                    />
                                </div>

                                <div>
                                    <label className="form-label" htmlFor="interest">
                                        Area of Corporate Interest <span style={{ color: '#2563EB' }}>*</span>
                                    </label>
                                    <select
                                        id="interest"
                                        required
                                        className="contact-input"
                                        style={{ cursor: 'pointer' }}
                                        value={formData.interest}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Select an option</option>
                                        <option value="e-learning">E-Learning &amp; Digital Learning Solutions</option>
                                        <option value="recruitment">Recruitment, Staffing &amp; Talent Solutions</option>
                                        <option value="financial">Financial Consultancy &amp; Accounting Services</option>
                                        <option value="enquiry">General Corporate Enquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="form-label" htmlFor="summary">
                                        Requirements Blueprint Summary <span style={{ color: '#2563EB' }}>*</span>
                                    </label>
                                    <textarea
                                        id="summary"
                                        rows="3"
                                        required
                                        className="contact-input"
                                        style={{ resize: 'vertical', minHeight: '75px' }}
                                        value={formData.summary}
                                        onChange={handleChange}
                                        placeholder="Describe your project scaling specifications..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="submit-btn"
                                    style={{
                                        marginTop: '4px',
                                        background: submitted ? '#16a34a' : 'linear-gradient(135deg, #2563EB, #3B82F6)',
                                    }}
                                >
                                    {isSubmitting ? (
                                        'Processing Architecture...'
                                    ) : submitted ? (
                                        <>
                                            <Check size={16} strokeWidth={2.5} />
                                            Transmission Successful
                                        </>
                                    ) : (
                                        <>
                                            Submit Request
                                            <ArrowRight size={14} strokeWidth={2.5} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}