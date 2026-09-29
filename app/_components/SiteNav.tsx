"use client";

import { useState } from "react";
import type { NavLink } from "../content";

const panelId = "mobile-nav";

export function SiteNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-mono text-[0.7rem] tracking-[0.2em] text-ink uppercase sm:text-xs"
        >
          AI Research
          <span className="text-ink-muted"> &amp; Archive</span>
        </a>

        <nav aria-label="주요 섹션" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="rounded-md border border-line px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink-muted hover:text-ink md:hidden"
        >
          {open ? "닫기" : "메뉴"}
        </button>
      </div>

      <nav
        id={panelId}
        aria-label="주요 섹션"
        hidden={!open}
        className="border-t border-line md:hidden"
      >
        <ul className="mx-auto w-full max-w-5xl px-6 sm:px-8">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line last:border-b-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
