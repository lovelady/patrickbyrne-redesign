import { useEffect, useRef } from "react";

interface EraHeaderProps {
  label: string;
  range: string;
}

export default function EraHeader({ label, range }: EraHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-6");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative py-16 lg:py-24 opacity-0 translate-y-6 transition-all duration-[800ms] ease-out"
    >
      <div className="text-center">
        <p className="text-sm font-body font-semibold uppercase tracking-[0.25em] text-accent mb-4">
          {range}
        </p>
        <h2 className="text-4xl lg:text-6xl font-heading font-bold text-foreground uppercase tracking-widest leading-tight">
          {label}
        </h2>
        <div className="mt-6 w-16 h-px bg-accent mx-auto" />
      </div>
    </div>
  );
}
