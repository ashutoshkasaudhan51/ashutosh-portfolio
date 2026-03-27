import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark)', color: '#fff',
      padding: '48px 40px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '4px' }}>
            Ashutosh Kasaudhan
          </h3>
          <p style={{ fontSize: '14px', color: '#94A3B8' }}>ashutoshkasaudhan51@gmail.com</p>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.3)',
            padding: '6px 16px', borderRadius: '100px', marginTop: '16px',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#60A5FA', display: 'inline-block' }} />
            <span style={{ fontSize: '13px', color: '#93C5FD', fontWeight: 500 }}>Open to Opportunities</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '13px', color: '#64748B', textAlign: 'center', width: '100%' }}>
            Made with ❤️ by Ashutosh · 2026 · Basti, Uttar Pradesh, India
          </p>
        </div>

        {/* Footer nav */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginTop: '20px', flexWrap: 'wrap' }}>
          {['About', 'Skills', 'Projects', 'Concept', 'Contact'].map(link => (
            <button key={link} onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })} style={{
              background: 'none', border: 'none', fontSize: '13px', color: '#64748B',
              cursor: 'pointer', transition: 'color 0.2s', fontFamily: 'inherit',
            }}
              onMouseEnter={e => e.target.style.color = '#94A3B8'}
              onMouseLeave={e => e.target.style.color = '#64748B'}
            >{link}</button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          footer { padding: 40px 20px !important; }
        }
      `}</style>
    </footer>
  );
}
