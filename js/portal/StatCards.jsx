const PIT_STATS = [
  { label: 'OPEN_TICKETS', value: '4', delta: '−2 this week', trend: 'down', good: true, icon: 'ticket' },
  { label: 'UPTIME_30D', value: '99.999%', delta: 'SLA met', trend: 'flat', good: true, icon: 'circle-check-big' },
  { label: 'AVG_RESPONSE', value: '0.8ms', delta: '−0.2ms', trend: 'down', good: true, icon: 'zap' },
  { label: 'ACTIVE_NODES', value: '128', delta: '+6 online', trend: 'up', good: true, icon: 'server' },
];
function StatCards() {
  return (
    <div className="pp-stats">
      {PIT_STATS.map((s) => (
        <div key={s.label} className="pp-stat">
          <div className="pp-stat__top">
            <span className="pp-stat__icon"><Icon name={s.icon} size={16} /></span>
            <span className="pp-stat__label">{s.label}</span>
          </div>
          <div className="pp-stat__value">{s.value}</div>
          <div className={'pp-stat__delta' + (s.good ? ' is-good' : '')}>
            <Icon name={s.trend === 'up' ? 'trending-up' : s.trend === 'down' ? 'trending-down' : 'minus'} size={14} />
            {s.delta}
          </div>
        </div>
      ))}
    </div>
  );
}
Object.assign(window, { StatCards });
