function Hero({ onCta }) {
  return (
    <section className="pit-hero">
      <div className="pit-hero__copy">
        <span className="pit-eyebrow">ENTERPRISE_INFRASTRUCTURE · ELITE</span>
        <h1 className="pit-h1">
          Future-Proof Your<br />
          <span className="text-gradient">Infrastructure</span>
        </h1>
        <p className="pit-lead">
          Deploying next-generation security and high-performance computing
          clusters for forward-thinking businesses. We bridge the gap between
          legacy systems and the autonomous future.
        </p>
        <div className="pit-hero__cta">
          <button className="pit-btn pit-btn--neon" onClick={onCta}>Get Started</button>
          <button className="pit-btn pit-btn--quiet">View Roadmap</button>
        </div>
      </div>

      <div className="pit-hero__panel">
        <div className="pit-render">
          <Icon name="terminal" size={40} color="var(--secondary)" />
          <div className="pit-render__glow" />
          <div className="pit-render__bars">
            <span style={{ width: '70%' }} /><span style={{ width: '45%' }} />
            <span style={{ width: '88%' }} /><span style={{ width: '32%' }} />
          </div>
        </div>
        <div className="pit-render__status">
          <span className="pit-status"><span className="pit-pip" />SYSTEM ONLINE</span>
          <span className="pit-status pit-status--mag">ENCRYPTED_SIGNAL_v2.4</span>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
