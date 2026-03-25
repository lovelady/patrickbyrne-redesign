import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function PressInquiry() {
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
    <Section>
      <Container narrow>
        <div
          ref={ref}
          className="opacity-0 translate-y-6 transition-all duration-[600ms] ease-out"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Press &amp; Other Inquiries
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            For interview requests and other press inquiries, please complete
            the form below.
          </p>

          <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-body font-semibold uppercase tracking-[0.15em] text-muted mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full max-w-md bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-body font-semibold uppercase tracking-[0.15em] text-muted mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full max-w-md bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-body font-semibold uppercase tracking-[0.15em] text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full max-w-lg bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </div>
            <Button type="submit" variant="primary">
              Submit Now
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
