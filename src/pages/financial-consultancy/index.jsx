import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function FinancialConsultancyIndex() {
    const services = [
        {
            title: "1. Accounting & Bookkeeping Services",
            desc: "We provide accurate, timely, and fully compliant accounting and bookkeeping services that keep your financial records in perfect order — giving you a clear and real-time view of your financial position at all times.",
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
            ]
        },
        {
            title: "2. Financial Reporting & Management Accounts",
            desc: "We transform raw financial data into meaningful management information that empowers decision-making at every level of your organisation.",
            points: [
                "Monthly, quarterly, and annual management accounts preparation",
                "Profit & Loss (Income Statement), Balance Sheet, and Cash Flow Statement preparation",
                "Variance analysis: actual vs. budget vs. prior period comparisons",
                "Key Performance Indicator (KPI) dashboards and financial performance scorecards",
                "Consolidated financial statements for group entities and subsidiaries",
                "Board-ready financial packs and investor reporting",
                "IFRS, US GAAP, UK GAAP, and local GAAP compliant reporting",
                "Financial commentary, narrative analysis, and actionable insights"
            ]
        },
        {
            title: "3. Tax Planning, Compliance & Advisory",
            desc: "Navigating the complexity of domestic and international tax obligations requires precision, expertise, and proactive planning. Our tax advisory team ensures full compliance while identifying legitimate opportunities to optimise your tax position.",
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
            ]
        },
        {
            title: "4. Payroll Management & HR Compliance",
            desc: "Payroll errors erode employee trust and expose businesses to significant compliance risk. Our payroll team delivers a seamless, accurate, and fully compliant payroll service tailored to your workforce structure.",
            points: [
                "End-to-end payroll processing for employees, contractors, and directors",
                "Payslip generation, payroll register maintenance, and year-end reconciliations",
                "Statutory deductions: PAYE, National Insurance, pension contributions, student loan repayments",
                "Auto-enrolment pension administration and compliance reporting",
                "P11D benefit-in-kind reporting and P60 / P45 management",
                "Salary benchmarking and remuneration structure advisory",
                "Multi-country payroll coordination for international workforces",
                "Payroll audit and compliance health checks"
            ]
        },
        {
            title: "5. Budgeting, Forecasting & Financial Planning",
            desc: "Proactive financial planning distinguishes thriving businesses from reactive ones. Our financial planning specialists work closely with your leadership team to build robust financial models that drive strategy and support growth.",
            points: [
                "Annual budget preparation in collaboration with department heads",
                "Rolling forecasts and re-forecasting models (13-week, quarterly, annual)",
                "Three-way financial model: integrated P&L, Balance Sheet, and Cash Flow projections",
                "Scenario planning: best case, base case, and stress-test modelling",
                "Cash flow forecasting and working capital management",
                "Sensitivity analysis and risk modelling",
                "Capital expenditure (CapEx) planning and investment appraisal",
                "Break-even analysis and profitability modelling by product, service, or segment"
            ]
        },
        {
            title: "6. Business Advisory & Strategic Financial Consultancy",
            desc: "Beyond numbers, we provide strategic counsel that helps business owners and executives make informed, confident decisions at critical junctures — whether launching, scaling, restructuring, or exiting.",
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
            ]
        },
        {
            title: "7. Audit Support & Internal Controls",
            desc: "We help organisations prepare for external audits, strengthen internal control frameworks, and build governance structures that protect assets and ensure regulatory compliance.",
            points: [
                "Statutory audit preparation and liaison with external auditors",
                "Internal audit co-sourcing and outsourcing",
                "Internal control framework design and implementation",
                "Process documentation: flowcharts, risk and control matrices (RCMs)",
                "Fraud risk assessment and anti-money laundering (AML) compliance review",
                "Sarbanes-Oxley (SOX) compliance support for US-listed entities",
                "Corporate governance advisory and board reporting"
            ]
        },
        {
            title: "8. CFO Advisory & Finance Function Outsourcing",
            desc: "Not every business needs a full-time CFO — but every business benefits from strategic financial leadership. Our Fractional CFO and Finance Function Outsourcing services give you access to board-level financial expertise at a fraction of the cost.",
            points: [
                "Fractional / Part-time CFO services for SMEs, scale-ups, and start-ups",
                "Finance department outsourcing: complete management of your financial function",
                "Financial health assessments and diagnostic reviews",
                "Finance team mentoring, coaching, and capability building",
                "ERP and accounting system implementation advisory (SAP, Oracle, NetSuite, Xero)",
                "KPI and financial governance framework design"
            ]
        },
        {
            title: "9. Compliance & Regulatory Advisory",
            desc: "",
            points: [
                "Companies House filings and statutory compliance (UK)",
                "SEC reporting support and US regulatory compliance",
                "Economic Substance Regulations (ESR) compliance in the UAE",
                "Anti-Bribery and Corruption (ABC) policy design and implementation",
                "GDPR-aligned financial data management practices",
                "Whistleblowing policies and ethical finance governance frameworks"
            ]
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: "var(--bg-main)", fontFamily: 'var(--font-family)' }}>
            <Header />

            <main style={{ flex: 1, paddingTop: '120px', overflow: 'hidden', position: 'relative' }}>
                <section style={{ padding: '0 40px 80px', textAlign: 'center' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '800', color: "var(--text-primary)", marginBottom: '24px', letterSpacing: '-0.03em' }}>
                            Financial Consultancy & Accounting Services
                        </h1>
                        <p style={{ fontSize: '18px', color: "var(--text-muted)", lineHeight: 1.8, marginBottom: '24px' }}>
                            Sound financial management is the backbone of sustainable business growth. JF Knowledge Centre's Financial Consultancy & Accounting Division offers a comprehensive suite of end-to-end financial services designed to provide clarity, compliance, and strategic direction for businesses of all sizes — from growing SMEs to complex multinational enterprises.
                        </p>
                        <p style={{ fontSize: '18px', color: "var(--text-muted)", lineHeight: 1.8 }}>
                            Our team of qualified Chartered Accountants, Certified Public Accountants (CPAs), financial analysts, and business advisory specialists brings together deep technical expertise and commercial acumen to support your financial health across every stage of your business lifecycle.
                        </p>
                    </div>
                </section>

                <section className="theme-section theme-section--light" style={{ padding: '40px 40px 100px', maxWidth: '1280px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', color: "var(--text-primary)", marginBottom: '48px', textAlign: 'center' }}>Our Financial Consultancy & Accounting Services</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                        {services.map((srv, idx) => (
                            <div key={idx} className="section-panel section-panel--light" style={{ padding: '40px' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: "var(--primary-light)", marginBottom: '16px' }}>{srv.title}</h3>
                                {srv.desc && (
                                    <p style={{ fontSize: '15px', color: "var(--text-muted)", lineHeight: 1.7, marginBottom: '24px' }}>{srv.desc}</p>
                                )}
                                <ul style={{ margin: 0, paddingLeft: '20px', color: "var(--text-muted)", fontSize: '14.5px', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {srv.points.map((pt, i) => (
                                        <li key={i}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '80px', textAlign: 'center', maxWidth: '800px', margin: '80px auto 0' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: '800', color: "var(--text-primary)", marginBottom: '24px' }}>Our Financial Services Promise</h2>
                        <p style={{ fontSize: '18px', color: "var(--text-muted)", lineHeight: 1.8 }}>
                            Numbers tell a story — we make sure yours is one of strength, clarity, and growth. Every engagement is led by qualified professionals with Big Four and top-tier industry experience, ensuring the highest standards of accuracy, confidentiality, and strategic value.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}