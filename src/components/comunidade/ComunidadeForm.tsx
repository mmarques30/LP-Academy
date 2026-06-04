import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Loader2, Lock, Sparkles } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/analytics";

/**
 * Form da LP /comunidade — versão compacta no hero (3 campos visíveis:
 * Nome, Email, WhatsApp). Posta no MESMO backend Supabase do form
 * da LP / (Edge Function "form-submit"), mas com 2 campos que ela
 * exige (objetivo_com_a_comunidade + motivo_para_aprender_ia)
 * preenchidos com defaults seguros — porque na LP /comunidade a
 * intenção é baixa fricção.
 *
 * Defaults usados:
 *   objetivo_com_a_comunidade = "Outro"
 *   motivo_para_aprender_ia   = "Curiosidade/interesse pessoal"
 *
 * Quando a Mari quiser segmentar leads de /comunidade vs leads de /
 * com mais granularidade, dá pra (1) criar um form_slug separado na
 * Lovable + Supabase, OU (2) adicionar selects visíveis no form
 * (perdendo fricção).
 */

const SUPABASE_URL = "https://ciwdlceyjsnlnunktqzx.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpd2RsY2V5anNubG51bmt0cXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMTU3OTksImV4cCI6MjA4OTc5MTc5OX0.tl-7gEObYBB7wDUS5_pKh9UyRlJQNdnWPiRpMFYrbUM";
const FORM_SLUG = "academy";
const FORM_ENDPOINT = `${SUPABASE_URL}/functions/v1/form-submit`;

// Defaults pros campos required que NÃO aparecem visualmente no form
// compacto da /comunidade. O backend Supabase exige esses campos
// preenchidos — usamos valores neutros que já existem como opção válida
// no enum da tabela form_fields.
const HIDDEN_DEFAULTS = {
  objetivo_com_a_comunidade: "Outro",
  motivo_para_aprender_ia: "Curiosidade/interesse pessoal",
} as const;

type SubmitState = "idle" | "loading" | "error";

function getUtms() {
  if (typeof window === "undefined") {
    return { utm_source: "", utm_medium: "", utm_campaign: "", utm_term: "" };
  }
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") || "",
    utm_medium: p.get("utm_medium") || "",
    utm_campaign: p.get("utm_campaign") || "",
    utm_term: p.get("utm_term") || "",
  };
}

const inputClass =
  "mt-2 block w-full rounded-xl border border-[var(--offwhite)]/12 bg-[var(--offwhite)]/[0.04] px-4 py-3.5 text-[15px] text-[var(--offwhite)] placeholder:text-[var(--offwhite)]/35 transition-all focus:border-[var(--brand)] focus:bg-[var(--offwhite)]/[0.07] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 disabled:opacity-60";

const labelClass =
  "block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--offwhite)]/65";

export function ComunidadeForm() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // Honeypot anti-bot: campo invisível pra humanos, bots vão preencher
  // e a gente descarta o submit.
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [hasFocused, setHasFocused] = useState(false);

  function handleFirstFocus() {
    if (hasFocused) return;
    setHasFocused(true);
    trackEvent(EVENTS.COMUNIDADE_FORM_START);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;

    // Bot detectado: silenciosamente "envia com sucesso" sem postar
    if (honeypot.trim().length > 0) {
      navigate({ to: "/obrigado" });
      return;
    }

    setState("loading");
    setErrorMsg(null);
    trackEvent(EVENTS.COMUNIDADE_FORM_SUBMIT_ATTEMPT);

    try {
      const utm = getUtms();
      const payload = {
        form_slug: FORM_SLUG,
        fields: {
          firstname: firstname.trim(),
          email: email.trim(),
          phone: phone.trim(),
          ...HIDDEN_DEFAULTS,
          ...utm,
        },
        utm: {
          source: utm.utm_source,
          medium: utm.utm_medium,
          campaign: utm.utm_campaign,
          term: utm.utm_term,
        },
        meta: {
          referrer: document.referrer,
          page_url: window.location.href,
        },
      };

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(body || `HTTP ${res.status}`);
      }

      trackEvent(EVENTS.COMUNIDADE_FORM_SUBMIT_SUCCESS);
      navigate({ to: "/obrigado" });
    } catch (err) {
      console.error("[ComunidadeForm]", err);
      trackEvent(EVENTS.COMUNIDADE_FORM_SUBMIT_ERROR);
      setErrorMsg(
        "Não conseguimos enviar agora. Tenta de novo em alguns segundos ou manda um oi pra equipe@iaplicada.com.",
      );
      setState("error");
    }
  }

  return (
    <div
      id="cadastro"
      className="relative overflow-hidden rounded-2xl border border-[var(--offwhite)]/12 bg-[#1D2315] p-7 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] md:p-8"
    >
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
        <Sparkles className="h-3.5 w-3.5" />
        Cadastro gratuito
      </div>

      <h3 className="mt-4 font-display text-2xl text-[var(--offwhite)] md:text-[26px]">
        Entre agora pra próxima aula
      </h3>
      <p className="mt-2 text-[14px] leading-[1.55] text-[#D4DEB3]">
        Em menos de 1 minuto. Sem cartão. Sem letrinha pequena.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {/* Honeypot — invisível pra humanos via off-screen + autocomplete off + tabindex -1 */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", top: 0, height: 0, width: 0, overflow: "hidden" }}
        >
          <label>
            Não preencha esse campo
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="comunidade-firstname" className={labelClass}>
            Nome
          </label>
          <input
            id="comunidade-firstname"
            name="firstname"
            type="text"
            required
            autoComplete="name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            onFocus={handleFirstFocus}
            disabled={state === "loading"}
            placeholder="Como podemos te chamar"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="comunidade-email" className={labelClass}>
            Email
          </label>
          <input
            id="comunidade-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFirstFocus}
            disabled={state === "loading"}
            placeholder="voce@email.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="comunidade-phone" className={labelClass}>
            WhatsApp (com DDD)
          </label>
          <input
            id="comunidade-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={handleFirstFocus}
            disabled={state === "loading"}
            placeholder="(11) 99999-9999"
            className={inputClass}
          />
        </div>

        {state === "error" && errorMsg && (
          <p className="rounded-lg bg-red-500/10 px-4 py-3 text-[13px] leading-[1.5] text-red-300">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 py-4 text-[15px] font-semibold text-[var(--ink)] shadow-[0_20px_50px_-15px_rgba(175,192,64,0.5)] transition-all hover:bg-[var(--brand-bright)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Cadastrando...
            </>
          ) : (
            <>
              Quero entrar gratuitamente
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="text-center text-[12px] leading-[1.55] text-[var(--offwhite)]/55">
          Ao se cadastrar, você entra na nossa comunidade no WhatsApp
          e ganha acesso à plataforma gratuita. Pode sair quando quiser.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 text-[11px] text-[var(--offwhite)]/45">
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3 w-3" /> Seus dados protegidos
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" /> Zero spam
          </span>
        </div>
      </form>
    </div>
  );
}
