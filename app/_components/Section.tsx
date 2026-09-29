import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  lede?: string;
  surface?: "ivory" | "parchment";
  divided?: boolean;
  headingSize?: "lg" | "md";
  children: ReactNode;
};

export function Section({
  id,
  title,
  lede,
  surface = "ivory",
  divided = true,
  headingSize = "lg",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={[
        "scroll-mt-16 px-6 py-20 sm:px-8 sm:py-24",
        surface === "parchment" ? "bg-parchment" : "bg-ivory",
        divided ? "border-t border-line" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <h2
            id={`${id}-title`}
            className={
              headingSize === "lg"
                ? "text-2xl font-semibold tracking-tight text-balance text-ink sm:text-4xl"
                : "text-xl font-semibold tracking-tight text-ink sm:text-2xl"
            }
          >
            {title}
          </h2>
          {lede ? (
            <p className="mt-5 text-base leading-relaxed text-pretty text-ink-soft">
              {lede}
            </p>
          ) : null}
        </div>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
