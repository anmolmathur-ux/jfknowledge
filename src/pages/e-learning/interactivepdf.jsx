import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CTA from '../../components/sections/CTASection';
import { elearningServices } from '../../data/elearningServices';
import { MousePointerClick, Video, FileEdit, HelpCircle, Palette, WifiOff, FileText, Download } from 'lucide-react';

export default function InteractivePdfPage() {
    // Fallback data structure aligned with the enhanced enterprise copywriting format
    const data = elearningServices.find(s => s.id === 'interactive-pdfs') || {
        title: "Interactive PDFs & Digital Documents",
        summary: "Transforming static collateral into highly functional, offline-first digital learning experiences that bypass LMS friction.",
        description: "Not every high-impact learning asset requires complex platform deployment. Our interactive media teams engineer visually striking, data-rich interactive PDFs designed to act like native applications. By combining custom navigational nodes, fillable diagnostic elements, and embedded rich media, we deliver friction-free training collateral that operates seamlessly across all hardware architectures—even when entirely disconnected from the network.",
        features: [
            "Dynamic clickable navigation trees, active cross-document hyperlinks, and structured interactive tables of contents for fluid reading.",
            "Fully embedded premium multimedia assets, including high-definition video pipelines, audio files, and responsive infographics.",
            "Secure, fillable form fields engineered for self-guided assessments, reflective text entry, and tactical action planning.",
            "Layered data visualization incorporating pop-up glossaries, expandable structural accordion content, and interactive hover tooltips.",
            "Strictly brand-aligned creative layout systems featuring bespoke typography, stylized iconography sets, and high-impact graphic design.",
            "Universal device compatibility and localized accessibility, requiring zero active internet connection for cross-platform execution.",
            "Targeted design optimization for enterprise compliance documentation, operational onboarding playbooks, product catalogs, and standard operating procedures (SOPs)."
        ]
    };

    // Mapping high-fidelity icons to features for maximum structural scannability
    const icons = [MousePointerClick, Video, FileEdit, HelpCircle, Palette, WifiOff, FileText];

    return (
        <div style={{ background: '#060B17', color: '#FFFFFF', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
            <Header />

            <style dangerouslySetInnerHTML={{
                __html: `
                .pdf-noise-overlay {
                    position: absolute; inset: 0; pointer-events: none; z-index: 1; opacity: 0.02; mix-blend-mode: overlay;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                }
                .pdf-hero-region {
                    position: relative;
                    background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 60%), #060B17;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                    z-index: 2;
                }
                .pdf-matrix-grid {
                    position: relative;
                    z-index: 2;
                    padding: 80px 24px;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .pdf-feature-wrapper {
                    position: relative;
                    border-radius: 16px;
                    padding: 1px;
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .pdf-feature-inner {
                    background: #0B1220;
                    border-radius: 15px;
                    padding: 24px;
                    height: 100%;
                }
                .pdf-feature-wrapper:hover {
                    transform: translateY(-4px);
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.35), transparent 60%);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }
                .pdf-icon-box {
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
                <div className="pdf-noise-overlay" />

                {/* Hero Context Section */}
                <div className="pdf-hero-region" style={{ padding: '120px 24px 70px 24px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: '#60A5FA', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: 99, padding: '4px 14px', marginBottom: 20 }}>
                            PORTABLE ASSET STANDARDS
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
                <div className="pdf-matrix-grid">
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>Document Interaction Framework</span>
                        <span style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {data.features.map((feature, i) => {
                            const IconComponent = icons[i % icons.length] || FileText;
                            return (
                                <div key={i} className="pdf-feature-wrapper">
                                    <div className="pdf-feature-inner">
                                        <div className="pdf-icon-box">
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

                {/* Standalone Deployment Footnote */}
                <div style={{ padding: '0 24px 80px 24px', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    <div style={{ background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.35), rgba(17, 24, 39, 0.22))', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '32px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifySquare: 'center', justifyContent: 'center', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            <Download size={24} />
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>Accessibility Optimization</h4>
                            <p style={{ margin: 0, fontSize: '14px', color: '#64748B', lineHeight: '1.5' }}>
                                All documents are meticulously generated in strict accordance with section 508 and WCAG international accessibility requirements, maintaining reliable structural semantic rendering on screen readers.
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