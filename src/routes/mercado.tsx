import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Target, Users, Library, Check, X, Sparkles, Award, Clock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/mercado")({
  head: () => ({
    meta: [
      { title: "Mercado — Faculdade 360º" },
      { name: "description", content: "O problema, a concorrência e as métricas de sucesso da Faculdade 360º no mercado angolano." },
      { property: "og:title", content: "Mercado — Faculdade 360º" },
      { property: "og:description", content: "Problemas reais do ensino superior em Angola e como nos posicionamos face à concorrência." },
    ],
  }),
  component: MarketPage,
});

const problems = [
  { icon: TrendingUp, title: "Alta reprovação em disciplinas técnicas", desc: "Estudantes lutam sozinhos contra cadeiras críticas sem apoio estruturado." },
  { icon: Target, title: "Disparidade entre universidades", desc: "O mesmo curso, no mesmo ano, gera níveis de conhecimento completamente diferentes." },
  { icon: Users, title: "Pouco espaço de conexão", desc: "Estudantes universitários angolanos não têm comunidade nem networking real." },
  { icon: Library, title: "Bibliografia inacessível", desc: "Acesso limitado à literatura de referência dos próprios cursos." },
];

const rows = [
  { criterio: "Foco", f360: "Produtividade académica, comunidade e networking de elite", mumala: "Programa de estágio", criar: "Acesso ao primeiro emprego" },
  { criterio: "Mentoria", f360: "Entidades corporativas e especialistas da sua universidade", mumala: "Formadores", criar: "Formadores do programa" },
  { criterio: "Salas virtuais de estudo", f360: true, mumala: false, criar: false },
  { criterio: "Acesso offline", f360: true, mumala: false, criar: false },
  { criterio: "IA com currículo angolano", f360: true, mumala: false, criar: false },
] as const;

const metrics = [
  { icon: Users, label: "Nº de subscrições" },
  { icon: TrendingUp, label: "Crescimento de utilizadores" },
  { icon: Sparkles, label: "Eficácia das funcionalidades" },
  { icon: Award, label: "Utilizadores formados com excelência" },
  { icon: Clock, label: "Horas de estudo e orientação" },
];

const Cell = ({ v }: { v: string | boolean }) =>
  typeof v === "boolean" ? (
    v ? <Check className="w-5 h-5 text-gold" /> : <X className="w-5 h-5 text-muted-foreground/50" />
  ) : (
    <span className="text-sm leading-relaxed">{v}</span>
  );

function MarketPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Mercado"
        title={<>O ensino superior em Angola enfrenta <span className="text-gradient-gold">barreiras silenciosas</span>.</>}
        subtitle="Identificámos quatro problemas estruturais — e construímos a única plataforma que os ataca em conjunto."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="group rounded-2xl border border-border bg-card p-7 hover:border-gold/40 hover:shadow-elegant transition">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition">
                  <p.icon className="w-5 h-5 text-primary group-hover:text-gold transition" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Concorrência</div>
            <h2 className="text-3xl md:text-4xl font-semibold">Onde estamos <span className="text-gradient-gold">à frente</span>.</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="p-5 font-display text-sm font-semibold w-1/5">Critério</th>
                  <th className="p-5 font-display text-sm font-semibold bg-primary text-primary-foreground">Faculdade 360º</th>
                  <th className="p-5 font-display text-sm font-semibold">Mumala</th>
                  <th className="p-5 font-display text-sm font-semibold">Programa Criar</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.criterio} className="border-b border-border last:border-0">
                    <td className="p-5 font-medium text-sm">{r.criterio}</td>
                    <td className="p-5 bg-primary/5"><Cell v={r.f360} /></td>
                    <td className="p-5 text-muted-foreground"><Cell v={r.mumala} /></td>
                    <td className="p-5 text-muted-foreground"><Cell v={r.criar} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Métricas</div>
            <h2 className="text-3xl md:text-4xl font-semibold">Como medimos o <span className="text-gradient-gold">sucesso</span>.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl bg-card border border-border p-6 text-center hover:border-gold/40 transition">
                <div className="w-12 h-12 mx-auto rounded-full bg-gold/15 flex items-center justify-center mb-4">
                  <m.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-xs font-semibold tracking-wider text-gold mb-2">KPI</div>
                <div className="text-sm font-medium leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
