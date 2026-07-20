import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CTA from '../../components/sections/CTASection';
import {
    ArrowRight,
    X,
    Check,
    Calculator,
    BarChart3,
    Receipt,
    Users,
    TrendingUp,
    Briefcase,
    ShieldCheck,
    ClipboardCheck,
    Landmark,
    HeartPulse,
    Factory,
    Laptop,
    GraduationCap,
    Clock,
    Layers,
    Sparkles,
    Compass,
    Image as ImageIcon
} from 'lucide-react';

export default function FinancialConsultancyIndex() {
    const [activeService, setActiveService] = useState(null);

    // Dynamic monochrome Lucide icon mapping
    const ServiceIcons = {
        accounting: Calculator,
        reporting: BarChart3,
        tax: Receipt,
        payroll: Users,
        budgeting: TrendingUp,
        advisory: Briefcase,
        audit: ShieldCheck,
        compliance: ClipboardCheck
    };

    // Mapping icons to industry verticals
    const IndustryIcons = {
        "Banking & Finance": Landmark,
        "Healthcare Systems": HeartPulse,
        "Enterprise Manufacturing": Factory,
        "Technology & SaaS": Laptop,
        "Education Holdings": GraduationCap
    };

    const services = [
        {
            id: "accounting",
            title: "Accounting & Bookkeeping Services",
            iconName: "accounting",
            level: "Core Foundation",
            duration: "Continuous Ops",
            modulesCount: "11 Frameworks",
            imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop", // Stock placeholder matching corporate/analytical tone
            shortDesc: "Accurate bookkeeping and financial management frameworks that keep your scaling business organized, fully compliant, and investment ready.",
            longDesc: "We provide accurate, timely, and fully compliant accounting and bookkeeping services that keep your financial records in perfect order — giving you a clear and real-time view of your financial position at all times.",
            chips: ["Bookkeeping", "AP & AR Ops", "Reconciliations", "Cloud Migration"],
            points: [
                "Day-to-day bookkeeping: recording of all financial transactions across income, expenses, assets, and liabilities",
                "Chart of accounts setup, maintenance, and optimisation",
                "Accounts payable (AP) management: invoice processing, supplier payment scheduling, and reconciliation",
                "Accounts receivable (AR) management: invoicing, collections, and debtor ageing reports",
                "Bank and credit card reconciliation — daily, weekly, or monthly",
                "General ledger maintenance and journal entry management",
                "Petty cash management and expense reimbursement processing",
                "Fixed assets register management and depreciation scheduling",
                "Payroll accounting and salary journal entries",
                "Multi-currency bookkeeping for international operations",
                "Cloud accounting on Xero, QuickBooks, Sage, Zoho Books, and NetSuite"
            ],
            benefits: ["Real-time cash flow metrics", "Audit-ready financial ledgers", "Seamless platform automation", "Mitigated operational leakage"],
            industries: ["Banking & Finance", "Healthcare Systems", "Technology & SaaS", "Enterprise Manufacturing"]
        },
        {
            id: "reporting",
            title: "Financial Reporting & Management Accounts",
            iconName: "reporting",
            level: "Executive Strategy",
            duration: "Monthly/Quarterly",
            modulesCount: "8 Deliverables",
            imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
            shortDesc: "Transform raw historical ledger entries into actionable corporate intelligence to drive executive-level decision making.",
            longDesc: "We transform raw financial data into meaningful management information that empowers decision-making at every level of your organisation.",
            chips: ["Management Accounts", "KPI Dashboards", "GAAP Compliance", "Board Packs"],
            points: [
                "Monthly, quarterly, and annual management accounts preparation",
                "Profit & Loss (Income Statement), Balance Sheet, and Cash Flow Statement preparation",
                "Variance analysis: actual vs. budget vs. prior period comparisons",
                "Key Performance Indicator (KPI) dashboards and financial performance scorecards",
                "Consolidated financial statements for group entities and subsidiaries",
                "Board-ready financial packs and investor reporting",
                "IFRS, US GAAP, UK GAAP, and local GAAP compliant reporting",
                "Financial commentary, narrative analysis, and actionable insights"
            ],
            benefits: ["Transparent investor reporting", "Granular performance clarity", "Frictionless regulatory compliance", "Accelerated strategic response"],
            industries: ["Banking & Finance", "Enterprise Manufacturing", "Technology & SaaS"]
        },
        {
            id: "tax",
            title: "Tax Planning, Compliance & Advisory",
            iconName: "tax",
            level: "Advanced Oversight",
            duration: "Annual Strategy",
            modulesCount: "10 Directives",
            imageUrl: "/assets/images/about/taxplan.jpg",
            shortDesc: "Strategic cross-border tax positioning and proactive compliance optimization built to safeguard your operating margins.",
            longDesc: "Navigating the complexity of domestic and international tax obligations requires precision, expertise, and proactive planning. Our tax advisory team ensures full compliance while identifying legitimate opportunities to optimise your tax position.",
            chips: ["Corporate & VAT", "Transfer Pricing", "R&D Tax Credits", "IRS/HMRC Liaison"],
            points: [
                "Corporate tax return preparation and filing (UK Corporation Tax, US Federal & State Tax, UAE Corporate Tax)",
                "VAT / GST registration, return filing, and advisory (UK, EU, UAE, and other jurisdictions)",
                "Personal income tax planning and self-assessment tax return filing",
                "Payroll tax compliance: PAYE, National Insurance, social security contributions",
                "Transfer pricing documentation and intercompany transaction management",
                "Tax-efficient structuring for business operations, acquisitions, and asset management",
                "R&D tax credit identification and claims",
                "Capital Gains Tax (CGT) planning for business disposals and property transactions",
                "International tax advisory: double taxation treaties and cross-border tax planning",
                "Tax investigation support and HMRC / IRS correspondence management"
            ],
            benefits: ["Optimized global tax structures", "Zero regulatory penalty exposure", "Maximized R&D capital recovery", "Structured risk containment"],
            industries: ["Enterprise Manufacturing", "Technology & SaaS", "Banking & Finance"]
        },
        {
            id: "payroll",
            title: "Payroll Management & HR Compliance",
            iconName: "payroll",
            level: "Operational Core",
            duration: "Cyclical Processing",
            modulesCount: "8 Protocols",
            imageUrl: "https://images.unsplash.com/photo-1521791136066-848f0856b4f6?q=80&w=600&auto=format&fit=crop",
            shortDesc: "Flawless end-to-end multi-currency payroll distribution systems engineered to minimize risk and enforce strict labor compliance.",
            longDesc: "Payroll errors erode employee trust and expose businesses to significant compliance risk. Our payroll team delivers a seamless, accurate, and fully compliant payroll service tailored to your workforce structure.",
            chips: ["Auto-Enrolment", "Remuneration Design", "Statutory Filings", "Contractor Payroll"],
            points: [
                "End-to-end payroll processing for employees, contractors, and directors",
                "Payslip generation, payroll register maintenance, and year-end reconciliations",
                "Statutory deductions: PAYE, National Insurance, pension contributions, student loan repayments",
                "Auto-enrolment pension administration and compliance reporting",
                "P11D benefit-in-kind reporting and P60 / P45 management",
                "Salary benchmarking and remuneration structure advisory",
                "Multi-country payroll coordination for international workforces",
                "Payroll audit and compliance health checks"
            ],
            benefits: ["Guaranteed execution timeline", "Total statutory compliance transparency", "Resource relief for internal HR", "Protected workforce integrity"],
            industries: ["Education Holdings", "Healthcare Systems", "Technology & SaaS"]
        },
        {
            id: "budgeting",
            title: "Budgeting, Forecasting & Financial Planning",
            iconName: "budgeting",
            level: "Strategic Growth",
            duration: "Forward Dynamic",
            modulesCount: "8 Frameworks",
            imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
            shortDesc: "Predictive forward-looking financial architecture including 3-way cash flow models to comfortably sustain corporate expansion.",
            longDesc: "Proactive financial planning distinguishes thriving businesses from reactive ones. Our financial planning specialists work closely with your leadership team to build robust financial models that drive strategy and support growth.",
            chips: ["3-Way Modeling", "Scenario Testing", "CapEx Appraisals", "13-Week Forecasts"],
            points: [
                "Annual budget preparation in collaboration with department heads",
                "Rolling forecasts and re-forecasting models (13-week, quarterly, annual)",
                "Three-way financial model: integrated P&L, Balance Sheet, and Cash Flow projections",
                "Scenario planning: best case, base case, and stress-test modelling",
                "Cash flow forecasting and working capital management",
                "Sensitivity analysis and risk modelling",
                "Capital expenditure (CapEx) planning and investment appraisal",
                "Break-even analysis and profitability modelling by product, service, or segment"
            ],
            benefits: ["Defensible fundraising models", "Proactive liquidity positioning", "De-risked market initiatives", "Granular performance visibility"],
            industries: ["Technology & SaaS", "Enterprise Manufacturing", "Banking & Finance"]
        },
        {
            id: "advisory",
            title: "Business Advisory & Strategic Consultancy",
            iconName: "advisory",
            level: "Corporate Tier",
            duration: "Milestone Guided",
            modulesCount: "9 Directives",
            imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
            shortDesc: "Sophisticated corporate finance structuring, objective valuations, and tactical advisory for transactional milestones.",
            longDesc: "Beyond numbers, we provide strategic counsel that helps business owners and executives make informed, confident decisions at critical junctures — whether launching, launching, scaling, restructuring, or exiting.",
            chips: ["M&A Structuring", "Corporate Valuation", "Fundraising Prep", "Margin Optimisation"],
            points: [
                "Business start-up financial advisory: entity structuring, registration, and initial setup",
                "Growth strategy support: financial feasibility analysis and market entry modelling",
                "Mergers & Acquisitions (M&A) advisory: due diligence, valuation, and integration support",
                "Business valuation reports for sale, acquisition, shareholder restructuring, or dispute resolution",
                "Investor pitch financial modelling and fundraising support",
                "Debt and equity financing advisory — preparation of lending packages and investor memoranda",
                "Working capital optimisation and cash flow improvement strategies",
                "Cost reduction and efficiency improvement programmes",
                "Profitability analysis and margin improvement advisory"
            ],
            benefits: ["Optimized transaction values", "Accelerated due diligence execution", "Configured capital cost structures", "Objective strategic alignment"],
            industries: ["Banking & Finance", "Technology & SaaS", "Enterprise Manufacturing"]
        },
        {
            id: "audit",
            title: "Audit Support & Internal Controls",
            iconName: "audit",
            level: "Governance Elite",
            duration: "Systemic Review",
            modulesCount: "7 Checkpoints",
            imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
            shortDesc: "Rigorous diagnostic validation of internal control matrices to insulate operational governance from systemic risk.",
            longDesc: "We help organisations prepare for external audits, strengthen internal control frameworks, and build governance structures that protect assets and ensure regulatory compliance.",
            chips: ["External Audit Prep", "SOX Frameworks", "Fraud Risk Mitigation", "Process Flowcharts"],
            points: [
                "Statutory audit preparation and liaison with external auditors",
                "Internal audit co-sourcing and outsourcing",
                "Internal control framework design and implementation",
                "Process documentation: flowcharts, risk and control matrices (RCMs)",
                "Fraud risk assessment and anti-money laundering (AML) compliance review",
                "Sarbanes-Oxley (SOX) compliance support for US-listed entities",
                "Corporate governance advisory and board reporting"
            ],
            benefits: ["Reduced external auditor fees", "Hardened anti-fraud defense", "Strengthened board governance", "Eliminated process operational gaps"],
            industries: ["Banking & Finance", "Healthcare Systems", "Education Holdings"]
        },
        {
            id: "compliance",
            title: "Compliance & Regulatory Advisory",
            iconName: "compliance",
            level: "Global Integrity",
            duration: "Adaptive Continuous",
            modulesCount: "6 Frameworks",
            imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
            shortDesc: "Cross-border compliance frameworks ensuring absolute operational continuity across variable international architectures.",
            longDesc: "Ensuring cross-border integrity, our advisory protocols build absolute administrative compliance within international operating frameworks.",
            chips: ["Companies House", "SEC Frameworks", "ESR Directives (UAE)", "Data Governance"],
            points: [
                "Companies House filings and statutory compliance (UK)",
                "SEC reporting support and US regulatory compliance",
                "Economic Substance Regulations (ESR) compliance in the UAE",
                "Anti-Bribery and Corruption (ABC) policy design and implementation",
                "GDPR-aligned financial data management practices",
                "Whistleblowing policies and ethical finance governance frameworks"
            ],
            benefits: ["Insulated multi-national presence", "Enforced data governance protocols", "Ethical enterprise integrity", "Proactive dynamic regulatory alignment"],
            industries: ["Banking & Finance", "Technology & SaaS", "Enterprise Manufacturing"]
        }
    ];

    return (
        <div style={{ background: '#0B0F19', color: '#F8FAFC', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
            <Header />

            {/* Premium E-Learning & Hero System CSS Injector */}
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
                    justify-content: flex-start;
                    overflow: hidden;
                    cursor: pointer;
                    height: 480px;
                    box-sizing: border-box;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .rec-card-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    background: #1F2937;
                }
                .rec-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    opacity: 0.75;
                }
                .rec-editorial-card:hover .rec-card-image {
                    transform: scale(1.08);
                    opacity: 0.9;
                }
                
                .rec-card-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 40%, #111827 100%);
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
                
                /* Modal Layer */
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

                /* Enhanced Hero UI Layout classes */
                .rec-hero-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background: #070F20;
                    overflow: hidden;
                    width: 100%;
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
                }
                .rec-hero-overlay-left {
                    position: absolute;
                    top: 0; left: 0; bottom: 0; width: 60%;
                    background: linear-gradient(90deg, #070F20 0%, rgba(7,15,32,0.92) 50%, rgba(7,15,32,0.4) 100%);
                    z-index: 1;
                    backdrop-filter: blur(4px);
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
                `
            }} />

            <main style={{ flex: 1, position: 'relative' }}>

                {/* Premium Editorial Split Hero Section with Video Background */}
                <section className="rec-hero-container">
                    {/* Background Video Component */}
                    <div className="rec-hero-video-wrapper">
                        <video
                            className="rec-hero-video"
                            autoPlay
                            loop
                            muted
                            playsInline

                        >
                            <source src="/assets/images/about/financebg.mp4" type="video/mp4" />
                        </video>
                        <div className="rec-hero-overlay-left" />
                        <div className="rec-hero-overlay-right" />
                    </div>
                    <div className="rec-hero-grid-bg" />
                    <div className="rec-hero-glow-tl" />
                    <div className="rec-hero-glow-br" />

                    <div className="rec-hero-split">
                        {/* Left Content Column */}
                        <div className="rec-hero-left">
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: '#10B981', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px', padding: '6px 14px', marginBottom: 24, textTransform: 'uppercase' }}>
                                <Sparkles size={12} style={{ color: '#10B981' }} />
                                Elite Strategic Financial Frameworks
                            </div>

                            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', margin: '0 0 24px 0', lineHeight: 1.15 }}>
                                Master Your Enterprise <br />
                                <span style={{ background: 'linear-gradient(90deg, #10B981, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Fiscal Architectures</span>
                            </h1>

                            <p style={{ fontSize: '17px', color: '#94A3B8', lineHeight: 1.7, marginBottom: 36, fontWeight: 400 }}>
                                Demystify global compliance frameworks and optimize cash positions. JF Knowledge Centre pairs elite strategic financial oversight with modern regulatory structural models tailored for ambitious scaling enterprises.
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <button
                                    onClick={() => document.getElementById('explore-services').scrollIntoView({ behavior: 'smooth' })}
                                    className="rec-btn-primary"
                                >
                                    <span>Browse Service Tracks</span>
                                    <ArrowRight size={18} className="rec-btn-arrow" />
                                </button>
                            </div>
                        </div>

                        {/* Right Decorative Micro-Interaction Column */}
                        <div className="rec-hero-right">
                            {/* Floating Analytics Snapshot 1 */}


                            {/* Floating Diagnostic Ledger 2 */}
                            <div className="rec-floating-card-2">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Compliance Matrix</span>
                                    <Compass size={16} style={{ color: '#06B6D4' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#CBD5E1' }}>
                                        <Check size={14} style={{ color: '#10B981' }} /> GAAP & IFRS Audited
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#CBD5E1' }}>
                                        <Check size={14} style={{ color: '#10B981' }} /> Risk Shield Configured
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#CBD5E1' }}>
                                        <Check size={14} style={{ color: '#10B981' }} /> Multi-currency Ready
                                    </div>
                                </div>
                            </div>

                            {/* Center Ambient Sphere Artpiece */}
                            <div style={{ width: '300px', height: '300px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(6,186,212,0.05) 100%)', border: '1px solid rgba(255,255,255,0.03)', position: 'absolute', zIndex: 1, pointerEvents: 'none' }} />
                        </div>
                    </div>
                </section>

                {/* E-Learning Main Content Grid Layer */}
                <div id="explore-services" style={{ padding: '80px 24px 100px 24px', maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

                    {/* Centered Modern Section Header */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: '#10B981', textTransform: 'uppercase', marginBottom: '12px' }}>
                            Curated Knowledge Portfolios
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                            Explore Our Specialized Service Tracks
                        </h2>
                        <div style={{ width: '60px', height: '4px', background: '#10B981', borderRadius: '2px', marginTop: '16px' }} />
                    </div>

                    {/* Standardized E-Learning Style Cards Grid */}
                    <div className="rec-premium-grid">
                        {services.map((srv, idx) => {
                            const IconComponent = ServiceIcons[srv.iconName] || Calculator;

                            return (
                                <div
                                    key={idx}
                                    className={`rec-editorial-card rec-stagger-card ${idx % 2 === 0 ? 'rec-card-dark' : 'rec-card-light'}`}
                                    style={{ animationDelay: `${idx * 0.08}s` }}
                                    onClick={() => setActiveService(srv)}
                                >
                                    {/* Image Section Added Here */}
                                    <div className="rec-card-image-wrapper">
                                        <img
                                            src={srv.imageUrl || "/assets/images/services/placeholder.jpg"}
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
                                            background: 'linear-gradient(180deg, #10B981, #06B6D4)'
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
                                            color: '#10B981',
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

                    {/* Integrated Trust Banner */}
                    <div className="edu-fade-in" style={{ marginTop: '48px', background: 'linear-gradient(135deg, #131B2E 0%, rgba(19,27,46,0.4) 100%)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                            The Corporate Learning Mandate
                        </h3>
                        <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.6, maxWidth: '800px', margin: 0 }}>
                            Numbers dictate strategies. Every track within our catalog is curated by enterprise advisors with comprehensive top-tier firm backgrounds, transforming transactional operations into robust modules optimized for scalability.
                        </p>
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