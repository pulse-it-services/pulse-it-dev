const PIT_TICKETS = [
  { id: 'PIT-4821', subject: 'Migrate legacy mail to managed cloud', pri: 'high', status: 'open', owner: 'R. Okafor', age: '2h' },
  { id: 'PIT-4818', subject: 'WordPress → new design system rebuild', pri: 'med', status: 'progress', owner: 'L. Tran', age: '1d' },
  { id: 'PIT-4810', subject: 'Add MFA to admin console', pri: 'high', status: 'progress', owner: 'R. Okafor', age: '1d' },
  { id: 'PIT-4799', subject: 'Quarterly security audit report', pri: 'low', status: 'open', owner: 'Unassigned', age: '3d' },
  { id: 'PIT-4790', subject: 'DNS cutover for marketing site', pri: 'med', status: 'resolved', owner: 'L. Tran', age: '5d' },
];
const PIT_PRI = { high: 'HIGH', med: 'MED', low: 'LOW' };
const PIT_TSTATUS = { open: 'OPEN', progress: 'IN_PROGRESS', resolved: 'RESOLVED' };

function TicketsTable({ onOpen }) {
  return (
    <section className="pp-panel">
      <div className="pp-panel__head">
        <h3>Support Tickets</h3>
        <button className="pp-btn pp-btn--mono"><Icon name="plus" size={14} />NEW_TICKET</button>
      </div>
      <div className="pp-table">
        <div className="pp-thead">
          <span>ID</span><span>SUBJECT</span><span>PRIORITY</span><span>STATUS</span><span>OWNER</span><span>AGE</span>
        </div>
        {PIT_TICKETS.map((t) => (
          <div key={t.id} className="pp-trow" onClick={() => onOpen(t)}>
            <span className="pp-tid">{t.id}</span>
            <span className="pp-tsubject">{t.subject}</span>
            <span><em className={'pp-pri pp-pri--' + t.pri}>{PIT_PRI[t.pri]}</em></span>
            <span><em className={'pp-tstatus pp-tstatus--' + t.status}>{PIT_TSTATUS[t.status]}</em></span>
            <span className="pp-towner">{t.owner}</span>
            <span className="pp-tage">{t.age}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { TicketsTable });
