import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { CONTACT } from "@/lib/portfolio-data";
import arrowBlue from "@/assets/obj-arrow-blue.png";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  const y = useTransform(p, [0, 1], ["22%", "-22%"]);
  const scale = useTransform(p, [0, 0.5, 1], [0.72, 1.06, 1.24]);
  const rotate = useTransform(p, [0, 1], [-14, 8]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative mt-[18vh] flex min-h-[92svh] flex-col overflow-hidden px-4 pb-[8vh] pt-[10vh] lg:px-14"
    >
      {/* scroll-driven glossy object behind the type */}
      <motion.div
        aria-hidden
        style={{ y, scale, rotate }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[70vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <img src={arrowBlue} alt="" loading="lazy" width={1024} height={1024} className="w-full select-none" />
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
            viewport={{ once: true, amount: 0.15 }}
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
