import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "É realmente gratuito?",
    a: "Sim. A comunidade, a plataforma com mini-trilhas, a aula mensal e a newsletter. Tudo gratuito, sempre.",
  },
  {
    q: "Vou ter que comprar alguma coisa?",
    a: "Não. A gente tem o Academy (R$ 997, pagamento único ou em 12× R$ 83), mas você só assina se quiser ir mais fundo. A comunidade gratuita é completa por si só.",
  },
  {
    q: "Quantos emails por semana?",
    a: "Em média 1 a 2. Você pode descadastrar quando quiser direto do rodapé do email.",
  },
  {
    q: "Como é a comunidade no WhatsApp?",
    a: "Grupo grande, organizado. Mensagens periódicas com dicas, prompts e ferramentas. Não é caos de WhatsApp pessoal. Você pode silenciar e ler quando quiser.",
  },
  {
    q: "A aula mensal é sempre no mesmo dia?",
    a: "Sempre na primeira quarta do mês, às 19:30. Avisamos com 3-5 dias de antecedência na comunidade.",
  },
  {
    q: "Posso sair quando quiser?",
    a: "Sim. Sai do grupo do WhatsApp, descadastra o email. Sem barreira, sem retenção forçada.",
  },
];

export function FAQComunidade() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-[var(--offwhite)]">
      <div className="container-wide px-6">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <h2 className="h-section text-[var(--cocoa)]">
              Perguntas
              <br />
              <span className="serif-italic text-[var(--brand-dark)]">
                rápidas.
              </span>
            </h2>
            <p className="mt-7 text-[15px] leading-relaxed text-[var(--cocoa-soft)]">
              Ficou com alguma dúvida que não tá aqui? Chama o suporte pelo
              WhatsApp — responde gente humana, não bot.
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
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
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
