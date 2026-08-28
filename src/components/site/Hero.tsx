import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { HERO } from "@/lib/portfolio-data";
import { SplitText } from "./SplitText";
import { useReveal } from "./reveal";
import { StatBig } from "./StatBig";

import hello3d from "@/assets/hello-3d.png";
import objCoins from "@/assets/obj-coins.png";
import objChart from "@/assets/obj-chart.png";
import objRocket from "@/assets/obj-rocket.png";

const STICKERS = [
  { src: objCoins, className: "left-[6%] top-[18%] w-[10vw] max-w-[110px]", depth: 22, rotate: -10 },
  { src: objChart, className: "right-[9%] top-[22%] w-[9vw] max-w-[100px]", depth: -18, rotate: 7 },
  { src: objRocket, className: "left-[21%] bottom-[26%] w-[9vw] max-w-[100px]", depth: 14, rotate: -6 },
];


export function Hero() {
  const ready = useReveal();
  const ref = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const lettersY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const lettersScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="sky-stage relative flex min-h-[100svh] flex-col overflow-hidden px-4 pb-10 pt-[22vh] lg:px-14"
    >
      {/* 3D lettering + sticker collage */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ opacity: fade }}>
        <motion.img
          src={hello3d}
          alt=""
          className="absolute left-1/2 top-1/2 w-[92vw] max-w-[1380px] -translate-x-1/2 -translate-y-1/2 select-none opacity-90 mix-blend-luminosity"
          style={{ y: lettersY, scale: lettersScale, x: pointer.x * -12 }}
        />
        {STICKERS.map((s, i) => (
          <motion.img
            key={i}
            src={s.src}
            alt=""
            className={`absolute select-none drop-shadow-xl ${s.className}`}
            style={{ rotate: s.rotate }}
            animate={{ x: pointer.x * s.depth, y: pointer.y * s.depth }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 flex flex-1 flex-col text-foreground">
        <h1 className="tight-display text-[11vw] leading-[0.9] lg:text-[6.5vw]">
          {HERO.titleLines.map((line, i) => (
            <SplitText key={line} as="div" text={line} delay={0.25 + i * 0.08} />
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-lg"
        >
          {HERO.ko.map((line) => (
            <p key={line} className="text-[15px] leading-relaxed opacity-70 lg:text-[17px]">
              {line}
            </p>
          ))}
          <p className="meta mt-4 opacity-50">{HERO.kicker}</p>
        </motion.div>

        <div className="mt-[9vh] grid grid-cols-1 items-end gap-y-7 border-t border-current/15 pt-6 lg:mt-auto lg:grid-cols-12 lg:gap-x-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-7 lg:col-span-7">
            {HERO.primaryStats.map((s) => (
              <StatBig
                key={s.label}
                value={s.value}
                label={s.label}
                className="text-[18vw] lg:text-[5.8vw]"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 lg:col-span-4 lg:col-start-9">
            {HERO.secondaryStats.map((s) => (
              <StatBig
                key={s.label}
                value={s.value}
                label={s.label}
                className="text-[8vw] opacity-60 lg:text-[2vw]"
                labelClassName="opacity-50"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
