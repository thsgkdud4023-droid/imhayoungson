import { motion } from "motion/react";
import { PROJECTS } from "@/lib/site-data";
import { useIsMobile } from "@/hooks/use-mobile";
import { SplitText } from "./SplitText";

export function WorkGrid() {
  const isMobile = useIsMobile();

  return (
    <section id="work" className="relative mt-[24vh] px-4 lg:px-14">
      <h2 className="tight-display max-w-[16ch] text-[11vw] leading-[0.86] lg:text-[7vw]">
        <SplitText as="div" onScroll text="Selected" />
        <SplitText as="div" onScroll text="work" delay={0.06} />
      </h2>


      <div className="mt-[18vh] grid grid-cols-1 gap-x-6 gap-y-24 lg:grid-cols-12 lg:gap-y-0">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="group lg:mb-20"
            style={
              isMobile
                ? {}
                : {
                    gridColumn: `${p.col[0]} / span ${p.col[1]}`,
                    gridRow: p.row,
                    marginTop: `${p.offset}px`,
                  }
            }
          >

            <a href="#work" className="dot-hit block p-2">
              <div className="relative overflow-hidden bg-secondary">
                {p.tag && (
                  <span className="meta absolute right-0 top-0 z-10 bg-lime px-2 py-1 text-lime-foreground">
                    {p.tag}
                  </span>
                )}
                <motion.img
                  src={p.image}
                  alt={`${p.title} project cover`}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ aspectRatio: p.ratio }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="meta mt-3 flex items-baseline justify-between gap-4">
                <span className="text-foreground">{p.title}</span>
                <span className="flex gap-3 text-muted-foreground">
                  <span>{p.year}</span>
                  {p.kind && (
                    <span>
                      {p.kind} {p.external ? "↗" : ""}
                    </span>
                  )}
                </span>
              </div>
            </a>
            <span className="meta sr-only">Project {String(i + 1).padStart(2, "0")}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
