import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
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
    <Section bg="surface">
      <Container narrow>
        <div
          ref={ref}
          className="opacity-0 translate-y-6 transition-all duration-[600ms] ease-out"
        >
          <p className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-accent mb-4">
            The Man Behind the Mission
          </p>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            About Patrick
          </h2>

          <div className="mt-8 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Patrick M. Byrne stands out as a prominent figure in the corporate
              business world, renowned for his entrepreneurial spirit and
              innovative leadership. As the founder and former CEO of
              Overstock.com, Byrne&apos;s career has been marked by groundbreaking
              achievements and forward-thinking strategies.
            </p>
            <p>
              Patrick Byrne&apos;s academic journey is as impressive as his business
              career. He earned a Bachelor of Arts degree in Asian Studies and
              Philosophy from Dartmouth College, followed by a Master&apos;s degree
              in Philosophy from the University of Cambridge. Byrne completed
              his education with a PhD from Stanford University in 1996.
            </p>
            <p>
              Expanding beyond Overstock.com, Byrne founded Medici Ventures, a
              subsidiary focusing on leveraging blockchain technology for
              security trading. This venture further showcased his commitment to
              innovation and his ability to foresee and capitalize on emerging
              technologies.
            </p>
          </div>

          <div className="mt-10">
            <Button as="link" to="/about" variant="secondary">
              Read Full Bio
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
