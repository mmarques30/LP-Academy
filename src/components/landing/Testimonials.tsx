import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Beatriz Franca",
    role: "E-commerce · Aluna Academy",
    highlight: "Criei uma calculadora de previsão de receita pro meu e-commerce.",
    text: "Depois do hotseat da Mari minha cabeça ficou a mil. Criei uma calculadora onde brinco com os valores de tráfego, produtos e ticket médio — e ela já me dá uma estimativa super precisa pros próximos meses.",
    avatar: "/avatar-beatriz.jpg",
  },
  {
    name: "Karine Martins",
    role: "Líder · Aluna Academy",
    highlight: "Hoje consigo lidar com o mundo corporativo com mais ferramentas.",
    text: "Não sei como agradecer todo o seu apoio nesta minha jornada de ser líder. Seu suporte foi fundamental pras minhas tomadas de decisão. Espero compartilhar muito do que aprendi com meu time.",
    avatar: "/avatar-karine.jpg",
  },
  {
    name: "Géssina Zaniboni Feltrin",
    role: "Aluna Academy",
    highlight: "Aprender como usar IA na prática pra gerar impacto de verdade.",
    text: "Mais do que entender o que cada ferramenta é, precisamos aprender como usá-la na prática. O curso da Mari me mostrou isso. Não é só sobre ChatGPT — existem muitas plataformas que abrem espaço pra gente pensar de forma mais estratégica.",
    avatar: "/avatar-gessina.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="h-section text-[var(--cocoa)]">
              Histórias de quem parou
              <br />
              <span className="serif-italic text-[var(--brand-dark)]">de adiar a IA.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-[15px] text-[var(--cocoa-soft)]">
            <div>
              <p className="font-display text-3xl text-[var(--cocoa)]">4,9<span className="text-lg text-[var(--cocoa-soft)]">/5</span></p>
              <p className="mt-0.5 text-[12px] uppercase tracking-[0.18em]">satisfação</p>
            </div>
            <div className="h-10 w-px bg-[var(--cocoa)]/15" />
            <div>
              <p className="font-display text-3xl text-[var(--cocoa)]">93%</p>
              <p className="mt-0.5 text-[12px] uppercase tracking-[0.18em]">ativos após 3m</p>
            </div>
            <div className="h-10 w-px bg-[var(--cocoa)]/15" />
            <div>
              <p className="font-display text-3xl text-[var(--cocoa)]">+700</p>
              <p className="mt-0.5 text-[12px] uppercase tracking-[0.18em]">Aplicados</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-[24px] border border-[var(--cocoa)]/10 bg-[var(--offwhite)] p-8 transition-all duration-500 hover:border-[var(--cocoa)]/25 hover:shadow-[0_30px_70px_-30px_rgba(13,13,13,0.15)] ${
                i === 1 ? "lg:translate-y-10" : ""
              }`}
            >
              <div className="flex items-center gap-1 text-[var(--brand-dark)]">
                {[0, 1, 2, 3, 4].map((k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>

              <p className="mt-7 font-display text-[22px] leading-[1.2] text-[var(--cocoa)]">
                "{t.highlight}"
              </p>

              <p className="mt-5 text-[15px] leading-[1.6] text-[var(--cocoa-soft)]">
                {t.text}
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-[var(--cocoa)]/10 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border border-[var(--cocoa)]/10 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-[17px] text-[var(--cocoa)]">{t.name}</p>
                  <p className="text-[13px] text-[var(--cocoa-soft)]">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
