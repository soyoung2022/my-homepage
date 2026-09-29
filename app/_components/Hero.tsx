import { site } from "../content";
import { NodeGraph } from "./NodeGraph";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="scroll-mt-16 bg-ivory px-6 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <NodeGraph className="h-24 w-24 text-ink-muted sm:h-28 sm:w-28" />
        <p className="mt-10 font-mono text-[0.7rem] tracking-[0.22em] text-ink-muted uppercase sm:text-xs">
          {site.label}
        </p>
        <h1
          id="hero-title"
          className="mt-6 text-[1.75rem] leading-[1.35] font-semibold tracking-tight text-balance text-ink sm:text-4xl sm:leading-[1.25] lg:text-[2.75rem]"
        >
          {site.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-ink-soft sm:text-lg">
          {site.intro}
        </p>
      </div>
    </section>
  );
}
