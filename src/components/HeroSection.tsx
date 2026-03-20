const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative z-10 px-6 md:px-12 lg:px-24 max-w-5xl">
      <div className="mb-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-highlight">
          Digital Workshop
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold leading-[1.1] mb-6 max-w-3xl">
        Building at the intersection of{" "}
        <span className="text-highlight">intelligence</span> and{" "}
        <span className="text-highlight">industry.</span>
      </h1>
      <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
        Techno-optimist and American Dynamist. My background in on-demand logistics taught me how to move things efficiently; now, my focus is on how we make them. I believe reshoring American manufacturing is the single most pivotal step toward our long-term national success and resilience.
      </p>
      <div className="flex gap-4 font-mono text-xs uppercase tracking-widest text-dim">
        <span>AI</span>
        <span className="text-workshop-border">·</span>
        <span>Manufacturing</span>
        <span className="text-workshop-border">·</span>
        <span>Robotics</span>
        <span className="text-workshop-border">·</span>
        <span>Logistics</span>
      </div>
    </section>
  );
};

export default HeroSection;
