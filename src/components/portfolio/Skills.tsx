const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React Query", level: 90 },
  { name: "React Hook Form", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "Next.js", level: 80},
  { name: "Tailwind CSS", level: 95 },
  { name: "shadcn Ui", level: 95 },
  { name: "HTML", level: 98 },
  { name: "CSS", level: 95 },
  { name: "GitHub", level: 92 },
  { name: "Responsive Design", level: 96 },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14 reveal">
          <div className="text-sm font-mono text-primary mb-4">// skills</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Tools I use to <span className="text-gradient">ship great work</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A focused stack honed over years of building modern web products.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="reveal group relative overflow-hidden rounded-2xl glass p-5 transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-gradient-primary/10 pointer-events-none" />
              <div className="relative flex items-center justify-between">
                <span className="font-display font-semibold">{s.name}</span>
                <span className="text-xs font-mono text-muted-foreground">{s.level}%</span>
              </div>
              <div className="relative mt-4 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-smooth"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
