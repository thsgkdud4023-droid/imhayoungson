import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useReveal } from "./reveal";

function useClock() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Seoul",
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

function useCoords() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return pos;
}

const pad = (n: number) => String(Math.round(n)).padStart(4, "0");

export function Frame() {
  const ready = useReveal();
  const time = useClock();
  const { x, y } = useCoords();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: ready ? 1 : 0 },
    transition: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <header className="pointer-events-none fixed inset-0 z-50 flex flex-col justify-between">
      <motion.div
        {...fade}
        className="flex items-center justify-between px-4 py-4 lg:px-14 lg:py-7"
      >
        <a
          href="/"
          className="dot-hit pointer-events-auto p-2 font-sans text-base font-bold uppercase"
          style={{ fontVariationSettings: '"wght" 800, "wdth" 118' }}
        >
          Son Hayoung
        </a>
        <nav className="pointer-events-auto flex items-center gap-x-1 lg:gap-x-3">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="dot-hit meta hidden cursor-pointer p-2 sm:block"
            >
              {item.label}
            </button>
          ))}
          <a href={RESUME_HREF} className="dot-hit meta p-2">
            Resume ↗
          </a>
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle theme"
            className="dot-hit meta cursor-pointer p-2"
          >
            Theme[{dark ? "D" : "L"}]
          </button>
        </nav>
      </motion.div>

      <motion.div
        {...fade}
        className="flex items-end justify-between px-4 py-4 lg:px-14 lg:py-7"
      >
        <span className="meta p-2 text-muted-foreground">
          <span className="hidden lg:inline">GMT+9 KR </span>
          {time}
        </span>
        <span className="meta hidden p-2 text-muted-foreground lg:inline">
          {pad(x)} X {pad(y)} Y
        </span>
        <span className="meta p-2 text-muted-foreground">©{new Date().getFullYear()}</span>
      </motion.div>
    </header>
  );
}
