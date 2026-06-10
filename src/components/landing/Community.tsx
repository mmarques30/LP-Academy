import { useMemo, useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, ArrowRight, Check, ChevronDown, Loader2, Lock } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/analytics";
import { trackMetaEvent } from "@/lib/meta-pixel";
import {
  isFormValid,
  validateFields,
  type FieldErrors,
  type FieldName,
} from "@/lib/form-validation";

// Configuração do backend — descoberta inspecionando o bundle do
// form Lovable oficial (saasiaplicada.lovable.app) e a tabela
// public.form_fields no Supabase com a anon key. Schema 1:1 com
// o que a Edge Function "form-submit" espera. Quando a Mari editar
// o form na Lovable e adicionar/remover campos, ela só precisa me
// avisar pra eu re-sincronizar este componente.
const SUPABASE_URL = "https://ciwdlceyjsnlnunktqzx.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpd2RsY2V5anNubG51bmt0cXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMTU3OTksImV4cCI6MjA4OTc5MTc5OX0.tl-7gEObYBB7wDUS5_pKh9UyRlJQNdnWPiRpMFYrbUM";
const FORM_SLUG = "academy";
const FORM_ENDPOINT = `${SUPABASE_URL}/functions/v1/form-submit`;

// O que a pessoa recebe se inscrevendo grátis.
const freeBenefits = [
  "Aula ao vivo · toda segunda 19h30",
  "Comunidade aberta IAplicada",
  "Newsletter quinzenal",
];

// Schema EXATO do form academy (tabela form_fields, form_id a1000000-…001).
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

// "success" não existe mais como estado renderizado: o submit bem-sucedido
// redireciona direto pra /thank-you sem flashar nada inline.
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

