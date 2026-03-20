const navItems = [
  { label: "Projects", href: "#workbench" },
  { label: "Articles", href: "#notebook" },
  { label: "Reading List", href: "#bookshelf" },
  { label: "About", href: "#about" },
];

const SiteNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-3 flex items-center justify-between bg-background/90 backdrop-blur-md border-b border-border">
      <span className="font-mono font-bold text-sm tracking-tight flex items-center gap-2">
        <span className="text-primary font-mono text-xs">[~]</span>
        <span>Grady Ottomeyer</span>
      </span>
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-mono text-[11px] uppercase tracking-widest text-dim hover:text-primary px-3 py-1.5 transition-colors hover:bg-secondary/50"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SiteNav;
