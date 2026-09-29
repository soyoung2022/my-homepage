import { exploringQuestions } from "../content";
import { Section } from "./Section";
import { SurfaceCard } from "./SurfaceCard";

export function Exploring() {
  return (
    <Section
      id="exploring"
      title="Currently Exploring"
      divided={false}
      headingSize="md"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {exploringQuestions.map((question, index) => (
          <li key={question.id} className="h-full">
            <SurfaceCard as="article" className="flex h-full gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 font-mono text-xs text-ink-muted"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.95rem] leading-relaxed text-ink">
                {question.text}
              </p>
            </SurfaceCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
