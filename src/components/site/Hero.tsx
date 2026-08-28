import { motion } from "motion/react";

import { HERO } from "@/lib/portfolio-data";
import { SplitText } from "./SplitText";
import { useReveal } from "./reveal";
import { WarpBackground } from "./WarpBackground";
import { StatBig } from "./StatBig";

export function Hero() {
  const ready = useReveal();

  return (
    <section className="warp-stage relative flex min-h-[100svh] flex-col overflow-hidden px-4 pb-10 pt-[26vh] lg:px-14">
      <WarpBackground />

      <div className="relative z-10 flex flex-1 flex-col">
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

        <div className="mt-auto grid grid-cols-2 gap-y-10 border-t border-current/20 pt-8 lg:grid-cols-4">
          {HERO.stats.map((s) => (
            <StatBig
              key={s.label}
              value={s.value}
              label={s.label}
              className="text-[14vw] lg:text-[4.6vw]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
