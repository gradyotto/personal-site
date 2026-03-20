import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { articles, getArticleContent } from "@/content/articles";
import NodeGraphCanvas from "@/components/NodeGraphCanvas";
import SiteNav from "@/components/SiteNav";
import FooterSection from "@/components/FooterSection";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const meta = articles.find((a) => a.slug === slug);
  const content = slug ? getArticleContent(slug) : null;

  if (!meta || !content) {
    return (
      <div className="min-h-screen relative">
        <NodeGraphCanvas />
        <SiteNav />
        <main className="pt-32 px-6 md:px-12 lg:px-24 max-w-3xl">
          <p className="font-mono text-dim">Article not found.</p>
          <Link to="/" className="font-mono text-sm text-primary hover:underline mt-4 inline-block">
            ← Back
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <NodeGraphCanvas />
      <SiteNav />
      <main className="pt-28 pb-20 px-6 md:px-12 lg:px-24 max-w-3xl relative z-10">
        <Link
          to="/#notebook"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-dim hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to articles
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[10px] text-dim tracking-wider">{meta.date}</span>
          <span className="font-mono text-[10px] text-dim tracking-wider">{meta.readTime}</span>
        </div>

        <article className="prose prose-invert prose-sm max-w-none
          prose-headings:font-mono prose-headings:font-bold
          prose-h1:text-2xl prose-h1:md:text-3xl prose-h1:mb-6 prose-h1:leading-tight
          prose-h2:text-lg prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-foreground
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-strong:text-foreground
          prose-li:text-muted-foreground
          prose-ol:text-muted-foreground
          prose-ul:text-muted-foreground
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </main>
      <FooterSection />
    </div>
  );
};

export default Article;
