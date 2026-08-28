import { motion } from "motion/react";

import { OPEN_INNOVATION } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";
import { StatBig } from "./StatBig";
import lockupIbk from "@/assets/lockup-ibk.png.asset.json";
import lockupWelstory from "@/assets/lockup-welstory.png.asset.json";
import lockupZero1ne from "@/assets/lockup-zero1ne.png.asset.json";
import lockupHigh from "@/assets/lockup-high.png.asset.json";

const LOCKUPS: Record<string, string> = {
  ibk: lockupIbk.url,
  welstory: lockupWelstory.url,
  zero1ne: lockupZero1ne.url,
  high: lockupHigh.url,
};

export function OpenInnovation() {
  return (
    <section id="open-innovation" className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="03" title="OPEN INNOVATION" />

      <h2 className="tight-display mt-8 text-[10vw] leading-[0.9] lg:text-[4.6vw]">
        {OPEN_INNOVATION.headline.map((line, i) => (
          <SplitText key={line} as="div" onScroll text={line} delay={i * 0.06} />
        ))}
      </h2>

      <div className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/85">
        {OPEN_INNOVATION.ko.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="mt-[10vh]">
        {OPEN_INNOVATION.projects.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-foreground/20 py-[7vh]"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="meta opacity-60">{p.client}</p>
                <h3 className="mt-3">
                  {LOCKUPS[p.id] ? (
                    <motion.span
                      initial={{ opacity: 0, y: 18, clipPath: "inset(0 100% 0 0)" }}
                      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                      viewport={{ once: true, margin: "-12%" }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="block w-fit max-w-full overflow-hidden border border-foreground/25"
                    >
                      <img
                        src={LOCKUPS[p.id]}
                        alt={`${p.client} ${p.program}`}
                        loading="lazy"
                        className="block h-auto w-full max-w-[420px] object-contain transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </motion.span>
                  ) : (
                    <span className="tight-display block text-[13vw] leading-[0.86] lg:text-[4.8vw]">
                      {p.program}
                    </span>
                  )}
                  <span className="sr-only">{p.program}</span>
                </h3>
                <p className="meta mt-4 inline-block bg-secondary px-2 py-1">{p.category}</p>

                {p.counts.length > 0 && (
                  <div className="tight-display mt-8 text-[7vw] leading-tight lg:text-[1.9vw]">
                    {p.counts.map((c, i) => (
                      <span key={c.label}>
                        {c.value} {c.label}
                        {i < p.counts.length - 1 && <span className="opacity-40"> + </span>}
                      </span>
                    ))}
                  </div>
                )}

                {POSTERS[p.id] && (
                  <motion.figure
                    initial={{ opacity: 0, y: 28, rotate: -1.5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                    whileHover={{ rotate: 0, y: -6, scale: 1.015 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative mt-10 max-w-[320px] border border-foreground/25 bg-secondary p-2 shadow-[8px_8px_0_0_hsl(var(--foreground)/0.12)]"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={POSTERS[p.id]}
                        alt={`${p.client} ${p.program} 프로그램 포스터`}
                        loading="lazy"
                        className="w-full object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                      />
                    </div>
                    <figcaption className="meta mt-2 flex items-center justify-between text-[10px] opacity-60">
                      <span>OFFICIAL POSTER</span>
                      <span>{p.client}</span>
                    </figcaption>
                  </motion.figure>
                )}
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-2xl font-medium leading-[1.3] tracking-tight text-foreground lg:text-3xl">{p.message}</p>

                {p.highlight && (
                  <p className="tight-display mt-8 text-[8vw] leading-[0.95] lg:text-[2.8vw]">
                    {p.highlight}
                  </p>
                )}

                {p.stats.length > 0 && (
                  <div className="mt-10 flex flex-wrap gap-x-14 gap-y-8">
                    {p.stats.map((s) => (
                      <StatBig
                        key={s.label}
                        value={s.value}
                        label={s.label}
                        className="text-[16vw] lg:text-[5vw]"
                      />
                    ))}
                  </div>
                )}

                {p.funnel && (
                  <div className="mt-10">
                    <div className="tight-display flex items-baseline gap-4 text-[14vw] leading-none lg:text-[3.6vw]">
                      {p.funnel.steps.map((s, i) => (
                        <span key={s} className="flex items-baseline gap-4">
                          {s}
                          {i < p.funnel.steps.length - 1 && <span className="opacity-30">→</span>}
                        </span>
                      ))}
                    </div>
                    <p className="meta mt-3 opacity-60">{p.funnel.labels.join(" → ")}</p>
                  </div>
                )}

                {p.flow.length > 0 && (
                  <div className="meta mt-10 flex flex-wrap items-center gap-3">
                    {p.flow.map((f, i) => (
                      <span key={f} className="flex items-center gap-3">
                        <span className="border border-foreground/30 px-2 py-1">{f}</span>
                        {i < p.flow.length - 1 && <span className="opacity-40">→</span>}
                      </span>
                    ))}
                  </div>
                )}

                {p.bullets.length > 0 && (
                  <ul className="mt-8 grid grid-cols-1 gap-2 text-base text-foreground/80 sm:grid-cols-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="border-t border-foreground/15 pt-2 leading-snug">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {p.tags.length > 0 && (
                  <div className="meta mt-8 flex flex-wrap gap-2 text-xs opacity-60">
                    {p.tags.map((tag) => (
                      <span key={tag} className="border border-foreground/25 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="border-t border-foreground/20 pt-4">
        <p className="meta opacity-60">Other Selected Programs</p>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {OPEN_INNOVATION.otherPrograms.map((p, i) => (
            <motion.div
              key={p.org}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="border border-foreground/25 px-4 py-5"
            >
              <p className="text-lg font-semibold tracking-tight text-foreground">{p.org}</p>
              <p className="meta mt-1 text-sm opacity-80">{p.program}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
