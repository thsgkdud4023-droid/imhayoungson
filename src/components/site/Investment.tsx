import { motion } from "motion/react";

import { INVESTMENT } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";
import { StatBig } from "./StatBig";

function FlowRail() {
  return (
    <div className="mt-[10vh] grid grid-cols-1 gap-6 border-y border-foreground/20 py-8 lg:grid-cols-4">
      {INVESTMENT.flow.map((step, i) => (
        <motion.div
          key={step.key}
          initial={{ opacity: 0.2, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="meta flex items-center gap-2">
            <span className="bg-lime px-2 py-1 text-lime-foreground">{step.key}</span>
            {i < INVESTMENT.flow.length - 1 && <span className="opacity-40">→</span>}
          </div>
          <p className="mt-3 text-base leading-snug tracking-tight text-foreground/85">
            {step.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export function Investment() {
  return (
    <section id="investment" className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="02" title="INVESTMENT" />

      <h2 className="tight-display mt-8 text-[10vw] leading-[0.9] lg:text-[4.6vw]">
        {INVESTMENT.headline.map((line, i) => (
          <SplitText key={line} as="div" onScroll text={line} delay={i * 0.06} />
        ))}
      </h2>

      <p className="ko-text mt-8 max-w-5xl text-2xl leading-[1.6] text-foreground lg:text-[1.7vw]">
        {INVESTMENT.ko[0]}
        <br />
        {INVESTMENT.ko[1]}
      </p>

      <FlowRail />

      <div className="mt-[6vh]">
        {INVESTMENT.blocks.map((b) => (
          <motion.article
            key={b.no}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-foreground/15 py-[5.5vh]"
          >
            <p className="meta opacity-60">
              {b.no} — {b.title}
            </p>

            <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                {b.stats.length > 0 ? (
                  <div className="flex flex-wrap gap-x-12 gap-y-6">
                    {b.stats.map((s) => (
                      <StatBig
                        key={s.label}
                        value={s.value}
                        label={s.label}
                        unit={s.unit}
                        className="text-[18vw] lg:text-[6.4vw]"
                        unitClassName="text-[6vw] lg:text-[2vw]"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="tight-display text-[7vw] leading-[1.05] lg:text-[2.4vw]">
                    {b.headline.map((h) => (
                      <div key={h}>{h}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                {b.process.length > 0 && (
                  <div className="meta flex flex-wrap items-center gap-3 text-foreground/80">
                    {b.process.map((p, i) => (
                      <span key={p} className="flex items-center gap-3">
                        <span className="border border-foreground/20 px-2 py-0.5">{p}</span>
                        {i < b.process.length - 1 && <span className="opacity-40">→</span>}
                      </span>
                    ))}
                  </div>
                )}

                {b.bullets.length > 0 && (
                  <ul className="mt-6 grid grid-cols-1 gap-2 text-base text-foreground/80 sm:grid-cols-2">
                    {b.bullets.map((x) => (
                      <li key={x} className="border-t border-foreground/15 pt-2 leading-snug">
                        {x}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-baseline lg:gap-16">
        <span className="meta opacity-60">Government-linked Investment</span>
        {INVESTMENT.government.map((g) => (
          <span key={g.name} className="meta">
            <span className="bg-lime px-2 py-1 text-lime-foreground">{g.name}</span>
            <span className="ml-2 opacity-70">{g.detail}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
