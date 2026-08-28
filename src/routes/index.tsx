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
import { Investment } from "@/components/site/Investment";
import { Bridge } from "@/components/site/Bridge";
import { OpenInnovation } from "@/components/site/OpenInnovation";
import { Experience } from "@/components/site/Experience";
import { Capabilities } from "@/components/site/Capabilities";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";

const TITLE = "Son Hayoung — Investment & Open Innovation Portfolio";
const DESCRIPTION =
  "27 investments executed, 104 startups reviewed, and corporate open innovation programs with Samsung, IBK and Hyundai — the portfolio of Son Hayoung.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
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
        <Investment />
        <Bridge />
        <OpenInnovation />
        <Experience />
        <Capabilities />
        <About />
        <Contact />
      </main>
    </RevealContext.Provider>
  );
}
