/**
 * Validação dos 5 campos required dos forms da LP /
 * (Community.tsx) e da LP /comunidade (ComunidadeForm.tsx).
 *
 * Todos os 5 campos são obrigatórios pra qualificação automática
 * funcionar no CRM (motivo_para_aprender_ia é o sinal MQL — equipe
 * produtiva / referência / escalar negócio = lead qualificado).
 *
 * Regras:
 *   - firstname: trim não-vazio
 *   - email:     trim não-vazio + formato válido
 *   - phone:     trim não-vazio (sem regex de formato — pessoa pode
 *                preencher com ou sem parênteses, hífen, etc; o
 *                backend valida)
 *   - objetivo:  selecionou alguma opção (não "")
 *   - motivo:    selecionou alguma opção (não "")
 */

export type FieldName =
  | "firstname"
  | "email"
  | "phone"
  | "objetivo"
  | "motivo";

export type FieldErrors = Partial<Record<FieldName, string>>;

export interface FormFields {
  firstname: string;
  email: string;
  phone: string;
  objetivo: string;
  motivo: string;
}

// Regex simples de email — cobre os formatos válidos comuns.
// Não é RFC 5322 completo (que é monstro), mas pega 99% dos casos
// reais e rejeita "lixo@", "@gmail.com", "sem-arroba.com", etc.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Valida cada campo e retorna um objeto com mensagens de erro.
 * Se um campo é válido, ele NÃO aparece no objeto retornado.
 */
export function validateFields(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (fields.firstname.trim().length === 0) {
    errors.firstname = "Preencha seu nome";
  }

  const emailTrim = fields.email.trim();
  if (emailTrim.length === 0) {
    errors.email = "Preencha seu e-mail";
  } else if (!EMAIL_REGEX.test(emailTrim)) {
    errors.email = "Formato de e-mail inválido";
  }

  if (fields.phone.trim().length === 0) {
    errors.phone = "Preencha seu telefone";
  }

  if (fields.objetivo === "") {
    errors.objetivo = "Selecione uma opção";
  }

  if (fields.motivo === "") {
    errors.motivo = "Selecione uma opção";
  }

  return errors;
}

/**
 * Retorna true se NENHUM campo tem erro de validação.
 * Útil pra habilitar/desabilitar o botão de submit.
 */
export function isFormValid(fields: FormFields): boolean {
  return Object.keys(validateFields(fields)).length === 0;
}
