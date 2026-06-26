import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-[image:var(--gradient-navy)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-[color:var(--orange)]/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[color:var(--navy-soft)]/40 blur-3xl" />
      </div>
      <div className="container-x relative">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--orange)] animate-fade-in">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-white/75 max-w-2xl animate-fade-up" style={{ animationDelay: "120ms" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
