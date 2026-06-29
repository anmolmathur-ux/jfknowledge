import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ServiceGrid from '../../components/sections/ServiceGrid';
import Table from '../../components/ui/Table';
import { recruitmentServices, geographicFootprint, recruitmentPromise } from '../../data/recruitmentServices';

export default function RecruitmentIndex() {
    const footprintData = geographicFootprint.map(f => [f.region, f.details]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1, maxWidth: '1200px', width: '100%', margin: '40px auto', padding: '0 24px' }}>
                <span style={{ textTransform: 'uppercase', color: '#0052cc', fontSize: '12px', fontWeight: 'bold' }}>Division 02</span>
                <h1 style={{ fontSize: '36px', color: '#172b4d', margin: '4px 0 16px 0' }}>Recruitment, Staffing & Talent Solutions</h1>
                <p style={{ maxWidth: '800px', color: '#42526e', lineHeight: '1.6', fontSize: '16px' }}>
                    We deliver end-to-end recruitment and staffing solutions across permanent placement, contract staffing, staff augmentation, and executive search — serving clients in the US, UK, Europe, GCC, and beyond.
                </p>

                <ServiceGrid services={recruitmentServices} />

                <div style={{ margin: '40px 0' }}>
                    <h3 style={{ fontSize: '22px', color: '#172b4d', marginBottom: '16px' }}>Geographic Capability Execution Matrix</h3>
                    <Table headers={["Target Market", "Operational & Compliance Coverage Details"]} data={footprintData} />
                </div>

                <div style={{ background: 'linear-gradient(135deg, #403294 0%, #0747a6 100%)', color: '#fff', padding: '32px', borderRadius: '8px' }}>
                    <h3 style={{ margin: '0 0 8px 0', color: '#fff' }}>{recruitmentPromise.title}</h3>
                    <p style={{ margin: 0, lineHeight: '1.6', color: '#eae6ff' }}>{recruitmentPromise.text}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}