import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ServiceGrid from '../../components/sections/ServiceGrid';
import { financialServices, financialPromise } from '../../data/financialServices';

export default function FinancialConsultancyIndex() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1, maxWidth: '1200px', width: '100%', margin: '40px auto', padding: '0 24px' }}>
                <span style={{ textTransform: 'uppercase', color: '#0052cc', fontSize: '12px', fontWeight: 'bold' }}>Division 03</span>
                <h1 style={{ fontSize: '36px', color: '#172b4d', margin: '4px 0 16px 0' }}>Financial Consultancy & Accounting Services</h1>
                <p style={{ maxWidth: '800px', color: '#42526e', lineHeight: '1.6', fontSize: '16px' }}>
                    Our team of qualified Chartered Accountants, Certified Public Accountants (CPAs), financial analysts, and business advisory specialists brings together deep technical expertise and commercial acumen to support your financial health across every stage of your business lifecycle.
                </p>

                <ServiceGrid services={financialServices} />

                <div style={{ borderLeft: '4px solid #0052cc', paddingLeft: '24px', background: '#f4f5f7', padding: '24px', borderRadius: '0 8px 8px 0', marginTop: '40px' }}>
                    <h3 style={{ margin: '0 0 8px 0', color: '#172b4d' }}>{financialPromise.title}</h3>
                    <p style={{ margin: 0, fontStyle: 'italic', color: '#42526e', lineHeight: '1.6' }}>{financialPromise.text}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}