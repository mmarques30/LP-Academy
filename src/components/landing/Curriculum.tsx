import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

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
  { n: "14", title: "IA para atendimento e sucesso do cliente", desc: "Respostas, base de conhecimento e QBRs.", lessons: ["FAQ automatizado", "Atendimento humanizado com IA", "QBRs com insights", "Deflexão de tickets"] },
  { n: "15", title: "Dados e análise com IA", desc: "Do Excel ao Claude Code, sem virar engenheiro.", lessons: ["Excel turbinado", "SQL com IA", "Gráficos em 1 prompt", "Claude Code pra leigos"] },
  { n: "16", title: "Criação de apps sem código com IA", desc: "Do Lovable ao Replit: tire ideia do papel em 1 tarde.", lessons: ["Escolhendo a ferramenta", "Do brief ao MVP", "Deploy e validação", "Iterando com feedback"] },
  { n: "17", title: "IA para educação e treinamento de time", desc: "Passando o bastão pra sua equipe, sem depender de você.", lessons: ["Construindo currículo interno", "Tutorial com IA", "Medindo adoção", "Governança"] },
  { n: "18", title: "Estratégia: IA como diferencial de carreira", desc: "Como usar IA pra se posicionar, cobrar mais e crescer.", lessons: ["Narrativa de autoridade", "Portfólio de casos", "Negociação e reposicionamento", "Roadmap de 12 meses"] },
];

export function Curriculum() {
  const [open, setOpen] = useState<string | null>("01");
  return (
    <section id="curriculo" className="section-pad bg-[var(--surface-alt)]">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-[var(--offwhite)] md:text-5xl">
            18 trilhas, uma jornada{" "}
            <span className="text-[var(--brand-bright)]">que cresce com você</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--sage)]">
            Veja algumas das trilhas disponíveis dentro do Academy.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {trilhas.map((t, i) => {
            const isOpen = open === t.n;
            return (
              <Reveal key={t.n} delay={i * 0.03}>
                <div className={`card-surface overflow-hidden transition-colors ${isOpen ? "border-[var(--brand)]/60" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : t.n)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <span className="font-display text-lg font-extrabold text-[var(--brand-bright)]">{t.n}</span>
                    <span className="flex-1">
                      <span className="block font-semibold text-[var(--offwhite)]">{t.title}</span>
                      <span className="mt-1 block text-sm text-[var(--sage)]">{t.desc}</span>
                    </span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--brand)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <ul className="border-t border-[var(--border)] px-5 py-4">
                      {t.lessons.map((l) => (
                        <li key={l} className="flex items-center gap-3 py-1.5 text-sm text-[var(--sage)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
