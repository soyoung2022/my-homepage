import { profile } from "./profile";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-5 px-6 py-16 text-center">
      <div
        aria-hidden="true"
        className="h-px w-8 bg-neutral-300 dark:bg-neutral-700"
      />
      <h1 className="text-4xl font-semibold tracking-tight break-words text-pretty sm:text-5xl">
        {profile.name}
      </h1>
      <p className="max-w-sm text-base leading-relaxed break-words text-pretty text-neutral-500 sm:text-lg dark:text-neutral-400">
        {profile.intro}
      </p>
    </main>
  );
}
