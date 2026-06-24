import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Library, WifiOff, TrendingUp, Building2, Quote } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import patternBg from "@/assets/pattern-bg.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faculdade 360º — A plataforma de produtividade académica de Angola" },
      {
        name: "description",
        content:
          "Plataforma móvel que une IA, biblioteca, mentoria corporativa e acesso offline para estudantes universitários angolanos. Apresentação para investidores e parceiros.",
      },
      { property: "og:title", content: "Faculdade 360º — Produtividade Académica para Angola" },
      {
        property: "og:description",
        content:
          "IA com currículo angolano, biblioteca informatizada, mentoria corporativa (MaaS) e acesso offline.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Pillars />
      <Opportunity />
      <Differentiators />
      <ClosingCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-navy-gradient" />
      <div
        className="absolute inset-0 -z-10 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url(${patternBg})`, backgroundSize: "cover" }}
      />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-1 text-xs font-medium text-gold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Pitch para Investidores & Parceiros
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Construímos a infraestrutura digital do{" "}
            <span className="text-gradient-gold">ensino superior angolano</span>.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/75 max-w-xl leading-relaxed">
            Faculdade 360º é uma app móvel que junta IA com currículo nacional,
            biblioteca académica, mentoria corporativa (MaaS) e acesso offline —
            tudo numa única experiência feita para Angola.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 font-medium shadow-gold hover:translate-y-[-1px] transition"
            >
              Investir / Parceria <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/produto"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 text-primary-foreground px-6 py-3 font-medium hover:bg-primary-foreground/10 transition"
            >
              Ver o produto
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["MaaS", "Mentoria como Serviço"],
              ["Offline", "Pouco uso de dados"],
              ["IA", "Currículo angolano"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-2xl font-display font-semibold text-gold">{k}</div>
                <div className="text-xs text-primary-foreground/65 mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Estudantes universitários angolanos usando a Faculdade 360º"
            width={1536}
            height={1024}
            className="relative rounded-3xl shadow-elegant border border-primary-foreground/10"
          />
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { icon: Sparkles, title: "IA Académica", desc: "Respostas treinadas no currículo angolano e em avaliações da própria instituição." },
    { icon: Library, title: "Biblioteca digital", desc: "Bibliografia oficial dos cursos, acessível offline." },
    { icon: Users, title: "Mentoria corporativa", desc: "Quadros séniores de grandes empresas como padrinhos académicos." },
    { icon: WifiOff, title: "Offline-first", desc: "Funciona em zonas com pouca cobertura e baixo consumo de dados." },
  ];
  return (
    <section className="py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Quatro pilares</div>
          <h2 className="text-3xl md:text-4xl font-semibold">Uma plataforma. Quatro vantagens defensíveis.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                <it.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Opportunity() {
  const stats = [
    { value: "+250k", label: "Estudantes do ensino superior em Angola" },
    { value: "70+", label: "Instituições de ensino superior" },
    { value: "3", label: "Fontes de receita complementares" },
    { value: "1ª", label: "Plataforma com mentoria corporativa estruturada" },
  ];
  return (
    <section className="py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Oportunidade</div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Um mercado <span className="text-gradient-gold">subatendido</span>, com fome de ferramentas digitais sérias.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Edtechs globais não compreendem o currículo angolano. Iniciativas locais
              focam apenas em estágios. Faculdade 360º é a primeira a tratar o
              estudante universitário como um profissional em formação contínua.
            </p>
            <Link
              to="/mercado"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-gold transition"
            >
              Ver análise de mercado <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-card border border-border p-6">
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const items = [
    { icon: TrendingUp, title: "Tração através das universidades", desc: "Parcerias institucionais que aceleram a adopção e reduzem CAC." },
    { icon: Building2, title: "Ponte universidade-empresa", desc: "Mentoria corporativa cria valor real para alunos e para os RH das parceiras." },
    { icon: Quote, title: "Marca culturalmente nativa", desc: "Conteúdo, IA e UX feitos em Angola, para Angola." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Porquê agora</div>
          <h2 className="text-3xl md:text-4xl font-semibold">Vantagens que se acumulam com cada novo aluno.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                <it.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-12 md:p-16 text-primary-foreground">
          <div
            className="absolute inset-0 opacity-15 mix-blend-overlay"
            style={{ backgroundImage: `url(${patternBg})`, backgroundSize: "cover" }}
          />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Vamos construir juntos a infraestrutura académica de Angola?
              </h2>
              <p className="mt-4 text-primary-foreground/75 max-w-xl">
                Procuramos investidores, universidades parceiras e empresas para a rede de mentoria.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-gold-foreground px-6 py-3.5 font-semibold shadow-gold"
              >
                Falar connosco <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/negocio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/25 px-6 py-3.5 font-medium hover:bg-primary-foreground/10 transition"
              >
                Ver modelo de negócio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
