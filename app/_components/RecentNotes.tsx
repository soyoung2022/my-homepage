import { archiveNotes } from "../content";
import { Section } from "./Section";

export function RecentNotes() {
  return (
    <Section id="recent-notes" title="Recent Notes">
      <ul className="divide-y divide-line border-y border-line">
        {archiveNotes.map((note) => (
          <li key={note.title}>
            <article className="flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
              <div>
                <span className="inline-block rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.65rem] tracking-[0.14em] text-ink-muted uppercase">
                  {note.category}
                </span>
                <p className="mt-3 text-base tracking-tight text-pretty text-ink">
                  {note.title}
                </p>
              </div>
              <p className="font-mono text-xs text-ink-muted">기록 준비 중</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
