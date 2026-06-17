import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { trackEvent, EVENTS } from "@/lib/analytics";
import { trackMetaEvent } from "@/lib/meta-pixel";

/**
 * Form de indicação da LP /indicacaoacademy.
 *
 * Backend: POST https://ciwdlceyjsnlnunktqzx.supabase.co/functions/v1/referral-submit
 * (endpoint público, no-verify-jwt). Schema do payload:
 *   {
 *     product: "academy",
 *     referrer_name, referrer_whatsapp, referrer_email,
 *     referrals: [{ name, whatsapp, email }, ...]
 *   }
 *
 * Validação antes de enviar (regras Mari):
 *   - Nome do indicador obrigatório
 *   - WhatsApp do indicador obrigatório
 *   - Pelo menos 1 indicação com nome + whatsapp preenchidos
 *   - Checkbox de consentimento marcado
 *   - Email do indicador e dos amigos é opcional (vai pro CRM quando
 *     preenchido, ignorado quando vazio)
 *
 * UX:
 *   - "+ Chamar mais um" adiciona um slot novo no array
 *   - Botão X remove o slot (desabilitado quando só tem 1)
 *   - Toast verde no sucesso, vermelho no erro
 *
 * Tracking pós-sucesso:
 *   - trackEvent FORM_SUBMISSIONS source=lp_indicacao_academy
 *   - trackMetaEvent Lead content_name=lp_indicacao_academy
 *   - count de indicações vai no parâmetro do Meta pra Mari medir
 *     impacto por volume
 */

const REFERRAL_ENDPOINT =
  "https://ciwdlceyjsnlnunktqzx.supabase.co/functions/v1/referral-submit";

type ReferralSlot = {
  id: number;
  name: string;
  whatsapp: string;
  email: string;
};

type SubmitState = "idle" | "loading";

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
  "block w-full rounded-xl border border-[var(--cocoa)]/15 bg-[var(--cream)] px-4 py-3 text-[15px] text-[var(--cocoa)] placeholder:text-[var(--cocoa-soft)]/60 transition-all focus:border-[var(--brand-dark)] focus:bg-[var(--offwhite)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 disabled:opacity-60";

const labelClass =
  "block text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--cocoa-soft)]";

