import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Library, WifiOff, TrendingUp, Building2, Quote, GraduationCap, BookOpen, Bot, CheckCircle2, Star } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import patternBg from "@/assets/pattern-bg.jpg";
import phoneImg from "@/assets/hero-phone.png";
import studentImg from "@/assets/hero-student.jpg";
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
    <section className="relative overflow-hidden bg-background">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-gold/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Top eyebrow */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border shadow-sm px-4 py-1.5 text-xs font-medium text-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Pitch para Investidores & Parceiros
            <span className="text-muted-foreground">· 2026</span>
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-foreground">
            A infraestrutura digital do{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold">ensino superior</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 9 Q 150 -2 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-gold/60"/>
              </svg>
            </span>{" "}
            angolano.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            IA com currículo nacional, biblioteca académica, mentoria corporativa
            e acesso offline — numa única app feita para Angola.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium shadow-elegant hover:translate-y-[-1px] transition"
            >
              Investir / Parceria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
            <Link
              to="/produto"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-7 py-3.5 font-medium hover:bg-accent transition"
            >
              Ver o produto
            </Link>
          </div>
        </div>

        {/* Visual bento collage — organized, clean alignment */}
        <div className="mt-20 grid grid-cols-12 gap-5 md:gap-6 max-w-6xl mx-auto items-stretch">
          {/* Left column — 3 cards stacked, equal spacing */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-5 md:gap-6">
            {/* Student portrait */}
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border flex-1 min-h-[220px]">
              <img
                src={studentImg}
                alt="Estudante universitário angolano"
                width={768}
                height={768}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
                <div className="text-xs uppercase tracking-wider opacity-80">Estudante</div>
                <div className="font-display font-semibold text-xl leading-tight">+250 mil em Angola</div>
              </div>
            </div>

            {/* AI card */}
            <div className="rounded-3xl bg-primary text-primary-foreground p-6 shadow-elegant">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold mb-4">
                <Bot className="w-4 h-4" /> IA Académica
              </div>
              <p className="text-sm leading-relaxed text-primary-foreground/85">
                "Explica-me a Lei de Okun com exemplos da economia angolana."
              </p>
              <div className="mt-4 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>

            {/* Mentor card — moved from floating to grid */}
            <div className="rounded-3xl bg-card border border-border p-5 shadow-elegant flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Mentor BAI</div>
                <div className="text-sm font-semibold text-foreground">Sessão agendada</div>
              </div>
            </div>
          </div>

          {/* Center phone — clean, no overlapping chips */}
          <div className="col-span-12 md:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[420px] flex items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-gold/10 via-transparent to-primary/10 border border-border/50">
              <img
                src={phoneImg}
                alt="App Faculdade 360º"
                width={1024}
                height={1536}
                className="relative max-h-[520px] w-auto h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right column — 3 cards stacked, matching left rhythm */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-5 md:gap-6">
            {/* Stat card */}
            <div className="rounded-3xl bg-card border border-border p-6 shadow-elegant flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Cobertura</div>
                <TrendingUp className="w-4 h-4 text-gold" />
              </div>
              <div className="font-display text-5xl font-semibold text-foreground">70+</div>
              <div className="text-sm text-muted-foreground mt-1">Instituições alvo</div>
              <div className="mt-5 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-primary to-gold rounded-full" />
              </div>
            </div>

            {/* Library card */}
            <div className="rounded-3xl bg-gold text-gold-foreground p-6 shadow-gold">
              <Library className="w-6 h-6 mb-4" />
              <div className="font-display text-xl font-semibold leading-tight">Biblioteca digital nacional</div>
              <div className="text-sm mt-2 opacity-80">Bibliografia oficial dos cursos.</div>
            </div>

            {/* Testimonial */}
            <div className="rounded-3xl bg-card border border-border p-6 shadow-elegant flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-1 text-gold mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                "Finalmente uma plataforma que entende o nosso currículo."
              </p>
              <div className="text-xs text-muted-foreground mt-3">— Estudante, Eng. Informática</div>
            </div>
          </div>
        </div>

        {/* Feature strip — replaces chaotic floating chips with a clean row */}
        <div className="mt-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-card border border-border p-4 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <WifiOff className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground">Offline-first</div>
              <div className="text-[11px] text-muted-foreground">12 livros sincronizados</div>
            </div>
          </div>
          <div className="rounded-2xl bg-card border border-border p-4 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground">IA Nacional</div>
              <div className="text-[11px] text-muted-foreground">Treinada no currículo angolano</div>
            </div>
          </div>
          <div className="rounded-2xl bg-card border border-border p-4 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground">Mentoria MaaS</div>
              <div className="text-[11px] text-muted-foreground">Quadros de empresas parceiras</div>
            </div>
          </div>
          <div className="rounded-2xl bg-card border border-border p-4 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4 text-gold" />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground">Biblioteca Digital</div>
              <div className="text-[11px] text-muted-foreground">Acesso offline garantido</div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> MaaS</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Offline-first</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> IA nacional</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Mentoria corporativa</span>
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
