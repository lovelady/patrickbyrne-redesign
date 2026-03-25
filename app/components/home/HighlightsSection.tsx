import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";

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
    <Section>
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {highlights.map((item, i) => (
            <AnimatedItem key={item.label} delay={i * 100}>
              <div className="text-center lg:text-left">
                <span className="block text-4xl lg:text-5xl font-heading font-bold text-accent leading-none">
                  {item.stat}
                </span>
                <span className="block mt-2 text-xs font-body font-semibold uppercase tracking-[0.2em] text-foreground">
                  {item.label}
                </span>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </Container>
    </Section>
  );
}
