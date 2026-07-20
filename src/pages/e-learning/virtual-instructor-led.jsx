import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CTA from '../../components/sections/CTASection';
import { elearningServices } from '../../data/elearningServices';
import { Video, MessagesSquare, Users2, Layers, HardDriveDownload, Globe, Headphones } from 'lucide-react';

export default function VirtualInstructorLedPage() {
    // Fallback data structure aligned with the enhanced enterprise copywriting format
    const data = elearningServices.find(s => s.id === 'virtual-ilt') || {
        title: "Virtual Instructor-Led Training (VILT)",
        summary: "Transplanting the psychological safety and engagement of classroom learning into advanced, borderless digital environments.",
        description: "Our enterprise VILT architectures eliminate geographic friction while amplifying participant engagement. Leveraging native integration across Zoom, Microsoft Teams, Webex, and Adobe Connect, we build collaborative virtual spaces optimized for maximum interaction, dynamic knowledge transfer, and real-time skills assessment.",
        features: [
            "Live, synchronous virtual training environments hosted by certified corporate facilitators and subject specialists.",
            "Dynamic interaction engineering utilizing structured native polls, remote breakout rooms, digital whiteboards, and real-time Q&A.",
            "Cohort-based learning pathways designed strategically to foster professional collaboration and peer-to-peer engagement.",
            "Hybrid VILT implementation combining asynchronous self-paced modules with live, high-touch facilitated sessions.",
            "Post-session asset distribution including full studio-quality recordings, searchable transcripts, and supplemental toolkits.",
            "Multi-timezone execution frameworks structured to support globally distributed enterprise operations seamlessly.",
            "Dedicated live technical moderation and participant management to guarantee zero-latency execution."
        ]
    };

    // Mapping icons to features for maximum structural scannability
    const icons = [Video, MessagesSquare, Users2, Layers, HardDriveDownload, Globe, Headphones];

    return (
        <div style={{ background: '#060B17', color: '#FFFFFF', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
            <Header />

            <style dangerouslySetInnerHTML={{
                __html: `
                .vilt-noise-overlay {
                    position: absolute; inset: 0; pointer-events: none; z-index: 1; opacity: 0.02; mix-blend-mode: overlay;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                }
                .vilt-hero-region {
                    position: relative;
                    background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%), #060B17;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                    z-index: 2;
                }
                .vilt-matrix-grid {
                    position: relative;
                    z-index: 2;
                    padding: 80px 24px;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .vilt-feature-wrapper {
                    position: relative;
                    border-radius: 16px;
                    padding: 1px;
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .vilt-feature-inner {
                    background: #0B1220;
                    border-radius: 15px;
                    padding: 24px;
                    height: 100%;
                }
                .vilt-feature-wrapper:hover {
                    transform: translateY(-4px);
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), transparent 60%);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }
                .vilt-icon-box {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    background: rgba(59, 130, 246, 0.1);
                    color: #60A5FA;
                    border-radius: 12px;
                    margin-bottom: 16px;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                }
                `
            }} />

            <main style={{ flex: 1, position: 'relative' }}>
                <div className="vilt-noise-overlay" />

                {/* Hero Context Section */}
                <div className="vilt-hero-region" style={{ padding: '120px 24px 70px 24px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: '#60A5FA', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: 99, padding: '4px 14px', marginBottom: 20 }}>
                            DIGITAL INTERACTION ENVIRONMENT
                        </div>
                        <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 20px 0', lineHeight: 1.15 }}>
                            {data.title}
                        </h1>
                        <p style={{ fontSize: '19px', fontWeight: '500', color: '#60A5FA', lineHeight: '1.5', marginBottom: 24, maxWidth: '800px' }}>
                            {data.summary}
                        </p>
                        <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#94A3B8', maxWidth: '850px', margin: 0 }}>
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* Grid Execution Matrix Section */}
                <div className="vilt-matrix-grid">
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>Technical &amp; Pedagogical Architecture</span>
                        <span style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {data.features.map((feature, i) => {
                            const IconComponent = icons[i % icons.length] || Video;
                            return (
                                <div key={i} className="vilt-feature-wrapper">
                                    <div className="vilt-feature-inner">
                                        <div className="vilt-icon-box">
                                            <IconComponent size={20} />
                                        </div>
                                        <p style={{ fontSize: '14.5px', lineHeight: '1.65', color: '#94A3B8', margin: 0 }}>
                                            {feature}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Strategic Platform Ecosystem Footer Box */}
                <div style={{ padding: '0 24px 80px 24px', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    <div style={{ background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.35), rgba(17, 24, 39, 0.22))', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
                        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 800, color: '#60A5FA', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Enterprise Stack Integration
                        </h4>
                        <p style={{ margin: '0 auto 20px auto', fontSize: '15px', color: '#94A3B8', lineHeight: '1.5', maxWidth: '650px' }}>
                            Engineered for standard single sign-on (SSO) infrastructure, our virtual deliveries integrate seamlessly with existing corporate firewalls, guaranteeing end-to-end data encryption.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px', fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                            <span>ZOOM ENTERPRISE</span> • <span>MS TEAMS</span> • <span>CISCO WEBEX</span> • <span>ADOBE CONNECT</span>
                        </div>
                    </div>
                </div>

                <CTA />
            </main>

            <Footer />
        </div>
    );
}