export function Community() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [motivo, setMotivo] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // touched controla quais campos JÁ tiveram interação do usuário.
  // Mensagem de erro só aparece em campos touched (não polui o form
  // ao abrir). Quando a pessoa tenta submeter, marcamos todos como
  // touched pra mostrar erro em qualquer campo vazio.
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

  // Helper pra renderizar mensagem de erro inline abaixo de um input
  function fieldError(name: FieldName) {
    if (!touched[name]) return null;
    const msg = errors[name];
    if (!msg) return null;
    return (
      <p
        id={`community-${name}-error`}
        className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-700"
        role="alert"
      >
        <AlertCircle className="h-3 w-3 shrink-0" />
        {msg}
      </p>
    );
  }

  // Dispara form_start UMA vez no primeiro foco em qualquer campo —
  // marca o início real de engajamento com o form (Clarity).
  const formStartedRef = useRef(false);
  const handleFormStart = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent(EVENTS.FORM_START);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;

    // Marca todos como touched pra mostrar erros nos campos vazios.
    // Se o form ainda não tá válido, aborta antes de mandar pro
    // backend (defesa em profundidade — o botão já estaria
    // disabled, mas garante que keyboard submit / enter no campo
    // também respeite a validação).
    if (!formIsValid) {
      markAllTouched();
      return;
    }

    setState("loading");
    setErrorMsg(null);
    trackEvent(EVENTS.FORM_SUBMIT_ATTEMPT);

    try {
      const utm = getUtms();

      // Payload IDÊNTICO ao que a Edge Function "form-submit" espera —
      // estrutura extraída do bundle JS oficial do form Lovable.
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

      // Evento UNIVERSAL "form_submissions" (com S) — disparado em
      // QUALQUER form bem-sucedido, em qualquer LP. Garante que
      // dashboards que filtram por esse nome literal vejam a
      // conversão. Metadata `source` diferencia LP de origem.
      const cameFromComunidade =
        typeof window !== "undefined" &&
        window.location.pathname.startsWith("/comunidade");
      trackEvent(EVENTS.FORM_SUBMISSIONS, {
        source: cameFromComunidade ? "lp_comunidade" : "lp_home",
        form_slug: FORM_SLUG,
      });
      // Evento granular por LP (mantido pra filtros existentes)
      trackEvent(EVENTS.FORM_SUBMIT_SUCCESS);

      // Meta Pixel — evento Lead. content_name diferencia LP de origem
      // pra Mari criar Conversões Personalizadas separadas no
      // Gerenciador de Eventos da Meta (otimização de campanha por LP).
      trackMetaEvent("Lead", {
        content_name: cameFromComunidade ? "lp_comunidade" : "lp_home_academy",
        content_category: "form_submit",
      });

      // Redireciona pra página de obrigado certa, baseado em qual LP
      // o form foi submetido:
      //   / (home)        → /thank-you (cópia "futuro Aplicado")
      //   /comunidade     → /obrigado  (cópia community-first)
      // Sem mostrar nada inline — a próxima tela já é a experiência
      // completa de próximos passos.
      navigate({ to: cameFromComunidade ? "/obrigado" : "/thank-you" });
    } catch (err) {
      console.error("[Community form]", err);
      trackEvent(EVENTS.FORM_SUBMIT_ERROR);
      setErrorMsg(
        "Não conseguimos enviar agora. Tenta de novo em alguns segundos ou manda um oi pra equipe@iaplicada.com.",
      );
      setState("error");
    }
  }

  return (
    <section id="comunidade" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          {/* Copy enxuta */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="h-section text-[var(--cocoa)]">
              Aplique IA com a Mari,{" "}
              <span className="serif-italic text-[var(--brand-dark)]">ao vivo.</span>
            </h2>

            <p className="mt-7 max-w-[44ch] text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]">
              Aula ao vivo de toda segunda, comunidade aberta e newsletter.
              É o método APLICA em ação — você sente como funciona antes
              de qualquer assinatura.
            </p>

            <ul className="mt-8 space-y-3.5">
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

            <p className="mt-8 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[var(--cocoa-soft)]">
              <Lock className="h-3.5 w-3.5 shrink-0" />
              <span>Gravações, materiais e mentoria semanal ficam no Academy.</span>
              <a
                href="#investimento"
                className="inline-flex items-center gap-1 font-medium text-[var(--brand-dark)] transition-colors hover:text-[#5C6F1D]"
              >
                Ver completo
                <ArrowRight className="h-3 w-3" />
              </a>
            </p>
          </motion.div>

          {/* Form nativo com design da LP, payload 1:1 com o backend Supabase */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[28px] bg-[var(--offwhite)] p-7 ring-1 ring-[var(--cocoa)]/10 shadow-[0_30px_70px_-30px_rgba(13,13,13,0.15)] md:p-9">
              <div>
                <span className="mono-label text-[var(--brand-dark)]">Inscrição gratuita</span>
                <h3 className="mt-3 font-display text-2xl text-[var(--cocoa)] md:text-3xl">
              Recebe o link da aula de segunda
                </h3>
                <p className="mt-3 text-[14px] leading-[1.55] text-[var(--cocoa-soft)]">
              Preenche e a gente te manda o convite + o acesso à comunidade.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                onFocus={handleFormStart}
                className="mt-7 space-y-4"
                noValidate
              >
                <div>
              <label htmlFor="community-firstname" className={labelClass}>
                Nome Completo
              </label>
              <input
                id="community-firstname"
                name="firstname"
                type="text"
                required
                autoComplete="name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                onBlur={() => markTouched("firstname")}
                aria-invalid={touched.firstname && !!errors.firstname}
                aria-describedby={
                  touched.firstname && errors.firstname
                    ? "community-firstname-error"
                    : undefined
                }
                disabled={state === "loading"}
                placeholder="Seu nome completo"
                className={inputClass}
              />
              {fieldError("firstname")}
                </div>

                <div>
              <label htmlFor="community-email" className={labelClass}>
                E-mail
              </label>
              <input
                id="community-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => markTouched("email")}
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={
                  touched.email && errors.email
                    ? "community-email-error"
                    : undefined
                }
                disabled={state === "loading"}
                placeholder="seu@email.com"
                className={inputClass}
              />
              {fieldError("email")}
                </div>

                <div>
              <label htmlFor="community-phone" className={labelClass}>
                Telefone com DDD
              </label>
              <input
                id="community-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => markTouched("phone")}
                aria-invalid={touched.phone && !!errors.phone}
                aria-describedby={
                  touched.phone && errors.phone
                    ? "community-phone-error"
                    : undefined
                }
                disabled={state === "loading"}
                placeholder="(11) 99999-9999"
                className={inputClass}
              />
              {fieldError("phone")}
                </div>

                <div>
              <label htmlFor="community-objetivo" className={labelClass}>
                Qual o seu objetivo ao participar da comunidade?
              </label>
              <div className="relative">
                <select
                  id="community-objetivo"
                  name="objetivo_com_a_comunidade"
                  required
                  value={objetivo}
                  onChange={(e) => setObjetivo(e.target.value)}
                  onBlur={() => markTouched("objetivo")}
                  aria-invalid={touched.objetivo && !!errors.objetivo}
                  aria-describedby={
                    touched.objetivo && errors.objetivo
                      ? "community-objetivo-error"
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
              <label htmlFor="community-motivo" className={labelClass}>
                Por qual motivo você quer aprender IA?
              </label>
              <div className="relative">
                <select
                  id="community-motivo"
                  name="motivo_para_aprender_ia"
                  required
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  onBlur={() => markTouched("motivo")}
                  aria-invalid={touched.motivo && !!errors.motivo}
                  aria-describedby={
                    touched.motivo && errors.motivo
                      ? "community-motivo-error"
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
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-[15px] font-medium text-white shadow-[0_20px_50px_-20px_rgba(115,137,37,0.65)] transition-all hover:bg-[#5C6F1D] disabled:cursor-not-allowed disabled:opacity-70"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
