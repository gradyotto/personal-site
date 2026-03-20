import NodeGraphCanvas from "@/components/NodeGraphCanvas";
import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import WorkbenchSection from "@/components/WorkbenchSection";
import NotebookSection from "@/components/NotebookSection";
import BookshelfSection from "@/components/BookshelfSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <NodeGraphCanvas />
      <SiteNav />
      <main className="pt-16">
        <HeroSection />
        <WorkbenchSection />
        <NotebookSection />
        <BookshelfSection />
        <AboutSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
