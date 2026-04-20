import { Compass, AlertTriangle, FileX2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    icon: Compass,
    title: "Estou perdido(a) em tutoriais.",
    body: "Você assiste vídeo, salva prompt, testa ferramenta. Mas no trabalho de verdade, na segunda-feira, nada muda.",
  },
  {
    icon: AlertTriangle,
    title: "Tenho medo de ficar pra trás.",
    body: "A galera da sua área já fala de automação, agente, workflow. Você entende o básico, mas não consegue aplicar.",
  },
  {
    icon: FileX2,
    title: "Cursos genéricos não resolvem.",
    body: "Você não precisa de \"Introdução à IA\". Precisa de um caminho pra aplicar no seu cargo, no seu setor, na sua rotina.",
  },
];

export function Problem() {
  return (
    <section className="section-pad bg-background">
      <div className="container-narrow">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight text-[var(--offwhite)] md:text-5xl">
            Você já sabe que precisa aprender IA.
            <br />
            O problema é: <span className="text-[var(--brand-bright)]">por onde começar?</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <article className="card-surface h-full p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)]/15">
                  <it.icon className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--offwhite)]">{it.title}</h3>
                <p className="mt-3 text-[var(--sage)] leading-relaxed">{it.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
