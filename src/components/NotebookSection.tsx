import { ArrowUpRight } from "lucide-react";

interface Essay {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const essays: Essay[] = [
  {
    title: "Why American Dynamism Needs AI",
    date: "2025.03",
    readTime: "8 min",
    excerpt:
      "The case for deploying frontier AI models not just in software, but on the factory floor—where the real leverage lives.",
  },
  {
    title: "Lessons from the Machine Shop Floor",
    date: "2025.01",
    readTime: "12 min",
    excerpt:
      "What six months of running CNC machines taught me about feedback loops, tolerances, and building things that matter.",
  },
  {
    title: "Bridging Bits and Atoms",
    date: "2024.11",
    readTime: "6 min",
    excerpt:
      "Software engineers underestimate hardware. Hardware engineers underestimate software. The opportunity lives in the gap.",
  },
  {
    title: "The Reshoring Imperative",
    date: "2024.09",
    readTime: "10 min",
    excerpt:
      "Supply chain fragility isn't a theory—it's a quarterly earnings risk. How small manufacturers can lead the reshoring charge.",
  },
];

const NotebookSection = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-4xl" id="notebook">
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-xl md:text-2xl font-mono font-bold">Articles</h2>
        <span className="font-mono text-xs text-highlight uppercase tracking-widest">Writing</span>
      </div>
      <div className="h-px bg-border mb-10" />

      <div className="space-y-0">
        {essays.map((essay, i) => (
          <article
            key={essay.title}
            className="group py-6 cursor-pointer border-b border-border last:border-b-0 hover:pl-2 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-dim tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] text-dim tracking-wider">
                    {essay.date}
                  </span>
                  <span className="font-mono text-[10px] text-dim tracking-wider">
                    {essay.readTime}
                  </span>
                </div>
                <h3 className="font-mono font-bold text-base md:text-lg group-hover:text-highlight transition-colors">
                  {essay.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-xl">
                  {essay.excerpt}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 mt-8 text-dim group-hover:text-highlight transition-colors flex-shrink-0" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NotebookSection;
