import { useEffect, useRef } from "react";

export default function TimelineHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-surface/30" />
      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-32 opacity-0 translate-y-8 transition-all duration-[800ms] ease-out"
      >
        <p className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-accent mb-6">
          A Life in Full
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-foreground leading-[0.95] tracking-tight">
          The Life of Patrick M. Byrne
        </h1>
        <p className="mt-8 text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-body">
          From Fort Wayne to Dubai. Builder, philosopher, disruptor.
        </p>
        <div className="mt-10 w-24 h-px bg-accent mx-auto" />
      </div>
    </section>
  );
}
