import React from 'react';
import { BookOpen, Settings, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: <BookOpen size={20} />,
    title: 'Teaching Skills',
    desc: 'Experienced in teaching Mathematics, Science, and English to primary school students with concept-based methods.',
  },
  {
    icon: <Settings size={20} />,
    title: 'Tech Learning',
    desc: 'Actively learning modern web and mobile development technologies including React Native CLI and Supabase.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Problem Solving',
    desc: 'Combines analytical thinking and creativity to build practical digital solutions for real-world challenges.',
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-section)', padding: '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">

          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', color: 'var(--blue)', textTransform: 'uppercase' }}>
                About Me
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-1px', marginBottom: '24px', color: 'var(--dark)' }}>
              A student who loves{' '}
              <span style={{ color: 'var(--blue)' }}>teaching</span>{' '}
              and <span style={{ color: 'var(--blue)' }}>building</span>.
            </h2>

            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
              I'm Ashutosh Kasaudhan, a Class 12 graduate (2026) from Basti, Uttar Pradesh, India. With a strong academic foundation — scoring{' '}
              <strong style={{ color: 'var(--dark)' }}>94.6% in Class 10</strong> — I have developed a passion for both education and technology.
            </p>

            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>
              I enjoy simplifying complex concepts for young learners while simultaneously exploring modern development tools to build practical digital solutions. My dual interest in teaching and tech drives me to create meaningful impact in both classrooms and codebases.
            </p>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {highlights.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '16px', alignItems: 'flex-start',
                background: '#fff', padding: '20px 24px', borderRadius: 'var(--radius)',
                border: '1px solid var(--border)', boxShadow: 'var(--shadow)',
                transition: 'box-shadow 0.2s, transform 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'var(--blue-light)', color: 'var(--blue)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about { padding: 70px 20px !important; }
        }
      `}</style>
    </section>
  );
}
