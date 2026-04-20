import { useEffect, useState } from "react";

function getDiff(end: Date) {
  const ms = Math.max(0, end.getTime() - Date.now());
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return { d, h, m, s };
}

export function CountdownTimer({ endDate }: { endDate: Date }) {
  const [t, setT] = useState(() => getDiff(endDate));
  useEffect(() => {
    const id = setInterval(() => setT(getDiff(endDate)), 1000);
    return () => clearInterval(id);
  }, [endDate]);

  const Box = ({ v, l }: { v: number; l: string }) => (
    <div className="flex flex-col items-center rounded-lg border border-[var(--brand)]/40 bg-[#1A1F10] px-4 py-3 min-w-[68px]">
      <span className="font-display text-2xl font-extrabold text-[var(--brand-bright)] tabular-nums">
        {String(v).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">{l}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <Box v={t.d} l="Dias" />
      <Box v={t.h} l="Horas" />
      <Box v={t.m} l="Min" />
      <Box v={t.s} l="Seg" />
    </div>
  );
}
