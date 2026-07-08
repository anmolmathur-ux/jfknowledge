import React from 'react';
import { Laptop, Users, BarChart3, ArrowRight, Check } from 'lucide-react';

const navigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export default function ServiceGrid() {
    const services = [
        {
            icon: <Laptop size={28} strokeWidth={1.5} />,
            label: 'E-Learning',
            title: 'E-Learning & Digital Learning Solutions',
            desc: 'We design, develop, and deploy cutting-edge learning experiences tailored to your organisation\'s unique goals.',
            href: '/e-learning',
            bgImage: '/assets/images/about/elearning.png',
            bullets: [
                'Instructor-led & VILT programmes',
                'Microlearning & mobile-first modules',
                'LMS implementation & integrations',
            ]
        },
        {
            icon: <Users size={28} strokeWidth={1.5} />,
            label: 'Recruitment',
            title: 'Recruitment, Staffing & Talent Solutions',
            desc: 'We deliver permanent placement, contract staffing, staff augmentation, and executive search with rapid shortlists.',
            href: '/recruitment-staffing',
            bgImage: '/assets/images/about/recruitment.png',
            bullets: [
                'Permanent & contract hiring',
                'Fast shortlists (48h)',
                'Executive search & leadership hires',
            ]
        },
        {
            icon: <BarChart3 size={28} strokeWidth={1.5} />,
            label: 'Financial Consultancy',
            title: 'Financial Consultancy & Accounting Services',
            desc: 'Qualified accountants delivering bookkeeping, reporting and fractional CFO services.',
            href: '/financial-consultancy',
            bgImage: '/assets/images/about/financial.png',
            bullets: [
                'Cloud bookkeeping & reporting',
                'Tax & compliance advisory',
                'Fractional CFO services',
            ]
        }
    ];

    return (
        <>
            <style>{`
                .sg-section {
                    padding: 96px 0;
                    font-family: var(--font-family);
                    position: relative;
                    isolation: isolate;
                    background:
                       linear-gradient(
135deg,
rgba(222, 232, 248, 0.82) 0%,
rgba(195, 210, 232, 0.68) 100%
),
                        url('/assets/images/about/servicebg.png') center / cover no-repeat;
                }

                .sg-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 max(24px, 4vw);
                }

                .sg-header {
                    text-align: center;
                    max-width: 720px;
                    margin: 0 auto 56px;
                }

                .sg-headline {
                    font-size: clamp(34px, 4vw, 52px);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    color: var(--text-on-light);
                    margin: 12px 0 16px;
                    line-height: 1.08;
                }

                .sg-desc {
                    font-size: 16px;
                    color: var(--text-on-light-muted);
                    line-height: 1.8;
                    margin: 0 auto;
                    max-width: 680px;
                }

                .sg-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 28px;
                }

                .sg-card {
                    background: linear-gradient(145deg, rgba(8, 15, 34, 0.96) 0%, rgba(15, 23, 55, 0.9) 100%),
                        url('/assets/images/about/card bg.png') center / cover no-repeat;
                    border: 1px solid rgba(15, 23, 55, 0.12);
                    border-radius: 32px;
                    padding: 28px;
                    display: grid;
                    grid-template-rows: auto 1fr auto;
                    cursor: pointer;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
                    min-height: 620px;
                    box-shadow: 0 24px 60px rgba(15, 23, 55, 0.12);
                    overflow: hidden;
                }

                .sg-card:hover {
                    border-color: rgba(37, 99, 235, 0.35);
                    box-shadow: 0 28px 80px rgba(37, 99, 235, 0.12);
                    transform: translateY(-4px);
                }

                .sg-card-content {
                    display: grid;
                    gap: 20px;
                }

                .sg-card-image {
                    height: 360px;
                    border-radius: 24px;
                    background-size: cover;
                    background-position: center;
                    overflow: hidden;
                    position: relative;
                    margin-top: 0;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
                }

                .sg-card-image::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.22) 100%);
                }

                /* icon overlay removed per design — previously top-right */

                .sg-label-capsule {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    background: rgba(255,255,255,0.95);
                    backdrop-filter: blur(6px);
                    font-size: 12px;
                    font-weight: 700;
                    color: #1e3a8a;
                    z-index: 3;
                    box-shadow: 0 8px 20px rgba(15,23,55,0.12);
                }

                .sg-card-top { display: none; }

                .sg-card {
                    min-height: 620px;
                    display: grid;
                    grid-template-rows: auto 1fr auto;
                }

                .sg-card-content {
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                    padding-top: 20px;
                }

                .sg-bullet-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin: 0;
                    padding: 0;
                }

                .sg-bullet-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.9);
                }

                .sg-bullet-check {
                    width: 18px;
                    height: 18px;
                    border-radius: 4px;
                    background: rgba(34,197,94,0.12);
                    color: #16a34a;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .sg-icon-wrap {
                    width: 52px;
                    height: 52px;
                    border-radius: 12px;
                    background: var(--primary-muted);
                    color: var(--primary-light);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .sg-card-num {
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    color: var(--text-on-light-faint);
                }

                .sg-card-label {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: var(--primary-light);
                    margin-bottom: 8px;
                }

                .sg-card-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 12px;
                    line-height: 1.25;
                    letter-spacing: -0.02em;
                }

                .sg-card-desc {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.7;
                    margin-bottom: 20px;
                    flex: 1;
                }

                .sg-bullet-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: var(--gold);
                    flex-shrink: 0;
                    margin-top: 6px;
                }

                .sg-card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #60a5fa;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    font-family: var(--font-family);
                    transition: gap 0.2s ease;
                    margin-top: auto;
                }

                .sg-card-link:hover { gap: 12px; }

                .sg-bottom-bar {
                    margin-top: 56px;
                    padding-top: 40px;
                    border-top: 1px solid var(--border-light);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 32px;
                    flex-wrap: wrap;
                }

                .sg-bottom-stats {
                    display: flex;
                    gap: 48px;
                    flex-wrap: wrap;
                }

                .sg-stat-val {
                    font-size: 28px;
                    font-weight: 800;
                    color: var(--text-on-light);
                    letter-spacing: -0.03em;
                    line-height: 1;
                }

                .sg-stat-lbl {
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-on-light-faint);
                    margin-top: 4px;
                }

                @media (max-width: 960px) {
                    .sg-grid { grid-template-columns: 1fr; }
                    .sg-bottom-stats { gap: 28px; }
                }
            `}</style>

           <section className="sg-section theme-section theme-section--light">
    <div className="sg-container">
        <div className="sg-header section-intro">
            <span className="jf-overline">Core Capabilities</span>
            <h2 className="sg-headline section-title" style={{ fontWeight: 700, color: 'var(--primary)' }}>
                Three Divisions.
                 Infinite Scalability.
            </h2>
            <p className="sg-desc section-copy">
                One unified partner engine accelerating your strategic hyper-growth
                objectives across learning assets, talent engineering, and
                institutional finances — globally.
            </p>
        </div>

        <div className="sg-grid">
            {services.map((s, i) => (
                <div
                    key={i}
                    className="sg-card"
                    onClick={() => navigate(s.href)}
                >
                    <div className="sg-card-image" style={{ backgroundImage: `url('${s.bgImage}')` }}>
                        <div className="sg-label-capsule">{s.label}</div>
                    </div>
                    <div className="sg-card-content">
                        <h3 className="sg-card-title">{s.title}</h3>
                        <div className="sg-bullet-list">
                            {s.bullets?.map((b, bi) => (
                                <div key={bi} className="sg-bullet-item">
                                    <span className="sg-bullet-check">
                                        <Check size={12} strokeWidth={2} />
                                    </span>
                                    <span>{b}</span>
                                </div>
                            ))}
                        </div>
                        <p className="sg-card-desc" style={{ marginTop: 8 }}>{s.desc}</p>
                    </div>
                    <button className="sg-card-link" onClick={(e) => { e.stopPropagation(); navigate(s.href); }}>
                        Explore Division <ArrowRight size={14} />
                    </button>
                </div>
            ))}
        </div>

        <div className="sg-bottom-bar">
            <div className="sg-bottom-stats">
                {[
                    { val: '92%+', lbl: 'Talent Retention' },
                    { val: '48h', lbl: 'Time-to-Shortlist' },
                    { val: '30+', lbl: 'Languages Delivered' },
                    { val: 'Big 4', lbl: 'Grade Financial Expertise' },
                ].map((s, i) => (
                    <div key={i}>
                        <div className="sg-stat-val">{s.val}</div>
                        <div className="sg-stat-lbl">{s.lbl}</div>
                    </div>
                ))}
            </div>
            <button className="jf-btn-outline" onClick={() => navigate('/contact')}>
                Start a Conversation
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </button>
        </div>
    </div>
</section>
        </>
    );
}
