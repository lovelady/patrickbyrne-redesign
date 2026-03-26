import { useEffect, useRef } from "react";
import Container from "../ui/Container";

const books = [
  {
    title: "Danger Close",
    subtitle: "Domestic Extremist #1 Comes Clean",
    year: "2024",
    description:
      "Full memoir covering FBI informant years, Maria Butina, the Russia investigation, and the 2020 election.",
    publisher: "Defiance Press",
    isbn: "978-1-963102-10-9",
    amazonUrl: "https://www.amazon.com/Danger-Close-Domestic-Extremist-Comes/dp/196310210X/",
  },
  {
    title: "The Deep Rig",
    subtitle:
      "How Election Fraud Cost Donald J. Trump the White House, By a Man Who Did Not Vote for Him",
    year: "2021",
    description:
      "Byrne's firsthand account of the post-election efforts, compiled from his viral blog series.",
    publisher: "Self-published",
    isbn: "978-0-578-86593-5",
    amazonUrl: "https://www.amazon.com/Deep-Rig-Election-Fraud-Donald/dp/B093DWY992/",
  },
];

function AnimatedCard({
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
      className="opacity-0 translate-y-4 transition-all duration-[600ms] ease-out"
    >
      {children}
    </div>
  );
}

export default function BooksSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
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
    <section className="py-24 lg:py-32 bg-background">
      <Container>
        <div
          ref={headingRef}
          className="opacity-0 translate-y-6 transition-all duration-[600ms] ease-out"
        >
          <p className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.3em] text-accent mb-6">
            Published Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight max-w-2xl">
            Selected Bibliography
          </h2>
          <div className="mt-4 w-16 h-px bg-accent/30" />
        </div>

        <div className="mt-16 lg:mt-20 space-y-0 divide-y divide-border/20">
          {books.map((book, i) => (
            <AnimatedCard key={book.title} delay={i * 150}>
              <div className="group grid lg:grid-cols-[1fr_2fr_auto] gap-6 lg:gap-12 py-10 lg:py-12 items-start">
                {/* Left column — year and metadata */}
                <div className="space-y-3">
                  <span className="block text-3xl lg:text-4xl font-heading font-semibold text-foreground/60 leading-none">
                    {book.year}
                  </span>
                  <span className="block text-[0.6875rem] font-body font-medium uppercase tracking-[0.15em] text-muted/60">
                    {book.publisher}
                  </span>
                  <span className="block text-[0.6875rem] font-body tracking-wide text-muted/40">
                    ISBN {book.isbn}
                  </span>
                </div>

                {/* Center column — title and description */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground leading-snug">
                    {book.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted/60 font-body italic leading-relaxed">
                    {book.subtitle}
                  </p>
                  <p className="mt-4 text-base text-muted leading-relaxed max-w-xl">
                    {book.description}
                  </p>
                </div>

                {/* Right column — link */}
                <div className="lg:pt-1">
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.6875rem] font-body font-medium uppercase tracking-[0.15em] text-muted/60 hover:text-accent transition-colors duration-300"
                  >
                    View on Amazon &rarr;
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
