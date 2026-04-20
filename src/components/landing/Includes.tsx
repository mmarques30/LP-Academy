import { GraduationCap, CalendarClock, MessagesSquare, Wrench, FileText, Users2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: GraduationCap, title: "18 trilhas estruturadas", desc: "do zero ao avançado, por objetivo. Você escolhe por onde começar e o sistema te guia." },
  { icon: CalendarClock, title: "Aulas ao vivo toda segunda", desc: "19:30, com convidados referência de mercado aplicando IA em casos reais." },
  { icon: MessagesSquare, title: "Q&As quinzenais de mentoria", desc: "terças às 19:30. Espaço de implementação, dúvida e destrave com a Mari." },
  { icon: Wrench, title: "+50 ferramentas catalogadas", desc: "avaliadas, testadas e organizadas por caso de uso. Pare de perder tempo sozinho(a)." },
  { icon: FileText, title: "+100 prompts testados", desc: "biblioteca viva de prompts que funcionam, por função e setor. Copia, adapta, aplica." },
  { icon: Users2, title: "Comunidade Aplicados", desc: "grupo exclusivo de membros para trocar cases, tirar dúvidas e implementar em conjunto." },
];

export function Includes() {
  return (
    <section className="section-pad bg-background">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-[var(--offwhite)] md:text-5xl">
            Tudo que está incluso <span className="text-[var(--brand-bright)]">no Academy</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <article className="card-surface h-full p-7 transition-colors hover:border-[var(--brand)]/60">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)]/15">
                  <it.icon className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--offwhite)]">{it.title}</h3>
                <p className="mt-3 text-[var(--sage)] leading-relaxed">{it.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
