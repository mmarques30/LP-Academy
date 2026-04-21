type LogoProps = {
  className?: string;
  /** "light" = fundo claro (cream/white) — usa wordmark escuro. "dark" = fundo escuro — usa wordmark claro. */
  variant?: "dark" | "light";
};

export function Logo({ className = "h-7 w-auto", variant = "light" }: LogoProps) {
  const src = variant === "dark" ? "/iaplicada-logo.png" : "/iaplicada-logo-light.png";
  return <img src={src} alt="IAplicada" className={className} />;
}
