import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CTA from '../../components/sections/CTASection';
import { elearningServices } from '../../data/elearningServices';
import { BookOpen, Users, Award, BarChart3, FileText, Compass, CheckCircle2 } from 'lucide-react';

export default function InstructorLedPage() {
    // Fallback data structure if the array item hasn't been completely updated yet
    const data = elearningServices.find(s => s.id === 'instructor-led') || {
        title: "Instructor-Led Training (ILT)",
        summary: "Transforming organizational capability through high-impact, immersive, deep-dive learning experiences facilitated by enterprise domain specialists.",
        description: "Instructor-Led Training remains the gold standard for high-retention corporate learning. Our elite ILT programs bridge theoretical knowledge and operational execution, blending experiential workshops, strategic case studies, and real-world business simulations to maximize long-term skill acquisition.",
        features: [
            "Customised curriculum design aligned with strategic business objectives and quantifiable learning outcomes.",
            "In-person training delivery across global corporate headquarters, dedicated facilities, or tier-one venues.",
            "Cross-functional programs covering Leadership, Deep Technical Architecture, Governance & Compliance, and Domain Expertise.",
            "Rigorous pre- and post-training diagnostic assessments to measure immediate knowledge gain and long-term organizational ROI.",
            "Premium deliverable suites including complete facilitator blueprints, participant playbooks, and continuous learning toolkits.",
            "Strategic Training Needs Analysis (TNA) engineered to pinpoint systemic skill gaps and architect optimal roadmap interventions."
        ]
    };

    // Mapping icons to items dynamically to keep layout highly scannable and professional
    const icons = [BookOpen, Users, Award, BarChart3, FileText, Compass];

    return (
        <div style={{ background: '#F8FAFC', color: '#0F172A', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <style dangerouslySetInnerHTML={{
                __html: `
                .ilt-hero-gradient {
                    background: radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.04) 0%, transparent 50%), #ffffff;
                    border-bottom: 1px solid #E2E8F0;
                }
                .ilt-feature-card {
                    background: #ffffff;
                    border: 1px solid #E2E8F0;
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.01);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .ilt-feature-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(37, 99, 235, 0.3);
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
                }
                .ilt-icon-wrapper {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    background: rgba(37, 99, 235, 0.06);
                    color: #2563EB;
                    border-radius: 12px;
                    margin-bottom: 16px;
                }
                `
            }} />

            <main style={{ flex: 1 }}>
                {/* Hero Context Section */}
                <div className="ilt-hero-gradient" style={{ padding: '120px 24px 70px 24px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: '#2563EB', background: 'rgba(37, 99, 235, 0.08)', borderRadius: 99, padding: '4px 14px', marginBottom: 20 }}>
                            CORE LEARNING MODALITY
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
                        <span>Functional Execution Deliverables</span>
                        <span style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {data.features.map((feature, i) => {
                            const IconComponent = icons[i % icons.length] || CheckCircle2;
                            return (
                                <div key={i} className="ilt-feature-card">
                                    <div className="ilt-icon-wrapper">
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

                {/* Value Footnote Box */}
                <div style={{ padding: '0 24px 80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContents: 'center', justifyContent: 'center' }}>
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Enterprise Alignment Guarantee</h4>
                            <p style={{ margin: 0, fontSize: '14px', color: '#64748B', lineHeight: '1.5' }}>
                                Every deployment includes tailored project architecture management, providing strict operational control overhead metrics and transparent programmatic evaluations back to leadership.
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