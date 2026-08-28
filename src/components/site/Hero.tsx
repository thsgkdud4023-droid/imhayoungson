import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { SplitText } from "./SplitText";
import { useReveal } from "./reveal";
import portrait from "@/assets/portrait.jpg";
import hello3d from "@/assets/hello-3d.png";
import stickerHearts from "@/assets/sticker-hearts.png";
import stickerHand from "@/assets/sticker-hand.png";
import stickerSquiggle from "@/assets/sticker-squiggle.png";

type Sticker = {
  src: string;
  alt: string;
  className: string;
  depth: number;
  rotate: number;
};

const STICKERS: Sticker[] = [
  {
    src: stickerHearts,
    alt: "",
    className: "left-[60%] top-[14%] w-20 lg:w-28",
    depth: 34,
    rotate: -12,
  },
  {
    src: stickerSquiggle,
    alt: "",
    className: "left-[74%] top-[24%] w-24 lg:w-32",
    depth: 22,
    rotate: 8,
  },
  {
    src: stickerHand,
    alt: "",
    className: "left-[26%] top-[72%] w-16 lg:w-24",
    depth: 46,
    rotate: -6,
  },
  {
    src: stickerSquiggle,
    alt: "",
    className: "left-[2%] top-[46%] w-16 lg:w-24 -scale-x-100",
    depth: 30,
    rotate: -20,
  },
  {
    src: stickerHand,
    alt: "",
    className: "left-[86%] top-[66%] w-20 lg:w-28 rotate-180",
    depth: 26,
    rotate: 14,
  },
];

export function Hero() {
  const ready = useReveal();
  const stageRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end start"],
  });
  const helloY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -160]), {
    stiffness: 120,
    damping: 26,
  });
  const helloScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

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
    <>
      <section
        ref={stageRef}
        className="sky-stage relative flex min-h-[100svh] flex-col overflow-hidden px-4 pb-16 pt-[22vh] lg:px-14"
      >
        {/* 3D hello */}
        <motion.img
          src={hello3d}
          alt="3D chrome lettering reading hello"
          width={1920}
          height={768}
          initial={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
          animate={ready ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: helloY, scale: helloScale }}
          className="pointer-events-none absolute left-1/2 top-1/2 w-[130%] max-w-none -translate-x-1/2 -translate-y-[46%] select-none lg:w-[85%]"
        />

        {/* sticker collage */}
        {STICKERS.map((s, i) => (
          <motion.img
            key={`${s.src}-${i}`}
            src={s.src}
            alt={s.alt}
            aria-hidden
            loading="lazy"
            initial={{ opacity: 0, scale: 0.6, rotate: s.rotate - 20 }}
            animate={
              ready ? { opacity: 1, scale: 1, rotate: s.rotate } : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.7 + i * 0.08,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            style={{
              x: pointer.x * s.depth,
              y: pointer.y * s.depth,
            }}
            className={`pointer-events-none absolute select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] ${s.className}`}
          />
        ))}

        {/* HUD-ish top row */}
        <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <h1 className="tight-display col-span-full text-[13vw] leading-[0.88] lg:col-span-4 lg:text-[3.4vw]">
            <SplitText as="div" text="Design &" delay={0.25} />
            <SplitText as="div" text="Engineering" delay={0.33} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="meta lg:col-span-3 lg:col-start-6"
          >
            Thinking in systems.
            <br />
            Designing with care.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="meta max-w-md lg:col-span-4 lg:col-start-9"
          >
            I'm Hayoung, leading design engineering and AI exploration —
            interfaces, systems, and design tools that make teams faster.
          </motion.p>
        </div>

        {/* big statement over the sky */}
        <div className="relative z-10 mt-auto pt-[26vh]">
          <h2 className="tight-display text-[12.5vw] leading-[0.86] lg:text-[8.6vw]">
            <SplitText as="div" text="I bring" delay={0.5} />
            <SplitText as="div" text="craft & taste" delay={0.58} />
            <SplitText as="div" text="to digital work" delay={0.66} />
          </h2>
        </div>
      </section>

      {/* intro block on paper */}
      <section className="relative px-4 pt-[18vh] lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
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
    </>
  );
}
