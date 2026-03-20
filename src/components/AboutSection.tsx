const AboutSection = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-4xl" id="about">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-xs text-dim">&#47;&#47;</span>
        <h2 className="text-xl md:text-2xl font-mono font-bold">About</h2>
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest border border-primary/30 px-2 py-0.5">Operator</span>
      </div>
      <div className="h-px bg-border mb-10" />

      <div className="space-y-5 text-base text-muted-foreground leading-[1.8] max-w-2xl">
        <p>
          I build things—software that ships and hardware that ships{" "}
          <span className="italic">product</span>. My work lives at the
          intersection of artificial intelligence and physical manufacturing,
          where bits meet atoms and code meets coolant.
        </p>
        <p>
          I believe the next great American companies won't just write
          software—they'll make things. Real, tangible things. The kind you
          can hold, measure, and trust. Modern AI and software tools can
          supercharge traditional industry, but only if builders are willing
          to get their hands dirty.
        </p>
        <p>
          Physical resilience in supply chains isn't a nice-to-have—it's a
          strategic imperative. I'm working to prove that small, tech-enabled
          manufacturers can compete at scale, rebuild domestic capacity, and
          create the kind of durable value that lasts generations.
        </p>
        <p className="font-mono text-sm text-dim border-l-2 border-primary/40 pl-4">
          Currently building <span className="text-primary font-bold">Tiber</span> — a modern machine shop
          for the AI age.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
