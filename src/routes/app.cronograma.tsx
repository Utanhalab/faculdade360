import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/cronograma")({
  component: Cronograma,
});

const week = [
  { day: "Seg", items: [{ t: "08:00", title: "Cálculo II", type: "Aula" }, { t: "14:00", title: "Estudo: Álgebra", type: "Estudo" }] },
  { day: "Ter", items: [{ t: "10:00", title: "Programação", type: "Aula" }, { t: "16:00", title: "Sala virtual: grupo TCC", type: "Sala" }] },
  { day: "Qua", items: [{ t: "08:00", title: "Estatística", type: "Aula" }] },
  { day: "Qui", items: [{ t: "17:00", title: "Mentoria: Ana Lopes (BAI)", type: "Mentoria" }] },
  { day: "Sex", items: [{ t: "09:00", title: "Teste: Cálculo II", type: "Avaliação" }] },
];

const tone: Record<string, string> = {
  Aula: "bg-primary/10 text-primary",
  Estudo: "bg-muted text-foreground",
  Sala: "bg-accent text-accent-foreground",
  Mentoria: "bg-gold/20 text-gold-foreground",
  Avaliação: "bg-destructive/10 text-destructive",
};

function Cronograma() {
  return (
    <div className="max-w-6xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Cronograma</h1>
        <p className="text-muted-foreground mt-1">Esta semana — 23 a 27 de Junho.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {week.map((d) => (
          <div key={d.day} className="rounded-2xl bg-card border border-border p-4 min-h-[200px]">
            <div className="font-display font-semibold mb-3 text-sm">{d.day}</div>
            <div className="space-y-2">
              {d.items.map((it) => (
                <div key={it.title} className="rounded-xl border border-border p-3">
                  <div className="text-[11px] text-muted-foreground">{it.t}</div>
                  <div className="text-sm font-medium leading-snug mt-0.5">{it.title}</div>
                  <span className={`inline-block mt-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${tone[it.type]}`}>
                    {it.type}
                  </span>
                </div>
              ))}
              {d.items.length === 0 && <div className="text-xs text-muted-foreground">Sem eventos</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
