import { motion } from "motion/react";

import { ABOUT } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";

export function About() {
  return (
    <section id="about" className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="05" title="ABOUT" />

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <h2 className="tight-display text-[10vw] leading-[0.9] lg:col-span-6 lg:text-[4.4vw]">
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
              className="mt-6 text-lg leading-relaxed text-muted-foreground first:mt-0"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="mt-[12vh] grid grid-cols-1 gap-8 border-t border-foreground/20 pt-4 sm:grid-cols-3">
        {ABOUT.education.map((e) => (
          <div key={e.title}>
            <p className="meta">{e.title}</p>
            {e.lines.map((l) => (
              <p key={l} className="meta mt-1 text-muted-foreground">
                {l}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
