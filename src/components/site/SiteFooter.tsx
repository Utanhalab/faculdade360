import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-gold" />
            </div>
            <span className="font-display text-lg font-semibold">
              Faculdade <span className="text-gradient-gold">360º</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            A maior plataforma de conexão e produtividade académica de Angola.
            IA, biblioteca, mentoria corporativa e acesso offline num só lugar.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" /> Luanda, Angola
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" /> contacto@faculdade360.ao
            </span>
          </div>
        </div>

        <div>
          <div className="font-display font-semibold mb-3">Empresa</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/produto" className="hover:text-foreground">Produto</Link></li>
            <li><Link to="/mercado" className="hover:text-foreground">Mercado</Link></li>
            <li><Link to="/negocio" className="hover:text-foreground">Negócio</Link></li>
            <li><Link to="/equipa" className="hover:text-foreground">Equipa</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-display font-semibold mb-3">Recursos</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/roadmap" className="hover:text-foreground">Roadmap</Link></li>
            <li><Link to="/app" className="hover:text-foreground">Demo do App</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Investidores</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Faculdade 360º — Feito em Angola.</p>
          <p>Construído para estudantes universitários angolanos.</p>
        </div>
      </div>
    </footer>
  );
}
