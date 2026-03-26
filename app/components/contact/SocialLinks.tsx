import { useEffect, useRef } from "react";
import Container from "../ui/Container";

const socials = [
  {
    name: "X (Twitter)",
    handle: "@PatrickByrne",
    url: "https://twitter.com/PatrickByrne",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    handle: "@PatrickMByrne",
    url: "https://t.me/s/PatrickMByrne",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "Locals",
    handle: "patrickbyrne.locals.com",
    url: "https://patrickbyrne.locals.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];

function AnimatedSocial({
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

export default function SocialLinks() {
  return (
    <section className="py-16 lg:py-24 bg-surface border-t border-border/15">
      <Container>
        <div className="max-w-2xl space-y-0 divide-y divide-border/20">
          {socials.map((social, i) => (
            <AnimatedSocial key={social.name} delay={i * 100}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 py-6 hover:opacity-80 transition-opacity duration-300"
              >
                <span className="text-muted/60 group-hover:text-accent transition-colors duration-300">
                  {social.icon}
                </span>
                <div>
                  <span className="block text-sm font-body font-medium text-foreground">
                    {social.name}
                  </span>
                  <span className="block text-[0.6875rem] font-body text-muted/50 tracking-wide">
                    {social.handle}
                  </span>
                </div>
                <span className="ml-auto text-muted/30 group-hover:text-muted/60 transition-colors duration-300">
                  &rarr;
                </span>
              </a>
            </AnimatedSocial>
          ))}
        </div>
      </Container>
    </section>
  );
}
