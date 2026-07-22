const PIT_SERVICES = [
  { icon: 'cloud-cog', title: 'Cloud Solutions',
    body: 'Scalable multi-cloud orchestration and containerized deployment strategies for zero-downtime scaling.',
    link: 'EXPLORE_PROTOCOL' },
  { icon: 'shield-check', title: 'Cybersecurity',
    body: 'Military-grade encryption and real-time threat detection powered by autonomous monitoring systems.',
    link: 'SECURE_ACCESS' },
  { icon: 'cpu', title: 'AI Integration',
    body: 'Seamlessly inject cognitive automation into your existing workflows to maximize operational velocity.',
    link: 'INITIATE_MODELS' },
];

function ServiceCard({ s }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article className={'pit-svc' + (hover ? ' is-hover' : '')}
             onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="pit-svc__icon"><Icon name={s.icon} size={22} /></div>
      <h3 className="pit-svc__title">{s.title}</h3>
      <p className="pit-svc__body">{s.body}</p>
      <a className="pit-monolink">{s.link} <Icon name="arrow-right" size={14} /></a>
    </article>
  );
}

function Services() {
  return (
    <section className="pit-section" id="services">
      <div className="pit-section__head">
        <h2 className="pit-h2">Our Core Expertise</h2>
        <p className="pit-sub">Specialized vertical solutions designed to withstand the complexities of the modern digital landscape.</p>
      </div>
      <div className="pit-svc-grid">
        {PIT_SERVICES.map((s) => <ServiceCard key={s.title} s={s} />)}
      </div>
    </section>
  );
}
Object.assign(window, { Services });
