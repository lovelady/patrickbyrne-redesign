import { useEffect, useRef } from "react";
import Container from "../ui/Container";

export default function TimelineHero() {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-background">
      <Container>
        <div
          ref={ref}
          className="opacity-0 translate-y-6 transition-all duration-[800ms] ease-out max-w-4xl"
        >
          <p className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.3em] text-accent mb-8">
            A Life in Full
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-foreground leading-[0.92] tracking-tight">
            Life &amp; Career
          </h1>
          <p className="mt-8 text-xl text-muted leading-relaxed font-body max-w-2xl">
            Entrepreneur, scholar, and advocate. From Fort Wayne to Dubai — the
            story of a life in business, technology, scholarship, and public
            advocacy.
          </p>
          <div className="mt-6 w-16 h-px bg-accent/30" />
        </div>
      </Container>
    </section>
  );
}
