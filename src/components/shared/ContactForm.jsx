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
            <div style={{ padding: '48px', textAlign: 'center', background: 'rgba(13, 148, 136,0.08)', borderRadius: '20px', border: '1px solid rgba(13, 148, 136,0.25)', fontFamily: "'Poppins', sans-serif" }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#0D9488', margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700' }}>Message Received!</h3>
                <p style={{ color: 'rgba(254,245,240,0.55)', margin: 0, fontSize: '14px', lineHeight: 1.7 }}>
                    Your enquiry to our <strong style={{ color: "var(--text-primary)" }}>{formData.division}</strong> team has been received. A specialist will reach out within 24 hours.
                </p>
            </div>
        );
    }

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        borderRadius: '10px',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.04)',
        color: "var(--text-primary)",
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        outline: 'none',
        transition: 'border-color 0.2s ease',
        boxSizing: 'border-box'
    };

    const labelStyle = {
        fontSize: '11px',
        fontWeight: '700',
        color: 'rgba(254,245,240,0.4)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        marginBottom: '6px',
        display: 'block',
        fontFamily: "'Poppins', sans-serif"
    };

    const onFocus = (e) => { e.target.style.borderColor = 'rgba(13, 148, 136,0.5)'; };
    const onBlur  = (e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" required style={inputStyle} value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        onFocus={onFocus} onBlur={onBlur} placeholder="Your full name" />
                </div>
                <div>
                    <label style={labelStyle}>Work Email *</label>
                    <input type="email" required style={inputStyle} value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        onFocus={onFocus} onBlur={onBlur} placeholder="work@company.com" />
                </div>
            </div>

            <div>
                <label style={labelStyle}>Company / Organisation</label>
                <input type="text" style={inputStyle} value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    onFocus={onFocus} onBlur={onBlur} placeholder="Your organisation name" />
            </div>

            <div>
                <label style={labelStyle}>Division Inquiry *</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }} value={formData.division}
                    onChange={e => setFormData({ ...formData, division: e.target.value })}
                    onFocus={onFocus} onBlur={onBlur}>
                    <option value="E-Learning" style={{ background: '#111', color: "var(--text-primary)" }}>E-Learning & Digital Learning Solutions</option>
                    <option value="Recruitment" style={{ background: '#111', color: "var(--text-primary)" }}>Recruitment, Staffing & Talent Solutions</option>
                    <option value="Financial Consultancy" style={{ background: '#111', color: "var(--text-primary)" }}>Financial Consultancy & Accounting Services</option>
                    <option value="General" style={{ background: '#111', color: "var(--text-primary)" }}>General Inquiry</option>
                </select>
            </div>

            <div>
                <label style={labelStyle}>Message *</label>
                <textarea rows="5" required style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    onFocus={onFocus} onBlur={onBlur}
                    placeholder="Describe your requirements or challenges..." />
            </div>

            <button type="submit" style={{
                width: '100%', padding: '14px', borderRadius: '10px',
                border: '1.5px solid #0D9488',
                background: 'transparent', color: '#0F766E', fontSize: '12px', fontWeight: '700',
                letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 0.25s', fontFamily: "'Poppins', sans-serif",
            }}
                onMouseEnter={e => { e.target.style.background = '#0D9488'; e.target.style.color = '#ffffff'; e.target.style.boxShadow = '0 4px 20px rgba(13, 148, 136,0.3)'; }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#0F766E'; e.target.style.boxShadow = 'none'; }}>
                Send Enquiry →
            </button>
        </form>
    );
}