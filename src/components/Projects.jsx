import React from 'react';
import { Globe, Smartphone, ArrowUpRight, Layers } from 'lucide-react';

const projects = [
  {
    type: 'Web',
    icon: <Globe size={16} />,
    title: 'Personal Portfolio Website',
    desc: 'A modern personal website built using React-based architecture, focusing on clean UI and responsive design.',
    features: ['Component-based structure', 'Responsive layout', 'Clean and minimal interface'],
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    dark: false,
    link: '#',
  },
  {
    type: 'Mobile',
    icon: <Smartphone size={16} />,
    title: 'Wholesale Business App',
    desc: 'A mobile-first business management system built using React Native CLI and Supabase for real-time data handling.',
    features: ['Customer interface', 'Worker dashboard', 'Admin control system', 'Real-time data handling'],
    tags: ['React Native CLI', 'Supabase', 'JavaScript'],
    dark: true,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-section)', padding: '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', color: 'var(--blue)', textTransform: 'uppercase' }}>
                Projects
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--dark)' }}>
              Things I've built
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '300px', lineHeight: 1.7 }}>
            Real-world projects combining teaching insights with modern development tools.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} style={{
              background: p.dark ? 'var(--dark)' : '#fff',
              borderRadius: 'var(--radius)',
              border: p.dark ? '1px solid #1E293B' : '1px solid var(--border)',
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: 'var(--shadow)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
            >
              {/* Screenshot placeholder */}
              <div style={{
                height: '180px', background: p.dark ? '#1E293B' : 'var(--blue-light)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
              }}>
                <div style={{ color: p.dark ? '#475569' : '#93C5FD', opacity: 0.8 }}>
                  {p.dark ? <Smartphone size={36} /> : <Globe size={36} />}
                </div>
                <span style={{ fontSize: '13px', color: p.dark ? '#475569' : '#93C5FD', fontWeight: 500 }}>
                  Screenshot coming soon
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ color: p.dark ? '#94A3B8' : 'var(--blue)' }}>{p.icon}</div>
                    <span style={{
                      background: p.dark ? '#1E293B' : 'var(--blue-light)',
                      color: p.dark ? '#94A3B8' : 'var(--blue)',
                      padding: '3px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600,
                      border: p.dark ? '1px solid #334155' : '1px solid var(--blue-mid)',
                    }}>{p.type}</span>
                  </div>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: p.dark ? '#1E293B' : 'var(--bg-section)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: p.dark ? '#94A3B8' : 'var(--muted)',
                    border: p.dark ? '1px solid #334155' : '1px solid var(--border)',
                    cursor: 'pointer',
                  }}>
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: 700, color: p.dark ? '#F1F5F9' : 'var(--dark)', marginBottom: '8px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '14px', color: p.dark ? '#94A3B8' : 'var(--muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                  {p.desc}
                </p>

                <div style={{ marginBottom: '16px' }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <Layers size={13} style={{ color: p.dark ? '#475569' : '#93C5FD', flexShrink: 0 }} />
                      <span style={{ fontSize: '13px', color: p.dark ? '#64748B' : 'var(--muted)' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      background: p.dark ? '#1E293B' : 'var(--bg-section)',
                      color: p.dark ? '#94A3B8' : 'var(--text)',
                      padding: '4px 12px', borderRadius: '6px',
                      fontSize: '12px', fontWeight: 600,
                      border: p.dark ? '1px solid #334155' : '1px solid var(--border)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          #projects { padding: 70px 20px !important; }
        }
      `}</style>
    </section>
  );
}
