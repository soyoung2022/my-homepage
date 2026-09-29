import { researchIntro, researchTopics } from "../content";
import { Section } from "./Section";
import { SurfaceCard } from "./SurfaceCard";

export function Research() {
  return (
    <Section
      id="research"
      title="Research"
      lede={researchIntro}
      surface="parchment"
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {researchTopics.map((topic) => (
          <li key={topic.index} className="h-full">
            <SurfaceCard className="h-full p-7">
              <p className="font-mono text-xs tracking-[0.18em] text-ink-muted">
                {topic.index}
              </p>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                {topic.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {topic.question}
              </p>
            </SurfaceCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
