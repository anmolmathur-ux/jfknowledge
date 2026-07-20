import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CTA from '../../components/sections/CTASection';
import { elearningServices } from '../../data/elearningServices';
import { Trello, ShieldCheck, Wrench, GitFork, MonitorPlay, Languages, Accessibility, Cpu } from 'lucide-react';

export default function CustomElearningPage() {
    // Fallback data structure aligned with the enhanced enterprise copywriting format
    const data = elearningServices.find(s => s.id === 'custom-elearning') || {
        title: "Custom eLearning Development (SCORM / xAPI)",
        summary: "Harmonizing instructional design, advanced media engineering, and strict compliance tracking to build fully bespoke digital learning modules.",
        description: "Off-the-shelf content fails to address unique corporate workflows. Our custom development team unites instructional architects, visual design specialists, full-stack multimedia developers, and global voice talent to deliver highly branded digital learning environments. Engineered to meet rigorous technical infrastructure benchmarks, our custom modules turn abstract corporate knowledge into measurable human capability.",
        features: [
            "Complete end-to-end agile development frameworks managing every phase from initial narrative storyboarding to final deployment.",
            "Rigorous multi-spec alignment supporting native SCORM 1.2, SCORM 2004, xAPI (Tin Can API), and legacy AICC compliant delivery packages.",
            "Advanced authoring ecosystem mastery utilizing industry-standard deployment tools including Articulate Storyline, Rise 360, Adobe Captivate, and Lectora.",
            "Complex scenario-based learning designs and conditional branching simulations to mimic critical real-world operational decision making.",
            "High-fidelity software simulations and systems walkthroughs optimized for complex ERP setups, enterprise CRM workflows, and proprietary software suites.",
            "Native multilingual localized development pipelines featuring professional studio-grade voice-over execution across 30+ global languages.",
            "Strict structural accessibility alignment conforming completely to international WCAG 2.1 AA digital standards."
        ]
    };

    // Mapping high-fidelity icons to features for clean structural scannability
    const icons = [Trello, ShieldCheck, Wrench, GitFork, MonitorPlay, Languages, Accessibility];

    return (
        <div style={{ background: '#F8FAFC', color: '#0F172A', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-hero-gradient {
                    background: radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.04) 0%, transparent 50%), #ffffff;
                    border-bottom: 1px solid #E2E8F0;
                }
                .custom-feature-card {
                    background: #ffffff;
                    border: 1px solid #E2E8F0;
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.01);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .custom-feature-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(37, 99, 235, 0.3);
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
                }
                .custom-icon-wrapper {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    background: rgba(37, 99, 235, 0.06);
                    color: #2563EB;
                    border-radius: 12px;
                    margin-bottom: 16px;
                    border: 1px solid rgba(37, 99, 235, 0.1);
                }
                `
            }} />

            <main style={{ flex: 1 }}>
                {/* Hero Context Section */}
                <div className="custom-hero-gradient" style={{ padding: '120px 24px 70px 24px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: '#2563EB', background: 'rgba(37, 99, 235, 0.08)', borderRadius: 99, padding: '4px 14px', marginBottom: 20, border: '1px solid rgba(37, 99, 235, 0.15)' }}>
                            BESPOKE INTERACTION ENGINEERING
                        </div>
                        <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', margin: '0 0 20px 0', lineHeight: 1.15 }}>
                            {data.title}
                        </h1>
                        <p style={{ fontSize: '19px', fontWeight: '500', color: '#2563EB', lineHeight: '1.5', marginBottom: 24, maxWidth: '800px' }}>
                            {data.summary}
                        </p>
                        <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', maxWidth: '850px', margin: 0 }}>
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* Grid Execution Matrix Section */}
                <div style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>Bespoke Development Matrix</span>
                        <span style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {data.features.map((feature, i) => {
                            const IconComponent = icons[i % icons.length] || ShieldCheck;
                            return (
                                <div key={i} className="custom-feature-card">
                                    <div className="custom-icon-wrapper">
                                        <IconComponent size={20} />
                                    </div>
                                    <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#475569', margin: 0, fontWeight: 500 }}>
                                        {feature}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Analytics & Compliance Tracking Footnote */}
                <div style={{ padding: '0 24px 80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.08)', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Cpu size={24} />
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Tracking &amp; Telemetry Integrity</h4>
                            <p style={{ margin: 0, fontSize: '14px', color: '#64748B', lineHeight: '1.5' }}>
                                Every module is pre-validated through intensive debugging sandbox cycles, guaranteeing that micro-statements, completion nodes, and granular performance variables pass accurately to your ecosystem's Learning Record Store (LRS).
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