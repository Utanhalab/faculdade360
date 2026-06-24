import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Library, Users, Sparkles, TrendingUp, ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold">Olá, Edmilson 👋</h1>
        <p className="text-muted-foreground mt-1">Aqui está o seu dia académico.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Horas de estudo (semana)", value: "14h", icon: Clock },
          { label: "Progresso do TCC", value: "62%", icon: TrendingUp },
          { label: "Próxima mentoria", value: "Qui · 17h", icon: Users },
          { label: "Tarefas pendentes", value: "5", icon: Calendar },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-card border border-border p-5">
            <s.icon className="w-5 h-5 text-gold mb-3" />
            <div className="font-display text-2xl font-semibold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <Card to="/app/cronograma" icon={Calendar} title="Cronograma" desc="Aulas, testes e prazos do TCC." />
        <Card to="/app/biblioteca" icon={Library} title="Biblioteca" desc="Manuais e artigos do seu curso." />
        <Card to="/app/mentoria" icon={Users} title="Mentoria" desc="Agende sessão com um padrinho." />
      </div>

      <div className="rounded-2xl bg-navy-gradient p-8 text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Sparkles className="w-6 h-6 text-gold mb-2" />
          <h3 className="font-display text-xl font-semibold">Pergunte ao assistente IA</h3>
          <p className="text-primary-foreground/70 text-sm mt-1">Respostas baseadas no currículo da sua instituição.</p>
        </div>
        <Link to="/app/ia" className="inline-flex items-center gap-2 rounded-xl bg-gold text-gold-foreground px-5 py-2.5 font-medium">
          Abrir IA <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function Card({ to, icon: Icon, title, desc }: { to: "/app/cronograma" | "/app/biblioteca" | "/app/mentoria"; icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <Link to={to} className="rounded-2xl bg-card border border-border p-6 hover:border-gold/40 hover:shadow-elegant transition block">
      <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <h3 className="font-display text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </Link>
  );
}
