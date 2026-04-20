import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    name: "Ana Paula Ferreira",
    role: "Analista de Marketing · Ambev",
    result: "Automatizei 70% do reporting",
    text: "Em 2 meses eu estava liderando a iniciativa de IA do meu time. O Academy se pagou só com o tempo que ganhei de volta.",
  },
  {
    name: "Rodrigo Santos",
    role: "Head de Vendas · SaaS",
    result: "3 workflows rodando sozinhos",
    text: "Achei que sabia IA porque usava ChatGPT todo dia. O Academy me mostrou o tanto que eu estava deixando na mesa.",
  },
  {
    name: "Júlia Costa",
    role: "Empreendedora · Agência",
    result: "Dobrei capacidade sem contratar",
    text: "Em 4 meses dobrei minha capacidade sem contratar ninguém. A Mari ensina com uma clareza que não existe em outros lugares.",
  },
  {
    name: "Pedro Almeida",
    role: "Coordenador Financeiro",
    result: "Virei referência no meu setor",
    text: "Fiz vários cursos antes. Todos teóricos. Aqui toda semana tem aplicação real. Em 5 meses virei a referência de IA.",
  },
  {
    name: "Camila Rocha",
    role: "Consultora · RH",
    result: "Volto de cada Q&A com 2-3 implementações",
    text: "Os Q&As quinzenais são o melhor da assinatura. Cada encontro volto com coisas pra implementar na semana.",
  },
  {
    name: "Lucas Mendes",
    role: "Dev · Fintech",
    result: "Assinei pra testar, não saio mais",
    text: "Entrei em março. Cinco meses depois, não saio mais. A comunidade é viva e a Mari responde mesmo. Valor incomparável.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-pad bg-[var(--surface)]">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Prova</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              Resultado é o que importa.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06}>
              <article className="h-full rounded-2xl border border-white/8 bg-black/40 p-6">
                <p className="text-sm font-semibold text-[var(--accent)]">
                  {t.result}
                </p>
                <p className="mt-3 leading-relaxed text-white/80">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <p className="flex items-center gap-2 text-white">
              <Star className="h-5 w-5 fill-[var(--accent)] text-[var(--accent)]" />
              <span className="font-display text-xl font-bold">4,9</span>
              <span className="text-sm text-white/55">de satisfação</span>
            </p>
            <p className="text-white">
              <span className="font-display text-xl font-bold">93%</span>{" "}
              <span className="text-sm text-white/55">seguem após 3 meses</span>
            </p>
            <p className="text-white">
              <span className="font-display text-xl font-bold">+2.000</span>{" "}
              <span className="text-sm text-white/55">Aplicados ativos</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
