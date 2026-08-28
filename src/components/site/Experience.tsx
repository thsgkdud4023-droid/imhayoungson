import { motion } from "motion/react";

import { EXPERIENCE } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";
import ynaLogo from "@/assets/yna-logo.png.asset.json";
import markLogo from "@/assets/mark-logo.png.asset.json";

const LOGOS: Record<string, string> = {
  와이앤아처: ynaLogo.url,
  마크앤컴퍼니: markLogo.url,
};

export function Experience() {
  return (
    <section id="experience" className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="01" title="EXPERIENCE" />

      <div className="mt-[8vh] grid grid-cols-1 gap-y-12 lg:grid-cols-11 lg:gap-x-8">
        {EXPERIENCE.items.map((e, i) => (
          <motion.article
            key={e.company}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-foreground/25 pt-5 lg:col-span-5"
          >
            <div className="meta flex items-center justify-between opacity-55">
              <span>{e.period}</span>
              <span>{e.track}</span>
            </div>

            <h3 className="mt-6">
              <img
                src={LOGOS[e.company]}
                alt={e.company}
                className="h-10 w-auto object-contain lg:h-12"
              />
              <span className="sr-only">{e.company}</span>
            </h3>
            <p className="mt-3 text-base font-medium tracking-tight text-foreground lg:text-lg">
              {e.role}
            </p>

            <p className="mt-3 text-lg font-medium leading-[1.45] tracking-tight text-foreground/90 lg:text-xl">
              {e.summary}
            </p>

            <div className="meta mt-6 flex flex-wrap gap-2">
              {e.keywords.map((k) => (
                <span key={k} className="border border-foreground/25 px-2 py-1">
                  {k}
                </span>
              ))}
            </div>
          </motion.article>
        ))}

        {/* arrow between the two experiences */}
        <div
          aria-hidden
          className="hidden items-center justify-center lg:col-span-1 lg:col-start-6 lg:row-start-1 lg:flex"
        >
          <span className="tight-display text-[2.4vw] opacity-40">→</span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-[8vh] max-w-4xl border-t border-foreground/20 pt-6 text-xl leading-[1.45] tracking-tight lg:text-[1.9vw]"
      >
        {EXPERIENCE.transition}
      </motion.p>
    </section>
  );
}
