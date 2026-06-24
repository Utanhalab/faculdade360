import { Link } from "@tanstack/react-router";
import { GraduationCap, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/produto", label: "Produto" },
  { to: "/mercado", label: "Mercado" },
  { to: "/negocio", label: "Negócio" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/equipa", label: "Equipa" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-gold" />
          </div>
          <span className="font-display text-lg font-semibold">
            Faculdade <span className="text-gradient-gold">360º</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/app"
            className="text-foreground/70 hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Demo App
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contacto"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Falar connosco <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg border border-border"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/app" onClick={() => setOpen(false)} className="py-2 text-sm">
              Demo App
            </Link>
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium"
            >
              Falar connosco <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
