import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let value = 0;
    const tick = window.setInterval(() => {
      value = Math.min(100, value + 12 + Math.random() * 22);
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(tick);
        window.setTimeout(() => {
          setVisible(false);
          onDone();
        }, 320);
      }
    }, 130);
    return () => window.clearInterval(tick);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-[180px] flex-col gap-3">
            <div className="h-[3px] w-full overflow-hidden bg-muted">
              <div
                className="h-full bg-foreground"
                style={{
                  width: `${progress}%`,
                  transition: "width 520ms cubic-bezier(0.22,1,0.36,1)",
                  willChange: "width",
                }}
              />
            </div>
            <div className="meta flex justify-between text-muted-foreground">
              <span>Loading</span>
              <span>{String(Math.floor(progress)).padStart(3, "0")}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
