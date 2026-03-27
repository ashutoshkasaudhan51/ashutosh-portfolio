import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const teachingSkills = [
  'Mathematics (Class 1–5)',
  'Science (Class 1–5)',
  'English (Class 1–5)',
  'Concept-based teaching',
  'Student engagement',
];

const techSkills = [
  'Basic understanding of web and app development',
  'Experience with React Native CLI',
  'Understanding of modern development workflows',
  'Ability to learn new technologies quickly',
];

const tags = ['React Native', 'Supabase', 'JavaScript', 'Mobile Dev', 'UI Design', 'Teaching', 'Problem Solving', 'Communication'];

export default function Skills() {
  return (
    <section id="skills" style={{ background: '#fff', padding: '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '2px', background: 'var(--blue)' }} />
          <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', color: 'var(--blue)', textTransform: 'uppercase' }}>
            Skills
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--dark)', marginBottom: '48px' }}>
          What I bring to the table
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }} className="skills-grid">

          {/* Teaching */}
          <div style={{
            background: 'var(--blue-light)', borderRadius: 'var(--radius)',
            border: '1px solid var(--blue-mid)', padding: '28px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'var(--blue)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px',
              }}>🎓</div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--dark)' }}>Teaching Skills</div>
                <div style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: 500 }}>Classroom & Education</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {teachingSkills.map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="var(--blue)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#334155' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical */}
          <div style={{
            background: 'var(--dark)', borderRadius: 'var(--radius)',
            border: '1px solid #1E293B', padding: '28px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: '#1E293B', color: '#94A3B8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', fontWeight: 700, border: '1px solid #334155',
              }}>&lt;/&gt;</div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#F1F5F9' }}>Technical Skills</div>
                <div style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 500 }}>Development & Technology</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {techSkills.map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#94A3B8' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: '#fff', border: '1.5px solid var(--border)',
              padding: '6px 16px', borderRadius: '100px',
              fontSize: '13px', fontWeight: 500, color: 'var(--text)',
              transition: 'border-color 0.2s, color 0.2s',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.color = 'var(--blue)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)'; }}
            >{tag}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          #skills { padding: 70px 20px !important; }
        }
      `}</style>
    </section>
  );
}
