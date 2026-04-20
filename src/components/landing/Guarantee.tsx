import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="section-pad bg-[var(--offwhite)]">
      <div className="container-narrow px-6">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto grid max-w-4xl items-center gap-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--cream)] p-8 md:grid-cols-[auto_1fr] md:p-12"
        >
          <div className="relative mx-auto md:mx-0">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-[var(--brand)]/25 blur-2xl"
            />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[var(--brand)] ring-8 ring-[var(--brand)]/15">
              <ShieldCheck className="h-16 w-16 text-[var(--cocoa)]" strokeWidth={2} />
            </div>
          </div>

          <div>
            <span className="eyebrow">Garantia incondicional</span>
            <h3 className="mt-4 font-display text-3xl font-extrabold text-[var(--cocoa)] md:text-4xl">
              7 dias pra testar por dentro.
              <br />O risco é todo nosso.
            </h3>
            <p className="mt-4 text-[var(--cocoa-soft)] leading-relaxed md:text-lg">
              Entre, explore as 18 trilhas, participe da aula ao vivo de segunda e do Q&amp;A de quarta,
              converse com a MarIAna. Se nos primeiros <strong className="text-[var(--cocoa)]">7 dias</strong>
              {" "}você sentir que não é pra você, devolvemos <strong className="text-[var(--cocoa)]">100% do investimento</strong>.
              Sem fila de suporte. Sem pergunta difícil. Sem formulário infinito.
            </p>
            <p className="mt-3 text-sm text-[var(--cocoa-soft)]">
              É só mandar um e-mail. Topo ficar com o prejuízo de te mostrar o Academy por uma semana
              — eu confio no sistema.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
