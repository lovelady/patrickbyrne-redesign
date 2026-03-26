import { useEffect, useRef } from "react";
import Container from "../ui/Container";

const highlights = [
  {
    stat: "$1.8B+",
    label: "Overstock Revenue",
    description: "Grew Overstock.com from a $7M investment to over $1.8 billion in annual revenue.",
  },
  {
    stat: "PhD",
    label: "Stanford University",
    description:
      "Dissertation on the intellectual origins of the U.S. Constitution — mathematical logic, moral philosophy, and economics.",
  },
  {
    stat: "22",
    label: "Schools Founded",
    description:
      "Built schools across Africa, India, Asia, and Latin America — educating over 7,000 students worldwide.",
  },
  {
    stat: "1st",
    label: "Bitcoin Retailer",
    description:
      "First major U.S. retailer to accept Bitcoin in January 2014 — over 800 orders on day one.",
  },
];

function AnimatedItem({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-6");
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-all duration-[600ms] ease-out"
    >
      {children}
    </div>
  );
}

export default function HighlightsSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface border-y border-border/20">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {highlights.map((item, i) => (
            <AnimatedItem key={item.label} delay={i * 120}>
              <div
                className={`text-left px-8 py-6 lg:py-0 ${
                  i < highlights.length - 1
                    ? "lg:border-r lg:border-border/25"
                    : ""
                } ${i < 2 ? "sm:border-b sm:border-border/20 lg:border-b-0" : ""}`}
              >
                <span className="block text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-none tracking-tight">
                  {item.stat}
                </span>
                <span className="block mt-4 text-[0.6875rem] font-body font-medium uppercase tracking-[0.2em] text-accent">
                  {item.label}
                </span>
                <p className="mt-3 text-sm text-muted leading-relaxed max-w-[22ch] lg:max-w-none">
                  {item.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </Container>
    </section>
  );
}
