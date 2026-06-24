import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  BookOpen,
  Users,
  WifiOff,
  Building2,
  Sparkles,
  Target,
  TrendingUp,
  Award,
  Clock,
  Check,
  X,
  ArrowRight,
  Briefcase,
  Library,
  MessageSquare,
  Rocket,
} from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faculdade 360º — A maior plataforma de produtividade académica de Angola" },
      {
        name: "description",
        content:
          "Faculdade 360º combina IA, biblioteca académica, mentoria corporativa e produtividade offline para estudantes universitários angolanos.",
      },
      { property: "og:title", content: "Faculdade 360º — Produtividade Académica para Angola" },
      {
        property: "og:description",
        content:
          "Ferramentas de estudo com IA, biblioteca informatizada, mentoria de elite e acesso offline. Construído para estudantes universitários de Angola.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Audience />
      <Solution />
      <Value />
      <Competition />
      <Metrics />
      <Business />
      <Roadmap />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    ["Problema", "#problema"],
    ["Solução", "#solucao"],
    ["Valor", "#valor"],
    ["Concorrência", "#concorrencia"],
    ["Modelo", "#modelo"],
    ["Roadmap", "#roadmap"],
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-gold" />
          </div>
          <span className="font-display text-lg font-semibold">
            Faculdade <span className="text-gradient-gold">360º</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Junte-se à beta <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-navy-gradient" />
      <div
        className="absolute inset-0 -z-10 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url(${patternBg})`, backgroundSize: "cover" }}
      />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-1 text-xs font-medium text-gold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Feito em Angola, para Angola
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            A maior plataforma de{" "}
            <span className="text-gradient-gold">conexão e produtividade</span> académica
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/75 max-w-xl leading-relaxed">
            Ferramentas de estudo com IA, biblioteca informatizada, mentoria de
            elite e acesso offline — num único aplicativo móvel desenhado para os
            currículos das universidades angolanas.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 font-medium shadow-gold hover:translate-y-[-1px] transition"
            >
              Quero fazer parte <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#solucao"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 text-primary-foreground px-6 py-3 font-medium hover:bg-primary-foreground/10 transition"
            >
              Como funciona
            </a>
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

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    {
      icon: TrendingUp,
      title: "Alta reprovação em disciplinas técnicas",
      desc: "Estudantes lutam sozinhos contra cadeiras críticas sem apoio estruturado.",
    },
    {
      icon: Target,
      title: "Disparidade entre universidades",
      desc: "O mesmo curso, no mesmo ano, gera níveis de conhecimento completamente diferentes.",
    },
    {
      icon: Users,
      title: "Pouco espaço de conexão",
      desc: "Estudantes universitários angolanos não têm comunidade nem networking real.",
    },
    {
      icon: Library,
      title: "Bibliografia inacessível",
      desc: "Acesso limitado à literatura de referência dos próprios cursos.",
    },
  ];
  return (
    <Section
      id="problema"
      eyebrow="Problema"
      title={<>O ensino superior em Angola enfrenta <span className="text-gradient-gold">barreiras silenciosas</span>.</>}
    >
      <div className="grid md:grid-cols-2 gap-5">
        {problems.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl border border-border bg-card p-7 hover:border-gold/40 hover:shadow-elegant transition"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition">
              <p.icon className="w-5 h-5 text-primary group-hover:text-gold transition" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Audience() {
  const audiences = [
    { icon: GraduationCap, label: "Estudantes universitários" },
    { icon: BookOpen, label: "Investigadores" },
    { icon: Award, label: "Autoridades em áreas específicas" },
    { icon: Building2, label: "Empresas" },
    { icon: Library, label: "Instituições de ensino superior" },
  ];
  return (
    <section className="py-16 border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="md:w-1/4">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">
              Público-alvo
            </div>
            <h3 className="font-display text-2xl font-semibold">Quem servimos</h3>
          </div>
          <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-5 gap-4">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <a.icon className="w-6 h-6 text-gold" />
                <span className="text-sm font-medium leading-tight">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const features = [
    {
      icon: Sparkles,
      title: "Ferramentas de estudo com IA",
      desc: "Respostas geradas a partir dos currículos educacionais de Angola e dos testes da sua instituição.",
    },
    {
      icon: Library,
      title: "Biblioteca académica informatizada",
      desc: "Toda a bibliografia de referência do seu curso, no bolso.",
    },
    {
      icon: Users,
      title: "Rede de mentoria",
      desc: "Especialistas e altos funcionários de grandes empresas como padrinhos académicos.",
    },
    {
      icon: WifiOff,
      title: "Acesso offline",
      desc: "Pouco uso de dados — estuda mesmo sem conexão estável.",
    },
    {
      icon: MessageSquare,
      title: "Salas virtuais de estudo",
      desc: "Espaços de colaboração entre estudantes do mesmo curso e ano.",
    },
    {
      icon: Briefcase,
      title: "Ponte universidade-empresa",
      desc: "Conecta o que se aprende na sala ao que as empresas realmente esperam.",
    },
  ];
  return (
    <Section
      id="solucao"
      eyebrow="Solução"
      title={
        <>
          Um aplicativo móvel que junta <span className="text-gradient-gold">IA, biblioteca, mentoria e produtividade</span> numa só experiência.
        </>
      }
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-card border border-border p-7 hover:shadow-elegant transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center mb-5">
              <f.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Value() {
  const props = [
    "Modelo de Mentoria MaaS",
    "Acesso Offline com pouco consumo de dados",
    "Respostas geradas com base no currículo e nos testes da sua instituição",
    "Acesso direto a grandes empresas da sua área de formação",
    "Possibilidade de lançamentos presenciais",
    "Acompanhamento permanente do orientador virtual no TCC",
  ];
  return (
    <Section
      id="valor"
      eyebrow="Proposta de Valor"
      title={<>Porque a Faculdade 360º é <span className="text-gradient-gold">diferente</span>.</>}
      className="bg-surface"
    >
      <div className="grid md:grid-cols-2 gap-4">
        {props.map((p, i) => (
          <div
            key={p}
            className="flex gap-4 items-start p-6 rounded-2xl bg-card border border-border"
          >
            <div className="shrink-0 w-9 h-9 rounded-full bg-primary text-gold flex items-center justify-center font-display font-semibold text-sm">
              0{i + 1}
            </div>
            <p className="text-[15px] leading-relaxed pt-1.5">{p}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Competition() {
  const rows = [
    {
      criterio: "Foco",
      f360: "Produtividade académica, comunidade e networking de elite",
      mumala: "Programa de estágio",
      criar: "Acesso ao primeiro emprego",
    },
    {
      criterio: "Mentoria",
      f360: "Entidades corporativas e especialistas da sua universidade",
      mumala: "Formadores",
      criar: "Formadores do programa",
    },
    {
      criterio: "Salas virtuais de estudo",
      f360: true,
      mumala: false,
      criar: false,
    },
    {
      criterio: "Acesso offline",
      f360: true,
      mumala: false,
      criar: false,
    },
    {
      criterio: "IA com currículo angolano",
      f360: true,
      mumala: false,
      criar: false,
    },
  ];
  const Cell = ({ v }: { v: string | boolean }) =>
    typeof v === "boolean" ? (
      v ? (
        <Check className="w-5 h-5 text-gold" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground/50" />
      )
    ) : (
      <span className="text-sm leading-relaxed">{v}</span>
    );
  return (
    <Section
      id="concorrencia"
      eyebrow="Concorrência"
      title={<>Onde estamos <span className="text-gradient-gold">à frente</span>.</>}
    >
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="p-5 font-display text-sm font-semibold w-1/5">Critério</th>
              <th className="p-5 font-display text-sm font-semibold bg-primary text-primary-foreground">
                Faculdade 360º
              </th>
              <th className="p-5 font-display text-sm font-semibold">Mumala</th>
              <th className="p-5 font-display text-sm font-semibold">Programa Criar</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.criterio} className="border-b border-border last:border-0">
                <td className="p-5 font-medium text-sm">{r.criterio}</td>
                <td className="p-5 bg-primary/5">
                  <Cell v={r.f360} />
                </td>
                <td className="p-5 text-muted-foreground">
                  <Cell v={r.mumala} />
                </td>
                <td className="p-5 text-muted-foreground">
                  <Cell v={r.criar} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function Metrics() {
  const metrics = [
    { icon: Users, label: "Nº de subscrições", value: "KPI" },
    { icon: TrendingUp, label: "Crescimento de utilizadores", value: "KPI" },
    { icon: Sparkles, label: "Eficácia das funcionalidades", value: "KPI" },
    { icon: Award, label: "Utilizadores formados com excelência", value: "KPI" },
    { icon: Clock, label: "Horas de estudo e orientação", value: "KPI" },
  ];
  return (
    <Section
      id="metricas"
      eyebrow="Métricas"
      title={<>Como medimos o <span className="text-gradient-gold">sucesso</span>.</>}
      className="bg-surface"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl bg-card border border-border p-6 text-center hover:border-gold/40 transition"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-gold/15 flex items-center justify-center mb-4">
              <m.icon className="w-6 h-6 text-gold" />
            </div>
            <div className="text-xs font-semibold tracking-wider text-gold mb-2">
              {m.value}
            </div>
            <div className="text-sm font-medium leading-snug">{m.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Business() {
  const streams = [
    {
      title: "Prestação de Serviço",
      desc: "Serviços académicos premium para estudantes, investigadores e instituições.",
    },
    {
      title: "Subscrição",
      desc: "Plano mensal/anual com acesso completo à biblioteca, IA e salas virtuais.",
    },
    {
      title: "Comissão por Mentoria",
      desc: "Modelo MaaS — comissão sobre cada sessão entre mentor especialista e estudante.",
    },
  ];
  return (
    <Section
      id="modelo"
      eyebrow="Modelo de Negócio"
      title={<>Três fontes de <span className="text-gradient-gold">receita</span> sustentáveis.</>}
    >
      <div className="grid md:grid-cols-3 gap-5">
        {streams.map((s, i) => (
          <div
            key={s.title}
            className="rounded-2xl bg-card border border-border p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 font-display text-[140px] leading-none font-semibold text-gold/10 select-none">
              {i + 1}
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3 relative">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed relative">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Roadmap() {
  const phases = [
    {
      phase: "Fase 1",
      title: "MVP & Beta Fechada",
      desc: "Lançamento com 2-3 universidades parceiras em Luanda. Funcionalidades core: IA, biblioteca, salas virtuais.",
    },
    {
      phase: "Fase 2",
      title: "Mentoria Corporativa",
      desc: "Onboarding de mentores de grandes empresas. Activação do modelo MaaS e primeiras sessões.",
    },
    {
      phase: "Fase 3",
      title: "Expansão Nacional",
      desc: "Cobertura de todas as províncias. Modo offline robusto para zonas com baixa conectividade.",
    },
    {
      phase: "Fase 4",
      title: "Lançamentos Presenciais",
      desc: "Eventos, conferências e bootcamps presenciais conectando estudantes e empresas.",
    },
  ];
  return (
    <Section
      id="roadmap"
      eyebrow="Roadmap"
      title={<>O caminho até <span className="text-gradient-gold">cada universidade angolana</span>.</>}
      className="bg-surface"
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
        <div className="space-y-10">
          {phases.map((p, i) => (
            <div
              key={p.phase}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={`pl-12 md:pl-0 md:[direction:ltr] ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <div
                  className={`absolute left-0 md:left-1/2 top-2 w-8 h-8 rounded-full bg-gold border-4 border-background -translate-x-0 md:-translate-x-1/2 flex items-center justify-center text-xs font-display font-semibold text-gold-foreground`}
                >
                  {i + 1}
                </div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">
                  {p.phase}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
              <div />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Team() {
  const roles = [
    { role: "Fundador & CEO", focus: "Visão, parcerias com universidades" },
    { role: "CTO", focus: "Engenharia mobile, IA e infraestrutura offline" },
    { role: "Head de Conteúdo Académico", focus: "Curadoria de currículos e bibliografia" },
    { role: "Head de Mentoria Corporativa", focus: "Rede de padrinhos empresariais" },
  ];
  return (
    <Section
      id="equipa"
      eyebrow="Equipa"
      title={<>Pessoas que <span className="text-gradient-gold">conhecem o terreno</span>.</>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {roles.map((r) => (
          <div
            key={r.role}
            className="rounded-2xl bg-card border border-border p-7 hover:shadow-elegant transition"
          >
            <div className="w-14 h-14 rounded-full bg-navy-gradient flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <div className="font-display text-lg font-semibold mb-1">{r.role}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{r.focus}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-12 md:p-16 text-primary-foreground">
          <div
            className="absolute inset-0 opacity-15 mix-blend-overlay"
            style={{ backgroundImage: `url(${patternBg})`, backgroundSize: "cover" }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Rocket className="w-10 h-10 text-gold mb-5" />
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                Pronto para transformar o seu percurso académico?
              </h2>
              <p className="mt-5 text-primary-foreground/75 text-lg">
                Junte-se à lista de espera da beta e seja dos primeiros a usar a
                Faculdade 360º.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Obrigado! Entraremos em contacto em breve.");
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="O seu nome"
                className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3.5 placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold transition"
              />
              <input
                type="email"
                required
                placeholder="O seu email"
                className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3.5 placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold transition"
              />
              <input
                type="text"
                placeholder="Universidade / curso"
                className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3.5 placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold transition"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-gold-foreground px-6 py-3.5 font-semibold shadow-gold hover:translate-y-[-1px] transition"
              >
                Quero entrar na beta <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-gold" />
          </div>
          <span className="font-display font-semibold text-foreground">Faculdade 360º</span>
        </div>
        <p>© {new Date().getFullYear()} Faculdade 360º — Feito em Angola.</p>
      </div>
    </footer>
  );
}
