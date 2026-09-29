import { aboutText } from "../content";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About" surface="parchment" headingSize="md">
      <div className="grid gap-6 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-12">
        <p className="font-mono text-[0.68rem] tracking-[0.18em] text-ink-muted uppercase">
          Personal Archive
        </p>
        <p className="max-w-2xl text-lg leading-relaxed text-pretty text-ink-soft">
          {aboutText}
        </p>
      </div>
    </Section>
  );
}
