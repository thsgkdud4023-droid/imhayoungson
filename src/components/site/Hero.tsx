import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { HERO } from "@/lib/portfolio-data";
import { SplitText } from "./SplitText";
import { useReveal } from "./reveal";
import { StatBig } from "./StatBig";

import hello3d from "@/assets/hello-3d.png";
import stickerHearts from "@/assets/sticker-hearts.png";
import stickerHand from "@/assets/sticker-hand.png";
import stickerSquiggle from "@/assets/sticker-squiggle.png";

const STICKERS = [
  { src: stickerHearts, className: "left-[6%] top-[18%] w-[16vw] max-w-[170px]", depth: 34, rotate: -12 },
  { src: stickerHand, className: "right-[9%] top-[24%] w-[13vw] max-w-[140px]", depth: -26, rotate: 9 },
  { src: stickerSquiggle, className: "left-[22%] bottom-[26%] w-[15vw] max-w-[160px]", depth: 20, rotate: 6 },
  { src: stickerHearts, className: "right-[20%] bottom-[30%] w-[10vw] max-w-[110px]", depth: -18, rotate: 16 },
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
      className="sky-stage relative flex min-h-[100svh] flex-col overflow-hidden px-4 pb-10 pt-[20vh] lg:px-14"
    >
      {/* 3D lettering + sticker collage */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ opacity: fade }}>
        <motion.img
          src={hello3d}
          alt=""
          className="absolute left-1/2 top-1/2 w-[92vw] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 select-none opacity-90 mix-blend-luminosity"
          style={{ y: lettersY, scale: lettersScale, x: pointer.x * -20 }}
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
        <h1 className="tight-display text-[11vw] leading-[0.9] lg:text-[6.4vw]">
          {HERO.titleLines.map((line, i) => (
            <SplitText key={line} as="div" text={line} delay={0.25 + i * 0.08} />
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl"
        >
          {HERO.ko.map((line) => (
            <p key={line} className="text-base leading-relaxed opacity-80 lg:text-lg">
              {line}
            </p>
          ))}
          <p className="meta mt-6 opacity-60">{HERO.kicker}</p>
        </motion.div>

        <div className="mt-[12vh] grid grid-cols-2 gap-y-10 border-t border-current/20 pt-8 lg:mt-auto lg:grid-cols-4">
          {HERO.stats.map((s) => (
            <StatBig key={s.label} value={s.value} label={s.label} className="text-[14vw] lg:text-[4.6vw]" />
          ))}
        </div>
      </div>
    </section>
  );
}
