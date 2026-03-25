import { useEffect, useRef } from "react";
import Button from "../ui/Button";

export default function HeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-20 opacity-0 translate-y-8 transition-all duration-[800ms] ease-out"
      >
        <p className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-accent mb-6">
          Official Website
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-foreground leading-[0.95] tracking-tight">
          Who is Patrick?
        </h1>
        <p className="mt-8 text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-body">
          Patrick M. Byrne, founder &amp; former CEO of Overstock.com, is
          committed to the triumph of freedom over tyranny. Towards that end he
          embraces constitutional republicanism, election integrity, clean
          capital markets, and school choice.
        </p>
        <div className="mt-10">
          <Button as="link" to="/about" variant="primary">
            More about Patrick
          </Button>
        </div>
      </div>
    </section>
  );
}
