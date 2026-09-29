import { About } from "./_components/About";
import { BeyondResearch } from "./_components/BeyondResearch";
import { Exploring } from "./_components/Exploring";
import { Hero } from "./_components/Hero";
import { RecentNotes } from "./_components/RecentNotes";
import { Research } from "./_components/Research";
import { ResearchNotes } from "./_components/ResearchNotes";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteNav } from "./_components/SiteNav";
import { navLinks } from "./content";

export default function Home() {
  return (
    <>
      <SiteNav links={navLinks} />
      <main id="main">
        <Hero />
        <Research />
        <ResearchNotes />
        <Exploring />
        <BeyondResearch />
        <RecentNotes />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}
