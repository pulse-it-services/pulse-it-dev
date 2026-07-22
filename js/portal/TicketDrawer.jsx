function TicketDrawer({ ticket, onClose }) {
  if (!ticket) return null;
  return (
    <div className="pp-overlay" onClick={onClose}>
      <aside className="pp-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="pp-drawer__head">
          <span className="pp-tid">{ticket.id}</span>
          <button className="pp-iconbtn" onClick={onClose}><Icon name="x" size={18} /></button>
        </div>
        <h2 className="pp-drawer__title">{ticket.subject}</h2>
        <div className="pp-drawer__meta">
          <em className={'pp-pri pp-pri--' + ticket.pri}>{(ticket.pri || '').toUpperCase()}</em>
          <span className="pit-status"><span className="pit-pip" />OWNER · {ticket.owner}</span>
        </div>
        <div className="pp-drawer__rule" />
        <div className="pp-thread">
          <div className="pp-msg">
            <div className="pp-msg__who">CLIENT · 2h ago</div>
            <p>Our legacy mail server is hitting capacity. We'd like to migrate to the managed cloud tier with zero downtime if possible.</p>
          </div>
          <div className="pp-msg pp-msg--eng">
            <div className="pp-msg__who">PULSE_ENGINEER · 1h ago</div>
            <p>Acknowledged. We'll stage a parallel cluster and cut over DNS during your low-traffic window. ETA 48h.</p>
          </div>
        </div>
        <div className="pp-replybar">
          <input placeholder="Reply to thread…" />
          <button className="pp-btn pp-btn--neon pp-btn--mono">SEND</button>
        </div>
      </aside>
    </div>
  );
}
Object.assign(window, { TicketDrawer });
