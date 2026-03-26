import { useEffect, useRef } from "react";

interface TimelineEventProps {
  year: string;
  date: string;
  headline: string;
  body: string;
  tags?: string[];
  source?: { label: string; url: string } | { label: string; url: string }[];
  index: number;
  isFirst: boolean;
  isLast: boolean;
}

export default function TimelineEvent({
  year,
  date,
  headline,
  body,
  tags,
  source,
  index,
  isLast,
}: TimelineEventProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-3");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-[16px_1fr] lg:grid-cols-[48px_auto_1fr] gap-x-4 lg:gap-x-6 opacity-0 translate-y-3 transition-all duration-[600ms] ease-out ${
        isLast ? "pb-2" : "pb-5 lg:pb-6"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Year column — desktop only */}
      <div className="hidden lg:block pt-4">
        <span className="text-sm font-body font-semibold tabular-nums tracking-wide text-accent">
          {year}
        </span>
      </div>

      {/* Node + connector */}
      <div className="relative flex flex-col items-center pt-5">
        <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-accent/70 ring-[3px] ring-accent/15 ring-offset-1 ring-offset-background" />
        {/* Horizontal connector to card */}
        <div className="absolute top-[23px] left-[13px] lg:left-[13px] w-4 lg:w-6 h-px bg-border/30" />
      </div>

      {/* Event card */}
      <div className="pt-3 pb-4 pl-3 lg:pl-4 border-l border-border/10">
        {/* Date — mobile shows year, desktop shows full date */}
        <time
          dateTime={year}
          className="block text-[0.8125rem] font-body font-semibold uppercase tracking-[0.08em] text-accent/90 mb-1.5"
        >
          <span className="lg:hidden">{year} · </span>
          {date}
        </time>

        <h3 className="text-lg lg:text-xl font-heading font-semibold text-foreground leading-snug mb-2">
          {headline}
        </h3>

        <p className="text-[0.9375rem] text-muted leading-relaxed font-body max-w-xl">
          {body}
        </p>

        {source && (() => {
          const sources = Array.isArray(source) ? source : [source];
          return (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
              {sources.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[0.75rem] font-body font-medium tracking-wide text-accent/60 hover:text-accent transition-colors duration-200"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-3 h-3 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.75 3.25h-3.5a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1v-3.5m-5-5L14 1.5m0 0v4m0-4h-4"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {s.label}
                </a>
              ))}
            </div>
          );
        })()}

        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.625rem] font-body font-semibold uppercase tracking-[0.12em] text-muted/70 bg-foreground/[0.04] border border-border/30 rounded-sm px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
