'use client';

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bg)', borderTop: '1px solid var(--border)',
            padding: '3rem 0', position: 'relative', zIndex: 1,
        }}>
            <style>{`
        .footer-link {
          font-family: 'Share Tech Mono', monospace;
          font-size: .72rem;
          color: var(--muted);
          text-decoration: none;
          transition: color .2s;
        }
        .footer-link:hover { color: var(--accent); }
      `}</style>
            <div style={{
                maxWidth: 1200, margin: '0 auto', padding: '0 2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: '1rem',
            }}>
        <span style={{ fontFamily: "'Orbitron',monospace", fontWeight: 900, fontSize: '.9rem', color: 'var(--muted)' }}>
          AS204604
        </span>
                <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '.72rem', color: 'var(--muted)' }}>
          © {new Date().getFullYear()} AS204604 — All rights reserved
        </span>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {[
                        { label: 'RIPE DB',   href: 'https://apps.db.ripe.net/db-web-ui/query?searchtext=AS204604' },
                        { label: 'PeeringDB', href: 'https://www.peeringdb.com' },
                        { label: 'NOC',       href: 'mailto:noc@AS204604.net' },
                    ].map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noreferrer' : undefined}
                            className="footer-link"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
