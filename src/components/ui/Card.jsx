import React, { useState } from 'react';

export default function Card({ title, subtitle, children, className = '', style = {} }) {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: isHovered ? '0 20px 40px rgba(15, 23, 42, 0.08)' : '0 4px 20px rgba(15, 23, 42, 0.02)',
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
                    color: '#0052cc',
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
                    color: '#0f172a',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.3'
                }}>
                    {title}
                </h3>
            )}

            <div style={{
                color: '#475569',
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