const navItems = [
  { label: "Projects", href: "#workbench" },
  { label: "Articles", href: "#notebook" },
  { label: "Reading List", href: "#bookshelf" },
  { label: "About", href: "#about" },
];

const SiteNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between bg-background/80 backdrop-blur-sm border-b border-border">
      <span className="font-mono font-bold text-sm tracking-tight">
        <span className="text-highlight">▪</span> Grady Ottomeyer
      </span>
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-mono text-[11px] uppercase tracking-widest text-dim hover:text-foreground transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SiteNav;
