import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', division: 'E-Learning', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div style={{
                padding: '48px',
                textAlign: 'center',
                background: 'var(--primary-muted)',
                borderRadius: '16px',
                border: '1px solid var(--border-primary)',
                fontFamily: 'var(--font-family)'
            }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: 'var(--primary-light)', margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700' }}>Message Received!</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '14px', lineHeight: 1.7 }}>
                    Your enquiry to our <strong style={{ color: 'var(--text-primary)' }}>{formData.division}</strong> team has been received. A specialist will reach out within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                    <label className="jf-overline" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Full Name *</label>
                    <input type="text" required className="jf-input" value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name" />
                </div>
                <div>
                    <label className="jf-overline" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Work Email *</label>
                    <input type="email" required className="jf-input" value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="work@company.com" />
                </div>
            </div>

            <div>
                <label className="jf-overline" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Company / Organisation</label>
                <input type="text" className="jf-input" value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your organisation name" />
            </div>

            <div>
                <label className="jf-overline" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Division Inquiry *</label>
                <select className="jf-input" style={{ cursor: 'pointer' }} value={formData.division}
                    onChange={e => setFormData({ ...formData, division: e.target.value })}>
                    <option value="E-Learning">E-Learning & Digital Learning Solutions</option>
                    <option value="Recruitment">Recruitment, Staffing & Talent Solutions</option>
                    <option value="Financial Consultancy">Financial Consultancy & Accounting Services</option>
                    <option value="General">General Inquiry</option>
                </select>
            </div>

            <div>
                <label className="jf-overline" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Message *</label>
                <textarea rows="5" required className="jf-input" style={{ resize: 'vertical', minHeight: '100px' }}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements or challenges..." />
            </div>

            <button type="submit" className="jf-btn-primary" style={{ width: '100%' }}>
                Send Enquiry →
            </button>
        </form>
    );
}
