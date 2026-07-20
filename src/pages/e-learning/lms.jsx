import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CTA from '../../components/sections/CTASection';
import { elearningServices } from '../../data/elearningServices';
import { FileSearch, Settings, ArrowLeftRight, BarChart3, Users, ShieldCheck, Database } from 'lucide-react';

export default function LmsServicesPage() {
    // Fallback data structure aligned with the enhanced enterprise copywriting format
    const data = elearningServices.find(s => s.id === 'lms-services') || {
        title: "Learning Management System (LMS) Services",
        summary: "Architecting, integrating, and managing robust enterprise LMS ecosystems to secure compliance, streamline management, and scale performance.",
        description: "An organization's training infrastructure is only as dependable as the platform hosting it. We provide comprehensive, end-to-end LMS oversight—from vendor procurement to daily helpdesk management. By bridging the gap between legacy training records and modern cloud frameworks, we ensure your operational data stays synchronized, secure, and entirely audit-ready.",
        features: [
            "Vendor-neutral LMS selection consulting and objective platform procurement support tailored to infrastructure needs.",
            "End-to-end technical implementation, system configuration, and high-fidelity legacy content migration.",
            "Bi-directional platform integration linking LMS databases with HRMS, payroll systems, and talent management tools.",
            "Custom compliance reporting frameworks and high-visibility automated analytics dashboards.",
            "Comprehensive user administration, continuous LMS platform management, and dedicated tier-1 helpdesk support.",
            "Automated compliance tracking pipelines and mandatory training workflows built for global regulatory audits."
        ]
    };

    // Mapping high-fidelity icons to features for maximum structural scannability
    const icons = [FileSearch, Settings, ArrowLeftRight, BarChart3, Users, ShieldCheck];

    return (
        <div style={{ background: '#060B17', color: '#FFFFFF', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
            <Header />

            <style dangerouslySetInnerHTML={{
                __html: `
                .lms-noise-overlay {
                    position: absolute; inset: 0; pointer-events: none; z-index: 1; opacity: 0.02; mix-blend-mode: overlay;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                }
                .lms-hero-region {
                    position: relative;
                    background: radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 60%), #060B17;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                    z-index: 2;
                }
                .lms-matrix-grid {
                    position: relative;
                    z-index: 2;
                    padding: 80px 24px;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .lms-feature-wrapper {
                    position: relative;
                    border-radius: 16px;
                    padding: 1px;
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .lms-feature-inner {
                    background: #0B1220;
                    border-radius: 15px;
                    padding: 24px;
                    height: 100%;
                }
                .lms-feature-wrapper:hover {
                    transform: translateY(-4px);
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.35), transparent 60%);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }
                .lms-icon-box {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    background: rgba(99, 102, 241, 0.1);
                    color: #818CF8;
                    border-radius: 12px;
                    margin-bottom: 16px;
                    border: 1px solid rgba(99, 102, 241, 0.2);
                }
                `
            }} />

            <main style={{ flex: 1, position: 'relative' }}>
                <div className="lms-noise-overlay" />

                {/* Hero Context Section */}
                <div className="lms-hero-region" style={{ padding: '120px 24px 70px 24px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: '#818CF8', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.25)', borderRadius: 99, padding: '4px 14px', marginBottom: 20 }}>
                            CORE ADMINISTRATION ARCHITECTURE
                        </div>
                        <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 20px 0', lineHeight: 1.15 }}>
                            {data.title}
                        </h1>
                        <p style={{ fontSize: '19px', fontWeight: '500', color: '#818CF8', lineHeight: '1.5', marginBottom: 24, maxWidth: '800px' }}>
                            {data.summary}
                        </p>
                        <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#94A3B8', maxWidth: '850px', margin: 0 }}>
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* Grid Execution Matrix Section */}
                <div className="lms-matrix-grid">
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>Administrative Infrastructure Pillars</span>
                        <span style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {data.features.map((feature, i) => {
                            const IconComponent = icons[i % icons.length] || ShieldCheck;
                            return (
                                <div key={i} className="lms-feature-wrapper">
                                    <div className="lms-feature-inner">
                                        <div className="lms-icon-box">
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

                {/* Governance Footnote */}
                <div style={{ padding: '0 24px 80px 24px', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    <div style={{ background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.35), rgba(17, 24, 39, 0.22))', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '32px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.1)', color: '#818CF8', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                            <Database size={24} />
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>Governance &amp; Audit Readiness</h4>
                            <p style={{ margin: 0, fontSize: '14px', color: '#64748B', lineHeight: '1.5' }}>
                                All implementation models prioritize clean reporting taxonomy, facilitating immediate SOC2 compliance verification and frictionless automated data exports for regulatory audits.
                            </p>
                        </div>
                    </div>
                </div>

                <CTA />
            </main>

            <Footer />
        </div>
    );
}