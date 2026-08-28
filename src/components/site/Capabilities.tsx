import { motion } from "motion/react";

import { CAPABILITIES } from "@/lib/portfolio-data";
import { SectionLabel } from "./SectionLabel";

export function Capabilities() {
  return (
    <section className="relative px-4 pt-[22vh] lg:px-14">
      <SectionLabel no="04" title="CAPABILITIES" />

      <div className="mt-[8vh] grid grid-cols-1 gap-12 lg:grid-cols-3">
        {CAPABILITIES.map((c, i) => (
          <motion.div
            key={c.group}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-foreground/20 pt-4"
          >
            <p className="meta">{c.group}</p>
            <ul className="mt-6 space-y-3">
              {c.items.map((item) => (
                <li key={item} className="text-xl tracking-tight lg:text-2xl">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
