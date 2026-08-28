/** Blueprint rule grid + crosshair markers painted behind the page. */
export function GridLines() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="blueprint-grid absolute inset-0" />
      <div className="absolute inset-0">
        {[0, 1, 2, 3].map((row) =>
          [1, 2, 3].map((col) => (
            <span
              key={`${row}-${col}`}
              className="absolute select-none font-mono text-[10px] leading-none text-foreground/25"
              style={{ left: `${col * 25}%`, top: `${row * 380 + 190}px`, transform: "translate(-50%,-50%)" }}
            >
              +
            </span>
          )),
        )}
      </div>
    </div>
  );
}
