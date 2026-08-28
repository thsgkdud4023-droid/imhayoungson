import { motion } from "motion/react";

import { EXPERIENCE } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="02" title="EXPERIENCE" />

      <div className="mt-[8vh] border-t border-foreground/20">
        {EXPERIENCE.map((e) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-1 gap-6 border-b border-foreground/20 py-10 transition-colors hover:bg-secondary lg:grid-cols-12"
          >
            <p className="meta lg:col-span-3">{e.period}</p>

            <div className="lg:col-span-5">
              <h3 className="tight-display text-[9vw] leading-[0.9] lg:text-[3vw]">{e.company}</h3>
              <p className="meta mt-3 opacity-70">{e.role}</p>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground lg:text-xl">
                {e.summary}
              </p>
            </div>

            <div className="lg:col-span-4">
              <ul className="meta space-y-2 text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {e.projects && (
                <div className="mt-8">
                  <p className="meta opacity-60">{e.projects.label}</p>
                  <p className="meta mt-2 leading-relaxed text-muted-foreground">
                    {e.projects.items.join(" · ")}
                  </p>
                </div>
              )}

              {e.metrics && (
                <div className="mt-8">
                  <p className="meta opacity-60">{e.metrics.label}</p>
                  <ul className="meta mt-3 grid grid-cols-1 gap-2 text-muted-foreground sm:grid-cols-2">
                    {e.metrics.items.map((m) => (
                      <li key={m} className="border-t border-foreground/15 pt-2">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
