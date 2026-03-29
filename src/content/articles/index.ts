export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export const articles: ArticleMeta[] = [];

// Dynamically import markdown files
const markdownModules = import.meta.glob('./*.md', { as: 'raw', eager: true });

export function getArticleContent(slug: string): string | null {
  const key = `./${slug}.md`;
  return (markdownModules[key] as string) ?? null;
}
