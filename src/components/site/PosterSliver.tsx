import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import posterIbk from "@/assets/poster-ibk.jpg";
import posterWelstory from "@/assets/poster-welstory.jpg";
import posterZero1ne from "@/assets/poster-zero1ne.jpg";
import posterHigh from "@/assets/poster-high.jpg";

const POSTERS: Record<string, string> = {
  ibk: posterIbk,
  welstory: posterWelstory,
  zero1ne: posterZero1ne,
  high: posterHigh,
};

export function PosterSliver({ id, caption }: { id: string; caption?: string }) {
  const src = POSTERS[id];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  if (!src) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute right-0 top-[7vh] bottom-[7vh] hidden w-[104px] overflow-hidden border-x border-foreground/20 lg:block xl:w-[128px]"
    >
      <motion.img
        src={src}
        alt=""
        style={{ y }}
        className="absolute inset-0 h-[128%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply" />
      {caption && (
        <span className="meta absolute bottom-3 left-1/2 origin-center -translate-x-1/2 rotate-180 text-[10px] tracking-[0.24em] text-background/90 [writing-mode:vertical-rl]">
          {caption}
        </span>
      )}
    </div>
  );
}
