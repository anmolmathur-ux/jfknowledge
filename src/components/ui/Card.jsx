import React, { useState } from 'react';

export default function Card({ title, subtitle, children, className = '', style = {} }) {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: isHovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: isHovered ? 'translateY(-6px)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'left',
        ...style
    };

    return (
        <div
            style={cardStyle}
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Subtle premium accent layout strip indicator */}
            {isHovered && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #0052cc, #00bfff)'
                }} />
            )}

            {subtitle && (
                <span style={{
                    color: 'var(--primary-light)',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '-4px'
                }}>
                    {subtitle}
                </span>
            )}

            {title && (
                <h3 style={{
                    margin: 0,
                    fontSize: '22px',
                    fontWeight: '800',
                    color: 'var(--text-heading)',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.3'
                }}>
                    {title}
                </h3>
            )}

            <div style={{
                color: 'var(--text-muted)',
                fontSize: '15px',
                lineHeight: '1.6',
                display: 'flex',
                flexDirection: 'column',
                gap: 'inherit'
            }}>
                {children}
            </div>
        </div>
    );
}