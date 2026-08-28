import { motion } from "motion/react";

import { OPEN_INNOVATION } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";
import { StatBig } from "./StatBig";
import { PosterPanel } from "./PosterPanel";

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
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative border-t border-foreground/20 py-[7vh]"
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            <PosterPanel id={p.id} caption={`${p.client} · ${p.program}`} />
            <div className="min-w-0 flex-1 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-lg font-bold tracking-tight text-foreground">{p.client}</p>
                <h3 className="tight-display mt-3 text-[13vw] leading-[0.86] lg:text-[4.8vw]">
                  {p.program}
                </h3>

                {p.recruitment.length > 0 && (
                  <div className="meta mt-4">
                    <span className="opacity-60">모집 분야</span>
                    <span className="ml-2 inline-block bg-secondary px-2 py-1">
                      {p.recruitment.join(" · ")}
                    </span>
                  </div>
                )}

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
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-2xl font-medium leading-[1.3] tracking-tight text-foreground lg:text-3xl">{p.message}</p>

                {"workstreams" in p && p.workstreams && p.workstreams.length > 0 && (
                  <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {p.workstreams.map((ws) => (
                      <div key={ws.title}>
                        <p className="meta text-sm opacity-60">{ws.title}</p>
                        <StatBig
                          value={ws.stat.value}
                          label={ws.stat.label}
                          className="mt-2 text-[14vw] lg:text-[4vw]"
                        />
                        <p className="mt-3 text-base leading-snug text-foreground/80">
                          {ws.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

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
                          {i < (p.funnel?.steps.length ?? 0) - 1 && <span className="opacity-30">→</span>}
                        </span>
                      ))}
                    </div>
                    <p className="meta mt-3 opacity-60">{p.funnel.labels.join(" · ")}</p>
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

                {p.role && (
                  <div className="mt-8">
                    <span className="meta opacity-60">주요 역할</span>
                    <p className="mt-1 text-base font-medium text-foreground">{p.role}</p>
                  </div>
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
              viewport={{ once: true, amount: 0.15 }}
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
