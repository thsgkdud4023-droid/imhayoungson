import { motion } from "motion/react";
import { useReveal } from "./reveal";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  /** stagger unit: characters for headlines, words for paragraphs */
  by?: "char" | "word";
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  /** animate on scroll into view rather than on preloader completion */
  onScroll?: boolean;
};

export function SplitText({
  text,
  className,
  delay = 0,
  by = "char",
  as = "span",
  onScroll = false,
}: Props) {
  const ready = useReveal();
  const Tag = motion[as];
  const units = by === "char" ? Array.from(text) : text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: by === "char" ? 0.018 : 0.035, delayChildren: delay },
    },
  };
  const item = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const animateProps = onScroll
    ? { whileInView: "show" as const, viewport: { once: true, amount: 0.15 } }
    : { animate: ready ? ("show" as const) : ("hidden" as const) };

  return (
    <Tag className={className} variants={container} initial="hidden" {...animateProps}>
      {units.map((unit, i) => (
        <span key={`${unit}-${i}`} className="inline-flex overflow-hidden align-bottom">
          <motion.span variants={item} className="inline-block">
            {unit === " " ? "\u00A0" : unit}
            {by === "word" && i < units.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
