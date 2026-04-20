import { Reveal } from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";

const tracks = [
  "Fundamentos de IA aplicada",
  "Domínio do Claude e ChatGPT",
  "Automação sem código (Zapier, Make)",
  "Pesquisa profunda (Perplexity, NotebookLM)",
  "Produtividade pessoal com IA",
  "IA para vendas e marketing",
  "IA para liderança e gestão",
  "Agentes de IA e workflows avançados",
  "Voz e vídeo com IA",
  "IA para finanças e operação",
  "IA para RH e pessoas",
  "IA para produto e UX",
  "IA para conteúdo e redes",
  "IA para atendimento",
  "Dados e análise com IA",
  "Apps sem código com IA",
  "Treinando seu time em IA",
  "IA como alavanca de carreira",
];

export function Curriculum() {
  return (
    <section id="curriculo" className="section-pad">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">O que você aprende</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              18 trilhas. Uma jornada{" "}
              <span className="text-[var(--accent)]">que cresce com você.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Você escolhe por onde começar. A plataforma te guia a cada semana.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t, i) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-[var(--surface)] p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                <span className="text-sm text-white/85">
                  <span className="font-mono text-xs text-white/40 mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
