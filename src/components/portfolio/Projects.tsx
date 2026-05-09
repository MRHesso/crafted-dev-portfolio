import { ProjectCard, type Project } from "./ProjectCard";

// Replace these with your real projects.
const projects: Project[] = [
  {
    title: "Nebula Dashboard",
    description: "Analytics dashboard for SaaS teams with real-time charts and clean data viz.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tech: ["React", "TypeScript", "Tailwind"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Lumen E-Commerce",
    description: "Modern storefront with cart, checkout, and Stripe integration.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    tech: ["Next.js", "Stripe", "Tailwind"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Pulse Music App",
    description: "Streaming web app concept with playlists, animations, and audio waveforms.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    tech: ["React", "Framer Motion"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Orbit Portfolio",
    description: "Minimal portfolio template for designers with rich case-study layouts.",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&q=80",
    tech: ["Next.js", "MDX", "Tailwind"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Tasker Pro",
    description: "Productivity app with drag-and-drop boards, dark mode, and offline sync.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    tech: ["React", "Zustand", "PWA"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Aurora Landing",
    description: "Award-style landing page with scroll animations and 3D visuals.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80",
    tech: ["React", "GSAP", "Three.js"],
    live: "https://example.com",
    github: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div className="max-w-2xl">
            <div className="text-sm font-mono text-primary mb-4">// projects</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Selected <span className="text-gradient">work</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A few recent projects I've designed and built. Each one shipped, polished, and tested.
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
          >
            See all on GitHub →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
