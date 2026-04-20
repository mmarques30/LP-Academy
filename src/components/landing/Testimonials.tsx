import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    name: "Ana Paula Ferreira",
    role: "Analista de Marketing · Ambev",
    text: "Em 2 meses de Academy eu automatizei 70% do meu trabalho de reporting. Meu gestor me chamou pra liderar a iniciativa de IA do time. O curso se pagou no primeiro mês só com o tempo que ganhei de volta.",
  },
  {
    name: "Rodrigo Santos",
    role: "Head de Vendas · Startup SaaS",
    text: "Eu achei que já sabia IA porque usava ChatGPT todo dia. O Academy me mostrou o tanto que eu estava deixando na mesa. Hoje tenho 3 workflows rodando sozinhos e voltei a ter tempo pra estratégia.",
  },
  {
    name: "Júlia Costa",
    role: "Empreendedora · Agência Digital",
    text: "Eu fazia tudo à mão na minha agência e não crescia. Comecei no Academy em janeiro e em 4 meses dobrei minha capacidade sem contratar ninguém. A Mari ensina com uma clareza que não existe em outros lugares.",
  },
  {
    name: "Pedro Almeida",
    role: "Coordenador Financeiro · Indústria",
    text: "Fiz vários cursos de IA antes do Academy. Todos eram teóricos. O diferencial aqui é que toda semana tem aplicação real. Saí de iniciante pra virar referência no meu setor da empresa em 5 meses.",
  },
  {
    name: "Camila Rocha",
    role: "Consultora · RH",
    text: "A Mari entrega o que promete. Os Q&As quinzenais são o melhor da assinatura. É onde eu realmente destravo. Cada encontro volto com 2-3 coisas pra implementar na semana.",
  },
  {
    name: "Lucas Mendes",
    role: "Desenvolvedor · Fintech",
    text: "Assinei 'pra testar' em março. Cinco meses depois, não saio mais. A comunidade é viva, as aulas são densas e a Mari responde mesmo. Valor incomparável pelo preço.",
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
    <section id="depoimentos" className="section-pad bg-background">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-[var(--offwhite)] md:text-5xl">
            O que os <span className="text-[var(--brand-bright)]">Aplicados</span> estão dizendo
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <article className="card-surface h-full border-l-[3px] border-l-[var(--brand)] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand)]/20 font-bold text-[var(--brand-bright)]">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--offwhite)]">{t.name}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{t.role}</p>
                  </div>
                </div>
                <p className="text-[var(--sage)] leading-relaxed">"{t.text}"</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <p className="flex items-center gap-2 font-display text-xl font-extrabold text-[var(--offwhite)]">
              <Star className="h-5 w-5 fill-[var(--brand-bright)] text-[var(--brand-bright)]" />
              4,9 de satisfação
            </p>
            <p className="font-display text-xl font-extrabold text-[var(--offwhite)]">
              93% <span className="text-[var(--sage)] text-base font-normal">permanecem após 3 meses</span>
            </p>
            <p className="font-display text-xl font-extrabold text-[var(--offwhite)]">
              +2.000 <span className="text-[var(--sage)] text-base font-normal">Aplicados ativos</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
