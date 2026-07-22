function UptimeChart() {
  const pts = [38, 30, 44, 28, 34, 22, 30, 18, 26, 16, 24, 14];
  const W = 520, H = 150, pad = 8;
  const max = 48;
  const step = (W - pad * 2) / (pts.length - 1);
  const coords = pts.map((v, i) => [pad + i * step, H - pad - (v / max) * (H - pad * 2)]);
  const line = coords.map((c, i) => (i ? 'L' : 'M') + c[0].toFixed(1) + ' ' + c[1].toFixed(1)).join(' ');
  const area = `${line} L ${W - pad} ${H} L ${pad} ${H} Z`;
  return (
    <section className="pp-panel">
      <div className="pp-panel__head">
        <h3>Network Latency</h3>
        <div className="pp-chiprow">
          <span className="pp-chip is-active">24H</span>
          <span className="pp-chip">7D</span>
          <span className="pp-chip">30D</span>
        </div>
      </div>
      <div className="pp-chart">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" width="100%" height="150">
          <defs>
            <linearGradient id="ppArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ppLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8083ff" />
              <stop offset="100%" stopColor="#4cd7f6" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#ppArea)" />
          <path d={line} fill="none" stroke="url(#ppLine)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {coords.map((c, i) => <circle key={i} cx={c[0]} cy={c[1]} r="2.5" fill="#4cd7f6" />)}
        </svg>
      </div>
      <div className="pp-chart__foot">
        <span className="pit-status pit-status--mag">PEAK 0.42ms</span>
        <span className="pit-status"><span className="pit-pip" />AVG 0.8ms · TRENDING DOWN</span>
      </div>
    </section>
  );
}
Object.assign(window, { UptimeChart });
