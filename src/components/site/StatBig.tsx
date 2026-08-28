import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

type Props = {
  value: number;
  label: string;
  unit?: string;
  className?: string;
  unitClassName?: string;
  labelClassName?: string;
};

/** Big display number that counts up when it scrolls into view. */
export function StatBig({
  value,
  label,
  unit,
  className = "",
  unitClassName = "",
  labelClassName = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setN(value);
      return;
    }
    const start = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`tight-display tabular-nums leading-[0.85] ${className}`}>{n}</div>
      <div className={`meta mt-2 opacity-70 ${labelClassName}`}>{label}</div>
    </motion.div>
  );
}
