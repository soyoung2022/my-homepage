import { beyondCategories, beyondIntro } from "../content";
import { PlaceholderArt } from "./PlaceholderArt";
import { Section } from "./Section";
import { SurfaceCard } from "./SurfaceCard";

export function BeyondResearch() {
  return (
    <Section
      id="beyond-research"
      title="Beyond Research"
      lede={beyondIntro}
      headingSize="md"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {beyondCategories.map((category) => (
          <li key={category.id} className="h-full">
            <SurfaceCard className="h-full overflow-hidden p-0">
              <PlaceholderArt
                variant={category.art}
                className="h-28 w-full"
              />
              <div className="p-6">
                <h3 className="font-mono text-xs tracking-[0.18em] text-ink uppercase">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {category.description}
                </p>
              </div>
            </SurfaceCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
