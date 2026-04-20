import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const trilhas = [
  { n: "01", title: "Fundamentos de IA Aplicada", desc: "O que é IA prática, diferença entre LLMs, quando faz sentido usar o quê.", lessons: ["Panorama de IA no trabalho", "LLMs vs ferramentas vs agentes", "Quando NÃO usar IA", "Ética e privacidade"] },
  { n: "02", title: "Domínio do Claude e ChatGPT", desc: "Prompts que funcionam, raciocínio, contexto, agentes.", lessons: ["Estrutura de prompt eficaz", "Contexto e memória", "Comparativo Claude x ChatGPT", "Agentes e GPTs"] },
  { n: "03", title: "Automação com Zapier e Make", desc: "Transformando repetição em fluxo, sem código.", lessons: ["Mapeando processos", "Primeiro Zap", "Make avançado", "IA dentro do fluxo"] },
  { n: "04", title: "Pesquisa com Perplexity e NotebookLM", desc: "Virando curador de informação em vez de consumidor.", lessons: ["Pesquisa profunda", "NotebookLM na prática", "Sintetizando fontes", "Workflows de research"] },
  { n: "05", title: "Produtividade pessoal com IA", desc: "Agenda, email, reuniões, follow-ups.", lessons: ["Email zero com IA", "Resumo de reuniões", "Follow-up automático", "Planejamento semanal"] },
  { n: "06", title: "IA para vendas e marketing", desc: "Copy, pesquisa de lead, qualificação, outbound.", lessons: ["Copy que converte", "Pesquisa de lead", "Qualificação automatizada", "Outbound em escala"] },
  { n: "07", title: "IA para liderança e gestão", desc: "1:1s, OKRs, feedback, rituais de time.", lessons: ["Preparando 1:1s", "OKRs com IA", "Feedback estruturado", "Rituais de time"] },
  { n: "08", title: "Agentes de IA e workflows avançados", desc: "Nível próximo, quando você já aplicou o básico.", lessons: ["O que são agentes", "Construindo seu agente", "Workflows multi-step", "Integrações"] },
  { n: "09", title: "Voz e vídeo com IA", desc: "ElevenLabs, Heygen, aplicações reais.", lessons: ["Clonagem de voz", "Avatares com Heygen", "Vídeos automáticos", "Casos reais"] },
  { n: "10", title: "IA para finanças e operação", desc: "Análise, relatórios, previsão.", lessons: ["Análise de dados", "Relatórios automáticos", "Previsão e modelos", "Dashboards com IA"] },
  { n: "11", title: "IA para RH e gestão de pessoas", desc: "Recrutamento, onboarding, clima e desenvolvimento.", lessons: ["Triagem de currículos", "Onboarding personalizado", "Pesquisas de clima", "PDI com IA"] },
  { n: "12", title: "IA para produto e UX", desc: "Pesquisa, discovery, prototipagem e testes.", lessons: ["Discovery assistido", "Personas reais em IA", "Protótipos em minutos", "Testes de usabilidade"] },
  { n: "13", title: "IA para conteúdo e redes sociais", desc: "Roteiros, legendas, reels e repurpose em escala.", lessons: ["Roteiros em cadência", "Legendas que convertem", "Repurpose de 1 pra 10", "Planejamento editorial"] },
  { n: "14", title: "IA para atendimento e CS", desc: "Respostas, base de conhecimento e QBRs.", lessons: ["FAQ automatizado", "Atendimento humanizado com IA", "QBRs com insights", "Deflexão de tickets"] },
  { n: "15", title: "Dados e análise com IA", desc: "Do Excel ao Claude Code, sem virar engenheiro.", lessons: ["Excel turbinado", "SQL com IA", "Gráficos em 1 prompt", "Claude Code pra leigos"] },
  { n: "16", title: "Criação de apps sem código", desc: "Do Lovable ao Replit: tire ideia do papel em uma tarde.", lessons: ["Escolhendo a ferramenta", "Do brief ao MVP", "Deploy e validação", "Iterando com feedback"] },
  { n: "17", title: "IA pra treinar seu time", desc: "Passando o bastão pra sua equipe, sem depender de você.", lessons: ["Construindo currículo interno", "Tutorial com IA", "Medindo adoção", "Governança"] },
  { n: "18", title: "Estratégia: IA como diferencial de carreira", desc: "Como usar IA pra se posicionar, cobrar mais e crescer.", lessons: ["Narrativa de autoridade", "Portfólio de casos", "Negociação e reposicionamento", "Roadmap de 12 meses"] },
];

const pillars = [
  {
    name: "Fundamentos",
    desc: "Tudo que você precisa saber pra começar direito. Sem perder tempo com teoria que não usa.",
    trilhas: ["01", "02", "03", "04"],
  },
  {
    name: "Aplicação na rotina",
    desc: "IA dentro do seu cargo, da sua área, da sua rotina de trabalho. Resultado em semanas.",
    trilhas: ["05", "06", "07", "10", "11", "12", "13", "14"],
  },
  {
    name: "Avançado & escala",
    desc: "Quando o básico já flui: agentes, automações, apps e estratégia pra escalar sua carreira.",
    trilhas: ["08", "09", "15", "16", "17", "18"],
  },
];

export function Curriculum() {
  const [open, setOpen] = useState<string | null>("05");

  return (
    <section id="curriculo" className="section-pad bg-[var(--cream)]">
      <div className="container-narrow px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Currículo · 18 trilhas</span>
          <h2 className="mt-5 h-section">
            Uma jornada <span className="text-gradient-brand">que cresce com você</span>
          </h2>
          <p className="mt-5 lede">
            Três pilares. Dezoito trilhas vivas. Você escolhe por onde começar e o sistema te guia —
            com trilhas novas entrando toda quinzena.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl border border-[var(--border)] bg-[var(--offwhite)] p-6"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
                {p.trilhas.length} trilhas
              </p>
              <h3 className="mt-2 font-display text-xl font-extrabold text-[var(--cocoa)]">{p.name}</h3>
              <p className="mt-2 text-sm text-[var(--cocoa-soft)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-2.5">
          {trilhas.map((t, i) => {
            const isOpen = open === t.n;
            return (
              <motion.div
                key={t.n}
                initial={{ opacity: 1, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.3) }}
                className={`overflow-hidden rounded-2xl border bg-[var(--offwhite)] transition-colors ${
                  isOpen ? "border-[var(--brand-dark)]/50 shadow-[0_20px_40px_-30px_rgba(44,20,2,0.25)]" : "border-[var(--border)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : t.n)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg font-black text-[var(--brand-dark)] w-9 shrink-0">
                    {t.n}
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-[var(--cocoa)]">{t.title}</span>
                    <span className="mt-1 block text-sm text-[var(--cocoa-soft)]">{t.desc}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--cocoa-soft)] transition-transform ${
                      isOpen ? "rotate-180 text-[var(--brand-dark)]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <ul className="border-t border-[var(--border)] bg-[var(--cream)]/60 px-5 py-4">
                    {t.lessons.map((l) => (
                      <li
                        key={l}
                        className="flex items-center gap-3 py-1.5 text-sm text-[var(--cocoa-soft)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-dark)]" />
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
