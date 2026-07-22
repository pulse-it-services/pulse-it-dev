const PIT_SERVICES_STATUS = [
  { name: 'Cloud Cluster · us-east', state: 'operational', meta: '128 nodes' },
  { name: 'Edge Network', state: 'operational', meta: 'sub-1ms' },
  { name: 'Threat Detection', state: 'operational', meta: 'real-time' },
  { name: 'Backup Pipeline', state: 'degraded', meta: 'retrying' },
  { name: 'Quantum Encryption', state: 'operational', meta: 'v2.4' },
];
const PIT_STATE_LABEL = { operational: 'OPERATIONAL', degraded: 'DEGRADED', critical: 'CRITICAL' };
function SystemStatus() {
  return (
    <section className="pp-panel">
      <div className="pp-panel__head">
        <h3>System Status</h3>
        <span className="pit-status"><span className="pit-pip" />LIVE</span>
      </div>
      <ul className="pp-statlist">
        {PIT_SERVICES_STATUS.map((s) => (
          <li key={s.name} className="pp-statrow">
            <span className={'pp-srvpip pp-srvpip--' + s.state} />
            <span className="pp-srvname">{s.name}</span>
            <span className="pp-srvmeta">{s.meta}</span>
            <span className={'pp-srvstate pp-srvstate--' + s.state}>{PIT_STATE_LABEL[s.state]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Object.assign(window, { SystemStatus });
