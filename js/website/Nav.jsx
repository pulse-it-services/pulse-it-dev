function Nav({ active, onNav, onCta }) {
  const links = ['Services', 'Innovation', 'Portfolio', 'About'];
  const [open, setOpen] = React.useState(false);
  return (
    <header className="pit-nav">
      <a className="pit-logo" onClick={() => onNav('Services')}>
        <img src="assets/logo-mark.svg" alt="" width="32" height="32" />
        <span className="pit-wm">PULSE<span>_IT</span></span>
      </a>

      <nav className="pit-navlinks">
        {links.map((l) => (
          <a key={l}
             className={'pit-navlink' + (active === l ? ' is-active' : '')}
             onClick={() => onNav(l)}>{l}</a>
        ))}
      </nav>

      <button className="pit-btn pit-btn--mono pit-nav-cta" onClick={onCta}>GET_STARTED</button>

      <button className="pit-burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <Icon name={open ? 'x' : 'menu'} size={22} />
      </button>

      {open && (
        <div className="pit-mobilemenu">
          {links.map((l) => (
            <a key={l} className="pit-navlink" onClick={() => { onNav(l); setOpen(false); }}>{l}</a>
          ))}
          <button className="pit-btn pit-btn--mono" onClick={() => { onCta(); setOpen(false); }}>GET_STARTED</button>
        </div>
      )}
    </header>
  );
}
Object.assign(window, { Nav });
