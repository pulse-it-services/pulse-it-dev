const PIT_FOOTER = [
  { head: 'NAVIGATION', links: ['Innovation Hub', 'Success Stories', 'Engineer Docs'] },
  { head: 'LEGAL & AUDIT', links: ['Privacy Policy', 'Terms of Service', 'Security Audit'] },
];
function Footer() {
  return (
    <footer className="pit-footer">
      <div className="pit-footer__grid">
        <div className="pit-footer__brand">
          <a className="pit-logo">
            <img src="assets/logo-mark.svg" alt="" width="30" height="30" />
            <span className="pit-wm">PULSE<span>_IT</span></span>
          </a>
          <p>Advancing the standard of digital infrastructure through relentless innovation and unwavering security.</p>
        </div>
        {PIT_FOOTER.map((c) => (
          <div key={c.head} className="pit-footer__col">
            <h5>{c.head}</h5>
            {c.links.map((l) => <a key={l}>{l}</a>)}
          </div>
        ))}
        <div className="pit-footer__col">
          <h5>CONTACT</h5>
          <a>Contact Support</a>
          <div className="pit-footer__icons">
            <Icon name="git-branch" size={18} /><Icon name="share-2" size={18} /><Icon name="network" size={18} />
          </div>
        </div>
      </div>
      <div className="pit-footer__base">
        <span>® 2026 PULSE_IT. SECURING THE FUTURE.</span>
        <span className="pit-status"><span className="pit-pip" />ALL NODES OPERATIONAL</span>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
