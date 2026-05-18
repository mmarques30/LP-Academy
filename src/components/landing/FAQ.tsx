import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Eu preciso saber alguma coisa de IA pra entrar?", a: "Não. O Academy tem trilhas do zero ao avançado. Se você nunca abriu ChatGPT, começa pela Trilha 1. Se já usa, pula direto pras aplicações avançadas." },
  { q: "Quanto tempo por semana eu preciso dedicar?", a: "O mínimo útil é 2h/semana: 1h na aula de segunda + 1h aplicando. Quem dedica 3–4h/semana avança bem rápido. Tudo fica gravado pra quem faz no próprio ritmo." },
  { q: "As aulas são ao vivo ou gravadas?", a: "As duas. Toda segunda tem aula ao vivo às 19h30. Se não puder, fica gravada — disponível enquanto sua assinatura estiver ativa." },
  { q: "Tem fidelidade ou carência?", a: "Depende do plano. O Mensal (R$ 147/mês) é cobrança recorrente sem fidelidade — cancele quando quiser, sem multa. O Anual (R$ 1.297) tem compromisso de 12 meses, pago à vista ou via recorrência mensal de 12× R$ 108. Os 7 dias de garantia valem pros dois." },
  { q: "Serve pra empreendedor e pra CLT?", a: "Serve pros dois. Os casos, prompts e aplicações cobrem ambos os contextos. A comunidade tem os dois perfis, o que enriquece a troca." },
  { q: "Como funciona o Q&A com a Mari?", a: "Quartas, 19h30, 1 hora ao vivo. Você manda sua dúvida antes, a Mari prioriza e responde no encontro. Fica gravado pra rever depois." },
  { q: "Como funciona a garantia de 7 dias?", a: "Você entra, testa por dentro, e se nos primeiros 7 dias não fizer sentido, devolvemos 100% do valor. É só mandar um e-mail." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-[var(--offwhite)]">
      <div className="container-wide px-6">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <span className="eyebrow">08 — Dúvidas</span>
            <h2 className="mt-7 h-section text-[var(--cocoa)]">
              Perguntas
              <br />
              <span className="serif-italic text-[var(--brand-dark)]">que a gente mais recebe.</span>
            </h2>
            <p className="mt-7 text-[15px] leading-relaxed text-[var(--cocoa-soft)]">
              Ficou com alguma dúvida que não tá aqui? Chama o suporte pelo WhatsApp —
              responde gente humana, não bot.
            </p>
            <a
              href="https://wa.me/message/OSRP3CMHUX2CJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b border-[var(--cocoa)] pb-1 text-[15px] font-medium text-[var(--cocoa)] transition-colors hover:border-[var(--brand-dark)] hover:text-[var(--brand-dark)]"
            >
              Falar com o time →
            </a>
          </div>

          <div className="divide-y divide-[var(--cocoa)]/10 border-y border-[var(--cocoa)]/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[19px] leading-tight text-[var(--cocoa)] md:text-[21px]">
                      {f.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-[var(--cocoa)] transition-transform duration-500 ${
                        isOpen ? "rotate-45 text-[var(--brand-dark)]" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-8 text-[15px] leading-[1.65] text-[var(--cocoa-soft)]">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
