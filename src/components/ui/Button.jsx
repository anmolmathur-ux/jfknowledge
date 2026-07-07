import React, { useState } from 'react';

export default function Button({ children, variant = 'primary', onClick, type = 'button', className = '', style = {} }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const baseStyle = {
        padding: '14px 28px',
        borderRadius: '12px',
        fontWeight: '600',
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        textAlign: 'center',
        textDecoration: 'none',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        outline: 'none',
        userSelect: 'none'
    };

    const variants = {
        primary: {
            background: 'var(--gold-gradient)',
            color: 'rgb(0, 0, 0)',
            boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-sm)',
            transform: isActive ? 'scale(0.97)' : isHovered ? 'translateY(-2px)' : 'none'
        },
        secondary: {
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-visible)',
            backdropFilter: 'blur(8px)',
            boxShadow: isHovered ? 'var(--shadow-primary)' : 'none',
            transform: isActive ? 'scale(0.97)' : isHovered ? 'translateY(-2px)' : 'none'
        },
        cta: {
            background: 'var(--gold-gradient)',
            color: 'rgb(0, 0, 0)',
            fontWeight: '700',
            boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-sm)',
            transform: isActive ? 'scale(0.97)' : isHovered ? 'translateY(-2px)' : 'none'
        }
    };

    const computedStyle = { ...baseStyle, ...variants[variant], ...style };

    return (
        <button 
            type={type} 
            onClick={onClick} 
            style={computedStyle} 
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setIsActive(false); }}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
        >
            {children}
        </button>
    );
}