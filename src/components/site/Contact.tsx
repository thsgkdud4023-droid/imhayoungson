import { motion } from "motion/react";

import { CONTACT } from "@/lib/portfolio-data";
import { WarpBackground } from "./WarpBackground";

export function Contact() {
  return (
    <section
      id="contact"
      className="warp-stage relative mt-[18vh] flex min-h-[55svh] flex-col overflow-hidden px-4 pb-[8vh] pt-[10vh] lg:px-14"
    >
      <WarpBackground rings density={0.9} />

      <div className="meta relative z-10 mb-10 flex items-center gap-3">
        <span className="inline-block h-2 w-6 bg-lime" />
        <span>Contact</span>
      </div>

      <h2 className="tight-display relative z-10 mt-auto text-[12vw] leading-[0.9] lg:text-[6vw]">
        {CONTACT.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <ul className="relative z-10 mt-[6vh] grid grid-cols-1 border-t border-current/25">
        {CONTACT.links.map((l, i) => (
          <motion.li
            key={l.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-current/25"
          >
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="dot-hit flex items-baseline justify-between p-4 lg:p-6"
            >
              <span className="meta opacity-70">{l.label}</span>
              <span
                className="text-lg uppercase tracking-tight lg:text-2xl"
                style={{ fontVariationSettings: '"wght" 700, "wdth" 112' }}
              >
                {l.value} <span className="opacity-60">↗</span>
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
