import { Github, ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article
      className="reveal group relative flex flex-col overflow-hidden rounded-3xl glass shadow-card transition-smooth hover:-translate-y-2 hover:shadow-elegant"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-30 group-hover:opacity-10 transition-smooth z-10" />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent z-10" />
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <h3 className="font-display text-xl font-semibold transition-smooth group-hover:text-gradient">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:shadow-glow"
          >
            <ExternalLink size={14} /> View Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-smooth hover:bg-secondary"
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
