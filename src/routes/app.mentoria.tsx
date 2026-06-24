import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Building2, Star } from "lucide-react";

export const Route = createFileRoute("/app/mentoria")({
  component: Mentoria,
});

const mentors = [
  { name: "Ana Lopes", role: "Senior Data Analyst", company: "BAI", area: "Estatística & Dados", rating: 4.9 },
  { name: "Carlos Tavares", role: "Engenheiro de Software", company: "Unitel", area: "Backend & Sistemas", rating: 4.8 },
  { name: "Helena Mateus", role: "Gestora Financeira", company: "Sonangol", area: "Finanças & Auditoria", rating: 4.7 },
  { name: "João Pedro", role: "Arquitecto de Soluções", company: "Banco BIC", area: "Cloud & Infra", rating: 4.9 },
];

function Mentoria() {
  return (
    <div className="max-w-6xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Mentoria</h1>
        <p className="text-muted-foreground mt-1">Mentores corporativos disponíveis para a sua área.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {mentors.map((m) => (
          <div key={m.name} className="rounded-2xl bg-card border border-border p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-navy-gradient flex items-center justify-center text-gold font-display font-semibold">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1">
                <div className="font-display text-lg font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
                <div className="inline-flex items-center gap-1.5 text-xs mt-2 px-2 py-1 rounded-full bg-muted">
                  <Building2 className="w-3 h-3" /> {m.company}
                </div>
              </div>
              <div className="inline-flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 fill-gold text-gold" />
                {m.rating}
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">{m.area}</div>
            <div className="mt-5 flex gap-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium">
                <Calendar className="w-4 h-4" /> Agendar
              </button>
              <button className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium hover:bg-surface transition">
                Perfil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
