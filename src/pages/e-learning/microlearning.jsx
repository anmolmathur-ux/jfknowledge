import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { elearningServices } from '../../data/elearningServices';

export default function MicrolearningPage() {
  const data = elearningServices.find(s => s.id === 'microlearning');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, maxWidth: '800px', margin: '60px auto', padding: '0 24px' }}>
        <h1 style={{ color: '#172b4d' }}>{data.title}</h1>
        <p style={{ fontSize: '18px', fontWeight: '500', color: '#0052cc' }}>{data.summary}</p>
        <p style={{ lineHeight: '1.6', color: '#42526e' }}>{data.description}</p>
        <h3>Bite-Sized Retention Mechanics:</h3>
        <ul>
          {data.features.map((f, i) => <li key={i} style={{ padding: '4px 0', color: '#42526e' }}>{f}</li>)}
        </ul>
      </main>
      <Footer />
    </div>
  );
}