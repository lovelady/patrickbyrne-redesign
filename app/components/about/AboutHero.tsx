import { useEffect, useRef } from "react";
import Container from "../ui/Container";

export default function AboutHero() {
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
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
      <Container narrow>
        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-[800ms] ease-out"
        >
          <p className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-accent mb-6">
            Biography
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[0.95] tracking-tight">
            About
          </h1>
        </div>
      </Container>
    </section>
  );
}
