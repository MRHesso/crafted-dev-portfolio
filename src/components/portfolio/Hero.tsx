import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl animate-blob pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground animate-fade-in">
            <Sparkles size={14} className="text-primary" />
            Available for freelance & full-time roles
          </div>

          <h1 className="mt-8 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] animate-fade-up">
            Hello I'm Mohammed Hesso 
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground animate-fade-up [animation-delay:120ms]">
            Front-End Developer
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground/90 leading-relaxed animate-fade-up [animation-delay:200ms]">
            I design and build fast, accessible, and beautiful interfaces with React, TypeScript and
            Tailwind. Turning complex ideas into delightful, production-ready products.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.04]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-smooth hover:bg-secondary"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 max-w-xl mx-auto animate-fade-up [animation-delay:400ms]">
            {[
              { k: "3+ years", v: "experince" },
              { k:"Front-End" , v: "Freelancer" }
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl py-4 ">
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.k}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
