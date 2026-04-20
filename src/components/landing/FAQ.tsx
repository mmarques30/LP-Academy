import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Eu preciso saber alguma coisa de IA pra entrar?", a: "Não. O Academy tem trilhas do zero ao avançado. Se você nunca abriu um ChatGPT, começa pela Trilha 1. Se já usa, pula direto pras aplicações avançadas." },
  { q: "Quanto tempo por semana eu preciso dedicar?", a: "O mínimo útil é 2h/semana: 1h na aula de segunda + 1h aplicando. Quem dedica 3–4h/semana avança bem rápido. E tudo fica gravado pra quem faz no próprio ritmo." },
  { q: "As aulas são ao vivo ou gravadas?", a: "As duas. Toda segunda tem aula ao vivo (19h30). Se não puder ao vivo, fica gravada enquanto a sua assinatura estiver ativa." },
  { q: "Tem fidelidade ou contrato de carência?", a: "Não. É assinatura mensal. Cancele quando quiser direto no painel — sem multa, sem burocracia." },
  { q: "Serve pra quem é empreendedor? E pra quem é CLT?", a: "Serve pros dois. Os casos, exemplos e prompts cobrem ambos os contextos. A comunidade tem os dois perfis, o que enriquece muito a troca." },
  { q: "Como funciona o Q&A semanal com a Mari?", a: "Quartas, 19h30, duração de 90 min. Você manda sua dúvida antes, a Mari prioriza e responde ao vivo. Fica gravado pra você rever depois." },
  { q: "Quem é a MarIAna?", a: "Um agente de IA treinado com toda a expertise da Mari. Disponível 24/7 dentro da plataforma pra te destravar em prompt, ferramenta, workflow — ou só pensar em voz alta junto." },
  { q: "E se eu travar na aplicação?", a: "Você tem três rotas: a MarIAna (24/7), a comunidade (+2.000 Aplicados ativos) e o Q&A ao vivo toda quarta. Muito difícil ficar parado por mais de 48h." },
  { q: "Vocês emitem nota fiscal?", a: "Sim, para pessoa física ou jurídica. É só solicitar no e-mail do suporte após a compra." },
  { q: "Como funciona a garantia de 7 dias?", a: "Você entra, testa por dentro: acessa as trilhas, participa de uma aula ao vivo, conversa com a MarIAna. Se nos primeiros 7 dias não fizer sentido, devolvemos 100% do valor. É só mandar um e-mail." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-pad bg-[var(--cream)]">
      <div className="container-narrow px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 h-section">
            Perguntas que <span className="text-gradient-brand">a gente mais recebe</span>
          </h2>
          <p className="mt-5 lede">
            Ficou com alguma dúvida que não tá aqui? Chama o suporte pelo WhatsApp — responde gente
            humana, não bot.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-2.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-[var(--offwhite)] transition-colors ${
                  isOpen ? "border-[var(--brand-dark)]/45 shadow-[0_20px_40px_-30px_rgba(44,20,2,0.25)]" : "border-[var(--border)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-[var(--cocoa)]">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[var(--brand-dark)]" : "text-[var(--cocoa-soft)]"
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="border-t border-[var(--border)] bg-[var(--cream)]/60 px-5 py-4 text-[var(--cocoa-soft)] leading-relaxed">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
