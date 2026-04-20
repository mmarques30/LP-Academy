import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "Eu preciso saber alguma coisa de IA pra entrar?",
    a: "Não. Tem trilha do zero e trilha avançada. Se você nunca abriu um ChatGPT, começa pela Trilha 1. Se já usa, pula direto pras aplicações.",
  },
  {
    q: "Quanto tempo por semana eu preciso?",
    a: "O mínimo útil é 2h por semana: 1h na aula de segunda + 1h de aplicação. Quem dedica 3-4h avança mais rápido.",
  },
  {
    q: "As aulas são ao vivo ou gravadas?",
    a: "As duas. Segunda-feira 19:30 ao vivo. Fica gravado pra você assistir depois.",
  },
  {
    q: "Tem fidelidade?",
    a: "Não. Assinatura mensal. Cancele quando quiser.",
  },
  {
    q: "Serve pra CLT e empreendedor?",
    a: "Pros dois. Os casos, prompts e comunidade cobrem ambos os contextos.",
  },
  {
    q: "Emitem nota fiscal?",
    a: "Sim, pessoa física ou jurídica.",
  },
  {
    q: "E se eu travar na aplicação?",
    a: "A MarIAna (nossa assistente IA) responde 24/7, tem aula ao vivo toda segunda e Q&A quinzenal com a Mari pra destravar.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-pad">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Dúvidas</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              O que a gente mais ouve.
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.02}>
                <div
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen
                      ? "border-[var(--accent)]/35 bg-[var(--accent-soft)]/20"
                      : "border-white/8 bg-[var(--surface)]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-medium text-white">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-[var(--accent)]" : "text-white/50"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="border-t border-white/8 px-5 py-4 text-white/70 leading-relaxed">
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
