import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function RecruitmentIndex() {
    const services = [
        {
            title: "1. Permanent Placement & Direct Hire",
            desc: "We source, screen, and present exceptional candidates for permanent roles across all seniority levels — from entry-level professionals to C-suite executives. Our rigorous multi-stage evaluation process ensures only the most qualified, culturally aligned candidates reach your hiring team.",
            points: [
                "Comprehensive job profiling and role analysis in partnership with hiring managers",
                "Multi-channel talent sourcing: LinkedIn, job boards, referrals, proprietary databases",
                "AI-powered candidate matching and talent intelligence tools",
                "In-depth competency-based interviewing and behavioural assessments",
                "Background verification, reference checks, and credential validation",
                "Offer management, negotiation support, and onboarding coordination",
                "90-day replacement guarantee for permanent placements"
            ]
        },
        {
            title: "2. Contract & Temporary Staffing",
            desc: "Whether you need to scale your team for a peak season, a specific project, or a sudden surge in demand, our contract and temporary staffing solutions provide flexible, quality talent at speed. We manage the entire employee lifecycle — from recruitment through to payroll and compliance.",
            points: [
                "Rapid deployment of pre-vetted contract professionals within 24–72 hours",
                "Flexible engagement durations — days, weeks, months, or open-ended contracts",
                "Complete contractor management: payroll, tax compliance, insurance, and HR support",
                "On-site, hybrid, and remote working arrangements",
                "Contract-to-permanent conversion pathways for high-performing contractors"
            ]
        },
        {
            title: "3. Staff Augmentation — IT & Non-IT",
            desc: "Our Staff Augmentation model enables organisations to seamlessly extend their existing teams with skilled professionals who integrate into your workflows, tools, and culture — without the overheads of traditional hiring. We offer augmentation across both IT and Non-IT functions.",
            points: [
                "IT: Software Developers, Data Scientists, Cloud Architects, Cybersecurity, QA Engineers, ERP/CRM Consultants, Network Engineers, Project Managers, AI/ML Engineers",
                "Non-IT: Finance & Accounting, HR Business Partners, Sales & Business Development, Marketing, Supply Chain & Logistics, Legal & Compliance, Operations, Customer Service, Healthcare, Administrative"
            ]
        },
        {
            title: "4. Executive Search & Leadership Hiring",
            desc: "Finding the right leader can redefine an organisation's trajectory. Our executive search practice applies a discreet, research-led methodology to identify and attract transformational leaders across the C-suite, board, and senior management levels.",
            points: [
                "Retained and contingency executive search mandates",
                "Comprehensive market mapping and competitor talent intelligence",
                "Psychometric profiling, leadership assessments, and cultural fit evaluation",
                "Discreet, confidential search processes for sensitive mandates",
                "Global reach across US, UK, Europe, GCC, Asia, and beyond"
            ]
        },
        {
            title: "5. Managed Staffing Solutions (MSP / RPO)",
            desc: "For organisations with high-volume or ongoing recruitment needs, our Managed Staffing Solutions provide a fully outsourced or co-sourced model that delivers consistency, compliance, and cost efficiency at scale.",
            points: [
                "Recruitment Process Outsourcing (RPO): end-to-end talent acquisition management",
                "Master Vendor Staffing (MSP): single-point management of all staffing suppliers",
                "Dedicated on-site or embedded recruitment teams",
                "Standardised hiring processes, SLAs, and compliance frameworks",
                "Real-time hiring dashboards and workforce analytics reporting"
            ]
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
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: "var(--bg-main)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Header />

            <main style={{ flex: 1, paddingTop: '0px', overflow: 'hidden', position: 'relative' }}>

                {/* Premium Dark Hero Section */}
                <section style={{
                    maxWidth: "920px",
                    textAlign: "center",
                    background: "rgba(8,12,20,0.55)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "28px",
                    padding: "60px 55px",
                    boxShadow: "0 30px 80px rgba(0,0,0,.35)"
                }}>

                    {/* Video + Complex Dark Gradient Overlay */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.85) 100%)', zIndex: 2 }} />
                        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, filter: 'grayscale(40%)' }}>
                            <source src="/assets/images/about/global-Delivery-Network.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Hero Content */}
                    <div
                        style={{
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "0 32px",
                            position: "relative",
                            zIndex: 3,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "920px",
                                textAlign: "center",
                                background: "rgba(255,255,255,0.65)",
                                backdropFilter: "blur(16px)",
                                WebkitBackdropFilter: "blur(16px)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "28px",
                                padding: "60px 55px",
                                boxShadow: "0 30px 80px rgba(0,0,0,.35)",
                            }}
                        >
                            {/* Logo */}
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "28px",
                                }}
                            >
                                <img
                                    src="/assets/images/about/logo-only.png"
                                    alt="Logo"
                                    style={{
                                        height: "72px",
                                        width: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>

                            {/* Heading */}

                            <h1
                                style={{
                                    fontSize: "clamp(46px,6vw,72px)",
                                    lineHeight: 1.05,
                                    fontWeight: 800,
                                    letterSpacing: "-.04em",
                                    color: "#fff",
                                    marginBottom: "28px",
                                }}
                            >
                                Recruitment, Staffing &
                                <br />

                                <span
                                    style={{
                                        color: "rgb(34,211,238)",
                                    }}
                                >
                                    Talent Solutions
                                </span>
                            </h1>

                            {/* Description */}

                            <p
                                style={{
                                    fontSize: "19px",
                                    lineHeight: 1.8,
                                    color: "rgba(255,255,255,.78)",
                                    maxWidth: "700px",
                                    margin: "0 auto",
                                    textAlign: "center",
                                }}
                            >
                                Connecting organisations with exceptional talent through permanent
                                hiring, contract staffing, executive search, and workforce solutions
                                across global markets.
                            </p>
                        </div>
                    </div>

                    {/* Smooth Bottom Gradient Fade to Content Background */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "150px", background: "linear-gradient(to bottom, transparent, var(--bg-main))", zIndex: 4 }} />
                </section>

                {/* Services Section */}
                <section id="services" style={{ padding: '80px 40px 100px', maxWidth: '1280px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <span style={{ color: "var(--brand-teal)", fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Services</span>
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '800', color: "var(--text-primary)", marginTop: '8px', marginBottom: '16px' }}>
                            Recruitment Solutions Designed for Modern Businesses
                        </h2>
                        <p style={{ fontSize: '17px', color: "var(--text-muted)", maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                            A complete suite of recruitment and staffing services built to help organisations hire faster, smarter, and with complete compliance.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                        {services.map((srv, idx) => (
                            <div key={idx} style={{ background: "var(--bg-surface)", border: "1px solid var(--border-light)", borderRadius: '24px', padding: '40px', boxShadow: "var(--shadow-sm)" }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: "var(--brand-teal)", marginBottom: '16px' }}>{srv.title}</h3>
                                <p style={{ fontSize: '15px', color: "var(--text-muted)", lineHeight: 1.7, marginBottom: '24px' }}>{srv.desc}</p>
                                <ul style={{ margin: 0, paddingLeft: '20px', color: "var(--text-muted)", fontSize: '14.5px', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {srv.points.map((pt, i) => (
                                        <li key={i}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Geographic Footprint Section */}
                <section style={{ position: 'relative', background: "var(--bg-surface)", borderTop: "1px solid var(--border-light)", padding: '100px 40px', overflow: 'hidden' }}>

                    {/* Background Soft Layer */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-surface) 0%, rgba(255,255,255,0.4) 50%, var(--bg-surface) 100%)', zIndex: 2 }} />
                    </div>

                    <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '800', color: "var(--text-primary)", marginBottom: '48px', textAlign: 'center' }}>Our Geographic Footprint</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {footprints.map((fp, i) => (
                                <div key={i} style={{ background: "var(--bg-main)", padding: '32px', borderRadius: '16px', border: "1px solid var(--border-light)", borderTop: '4px solid var(--brand-teal)' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: "var(--text-primary)", marginBottom: '12px' }}>{fp.region}</h3>
                                    <p style={{ fontSize: '14.5px', color: "var(--text-muted)", margin: 0, lineHeight: 1.7 }}>{fp.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '80px', textAlign: 'center', maxWidth: '800px', margin: '80px auto 0' }}>
                            <h2 style={{ fontSize: '28px', fontWeight: '800', color: "var(--text-primary)", marginBottom: '24px' }}>Our Talent Promise</h2>
                            <p style={{ fontSize: '18px', color: "var(--text-muted)", lineHeight: 1.8 }}>
                                We don't fill roles — we build teams. Every candidate we present has been rigorously evaluated for technical competence, cultural alignment, and long-term potential. Our average time-to-shortlist is 48 hours. Our retention rate exceeds 92% at the 12-month mark. Your success is our metric.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}