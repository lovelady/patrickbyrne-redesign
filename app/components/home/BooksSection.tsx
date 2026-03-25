import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";

const books = [
  {
    title: "Danger Close",
    subtitle: "Domestic Extremist #1 Comes Clean",
    year: "2024",
    description:
      "Full memoir covering FBI informant years, Maria Butina, the Russia investigation, and the 2020 election.",
    publisher: "Defiance Press",
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

export default function BooksSection() {
  return (
    <Section bg="surface">
      <Container>
        <p className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-accent mb-4">
          Published Works
        </p>
        <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
          Curious about Patrick&apos;s latest adventures?
        </h2>
        <p className="mt-6 text-lg text-muted leading-relaxed max-w-3xl">
          Dive into his world through his books, available now on Amazon.
          It&apos;s a wonderful way to connect with his stories and see what
          he&apos;s been up to! Discover the layers and insights that make his
          writing truly unique, offering a window into his creative journey.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {books.map((book, i) => (
            <AnimatedCard key={book.title} delay={i * 150}>
              <div className="group relative border border-border rounded-xl p-8 lg:p-10 bg-background hover:border-accent/30 transition-all duration-500">
                <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-accent">
                  {book.year} &middot; {book.publisher}
                </span>
                <h3 className="mt-4 text-2xl lg:text-3xl font-heading font-bold text-foreground leading-snug">
                  {book.title}
                </h3>
                <p className="mt-1 text-sm text-muted/70 font-body italic">
                  {book.subtitle}
                </p>
                <p className="mt-4 text-base text-muted leading-relaxed">
                  {book.description}
                </p>
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-xs font-body font-semibold uppercase tracking-[0.15em] text-accent hover:text-foreground transition-colors duration-300"
                >
                  View on Amazon &rarr;
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
