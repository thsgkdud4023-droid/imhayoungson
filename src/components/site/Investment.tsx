import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { INVESTMENT } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";
import { StatBig } from "./StatBig";

function FlowRail() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const active = useTransform(scrollYProgress, [0.15, 0.85], [0, INVESTMENT.flow.length - 1]);

  return (
    <div ref={ref} className="mt-[10vh] border-y border-foreground/20 py-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {INVESTMENT.flow.map((step, i) => (
          <motion.div
            key={step.key}
            style={{ opacity: useTransform(active, (v) => (Math.abs(v - i) < 0.6 ? 1 : 0.28)) }}
            className="flex items-baseline gap-3"
          >
            <span className="meta bg-lime px-2 py-1 text-lime-foreground">{step.key}</span>
            <span className="meta">{step.label}</span>
            {i < INVESTMENT.flow.length - 1 && (
              <span className="meta ml-auto hidden opacity-40 lg:inline">→</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Investment() {
  return (
    <section id="investment" className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="01" title="INVESTMENT" />

      <h2 className="tight-display mt-8 text-[10vw] leading-[0.9] lg:text-[5.4vw]">
        {INVESTMENT.headline.map((line, i) => (
          <SplitText key={line} as="div" onScroll text={line} delay={i * 0.06} />
        ))}
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {INVESTMENT.ko}
      </p>

      <FlowRail />

      <div className="mt-[8vh]">
        {INVESTMENT.blocks.map((b) => (
          <motion.article
            key={b.no}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-8 border-b border-foreground/15 py-[8vh] lg:grid-cols-12"
          >
            <div className="lg:col-span-5">
              <p className="meta opacity-60">
                {b.no} — {b.title}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-12 gap-y-6">
                {b.stats.map((s) => (
                  <StatBig
                    key={s.label}
                    value={s.value}
                    label={s.label}
                    className="text-[18vw] lg:text-[7vw]"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-2xl leading-[1.25] tracking-tight lg:text-3xl">{b.body}</p>

              {b.bullets.length > 0 && (
                <ul className="meta mt-8 grid grid-cols-1 gap-2 text-muted-foreground sm:grid-cols-2">
                  {b.bullets.map((x) => (
                    <li key={x} className="border-t border-foreground/15 pt-2">
                      {x}
                    </li>
                  ))}
                </ul>
              )}

              {b.process.length > 0 && (
                <div className="meta mt-8 flex flex-wrap items-center gap-3">
                  {b.process.map((p, i) => (
                    <span key={p} className="flex items-center gap-3">
                      <span className="border border-foreground/30 px-2 py-1">{p}</span>
                      {i < b.process.length - 1 && <span className="opacity-40">→</span>}
                    </span>
                  ))}
                </div>
              )}

              {b.tags.length > 0 && (
                <div className="meta mt-8 flex flex-wrap gap-2">
                  {b.tags.map((tag) => (
                    <span key={tag} className="bg-secondary px-3 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-baseline lg:gap-16">
        <span className="meta opacity-60">Government-linked Investment</span>
        {INVESTMENT.government.map((g) => (
          <span key={g.name} className="meta">
            <span className="bg-lime px-2 py-1 text-lime-foreground">{g.name}</span>{" "}
            <span className="ml-2 opacity-70">{g.detail}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
