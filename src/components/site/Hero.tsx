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
import objHandshake from "@/assets/obj-handshake.png";

const STICKERS = [
  { src: objCoins, className: "left-[6%] top-[18%] w-[12vw] max-w-[130px]", depth: 28, rotate: -10 },
  { src: objChart, className: "right-[9%] top-[22%] w-[11vw] max-w-[120px]", depth: -22, rotate: 7 },
  { src: objRocket, className: "left-[21%] bottom-[26%] w-[11vw] max-w-[120px]", depth: 16, rotate: -6 },
  { src: objHandshake, className: "right-[19%] bottom-[30%] w-[10vw] max-w-[110px]", depth: -14, rotate: 12 },
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
          className="absolute left-1/2 top-1/2 w-[78vw] max-w-[1180px] -translate-x-1/2 -translate-y-1/2 select-none opacity-75 mix-blend-luminosity"
          style={{ y: lettersY, scale: lettersScale, x: pointer.x * -16 }}
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
        <h1 className="tight-display text-[9.5vw] leading-[0.92] lg:text-[5.6vw]">
          {HERO.titleLines.map((line, i) => (
            <SplitText key={line} as="div" text={line} delay={0.25 + i * 0.08} />
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl"
        >
          {HERO.ko.map((line) => (
            <p key={line} className="text-[15px] leading-relaxed opacity-75 lg:text-base">
              {line}
            </p>
          ))}
          <p className="meta mt-5 opacity-55">{HERO.kicker}</p>
        </motion.div>

        <div className="mt-[10vh] grid grid-cols-1 items-end gap-y-8 border-t border-current/18 pt-7 lg:mt-auto lg:grid-cols-12 lg:gap-x-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:col-span-7">
            {HERO.primaryStats.map((s) => (
              <StatBig
                key={s.label}
                value={s.value}
                label={s.label}
                className="text-[18vw] lg:text-[5.4vw]"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 lg:col-span-4 lg:col-start-9">
            {HERO.secondaryStats.map((s) => (
              <StatBig
                key={s.label}
                value={s.value}
                label={s.label}
                className="text-[7.5vw] opacity-65 lg:text-[1.9vw]"
                labelClassName="opacity-50"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
