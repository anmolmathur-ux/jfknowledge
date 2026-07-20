import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CTA from '../../components/sections/CTASection';
import { elearningServices } from '../../data/elearningServices';
import { FileSearch, GitMerge, Combine, GraduationCap, Library, ShieldCheck, ClipboardCheck } from 'lucide-react';

export default function ContentStrategyPage() {
    // Fallback data structure aligned with the enhanced enterprise copywriting format
    const data = elearningServices.find(s => s.id === 'content-strategy') || {
        title: "Content Strategy & Instructional Design",
        summary: "Architecting data-driven learning curricula and structural taxonomies designed to convert business objectives into measurable performance gains.",
        description: "Bespoke digital media only succeeds when built on a flawless educational foundation. Our instructional design architects partner with global enterprise teams to execute granular needs assessments, formulate rigorous blended-learning roadmaps, and design precise target-competency diagnostics. We bridge the gap between high-level business goals and high-retention structural content, making sure every asset serves a measurable strategic purpose.",
        features: [
            "Comprehensive Training Needs Analysis (TNA) and deep analytical skills gap assessments.",
            "Strategic learning architecture definition and high-fidelity enterprise curriculum mapping.",
            "Blended learning journey design engineered to optimize cognitive load across multiple modalities.",
            "Rigorous multi-tier assessment design, including formative, summative, and competency-based evaluations.",
            "Curated corporate content systems, digital asset licensing workflows, and third-party content sourcing pipelines."
        ]
    };

    // Mapping high-fidelity icons to features for clean structural scannability
    const icons = [FileSearch, GitMerge, Combine, GraduationCap, Library];

    return (
        <div style={{ background: '#F8FAFC', color: '#0F172A', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <style dangerouslySetInnerHTML={{
                __html: `
                .strategy-hero-gradient {
                    background: radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.04) 0%, transparent 50%), #ffffff;
                    border-bottom: 1px solid #E2E8F0;
                }
                .strategy-feature-card {
                    background: #ffffff;
                    border: 1px solid #E2E8F0;
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.01);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .strategy-feature-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(37, 99, 235, 0.3);
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
                }
                .strategy-icon-wrapper {
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
                <div className="strategy-hero-gradient" style={{ padding: '120px 24px 70px 24px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: '#2563EB', background: 'rgba(37, 99, 235, 0.08)', borderRadius: 99, padding: '4px 14px', marginBottom: 20, border: '1px solid rgba(37, 99, 235, 0.15)' }}>
                            PEDAGOGICAL ARCHITECTURE &amp; DIAGNOSTICS
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
                        <span>Strategic Design Pillars</span>
                        <span style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {data.features.map((feature, i) => {
                            const IconComponent = icons[i % icons.length] || ShieldCheck;
                            return (
                                <div key={i} className="strategy-feature-card">
                                    <div className="strategy-icon-wrapper">
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

                {/* Methodological Integrity Footnote */}
                <div style={{ padding: '0 24px 80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.08)', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ClipboardCheck size={24} />
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Methodological Standards Alignment</h4>
                            <p style={{ margin: 0, fontSize: '14px', color: '#64748B', lineHeight: '1.5' }}>
                                Our framework applies globally accepted instructional methodologies, including ADDIE, Kirkpatrick's Four Levels of Training Evaluation, and Bloom's Revised Taxonomy, guaranteeing predictable and verifiable human capability outcomes.
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
