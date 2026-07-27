const PIT_PROOF = [
  { icon: 'circle-check-big', title: '99.999% Uptime Commitment',
    body: 'Redundant global nodes ensuring your services never skip a beat, regardless of regional incidents.' },
  { icon: 'zap', title: 'Latency Optimization',
    body: 'Edge computing nodes positioned at critical network junctions for sub-millisecond response times.' },
  { icon: 'lock', title: 'Automated Patch Management',
    body: 'Continuous update automation keeps every system running the latest security patches, closing vulnerability windows before they can be exploited.' },
];

function Feature() {
  return (
    <section className="pit-section pit-feature">
      <div className="pit-feature__media">
        <img className="pit-feature__img" src="assets/tech_001.jpg" alt="Data center hardware and network infrastructure" />
      </div>
      <div className="pit-feature__copy">
        <h2 className="pit-h2 pit-h2--left">Elite Scalability<br />&amp; Performance</h2>
        <p className="pit-sub pit-sub--left">We don't just build infrastructure; we build resilience. Our systems are engineered to handle the load of the next decade, today.</p>
        <ul className="pit-proof">
          {PIT_PROOF.map((p) => (
            <li key={p.title} className="pit-proof__item">
              <span className="pit-proof__icon"><Icon name={p.icon} size={18} /></span>
              <div>
                <h4 className="pit-proof__title">{p.title}</h4>
                <p className="pit-proof__body">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
Object.assign(window, { Feature });
