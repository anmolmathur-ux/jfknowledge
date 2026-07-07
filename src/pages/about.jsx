import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function AboutPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-main)', fontFamily: 'var(--font-family)' }}>
            <Header />
            <main style={{ flex: 1, overflow: 'hidden', position: 'relative', paddingTop: '80px' }}>
                <section className="page-hero-shell theme-section theme-section--light" style={{ paddingTop: '120px', paddingBottom: '110px' }}>
                    <div className="page-hero-media">
                        <video autoPlay loop muted playsInline>
                            <source src="/assets/images/about/about.mp4" type="video/mp4" />
                        </video>
                        <div 
                          className="hero-video-gradient"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                            pointerEvents: 'none'
                          }}
                        />
                    </div>
                    {/* Removed any implicit card backgrounds or paddings from this wrapper */}
                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px' }}>
                        <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '800', color: 'var(--text-primary)', margin: '24px auto 24px', letterSpacing: '-0.03em', maxWidth: '820px' }}>
                            Empowering Talent.
                            <span style={{color: 'var(--text-on-dark)'}}> Enabling Growth. Elevating </span>
                                Business.
                        </h1>
                    </div>
                </section>

                <section 
    className="theme-section theme-section--light" 
    style={{ 
        padding: '100px 24px',
        backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.60) 10%, rgba(255, 255, 255, 0.30) 100%), url("/assets/images/about/servicebg.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
    }}
>
    {/* Side-by-side split layout wrapper */}
    <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', // Automatically wraps to vertical layout on smaller screen sizes
        gap: '48px', 
        alignItems: 'center' 
    }}>
        
        {/* Left Side: Heading Content */}
        <div style={{ 
            flex: '1 1 380px', 
            textAlign: 'left' // Left-aligned style matching modern agency UI paths
        }}>
            <h2 className="section-title" style={{ color: 'var(--text-on-light)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', lineHeight: 1.25, margin: 0 }}>
                Purpose-driven strategy for learning, talent, and finance.
            </h2>
        </div>

        {/* Right Side: Cards Container Block */}
        <div style={{ 
    flex: '1.4 1 500px', 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
    gap: '24px',
    backgroundImage: 'url("/assets/images/about/card bg.png")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    padding: '36px', 
    borderRadius: '20px' 
}}>
    {/* OUR MISSION CARD */}
    <div 
        className="section-panel section-panel--light" 
        style={{ 
            padding: '32px', 
            borderRadius: '16px',
            /* Restored the linear-gradient overlay sequence to force-override the base class styles */
            backgroundImage:'  url("/assets/images/about/mission.png") center/cover no-repeat'
        }}
    >
        <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>Our Mission</h3>
        <p style={{ fontSize: '15px', color: 'var(--text-on-light-muted)', lineHeight: 1.7, margin: 0 }}>
            To empower organisations and individuals with innovative learning experiences, world-class talent solutions, and strategic financial expertise — enabling them to thrive in a rapidly evolving global landscape.
        </p>
    </div>
    
    {/* OUR VISION CARD */}
    <div 
        className="section-panel section-panel--light" 
        style={{ 
            padding: '32px', 
            borderRadius: '16px',
            /* Restored the linear-gradient overlay sequence to force-override the base class styles */
            backgroundImage: ' url("/assets/images/about/vision.png") center/cover no-repeat'
        }}
    >
        <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-on-light)', marginBottom: '14px' }}>Our Vision</h3>
        <p style={{ fontSize: '15px', color: 'var(--text-on-light-muted)', lineHeight: 1.7, margin: 0 }}>
            To be the most trusted and transformative professional services partner across learning, talent, and finance — known for quality, innovation, and measurable outcomes.
        </p>
    </div>
</div>

    </div>
</section>

               <section className="theme-section theme-section--dark" style={{ padding: '100px 24px' }}>
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-title" style={{ color: 'var(--text-primary)', marginTop: '16px', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800' }}>
            The principles that guide every engagement.
        </h2>
    </div>

    {/* Balanced Flex Layout */}
    <div style={{ 
        maxWidth: '1280px', 
        margin: '64px auto 0', 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '24px', 
        justifyContent: 'center' 
    }}>
        {[
            { 
                title: 'Excellence', 
                text: 'We pursue the highest standards in everything we deliver.',
                img: '/assets/images/about/1.webp' // Replace with your image URL
            },
            { 
                title: 'Innovation', 
                text: 'We continuously evolve our solutions to stay ahead of industry trends.',
                img: '/assets/images/about/2.jpg' // Replace with your image URL
            },
            { 
                title: 'Integrity', 
                text: 'We operate with transparency, honesty, and accountability.',
                img: '/assets/images/about/3.jpg' // Replace with your image URL
            },
            { 
                title: 'Partnership', 
                text: 'We build long-term relationships grounded in mutual trust.',
                img: '/assets/images/about/4.jpg' // Replace with your image URL
            },
            { 
                title: 'Impact', 
                text: 'We measure our success by the tangible outcomes we create for our clients.',
                img: '/assets/images/about/5.jpg' // Replace with your image URL
            }
        ].map((item, index) => (
            <div 
                key={index} 
                className="section-panel section-panel--dark" 
                style={{ 
                    borderRadius: '20px', 
                    padding: '40px 32px', 
                    flex: '1 1 340px', 
                    maxWidth: '380px',  
                    
                    /* Balanced Dark Blue Gradient Over Custom Image */
                    background: `linear-gradient(135deg, rgba(6, 18, 36, 0.92) 0%, rgba(12, 33, 64, 0.82) 100%), url("${item.img}") center/cover no-repeat`,
                    
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
            >
                {/* Subtle structural numbering for visual interest */}
                <div style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', marginBottom: '20px', opacity: 0.8 }}>
                    0{index + 1}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                    {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, opacity: 0.9 }}>
                    {item.text}
                </p>
            </div>
        ))}
    </div>
</section>
<section 
    className="theme-section" 
    style={{ 
        padding: '80px 24px 140px', 
        background: 'url("/assets/images/about/about.webp") center/cover no-repeat' 
    }}
>
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <div 
            className="section-panel" 
            style={{ 
                padding: '64px 40px', 
                /* Adds a dark transparent glassmorphism backdrop so white text is highly readable */
                background: 'rgba(9, 13, 22, 0.75)', 
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
        >
            {/* Updated heading to light text color variables */}
            <h2 className="section-title" style={{ color: 'var(--text-primary, #ffffff)', fontWeight: '800' }}>
                Book an Appointment
            </h2>
            
            {/* Updated paragraph to light muted text color variables */}
            <p className="section-copy" style={{ color: 'var(--text-secondary, #94a3b8)', margin: '18px auto 32px', maxWidth: '760px', lineHeight: 1.7 }}>
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