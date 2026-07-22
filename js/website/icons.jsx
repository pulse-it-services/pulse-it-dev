function Icon({ name, size = 20, color, strokeWidth = 2, style = {} }) {
  return (
    <i
      data-lucide={name}
      style={{ width: size, height: size, display: 'inline-flex', color, ...style }}
      data-stroke={strokeWidth}
    />
  );
}

function useLucide() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

Object.assign(window, { Icon, useLucide });
