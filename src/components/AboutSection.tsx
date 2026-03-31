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
          My background is in logistics and software: routing systems, operational data, platform infrastructure. I've spent my career working on the operational layer that powers complex businesses.
        </p>
        <p>
          The consensus has been for the past 25 years that software will eat the world. The more time I spend in software, the more I realize we must pay attention to hardware. America has spent a generation offshoring the industries that underpin everything else — the parts, the materials, the fabrication capacity that OEMs depend on and that national resilience requires. We are closer to the consequences of that decision than most people realize.
        </p>
        <p>
          Tiber is my answer to that. We supply American OEMs with the critical components they need, built domestically, with the operational rigor of a modern technology company. The goal is simple: reduce foreign dependency in the supply chains that actually matter, one part at a time.
        </p>
        <p>
          I believe the next decade will determine the next century of American industry. I'd rather be building than watching.
        </p>
        <p className="font-mono text-sm text-dim border-l-2 border-primary/40 pl-4">
          Currently building <span className="text-primary font-bold">Tiber</span> — Critical parts for the American Industrial Base.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
