import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '80px 40px 60px',
      background: '#fff',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '60px',
      }} className="hero-grid">

        {/* Left content */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--blue-light)', border: '1px solid var(--blue-mid)',
            padding: '6px 14px', borderRadius: '100px', marginBottom: '32px',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--blue)', display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--blue)' }}>
              Open to Opportunities
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '16px' }}>
            <span style={{ color: 'var(--dark)' }}>Ashutosh</span><br />
            <span style={{ color: 'var(--blue)' }}>Kasaudhan</span>
          </h1>

          <p style={{ fontSize: '16px', color: 'var(--muted)', fontWeight: 500, marginBottom: '16px' }}>
            Student · Educator · Tech Enthusiast
          </p>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.7, marginBottom: '36px', maxWidth: '480px' }}>
            Passionate about teaching young students and building practical digital solutions using modern technologies.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo('projects')} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--blue)', color: '#fff', border: 'none',
              padding: '14px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1D4ED8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'none'; }}
            >
              View Projects <ArrowRight size={16} />
            </button>

            <button onClick={() => scrollTo('contact')} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#fff', color: 'var(--text)', border: '1.5px solid var(--border)',
              padding: '14px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--blue)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
            >
              <Mail size={16} /> Contact Me
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', marginTop: '48px', flexWrap: 'wrap' }}>
            {[
              { value: '94.6%', label: 'Class 10 Score' },
              { value: '2+', label: 'Projects Built' },
              { value: '2026', label: 'Class 12 Graduate' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-1px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500, marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Photo */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '320px', height: '320px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--blue) 0%, #60A5FA 100%)',
              padding: '4px',
              boxShadow: '0 20px 60px rgba(37, 99, 235, 0.2)',
            }}>
              <div style={{
                width: '100%', height: '100%', borderRadius: '50%',
                background: 'var(--blue-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
                border: '4px solid #fff',
              }}>
                {/* Placeholder - replace src with actual photo */}
                <img
                  src="/ashu.jpg""
                  alt="Ashutosh Kasaudhan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div style="font-size:80px;color:var(--blue)">AK</div>';
                  }}
                />
              </div>
            </div>

            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
              background: '#fff', borderRadius: '100px', padding: '8px 16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              display: 'flex', alignItems: 'center', gap: '8px',
              whiteSpace: 'nowrap',
            }}>
              <span style={{ fontSize: '18px' }}>🏫</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--dark)' }}>Student & Educator</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            order: 1;
          }
          .hero-grid > div:last-child {
            order: 0;
          }
          .hero-grid > div:first-child > div[style*="display: flex; gap: 12"] {
            justify-content: center;
          }
          .hero-grid > div:first-child > div[style*="display: flex; gap: 40"] {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          section { padding: 80px 20px 60px !important; }
        }
      `}</style>
    </section>
  );
}
