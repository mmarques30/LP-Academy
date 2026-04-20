import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Ferreira",
    role: "Analista de Marketing · Ambev",
    text: "Em 2 meses de Academy eu automatizei 70% do meu trabalho de reporting. Meu gestor me chamou pra liderar a iniciativa de IA do time. O Academy se pagou no primeiro mês só com o tempo que ganhei de volta.",
    highlight: "automatizou 70% do reporting em 2 meses",
  },
  {
    name: "Rodrigo Santos",
    role: "Head de Vendas · SaaS",
    text: "Eu achei que já sabia IA porque usava ChatGPT todo dia. O Academy me mostrou o tanto que eu estava deixando na mesa. Hoje tenho 3 workflows rodando sozinhos e voltei a ter tempo pra estratégia.",
    highlight: "3 workflows rodando sozinhos",
  },
  {
    name: "Júlia Costa",
    role: "Empreendedora · Agência Digital",
    text: "Eu fazia tudo à mão na minha agência. Comecei no Academy em janeiro e em 4 meses dobrei minha capacidade sem contratar ninguém. A Mari ensina com clareza que não existe em outros lugares.",
    highlight: "dobrou a capacidade em 4 meses",
  },
  {
    name: "Pedro Almeida",
    role: "Coordenador Financeiro · Indústria",
    text: "Fiz vários cursos de IA antes do Academy. Todos eram teóricos. O diferencial aqui é que toda semana tem aplicação real. Saí de iniciante pra virar referência no meu setor da empresa em 5 meses.",
    highlight: "virou referência de IA no setor",
  },
  {
    name: "Camila Rocha",
    role: "Consultora · RH",
    text: "A Mari entrega o que promete. Os Q&As semanais são o melhor da assinatura. É onde eu realmente destravo. Cada encontro volto com 2-3 coisas pra implementar na semana.",
    highlight: "destrava nos Q&As semanais",
  },
  {
    name: "Lucas Mendes",
    role: "Desenvolvedor · Fintech",
    text: "Assinei \"pra testar\" em março. Cinco meses depois, não saio mais. A comunidade é viva, as aulas são densas e a Mari responde mesmo. Valor incomparável pelo preço.",
    highlight: "testou em março, não saiu mais",
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
    <section id="depoimentos" className="section-pad bg-[var(--cream)]">
      <div className="container-narrow px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="mt-5 h-section">
            O que os <span className="text-gradient-brand">Aplicados</span> estão dizendo
          </h2>
        </div>

        {/* Faixa de métricas */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-[var(--border)] bg-[var(--offwhite)] p-6 text-center sm:grid-cols-3">
          <div>
            <p className="flex items-center justify-center gap-1.5 font-display text-2xl font-black text-[var(--cocoa)]">
              <Star className="h-5 w-5 fill-[var(--brand-dark)] text-[var(--brand-dark)]" />
              4,9
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[var(--cocoa-soft)]">
              de satisfação
            </p>
          </div>
          <div className="sm:border-x sm:border-[var(--border)]">
            <p className="font-display text-2xl font-black text-[var(--cocoa)]">93%</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[var(--cocoa-soft)]">
              seguem ativos após 3 meses
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-black text-[var(--cocoa)]">+2.000</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[var(--cocoa-soft)]">
              Aplicados ativos
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="relative h-full rounded-3xl border border-[var(--border)] bg-[var(--offwhite)] p-6"
            >
              <Quote className="absolute right-5 top-5 h-6 w-6 text-[var(--brand)]/40" />
              <div className="flex items-start gap-1 text-[var(--brand-dark)]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--brand-dark)]" />
                ))}
              </div>
              <p className="mt-4 font-display text-base font-bold text-[var(--cocoa)] leading-snug">
                "{t.highlight}"
              </p>
              <p className="mt-3 text-sm text-[var(--cocoa-soft)] leading-relaxed">{t.text}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)]/20 font-bold text-[var(--brand-dark)]">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--cocoa)]">{t.name}</p>
                  <p className="text-xs text-[var(--cocoa-soft)]">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
