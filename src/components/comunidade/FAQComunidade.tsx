import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";
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
    <section className="relative overflow-hidden bg-[#141A0B] py-24 text-[var(--offwhite)] md:py-32">
      <div className="container-wide px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            <Sparkles className="h-3 w-3" />
            Perguntas rápidas
          </p>
          <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] tracking-tight text-[var(--offwhite)]">
            Tudo o que <span className="text-[#BDD64A]">a gente mais recebe.</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-[var(--offwhite)]/10 border-y border-[var(--offwhite)]/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[18px] leading-tight text-[var(--offwhite)] md:text-[20px]">
                    {f.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 transition-transform duration-500 ${
                      isOpen ? "rotate-45 text-[var(--brand)]" : "text-[var(--offwhite)]/65"
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
                      <p className="pb-7 pr-8 text-[14.5px] leading-[1.65] text-[var(--offwhite)]/75">
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
    </section>
  );
}
