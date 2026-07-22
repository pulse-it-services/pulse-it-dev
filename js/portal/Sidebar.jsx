const PIT_NAV = [
  { id: 'overview', icon: 'layout-dashboard', label: 'Overview' },
  { id: 'tickets', icon: 'ticket', label: 'Tickets', badge: 4 },
  { id: 'monitoring', icon: 'activity', label: 'Monitoring' },
  { id: 'assets', icon: 'server', label: 'Assets' },
  { id: 'billing', icon: 'credit-card', label: 'Billing' },
];
function Sidebar({ active, onNav }) {
  return (
    <aside className="pp-sidebar">
      <div className="pp-logo">
        <img src="assets/logo-mark.svg" alt="" width="30" height="30" />
        <span className="pp-wm">PULSE<span>_IT</span></span>
      </div>
      <div className="pp-navlabel">CONSOLE</div>
      <nav className="pp-nav">
        {PIT_NAV.map((n) => (
          <a key={n.id} className={'pp-navitem' + (active === n.id ? ' is-active' : '')}
             onClick={() => onNav(n.id)}>
            <Icon name={n.icon} size={18} />
            <span>{n.label}</span>
            {n.badge && <span className="pp-navbadge">{n.badge}</span>}
          </a>
        ))}
      </nav>
      <div className="pp-sidefoot">
        <div className="pp-plan">
          <span className="pit-status"><span className="pit-pip" />ALL NODES OPERATIONAL</span>
          <p>Managed Plan · Tier III</p>
        </div>
      </div>
    </aside>
  );
}
Object.assign(window, { Sidebar });
