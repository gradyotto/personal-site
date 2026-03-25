import { useState } from "react";

interface BookEntry {
  title: string;
  author: string;
  takeaway: string;
  category: "Industrial History & Strategy" | "Health & Longevity" | "Technical Manuals";
  status: "Read" | "In Progress" | "Queue";
}

const books: BookEntry[] = [
  {
    title: "The Innovator's Dilemma",
    author: "Clayton Christensen",
    takeaway: "Disruption comes from below—incumbents optimize for today while insurgents build for tomorrow.",
    category: "Industrial History & Strategy",
    status: "Queue",
  },
  {
    title: "American Made",
    author: "Farah Stockman",
    takeaway: "The human cost of deindustrialization is not abstract—it's personal and generational.",
    category: "Industrial History & Strategy",
    status: "Queue",
  },
  {
    title: "Outlive",
    author: "Peter Attia",
    takeaway: "Longevity is an engineering problem—optimize the inputs, extend the runway.",
    category: "Health & Longevity",
    status: "Queue",
  },
  {
    title: "The Soul of a New Machine",
    author: "Tracy Kidder",
    takeaway: "Great engineering is equal parts obsession and craft—the best teams are small and unreasonable.",
    category: "Industrial History & Strategy",
    status: "Queue",
  },
  {
    title: "Made in the USA: The Rise and Retreat of American Manufacturing",
    author: "Vaclav Smil",
    takeaway: "A data-rich history of how America built—and then dismantled—its industrial base.",
    category: "Industrial History & Strategy",
    status: "Read",
  },
  {
    title: "Freedom's Forge",
    author: "Arthur Herman",
    takeaway: "How American industry mobilized for WWII—proof that manufacturing scale is a national security asset.",
    category: "Industrial History & Strategy",
    status: "In Progress",
  },
  {
    title: "ROS 2 Documentation",
    author: "Open Robotics",
    takeaway: "The middleware layer for the next generation of physical automation.",
    category: "Technical Manuals",
    status: "Queue",
  },
];

const statusTabs = ["In Progress", "Queue", "Read"] as const;

const BookshelfSection = () => {
  const [activeTab, setActiveTab] = useState<"Read" | "In Progress" | "Queue">("In Progress");

  const filteredBooks = books.filter((b) => b.status === activeTab);

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-5xl" id="bookshelf">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-xs text-dim">&#47;&#47;</span>
        <h2 className="text-xl md:text-2xl font-mono font-bold">Reading List</h2>
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest border border-primary/30 px-2 py-0.5">Inputs</span>
      </div>
      <div className="h-px bg-border mb-6" />

      {/* Status toggle tabs */}
      <div className="flex gap-1 mb-8">
        {statusTabs.map((tab) => {
          const count = books.filter((b) => b.status === tab).length;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 border transition-all ${
                activeTab === tab
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-border text-dim hover:border-primary/30 hover:text-muted-foreground"
              }`}
            >
              {tab}
              <span className="ml-1.5 text-[10px] opacity-60">[{count}]</span>
            </button>
          );
        })}
      </div>

      {/* Book list */}
      <div className="space-y-0">
        {filteredBooks.map((book) => (
          <div
            key={book.title}
            className="py-3 border-b border-border last:border-b-0 flex flex-wrap items-baseline gap-x-2 gap-y-1"
          >
            <span className="font-mono font-bold text-sm">{book.title}</span>
            <span className="text-dim font-mono text-xs whitespace-nowrap">— {book.author}</span>
            <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 border border-primary/20 text-primary/70 whitespace-nowrap">{book.category}</span>
          </div>
        ))}
        {filteredBooks.length === 0 && (
          <p className="font-mono text-xs text-dim py-8">No entries in this category.</p>
        )}
      </div>
    </section>
  );
};

export default BookshelfSection;
