import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

import { RevealContext } from "@/components/site/reveal";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Preloader } from "@/components/site/Preloader";
import { Cursor } from "@/components/site/Cursor";
import { GridLines } from "@/components/site/GridLines";
import { Frame } from "@/components/site/Frame";
import { Hero } from "@/components/site/Hero";
import { WorkGrid } from "@/components/site/WorkGrid";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hayoung — Design & Engineering Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hayoung, a digital product designer working across design systems, interface craft and front-end engineering.",
      },
      { property: "og:title", content: "Hayoung — Design & Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Selected work in product design, design systems and design engineering by Hayoung.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.4 });

  return (
    <RevealContext.Provider value={ready}>
      <SmoothScroll />
      <Preloader onDone={onDone} />
      <Cursor />
      <GridLines />
      <Frame />

      {/* scroll progress rail */}
      <div
        aria-hidden
        className="pointer-events-none fixed right-2 top-1/2 z-40 hidden h-40 w-[3px] -translate-y-1/2 bg-border lg:block"
      >
        <motion.div className="w-full origin-top bg-foreground" style={{ scaleY: progress, height: "100%" }} />
      </div>

      <main className="relative z-10">
        <Hero />
        <WorkGrid />
        <Contact />
      </main>
    </RevealContext.Provider>
  );
}
