import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send (replace with your email API/formspree/emailjs)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  const contacts = [
    { icon: <Phone size={18} />, label: 'Phone', value: '9161219449', href: 'tel:9161219449' },
    { icon: <Mail size={18} />, label: 'Email', value: 'ashutoshkasaudhan51@gmail.com', href: 'mailto:ashutoshkasaudhan51@gmail.com' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Basti, Uttar Pradesh, India', href: null },
  ];

  return (
    <section id="contact" style={{ background: '#fff', padding: '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '2px', background: 'var(--blue)' }} />
          <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', color: 'var(--blue)', textTransform: 'uppercase' }}>
            Contact
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--dark)', marginBottom: '12px' }}>
          Let's get in touch
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '48px', maxWidth: '480px', lineHeight: 1.7 }}>
          Whether you have a teaching opportunity, a development project, or just want to connect — I'd love to hear from you.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="contact-grid">

          {/* Contact info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {contacts.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'var(--blue-light)', color: 'var(--blue)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--light)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>
                      {c.label}
                    </div>
                    {c.href ? (
                      <a href={c.href} style={{ fontSize: '15px', color: 'var(--dark)', fontWeight: 500, transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = 'var(--blue)'}
                        onMouseLeave={e => e.target.style.color = 'var(--dark)'}
                      >{c.value}</a>
                    ) : (
                      <span style={{ fontSize: '15px', color: 'var(--dark)', fontWeight: 500 }}>{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{
                background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 'var(--radius)',
                padding: '32px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#166534', marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ fontSize: '14px', color: '#15803D' }}>Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setSent(false)} style={{
                  marginTop: '20px', background: 'var(--blue)', color: '#fff', border: 'none',
                  padding: '10px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Your Name', name: 'name', type: 'text', placeholder: 'e.g. Rahul Sharma' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type} name={field.name} value={form[field.name]}
                      onChange={handle} placeholder={field.placeholder} required
                      style={{
                        width: '100%', padding: '12px 16px', borderRadius: '10px',
                        border: '1.5px solid var(--border)', fontSize: '14px', color: 'var(--dark)',
                        outline: 'none', transition: 'border-color 0.2s',
                        background: '#fff', fontFamily: 'inherit',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea name="message" value={form.message} onChange={handle}
                    placeholder="Write your message here..." required rows={5}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1.5px solid var(--border)', fontSize: '14px', color: 'var(--dark)',
                      outline: 'none', resize: 'vertical', fontFamily: 'inherit',
                      transition: 'border-color 0.2s', background: '#fff',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button type="submit" disabled={loading} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: loading ? '#93C5FD' : 'var(--blue)', color: '#fff', border: 'none',
                  padding: '14px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#1D4ED8'; }}
                  onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--blue)'; }}
                >
                  <Send size={16} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #contact { padding: 70px 20px !important; }
        }
      `}</style>
    </section>
  );
}
