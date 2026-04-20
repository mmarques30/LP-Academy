import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("iap-cookies")) setShow(true);
  }, []);
  if (!show) return null;
  const accept = () => {
    localStorage.setItem("iap-cookies", "1");
    setShow(false);
  };
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--offwhite)]/95 p-4 shadow-[0_30px_80px_-30px_rgba(44,20,2,0.4)] backdrop-blur md:left-auto md:right-6">
      <div className="flex items-start gap-3">
        <p className="flex-1 text-sm text-[var(--cocoa-soft)]">
          Usamos cookies pra melhorar sua experiência. Ao continuar, você concorda com nossa política de
          privacidade.
        </p>
        <button onClick={accept} className="btn-primary !px-4 !py-2 !text-xs">Aceitar</button>
        <button onClick={accept} aria-label="Fechar" className="text-[var(--cocoa-soft)]">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
