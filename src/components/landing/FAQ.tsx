import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  { q: "Eu preciso saber alguma coisa de IA pra entrar?", a: "Não. O Academy tem trilhas do zero ao avançado. Se você nunca abriu um ChatGPT, começa pela Trilha 1. Se já usa, pula direto pras aplicações avançadas." },
  { q: "Quanto tempo por semana eu preciso dedicar?", a: "O mínimo útil é 2h por semana: 1h na aula de segunda + 1h de aplicação. Quem dedica 3-4h por semana, avança rápido." },
  { q: "As aulas são ao vivo ou gravadas?", a: "As duas. Toda segunda-feira tem aula ao vivo (19:30). Se você não puder ao vivo, fica gravada na plataforma até o fim da sua assinatura." },
  { q: "Tem fidelidade ou contrato de carência?", a: "Não. É assinatura mensal. Cancele quando quiser, direto no painel." },
  { q: "Posso trocar do mensal pro anual depois?", a: "Pode. A qualquer momento." },
  { q: "Serve pra quem é empreendedor(a)? E pra quem é CLT?", a: "Serve pros dois. Os casos, exemplos e prompts cobrem contextos de ambos. A comunidade tem os dois perfis, o que enriquece a troca." },
  { q: "Vocês emitem nota fiscal?", a: "Sim, para pessoa física ou jurídica." },
  { q: "Como funcionam os Q&As com a Mari?", a: "Quinzenais, terças às 19:30, duração de 90 min. Você manda sua dúvida antes, a Mari prioriza e responde ao vivo. Fica gravado." },
  { q: "E se eu travar na aplicação?", a: "A comunidade e a MarIAna (nossa assistente de IA) estão disponíveis 24/7. E toda semana tem aula ao vivo e Q&A quinzenal pra destravar." },
  { q: "Posso cancelar a qualquer momento?", a: "Sim. Sem multa, sem burocracia. E ainda tem garantia de 7 dias: se desistir nos primeiros 7 dias, devolvemos 100%." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-pad bg-background">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-[var(--offwhite)] md:text-5xl">
            Perguntas que <span className="text-[var(--brand-bright)]">a gente mais recebe</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.02}>
                <div className={`card-surface overflow-hidden transition-colors ${isOpen ? "border-[var(--brand)]/60" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-semibold text-[var(--offwhite)]">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--brand)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <p className="border-t border-[var(--border)] px-5 py-4 text-[var(--sage)] leading-relaxed">
                      {f.a}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
