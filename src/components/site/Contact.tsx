import { motion } from "motion/react";

import { CONTACT } from "@/lib/portfolio-data";
import arrowBlue from "@/assets/obj-arrow-blue.png";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mt-[18vh] flex min-h-[92svh] flex-col overflow-hidden px-4 pb-[8vh] pt-[10vh] lg:px-14"
    >
      {/* single glossy object, slow float behind the type */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 80, rotate: -8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[70vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.img
          src={arrowBlue}
          alt=""
          loading="lazy"
          width={1024}
          height={1024}
          animate={{ y: [0, -24, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="w-full select-none"
        />
      </motion.div>

      <div className="meta relative z-10 flex items-center gap-3">
        <span className="inline-block h-2 w-6 bg-lime" />
        <span>Contact</span>
      </div>

      <h2 className="tight-display relative z-10 my-auto text-center text-[15vw] leading-[0.86] lg:text-[9vw]">
        {CONTACT.lines.map((line, i) => (
          <motion.span
            key={line}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </h2>

      <div className="relative z-10 flex flex-col gap-4 border-t border-current/20 pt-5 lg:flex-row lg:items-baseline lg:justify-between">
        {CONTACT.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="dot-hit group flex items-baseline gap-3"
          >
            <span className="meta opacity-60">{l.label}</span>
            <span
              className="text-lg tracking-tight lg:text-2xl"
              style={{ fontVariationSettings: '"wght" 700, "wdth" 112' }}
            >
              {l.value}{" "}
              <span className="inline-block transition-transform group-hover:-translate-y-0.5">↗</span>
            </span>
          </a>
        ))}
        <span className="meta opacity-50">© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
