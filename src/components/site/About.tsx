import { motion } from "motion/react";

import { ABOUT } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";

export function About() {
  return (
    <section id="about" className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="04" title="ABOUT" />

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <h2 className="tight-display text-[9vw] leading-[0.95] lg:col-span-6 lg:text-[3.6vw]">
          {ABOUT.headline.map((line, i) => (
            <SplitText key={line} as="div" onScroll text={line} delay={i * 0.06} />
          ))}
        </h2>

        <div className="lg:col-span-5 lg:col-start-8">
          {ABOUT.paragraphs.map((p, i) => (
            <motion.p
              key={p.slice(0, 12)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg leading-relaxed text-foreground/85 first:mt-0"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="mt-[12vh] border-t border-foreground/20 pt-4">
        <p className="meta opacity-60">Education</p>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {ABOUT.education.map((e) => (
            <div key={e.title}>
              <p className="text-lg font-semibold tracking-tight text-foreground">{e.title}</p>
              {e.lines.map((l, li) => (
                <p
                  key={l}
                  className={
                    li === e.lines.length - 1
                      ? "meta mt-2 text-xs text-muted-foreground"
                      : "mt-1 text-sm leading-relaxed text-foreground/80"
                  }
                >
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
