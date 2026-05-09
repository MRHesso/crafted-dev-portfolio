import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Front-End Developer Portfolio" },
      {
        name: "description",
        content:
          "Front-End Developer crafting fast, accessible and beautiful web experiences with React, TypeScript and Tailwind CSS.",
      },
      { property: "og:title", content: "Your Name — Front-End Developer" },
      {
        property: "og:description",
        content: "Modern portfolio showcasing React, TypeScript and Tailwind projects.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
