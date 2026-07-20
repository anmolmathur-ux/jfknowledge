import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CTA from '../../components/sections/CTASection';
import { elearningServices } from '../../data/elearningServices';
import { Zap, Target, Smartphone, BellRing, CheckSquare, Workflow, Clock, Award } from 'lucide-react';

export default function MicrolearningPage() {
    // Fallback data structure aligned with the enhanced enterprise copywriting format
    const data = elearningServices.find(s => s.id === 'microlearning') || {
        title: "Microlearning Solutions",
        summary: "Maximizing knowledge retention through high-impact, bite-sized learning architectures engineered for the modern workflow.",
        description: "As modern operational speeds accelerate, traditional training frameworks give way to micro-burst learning. Our microlearning strategies target individual performance metrics in highly focused, 3-to-7-minute digital modules. By anchoring content in spaced repetition and immediate workflow applicability, we transform transient attention into permanent capability.",
        features: [
            "Short-form video architectures, custom-animated explainer dynamics, and high-retention knowledge snippets.",
            "Topic-specific 'Skill Pills' systematically mapped to target individual performance objectives.",
            "Responsive, mobile-first delivery architectures fully optimized across corporate tablet and smartphone infrastructure.",
            "Automated spaced repetition tracking systems integrated with algorithmic push-notification delivery frameworks.",
            "Micro-quizzes and interactive reinforcement activities engineered to eliminate the Ebbinghaus forgetting curve.",
            "Just-in-time reference banks embedded natively within existing enterprise collaboration platforms and daily workflows.",
            "Agile, high-speed development methodologies guaranteeing production deployment in days, rather than months."
        ]
    };

    // Mapping high-fidelity icons to features for maximum structural scannability
    const icons = [Zap, Target, Smartphone, BellRing, CheckSquare, Workflow, Clock];

    return (
        <div style={{ background: '#F8FAFC', color: '#0F172A', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <style dangerouslySetInnerHTML={{
                __html: `
                .micro-hero-gradient {
                    background: radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.04) 0%, transparent 50%), #ffffff;
                    border-bottom: 1px solid #E2E8F0;
                }
                .micro-feature-card {
                    background: #ffffff;
                    border: 1px solid #E2E8F0;
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.01);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .micro-feature-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(124, 58, 237, 0.3);
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
                }
                .micro-icon-wrapper {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    background: rgba(124, 58, 237, 0.06);
                    color: #7C3AED;
                    border-radius: 12px;
                    margin-bottom: 16px;
                    border: 1px solid rgba(124, 58, 237, 0.1);
                }
                `
            }} />

            <main style={{ flex: 1 }}>
                {/* Hero Context Section */}
                <div className="micro-hero-gradient" style={{ padding: '120px 24px 70px 24px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: '#7C3AED', background: 'rgba(124, 58, 237, 0.08)', borderRadius: 99, padding: '4px 14px', marginBottom: 20, border: '1px solid rgba(124, 58, 237, 0.15)' }}>
                            AGILE COMPACT MODALITY
                        </div>
                        <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', margin: '0 0 20px 0', lineHeight: 1.15 }}>
                            {data.title}
                        </h1>
                        <p style={{ fontSize: '19px', fontWeight: '500', color: '#7C3AED', lineHeight: '1.5', marginBottom: 24, maxWidth: '800px' }}>
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
                        <span>Bite-Sized Retention Mechanics</span>
                        <span style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {data.features.map((feature, i) => {
                            const IconComponent = icons[i % icons.length] || Zap;
                            return (
                                <div key={i} className="micro-feature-card">
                                    <div className="micro-icon-wrapper">
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

                {/* Cognitive Retention Guarantee Footnote */}
                <div style={{ padding: '0 24px 80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Award size={24} />
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Engagement Optimization Metrics</h4>
                            <p style={{ margin: 0, fontSize: '14px', color: '#64748B', lineHeight: '1.5' }}>
                                Built entirely upon verified SCORM/xAPI logging parameters, our micro-modules track precise drop-off curves and core interaction touchpoints, providing real-time data metrics directly to enterprise dashboards.
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