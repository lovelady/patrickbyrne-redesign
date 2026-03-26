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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Right portrait — sculptural, soft-fade blend */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[position:80%_20%]"
          style={{ backgroundImage: "url('/images/hero.webp')" }}
        />
        {/* Soft left fade into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/60 to-transparent" />
        {/* Overall darkening for depth */}
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Left-aligned editorial content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div
          ref={ref}
          className="max-w-xl lg:max-w-2xl opacity-0 translate-y-6 transition-all duration-[800ms] ease-out"
        >
          <p className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.3em] text-accent mb-8">
            Official Website
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-heading font-semibold text-foreground leading-[0.92] tracking-tight">
            Patrick M.
            <br />
            Byrne
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-muted leading-relaxed font-body max-w-lg">
            Founder &amp; former CEO of Overstock.com. Entrepreneur, Stanford
            scholar, and advocate for constitutional republicanism, election
            integrity, and school choice.
          </p>
          <div className="mt-10">
            <Button as="link" to="/about" variant="secondary">
              Read Biography
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/20" />
    </section>
  );
}
