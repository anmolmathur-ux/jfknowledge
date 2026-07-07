import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function ElearningIndex() {
    const services = [
        {
            title: "1. Instructor-Led Training (ILT)",
            desc: "Instructor-Led Training remains one of the most powerful modalities for immersive, deep-dive learning. Our ILT programmes are expertly designed and facilitated by seasoned subject matter experts and certified trainers who bring real-world experience into the classroom.",
            points: [
                "Customised curriculum design aligned with business objectives and learning outcomes",
                "In-person training delivery at client premises, training centres, or conference venues",
                "Industry-specific programmes across leadership, technical, compliance, soft skills, and domain knowledge",
                "Pre- and post-training assessments to measure knowledge gain and ROI",
                "Comprehensive facilitator guides, participant workbooks, and support materials",
                "Training needs analysis (TNA) to identify skill gaps and recommend optimal programmes"
            ]
        },
        {
            title: "2. Virtual Instructor-Led Training (VILT)",
            desc: "Our VILT solutions bring the richness of classroom learning to the digital environment. Leveraging industry-leading platforms such as Zoom, Microsoft Teams, Webex, and Adobe Connect, we deliver interactive, high-engagement virtual training experiences that rival in-person sessions.",
            points: [
                "Live, synchronous virtual training sessions hosted by expert facilitators",
                "Interactive features including polls, breakout rooms, whiteboards, and Q&A",
                "Cohort-based learning that fosters collaboration and peer engagement",
                "Hybrid VILT models combining recorded modules with live facilitated sessions",
                "Session recordings, transcripts, and post-session learning materials",
                "Multi-timezone delivery to support globally distributed teams",
                "Technical support and participant management throughout training delivery"
            ]
        },
        {
            title: "3. Microlearning",
            desc: "Attention spans are shrinking and workloads are increasing. Microlearning delivers focused, bite-sized learning content designed to be consumed in 3–7 minutes — perfectly suited to the modern, on-the-go learner. Our microlearning solutions drive knowledge retention through repetition, relevance, and rapid accessibility.",
            points: [
                "Short-form video modules, animated explainers, and knowledge snippets",
                "Topic-specific skill pills that target individual learning objectives",
                "Mobile-first content optimised for smartphones and tablets",
                "Spaced repetition tools and push notification-based delivery",
                "Integrated quizzes and reinforcement activities for knowledge retention",
                "Just-in-time learning resources embedded within workflows and tools",
                "Rapid development with turnaround times of days, not months"
            ]
        },
        {
            title: "4. Gamification",
            desc: "We harness the power of game mechanics to transform learning from a passive obligation into an energising experience. Our gamification frameworks apply behavioural psychology, motivational design, and technology to dramatically improve learner engagement, completion rates, and knowledge retention.",
            points: [
                "Points, badges, leaderboards, and rewards systems integrated into learning journeys",
                "Narrative-driven learning quests and scenario-based challenges",
                "Timed challenges, streak systems, and level progression structures",
                "Team-based competitions and collaborative missions",
                "Custom gamified assessments and knowledge-check games",
                "Real-time dashboards tracking learner progress, scores, and achievements",
                "Enterprise-grade gamification platforms compatible with existing LMS infrastructure"
            ]
        },
        {
            title: "5. Learning Experience Platforms (LXP)",
            desc: "Moving beyond traditional Learning Management Systems, our LXP solutions place the learner at the centre, offering personalised, AI-driven, and socially collaborative learning environments. We help organisations select, configure, and implement the right LXP to drive a culture of continuous learning.",
            points: [
                "Advisory and consulting on LXP selection (Degreed, EdCast, Cornerstone, 360Learning, and more)",
                "Platform implementation, configuration, and integration with existing HR tech stack",
                "AI-powered content recommendations based on learner role, history, and goals",
                "Curated content libraries and third-party content aggregation (LinkedIn Learning, Coursera, Udemy)",
                "Social learning features including user-generated content, forums, and peer coaching",
                "Skills gap mapping and career pathing tools integrated within the platform",
                "Comprehensive analytics dashboards for learners, managers, and L&D teams",
                "Ongoing platform support, user training, and performance optimisation"
            ]
        },
        {
            title: "6. Interactive PDFs",
            desc: "Interactive PDFs represent a powerful, cost-effective format for delivering rich, self-paced learning content without requiring an LMS. JF Knowledge Centre's design team creates visually stunning, highly functional interactive PDFs that feel more like digital experiences than static documents.",
            points: [
                "Clickable navigation, hyperlinks, and table of contents for seamless reading",
                "Embedded multimedia — video, audio, and animated infographics",
                "Fillable form fields for self-assessments, reflections, and action planning",
                "Pop-up glossary definitions, expandable content sections, and hover tooltips",
                "Brand-aligned design with custom typography, icons, and visual elements",
                "Universal accessibility — usable on all devices without internet connectivity",
                "Ideal for compliance documentation, onboarding guides, product training, and SOPs"
            ]
        },
        {
            title: "7. Custom eLearning Development (SCORM / xAPI)",
            desc: "Our custom eLearning development team brings together instructional designers, visual artists, developers, and voice artists to craft fully bespoke digital learning modules that align with your brand, content, and learner needs.",
            points: [
                "End-to-end development from storyboard to final delivery",
                "SCORM 1.2, SCORM 2004, xAPI (Tin Can), and AICC compliant outputs",
                "Authoring tool expertise: Articulate Storyline, Rise 360, Adobe Captivate, Lectora",
                "Scenario-based and branching simulations for real-world decision making",
                "Software simulations and system walkthroughs (ERP, CRM, proprietary tools)",
                "Multilingual development and voice-over in 30+ languages",
                "Accessibility compliance: WCAG 2.1 AA standards"
            ]
        },
        {
            title: "8. Learning Management System (LMS) Services",
            desc: "",
            points: [
                "LMS selection consulting and procurement support",
                "Implementation, configuration, and content migration",
                "Platform integration with HRMS, payroll, and talent management tools",
                "Custom reporting and analytics dashboards",
                "User administration, LMS management, and helpdesk support",
                "Compliance tracking and mandatory training workflows"
            ]
        },
        {
            title: "9. Content Strategy & Instructional Design",
            desc: "",
            points: [
                "Comprehensive Training Needs Analysis (TNA) and skills gap assessments",
                "Learning architecture and curriculum mapping",
                "Blended learning journey design combining multiple modalities",
                "Assessment design: formative, summative, and competency-based evaluations",
                "Content curation, licensing, and third-party content sourcing"
            ]
        }
    ];

    const industries = [
        "Banking & Financial Services", "Healthcare & Life Sciences", "Manufacturing & Engineering",
        "Retail & FMCG", "Technology & IT", "Oil & Gas", "Hospitality & Travel",
        "Government & Public Sector", "Education & Professional Services"
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: "var(--bg-main)", fontFamily: 'var(--font-family)' }}>
            <Header />

            <main style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                <section style={{ position: 'relative', padding: '60px 40px 100px', textAlign: 'center', overflow: 'hidden' }}>

                    {/* Background Video Layer */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.85) 100%)' }} />
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="..."
                        >
                            <source
                                src="/assets/images/about/e-learning.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
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
                                background: "rgba(8,12,20,0.55)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "28px",
                                padding: "60px 55px",
                                boxShadow: "0 30px 80px rgba(0,0,0,.35)",
                            }}
                        >
                            {/* Eyebrow */}

                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",

                                }}
                            >
                                <div
                                    style={{
                                        width: "8px",
                                        height: "8px",


                                    }}
                                />

                                <span>
                                    <img
                                        src="/assets/images/about/logo-only.png"
                                        alt="Logo"
                                        style={{
                                            height: '72px', // Adjust height to fit nicely inside your pill container
                                            width: 'auto',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </span>
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
                                E-Learning &
                                <br />
                                <span
                                    style={{
                                        background:
                                            "rgb(34, 211, 238)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Digital Learning Solutions
                                </span>
                            </h1>

                            {/* Description */}

                            <p
                                style={{
                                    fontSize: "19px",
                                    lineHeight: 1.8,
                                    color: "slate",
                                    maxWidth: "680px",
                                    margin: "0 auto",
                                    textAlign: "center",
                                }}
                            >
                                Modern e-learning solutions that transform knowledge into engaging, measurable learning experiences.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="theme-section theme-section--light"
                    style={{
                        width: '100%',
                        padding: '100px 0',
                        position: 'relative'
                    }}
                >
                    {/* Clean subtle overlay mask layer to seamlessly blend text elements */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)', zIndex: 1, pointerEvents: 'none' }} />

                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
                        <h2 style={{
                            fontSize: '36px',
                            fontWeight: '800',
                            color: "#475569", /* Optimized dark color for text readability against light background */
                            marginBottom: '48px',
                            textAlign: 'center',
                            letterSpacing: '-0.02em'
                        }}>
                            Our E-Learning Services
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                            {services.map((srv, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: "rgba(255, 255, 255, 0.65)", /* Clean light translucent card box background */
                                        border: "1px solid rgba(13, 148, 136, 0.18)", /* Delicate brand teal outline border tint */
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                        borderRadius: '24px',
                                        padding: '40px',
                                        boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.05)"
                                    }}
                                >
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', color: "var(--primary-light)", marginBottom: '16px' }}>
                                        {srv.title}
                                    </h3>

                                    {srv.desc && (
                                        <p style={{ fontSize: '15px', color: "#334155", lineHeight: 1.7, marginBottom: '24px', fontWeight: '400' }}>
                                            {srv.desc}
                                        </p>
                                    )}

                                    <ul style={{
                                        margin: 0,
                                        paddingLeft: '20px',
                                        color: "#475569",
                                        fontSize: '14.5px',
                                        lineHeight: 1.7,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px'
                                    }}>
                                        {srv.points.map((pt, i) => (
                                            <li key={i} style={{ color: '#475569' }}>{pt}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        padding: "120px 40px",
                    }}
                >
                    {/* Background Video */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 0,
                        }}
                    >
                        <source
                            src="/assets/images/about/industries.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Gradient Overlay */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(135deg, rgba(10,15,25,.78), rgba(15,23,42,.70), rgba(10,15,25,.82))",
                            zIndex: 1,
                        }}
                    />

                    {/* Decorative Blur */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-150px",
                            left: "-120px",
                            width: "340px",
                            height: "340px",
                            borderRadius: "50%",
                            background: "rgba(34,211,238,.12)",
                            filter: "blur(100px)",
                            zIndex: 1,
                        }}
                    />

                    <div
                        style={{
                            position: "relative",
                            zIndex: 2,
                            maxWidth: "1200px",
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "10px 18px",
                                borderRadius: "999px",
                                background: "rgba(255,255,255,.08)",
                                border: "1px solid rgba(255,255,255,.15)",
                                backdropFilter: "blur(18px)",
                                marginBottom: "24px",
                            }}
                        >
                            <span
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: "#22d3ee",
                                }}
                            />

                            <span
                                style={{
                                    color: "#22d3ee",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    letterSpacing: ".15em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Global Expertise
                            </span>
                        </div>

                        <h2
                            style={{
                                fontSize: "clamp(40px,5vw,60px)",
                                fontWeight: "800",
                                color: "#fff",
                                marginBottom: "20px",
                                letterSpacing: "-.03em",
                                lineHeight: 1.1,
                            }}
                        >
                            Industries We Serve
                        </h2>

                        <p
                            style={{
                                maxWidth: "760px",
                                margin: "0 auto 60px",
                                fontSize: "18px",
                                lineHeight: 1.8,
                                color: "rgba(255,255,255,.78)",
                            }}
                        >
                            Delivering specialized talent solutions across diverse industries,
                            helping organizations build high-performing teams worldwide.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "18px",
                            }}
                        >
                            {industries.map((ind, i) => (
                                <div
                                    key={i}
                                    style={{
                                        padding: "16px 28px",
                                        borderRadius: "999px",
                                        background: "rgba(255,255,255,.10)",
                                        border: "1px solid rgba(255,255,255,.16)",
                                        backdropFilter: "blur(18px)",
                                        WebkitBackdropFilter: "blur(18px)",
                                        color: "#fff",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        boxShadow:
                                            "0 12px 30px rgba(0,0,0,.18)",
                                        transition: "all .3s ease",
                                        cursor: "pointer",
                                    }}
                                >
                                    {ind}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}