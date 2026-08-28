import { motion } from "motion/react";
import { LINKS } from "@/lib/site-data";
import { SplitText } from "./SplitText";

export function Contact() {
  return (
    <section id="contact" className="relative mt-[30vh] px-4 pb-[22vh] lg:px-14">
      <div className="meta mb-10 flex items-center gap-3 text-muted-foreground">
        <span className="inline-block h-2 w-6 bg-lime" />
        <span>Contact</span>
      </div>

      <h2 className="tight-display text-[13vw] leading-[0.86] lg:text-[9vw]">
        <SplitText as="div" onScroll text="Let's create" />
        <SplitText as="div" onScroll text="something" delay={0.06} />
        <SplitText as="div" onScroll text="extraordinary" delay={0.12} />
      </h2>

      <ul className="mt-[14vh] grid grid-cols-1 border-t border-border lg:grid-cols-2">
        {LINKS.map((l, i) => (
          <motion.li
            key={l.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-border"
          >
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="dot-hit flex items-baseline justify-between p-4 lg:p-6"
            >
              <span className="meta text-muted-foreground">{l.label}</span>
              <span
                className="text-lg uppercase tracking-tight lg:text-2xl"
                style={{ fontVariationSettings: '"wght" 700, "wdth" 112' }}
              >
                {l.value} <span className="text-muted-foreground">↗</span>
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
