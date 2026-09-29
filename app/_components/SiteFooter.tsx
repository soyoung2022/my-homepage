import { site } from "../content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-parchment px-6 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase">
          {site.footer}
        </p>
        <a
          href="#top"
          className="text-sm text-ink-soft transition-colors hover:text-ink"
        >
          맨 위로
        </a>
      </div>
    </footer>
  );
}
