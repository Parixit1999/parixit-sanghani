import { ExperienceSection } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { AboutSection, EducationSection, ProjectsSection, SkillsSection } from "@/components/Sections";
import { Starfield } from "@/components/Starfield";

export default function Home() {
  return (
    <>
      <Starfield />
      <Nav />
      <Hero />
      <main className="mx-auto max-w-6xl px-6">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
