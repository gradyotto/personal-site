import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/content/articles";

const NotebookSection = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-4xl" id="notebook">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-xs text-dim">&#47;&#47;</span>
        <h2 className="text-xl md:text-2xl font-mono font-bold">Articles</h2>
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest border border-primary/30 px-2 py-0.5">Log</span>
      </div>
      <div className="h-px bg-border mb-10" />

      <div className="space-y-0">
        {articles.map((article, i) => (
          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            className="group block py-5 cursor-pointer border-b border-border last:border-b-0 hover:pl-2 transition-all hover:bg-card/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-primary/60 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] text-dim tracking-wider">
                    {article.date}
                  </span>
                  <span className="font-mono text-[10px] text-dim tracking-wider">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-mono font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-xl">
                  {article.excerpt}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 mt-8 text-dim group-hover:text-primary transition-colors flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NotebookSection;
