import React, { useState } from 'react';

export default function Table({ headers = [], data = [], className = '', style = {} }) {
    const [hoveredRow, setHoveredRow] = useState(null);

    const wrapperStyle = {
        overflowX: 'auto',
        width: '100%',
        borderRadius: '16px',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        backgroundColor: 'var(--bg-surface)'
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '14px',
        textAlign: 'left',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        ...style
    };

    const thStyle = {
        backgroundColor: 'var(--bg-muted)',
        color: 'var(--text-heading)',
        fontWeight: '700',
        padding: '16px 24px',
        borderBottom: '2px solid var(--border-light)',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    };

    return (
        <div style={wrapperStyle} className={className}>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        {headers.map((h, idx) => (
                            <th key={idx} style={thStyle}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIdx) => (
                        <tr
                            key={rowIdx}
                            onMouseEnter={() => setHoveredRow(rowIdx)}
                            onMouseLeave={() => setHoveredRow(null)}
                            style={{
                                backgroundColor: hoveredRow === rowIdx ? 'var(--bg-muted)' : rowIdx % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-main)',
                                transition: 'background-color 0.15s ease'
                            }}
                        >
                            {row.map((cell, cellIdx) => (
                                <td
                                    key={cellIdx}
                                    style={{
                                        padding: '16px 24px',
                                        borderBottom: rowIdx === data.length - 1 ? 'none' : '1px solid var(--border-light)',
                                        color: 'var(--text-muted)',
                                        verticalAlign: 'middle',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}