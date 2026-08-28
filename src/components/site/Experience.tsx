import { motion } from "motion/react";

import { EXPERIENCE } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="03" title="EXPERIENCE" />

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
              <p className="meta mt-2 text-muted-foreground">{e.keywords}</p>
            </div>

            <div className="lg:col-span-4">
              {e.aside.label && <p className="meta opacity-60">{e.aside.label}</p>}
              <p className="meta mt-2 leading-relaxed text-muted-foreground">
                {e.aside.items.join(" · ")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
