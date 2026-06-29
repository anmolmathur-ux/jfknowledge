import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CTASection from '../components/sections/CTASection';

export default function WhyJfPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#060608', fontFamily: "'Poppins', sans-serif" }}>
            <Header />
            <main style={{ flex: 1, paddingTop: '68px' }}>
                {/* Page header */}
                <section style={{ position: 'relative', padding: '80px 40px 40px', overflow: 'hidden', background: 'linear-gradient(160deg, #0d0d18 0%, #060608 100%)' }}>
                    <div style={{ position: 'absolute', top: '-40px', right: '10%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(151,71,255,0.12) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
                    <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                        <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: '700', color: '#9747FF', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '14px' }}>
                            Our Differentiators
                        </span>
                        <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '800', color: '#ffffff', margin: '0 0 16px 0', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                            Why Partner With <span style={{ background: 'linear-gradient(95deg, #9747FF, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>JF Knowledge Centre</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', lineHeight: 1.75, margin: 0 }}>
                            We are not just a service provider — we are a strategic partner delivering integrated expertise across learning, talent, and finance.
                        </p>
                    </div>
                </section>
                <WhyChooseUs />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}