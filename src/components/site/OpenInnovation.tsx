import { motion } from "motion/react";

import { OPEN_INNOVATION } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";
import { StatBig } from "./StatBig";

export function OpenInnovation() {
  return (
    <section id="open-innovation" className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="02" title="OPEN INNOVATION" />

      <h2 className="tight-display mt-8 text-[10vw] leading-[0.9] lg:text-[5.4vw]">
        {OPEN_INNOVATION.headline.map((line, i) => (
          <SplitText key={line} as="div" onScroll text={line} delay={i * 0.06} />
        ))}
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        {OPEN_INNOVATION.ko}
      </p>

      <div className="mt-[10vh]">
        {OPEN_INNOVATION.projects.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-foreground/20 py-[9vh]"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="meta opacity-60">{p.client}</p>
                <h3 className="tight-display mt-3 text-[13vw] leading-[0.86] lg:text-[4.8vw]">
                  {p.program}
                </h3>
                <p className="meta mt-4 inline-block bg-secondary px-2 py-1">{p.category}</p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                {p.funnel && (
                  <div className="mb-10">
                    <div className="tight-display flex items-baseline gap-4 text-[14vw] leading-none lg:text-[4.4vw]">
                      {p.funnel.steps.map((s, i) => (
                        <span key={s} className="flex items-baseline gap-4">
                          {s}
                          {i < p.funnel.steps.length - 1 && (
                            <span className="opacity-30">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                    <p className="meta mt-3 opacity-60">{p.funnel.labels.join(" → ")}</p>
                  </div>
                )}

                {p.stats.length > 0 && (
                  <div className="mb-10 flex flex-wrap gap-x-14 gap-y-8">
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

                {p.highlight && (
                  <p className="tight-display mb-8 text-[8vw] leading-[0.95] lg:text-[2.8vw]">
                    {p.highlight}
                  </p>
                )}

                <p className="text-2xl leading-[1.25] tracking-tight lg:text-3xl">{p.body}</p>

                {p.flow.length > 0 && (
                  <div className="meta mt-8 flex flex-wrap items-center gap-3">
                    {p.flow.map((f, i) => (
                      <span key={f} className="flex items-center gap-3">
                        <span className="border border-foreground/30 px-2 py-1">{f}</span>
                        {i < p.flow.length - 1 && <span className="opacity-40">→</span>}
                      </span>
                    ))}
                  </div>
                )}

                {p.roles.length > 0 && (
                  <ul className="meta mt-8 grid grid-cols-2 gap-2 text-muted-foreground">
                    {p.roles.map((r) => (
                      <li key={r} className="border-t border-foreground/15 pt-2">
                        {r}
                      </li>
                    ))}
                  </ul>
                )}

                {p.tags.length > 0 && (
                  <div className="meta mt-8 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="bg-lime px-3 py-1.5 text-lime-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {p.note && (
                  <p className="meta mt-8 max-w-xl leading-relaxed text-muted-foreground">
                    {p.note}
                  </p>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="border-t border-foreground/20 pt-4">
        <p className="meta opacity-60">Other Selected Programs</p>
        <p className="meta mt-2 text-muted-foreground">
          {OPEN_INNOVATION.otherPrograms.join(" · ")}
        </p>
      </div>
    </section>
  );
}
