export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export const articles: ArticleMeta[] = [
  {
    slug: "why-american-dynamism-needs-ai",
    title: "Why American Dynamism Needs AI",
    date: "2025.03",
    readTime: "8 min",
    excerpt:
      "The case for deploying frontier AI models not just in software, but on the factory floor—where the real leverage lives.",
  },
  {
    slug: "lessons-from-the-machine-shop-floor",
    title: "Lessons from the Machine Shop Floor",
    date: "2025.01",
    readTime: "12 min",
    excerpt:
      "What six months of running CNC machines taught me about feedback loops, tolerances, and building things that matter.",
  },
  {
    slug: "bridging-bits-and-atoms",
    title: "Bridging Bits and Atoms",
    date: "2024.11",
    readTime: "6 min",
    excerpt:
      "Software engineers underestimate hardware. Hardware engineers underestimate software. The opportunity lives in the gap.",
  },
  {
    slug: "the-reshoring-imperative",
    title: "The Reshoring Imperative",
    date: "2024.09",
    readTime: "10 min",
    excerpt:
      "Supply chain fragility isn't a theory—it's a quarterly earnings risk. How small manufacturers can lead the reshoring charge.",
  },
];

// Dynamically import markdown files
const markdownModules = import.meta.glob('./*.md', { as: 'raw', eager: true });

export function getArticleContent(slug: string): string | null {
  const key = `./${slug}.md`;
  return (markdownModules[key] as string) ?? null;
}
