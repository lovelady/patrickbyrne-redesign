import { useEffect, useRef } from "react";
import Container from "../ui/Container";

function AnimatedBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
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
            el.classList.remove("opacity-0", "translate-y-4");
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
      className={`opacity-0 translate-y-4 transition-all duration-[600ms] ease-out ${className}`}
    >
      {children}
    </div>
  );
}

const credentials = [
  { label: "BA", detail: "Dartmouth College — Asian Studies & Philosophy" },
  { label: "MA", detail: "University of Cambridge — Philosophy (Marshall Scholar)" },
  { label: "PhD", detail: "Stanford University, 1996 — Constitutional intellectual origins" },
];

const affiliations = [
  "Overstock.com (Founder & CEO, 1999–2019)",
  "Medici Ventures (Founder, 2014)",
  "EdChoice / Friedman Foundation (Chairman, 2006)",
  "The America Project (Co-founder, 2021)",
  "Deep Capture (Founder, 2005)",
];

export default function TimelineBio() {
  return (
    <section className="py-16 lg:py-24 bg-background border-t border-border/15">
      <Container>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Left — editorial body */}
          <div className="space-y-8">
            <AnimatedBlock>
              <p className="text-xl text-foreground/80 leading-relaxed font-body">
                Patrick M. Byrne stands out as a prominent figure in the corporate
                business world, renowned for his entrepreneurial spirit and
                innovative leadership. As the founder and former CEO of
                Overstock.com, Byrne&apos;s career has been marked by groundbreaking
                achievements and forward-thinking strategies.
              </p>
            </AnimatedBlock>

            <AnimatedBlock delay={80}>
              <p className="text-base text-muted leading-relaxed font-body">
                Starting in 1999, Byrne transformed a promising retail startup
                into a leading online shopping platform. By 2009 he had led
                Overstock.com to its first full year of profitability, and
                revenue exceeded $1.8 billion by 2016. His tenure was
                characterized by pioneering decisions — including early adoption
                of Bitcoin for transactions and the issuance of digital bonds on
                the Bitcoin blockchain.
              </p>
            </AnimatedBlock>

            <AnimatedBlock delay={160}>
              <blockquote className="my-4 border-l-2 border-accent/30 pl-8 py-2">
                <p className="text-2xl lg:text-3xl font-heading italic text-foreground/70 leading-snug">
                  &ldquo;Committed to the triumph of freedom over tyranny.&rdquo;
                </p>
              </blockquote>
            </AnimatedBlock>

            <AnimatedBlock delay={240}>
              <p className="text-base text-muted leading-relaxed font-body">
                Beyond e-commerce, Byrne founded Medici Ventures to leverage
                blockchain technology for security trading, and took up the
                mantle as chairman of the Friedman Foundation for School Choice
                — actively supporting initiatives that empower students and
                parents in the educational system. His contributions to
                e-commerce, blockchain technology, and education reform remain
                impactful to this day.
              </p>
            </AnimatedBlock>
          </div>

          {/* Right rail — credentials and affiliations */}
          <aside className="lg:border-l lg:border-border/20 lg:pl-12">
            <AnimatedBlock delay={100}>
              <div className="mb-12">
                <h3 className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.2em] text-accent mb-6">
                  Education
                </h3>
                <div className="space-y-5">
                  {credentials.map((cred) => (
                    <div key={cred.label}>
                      <span className="block text-2xl font-heading font-semibold text-foreground leading-none">
                        {cred.label}
                      </span>
                      <span className="block mt-1.5 text-sm text-muted leading-relaxed">
                        {cred.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={200}>
              <div className="border-t border-border/20 pt-10">
                <h3 className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.2em] text-accent mb-4">
                  Affiliations
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  {affiliations.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>
          </aside>
        </div>
      </Container>
    </section>
  );
}
