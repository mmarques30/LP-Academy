import { motion } from "framer-motion";

const signs = [
  "Você abre o ChatGPT e trava em \"me resume isso\"",
  "Quer automatizar uma planilha, mas não sabe por onde começar",
  "Assiste vídeo de IA e termina com mais dúvida do que chegou",
  "Tem 7 ferramentas abertas e nenhuma entrega resultado",
  "Fecha relatório na mão sabendo que poderia ser em minutos",
  "Evita falar de IA com liderança porque sente que não domina",
];

export function Problem() {
  return (
    <section className="section-pad bg-section-soft">
      <div className="container-tight px-6">
        <div className="text-center">
          <span className="eyebrow">O diagnóstico</span>
          <h2 className="mt-5 h-section">
            O problema não é IA.
            <br />
            É <span className="text-highlight">o que ninguém te mostra</span> fazer com ela.
          </h2>
          <p className="mt-6 lede">
            Pesquisamos os Aplicados que trabalham em grandes empresas do Brasil. As duas dores que aparecem
            em 8 de cada 10 respostas:
          </p>
          <p className="mt-4 font-display text-xl font-extrabold text-[var(--cocoa)] md:text-2xl">
            "Não sei por onde começar."
            <span className="mx-3 text-[var(--brand-dark)]">·</span>
            "Não consigo aplicar no meu trabalho."
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {signs.map((sign, i) => (
            <motion.div
              key={sign}
              initial={{ opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--offwhite)] p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--alert)]/10 text-[var(--alert)] font-bold">
                ✕
              </span>
              <p className="text-sm text-[var(--cocoa-soft)]">{sign}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-base text-[var(--cocoa-soft)]">
          Se dois desses sinais te descrevem, o problema não é você.
          <br className="hidden md:block" />
          Ninguém te deu <strong className="text-[var(--cocoa)]">um sistema</strong> pra transformar IA em produtividade
          de verdade.
        </p>
      </div>
    </section>
  );
}
