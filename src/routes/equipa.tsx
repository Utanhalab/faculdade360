import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/equipa")({
  head: () => ({
    meta: [
      { title: "Equipa — Faculdade 360º" },
      { name: "description", content: "A equipa fundadora da Faculdade 360º — pessoas que conhecem o terreno académico angolano." },
      { property: "og:title", content: "Equipa — Faculdade 360º" },
      { property: "og:description", content: "Fundadores e líderes da Faculdade 360º." },
      { property: "og:url", content: "https://faculdade360.lovable.app/equipa" },
    ],
    links: [{ rel: "canonical", href: "https://faculdade360.lovable.app/equipa" }],
  }),
  component: TeamPage,
});

const roles = [
  { role: "Fundador & CEO", focus: "Visão, parcerias com universidades" },
  { role: "CTO", focus: "Engenharia mobile, IA e infraestrutura offline" },
  { role: "Head de Conteúdo Académico", focus: "Curadoria de currículos e bibliografia" },
  { role: "Head de Mentoria Corporativa", focus: "Rede de padrinhos empresariais" },
];

function TeamPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Equipa"
        title={<>Pessoas que <span className="text-gradient-gold">conhecem o terreno</span>.</>}
        subtitle="Construímos com quem viveu a realidade do ensino superior angolano por dentro."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map((r) => (
              <div key={r.role} className="rounded-2xl bg-card border border-border p-7 hover:shadow-elegant transition">
                <div className="w-14 h-14 rounded-full bg-navy-gradient flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div className="font-display text-lg font-semibold mb-1">{r.role}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{r.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
