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
          el.classList.remove("opacity-0", "translate-y-4");
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
      className="relative pt-10 pb-6 lg:pt-14 lg:pb-8 opacity-0 translate-y-4 transition-all duration-[600ms] ease-out first:pt-4 first:lg:pt-6"
    >
      <div className="grid grid-cols-[16px_1fr] lg:grid-cols-[48px_auto_1fr] gap-x-4 lg:gap-x-6 items-end">
        {/* Range in year column — desktop */}
        <div className="hidden lg:block">
          <span className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.2em] text-accent/60">
            {range}
          </span>
        </div>

        {/* Decorative node */}
        <div className="flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
        </div>

        {/* Era label */}
        <div>
          <p className="lg:hidden text-[0.625rem] font-body font-medium uppercase tracking-[0.2em] text-accent/60 mb-1.5">
            {range}
          </p>
          <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground leading-tight">
            {label}
          </h2>
          <div className="mt-3 w-10 h-px bg-accent/25" />
        </div>
      </div>
    </div>
  );
}
