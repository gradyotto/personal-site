const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative z-10 px-6 md:px-12 lg:px-24 max-w-5xl">
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Grady Ottomeyer
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold leading-[1.1] mb-6 max-w-3xl">
        Reviving the{" "}
        <span className="text-highlight">American</span> industrial base
      </h1>
      <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
        Techno-optimist and American Dynamist. I believe reshoring American manufacturing is the single most pivotal step toward our long-term national success and resilience.
      </p>
      <div className="flex gap-4 font-mono text-xs uppercase tracking-widest text-dim">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-primary/60" />
          AI
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-primary/60" />
          Manufacturing
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-primary/60" />
          Robotics
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-primary/60" />
          Logistics
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
