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
            backgroundColor: '#0052cc',
            color: '#ffffff',
            boxShadow: isHovered ? '0 8px 20px rgba(0, 82, 204, 0.25)' : '0 4px 12px rgba(0, 82, 204, 0.15)',
            transform: isActive ? 'scale(0.97)' : isHovered ? 'translateY(-2px)' : 'none'
        },
        secondary: {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            boxShadow: isHovered ? '0 8px 20px rgba(255, 255, 255, 0.05)' : 'none',
            transform: isActive ? 'scale(0.97)' : isHovered ? 'translateY(-2px)' : 'none'
        },
        cta: {
            backgroundColor: '#00bfff',
            color: '#001133',
            fontWeight: '700',
            boxShadow: isHovered ? '0 12px 24px rgba(0, 191, 255, 0.4)' : '0 4px 14px rgba(0, 191, 255, 0.2)',
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