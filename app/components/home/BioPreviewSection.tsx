import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function BioPreviewSection() {
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
    <section className="py-24 lg:py-32 bg-surface border-t border-border/15">
      <Container>
        <div
          ref={ref}
          className="opacity-0 translate-y-6 transition-all duration-[600ms] ease-out"
        >
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            {/* Left column — heading and pull quote */}
            <div>
              <p className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.3em] text-accent mb-6">
                Biography
              </p>
              <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight">
                About Patrick
              </h2>
              <div className="mt-4 w-12 h-px bg-accent/30" />

              {/* Pull quote */}
              <blockquote className="mt-10 border-l-2 border-accent/30 pl-6">
                <p className="text-lg font-heading italic text-foreground/70 leading-relaxed">
                  &ldquo;Committed to the triumph of freedom over tyranny.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Right column — editorial body */}
            <div className="space-y-6">
              <p className="text-xl text-foreground/80 leading-relaxed font-body">
                Patrick M. Byrne stands out as a prominent figure in the corporate
                business world, renowned for his entrepreneurial spirit and
                innovative leadership. As the founder and former CEO of
                Overstock.com, Byrne&apos;s career has been marked by groundbreaking
                achievements and forward-thinking strategies.
              </p>
              <p className="text-base text-muted leading-relaxed font-body max-w-2xl">
                His academic credentials — a BA from Dartmouth, an MA from
                Cambridge as a Marshall Scholar, and a PhD from Stanford —
                reflect a deep intellectual curiosity that has shaped his approach
                to business and public life.
              </p>
              <p className="text-base text-muted leading-relaxed font-body max-w-2xl">
                Beyond commerce, Byrne founded Medici Ventures to pioneer
                blockchain technology for capital markets, and has championed
                education reform as chairman of the Friedman Foundation for
                School Choice.
              </p>

              <div className="pt-4">
                <Button as="link" to="/about" variant="secondary">
                  Read Full Biography
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
