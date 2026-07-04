import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function AboutPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: "var(--bg-main)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Header />
            <main style={{ flex: 1, paddingTop: '140px', paddingBottom: '100px', overflow: 'hidden', position: 'relative' }}>
                
                {/* Header Section */}
                <section style={{ padding: '0 40px 80px', textAlign: 'center' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '800', color: "var(--text-primary)", marginBottom: '24px', letterSpacing: '-0.03em' }}>
                            About JF Knowledge Centre
                        </h1>
                        <p style={{ fontSize: '18px', color: "var(--text-muted)", lineHeight: 1.8, marginBottom: '32px' }}>
                            JF Knowledge Centre is a globally oriented, multi-disciplinary professional services organisation committed to transforming the way businesses learn, hire, and grow. Founded with a clear vision to bridge the gap between talent demand and capability supply, we operate across three powerful verticals — E-Learning & Digital Learning Solutions, Recruitment & Staffing, and Financial Consultancy & Accounting Services.
                        </p>
                        <p style={{ fontSize: '18px', color: "var(--text-muted)", lineHeight: 1.8 }}>
                            Headquartered with a global delivery footprint spanning the US, UK, Europe, GCC, and India, JF Knowledge Centre serves a diverse portfolio of clients — from ambitious start-ups to established Fortune 500 enterprises — delivering customised, scalable, and results-driven solutions that create lasting impact.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section style={{ padding: '0 40px 80px' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                        
                        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-light)", borderRadius: '24px', padding: '48px', boxShadow: "var(--shadow-sm)" }}>
                            <h2 style={{ fontSize: '28px', fontWeight: '800', color: "var(--text-primary)", marginBottom: '20px' }}>Our Mission</h2>
                            <p style={{ fontSize: '16px', color: "var(--text-muted)", lineHeight: 1.8 }}>
                                To empower organisations and individuals with innovative learning experiences, world-class talent solutions, and strategic financial expertise — enabling them to thrive in a rapidly evolving global landscape.
                            </p>
                        </div>

                        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-light)", borderRadius: '24px', padding: '48px', boxShadow: "var(--shadow-sm)" }}>
                            <h2 style={{ fontSize: '28px', fontWeight: '800', color: "var(--text-primary)", marginBottom: '20px' }}>Our Vision</h2>
                            <p style={{ fontSize: '16px', color: "var(--text-muted)", lineHeight: 1.8 }}>
                                To be the most trusted and transformative professional services partner across learning, talent, and finance — known for quality, innovation, and measurable outcomes.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Core Values Section */}
                <section style={{ position: 'relative', padding: '0 40px 80px', background: "var(--bg-surface)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)", paddingTop: '80px', overflow: 'hidden' }}>
                    
                    {/* Background Video Layer for Core Values */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-surface) 0%, rgba(255,255,255,0.85) 50%, var(--bg-surface) 100%)', zIndex: 2 }} />
                        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, filter: 'grayscale(50%)' }}>
                            <source src="/assets/images/about/corevalues.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '800', color: "var(--text-primary)", marginBottom: '48px', textAlign: 'center' }}>Our Core Values</h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            {[
                                { title: 'Excellence', text: 'We pursue the highest standards in everything we deliver.' },
                                { title: 'Innovation', text: 'We continuously evolve our solutions to stay ahead of industry trends.' },
                                { title: 'Integrity', text: 'We operate with transparency, honesty, and accountability.' },
                                { title: 'Partnership', text: 'We build long-term relationships grounded in mutual trust.' },
                                { title: 'Impact', text: 'We measure our success by the tangible outcomes we create for our clients.' }
                            ].map((val, idx) => (
                                <div key={idx} style={{ background: "var(--bg-main)", padding: '32px', borderRadius: '16px', border: "1px solid var(--border-light)", borderLeft: '4px solid var(--brand-teal)' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: "var(--text-primary)", marginBottom: '12px' }}>{val.title}</h3>
                                    <p style={{ fontSize: '15px', color: "var(--text-muted)", margin: 0, lineHeight: 1.7 }}>{val.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section style={{ position: 'relative', padding: '100px 40px', textAlign: 'center', overflow: 'hidden' }}>
                    
                    {/* Background Video Layer for Why Choose Us */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(249,250,252,0.8) 0%, var(--bg-main) 100%)', zIndex: 2 }} />
                        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }}>
                            <source src="/assets/images/about/whyus.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '800', color: "var(--text-primary)", marginBottom: '24px' }}>
                            Why Choose JF Knowledge Centre?
                        </h2>
                        <p style={{ fontSize: '18px', color: "var(--text-muted)", lineHeight: 1.8 }}>
                            We are not just a service provider — we are a strategic partner. Our cross-functional expertise allows us to offer integrated solutions that save time, reduce cost, and drive measurable business outcomes. Whether you need to upskill your workforce, build a high-performance team, or streamline your financial operations, JF Knowledge Centre is your single point of excellence.
                        </p>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}