import { researchNotes } from "../content";
import { Section } from "./Section";
import { SurfaceCard } from "./SurfaceCard";

export function ResearchNotes() {
  return (
    <Section
      id="notes"
      title="Research Notes"
      divided={false}
      headingSize="md"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {researchNotes.map((note) => (
          <li key={note.title} className="h-full">
            <SurfaceCard as="article" className="h-full border-dashed">
              <p className="font-mono text-[0.68rem] tracking-[0.18em] text-ink-muted uppercase">
                Research Note
              </p>
              <h3 className="mt-3 text-base font-medium tracking-tight text-ink">
                {note.title}
              </h3>
              <p className="mt-4 font-mono text-xs text-ink-muted">내용 준비 중</p>
            </SurfaceCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
