import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Faculdade 360º" },
      { name: "description", content: "Fale com a equipa da Faculdade 360º — investidores, universidades parceiras e empresas." },
      { property: "og:title", content: "Contacto — Faculdade 360º" },
      { property: "og:description", content: "Investidores, universidades parceiras e empresas." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contacto"
        title={<>Vamos <span className="text-gradient-gold">conversar</span>.</>}
        subtitle="Investidores, universidades e empresas — preencha o formulário e a nossa equipa responde em 48 horas."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <div className="rounded-2xl border border-border bg-card p-8">
            {sent ? (
              <div className="py-16 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gold/15 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">Mensagem recebida</h3>
                <p className="text-muted-foreground">Entraremos em contacto em breve.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Organização" name="org" placeholder="Empresa, fundo ou universidade" />
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Sou…</label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
                    <option>Investidor / Fundo</option>
                    <option>Universidade / Instituição</option>
                    <option>Empresa parceira / Mentor</option>
                    <option>Imprensa</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm resize-none"
                    placeholder="Conte-nos um pouco sobre o seu interesse."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition"
                >
                  Enviar mensagem <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <InfoCard icon={Mail} title="Email" value="contacto@faculdade360.ao" />
            <InfoCard icon={Phone} title="Telefone" value="+244 900 000 000" />
            <InfoCard icon={MapPin} title="Sede" value="Luanda, Angola" />
            <div className="rounded-2xl bg-navy-gradient text-primary-foreground p-6">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">Para investidores</div>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Disponibilizamos deck completo, modelo financeiro e acesso à beta sob NDA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium mb-1.5 block">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, value }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div>
        <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">{title}</div>
        <div className="font-medium mt-0.5">{value}</div>
      </div>
    </div>
  );
}
