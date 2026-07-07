import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function ServicesPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-main)', fontFamily: 'var(--font-family)' }}>
            <Header />
            <main style={{ flex: 1, overflow: 'hidden', paddingTop: '80px' }}>
                <section className="theme-section theme-section--dark" style={{ padding: '120px 24px 80px', textAlign: 'center' }}>
                    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                        <span className="section-badge">SERVICES</span>
                        <h1 className="section-title" style={{ color: 'var(--text-primary)', marginTop: '18px' }}>
                            E-Learning | Recruitment & Staffing | Financial Consultancy
                        </h1>
                        <p className="section-copy" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '760px' }}>
                            JF Knowledge Centre offers three specialist divisions that work together to transform capability, talent and finance across your organisation.
                        </p>
                    </div>
                </section>

                <section className="theme-section theme-section--light" style={{ padding: '80px 24px' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gap: '32px' }}>
                        <div className="section-panel section-panel--light">
                            <span className="section-badge">DIVISION 1</span>
                            <h2 className="section-title" style={{ color: 'var(--text-on-light)', marginTop: '18px' }}>
                                E-Learning & Digital Learning Solutions
                            </h2>
                            <p className="section-copy" style={{ color: 'var(--text-on-light-muted)', marginTop: '16px' }}>
                                In today&apos;s fast-changing world, organisations must learn faster than the pace of disruption. JF Knowledge Centre&apos;s E-Learning Division is a full-service digital learning powerhouse that designs, develops, and deploys cutting-edge learning experiences tailored to your organisation&apos;s unique goals, culture, and workforce.
                            </p>
                            <p className="section-copy" style={{ color: 'var(--text-on-light-muted)', margin: '16px auto 0', maxWidth: '860px' }}>
                                We partner with L&D leaders, HR teams, and business heads to transform complex knowledge, skills, and compliance requirements into engaging, impactful, and measurable learning journeys — accessible anytime, anywhere, on any device.
                            </p>

                            <div style={{ display: 'grid', gap: '28px', marginTop: '36px' }}>
                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>1. Instructor-Led Training (ILT)</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        Instructor-Led Training remains one of the most powerful modalities for immersive, deep-dive learning. Our ILT programmes are expertly designed and facilitated by seasoned subject matter experts and certified trainers who bring real-world experience into the classroom.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Customised curriculum design aligned with business objectives and learning outcomes',
                                            'In-person training delivery at client premises, training centres, or conference venues',
                                            'Industry-specific programmes across leadership, technical, compliance, soft skills, and domain knowledge',
                                            'Pre- and post-training assessments to measure knowledge gain and ROI',
                                            'Comprehensive facilitator guides, participant workbooks, and support materials',
                                            'Training needs analysis (TNA) to identify skill gaps and recommend optimal programmes'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>2. Virtual Instructor-Led Training (VILT)</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        Our VILT solutions bring the richness of classroom learning to the digital environment. Leveraging industry-leading platforms such as Zoom, Microsoft Teams, Webex, and Adobe Connect, we deliver interactive, high-engagement virtual training experiences that rival in-person sessions.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Live, synchronous virtual training sessions hosted by expert facilitators',
                                            'Interactive features including polls, breakout rooms, whiteboards, and Q&A',
                                            'Cohort-based learning that fosters collaboration and peer engagement',
                                            'Hybrid VILT models combining recorded modules with live facilitated sessions',
                                            'Session recordings, transcripts, and post-session learning materials',
                                            'Multi-timezone delivery to support globally distributed teams',
                                            'Technical support and participant management throughout training delivery'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>3. Microlearning</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        Attention spans are shrinking and workloads are increasing. Microlearning delivers focused, bite-sized learning content designed to be consumed in 3–7 minutes — perfectly suited to the modern, on-the-go learner. Our microlearning solutions drive knowledge retention through repetition, relevance, and rapid accessibility.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Short-form video modules, animated explainers, and knowledge snippets',
                                            'Topic-specific skill pills that target individual learning objectives',
                                            'Mobile-first content optimised for smartphones and tablets',
                                            'Spaced repetition tools and push notification-based delivery',
                                            'Integrated quizzes and reinforcement activities for knowledge retention',
                                            'Just-in-time learning resources embedded within workflows and tools',
                                            'Rapid development with turnaround times of days, not months'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>4. Gamification</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        We harness the power of game mechanics to transform learning from a passive obligation into an energising experience. Our gamification frameworks apply behavioural psychology, motivational design, and technology to dramatically improve learner engagement, completion rates, and knowledge retention.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Points, badges, leaderboards, and rewards systems integrated into learning journeys',
                                            'Narrative-driven learning quests and scenario-based challenges',
                                            'Timed challenges, streak systems, and level progression structures',
                                            'Team-based competitions and collaborative missions',
                                            'Custom gamified assessments and knowledge-check games',
                                            'Real-time dashboards tracking learner progress, scores, and achievements',
                                            'Enterprise-grade gamification platforms compatible with existing LMS infrastructure'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>5. Learning Experience Platforms (LXP)</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        Moving beyond traditional Learning Management Systems, our LXP solutions place the learner at the centre, offering personalised, AI-driven, and socially collaborative learning environments. We help organisations select, configure, and implement the right LXP to drive a culture of continuous learning.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Advisory and consulting on LXP selection (Degreed, EdCast, Cornerstone, 360Learning, and more)',
                                            'Platform implementation, configuration, and integration with existing HR tech stack',
                                            'AI-powered content recommendations based on learner role, history, and goals',
                                            'Curated content libraries and third-party content aggregation (LinkedIn Learning, Coursera, Udemy)',
                                            'Social learning features including user-generated content, forums, and peer coaching',
                                            'Skills gap mapping and career pathing tools integrated within the platform',
                                            'Comprehensive analytics dashboards for learners, managers, and L&D teams',
                                            'Ongoing platform support, user training, and performance optimisation'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>6. Interactive PDFs</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        Interactive PDFs represent a powerful, cost-effective format for delivering rich, self-paced learning content without requiring an LMS. JF Knowledge Centre&apos;s design team creates visually stunning, highly functional interactive PDFs that feel more like digital experiences than static documents.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Clickable navigation, hyperlinks, and table of contents for seamless reading',
                                            'Embedded multimedia — video, audio, and animated infographics',
                                            'Fillable form fields for self-assessments, reflections, and action planning',
                                            'Pop-up glossary definitions, expandable content sections, and hover tooltips',
                                            'Brand-aligned design with custom typography, icons, and visual elements',
                                            'Universal accessibility — usable on all devices without internet connectivity',
                                            'Ideal for compliance documentation, onboarding guides, product training, and SOPs'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>7. Custom eLearning Development (SCORM / xAPI)</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        Our custom eLearning development team brings together instructional designers, visual artists, developers, and voice artists to craft fully bespoke digital learning modules that align with your brand, content, and learner needs.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'End-to-end development from storyboard to final delivery',
                                            'SCORM 1.2, SCORM 2004, xAPI (Tin Can), and AICC compliant outputs',
                                            'Authoring tool expertise: Articulate Storyline, Rise 360, Adobe Captivate, Lectora',
                                            'Scenario-based and branching simulations for real-world decision making',
                                            'Software simulations and system walkthroughs (ERP, CRM, proprietary tools)',
                                            'Multilingual development and voice-over in 30+ languages',
                                            'Accessibility compliance: WCAG 2.1 AA standards'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>8. Learning Management System (LMS) Services</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'LMS selection consulting and procurement support',
                                            'Implementation, configuration, and content migration',
                                            'Platform integration with HRMS, payroll, and talent management tools',
                                            'Custom reporting and analytics dashboards',
                                            'User administration, LMS management, and helpdesk support',
                                            'Compliance tracking and mandatory training workflows'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>9. Content Strategy & Instructional Design</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Comprehensive Training Needs Analysis (TNA) and skills gap assessments',
                                            'Learning architecture and curriculum mapping',
                                            'Blended learning journey design combining multiple modalities',
                                            'Assessment design: formative, summative, and competency-based evaluations',
                                            'Content curation, licensing, and third-party content sourcing'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="section-panel section-panel--light">
                            <span className="section-badge">DIVISION 2</span>
                            <h2 className="section-title" style={{ color: 'var(--text-on-light)', marginTop: '18px' }}>
                                Recruitment, Staffing & Talent Solutions
                            </h2>
                            <p className="section-copy" style={{ color: 'var(--text-on-light-muted)', marginTop: '16px' }}>
                                Talent is the single greatest driver of organisational success — and finding, attracting, and retaining the right talent has never been more challenging or more critical. JF Knowledge Centre&apos;s Recruitment & Staffing Division is a specialist talent partner with deep expertise across global markets and diverse industry verticals.
                            </p>
                            <p className="section-copy" style={{ color: 'var(--text-on-light-muted)', margin: '16px auto 0', maxWidth: '860px' }}>
                                We deliver end-to-end recruitment and staffing solutions across permanent placement, contract staffing, staff augmentation, and executive search — serving clients in the US, UK, Europe, GCC, and beyond.
                            </p>

                            <div style={{ display: 'grid', gap: '28px', marginTop: '36px' }}>
                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>1. Permanent Placement & Direct Hire</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        We source, screen, and present exceptional candidates for permanent roles across all seniority levels — from entry-level professionals to C-suite executives.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Comprehensive job profiling and role analysis in partnership with hiring managers',
                                            'Multi-channel talent sourcing: LinkedIn, job boards, referrals, proprietary databases',
                                            'AI-powered candidate matching and talent intelligence tools',
                                            'In-depth competency-based interviewing and behavioural assessments',
                                            'Background verification, reference checks, and credential validation',
                                            'Offer management, negotiation support, and onboarding coordination',
                                            '90-day replacement guarantee for permanent placements'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>2. Contract & Temporary Staffing</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        Whether you need to scale your team for a peak season, project, or surge in demand, our contract and temporary staffing solutions provide flexible, quality talent at speed.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Rapid deployment of pre-vetted contract professionals within 24–72 hours',
                                            'Flexible engagement durations — days, weeks, months, or open-ended contracts',
                                            'Complete contractor management: payroll, tax compliance, insurance, and HR support',
                                            'On-site, hybrid, and remote working arrangements',
                                            'Contract-to-permanent conversion pathways for high-performing contractors'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>3. Staff Augmentation — IT & Non-IT</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        Our Staff Augmentation model enables organisations to extend their teams with skilled professionals who integrate into your workflows, tools, and culture — without the overheads of traditional hiring.
                                    </p>
                                    <div style={{ display: 'grid', gap: '12px' }}>
                                        {[
                                            'Software Developers & Engineers (Frontend, Backend, Full Stack)',
                                            'Data Scientists, Data Engineers & BI Analysts',
                                            'Cloud Architects & DevOps Engineers (AWS, Azure, GCP)',
                                            'Cybersecurity Specialists & Penetration Testers',
                                            'QA Engineers, Automation Testers & Performance Analysts',
                                            'ERP Consultants (SAP, Oracle, Microsoft Dynamics)',
                                            'CRM Specialists (Salesforce, HubSpot, Microsoft CRM)',
                                            'Network Engineers, System Administrators & Infrastructure Specialists',
                                            'Project Managers, Scrum Masters & Product Owners',
                                            'AI/ML Engineers and Generative AI Specialists',
                                            'Finance & Accounting Professionals (Controllers, Analysts, Accountants)',
                                            'HR Business Partners, Talent Acquisition Specialists & Payroll Experts',
                                            'Sales & Business Development Managers',
                                            'Marketing Professionals, Content Strategists & Brand Managers',
                                            'Supply Chain, Procurement & Logistics Specialists',
                                            'Legal, Compliance & Risk Management Professionals',
                                            'Operations Managers & Business Analysts',
                                            'Customer Service & Contact Centre Professionals',
                                            'Healthcare Professionals (Nurses, Allied Health, Medical Coders)',
                                            'Administrative & Executive Support Professionals'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>4. Executive Search & Leadership Hiring</h3>
                                    <p style={{ color: 'var(--text-on-light-muted)', lineHeight: 1.8, marginBottom: '14px' }}>
                                        Our executive search practice applies a discreet, research-led methodology to identify and attract transformational leaders across the C-suite, board, and senior management levels.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Retained and contingency executive search mandates',
                                            'Comprehensive market mapping and competitor talent intelligence',
                                            'Psychometric profiling, leadership assessments, and cultural fit evaluation',
                                            'Discreet, confidential search processes for sensitive mandates',
                                            'Global reach across US, UK, Europe, GCC, Asia, and beyond'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>5. Managed Staffing Solutions (MSP / RPO)</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Recruitment Process Outsourcing (RPO): end-to-end talent acquisition management',
                                            'Master Vendor Staffing (MSP): single-point management of all staffing suppliers',
                                            'Dedicated on-site or embedded recruitment teams',
                                            'Standardised hiring processes, SLAs, and compliance frameworks',
                                            'Real-time hiring dashboards and workforce analytics reporting'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="section-panel section-panel--light">
                            <span className="section-badge">DIVISION 3</span>
                            <h2 className="section-title" style={{ color: 'var(--text-on-light)', marginTop: '18px' }}>
                                Financial Consultancy & Accounting Services
                            </h2>
                            <p className="section-copy" style={{ color: 'var(--text-on-light-muted)', marginTop: '16px' }}>
                                Sound financial management is the backbone of sustainable business growth. JF Knowledge Centre&apos;s Financial Consultancy & Accounting Division offers a comprehensive suite of end-to-end financial services designed to provide clarity, compliance, and strategic direction for businesses of all sizes.
                            </p>
                            <p className="section-copy" style={{ color: 'var(--text-on-light-muted)', margin: '16px auto 0', maxWidth: '860px' }}>
                                Our team of qualified Chartered Accountants, CPAs, financial analysts, and business advisory specialists brings together deep technical expertise and commercial acumen to support your financial health across every stage of your business lifecycle.
                            </p>

                            <div style={{ display: 'grid', gap: '28px', marginTop: '36px' }}>
                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>1. Accounting & Bookkeeping Services</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Day-to-day bookkeeping: recording of all financial transactions across income, expenses, assets, and liabilities',
                                            'Chart of accounts setup, maintenance, and optimisation',
                                            'Accounts payable (AP) management: invoice processing, supplier payment scheduling, and reconciliation',
                                            'Accounts receivable (AR) management: invoicing, collections, and debtor ageing reports',
                                            'Bank and credit card reconciliation — daily, weekly, or monthly',
                                            'General ledger maintenance and journal entry management',
                                            'Petty cash management and expense reimbursement processing',
                                            'Fixed assets register management and depreciation scheduling',
                                            'Payroll accounting and salary journal entries',
                                            'Multi-currency bookkeeping for international operations'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>2. Financial Reporting & Management Accounts</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Monthly, quarterly, and annual management accounts preparation',
                                            'Profit & Loss, Balance Sheet, and Cash Flow Statement preparation',
                                            'Variance analysis: actual vs. budget vs. prior period comparisons',
                                            'KPI dashboards and financial performance scorecards',
                                            'Consolidated financial statements for group entities and subsidiaries',
                                            'Board-ready financial packs and investor reporting',
                                            'IFRS, US GAAP, UK GAAP, and local GAAP compliant reporting',
                                            'Financial commentary, narrative analysis, and actionable insights'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>3. Tax Planning, Compliance & Advisory</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Corporate tax return preparation and filing (UK Corporation Tax, US Federal & State Tax, UAE Corporate Tax)',
                                            'VAT / GST registration, return filing, and advisory (UK, EU, UAE, and other jurisdictions)',
                                            'Personal income tax planning and self-assessment tax return filing',
                                            'Payroll tax compliance: PAYE, National Insurance, social security contributions',
                                            'Transfer pricing documentation and intercompany transaction management',
                                            'Tax-efficient structuring for business operations, acquisitions, and asset management',
                                            'R&D tax credit identification and claims',
                                            'Capital Gains Tax planning for business disposals and property transactions',
                                            'International tax advisory: double taxation treaties and cross-border tax planning',
                                            'Tax investigation support and HMRC / IRS correspondence management'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>4. Payroll Management & HR Compliance</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'End-to-end payroll processing for employees, contractors, and directors',
                                            'Payslip generation, payroll register maintenance, and year-end reconciliations',
                                            'Statutory deductions: PAYE, National Insurance, pension contributions, student loan repayments',
                                            'Auto-enrolment pension administration and compliance reporting',
                                            'P11D benefit-in-kind reporting and P60 / P45 management',
                                            'Salary benchmarking and remuneration structure advisory',
                                            'Multi-country payroll coordination for international workforces',
                                            'Payroll audit and compliance health checks'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>5. Budgeting, Forecasting & Financial Planning</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Annual budget preparation in collaboration with department heads',
                                            'Rolling forecasts and re-forecasting models',
                                            'Three-way financial model: integrated P&L, Balance Sheet, and Cash Flow projections',
                                            'Scenario planning: best case, base case, and stress-test modelling',
                                            'Cash flow forecasting and working capital management',
                                            'Sensitivity analysis and risk modelling',
                                            'Capital expenditure planning and investment appraisal',
                                            'Break-even analysis and profitability modelling by product, service, or segment'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>6. Business Advisory & Strategic Financial Consultancy</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Business start-up financial advisory: entity structuring, registration, and initial setup',
                                            'Growth strategy support: financial feasibility analysis and market entry modelling',
                                            'Mergers & Acquisitions advisory: due diligence, valuation, and integration support',
                                            'Business valuation reports for sale, acquisition, shareholder restructuring, or dispute resolution',
                                            'Investor pitch financial modelling and fundraising support',
                                            'Debt and equity financing advisory — preparation of lending packages and investor memoranda',
                                            'Working capital optimisation and cash flow improvement strategies',
                                            'Cost reduction and efficiency improvement programmes',
                                            'Profitability analysis and margin improvement advisory'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>7. Audit Support & Internal Controls</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Statutory audit preparation and liaison with external auditors',
                                            'Internal audit co-sourcing and outsourcing',
                                            'Internal control framework design and implementation',
                                            'Process documentation: flowcharts, risk and control matrices',
                                            'Fraud risk assessment and anti-money laundering compliance review',
                                            'SOX compliance support for US-listed entities',
                                            'Corporate governance advisory and board reporting'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>8. CFO Advisory & Finance Function Outsourcing</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Fractional / Part-time CFO services for SMEs, scale-ups, and start-ups',
                                            'Finance department outsourcing: complete management of your financial function',
                                            'Financial health assessments and diagnostic reviews',
                                            'Finance team mentoring, coaching, and capability building',
                                            'ERP and accounting system implementation advisory',
                                            'KPI and financial governance framework design'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>9. Compliance & Regulatory Advisory</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                                        {[
                                            'Companies House filings and statutory compliance (UK)',
                                            'SEC reporting support and US regulatory compliance',
                                            'Economic Substance Regulations compliance in the UAE',
                                            'Anti-Bribery and Corruption policy design and implementation',
                                            'GDPR-aligned financial data management practices',
                                            'Whistleblowing policies and ethical finance governance frameworks'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '12px', color: 'var(--text-on-light-muted)', lineHeight: 1.7 }}>
                                                <span style={{ color: 'var(--gold)', marginTop: '4px' }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="theme-section theme-section--dark" style={{ padding: '80px 24px 140px' }}>
                    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="section-panel section-panel--dark" style={{ padding: '64px 40px' }}>
                            <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Book an Appointment</h2>
                            <p className="section-copy" style={{ color: 'var(--text-secondary)', margin: '18px auto 32px', maxWidth: '760px' }}>
                                Speak with our team to explore a custom service package that combines learning, talent, and financial advisory into one powerful delivery suite.
                            </p>
                            <button className="jf-btn-primary jf-btn-primary-hero" onClick={() => navigate('/contact')}>
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
