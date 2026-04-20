import { Instagram, Youtube, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="container-narrow flex flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <img src="/logo-iaplicada.svg" alt="IAplicada" className="h-7 w-auto opacity-80" />

        <div className="flex items-center gap-5 text-sm text-white/55">
          <a href="#" className="flex items-center gap-1.5 hover:text-white">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-white">
            <Youtube className="h-4 w-4" /> YouTube
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-white">
            <Music2 className="h-4 w-4" /> TikTok
          </a>
        </div>

        <p className="text-xs text-white/40">© 2026 IAplicada</p>
      </div>
    </footer>
  );
}
