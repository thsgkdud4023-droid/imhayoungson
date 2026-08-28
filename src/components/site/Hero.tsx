import { motion } from "motion/react";
import { SplitText } from "./SplitText";
import { useReveal } from "./reveal";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  const ready = useReveal();

  return (
    <section className="relative px-4 pt-[26vh] lg:px-14">
      <div className="meta mb-8 flex items-center gap-3 text-muted-foreground">
        <span className="inline-block h-2 w-6 bg-lime" />
        <SplitText text="Portfolio — Digital product design" by="word" delay={0.1} />
      </div>

      <h1 className="tight-display text-[13vw] leading-[0.86] lg:text-[9.2vw]">
        <SplitText as="div" text="Design &" delay={0.25} />
        <SplitText as="div" text="Engineering" delay={0.35} />
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="meta mt-8 max-w-md text-muted-foreground"
      >
        Thinking in systems. Designing with care.
      </motion.p>

      <div className="mt-[22vh] grid grid-cols-1 gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3"
        >
          <img
            src={portrait}
            alt="Portrait of Hayoung, digital product designer"
            className="w-full max-w-[260px] object-cover grayscale"
            loading="lazy"
          />
          <p className="meta mt-3 text-muted-foreground">Fig. 01 — Hayoung</p>
        </motion.div>

        <div className="lg:col-span-8 lg:col-start-5">
          <SplitText
            as="p"
            onScroll
            by="word"
            text="I explore how craft and taste shape AI-era workflows, building the next generation of digital products."
            className="text-3xl leading-[1.15] tracking-tight lg:text-5xl"
          />
          <SplitText
            as="p"
            onScroll
            by="word"
            delay={0.15}
            text="I'm building Atlas™, and previously worked on cloud drive, collaboration tools, and design systems."
            className="mt-8 text-3xl leading-[1.15] tracking-tight text-muted-foreground lg:text-5xl"
          />
        </div>
      </div>
    </section>
  );
}
