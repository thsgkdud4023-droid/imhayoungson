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
  { src: objCoins, className: "left-[4%] top-[-12%] w-[10vw] max-w-[110px]", depth: 22, rotate: -10, duration: 10.5, delay: 0, opacity: 0.35 },
  { src: objChart, className: "right-[5%] top-[-18%] w-[9vw] max-w-[100px]", depth: -18, rotate: 7, duration: 12.0, delay: 2.2, opacity: 0.35 },
  { src: objRocket, className: "left-[18%] top-[-16%] w-[9vw] max-w-[100px]", depth: 14, rotate: -6, duration: 11.0, delay: 4.0, opacity: 0.35 },
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
          <motion.div
            key={i}
            className={`absolute ${s.className}`}
            initial={{ opacity: 0, rotate: s.rotate - 18 }}
            animate={{ opacity: 1, rotate: s.rotate }}
            transition={{
              type: "spring",
              stiffness: 38,
              damping: 22,
              delay: 0.35 + i * 0.18,
            }}
          >
            <motion.div
              animate={{ y: ["0vh", "120vh"] }}
              transition={{
                duration: s.duration,
                delay: s.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.img
                src={s.src}
                alt=""
                className="w-full select-none drop-shadow-xl will-change-transform"
                style={{ opacity: s.opacity }}
                animate={{ x: pointer.x * s.depth, y: pointer.y * s.depth }}
                transition={{ type: "spring", stiffness: 60, damping: 18 }}
              />
            </motion.div>
          </motion.div>
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
          <p className="tight-display text-2xl font-black leading-[1.2] tracking-[-0.02em] text-foreground lg:text-[2.1vw]">
            <span className="inline-block bg-background px-2 py-1 text-foreground">
              투자 검토와 집행
            </span>
            으로 커리어를 시작해,
            <br />
            현재는 대기업과 스타트업을 연결하는{" "}
            <span className="inline-block bg-background px-2 py-1 text-foreground">
              오픈이노베이션
            </span>{" "}
            업무를 수행하고 있습니다.
          </p>

          <p className="meta mt-4 opacity-80">{HERO.kicker}</p>
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
