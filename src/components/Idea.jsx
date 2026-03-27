import React from 'react';
import { ClipboardList, CreditCard, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: <ClipboardList size={22} />,
    title: 'Attendance Tracking',
    desc: 'Automated daily attendance records for students and staff with instant reports and analytics.',
  },
  {
    icon: <CreditCard size={22} />,
    title: 'Fee Management',
    desc: 'Simplified fee collection, payment tracking, and automated reminders for pending dues.',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Result System',
    desc: 'Digital mark entry, grade calculation, and instant report card generation for all students.',
  },
];

export default function Idea() {
  return (
    <section id="idea" style={{
      padding: '100px 40px',
      background: 'linear-gradient(135deg, #F0F9FF 0%, #F0FDF4 100%)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'start', marginBottom: '48px' }} className="idea-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', color: 'var(--blue)', textTransform: 'uppercase' }}>
                Concept Idea
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--dark)', marginBottom: '16px' }}>
              School Management System
            </h2>

            <span style={{
              display: 'inline-block',
              background: 'var(--blue-light)', color: 'var(--blue)',
              border: '1px solid var(--blue-mid)',
              padding: '5px 14px', borderRadius: '100px', fontSize: '13px', fontWeight: 600,
              marginBottom: '24px',
            }}>Concept / Work in Progress</span>

            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--light)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
                The Problem
              </p>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7 }}>
                Most schools in small towns and cities in India still rely on manual registers, physical fee receipts, and paper-based result systems. This leads to inefficiency, data loss, and poor communication between schools and parents.
              </p>
            </div>

            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--light)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
                The Solution
              </p>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7 }}>
                A lightweight, affordable SaaS platform tailored for Indian schools — handling attendance, fees, and results digitally. Built with simplicity first, so even non-technical staff can use it with minimal training.
              </p>
            </div>
          </div>

          {/* App Icon */}
          <div style={{
            width: '100px', height: '100px', borderRadius: '22px',
            background: 'linear-gradient(135deg, var(--blue) 0%, #60A5FA 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '48px', flexShrink: 0,
            boxShadow: '0 12px 40px rgba(37, 99, 235, 0.25)',
          }}>
            🏫
          </div>
        </div>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="idea-features">
          {features.map((f, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: '28px',
              boxShadow: 'var(--shadow)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: 'var(--blue-light)', color: 'var(--blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>{f.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--dark)', marginBottom: '8px' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .idea-features { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .idea-header { grid-template-columns: 1fr !important; }
          #idea { padding: 70px 20px !important; }
        }
      `}</style>
    </section>
  );
}
