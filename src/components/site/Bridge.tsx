import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { BRIDGE } from "@/lib/portfolio-data";
import { WarpBackground } from "./WarpBackground";

export function Bridge() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="warp-stage relative mt-[22vh] flex min-h-[100svh] items-center overflow-hidden px-4 lg:px-14"
    >
      <WarpBackground rings density={0.85} />

      {BRIDGE.scattered.map((s) => (
        <motion.span
          key={s.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`meta absolute z-10 hidden lg:block ${s.className}`}
        >
          {s.text}
        </motion.span>
      ))}

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="tight-display text-[11vw] leading-[0.92] lg:text-[5.2vw]">
          {BRIDGE.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-10 text-base opacity-75 lg:text-lg">{BRIDGE.ko}</p>
      </motion.div>
    </section>
  );
}
