'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
            borderBottom: '1px solid var(--border)',
            background: scrolled ? 'rgba(5,8,16,.95)' : 'rgba(5,8,16,.7)',
            backdropFilter: 'blur(20px)',
            transition: 'background .3s',
        }}>
            <nav style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                height: 64, maxWidth: 1200, margin: '0 auto', padding: '0 2rem',
            }}>
        <span style={{
            fontFamily: "'Orbitron', monospace",
            fontWeight: 900, fontSize: '1.1rem',
            color: 'var(--accent)', letterSpacing: '.15em',
            textShadow: '0 0 20px rgba(0,212,255,.5)',
            cursor: 'pointer',
        }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          AS<span style={{ color: 'var(--muted)' }}>204604</span>
        </span>

                <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                    {['about', 'network', 'peering', 'contact'].map((id) => (
                        <li key={id}>
                            <button onClick={() => scrollTo(id)} style={{
                                fontFamily: "'Share Tech Mono', monospace",
                                fontSize: '.78rem', letterSpacing: '.1em',
                                color: 'var(--muted)', background: 'none', border: 'none',
                                textTransform: 'uppercase', cursor: 'pointer',
                                transition: 'color .2s',
                            }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                            >
                                {id}
                            </button>
                        </li>
                    ))}
                </ul>

                <div style={{
                    display: 'flex', alignItems: 'center', gap: '.5rem',
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: '.72rem', color: 'var(--accent3)',
                    border: '1px solid rgba(0,255,136,.2)', padding: '.25rem .75rem',
                    borderRadius: 2, background: 'rgba(0,255,136,.05)',
                }}>
          <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--accent3)', boxShadow: '0 0 8px var(--accent3)',
              display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
          }} />
                    OPERATIONAL
                </div>
            </nav>
            <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
        </header>
    );
}
