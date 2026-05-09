import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Maintainable, well-tested components built with modern best practices.",
  },
  {
    icon: Palette,
    title: "Design Eye",
    desc: "Pixel-perfect implementation with strong attention to typography & spacing.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Lightning-fast interfaces optimized for Core Web Vitals and accessibility.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="text-sm font-mono text-primary mb-4">// about me</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Building thoughtful interfaces that <span className="text-gradient">people love to use</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I'm a Front-End Developer focused on creating polished, performant web applications.
              I bridge the gap between design and engineering — translating ideas into clean,
              scalable interfaces.Crafting digital

            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My toolkit centers on React, TypeScript, and Tailwind CSS, with a deep focus on
              UX details, animation, and accessibility. I love shipping work that feels effortless.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "TypeScript", "Next.js", "Tailwind", "Figma"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-mono text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 reveal">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="glass rounded-2xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-elegant"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow">
                    <h.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
