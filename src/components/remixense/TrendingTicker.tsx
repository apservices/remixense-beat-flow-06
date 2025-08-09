import { useEffect, useRef } from "react";

interface TrendingTickerProps {
  items: string[];
}

export const TrendingTicker = ({ items }: TrendingTickerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let animation: number;
    let offset = 0;
    const step = () => {
      offset -= 0.5; // speed
      el.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) > el.scrollWidth / 2) offset = 0;
      animation = requestAnimationFrame(step);
    };
    animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, []);

  // duplicate content for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden py-3">
      <div className="flex items-center gap-6 text-xs text-muted-foreground">
        <span className="shrink-0 px-2 py-1 rounded bg-background/50 border border-border/40">Trending</span>
        <div className="relative flex-1 overflow-hidden">
          <div className="whitespace-nowrap will-change-transform" ref={containerRef}>
            {doubled.map((t, i) => (
              <span key={i} className="mx-4 story-link">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTicker;
