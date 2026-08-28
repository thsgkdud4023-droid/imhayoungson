import { motion } from "motion/react";

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

export function PosterPanel({ id, caption }: { id: string; caption?: string }) {
  const src = POSTERS[id];
  if (!src) return null;

  return (
    <aside className="mt-10 w-full shrink-0 lg:mt-0 lg:w-[240px] xl:w-[280px]">
      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="lg:sticky lg:top-[16vh]"
      >
        <div className="group relative overflow-hidden border border-foreground/20 bg-secondary">
          <img
            src={src}
            alt={caption ?? "program poster"}
            loading="lazy"
            className="block w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        {caption && (
          <figcaption className="meta mt-2 flex items-center justify-between text-[10px] opacity-55">
            <span>POSTER</span>
            <span className="truncate pl-3">{caption}</span>
          </figcaption>
        )}
      </motion.figure>
    </aside>
  );
}
