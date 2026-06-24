import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — Faculdade 360º" },
      { name: "description", content: "O caminho da Faculdade 360º até cada universidade angolana, em quatro fases." },
      { property: "og:title", content: "Roadmap — Faculdade 360º" },
      { property: "og:description", content: "MVP, mentoria corporativa, expansão nacional e lançamentos presenciais." },
    ],
  }),
  component: RoadmapPage,
});

const phases = [
  { phase: "Fase 1", title: "MVP & Beta Fechada", desc: "Lançamento com 2-3 universidades parceiras em Luanda. Funcionalidades core: IA, biblioteca, salas virtuais." },
  { phase: "Fase 2", title: "Mentoria Corporativa", desc: "Onboarding de mentores de grandes empresas. Activação do modelo MaaS e primeiras sessões." },
  { phase: "Fase 3", title: "Expansão Nacional", desc: "Cobertura de todas as províncias. Modo offline robusto para zonas com baixa conectividade." },
  { phase: "Fase 4", title: "Lançamentos Presenciais", desc: "Eventos, conferências e bootcamps presenciais conectando estudantes e empresas." },
];

function RoadmapPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Roadmap"
        title={<>O caminho até <span className="text-gradient-gold">cada universidade angolana</span>.</>}
        subtitle="Quatro fases sequenciais, do MVP em Luanda à presença nacional com eventos presenciais."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-10">
              {phases.map((p, i) => (
                <div key={p.phase} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <div className={`pl-12 md:pl-0 md:[direction:ltr] ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="absolute left-0 md:left-1/2 top-2 w-8 h-8 rounded-full bg-gold border-4 border-background -translate-x-0 md:-translate-x-1/2 flex items-center justify-center text-xs font-display font-semibold text-gold-foreground">
                      {i + 1}
                    </div>
                    <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">{p.phase}</div>
                    <h3 className="font-display text-2xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
