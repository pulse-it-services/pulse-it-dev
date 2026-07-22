const PIT_SERVICES = [
  { icon: 'headphones', title: 'IT Support Services',
    body: '24/7 helpdesk and proactive infrastructure monitoring that keeps your systems running, patched, and problem-free around the clock.',
    link: 'Explore (Read More) ->' },
  { icon: 'layout', title: 'Web Design Solutions',
    body: 'Modern, high-performance websites crafted with precision design and conversion-focused layouts that make your brand stand out.',
    link: 'Explore (Read More) ->' },
  { icon: 'workflow', title: 'Automation and App Development',
    body: 'Custom applications and workflow automation that eliminate repetitive tasks and streamline your operations end to end.',
    link: 'Explore (Read More) ->' },
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
