import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2, Lock } from "lucide-react";

// Edge Function Supabase que recebe a submissão (chave anon do projeto IAplicada
// é public por design — apenas valida payload + insere na tabela de leads).
const FORM_ENDPOINT = "https://ciwdlceyjsnlnunktqzx.supabase.co/functions/v1/form-submit";
const FORM_SLUG = "academy";

// O que a pessoa recebe se inscrevendo grátis (assistir a aula ao vivo,
// participar da comunidade aberta, receber a newsletter).
const freeBenefits = [
  "Aula ao vivo de toda segunda · 19h30 (assistir)",
  "Acesso à comunidade aberta IAplicada",
  "Newsletter quinzenal com novidades",
];

// O que só quem compra o Academy tem — o "resultado de verdade"
// fica aqui, não no plano gratuito.
const academyOnly = [
  "Gravação de todas as aulas pra rever quando quiser",
  "Materiais, prompts e workflows do método APLICA",
  "Q&A toda quarta com a Mari + 18 trilhas completas",
  "Comunidade fechada com +700 Aplicados ativos",
];

type SubmitState = "idle" | "loading" | "success" | "error";

function collectUtms(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const out: Record<string, string> = {};
  for (const k of keys) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  return out;
}

export function Community() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;

    setState("loading");
    setErrorMsg(null);

    try {
      const payload = {
        slug: FORM_SLUG,
        name: name.trim(),
        email: email.trim(),
        ...collectUtms(),
      };

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(body || `Erro ${res.status}`);
      }

      setState("success");
    } catch (err) {
      console.error("[Community form]", err);
      setErrorMsg(
        "Não conseguimos enviar agora. Tenta de novo em alguns segundos ou manda um oi pra contato@iaplicada.com.",
      );
      setState("error");
    }
  }

  return (
    <section id="comunidade" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">05 — Comunidade gratuita</span>

            <h2 className="mt-7 h-section text-[var(--cocoa)]">
              Antes de comprar,{" "}
              <span className="serif-italic text-[var(--brand-dark)]">você participa.</span>
            </h2>

            <p className="mt-7 max-w-[46ch] text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]">
              Assiste a aula ao vivo de toda segunda 19h30, entra na comunidade
              aberta e recebe a newsletter — sem cartão. É o gostinho do método
              APLICA na prática. As gravações, materiais e mentoria semanal —
              o que faz IA virar <em className="serif-italic text-[var(--cocoa)]">resultado de verdade</em> —
              ficam dentro do Academy.
            </p>

            <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-dark)]">
              O que você acessa de graça
            </p>
            <ul className="mt-4 space-y-3.5">
              {freeBenefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[15px] leading-[1.55] text-[var(--cocoa)]"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Contraste: o que SÓ está no Academy pago. Tom mais quieto
                (cocoa-soft, sem chips coloridos) pra não competir
                visualmente com o form, mas explícito o suficiente pra
                deixar claro onde está o resultado de verdade. */}
            <div className="mt-8 rounded-2xl border border-[var(--cocoa)]/12 bg-[var(--offwhite)]/70 p-6">
              <div className="flex items-center gap-2.5">
                <Lock className="h-3.5 w-3.5 text-[var(--cocoa-soft)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--cocoa-soft)]">
                  Resultado de verdade fica no Academy
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {academyOnly.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-[var(--cocoa-soft)]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--cocoa-soft)]/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#investimento"
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--brand-dark)] transition-colors hover:text-[#5C6F1D]"
              >
                Ver o Academy completo
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Form nativo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[28px] bg-[var(--offwhite)] p-8 ring-1 ring-[var(--cocoa)]/10 shadow-[0_30px_70px_-30px_rgba(13,13,13,0.15)] md:p-10">
              {state === "success" ? (
                <div className="flex flex-col items-center text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)]">
                    <Check className="h-7 w-7" strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-[var(--cocoa)]">
                    Tá dentro da comunidade.
                  </h3>
                  <p className="mt-4 max-w-sm text-[15px] leading-[1.6] text-[var(--cocoa-soft)]">
                    Te mandamos o link da aula de segunda 19h30 e da comunidade
                    aberta pro email <strong className="text-[var(--cocoa)]">{email}</strong>.
                    Confere a caixa de entrada (e o spam, por garantia).
                  </p>
                  <p className="mt-6 max-w-sm text-[13px] leading-[1.55] text-[var(--cocoa-soft)]/85">
                    Quando quiser ir mais fundo — com gravações, materiais e
                    mentoria semanal —
                    {" "}
                    <a
                      href="#investimento"
                      className="font-medium text-[var(--brand-dark)] underline-offset-2 hover:underline"
                    >
                      o Academy te espera
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <span className="mono-label text-[var(--brand-dark)]">Inscrição gratuita</span>
                    <h3 className="mt-3 font-display text-2xl text-[var(--cocoa)] md:text-3xl">
                      Recebe o link da aula de segunda
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.55] text-[var(--cocoa-soft)]">
                      Preenche e a gente te manda o convite + o acesso à comunidade.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                    <div>
                      <label
                        htmlFor="community-name"
                        className="block text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--cocoa-soft)]"
                      >
                        Seu nome
                      </label>
                      <input
                        id="community-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={state === "loading"}
                        placeholder="Como podemos te chamar"
                        className="mt-2 block w-full rounded-xl border border-[var(--cocoa)]/15 bg-[var(--cream)] px-4 py-3.5 text-[15px] text-[var(--cocoa)] placeholder:text-[var(--cocoa-soft)]/60 transition-all focus:border-[var(--brand-dark)] focus:bg-[var(--offwhite)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="community-email"
                        className="block text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--cocoa-soft)]"
                      >
                        Seu melhor email
                      </label>
                      <input
                        id="community-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={state === "loading"}
                        placeholder="voce@email.com"
                        className="mt-2 block w-full rounded-xl border border-[var(--cocoa)]/15 bg-[var(--cream)] px-4 py-3.5 text-[15px] text-[var(--cocoa)] placeholder:text-[var(--cocoa-soft)]/60 transition-all focus:border-[var(--brand-dark)] focus:bg-[var(--offwhite)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 disabled:opacity-60"
                      />
                    </div>

                    {state === "error" && errorMsg && (
                      <p className="rounded-lg bg-red-50 px-4 py-3 text-[13px] leading-[1.5] text-red-700">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-[15px] font-medium text-white shadow-[0_20px_50px_-20px_rgba(115,137,37,0.65)] transition-all hover:bg-[#5C6F1D] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {state === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Quero entrar grátis
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[12px] text-[var(--cocoa-soft)]">
                      Sem spam. Cancele quando quiser.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
