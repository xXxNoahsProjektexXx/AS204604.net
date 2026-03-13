import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { name, asn, email, type, message } = await req.json();

        if (!name || !email || !type || !message) {
            return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
        }

        // Build mailto-style response (no SMTP credentials needed in dev)
        // In production: configure SMTP via environment variables
        const smtpHost = process.env.SMTP_HOST;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;

        if (smtpHost && smtpUser && smtpPass) {
            // Production: send via nodemailer
            const nodemailer = await import('nodemailer');
            const transporter = nodemailer.default.createTransport({
                host: smtpHost,
                port: parseInt(process.env.SMTP_PORT || '587'),
                secure: process.env.SMTP_SECURE === 'true',
                auth: { user: smtpUser, pass: smtpPass },
            });

            await transporter.sendMail({
                from: `"AS204604 NOC Form" <${smtpUser}>`,
                replyTo: email,
                to: 'noc@AS204604.net',
                subject: `[AS204604] ${type.toUpperCase()} von ${name}${asn ? ` (${asn})` : ''}`,
                text: [
                    `Name:    ${name}`,
                    `ASN:     ${asn || 'n/a'}`,
                    `E-Mail:  ${email}`,
                    `Typ:     ${type}`,
                    '',
                    message,
                ].join('\n'),
                html: `
          <div style="font-family:monospace;background:#050810;color:#c8d8f0;padding:2rem;border:1px solid #1a2d4a">
            <h2 style="color:#00d4ff;font-family:monospace">[AS204604] NOC Kontaktformular</h2>
            <table>
              <tr><td style="color:#4a6080;padding:.3rem 1rem .3rem 0">Name:</td><td>${name}</td></tr>
              <tr><td style="color:#4a6080;padding:.3rem 1rem .3rem 0">ASN:</td><td>${asn || 'n/a'}</td></tr>
              <tr><td style="color:#4a6080;padding:.3rem 1rem .3rem 0">E-Mail:</td><td>${email}</td></tr>
              <tr><td style="color:#4a6080;padding:.3rem 1rem .3rem 0">Typ:</td><td>${type}</td></tr>
            </table>
            <hr style="border-color:#1a2d4a;margin:1rem 0"/>
            <pre style="color:#c8d8f0;white-space:pre-wrap">${message}</pre>
          </div>
        `,
            });
        } else {
            // Dev/no-SMTP: log to console
            console.log('📧 [NOC Contact Form]', { name, asn, email, type, message });
            console.log('ℹ️  Set SMTP_HOST, SMTP_USER, SMTP_PASS env vars to enable email sending.');
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('Contact form error:', err);
        return NextResponse.json({ error: 'Interner Fehler. Bitte direkt an noc@AS204604.net schreiben.' }, { status: 500 });
    }
}
