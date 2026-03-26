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

const milestones = [
  { year: "1999", event: "Founded Overstock.com" },
  { year: "2006", event: "Chairman, Friedman Foundation for School Choice" },
  { year: "2014", event: "First major retailer to accept Bitcoin" },
  { year: "2014", event: "Founded Medici Ventures (blockchain)" },
  { year: "2019", event: "Resigned as CEO, Overstock.com" },
  { year: "2021", event: "Co-founded The America Project" },
  { year: "2024", event: "Published Danger Close (memoir)" },
];

export default function AboutContent() {
  return (
    <>
      {/* Main editorial content with credentials rail */}
      <section className="py-16 lg:py-24 bg-background">
        <Container>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24">
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
                  Patrick Byrne&apos;s most notable accomplishment is the successful
                  launch and management of Overstock.com. Starting in 1999, Byrne
                  transformed this promising retail startup into a leading online
                  shopping platform. Under his guidance, Overstock.com achieved its
                  first profitable quarter in 2002, marking the beginning of its
                  ascent in the e-commerce industry.
                </p>
              </AnimatedBlock>

              <AnimatedBlock delay={120}>
                <p className="text-base text-muted leading-relaxed font-body">
                  By 2009, Byrne had led Overstock.com to its first full year of
                  profitability. The company&apos;s revenue exceeded $1.8 billion by
                  2016, cementing its status as a major player in the retail sector.
                  Byrne&apos;s tenure at Overstock.com was characterized by a series of
                  pioneering decisions, including the early adoption of Bitcoin for
                  transactions and the issuance of digital bonds on the Bitcoin
                  blockchain.
                </p>
              </AnimatedBlock>

              {/* Pull quote */}
              <AnimatedBlock delay={160}>
                <blockquote className="my-12 border-l-2 border-accent/30 pl-8 py-2">
                  <p className="text-2xl lg:text-3xl font-heading italic text-foreground/70 leading-snug">
                    &ldquo;Committed to the triumph of freedom over tyranny.&rdquo;
                  </p>
                </blockquote>
              </AnimatedBlock>

              <AnimatedBlock delay={200}>
                <p className="text-base text-muted leading-relaxed font-body">
                  Expanding beyond Overstock.com, Byrne founded Medici Ventures, a
                  subsidiary focusing on leveraging blockchain technology for security
                  trading. This venture further showcased his commitment to innovation
                  and his ability to foresee and capitalize on emerging technologies.
                </p>
              </AnimatedBlock>

              <AnimatedBlock delay={240}>
                <p className="text-base text-muted leading-relaxed font-body">
                  A dedicated advocate for educational reform, Byrne has played a
                  pivotal role in promoting school choice in the United States.
                  Following the passing of Milton Friedman in 2006, he took up the
                  mantle as chairman of the Friedman Foundation for School Choice (now
                  EdChoice), actively supporting initiatives that empower students and
                  parents in the educational system.
                </p>
              </AnimatedBlock>

              <AnimatedBlock delay={280}>
                <p className="text-base text-muted leading-relaxed font-body">
                  Born into a family that experienced a remarkable journey from
                  modesty to affluence, Patrick Byrne&apos;s upbringing was shaped by
                  diverse experiences. His father&apos;s association with Warren Buffett
                  and GEICO offered him unique insights into both the struggles and
                  triumphs of achieving the American dream.
                </p>
              </AnimatedBlock>

              <AnimatedBlock delay={320}>
                <p className="text-base text-muted leading-relaxed font-body">
                  Byrne&apos;s personal interests extend far beyond the boardroom. His
                  time in China and Thailand during his academic years exposed him to
                  Eastern philosophies and languages, enriching his worldview and
                  cultural understanding. This global awareness has been a consistent
                  theme throughout his life and career.
                </p>
              </AnimatedBlock>

              <AnimatedBlock delay={360}>
                <p className="text-base text-muted leading-relaxed font-body">
                  Even after stepping down from Overstock.com, Byrne&apos;s influence
                  continues. His contributions to the fields of e-commerce, blockchain
                  technology, and education reform remain impactful. As a thought
                  leader and innovator, Byrne&apos;s life story is a testament to the
                  power of visionary leadership and steadfast commitment to one&apos;s
                  values and beliefs.
                </p>
              </AnimatedBlock>
            </div>

            {/* Right rail — credentials and milestones */}
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
                  <h3 className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.2em] text-accent mb-6">
                    Key Milestones
                  </h3>
                  <div className="space-y-4">
                    {milestones.map((m, i) => (
                      <div key={i} className="flex items-baseline gap-4">
                        <span className="text-sm font-body font-medium text-foreground/50 tabular-nums shrink-0">
                          {m.year}
                        </span>
                        <span className="text-sm text-muted leading-snug">
                          {m.event}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedBlock>

              <AnimatedBlock delay={300}>
                <div className="border-t border-border/20 pt-10 mt-10">
                  <h3 className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.2em] text-accent mb-4">
                    Affiliations
                  </h3>
                  <ul className="space-y-3 text-sm text-muted">
                    <li>Overstock.com (Founder & CEO, 1999–2019)</li>
                    <li>Medici Ventures (Founder, 2014)</li>
                    <li>EdChoice / Friedman Foundation (Chairman, 2006)</li>
                    <li>The America Project (Co-founder, 2021)</li>
                    <li>Deep Capture (Founder, 2005)</li>
                  </ul>
                </div>
              </AnimatedBlock>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
