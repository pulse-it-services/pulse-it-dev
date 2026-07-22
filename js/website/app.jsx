function WebsiteApp() {
  const [active, setActive] = React.useState('Services');
  const [modal, setModal] = React.useState(false);
  useLucide();

  const openModal = () => setModal(true);
  const onNav = (l) => {
    setActive(l);
    const map = { Services: 'services', Innovation: 'services', Portfolio: 'services', About: 'services' };
    const el = document.getElementById(map[l]);
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
  };

  return (
    <div className="pit-site">
      <div className="pit-bg" />
      <Nav active={active} onNav={onNav} onCta={openModal} />
      <main>
        <Hero onCta={openModal} />
        <Services />
        <Feature />
        <Cta onCta={openModal} />
      </main>
      <Footer />
      <ContactModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<WebsiteApp />);
