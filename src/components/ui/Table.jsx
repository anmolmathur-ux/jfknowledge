import React, { useState } from 'react';

export default function Table({ headers = [], data = [], className = '', style = {} }) {
    const [hoveredRow, setHoveredRow] = useState(null);

    const wrapperStyle = {
        overflowX: 'auto',
        width: '100%',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
        backgroundColor: '#ffffff'
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
        backgroundColor: '#f8fafc',
        color: '#0f172a',
        fontWeight: '700',
        padding: '16px 24px',
        borderBottom: '2px solid #e2e8f0',
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
                                backgroundColor: hoveredRow === rowIdx ? '#f1f5f9' : rowIdx % 2 === 0 ? '#ffffff' : '#f8fafc',
                                transition: 'background-color 0.15s ease'
                            }}
                        >
                            {row.map((cell, cellIdx) => (
                                <td
                                    key={cellIdx}
                                    style={{
                                        padding: '16px 24px',
                                        borderBottom: rowIdx === data.length - 1 ? 'none' : '1px solid #e2e8f0',
                                        color: '#334155',
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