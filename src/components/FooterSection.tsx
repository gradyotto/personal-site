const FooterSection = () => {
  return (
    <footer className="relative z-10 px-6 md:px-12 lg:px-24 py-16 border-t border-border">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 max-w-6xl">
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim hover:text-highlight transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim hover:text-highlight transition-colors"
          >
            X / Twitter
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-dim hover:text-highlight transition-colors"
          >
            Email
          </a>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-dim">
          Handcrafted in the USA
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
