function Topbar({ title }) {
  return (
    <header className="pp-topbar">
      <div>
        <div className="pp-eyebrow">PULSE_IT · CLIENT_CONSOLE</div>
        <h1 className="pp-title">{title}</h1>
      </div>
      <div className="pp-topbar__right">
        <label className="pp-search">
          <Icon name="search" size={16} />
          <input placeholder="Search tickets, assets…" />
        </label>
        <button className="pp-iconbtn"><Icon name="bell" size={18} /><span className="pp-dot" /></button>
        <div className="pp-avatar">AC</div>
      </div>
    </header>
  );
}
Object.assign(window, { Topbar });
