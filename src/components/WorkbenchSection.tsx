import { ArrowUpRight } from "lucide-react";

interface ProjectCard {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  status: string;
}

const projects: ProjectCard[] = [
  {
    title: "Tiber",
    description:
      "A modern machine shop and manufacturing venture leveraging AI-driven tooling, CNC automation, and advanced materials to rebuild American industrial capacity.",
    tags: ["Manufacturing", "AI", "CNC"],
    featured: true,
    status: "Active",
  },
  {
    title: "Microfactory OS",
    description:
      "Modular software stack for small-batch, high-mix manufacturing cells. Bridging ERP with real-time machine data.",
    tags: ["Software", "IoT", "MES"],
    status: "In Progress",
  },
  {
    title: "ROS 2 Pick-and-Place",
    description:
      "6-DOF robotic arm experiment for automated part handling in a low-volume production environment.",
    tags: ["Robotics", "ROS 2", "Hardware"],
    status: "Experiment",
  },
  {
    title: "Supply Chain Graph",
    description:
      "Knowledge graph mapping domestic supplier networks for critical components. Making reshoring decisions data-driven.",
    tags: ["Data", "Supply Chain", "Graph DB"],
    status: "Research",
  },
];

const WorkbenchSection = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-6xl" id="workbench">
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-xl md:text-2xl font-mono font-bold">Projects</h2>
        <span className="font-mono text-xs text-highlight uppercase tracking-widest">Work</span>
      </div>
      <div className="h-px bg-border mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group p-6 rounded-sm border transition-colors cursor-pointer ${
              project.featured
                ? "border-workshop-highlight bg-workshop/50 md:col-span-2"
                : "border-border bg-card hover:border-workshop-border"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-mono font-bold text-lg">{project.title}</h3>
                {project.featured && (
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-primary text-primary-foreground px-2 py-0.5 rounded-sm">
                    Featured
                  </span>
                )}
              </div>
              <ArrowUpRight className="w-4 h-4 text-dim group-hover:text-highlight transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider text-dim border border-border px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-dim">
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkbenchSection;
