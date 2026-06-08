import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, ArrowRight, ChevronDown, Loader2, Lock } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/analytics";
import {
  isFormValid,
  validateFields,
  type FieldErrors,
  type FieldName,
} from "@/lib/form-validation";

/**
 * Form da LP /comunidade — agora idêntico ao form da LP / Community.tsx:
 * todos os 5 campos visíveis (Nome, Email, WhatsApp, Objetivo e Motivo).
 *
 * Mari pediu que tivesse "todos os campos como na LP original" — antes
 * tínhamos só 3 visíveis com 2 defaults hidden. Agora os 5 vão pro
 * Supabase com o que a pessoa preencher (sem default forçado).
 */

const SUPABASE_URL = "https://ciwdlceyjsnlnunktqzx.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpd2RsY2V5anNubG51bmt0cXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMTU3OTksImV4cCI6MjA4OTc5MTc5OX0.tl-7gEObYBB7wDUS5_pKh9UyRlJQNdnWPiRpMFYrbUM";
const FORM_SLUG = "academy";
const FORM_ENDPOINT = `${SUPABASE_URL}/functions/v1/form-submit`;

// Mesmas opções do Community.tsx (LP /). Mantém alinhamento com a
// tabela form_fields no Supabase (form_id a1000000-…001).
const OBJETIVO_OPTIONS = [
  "Acessar um mentor para acelerar carreira",
  "Acessar treinamento com conteúdos organizados",
  "Fazer networking com outros profissionais",
  "Acompanhar tendências de IA",
  "Outro",
];

const MOTIVO_OPTIONS = [
  "Transição de carreira",
  "Tornar minha equipe mais produtiva",
  "Promoção/referência profissional",
  "Criar/escalar negócio",
  "Curiosidade/interesse pessoal",
];

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
  "mt-2 block w-full rounded-xl border border-[var(--cocoa)]/15 bg-[var(--cream)] px-4 py-3.5 text-[15px] text-[var(--cocoa)] placeholder:text-[var(--cocoa-soft)]/60 transition-all focus:border-[var(--brand-dark)] focus:bg-[var(--offwhite)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 disabled:opacity-60";

const labelClass =
  "block text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--cocoa-soft)]";

