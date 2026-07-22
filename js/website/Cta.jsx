function Cta({ onCta }) {
  return (
    <section className="pit-section">
      <div className="pit-cta">
        <div className="pit-cta__glow" />
        <h2 className="pit-h2">Ready to Evolve?</h2>
        <p className="pit-sub">Join the businesses who have already secured their digital future with Pulse IT Consulting.</p>
        <div className="pit-cta__actions">
          <button className="pit-btn pit-btn--neon pit-btn--mono" onClick={onCta}>START_MIGRATION</button>
          <button className="pit-btn pit-btn--quiet" onClick={onCta}>Talk to an Engineer</button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Cta });
