import { useEffect, useState } from "react";

function diff(target: Date) {
  const ms = target.getTime() - Date.now();
  const clamp = Math.max(ms, 0);
  const d = Math.floor(clamp / 86400000);
  const h = Math.floor((clamp % 86400000) / 3600000);
  const m = Math.floor((clamp % 3600000) / 60000);
  const s = Math.floor((clamp % 60000) / 1000);
  return { d, h, m, s };
}

export function Countdown({ target, compact = false }: { target: Date; compact?: boolean }) {
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const i = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(i);
  }, [target]);

  const items = [
    { v: t.d, l: "días" },
    { v: t.h, l: "horas" },
    { v: t.m, l: "min" },
    { v: t.s, l: "seg" },
  ];

  return (
    <div className={`grid grid-cols-4 gap-2 ${compact ? "" : "sm:gap-4"}`}>
      {items.map((it) => (
        <div
          key={it.l}
          className={`border-2 border-foreground bg-background text-center ${
            compact ? "p-2" : "p-3 sm:p-5"
          }`}
        >
          <div
            className={`font-display tabular-nums ${
              compact ? "text-2xl" : "text-3xl sm:text-5xl md:text-6xl"
            }`}
          >
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
}
