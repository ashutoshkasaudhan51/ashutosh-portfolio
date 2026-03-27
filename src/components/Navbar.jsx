import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['About', 'Skills', 'Projects', 'Idea', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (section) => {
    setMenuOpen(false);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0 40px',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--dark)', letterSpacing: '-0.5px' }}>
          AK<span style={{ color: 'var(--blue)' }}>.</span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map(link => (
            <button key={link} onClick={() => handleNav(link)} style={{
              background: 'none', border: 'none', fontSize: '14px', fontWeight: 500,
              color: 'var(--muted)', cursor: 'pointer', transition: 'color 0.2s',
              padding: '4px 0',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--dark)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{link}</button>
          ))}
          <button onClick={() => handleNav('Contact')} style={{
            background: 'var(--blue)', color: '#fff', border: 'none',
            padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 600,
            cursor: 'pointer', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.9'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >Hire Me</button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', color: 'var(--dark)',
        }} className="mobile-menu-btn">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
          background: '#fff', borderBottom: '1px solid var(--border)',
          padding: '16px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: '4px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}>
          {navLinks.map(link => (
            <button key={link} onClick={() => handleNav(link)} style={{
              background: 'none', border: 'none', fontSize: '16px', fontWeight: 500,
              color: 'var(--text)', cursor: 'pointer', padding: '12px 0',
              textAlign: 'left', borderBottom: '1px solid var(--border)',
            }}>{link}</button>
          ))}
          <button onClick={() => handleNav('Contact')} style={{
            background: 'var(--blue)', color: '#fff', border: 'none',
            padding: '12px 20px', borderRadius: '8px', fontSize: '15px', fontWeight: 600,
            cursor: 'pointer', marginTop: '8px',
          }}>Hire Me</button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}
