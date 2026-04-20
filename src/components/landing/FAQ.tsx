import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Sou iniciante total em IA. Dá pra entrar?",
    a: "Dá. A Academy tem trilhas introdutórias que te colocam do zero ao uso real em 30 dias. A maior parte dos Aplicados começa sem conhecimento técnico nenhum.",
  },
  {
    q: "Já uso ChatGPT. Vou aprender algo novo?",
    a: "Sim. A diferença da Academy é o método: em vez de 'prompts mágicos', você aprende a integrar IA na sua rotina específica. Cases reais, ferramentas além do ChatGPT e a lógica por trás de cada uso.",
  },
  {
    q: "E se eu não puder assistir ao vivo?",
    a: "Todas as aulas ficam gravadas com transcrição. Você assiste no seu tempo. Os Q&A também, e você pode enviar pergunta antes se não puder estar presente.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Sem fidelidade, sem multa, sem formulário infinito. Dois cliques na área do aluno e pronto. E tem garantia de 7 dias se mudar de ideia.",
  },
  {
    q: "Qual a diferença pra um curso tradicional de IA?",
    a: "Curso tem começo, meio e fim — e suas dúvidas aparecem depois que acaba. A Academy é contínua: aulas novas toda semana, mentoria pra resolver problema real e comunidade que implementa junto.",
  },
  {
    q: "Serve pra minha área (marketing, vendas, RH, finanças...)?",
    a: "Sim. Temos 18 trilhas organizadas por função. Você escolhe a sua e aprofunda no que importa pro seu dia.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-section-alt section-pad">
      <div className="container-narrow px-4 sm:px-6">
        <div className="text-center">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="mt-6 h-section text-white">
            Antes de entrar, <br className="sm:hidden" /> você pode estar
            se <span className="text-gradient-lime">perguntando</span>…
          </h2>
        </div>

        <div className="mx-auto mt-12 md:mt-16 max-w-3xl divide-y divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.015]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 px-5 py-5 text-left md:px-7 md:py-6 transition-colors hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg font-semibold text-white">
                    {f.q}
                  </span>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 md:px-7 md:pb-7 -mt-1">
                    <p className="text-sm md:text-base leading-relaxed text-white/65 max-w-[60ch]">
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
