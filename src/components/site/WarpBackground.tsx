import { useEffect, useRef } from "react";

type Props = {
  /** relative streak density, 1 = default */
  density?: number;
  /** draws the concentric tunnel rings from the reference */
  rings?: boolean;
  className?: string;
};

type Streak = { x: number; y: number; z: number; pz: number; hue: number };

const NEON = [
  "199 100% 62%", // cyan
  "215 100% 65%", // blue
  "265 95% 70%", // violet
  "320 95% 72%", // pink
];

/**
 * Hyperspace warp field: streaks accelerate outwards from a vanishing point
 * that drifts with the pointer. Canvas 2D only — no 3D library.
 */
export function WarpBackground({ density = 1, rings = false, className = "" }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;

    const count = Math.round((mobile ? 420 : 1400) * density);
    const streaks: Streak[] = [];
    const squares = Array.from({ length: mobile ? 10 : 22 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.45,
      s: 6 + Math.random() * 10,
      v: 0.02 + Math.random() * 0.05,
    }));

    const reset = (s: Streak, initial = false) => {
      s.x = (Math.random() - 0.5) * 2;
      s.y = (Math.random() - 0.5) * 2;
      s.z = initial ? Math.random() : 1;
      s.pz = s.z;
      s.hue = Math.floor(Math.random() * NEON.length);
    };

    for (let i = 0; i < count; i++) {
      const s: Streak = { x: 0, y: 0, z: 1, pz: 1, hue: 0 };
      reset(s, true);
      streaks.push(s);
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let targetCx = 0.5;
    let targetCy = 0.5;
    let cx = 0.5;
    let cy = 0.5;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetCx = 0.5 + ((e.clientX - rect.left) / rect.width - 0.5) * 0.22;
      targetCy = 0.5 + ((e.clientY - rect.top) / rect.height - 0.5) * 0.22;
    };

    let lastScroll = window.scrollY;
    let boost = 0;
    const onScroll = () => {
      boost = Math.min(2.4, boost + Math.abs(window.scrollY - lastScroll) * 0.012);
      lastScroll = window.scrollY;
    };

    let t = 0;
    const draw = () => {
      t += 0.016;
      cx += (targetCx - cx) * 0.05;
      cy += (targetCy - cy) * 0.05;
      boost *= 0.94;

      const ox = cx * w;
      const oy = cy * h;
      const speed = (0.011 + boost * 0.008) * (reduced ? 0 : 1);
      const focal = Math.max(w, h) * 0.7;

      ctx.fillStyle = "hsl(0 0% 4%)";
      ctx.fillRect(0, 0, w, h);

      ctx.lineCap = "round";
      for (const s of streaks) {
        s.pz = s.z;
        s.z -= speed;
        if (s.z <= 0.02) {
          reset(s);
          continue;
        }
        const k = focal / (s.z * focal);
        const x1 = ox + s.x * k * 130;
        const y1 = oy + s.y * k * 130;
        const k2 = focal / (s.pz * focal);
        const x2 = ox + s.x * k2 * 130;
        const y2 = oy + s.y * k2 * 130;

        if (x1 < -200 || x1 > w + 200 || y1 < -200 || y1 > h + 200) {
          reset(s);
          continue;
        }

        const alpha = Math.min(1, (1 - s.z) * 1.4);
        ctx.strokeStyle = `hsl(${NEON[s.hue]} / ${alpha.toFixed(3)})`;
        ctx.lineWidth = Math.max(0.7, (1 - s.z) * 3.2);
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }

      // lime confetti squares drifting across the top band
      ctx.fillStyle = "hsl(78 95% 55%)";
      for (const q of squares) {
        if (!reduced) {
          q.x += q.v * 0.004;
          if (q.x > 1.05) q.x = -0.05;
        }
        ctx.fillRect(q.x * w, q.y * h + Math.sin(t + q.s) * 4, q.s, q.s);
      }

      if (rings) {
        ctx.strokeStyle = "hsl(70 95% 60% / 0.75)";
        ctx.lineWidth = 1.4;
        for (let i = 1; i <= 6; i++) {
          const p = (i / 6) * (1 + Math.sin(t * 0.4) * 0.04);
          ctx.beginPath();
          ctx.ellipse(ox, oy, w * 0.09 * p * 2.6, h * 0.012 * p * 3.4, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      if (running) raf = requestAnimationFrame(draw);
    };

    draw();
    if (reduced) running = false;

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [density, rings]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
