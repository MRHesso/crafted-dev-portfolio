import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "mohammedhesso32@gmail.com", href: "mohammedhesso32@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/MRHesso", href: "https://github.com/MRHesso" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/mohammed-hesso", href: "https://www.linkedin.com/in/mohammed-hesso-1216a3383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16 shadow-elegant reveal">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-mono text-primary mb-4">// contact</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Let's build something <span className="text-gradient">remarkable</span>.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Have a project in mind, a role to fill, or just want to say hello? I'd love to hear from you.
              </p>
              <a
                href="mailto:hello@yourdomain.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.04]"
              >
                Get in Touch <ArrowRight size={16} />
              </a>
            </div>

            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/30 px-5 py-4 transition-smooth hover:bg-secondary hover:-translate-y-0.5"
                  >
                    <div className="shrink-0 rounded-xl bg-gradient-primary p-2.5 text-primary-foreground">
                      <l.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground">{l.label}</div>
                      <div className="font-medium truncate">{l.value}</div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-muted-foreground transition-smooth group-hover:translate-x-1 group-hover:text-foreground"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
