'use client';
import { CSSProperties } from 'react';

const s: Record<string, CSSProperties> = {
    section: {
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '8rem 0 4rem', position: 'relative', zIndex: 1,
    },
    wrap: { maxWidth: 1200, margin: '0 auto', padding: '0 2rem', width: '100%' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' },
    tag: {
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '.72rem', letterSpacing: '.25em',
        color: 'var(--accent)', textTransform: 'uppercase',
        marginBottom: '1.5rem',
        animation: 'fadeUp .6s .2s both',
    },
    title: {
        fontFamily: "'Orbitron', monospace",
        fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        lineHeight: 1.05, color: '#fff',
        animation: 'fadeUp .6s .3s both',
    },
    asn: {
        display: 'block', color: 'transparent',
        WebkitTextStroke: '1px var(--accent)',
        textShadow: '0 0 40px rgba(0,212,255,.3)',
    },
    desc: {
        marginTop: '1.5rem', fontSize: '1rem', lineHeight: 1.7,
        color: 'var(--muted)', maxWidth: 480,
        animation: 'fadeUp .6s .4s both',
    },
    btns: { display: 'flex', gap: '1rem', marginTop: '2.5rem', animation: 'fadeUp .6s .5s both' },
    primary: {
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '.8rem', letterSpacing: '.1em', padding: '.8rem 1.8rem',
        background: 'var(--accent)', color: '#000', border: 'none', cursor: 'pointer',
        clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
        fontWeight: 700, textTransform: 'uppercase',
        transition: 'background .2s, box-shadow .2s',
    },
    secondary: {
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '.8rem', letterSpacing: '.1em', padding: '.8rem 1.8rem',
        background: 'transparent', color: 'var(--accent)',
        border: '1px solid var(--border)', cursor: 'pointer',
        clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
        textTransform: 'uppercase', transition: 'border-color .2s, background .2s',
    },
};

export default function Hero() {
    const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section style={s.section} id="hero">
            <div style={s.wrap}>
                <div style={s.grid}>
                    <div>
                        <p style={s.tag as CSSProperties}>// Autonomous System Network</p>
                        <h1 style={s.title as CSSProperties}>
                            NETWORK<br />
                            <span style={s.asn}>AS204604</span>
                        </h1>
                        <p style={s.desc as CSSProperties}>
                            Ein unabhängiges autonomes System, das zuverlässige, hochperformante Internetkonnektivität
                            und Transit-Services bereitstellt. Gebaut auf modernen Routing-Protokollen und
                            offener Peering-Politik.
                        </p>
                        <div style={s.btns as CSSProperties}>
                            <button style={s.primary as CSSProperties}
                                    onClick={() => scroll('peering')}
                                    onMouseEnter={e => { (e.target as HTMLElement).style.background = '#33ddff'; }}
                                    onMouseLeave={e => { (e.target as HTMLElement).style.background = 'var(--accent)'; }}
                            >
                                Peering Policy
                            </button>
                            <button style={s.secondary as CSSProperties}
                                    onClick={() => scroll('contact')}
                                    onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = 'var(--accent)'; }}
                                    onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = 'var(--border)'; }}
                            >
                                NOC Kontakt
                            </button>
                        </div>
                    </div>
                    <Terminal />
                </div>
            </div>
            <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        @keyframes fadeLeft { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:none} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
        </section>
    );
}

function Terminal() {
    return (
        <div style={{
            background: 'var(--panel)', border: '1px solid var(--border)',
            borderRadius: 4, overflow: 'hidden',
            boxShadow: '0 0 60px rgba(0,212,255,.08), inset 0 1px 0 rgba(255,255,255,.03)',
            animation: 'fadeLeft .7s .4s both',
        }}>
            <div style={{
                display: 'flex', alignItems: 'center', gap: '.5rem',
                padding: '.75rem 1rem', background: 'rgba(255,255,255,.03)',
                borderBottom: '1px solid var(--border)',
            }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display:'block' }} />
                ))}
                <span style={{
                    fontFamily: "'Share Tech Mono', monospace", fontSize: '.72rem',
                    color: 'var(--muted)', margin: '0 auto',
                }}>bgp-session — ssh noc@as204604.net</span>
            </div>
            <div style={{ padding: '1.25rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '.78rem', lineHeight: 1.9 }}>
                {[
                    ['prompt','root@router1:~$', 'cmd','birdc show protocols'],
                    ['out','Name       Proto      State   '],
                    ['val','BGP_UPLINK1', 'out',' BGP ', 'ok','up', 'out',' 2024-01-15'],
                    ['val','BGP_PEER1  ', 'out',' BGP ', 'ok','up', 'out',' 2024-01-20'],
                    ['val','BGP_IX1    ', 'out',' BGP ', 'ok','up', 'out',' 2025-03-10'],
                    [],
                    ['prompt','root@router1:~$', 'cmd','birdc show route count'],
                    ['out','Total:    ', 'val','928.431', 'out',' routes'],
                    ['out','Active:   ', 'val','456.218', 'out',' routes'],
                    [],
                    ['prompt','root@router1:~$', 'cursor',''],
                ].map((line, i) => (
                    <div key={i}>
                        {line.length === 0 ? <>&nbsp;</> : line.reduce((acc: React.ReactNode[], item, j) => {
                            if (j % 2 === 0) return acc;
                            const type = line[j-1];
                            const colors: Record<string,string> = {
                                prompt:'var(--accent3)', cmd:'#fff', out:'var(--muted)',
                                val:'var(--accent)', ok:'var(--accent3)',
                            };
                            if (type === 'cursor') {
                                acc.push(<span key={j} style={{ display:'inline-block', width:8, height:14, background:'var(--accent)', animation:'blink 1s step-end infinite', verticalAlign:'middle' }} />);
                            } else {
                                acc.push(<span key={j} style={{ color: colors[type as string] || '#fff' }}>{item}</span>);
                            }
                            return acc;
                        }, [])}
                    </div>
                ))}
            </div>
        </div>
    );
}
