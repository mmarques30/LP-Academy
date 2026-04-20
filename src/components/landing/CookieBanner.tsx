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
    <div className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-md rounded-xl border border-white/10 bg-black/95 p-4 backdrop-blur md:left-auto md:right-6">
      <div className="flex items-start gap-3">
        <p className="flex-1 text-sm text-white/65">
          Usamos cookies para melhorar sua experiência.
        </p>
        <button onClick={accept} className="btn-primary !px-3 !py-1.5 !text-xs">
          Aceitar
        </button>
        <button onClick={accept} aria-label="Fechar" className="text-white/40 hover:text-white">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
