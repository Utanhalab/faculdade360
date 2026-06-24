import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/negocio")({
  head: () => ({
    meta: [
      { title: "Modelo de Negócio — Faculdade 360º" },
      { name: "description", content: "Três fontes de receita sustentáveis: prestação de serviço, subscrição e comissão por mentoria (MaaS)." },
      { property: "og:title", content: "Modelo de Negócio — Faculdade 360º" },
      { property: "og:description", content: "Prestação de serviço, subscrição e comissão por mentoria." },
      { property: "og:url", content: "https://faculdade360.lovable.app/negocio" },
    ],
    links: [{ rel: "canonical", href: "https://faculdade360.lovable.app/negocio" }],
  }),
  component: BusinessPage,
});

const streams = [
  { title: "Prestação de Serviço", desc: "Serviços académicos premium para estudantes, investigadores e instituições.", detail: "Pacotes de consultoria, formação corporativa e licenciamento de conteúdo a universidades." },
  { title: "Subscrição", desc: "Plano mensal/anual com acesso completo à biblioteca, IA e salas virtuais.", detail: "Pricing acessível ao estudante angolano, com opção familiar e institucional." },
  { title: "Comissão por Mentoria", desc: "Modelo MaaS — comissão sobre cada sessão entre mentor especialista e estudante.", detail: "Mentor monetiza o seu tempo; estudante acede a quadros séniores de empresas de topo." },
];

const unit = [
  { k: "CAC", v: "Reduzido via parcerias institucionais com universidades." },
  { k: "LTV", v: "Estudante permanece 4-6 anos no curso + alumni network." },
  { k: "Margem", v: "Software-first, com custo marginal próximo de zero." },
  { k: "Moats", v: "Conteúdo curricular, rede de mentores e marca cultural." },
];

function BusinessPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Modelo de Negócio"
        title={<>Três fontes de <span className="text-gradient-gold">receita</span> sustentáveis.</>}
        subtitle="Combinamos receita recorrente, serviços de alto valor e um modelo MaaS único no mercado angolano."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {streams.map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-card border border-border p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 font-display text-[140px] leading-none font-semibold text-gold/10 select-none">
                  {i + 1}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3 relative">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative mb-4">{s.desc}</p>
                <p className="text-sm text-foreground/70 leading-relaxed relative border-t border-border pt-4">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Unit Economics</div>
            <h2 className="text-3xl md:text-4xl font-semibold">Fundamentos da escala.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {unit.map((u) => (
              <div key={u.k} className="rounded-2xl bg-card border border-border p-6">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">{u.k}</div>
                <p className="text-sm leading-relaxed">{u.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