export function ReferralForm() {
  const [referrerName, setReferrerName] = useState("");
  const [referrerWhatsapp, setReferrerWhatsapp] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [referrals, setReferrals] = useState<ReferralSlot[]>([
    { id: 1, name: "", whatsapp: "", email: "" },
  ]);
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<SubmitState>("idle");
  const [hasFocused, setHasFocused] = useState(false);

  function handleFirstFocus() {
    if (hasFocused) return;
    setHasFocused(true);
    trackEvent(EVENTS.COMUNIDADE_FORM_START);
  }

  function addReferral() {
    setReferrals((prev) => [
      ...prev,
      { id: (prev[prev.length - 1]?.id ?? 0) + 1, name: "", whatsapp: "", email: "" },
    ]);
  }

  function removeReferral(id: number) {
    setReferrals((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== id) : prev));
  }

  function updateReferral(id: number, patch: Partial<Omit<ReferralSlot, "id">>) {
    setReferrals((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;

    // Validações conforme spec
    if (!referrerName.trim()) {
      toast.error("Preenche seu nome pra continuar.");
      return;
    }
    if (!referrerWhatsapp.trim()) {
      toast.error("Preenche seu WhatsApp pra continuar.");
      return;
    }
    const validReferrals = referrals.filter(
      (r) => r.name.trim() !== "" && r.whatsapp.trim() !== "",
    );
    if (validReferrals.length === 0) {
      toast.error("Adiciona pelo menos uma indicação com nome e WhatsApp.");
      return;
    }
    if (!consent) {
      toast.error("Marca a caixa de consentimento pra enviar.");
      return;
    }

    setState("loading");
    trackEvent(EVENTS.COMUNIDADE_FORM_SUBMIT_ATTEMPT);

    try {
      const utm = getUtms();
      const payload = {
        product: "academy",
        referrer_name: referrerName.trim(),
        referrer_whatsapp: referrerWhatsapp.trim(),
        referrer_email: referrerEmail.trim(),
        referrals: validReferrals.map((r) => ({
          name: r.name.trim(),
          whatsapp: r.whatsapp.trim(),
          email: r.email.trim(),
        })),
        utm,
        meta: {
          referrer: typeof document !== "undefined" ? document.referrer : "",
          page_url: typeof window !== "undefined" ? window.location.href : "",
        },
      };

      const res = await fetch(REFERRAL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = (await res.json().catch(() => null)) as
        | { success?: boolean; created?: number; already_exists?: number; error?: string }
        | null;

      if (!res.ok || !body?.success) {
        const msg = body?.error || `Erro ao enviar (HTTP ${res.status}). Tenta de novo em alguns segundos.`;
        throw new Error(msg);
      }

      trackEvent(EVENTS.FORM_SUBMISSIONS, {
        source: "lp_indicacao_academy",
        form_slug: "referral_academy",
        referrals_count: validReferrals.length,
      });
      trackEvent(EVENTS.COMUNIDADE_FORM_SUBMIT_SUCCESS);
      trackMetaEvent("Lead", {
        content_name: "lp_indicacao_academy",
        content_category: "referral_submit",
        value: validReferrals.length,
      });

      const created = body.created ?? validReferrals.length;
      const dupes = body.already_exists ?? 0;
      const successMsg =
        dupes > 0
          ? `Indicações enviadas! ${created} nova(s), ${dupes} já estava(m) na base.`
          : `Indicações enviadas com sucesso! ${created} amigo(s) foram avisados.`;
      toast.success(successMsg);

      setReferrerName("");
      setReferrerWhatsapp("");
      setReferrerEmail("");
      setReferrals([{ id: 1, name: "", whatsapp: "", email: "" }]);
      setConsent(false);
      setState("idle");
    } catch (err) {
      console.error("[ReferralForm]", err);
      trackEvent(EVENTS.COMUNIDADE_FORM_SUBMIT_ERROR);
      const msg = err instanceof Error ? err.message : "Erro ao enviar. Tenta de novo.";
      toast.error(msg);
      setState("idle");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      id="indicar"
      className="rounded-[28px] bg-[var(--offwhite)] p-6 ring-1 ring-[var(--cocoa)]/10 shadow-[0_30px_70px_-30px_rgba(13,13,13,0.15)] md:p-7"
    >
      <form onSubmit={handleSubmit} className="space-y-7" noValidate>
        {/* Bloco do indicador */}
        <section>
          <span className="mono-label text-[var(--cocoa-soft)]">Seus dados</span>
          <h3 className="mt-2 font-display text-[22px] text-[var(--cocoa)] md:text-[24px]">
            Quem é você?
          </h3>

          <div className="mt-5 space-y-4">
            <div>
              <label htmlFor="referrer-name" className={labelClass}>
                Seu nome *
              </label>
              <input
                id="referrer-name"
                type="text"
                value={referrerName}
                onChange={(e) => setReferrerName(e.target.value)}
                onFocus={handleFirstFocus}
                disabled={state === "loading"}
                placeholder="Como podemos te chamar?"
                autoComplete="name"
                className={`mt-1.5 ${inputClass}`}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="referrer-whatsapp" className={labelClass}>
                  Seu WhatsApp *
                </label>
                <input
                  id="referrer-whatsapp"
                  type="tel"
                  value={referrerWhatsapp}
                  onChange={(e) => setReferrerWhatsapp(e.target.value)}
                  onFocus={handleFirstFocus}
                  disabled={state === "loading"}
                  placeholder="(11) 99999-0000"
                  autoComplete="tel"
                  className={`mt-1.5 ${inputClass}`}
                />
              </div>
              <div>
                <label htmlFor="referrer-email" className={labelClass}>
                  Seu e-mail
                </label>
                <input
                  id="referrer-email"
                  type="email"
                  value={referrerEmail}
                  onChange={(e) => setReferrerEmail(e.target.value)}
                  onFocus={handleFirstFocus}
                  disabled={state === "loading"}
                  placeholder="voce@email.com"
                  autoComplete="email"
                  className={`mt-1.5 ${inputClass}`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bloco dos indicados */}
        <section className="border-t border-[var(--cocoa)]/10 pt-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="mono-label text-[var(--brand-dark)]">
                Indicações
              </span>
              <h3 className="mt-2 font-display text-[22px] text-[var(--cocoa)] md:text-[24px]">
                Quem você quer chamar?
              </h3>
            </div>
            <button
              type="button"
              onClick={addReferral}
              disabled={state === "loading"}
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] px-4 py-2 text-[13px] font-semibold text-[var(--cocoa)] transition-all hover:bg-[var(--brand-bright)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
              Chamar mais um
            </button>
          </div>

          <div className="mt-5 space-y-4">
            {referrals.map((r, idx) => (
              <div
                key={r.id}
                className="rounded-2xl border border-[var(--cocoa)]/10 bg-[var(--cream)] p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2.5">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--cocoa)] text-[11px] font-bold text-[var(--cream)]">
                      {idx + 1}
                    </span>
                    <span className="font-display text-[15px] font-semibold text-[var(--cocoa)]">
                      Amigo {idx + 1}
                    </span>
                  </div>
                  {referrals.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeReferral(r.id)}
                      disabled={state === "loading"}
                      aria-label={`Remover amigo ${idx + 1}`}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[var(--cocoa-soft)] transition-colors hover:bg-[var(--cocoa)]/10 hover:text-[var(--cocoa)]"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <label
                      htmlFor={`ref-${r.id}-name`}
                      className={labelClass}
                    >
                      Nome do amigo *
                    </label>
                    <input
                      id={`ref-${r.id}-name`}
                      type="text"
                      value={r.name}
                      onChange={(e) =>
                        updateReferral(r.id, { name: e.target.value })
                      }
                      onFocus={handleFirstFocus}
                      disabled={state === "loading"}
                      placeholder="Nome de quem você indica"
                      className={`mt-1.5 ${inputClass} bg-[var(--offwhite)]`}
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor={`ref-${r.id}-whatsapp`}
                        className={labelClass}
                      >
                        WhatsApp *
                      </label>
                      <input
                        id={`ref-${r.id}-whatsapp`}
                        type="tel"
                        value={r.whatsapp}
                        onChange={(e) =>
                          updateReferral(r.id, { whatsapp: e.target.value })
                        }
                        onFocus={handleFirstFocus}
                        disabled={state === "loading"}
                        placeholder="(11) 99999-0000"
                        className={`mt-1.5 ${inputClass} bg-[var(--offwhite)]`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`ref-${r.id}-email`}
                        className={labelClass}
                      >
                        E-mail
                      </label>
                      <input
                        id={`ref-${r.id}-email`}
                        type="email"
                        value={r.email}
                        onChange={(e) =>
                          updateReferral(r.id, { email: e.target.value })
                        }
                        onFocus={handleFirstFocus}
                        disabled={state === "loading"}
                        placeholder="amigo@email.com"
                        className={`mt-1.5 ${inputClass} bg-[var(--offwhite)]`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consentimento + CTA */}
        <div className="space-y-5">
          <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.5] text-[var(--cocoa-soft)]">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              disabled={state === "loading"}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-[var(--cocoa)]/30 text-[var(--brand-dark)] focus:ring-2 focus:ring-[var(--brand)]/30"
            />
            <span>
              Avisei meus amigos que vou indicar e estou ciente do
              compartilhamento dos dados deles com a IAplicada Academy.
            </span>
          </label>

          <button
            type="submit"
            disabled={state === "loading"}
            aria-disabled={state === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_20px_50px_-20px_rgba(115,137,37,0.65)] transition-all hover:bg-[#5C6F1D] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {state === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Enviando indicações...
              </>
            ) : (
              <>
                Enviar indicações
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
