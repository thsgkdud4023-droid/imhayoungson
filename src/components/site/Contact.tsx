import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { LINKS } from "@/lib/site-data";
import { SplitText } from "./SplitText";
import hello3d from "@/assets/hello-3d.png";
import stickerHearts from "@/assets/sticker-hearts.png";
import stickerHand from "@/assets/sticker-hand.png";
import stickerSquiggle from "@/assets/sticker-squiggle.png";

const STICKERS = [
  { src: stickerSquiggle, className: "left-[8%] top-[12%] w-20 lg:w-28", depth: 30, rotate: -14 },
  { src: stickerHearts, className: "left-[68%] top-[8%] w-20 lg:w-28", depth: 40, rotate: 10 },
  { src: stickerHand, className: "left-[84%] top-[58%] w-16 lg:w-24", depth: 24, rotate: -8 },
  { src: stickerHearts, className: "left-[16%] top-[74%] w-16 lg:w-24 -scale-x-100", depth: 36, rotate: 18 },
];

export function Contact() {
  const stageRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const artY = useSpring(useTransform(scrollYProgress, [0, 1], [120, -120]), {
    stiffness: 120,
    damping: 26,
  });
  const artScale = useTransform(scrollYProgress, [0, 1], [1.08, 0.96]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      id="contact"
      ref={stageRef}
      className="sky-stage relative mt-[24vh] flex min-h-[100svh] flex-col overflow-hidden px-4 pb-[14vh] pt-[16vh] lg:px-14"
    >
      {/* 3D lettering backdrop */}
      <motion.img
        src={hello3d}
        alt=""
        aria-hidden
        loading="lazy"
        style={{ y: artY, scale: artScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 select-none lg:w-[92%]"
      />

      {STICKERS.map((s, i) => (
        <motion.img
          key={`${s.src}-${i}`}
          src={s.src}
          alt=""
          aria-hidden
          loading="lazy"
          initial={{ opacity: 0, scale: 0.6, rotate: s.rotate - 20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: s.rotate }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ x: pointer.x * s.depth, y: pointer.y * s.depth }}
          className={`pointer-events-none absolute select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] ${s.className}`}
        />
      ))}

      <div className="meta relative z-10 mb-10 flex items-center gap-3">
        <span className="inline-block h-2 w-6 bg-lime" />
        <span>Contact</span>
      </div>

      <h2 className="tight-display relative z-10 mt-auto text-[13vw] leading-[0.86] lg:text-[8.6vw]">
        <SplitText as="div" onScroll text="Let's create" />
        <SplitText as="div" onScroll text="something" delay={0.06} />
        <SplitText as="div" onScroll text="extraordinary" delay={0.12} />
      </h2>

      <ul className="relative z-10 mt-[12vh] grid grid-cols-1 border-t border-foreground/20 lg:grid-cols-2">
        {LINKS.map((l, i) => (
          <motion.li
            key={l.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-foreground/20"
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