export function ComunidadeForm() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [motivo, setMotivo] = useState("");
  // Honeypot anti-bot — invisível pra humanos
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [hasFocused, setHasFocused] = useState(false);

  // touched: mostra erro inline só depois que a pessoa interagiu
  // com o campo (não polui o form ao abrir). Em submit, marca tudo.
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    firstname: false,
    email: false,
    phone: false,
    objetivo: false,
    motivo: false,
  });
  const markTouched = (name: FieldName) =>
    setTouched((prev) => ({ ...prev, [name]: true }));
  const markAllTouched = () =>
    setTouched({
      firstname: true,
      email: true,
      phone: true,
      objetivo: true,
      motivo: true,
    });

  const fieldsForValidation = { firstname, email, phone, objetivo, motivo };
  const errors: FieldErrors = useMemo(
    () => validateFields(fieldsForValidation),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [firstname, email, phone, objetivo, motivo],
  );
  const formIsValid = isFormValid(fieldsForValidation);

  function fieldError(name: FieldName) {
    if (!touched[name]) return null;
    const msg = errors[name];
    if (!msg) return null;
    return (
      <p
        id={`comunidade-${name}-error`}
        className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-700"
        role="alert"
      >
        <AlertCircle className="h-3 w-3 shrink-0" />
        {msg}
      </p>
    );
  }

  function handleFirstFocus() {
    if (hasFocused) return;
    setHasFocused(true);
    trackEvent(EVENTS.COMUNIDADE_FORM_START);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;

    if (honeypot.trim().length > 0) {
      navigate({ to: "/obrigado" });
      return;
    }

    // Defesa em profundidade: aborta submit se algum required tá vazio,
    // mesmo se o botão tiver sido habilitado por engano (Enter no campo
    // pressionado, etc).
    if (!formIsValid) {
      markAllTouched();
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
          objetivo_com_a_comunidade: objetivo,
          motivo_para_aprender_ia: motivo,
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

      // Evento UNIVERSAL "form_submissions" — disparado em qualquer
      // form bem-sucedido em qualquer LP. Dashboards que filtram por
      // esse nome literal veem a conversão. Metadata `source` separa
      // tráfego /comunidade de /home.
      trackEvent(EVENTS.FORM_SUBMISSIONS, {
        source: "lp_comunidade",
        form_slug: FORM_SLUG,
      });
      // Evento granular (mantido pra filtros existentes)
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
      className="rounded-[28px] bg-[var(--offwhite)] p-7 ring-1 ring-[var(--cocoa)]/10 shadow-[0_30px_70px_-30px_rgba(13,13,13,0.15)] md:p-9"
    >
      <span className="mono-label text-[var(--brand-dark)]">
        Cadastro gratuito
      </span>

      <h3 className="mt-3 font-display text-2xl text-[var(--cocoa)] md:text-[28px]">
        Garanta sua vaga na próxima aula
      </h3>
      <p className="mt-3 text-[14px] leading-[1.55] text-[var(--cocoa-soft)]">
        Em menos de 1 minuto. Sem cartão. Sem letrinha pequena.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4" noValidate>
        {/* Honeypot anti-bot */}
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
            Nome Completo
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
            onBlur={() => markTouched("firstname")}
            aria-invalid={touched.firstname && !!errors.firstname}
            aria-describedby={
              touched.firstname && errors.firstname
                ? "comunidade-firstname-error"
                : undefined
            }
            disabled={state === "loading"}
            placeholder="Seu nome completo"
            className={inputClass}
          />
          {fieldError("firstname")}
        </div>

        <div>
          <label htmlFor="comunidade-email" className={labelClass}>
            E-mail
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
            onBlur={() => markTouched("email")}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={
              touched.email && errors.email
                ? "comunidade-email-error"
                : undefined
            }
            disabled={state === "loading"}
            placeholder="seu@email.com"
            className={inputClass}
          />
          {fieldError("email")}
        </div>

        <div>
          <label htmlFor="comunidade-phone" className={labelClass}>
            Telefone com DDD
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
            onBlur={() => markTouched("phone")}
            aria-invalid={touched.phone && !!errors.phone}
            aria-describedby={
              touched.phone && errors.phone
                ? "comunidade-phone-error"
                : undefined
            }
            disabled={state === "loading"}
            placeholder="(11) 99999-9999"
            className={inputClass}
          />
          {fieldError("phone")}
        </div>

        <div>
          <label htmlFor="comunidade-objetivo" className={labelClass}>
            Qual o seu objetivo ao participar da comunidade?
          </label>
          <div className="relative">
            <select
              id="comunidade-objetivo"
              name="objetivo_com_a_comunidade"
              required
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              onFocus={handleFirstFocus}
              onBlur={() => markTouched("objetivo")}
              aria-invalid={touched.objetivo && !!errors.objetivo}
              aria-describedby={
                touched.objetivo && errors.objetivo
                  ? "comunidade-objetivo-error"
                  : undefined
              }
              disabled={state === "loading"}
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="" disabled>
                Selecione...
              </option>
              {OBJETIVO_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-[var(--cocoa-soft)]" />
          </div>
          {fieldError("objetivo")}
        </div>

        <div>
          <label htmlFor="comunidade-motivo" className={labelClass}>
            Por qual motivo você quer aprender IA?
          </label>
          <div className="relative">
            <select
              id="comunidade-motivo"
              name="motivo_para_aprender_ia"
              required
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              onFocus={handleFirstFocus}
              onBlur={() => markTouched("motivo")}
              aria-invalid={touched.motivo && !!errors.motivo}
              aria-describedby={
                touched.motivo && errors.motivo
                  ? "comunidade-motivo-error"
                  : undefined
              }
              disabled={state === "loading"}
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="" disabled>
                Selecione...
              </option>
              {MOTIVO_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-[var(--cocoa-soft)]" />
          </div>
          {fieldError("motivo")}
        </div>

        {state === "error" && errorMsg && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-[13px] leading-[1.5] text-red-700">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={state === "loading" || !formIsValid}
          aria-disabled={state === "loading" || !formIsValid}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_20px_50px_-20px_rgba(115,137,37,0.65)] transition-all hover:bg-[#5C6F1D] disabled:cursor-not-allowed disabled:opacity-70"
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

        <p className="text-center text-[12px] leading-[1.55] text-[var(--cocoa-soft)]">
          Ao se cadastrar, você entra na nossa comunidade no WhatsApp
          e ganha acesso à plataforma gratuita. Pode sair quando quiser.
        </p>

        <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-[var(--cocoa-soft)]/70">
          <Lock className="h-3 w-3" />
          <span>Seus dados protegidos · sem spam</span>
        </div>
      </form>
    </div>
  );
}
