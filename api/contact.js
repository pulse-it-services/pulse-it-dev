// Vercel serverless function: receives the "Talk to an Engineer" modal POST
// and relays it to Resend. RESEND_API_KEY is a Vercel environment variable
// (Project Settings → Environment Variables) and never reaches the browser.
//
// Vercel environment variables (all optional except RESEND_API_KEY):
//   CONTACT_TO_EMAIL    where submissions are delivered
//   CONTACT_FROM_EMAIL  sender, e.g. "Pulse IT Website <website@yourdomain.com>"
//
// NOTE: until a domain is verified in Resend, the default sandbox sender
// (onboarding@resend.dev) can only deliver to the address the Resend account
// was created with. To test before then, set CONTACT_TO_EMAIL to that address.
// After verifying a domain, set CONTACT_FROM_EMAIL to an address on it and
// CONTACT_TO_EMAIL back to the Outlook inbox (or remove it to use the default).

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'Pulse-IT-Services@outlook.com';
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Pulse IT Website <onboarding@resend.dev>';
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

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set for this deployment');
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  let resendRes;
  try {
    resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        reply_to: email,
        subject: 'New contact form submission — Pulse IT',
        text: `From: ${email}\n\n${message}`,
      }),
    });
  } catch (err) {
    console.error('Could not reach Resend:', err && err.message);
    return res.status(502).json({ error: 'Failed to send' });
  }

  if (!resendRes.ok) {
    // Log Resend's reason to the Vercel function logs only; the browser just
    // gets a generic error.
    const detail = await resendRes.text().catch(() => '');
    console.error('Resend rejected the request:', resendRes.status, detail.slice(0, 500));
    return res.status(502).json({ error: 'Failed to send' });
  }

  return res.status(200).json({ ok: true });
};
