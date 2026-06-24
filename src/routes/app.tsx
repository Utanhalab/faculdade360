import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { GraduationCap, LayoutDashboard, Calendar, Library, Users, Sparkles, ArrowLeft, Bell } from "lucide-react";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Demo do App — Faculdade 360º" },
      { name: "description", content: "Pré-visualização do aplicativo móvel Faculdade 360º." },
    ],
  }),
  component: AppLayout,
});

const nav = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/app/cronograma", label: "Cronograma", icon: Calendar, exact: false },
  { to: "/app/biblioteca", label: "Biblioteca", icon: Library, exact: false },
  { to: "/app/mentoria", label: "Mentoria", icon: Users, exact: false },
  { to: "/app/ia", label: "Assistente IA", icon: Sparkles, exact: false },
] as const;

function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen flex w-full bg-surface">
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card">
        <Link to="/" className="flex items-center gap-2 px-5 h-16 border-b border-border">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-gold" />
          </div>
          <span className="font-display font-semibold">
            Faculdade <span className="text-gradient-gold">360º</span>
          </span>
        </Link>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((n) => {
            const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                <n.icon className="w-4 h-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao site
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-card/80 backdrop-blur flex items-center justify-between px-6 sticky top-0 z-10">
          <div>
            <div className="text-xs text-muted-foreground">Demo interactiva</div>
            <div className="font-display font-semibold text-sm">App Faculdade 360º</div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-surface transition">
              <Bell className="w-4 h-4" />
            </button>
            <div className="w-9 h-9 rounded-full bg-navy-gradient flex items-center justify-center text-xs font-semibold text-gold">
              EA
            </div>
          </div>
        </header>

        <div className="md:hidden border-b border-border bg-card overflow-x-auto">
          <div className="flex gap-1 p-2 min-w-max">
            {nav.map((n) => {
              const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap ${
                    active ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  <n.icon className="w-3.5 h-3.5" />
                  {n.label}
                </Link>
              );
            })}
          </div>
        </div>

        <main className="flex-1 p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
