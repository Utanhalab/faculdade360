import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Library, Users, WifiOff, MessageSquare, Briefcase, GraduationCap, BookOpen, Award, Building2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/produto")({
  head: () => ({
    meta: [
      { title: "Produto — Faculdade 360º" },
      { name: "description", content: "Funcionalidades da Faculdade 360º: IA académica, biblioteca, mentoria corporativa, salas virtuais e acesso offline." },
      { property: "og:title", content: "Produto — Faculdade 360º" },
      { property: "og:description", content: "IA, biblioteca, mentoria corporativa e acesso offline numa única app móvel." },
    ],
  }),
  component: ProductPage,
});

const features = [
  { icon: Sparkles, title: "Ferramentas de estudo com IA", desc: "Respostas geradas a partir dos currículos educacionais de Angola e dos testes da sua instituição." },
  { icon: Library, title: "Biblioteca académica informatizada", desc: "Toda a bibliografia de referência do seu curso, no bolso." },
  { icon: Users, title: "Rede de mentoria", desc: "Especialistas e altos funcionários de grandes empresas como padrinhos académicos." },
  { icon: WifiOff, title: "Acesso offline", desc: "Pouco uso de dados — estuda mesmo sem conexão estável." },
  { icon: MessageSquare, title: "Salas virtuais de estudo", desc: "Espaços de colaboração entre estudantes do mesmo curso e ano." },
  { icon: Briefcase, title: "Ponte universidade-empresa", desc: "Conecta o que se aprende na sala ao que as empresas realmente esperam." },
];

const value = [
  "Modelo de Mentoria MaaS",
  "Acesso Offline com pouco consumo de dados",
  "Respostas geradas com base no currículo e nos testes da sua instituição",
  "Acesso direto a grandes empresas da sua área de formação",
  "Possibilidade de lançamentos presenciais",
  "Acompanhamento permanente do orientador virtual no TCC",
];

const audiences = [
  { icon: GraduationCap, label: "Estudantes universitários" },
  { icon: BookOpen, label: "Investigadores" },
  { icon: Award, label: "Autoridades em áreas específicas" },
  { icon: Building2, label: "Empresas" },
  { icon: Library, label: "Instituições de ensino superior" },
];

function ProductPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Produto"
        title={<>Um aplicativo móvel que junta <span className="text-gradient-gold">IA, biblioteca, mentoria e produtividade</span>.</>}
        subtitle="Tudo o que um estudante universitário angolano precisa para estudar melhor, conectar-se e preparar a carreira."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-card border border-border p-7 hover:shadow-elegant transition">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Proposta de Valor</div>
            <h2 className="text-3xl md:text-4xl font-semibold">Porque a Faculdade 360º é <span className="text-gradient-gold">diferente</span>.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {value.map((p, i) => (
              <div key={p} className="flex gap-4 items-start p-6 rounded-2xl bg-card border border-border">
                <div className="shrink-0 w-9 h-9 rounded-full bg-primary text-gold flex items-center justify-center font-display font-semibold text-sm">
                  0{i + 1}
                </div>
                <p className="text-[15px] leading-relaxed pt-1.5">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Público-alvo</div>
            <h2 className="text-3xl md:text-4xl font-semibold">Quem servimos.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {audiences.map((a) => (
              <div key={a.label} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border">
                <a.icon className="w-6 h-6 text-gold" />
                <span className="text-sm font-medium leading-tight">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
