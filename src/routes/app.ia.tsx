import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Send, BookOpen } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/ia")({
  component: AI,
});

type Msg = { role: "user" | "assistant"; text: string };

const seed: Msg[] = [
  { role: "assistant", text: "Olá! Sou o assistente da Faculdade 360º. Pergunte-me sobre qualquer cadeira do seu curso — as respostas são baseadas no currículo da sua universidade." },
  { role: "user", text: "Pode resumir o conceito de integral definida?" },
  { role: "assistant", text: "Claro. A integral definida de f(x) entre a e b representa a área algébrica entre o gráfico de f e o eixo x naquele intervalo. No programa de Cálculo II da sua universidade, usamos a notação ∫ₐᵇ f(x)dx e o Teorema Fundamental do Cálculo: ∫ₐᵇ f(x)dx = F(b) − F(a), onde F é uma primitiva de f." },
];

function AI() {
  const [msgs, setMsgs] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setMsgs((m) => [
      ...m,
      { role: "user", text: input },
      { role: "assistant", text: "Demo — esta resposta seria gerada com base no currículo da sua instituição." },
    ]);
    setInput("");
  }

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-12rem)]">
      <div>
        <h1 className="text-3xl font-semibold flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-gold" /> Assistente IA
        </h1>
        <p className="text-muted-foreground mt-1">Treinado no currículo angolano e nas avaliações da sua universidade.</p>
      </div>

      <div className="flex-1 overflow-y-auto mt-6 space-y-4 pr-2">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
              m.role === "user" ? "bg-primary text-primary-foreground" : "bg-card border border-border"
            }`}>
              {m.text}
              {m.role === "assistant" && i === 2 && (
                <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-gold" /> Fonte: Cálculo, Stewart · Vol. I — Cap. 5
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={send} className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pergunte sobre uma cadeira, conceito ou teste…"
          className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm"
        />
        <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-medium">
          <Send className="w-4 h-4" /> Enviar
        </button>
      </form>
    </div>
  );
}
