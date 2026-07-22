function PortalApp() {
  const [active, setActive] = React.useState('overview');
  const [ticket, setTicket] = React.useState(null);
  useLucide();
  const titles = { overview: 'Overview', tickets: 'Support Tickets', monitoring: 'Monitoring', assets: 'Assets', billing: 'Billing' };
  return (
    <div className="pp-shell">
      <Sidebar active={active} onNav={setActive} />
      <div className="pp-main">
        <Topbar title={titles[active]} />
        <div className="pp-content">
          <StatCards />
          <div className="pp-grid2">
            <UptimeChart />
            <SystemStatus />
          </div>
          <TicketsTable onOpen={setTicket} />
        </div>
      </div>
      <TicketDrawer ticket={ticket} onClose={() => setTicket(null)} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<PortalApp />);
