import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">
          {eyebrow}
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
