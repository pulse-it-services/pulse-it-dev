function ContactModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (!open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div className="pit-overlay" onClick={onClose}>
      <div className="pit-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pit-modal__x" onClick={onClose}><Icon name="x" size={18} /></button>
        {!sent ? (
          <>
            <span className="pit-eyebrow">INITIATE_CONTACT</span>
            <h3 className="pit-modal__title">Talk to an Engineer</h3>
            <p className="pit-modal__sub">Tell us where you are today. We'll map the migration.</p>
            <label className="pit-field"><span>WORK_EMAIL</span>
              <input type="email" placeholder="you@company.com" /></label>
            <label className="pit-field"><span>WHAT_DO_YOU_NEED</span>
              <textarea rows="3" placeholder="IT support, a new website, cloud migration…" /></label>
            <button className="pit-btn pit-btn--neon pit-btn--mono" style={{ width: '100%' }}
                    onClick={() => setSent(true)}>TRANSMIT_REQUEST</button>
          </>
        ) : (
          <div className="pit-modal__done">
            <span className="pit-proof__icon" style={{ width: 48, height: 48 }}>
              <Icon name="check" size={24} color="var(--secondary)" />
            </span>
            <h3 className="pit-modal__title">Signal received.</h3>
            <p className="pit-modal__sub">An engineer will reach out within one business day.</p>
            <button className="pit-btn pit-btn--quiet" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
Object.assign(window, { ContactModal });
