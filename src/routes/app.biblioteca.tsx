import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, Search } from "lucide-react";

export const Route = createFileRoute("/app/biblioteca")({
  component: Biblioteca,
});

const books = [
  { title: "Cálculo, Volume I", author: "James Stewart", course: "Cálculo II", offline: true },
  { title: "Algoritmos: Teoria e Prática", author: "Cormen et al.", course: "Algoritmos", offline: true },
  { title: "Probabilidade e Estatística", author: "Morettin & Bussab", course: "Estatística", offline: false },
  { title: "Engenharia de Software", author: "Ian Sommerville", course: "ES", offline: true },
  { title: "Redes de Computadores", author: "Tanenbaum", course: "Redes", offline: false },
  { title: "Banco de Dados", author: "Elmasri & Navathe", course: "BD", offline: true },
];

function Biblioteca() {
  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Biblioteca</h1>
          <p className="text-muted-foreground mt-1">Bibliografia do seu curso, disponível offline.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            placeholder="Procurar título, autor ou cadeira"
            className="pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm w-72"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((b) => (
          <div key={b.title} className="rounded-2xl bg-card border border-border p-5 flex gap-4">
            <div className="w-14 h-20 rounded-md bg-navy-gradient flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display font-semibold leading-snug">{b.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{b.author}</div>
              <div className="text-[11px] mt-2 inline-block px-2 py-0.5 rounded-full bg-muted">{b.course}</div>
              <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-gold transition">
                <Download className="w-3.5 h-3.5" />
                {b.offline ? "Disponível offline" : "Descarregar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
