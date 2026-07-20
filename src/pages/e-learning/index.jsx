import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import {
    GraduationCap,
    Video,
    Zap,
    Gamepad2,
    Cpu,
    FileText,
    Code,
    Layers,
    BookOpen,
    Check,
    X,
    ArrowRight,
    Landmark,
    HeartPulse,
    Factory,
    Laptop,
    ShieldAlert,
    ChevronDown,
    Sparkles,
    BarChart3,
    Compass
} from 'lucide-react';

export default function ElearningIndex() {
    const [activeService, setActiveService] = useState(null);

    // Icon Mapping
    const ServiceIcons = {
        ilt: GraduationCap,
        vilt: Video,
        micro: Zap,
        game: Gamepad2,
        lxp: Cpu,
        pdf: FileText,
        custom: Code,
        lms: Layers,
        strategy: BookOpen
    };

    const IndustryIcons = {
        "Banking & Financial Services": Landmark,
        "Healthcare & Life Sciences": HeartPulse,
        "Manufacturing & Engineering": Factory,
        "Technology & IT": Laptop
    };

    const services = [
        {
            id: "ilt",
            title: "Instructor-Led Training (ILT)",
            iconName: "ilt",
            imageSrc: "/assets/images/about/card6.png", // Add your image path here
            shortDesc: "Immersive learning designed and facilitated by seasoned SMEs to bridge critical capability gaps in modern working environments.",
            longDesc: "Instructor-Led Training remains one of the most powerful modalities for immersive, deep-dive learning. Our ILT programmes are expertly designed and facilitated by seasoned subject matter experts and certified trainers who bring real-world experience into the classroom.",
            chips: ["Expert Facilitated", "On-Premises", "Competency Mapping", "Action Workbooks"],
            points: [
                "Customised curriculum design aligned with business objectives and learning outcomes",
                "In-person training delivery at client premises, training centres, or conference venues",
                "Industry-specific programmes across leadership, technical, compliance, soft skills, and domain knowledge",
                "Pre- and post-training assessments to measure knowledge gain and ROI",
                "Comprehensive facilitator guides, participant workbooks, and support materials",
                "Training needs analysis (TNA) to identify skill gaps and recommend optimal programmes"
            ],
            benefits: ["Maximized knowledge retention", "Direct real-world cohort communication", "Immediate competency feedback", "Tailored learning loops"],
            industries: ["Banking & Financial Services", "Healthcare & Life Sciences", "Manufacturing & Engineering"]
        },
        {
            id: "vilt",
            title: "Virtual Instructor-Led Training (VILT)",
            iconName: "vilt",
            imageSrc: "/assets/images/about/card1.png",
            shortDesc: "Rich, highly-interactive classroom environments delivered entirely through leading live digital collaboration systems.",
            longDesc: "Our VILT solutions bring the richness of classroom learning to the digital environment. Leveraging industry-leading platforms such as Zoom, Microsoft Teams, Webex, and Adobe Connect, we deliver interactive, high-engagement virtual training experiences that rival in-person sessions.",
            chips: ["Live Synchronous", "Breakout Management", "Global Distribution", "Recorded Assets"],
            points: [
                "Live, synchronous virtual training sessions hosted by expert facilitators",
                "Interactive features including polls, breakout rooms, whiteboards, and Q&A",
                "Cohort-based learning that fosters collaboration and peer engagement",
                "Hybrid VILT models combining recorded modules with live facilitated sessions",
                "Session recordings, transcripts, and post-session learning materials",
                "Multi-timezone delivery to support globally distributed teams",
                "Technical support and participant management throughout training delivery"
            ],
            benefits: ["Eliminated organizational travel overhead", "Scalable worldwide deployment", "Interactive social touchpoints", "Flexible asynchronous hybrid additions"],
            industries: ["Banking & Financial Services", "Technology & IT", "Healthcare & Life Sciences"]
        },
        {
            id: "micro",
            title: "Microlearning",
            iconName: "micro",
            imageSrc: "/assets/images/about/card6.png",
            shortDesc: "Bite-sized, focused content engineered for high retention and seamless consumption inside busy modern workflows.",
            longDesc: "Attention spans are shrinking and workloads are increasing. Microlearning delivers focused, bite-sized learning content designed to be consumed in 3–7 minutes — perfectly suited to the modern, on-the-go learner. Our microlearning solutions drive knowledge retention through repetition, relevance, and rapid accessibility.",
            chips: ["Mobile-First", "Workflow-Embedded", "Rapid Turnaround", "Spaced Repetition"],
            points: [
                "Short-form video modules, animated explainers, and knowledge snippets",
                "Topic-specific skill pills that target individual learning objectives",
                "Mobile-first content optimised for smartphones and tablets",
                "Spaced repetition tools and push notification-based delivery",
                "Integrated quizzes and reinforcement activities for knowledge retention",
                "Just-in-time learning resources embedded within workflows and tools",
                "Rapid development with turnaround times of days, not months"
            ],
            benefits: ["Frictionless employee access", "High engagement curves", "Direct just-in-time support", "Accelerated asset iteration cycles"],
            industries: ["Technology & IT", "Manufacturing & Engineering", "Banking & Financial Services"]
        },
        {
            id: "game",
            title: "Gamification",
            iconName: "game",
            imageSrc: "/assets/images/about/card6.png",
            shortDesc: "Behavioral psychology meets interactive technology to turn training into an engaging, gamified competitive experience.",
            longDesc: "We harness the power of game mechanics to transform learning from a passive obligation into an energising experience. Our gamification frameworks apply behavioural psychology, motivational design, and technology to dramatically improve learner engagement, completion rates, and knowledge retention.",
            chips: ["Behavioral Quests", "Real-Time Leaderboards", "Custom Challenges", "Rewards Alignment"],
            points: [
                "Points, badges, leaderboards, and rewards systems integrated into learning journeys",
                "Narrative-driven learning quests and scenario-based challenges",
                "Timed challenges, streak systems, and level progression structures",
                "Team-based competitions and collaborative missions",
                "Custom gamified assessments and knowledge-check games",
                "Real-time dashboards tracking learner progress, scores, and achievements",
                "Enterprise-grade gamification platforms compatible with existing LMS infrastructure"
            ],
            benefits: ["Dramatically elevated completion rates", "Active self-motivated progression", "Healthy collaborative competition", "Deep cognitive retention"],
            industries: ["Technology & IT", "Banking & Financial Services", "Healthcare & Life Sciences"]
        },
        {
            id: "lxp",
            title: "Learning Experience Platforms (LXP)",
            iconName: "lxp",
            imageSrc: "/assets/images/about/card6.png",
            shortDesc: "Consultation and deployment of modern personalized, AI-driven, and socially-collaborative corporate learning platforms.",
            longDesc: "Moving beyond traditional Learning Management Systems, our LXP solutions place the learner at the centre, offering personalised, AI-driven, and socially collaborative learning environments. We help organisations select, configure, and implement the right LXP to drive a culture of continuous learning.",
            chips: ["AI Customizations", "Social Learning Hubs", "System Integration", "Dynamic Metrics"],
            points: [
                "Advisory and consulting on LXP selection (Degreed, EdCast, Cornerstone, 360Learning, and more)",
                "Platform implementation, configuration, and integration with existing HR tech stack",
                "AI-powered content recommendations based on learner role, history, and goals",
                "Curated content libraries and third-party content aggregation (LinkedIn Learning, Coursera, Udemy)",
                "Social learning features including user-generated content, forums, and peer coaching",
                "Skills gap mapping and career pathing tools integrated within the platform",
                "Comprehensive analytics dashboards for learners, managers, and L&D teams",
                "Ongoing platform support, user training, and performance optimisation"
            ],
            benefits: ["Self-directed talent continuous education", "Centralized multi-source content integration", "Skill gap insight reporting", "Enhanced digital employee branding"],
            industries: ["Technology & IT", "Banking & Financial Services", "Healthcare & Life Sciences"]
        },
        {
            id: "pdf",
            title: "Interactive PDFs",
            iconName: "pdf",
            imageSrc: "/assets/images/about/card6.png",
            shortDesc: "Beautifully designed, self-contained interactive media documents that deliver deep learning experiences without an LMS.",
            longDesc: "Interactive PDFs represent a powerful, cost-effective format for delivering rich, self-paced learning content without requiring an LMS. JF Knowledge Centre's design team creates visually stunning, highly functional interactive PDFs that feel more like digital experiences than static documents.",
            chips: ["Zero LMS Overhead", "Embedded Multimedia", "Offline Functional", "Fillable Forms"],
            points: [
                "Clickable navigation, hyperlinks, and table of contents for seamless reading",
                "Embedded multimedia — video, audio, and animated infographics",
                "Fillable form fields for self-assessments, reflections, and action planning",
                "Pop-up glossary definitions, expandable content sections, and hover tooltips",
                "Brand-aligned design with custom typography, icons, and visual elements",
                "Universal accessibility — usable on all devices without internet connectivity",
                "Ideal for compliance documentation, onboarding guides, product training, and SOPs"
            ],
            benefits: ["Low cost, high-speed development", "Highly portable self-contained layout", "Universal offline cross-device execution", "Zero integration complexities"],
            industries: ["Manufacturing & Engineering", "Healthcare & Life Sciences", "Banking & Financial Services"]
        },
        {
            id: "custom",
            title: "Custom eLearning Development (SCORM / xAPI)",
            iconName: "custom",
            imageSrc: "/assets/images/about/card6.png",
            shortDesc: "End-to-end storyboard-to-deployment engineering of compliance-focused, rich interactive digital courses.",
            longDesc: "Our custom eLearning development team brings together instructional designers, visual artists, developers, and voice artists to craft fully bespoke digital learning modules that align with your brand, content, and learner needs.",
            chips: ["SCORM/xAPI Compliant", "Storyline & Rise Expert", "Branching Simulations", "WCAG 2.1 Accessible"],
            points: [
                "End-to-end development from storyboard to final delivery",
                "SCORM 1.2, SCORM 2004, xAPI (Tin Can), and AICC compliant outputs",
                "Authoring tool expertise: Articulate Storyline, Rise 360, Adobe Captivate, Lectora",
                "Scenario-based and branching simulations for real-world decision making",
                "Software simulations and system walkthroughs (ERP, CRM, proprietary tools)",
                "Multilingual development and voice-over in 30+ languages",
                "Accessibility compliance: WCAG 2.1 AA standards"
            ],
            benefits: ["Exact alignment with corporate workflows", "Traceable, granular learner analytics", "Global localization potential", "Inclusive, standard-compliant assets"],
            industries: ["Healthcare & Life Sciences", "Technology & IT", "Manufacturing & Engineering"]
        },
        {
            id: "lms",
            title: "Learning Management System (LMS) Services",
            iconName: "lms",
            imageSrc: "/assets/images/about/card2.png",
            shortDesc: "Strategic architecture alignment, implementation, and integration of system portals to track mandatory qualifications.",
            longDesc: "Comprehensive architecture alignment and systems management strategies engineered to deploy, measure, and scale enterprise qualification structures seamlessly across modern operating frameworks.",
            chips: ["Platform Consulting", "Platform Integrations", "Compliance Automated", "LMS Administration"],
            points: [
                "LMS selection consulting and procurement support",
                "Implementation, configuration, and content migration",
                "Platform integration with HRMS, payroll, and talent management tools",
                "Custom reporting and analytics dashboards",
                "User administration, LMS management, and helpdesk support",
                "Compliance tracking and mandatory training workflows"
            ],
            benefits: ["Centralized management oversight", "Automated regulatory reporting logs", "Consolidated software spending", "Minimized internal admin burden"],
            industries: ["Banking & Financial Services", "Healthcare & Life Sciences", "Manufacturing & Engineering"]
        },
        {
            id: "strategy",
            title: "Content Strategy & Instructional Design",
            iconName: "strategy",
            imageSrc: "/assets/images/about/card6.png",
            shortDesc: "High-level diagnostic blueprinting mapping structural business targets directly into targeted training journeys.",
            longDesc: "Structuring deep core data alignment blueprints to safely bridge structural competence gaps, optimizing learning acquisition speed and modern long-term organizational knowledge retention rates.",
            chips: ["Training Needs Audits", "Path Mapping", "Blended Architectures", "Competency Assessments"],
            points: [
                "Comprehensive Training Needs Analysis (TNA) and skills gap assessments",
                "Learning architecture and curriculum mapping",
                "Blended learning journey design combining multiple modalities",
                "Assessment design: formative, summative, and competency-based evaluations",
                "Content curation, licensing, and third-party content sourcing"
            ],
            benefits: ["Strict alignment to strategic goals", "Optimized content production pathways", "Clear metrics of training ROI", "Accelerated path-to-performance times"],
            industries: ["Banking & Financial Services", "Healthcare & Life Sciences", "Technology & IT"]
        }
    ];

    const industries = [
        "Banking & Financial Services", "Healthcare & Life Sciences", "Manufacturing & Engineering",
        "Retail & FMCG", "Technology & IT", "Oil & Gas", "Hospitality & Travel",
        "Government & Public Sector", "Education & Professional Services"
    ];

    return (
        <div style={{ background: '#0F172A', color: '#F8FAFC', fontFamily: 'var(--font-family, "Inter", sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
            <Header />

            {/* Micro-Interactions, Keyframes, and Grid Architecture Layouts */}
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

                {/* Full-Screen Premium Left/Right composition Hero Section */}
                <section className="rec-hero-container">

                    {/* Underlying Dynamic Assets & Graphic Overlays */}
                    <div className="rec-hero-video-wrapper">
                        <video autoPlay loop muted playsInline className="rec-hero-video">
                            <source src="/assets/images/about/e-learning.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Directional Dual Layer Readability Overlays */}
                    <div className="rec-hero-overlay-left" />
                    <div className="rec-hero-overlay-right" />

                    {/* Grid Pattern and radial glow depth canvas */}
                    <div className="rec-hero-grid-bg" />
                    <div className="rec-hero-glow-tl" />
                    <div className="rec-hero-glow-br" />

                    <div className="rec-hero-split">

                        {/* Left Content Column Frame */}
                        <div className="rec-hero-left" style={{ animation: 'heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both' }}>

                            {/* Frosted Glass Premium Badge Capsule */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                fontSize: '11px',
                                fontWeight: 800,
                                letterSpacing: '0.15em',
                                color: '#F8FAFC',
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: 99,
                                padding: '6px 16px',
                                marginBottom: 24,
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                            }}>
                                <Sparkles size={13} style={{ color: '#06B6D4' }} />
                                <span>GLOBAL DIGITAL EDUCATION FRAMEWORKS</span>
                            </div>

                            {/* Premium Editorial Typography Heading Stack */}
                            <h1 style={{
                                fontSize: 'clamp(46px, 5vw, 72px)',
                                fontWeight: 800,
                                color: '#F8FAFC',
                                letterSpacing: '-0.03em',
                                margin: '0 0 28px 0',
                                lineHeight: 1.1
                            }}>
                                Transform Enterprise <br />
                                <span style={{
                                    background: 'linear-gradient(90deg, #2563EB, #06B6D4)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block'
                                }}>Learning with</span> <br />
                                <span style={{ fontSize: '0.85em', fontWeight: 700, opacity: 0.95 }}>Digital Intelligence</span>
                            </h1>

                            {/* High-Contrast Restrained Micro Copy */}
                            <p style={{
                                fontSize: '17px',
                                color: '#CBD5E1',
                                lineHeight: 1.6,
                                marginBottom: 40,
                                fontWeight: 400,
                                maxWidth: '620px'
                            }}>
                                Deliver enterprise-grade digital learning ecosystems, virtual classrooms, and scalable workforce training that drive measurable business outcomes.
                            </p>

                            {/* Re-engineered Functional Dual CTA Segment */}
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                                <button className="rec-btn-primary" onClick={() => {
                                    const element = document.getElementById('frameworks-grid');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    <span>Explore Solutions</span>
                                    <ArrowRight size={16} className="rec-btn-arrow" style={{ transition: 'transform 0.3s ease' }} />
                                </button>

                                <button className="rec-btn-secondary" onClick={() => {
                                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                }}>
                                    <span>Schedule Consultation</span>
                                </button>
                            </div>

                            {/* Credibility Architecture Trust Metrics */}
                            <div style={{
                                display: 'flex',
                                gap: '32px',
                                borderTop: '1px solid rgba(255,255,255,0.08)',
                                width: '100%',
                                maxWidth: '620px',
                                paddingTop: '32px'
                            }}>
                                <div>
                                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF' }}>25+</div>
                                    <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>Years Experience</div>
                                </div>
                                <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)', alignSelf: 'stretch' }} />
                                <div>
                                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#06B6D4' }}>120+</div>
                                    <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>Enterprise Clients</div>
                                </div>
                                <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)', alignSelf: 'stretch' }} />
                                <div>
                                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#2563EB' }}>500K+</div>
                                    <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>Learners Enabled</div>
                                </div>
                                <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)', alignSelf: 'stretch' }} />
                                <div>
                                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF' }}>40+</div>
                                    <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>Countries</div>
                                </div>
                            </div>

                        </div>

                        {/* Right Interactive/Floating Visual Composited Engine */}
                        <div className="rec-hero-right">
                            {/* Glass Object 1: Analytics Nodes */}
                            <div className="rec-floating-card-1">
                                <BarChart3 size={24} style={{ color: '#06B6D4' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#FFF' }}>94% Retention</span>
                                    <span style={{ fontSize: '11px', color: '#94A3B8' }}>Microlearning Impact</span>
                                </div>
                            </div>

                            {/* Glass Object 2: Dynamic Map / Global Operations */}
                            <div className="rec-floating-card-2">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#94A3B8', letterSpacing: '0.05em' }}>LMS PLATFORM ACTIVE</span>
                                </div>
                                <span style={{ fontSize: '16px', fontWeight: 800, color: '#FFF' }}>Architecture Compliant</span>
                            </div>

                            {/* Glass Object 3: Mini Core Action Trigger */}
                            <div className="rec-floating-card-3">
                                <Compass size={28} />
                            </div>
                        </div>
                    </div>

                    {/* Integrated Scroll Indicator Component Anchor */}
                    <div style={{
                        position: 'absolute',
                        bottom: '32px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                    }} onClick={() => {
                        const element = document.getElementById('frameworks-grid');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: '#94A3B8', textTransform: 'uppercase' }}>Explore Services</span>
                        <ChevronDown size={16} style={{ color: '#06B6D4', animation: 'bounceSlow 2s ease-in-out infinite' }} />
                    </div>

                </section>

                {/* Grid Framework Wrapper Section */}
                <section id="frameworks-grid" style={{ padding: '120px 24px 100px 24px', maxWidth: '1280px', margin: '0 auto', background: 'transparent', position: 'relative' }}>

                    {/* Architectural Matrix Header */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '80px', borderLeft: '3px solid #22D3EE', paddingLeft: '24px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', color: '#22D3EE', textTransform: 'uppercase' }}>
                            ENTERPRISE SKILL MATURITY
                        </span>
                        <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '4px 0' }}>
                            Learning Frameworks Designed for Modern Enterprises
                        </h2>
                        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '650px', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                            Delivering end-to-end learning deployment technologies and bespoke structural compliance modules across global industries.
                        </p>
                    </div>

                    <div className="rec-premium-grid">
                        {services.map((srv, idx) => {
                            const isDark = idx % 2 === 0;
                            const IconComponent = ServiceIcons[srv.iconName] || GraduationCap;
                            const formattedNumber = String(idx + 1).padStart(2, '0');
                            const delayStyle = { animationDelay: `${idx * 80}ms` };

                            return (
                                <div
                                    key={idx}
                                    className={`rec-editorial-card ${isDark ? 'rec-card-dark' : 'rec-card-light'} rec-stagger-card`}
                                    style={delayStyle}
                                    onClick={() => setActiveService(srv)}
                                >
                                    {/* Image Section Added Here */}
                                    <div className="rec-card-image-wrapper">
                                        <img
                                            src={srv.imageSrc || "/assets/images/services/placeholder.jpg"}
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
                                            background: 'linear-gradient(180deg, #2563EB, #06B6D4)'
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
                                            {formattedNumber}
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

                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignContent: 'flex-start' }}>
                                                {srv.chips && srv.chips.slice(0, 3).map((chip, cIdx) => (
                                                    <span key={cIdx} className="rec-feature-chip">
                                                        {chip}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Regional Footprints Section */}
                    <div style={{ marginTop: '100px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '48px', borderLeft: '3px solid #22D3EE', paddingLeft: '24px' }}>
                            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', color: '#22D3EE', textTransform: 'uppercase' }}>
                                GLOBAL FOOTPRINT
                            </span>
                            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                                Key Verticals &amp; Regulatory Domains Served
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                            {industries.map((ind, i) => {
                                const DynamicIndustryIcon = IndustryIcons[ind] || GraduationCap;
                                return (
                                    <div key={i} style={{ background: '#111827', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '40px', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-6px)';
                                            e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                        }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(34, 211, 238, 0.08)', color: '#22D3EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <DynamicIndustryIcon size={20} strokeWidth={1.5} />
                                            </div>
                                            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>{ind}</h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Operational Quality Pipeline Banner */}
                    <div style={{ marginTop: '80px', background: 'linear-gradient(180deg, #111827, rgba(17, 24, 39, 0.4))', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '32px', padding: '56px 40px', display: 'flex', gap: '32px', alignItems: 'center', textAlign: 'left' }}>
                        <div style={{ minWidth: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34, 211, 238, 0.08)', color: '#22D3EE', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(34, 211, 238, 0.2)', flexShrink: 0 }}>
                            <ShieldAlert size={28} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                                Our Learning Promise &amp; Competency Vetting
                            </h3>
                            <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>
                                We don't just supply courses — we deploy institutional transformation pipelines. Every digital program we design is optimized to match strict compliance criteria, global translation requirements, and long-term organizational knowledge metrics.
                            </p>
                        </div>
                    </div>

                </section>

                <Footer />
            </main>

            {/* Premium Interactive Modal Layer */}
            {activeService && (
                <div className="rec-modal-backdrop" onClick={() => setActiveService(null)}>
                    <div className="rec-modal-window" onClick={(e) => e.stopPropagation()}>

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

                        <div style={{ padding: '48px' }}>
                            <div style={{ marginBottom: '40px' }}>
                                <h4 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#22D3EE', marginBottom: '12px' }}>
                                    Executive Overview
                                </h4>
                                <p style={{ fontSize: '16px', color: '#E2E8F0', lineHeight: 1.7, margin: 0 }}>
                                    {activeService.longDesc}
                                </p>
                            </div>

                            <hr style={{ border: 0, height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '40px' }} />

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF', marginBottom: '24px' }}>
                                        Key Pillars &amp; Methodology
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        {activeService.points.map((pt, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                                                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(34, 211, 238, 0.1)', color: '#22D3EE', flexShrink: 0, marginTop: '2px' }}>
                                                    <Check size={12} strokeWidth={3} />
                                                </span>
                                                <span style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.5 }}>{pt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '20px', padding: '32px' }}>
                                        <h4 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF', marginBottom: '20px' }}>
                                            Strategic Value Added
                                        </h4>
                                        <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {activeService.benefits.map((b, bi) => (
                                                <li key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                                                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(34, 211, 238, 0.1)', color: '#22D3EE', flexShrink: 0, marginTop: '2px' }}>
                                                        <Check size={12} strokeWidth={3} />
                                                    </span>
                                                    <span style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.5 }}>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
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