import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CTA from '../../components/sections/CTASection';
import {
    UserCheck,
    Users,
    Cpu,
    Crown,
    Layers,
    Globe2,
    ShieldCheck,
    ArrowUpRight,
    Check,
    X,
    ArrowRight,
    Landmark,
    HeartPulse,
    Factory,
    Laptop,
    GraduationCap,
    TrendingUp,
    Zap
} from 'lucide-react';

export default function RecruitmentIndex() {
    // State to handle the interactive modal view
    const [activeService, setActiveService] = useState(null);

    // Dynamic monochrome Lucide icon mapping
    const ServiceIcons = {
        permanent: UserCheck,
        contract: Users,
        augmentation: Cpu,
        executive: Crown,
        managed: Layers
    };

    // Mapping icons to target industries
    const IndustryIcons = {
        "Banking & Finance": Landmark,
        "Healthcare Systems": HeartPulse,
        "Enterprise Manufacturing": Factory,
        "Technology & SaaS": Laptop,
        "Education Holdings": GraduationCap
    };

    const services = [
        {
            id: "permanent",
            title: "Permanent Placement & Direct Hire",
            iconName: "permanent",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            shortDesc: "Sourcing and evaluating exceptional talent for permanent roles across all organizational levels, ensuring long-term technical and cultural alignment.",
            longDesc: "We source, screen, and present exceptional candidates for permanent roles across all seniority levels — from entry-level professionals to C-suite executives. Our rigorous multi-stage evaluation process ensures only the most qualified, culturally aligned candidates reach your hiring team.",
            chips: ["Executive Search", "Retained Search", "Competency Audit", "Talent Mapping"],
            points: [
                "Comprehensive job profiling and role analysis in partnership with hiring managers",
                "Multi-channel talent sourcing: LinkedIn, job boards, referrals, proprietary databases",
                "AI-powered candidate matching and talent intelligence tools",
                "In-depth competency-based interviewing and behavioural assessments",
                "Background verification, reference checks, and credential validation",
                "Offer management, negotiation support, and onboarding coordination",
                "90-day replacement guarantee for permanent placements"
            ],
            benefits: ["90-day placement guarantee", "Cultural alignment indexing", "Pre-vetted professional pipelines", "Optimized onboarding transition"],
            industries: ["Technology & SaaS", "Healthcare Systems", "Banking & Finance"]
        },
        {
            id: "contract",
            title: "Contract & Temporary Staffing",
            iconName: "contract",
            image: "https://images.unsplash.com/photo-1521737711867-e3b90473bd58?auto=format&fit=crop&w=800&q=80",
            shortDesc: "Flexible contract-to-hire and temporary staffing models to scale workforce capacity on demand while streamlining administrative operations.",
            longDesc: "Whether you need to scale your team for a peak season, a specific project, or a sudden surge in demand, our contract and temporary staffing solutions provide flexible, quality talent at speed. We manage the entire employee lifecycle — from recruitment through to payroll and compliance.",
            chips: ["Rapid Sourcing", "Payroll Custody", "Tax Compliance", "Hybrid/Remote"],
            points: [
                "Rapid deployment of pre-vetted contract professionals within 24–72 hours",
                "Flexible engagement durations — days, weeks, months, or open-ended contracts",
                "Complete contractor management: payroll, tax compliance, insurance, and HR support",
                "On-site, hybrid, and remote working arrangements",
                "Contract-to-permanent conversion pathways for high-performing contractors"
            ],
            benefits: ["Statutory risk insulation", "Workforce elasticity on demand", "Complete payroll delegation", "Rapid project deployment velocity"],
            industries: ["Enterprise Manufacturing", "Technology & SaaS", "Banking & Finance"]
        },
        {
            id: "augmentation",
            title: "Staff Augmentation — IT & Non-IT",
            iconName: "augmentation",
            image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
            shortDesc: "Seamlessly integrate specialized operational and technical experts directly into your existing in-house teams.",
            longDesc: "Our Staff Augmentation model enables organisations to seamlessly extend their existing teams with skilled professionals who integrate into your workflows, tools, and culture — without the overheads of traditional hiring. We offer augmentation across both IT and Non-IT functions.",
            chips: ["Direct Integration", "Zero Hiring Overhead", "Technical Upscaling", "Cross-Border Teams"],
            points: [
                "IT Functions: Software Developers, Data Scientists, Cloud Architects, Cybersecurity, QA Engineers, ERP/CRM Consultants, Network Engineers, Project Managers, AI/ML Engineers",
                "Non-IT Functions: Finance & Accounting, HR Business Partners, Sales & Business Development, Marketing, Supply Chain & Logistics, Legal & Compliance, Operations, Customer Service, Healthcare, Administrative"
            ],
            benefits: ["Direct workspace alignment", "Instant operational capacity", "De-risked scalability", "Eliminated recruitment overhead"],
            industries: ["Technology & SaaS", "Healthcare Systems", "Enterprise Manufacturing"]
        },
        {
            id: "executive",
            title: "Executive Search & Leadership Hiring",
            iconName: "executive",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
            shortDesc: "Discreet research-driven executive mapping to secure transformational leaders capable of guiding corporate trajectories.",
            longDesc: "Finding the right leader can redefine an organisation's trajectory. Our executive search practice applies a discreet, research-led methodology to identify and attract transformational leaders across the C-suite, board, and senior management levels.",
            chips: ["C-Suite Sourcing", "Discrete Execution", "Retained Mandates", "Psychometric Audits"],
            points: [
                "Retained and contingency executive search mandates",
                "Comprehensive market mapping and competitor talent intelligence",
                "Psychometric profiling, leadership assessments, and cultural fit evaluation",
                "Discreet, confidential search processes for sensitive mandates",
                "Global reach across US, UK, Europe, GCC, Asia, and beyond"
            ],
            benefits: ["Transformational board assets", "Insulated competitor search models", "Comprehensive global reach", "Robust competency validation"],
            industries: ["Banking & Finance", "Healthcare Systems", "Enterprise Manufacturing"]
        },
        {
            id: "managed",
            title: "Managed Staffing Solutions (MSP / RPO)",
            iconName: "managed",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
            shortDesc: "Outsourced master vendor staffing frameworks designed for high-volume consistent operations.",
            longDesc: "For organisations with high-volume or ongoing recruitment needs, our Managed Staffing Solutions provide a fully outsourced or co-sourced model that delivers consistency, compliance, and cost efficiency at scale.",
            chips: ["Enterprise RPO", "Master Vendor Custody", "Dedicated Units", "Workforce Analytics"],
            points: [
                "Recruitment Process Outsourcing (RPO): end-to-end talent acquisition management",
                "Master Vendor Staffing (MSP): single-point management of all staffing suppliers",
                "Dedicated on-site or embedded recruitment teams",
                "Standardised hiring processes, SLAs, and compliance frameworks",
                "Real-time hiring dashboards and workforce analytics reporting"
            ],
            benefits: ["Consistent standardized KPIs", "Consolidated supplier spend", "Embedded on-site hiring teams", "Data-driven capacity insights"],
            industries: ["Technology & SaaS", "Enterprise Manufacturing", "Education Holdings"]
        }
    ];

    const footprints = [
        {
            region: "United States",
            desc: "Full-cycle permanent, contract, and staff augmentation across all major industries. Specialisms include Technology, Healthcare, Finance, Engineering, and Life Sciences. Compliant with US employment law, EEO, and ITAR where applicable."
        },
        {
            region: "United Kingdom",
            desc: "Specialist recruitment across Financial Services, Technology, Professional Services, and Public Sector. Compliant with UK employment law, IR35 regulation, and GDPR. Strong network across London, Manchester, Birmingham, and Edinburgh."
        },
        {
            region: "Europe",
            desc: "Pan-European recruitment across Germany, Netherlands, France, Switzerland, Nordics, and beyond. Expertise in GDPR-compliant hiring, multilingual candidate sourcing, and cross-border talent mobility."
        },
        {
            region: "GCC",
            desc: "Specialist talent solutions across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. Deep expertise in vision-aligned industries including Oil & Gas, Construction, Hospitality, Islamic Finance, and Government projects. Visa sponsorship coordination and relocation support."
        }
    ];

    return (
        <div style={{ background: '#070F20', color: '#F8FAFC', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
            <Header />

            {/* Custom Embedded Styling Engine */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scaleUpBg {
                    from { transform: scale(1.05); opacity: 0; }
                    to { transform: scale(1); opacity: 0.85; }
                }
                @keyframes heroFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(2deg); }
                }
                @keyframes floatMedium {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(-3deg); }
                }
                @keyframes floatFast {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(0); opacity: 0.6; }
                    50% { transform: translateY(8px); opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes modalScaleIn {
                    from { opacity: 0; transform: scale(0.96) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                /* Responsive Grid Config */
                .rec-premium-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
                    gap: 32px;
                    padding: 60px 0;
                }
                @media(max-width: 500px) {
                    .rec-premium-grid {
                        grid-template-columns: 1fr;
                    }
                }
                
                /* Structural Premium Editorial Cards */
                .rec-editorial-card {
                    position: relative;
                    border-radius: 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                    cursor: pointer;
                    height: 640px;
                    box-sizing: border-box;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .rec-card-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    background: #455c7eff;
                }
                .rec-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    opacity: 0.55;
                }
                .rec-editorial-card:hover .rec-card-image {
                    transform: scale(1.08);
                    opacity: 0.75;
                }
                
                .rec-card-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 40%, #2f4166ff 100%);
                }
                .rec-card-light .rec-card-image-overlay {
                    background: linear-gradient(to bottom, transparent 40%, #FFFFFF 100%);
                }

                .rec-card-content {
                    padding: 32px 40px 40px 40px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
                }

                .rec-card-texture {
                    position: absolute;
                    inset: 0;
                    opacity: 0.025;
                    pointer-events: none;
                    background-image: radial-gradient(#22D3EE 1px, transparent 1px);
                    background-size: 24px 24px;
                }

                .rec-card-glow-tr {
                    position: absolute;
                    top: -10%;
                    right: -10%;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                }
                .rec-card-glow-bl {
                    position: absolute;
                    bottom: -10%;
                    left: -10%;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                }
                
                /* Dark Variant */
                .rec-card-dark {
                    background: #111827;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .rec-card-dark .rec-title-gradient {
                    background: linear-gradient(90deg, #3B82F6, #06B6D4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .rec-card-dark .rec-body-desc {
                    color: #CBD5E1;
                }
                .rec-card-dark .rec-feature-chip {
                    background: rgba(59, 130, 246, 0.15);
                    color: #93C5FD;
                }
                .rec-card-dark .rec-card-cta {
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: transparent;
                    color: #E2E8F0;
                }

                /* Light Variant */
                .rec-card-light {
                    background: linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%);
                    border: 1px solid rgba(15, 23, 42, 0.06);
                }
                .rec-card-light .rec-title-gradient {
                    background: linear-gradient(90deg, #1D4ED8, #0891B2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .rec-card-light .rec-body-desc {
                    color: #475569;
                }
                .rec-card-light .rec-feature-chip {
                    background: #EFF6FF;
                    color: #1E40AF;
                }
                .rec-card-light .rec-card-cta {
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    background: #FFFFFF;
                    color: #334155;
                }

                .rec-editorial-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 40px 80px -15px rgba(15, 23, 42, 0.3), 0 0 40px rgba(34, 211, 238, 0.05);
                }
                .rec-card-dark:hover {
                    border-color: rgba(34, 211, 238, 0.3);
                }
                .rec-card-light:hover {
                    border-color: rgba(37, 99, 235, 0.25);
                }

                .rec-icon-box {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    background: linear-gradient(145deg, #EFF6FF, #DBEAFE);
                    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.15);
                    color: #1E40AF;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-editorial-card:hover .rec-icon-box {
                    transform: scale(1.05) rotate(5deg);
                }

                .rec-feature-chip {
                    font-size: 12px;
                    font-weight: 600;
                    padding: 6px 14px;
                    border-radius: 99px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-editorial-card:hover .rec-feature-chip {
                    background: #2563EB;
                    color: #FFFFFF !important;
                }

                .rec-editorial-card:hover .rec-card-cta {
                    border-color: #2563EB;
                    background: #2563EB;
                    color: #FFFFFF;
                }
                .rec-editorial-card:hover .rec-card-cta-arrow {
                    transform: translateX(12px);
                }

                .rec-stagger-card {
                    opacity: 0;
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                /* Enhanced Hero UI Layout classes */
                .rec-hero-container {
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background: #070F20;
                    overflow: hidden;
                    width: 100%;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }
                .rec-hero-grid-bg {
                    position: absolute;
                    inset: 0;
                    opacity: 0.04;
                    background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                    z-index: 2;
                }
                .rec-hero-glow-tl {
                    position: absolute;
                    top: -20%;
                    left: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 1;
                }
                .rec-hero-glow-br {
                    position: absolute;
                    bottom: -20%;
                    right: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 1;
                }
                .rec-hero-split {
                    display: flex;
                    width: 100%;
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 120px 60px 60px 60px;
                    position: relative;
                    z-index: 5;
                }
                .rec-hero-left {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    text-align: left;
                    animation: heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .rec-hero-right {
                    width: 50%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                @media(max-width: 1024px) {
                    .rec-hero-split {
                        flex-direction: column;
                        padding: 140px 24px 60px 24px;
                        gap: 60px;
                    }
                    .rec-hero-left, .rec-hero-right {
                        width: 100%;
                    }
                    .rec-hero-right {
                        min-height: 400px;
                    }
                }
                .rec-hero-video-wrapper {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                }
                .rec-hero-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    animation: scaleUpBg 1.6s cubic-bezier(0.16, 1, 0.3, 1) both;
                    filter: grayscale(20%) brightness(0.45);
                }
                .rec-hero-overlay-left {
                    position: absolute;
                    top: 0; left: 0; bottom: 0; width: 60%;
                    background: linear-gradient(90deg, #070F20 0%, rgba(7,15,32,0.92) 50%, rgba(7,15,32,0.4) 100%);
                    z-index: 1;
                    backdrop-filter: blur(4px);
                }
                @media(max-width: 1024px) {
                    .rec-hero-overlay-left {
                        width: 100%;
                        background: linear-gradient(180deg, #070F20 40%, rgba(7,15,32,0.85) 100%);
                    }
                }
                .rec-hero-overlay-right {
                    position: absolute;
                    top: 0; right: 0; bottom: 0; width: 40%;
                    background: linear-gradient(-90deg, rgba(7,15,32,0.3) 0%, rgba(7,15,32,0.6) 100%);
                    z-index: 1;
                }
                
                /* Animated Graphics Engine Components */
                .rec-floating-card-1 {
                    position: absolute;
                    top: 15%; right: 10%;
                    background: rgba(17, 24, 39, 0.7);
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    padding: 16px 20px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    animation: floatSlow 6s ease-in-out infinite;
                }
                .rec-floating-card-2 {
                    position: absolute;
                    bottom: 20%; left: 5%;
                    background: rgba(17, 24, 39, 0.75);
                    border: 1px solid rgba(34, 211, 238, 0.2);
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    padding: 18px 22px;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.4);
                    animation: floatMedium 8s ease-in-out infinite;
                }
                .rec-floating-card-3 {
                    position: absolute;
                    top: 45%; right: 5%;
                    background: rgba(17, 24, 39, 0.7);
                    border: 1px solid rgba(37, 99, 235, 0.2);
                    backdrop-filter: blur(12px);
                    border-radius: 50%;
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #3B82F6;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                    animation: floatSlow 5s ease-in-out infinite alternate;
                }
                
                /* Interactive Primary/Secondary CTA Buttons */
                .rec-btn-primary {
                    background: linear-gradient(90deg, #2563EB, #06B6D4);
                    color: #FFFFFF;
                    padding: 16px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
                }
                .rec-btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4), 0 0 20px rgba(6, 182, 212, 0.3);
                }
                .rec-btn-primary:hover .rec-btn-arrow {
                    transform: translateX(4px);
                }
                .rec-btn-secondary {
                    background: rgba(255, 255, 255, 0.03);
                    color: #FFFFFF;
                    padding: 16px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(8px);
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .rec-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.3);
                    transform: translateY(-3px);
                }

                .rec-industry-pill {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 12px;
                    padding: 8px 16px;
                    font-size: 13.5px;
                    color: #94A3B8;
                    cursor: default;
                    transition: all 0.3s ease;
                }
                .rec-industry-pill:hover {
                    transform: scale(1.05);
                    border-color: rgba(34, 211, 238, 0.4);
                    background: rgba(34, 211, 238, 0.05);
                    color: #FFFFFF;
                }
                
                .rec-modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    background: rgba(15, 23, 42, 0.85);
                    backdrop-filter: blur(16px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 24px;
                    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .rec-modal-window {
                    background: #111827;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 32px;
                    width: 100%;
                    max-width: 960px;
                    max-height: 85vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.7);
                    animation: modalScaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                `
            }} />

            <main style={{ flex: 1, position: 'relative' }}>

                {/* Split Interactive Cinema Hero Segment */}
                <section className="rec-hero-container">
                    <div className="rec-hero-grid-bg" />
                    <div className="rec-hero-glow-tl" />
                    <div className="rec-hero-glow-br" />

                    <div className="rec-hero-video-wrapper">
                        <div className="rec-hero-overlay-left" />
                        <div className="rec-hero-overlay-right" />
                        <video autoPlay loop muted playsInline className="rec-hero-video">
                            <source src="/assets/images/about/recruitbg.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="rec-hero-split">
                        <div className="rec-hero-left">
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: '#06B6D4', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: 99, padding: '6px 16px', marginBottom: 28 }}>
                                <Zap size={12} /> GLOBAL TALENT DEPLOYMENT &amp; ACQUISITION
                            </div>

                            <h1 style={{ fontSize: 'clamp(38px, 5.5vw, 62px)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em', margin: '0 0 28px 0', lineHeight: 1.15 }}>
                                Recruitment, Staffing &amp; <br />
                                <span style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Talent Solutions</span>
                            </h1>

                            <p style={{ fontSize: '18px', color: '#94A3B8', lineHeight: 1.8, marginBottom: 40, maxWidth: '540px', fontWeight: 400 }}>
                                Connecting global organisations with exceptional executive talent, contract staff, and specialized workforce engineering solutions across complex regulatory markets.
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <button className="rec-btn-primary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                                    <span>Deploy Strategy</span>
                                    <ArrowRight className="rec-btn-arrow" size={16} style={{ transition: 'transform 0.3s ease' }} />
                                </button>
                                <button className="rec-btn-secondary" onClick={() => {
                                    const element = document.getElementById('recruitment-frameworks');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    <span>Explore Architectures</span>
                                </button>
                            </div>
                        </div>

                        {/* Interactive Floating Graphic Pipeline System */}
                    </div>
                </section>

                {/* Grid Structure Section Wrapper */}
                <div id="recruitment-frameworks" style={{ padding: '100px 24px', maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

                    {/* Editorial Content Headers */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '60px', borderLeft: '3px solid #3B82F6', paddingLeft: '24px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', color: '#3B82F6', textTransform: 'uppercase' }}>
                            GLOBAL HUMAN RESOURCES
                        </span>
                        <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                            Recruitment Frameworks Designed for Modern Enterprises
                        </h2>
                        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '650px', lineHeight: 1.6, marginTop: '8px', fontWeight: 400 }}>
                            Rigorous, scalable deployment pipelines tailored to support organizational maturity and borderless growth.
                        </p>
                    </div>

                    {/* Premium Grid Blueprint Array Mapping */}
                    <div className="rec-premium-grid">
                        {services.map((srv, idx) => {
                            const isDark = idx % 2 === 0;
                            const IconComponent = ServiceIcons[srv.iconName] || UserCheck;

                            return (
                                <div
                                    key={idx}
                                    className={`rec-editorial-card ${isDark ? 'rec-card-dark' : 'rec-card-light'} rec-stagger-card`}
                                    style={{ animationDelay: `${idx * 0.12}s` }}
                                    onClick={() => setActiveService(srv)}
                                >
                                    {/* Textures and Vector Overlays */}
                                    {/* Image Section Added Here */}
                                    <div className="rec-card-image-wrapper">
                                        <img
                                            src={srv.image || "/assets/images/services/placeholder.jpg"}
                                            alt={srv.title}
                                            className="rec-card-image"
                                        />
                                        <div className="rec-card-image-overlay" />

                                        {/* Floating Badge on Image */}
                                        <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 3 }}>
                                            <div className="rec-icon-box">
                                                <IconComponent size={24} strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rec-card-content">
                                        <div className="rec-card-texture" />
                                        <div className="rec-card-glow-tr" />
                                        <div className="rec-card-glow-bl" />

                                        {/* Subtle Left Accent Bar */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '4px',
                                            height: '40px',
                                            background: 'linear-gradient(180deg, #3B82F6, #06B6D4)'
                                        }} />

                                        <div style={{
                                            position: 'absolute',
                                            bottom: '80px',
                                            right: '40px',
                                            fontSize: '120px',
                                            fontWeight: 900,
                                            opacity: 0.03,
                                            pointerEvents: 'none',
                                            userSelect: 'none',
                                            color: '#3B82F6',
                                            lineHeight: 1
                                        }}>
                                            {String(idx + 1).padStart(2, '0')}
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                                            <div style={{ height: '76px', marginBottom: '14px', overflow: 'hidden' }}>
                                                <h3 className="rec-title-gradient" style={{
                                                    fontSize: '26px',
                                                    fontWeight: 800,
                                                    lineHeight: 1.2,
                                                    margin: 0,
                                                    letterSpacing: '-0.02em',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}>
                                                    {srv.title}
                                                </h3>
                                            </div>

                                            <div style={{ height: '90px', overflow: 'hidden', marginBottom: '24px' }}>
                                                <p className="rec-body-desc" style={{
                                                    fontSize: '14px',
                                                    lineHeight: 1.7,
                                                    margin: 0,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 4,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}>
                                                    {srv.shortDesc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Regional Footprints Section */}
                    <div style={{ marginTop: '100px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '48px', borderLeft: '3px solid #06B6D4', paddingLeft: '24px' }}>
                            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', color: '#06B6D4', textTransform: 'uppercase' }}>
                                GEOGRAPHIC REACH
                            </span>
                            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                                Transnational Regulatory Deployment
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                            {footprints.map((fp, i) => (
                                <div key={i} style={{ background: '#111827', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '40px', transition: 'all 0.4s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-6px)';
                                        e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                    }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.08)', color: '#06B6D4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Globe2 size={20} strokeWidth={1.5} />
                                        </div>
                                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>{fp.region}</h3>
                                    </div>
                                    <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0, lineHeight: 1.65 }}>{fp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Governance Pipeline Banner */}
                    <div style={{ marginTop: '100px', background: 'linear-gradient(180deg, #111827, rgba(17, 24, 39, 0.4))', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '32px', padding: '56px 40px', display: 'flex', gap: '32px', alignItems: 'center', textAlign: 'left' }}>
                        <div style={{ minWidth: '64px', height: '64px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.08)', color: '#06B6D4', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(6, 182, 212, 0.2)', flexShrink: 0 }}>
                            <ShieldCheck size={28} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                                Our Talent Promise &amp; Quality Metrics
                            </h3>
                            <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>
                                We don't fill positions — we build resilient enterprise frameworks. Every asset we provision is thoroughly vetted for technical competence, cross-border cultural compliance, and long-term utility. Our average time-to-shortlist sits at 48 hours, yielding a standard retention metric exceeding 92% at the 12-month milestone.
                            </p>
                        </div>
                    </div>

                </div>

                <CTA />
            </main>

            <Footer />

            {/* Detailed Split Information Modal Layer */}
            {activeService && (
                <div className="rec-modal-backdrop" onClick={() => setActiveService(null)}>
                    <div className="rec-modal-window" onClick={(e) => e.stopPropagation()}>

                        {/* Modal Header */}
                        <div style={{ position: 'sticky', top: 0, background: '#111827', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 48px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', zIndex: 10 }}>
                            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                                {activeService.title}
                            </h2>
                            <button
                                onClick={() => setActiveService(null)}
                                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', cursor: 'pointer', transition: 'all 0.2s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Complete Comprehensive Service Content Body */}
                        <div style={{ padding: '48px' }}>

                            {/* Executive Overview */}
                            <div style={{ marginBottom: '40px' }}>
                                <h4 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#06B6D4', marginBottom: '12px' }}>
                                    Executive Overview
                                </h4>
                                <p style={{ fontSize: '16px', color: '#E2E8F0', lineHeight: 1.7, margin: 0 }}>
                                    {activeService.longDesc}
                                </p>
                            </div>

                            <hr style={{ border: 0, height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '40px' }} />

                            {/* Two-Column Responsive Split Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

                                {/* Deliverables Block */}
                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF', marginBottom: '24px' }}>
                                        Core Deliverables
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        {activeService.points.map((pt, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                                                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.1)', color: '#06B6D4', flexShrink: 0, marginTop: '2px' }}>
                                                    <Check size={12} strokeWidth={3} />
                                                </span>
                                                <span style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.5 }}>{pt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Strategy and Benefits Column */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

                                    {/* Benefits Segment */}
                                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '20px', padding: '32px' }}>
                                        <h4 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF', marginBottom: '20px' }}>
                                            Strategic Value Added
                                        </h4>
                                        <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {activeService.benefits.map((b, bi) => (
                                                <li key={bi} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#E2E8F0' }}>
                                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06B6D4' }} />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Industry Segment */}
                                    <div>
                                        <h4 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF', marginBottom: '20px' }}>
                                            Target Industry Verticals
                                        </h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {activeService.industries.map((ind, indIdx) => {
                                                const IndustryIcon = IndustryIcons[ind] || Landmark;
                                                return (
                                                    <div key={indIdx} className="rec-industry-pill">
                                                        <IndustryIcon size={16} strokeWidth={1.5} />
                                                        <span>{ind}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Conversion Action Block */}
                                    <div style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, transparent 100%)', border: '1px solid rgba(6, 182, 212, 0.15)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                                        <h5 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                                            Ready to transform your global team?
                                        </h5>
                                        <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px', lineHeight: 1.5 }}>
                                            Consult our specialist advisors today to map out premium talent pipelines.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setActiveService(null);
                                                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                            }}
                                            style={{ width: '100%', padding: '16px', background: '#06B6D4', border: 0, borderRadius: '12px', color: '#070F20', fontWeight: 700, fontSize: '14px', cursor: 'pointer', transition: 'background 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = '#0891B2'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = '#06B6D4'}
                                        >
                                            <span>Contact Us</span>
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}