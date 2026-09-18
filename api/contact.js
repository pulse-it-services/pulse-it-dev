// Vercel serverless function: receives the "Talk to an Engineer" modal POST
// and relays it to Resend. RESEND_API_KEY is a Vercel environment variable
// (Project Settings → Environment Variables) and never reaches the browser.
//
// NOTE: while the Resend account is on the sandbox sender
// (onboarding@resend.dev, no verified domain), Resend only delivers to the
// email address the Resend account was signed up with — not CONTACT_TO_EMAIL
// below — until a sending domain is verified.

const CONTACT_TO_EMAIL = 'Pulse-IT-Services@outlook.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Only accept posts made from our own pages (blocks other sites' forms).
  const origin = req.headers.origin;
  if (origin) {
    let originHost = '';
    try { originHost = new URL(origin).host; } catch { /* malformed origin */ }
    if (originHost !== req.headers.host) {
      return res.status(403).json({ error: 'Forbidden' });
    }
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};

  // Honeypot: real visitors never see this field, so any value means a bot.
  // Reply with success so the bot can't tell it was filtered.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!email || !EMAIL_RE.test(email) || email.length > 320 || !message || message.length > 5000) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Pulse IT Website <onboarding@resend.dev>',
      to: CONTACT_TO_EMAIL,
      reply_to: email,
      subject: 'New contact form submission — Pulse IT',
      text: `From: ${email}\n\n${message}`,
    }),
  });

  if (!resendRes.ok) {
    return res.status(502).json({ error: 'Failed to send' });
  }

  return res.status(200).json({ ok: true });
};
