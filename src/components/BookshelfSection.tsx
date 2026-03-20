interface BookEntry {
  title: string;
  author: string;
  takeaway: string;
  category: "Industrial History & Strategy" | "Health & Longevity" | "Technical Manuals";
}

const books: BookEntry[] = [
  {
    title: "The Innovator's Dilemma",
    author: "Clayton Christensen",
    takeaway: "Disruption comes from below—incumbents optimize for today while insurgents build for tomorrow.",
    category: "Industrial History & Strategy",
  },
  {
    title: "American Made",
    author: "Farah Stockman",
    takeaway: "The human cost of deindustrialization is not abstract—it's personal and generational.",
    category: "Industrial History & Strategy",
  },
  {
    title: "Outlive",
    author: "Peter Attia",
    takeaway: "Longevity is an engineering problem—optimize the inputs, extend the runway.",
    category: "Health & Longevity",
  },
  {
    title: "Machinery's Handbook",
    author: "Erik Oberg",
    takeaway: "The machinist's bible. If you can't find it here, you're asking the wrong question.",
    category: "Technical Manuals",
  },
  {
    title: "The Soul of a New Machine",
    author: "Tracy Kidder",
    takeaway: "Great engineering is equal parts obsession and craft—the best teams are small and unreasonable.",
    category: "Industrial History & Strategy",
  },
  {
    title: "ROS 2 Documentation",
    author: "Open Robotics",
    takeaway: "The middleware layer for the next generation of physical automation.",
    category: "Technical Manuals",
  },
];

const categories = ["Industrial History & Strategy", "Health & Longevity", "Technical Manuals"] as const;

const BookshelfSection = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-5xl" id="bookshelf">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-xs text-dim">&#47;&#47;</span>
        <h2 className="text-xl md:text-2xl font-mono font-bold">Reading List</h2>
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest border border-primary/30 px-2 py-0.5">Inputs</span>
      </div>
      <div className="h-px bg-border mb-10" />

      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-dim mb-4 flex items-center gap-2">
              <span className="text-primary/40">▸</span>
              {category}
            </h3>
            <div className="space-y-0">
              {books
                .filter((b) => b.category === category)
                .map((book) => (
                  <div
                    key={book.title}
                    className="py-4 border-b border-border last:border-b-0 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-2 md:gap-6"
                  >
                    <div>
                      <span className="font-mono font-bold text-sm">{book.title}</span>
                      <span className="text-dim font-mono text-xs ml-2">— {book.author}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{book.takeaway}"
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookshelfSection;
