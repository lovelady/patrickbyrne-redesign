import { useEffect, useRef } from "react";

interface TimelineEventProps {
  year: string;
  date: string;
  headline: string;
  body: string;
  tags?: string[];
  index: number;
  side: "left" | "right";
}

export default function TimelineEvent({
  year,
  date,
  headline,
  body,
  tags,
  index,
  side,
}: TimelineEventProps) {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-0 py-8 lg:py-10">
      {/* Content */}
      <div
        ref={ref}
        className={`opacity-0 translate-y-6 transition-all duration-[600ms] ease-out ${
          side === "left"
            ? "lg:col-start-1 lg:text-right lg:pr-12"
            : "lg:col-start-3 lg:text-left lg:pl-12"
        } col-start-1 lg:col-span-1 pl-10 lg:pl-0`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <time
          dateTime={year}
          className="block text-xl font-heading font-bold text-accent mb-1"
        >
          {date}
        </time>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-3 leading-tight">
          {headline}
        </h3>
        <p className="text-lg text-muted leading-relaxed font-body">{body}</p>
        {tags && tags.length > 0 && (
          <div
            className={`mt-4 flex flex-wrap gap-2 ${
              side === "left" ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-accent/60 border border-accent/20 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Spine dot — desktop center */}
      <div className="hidden lg:flex lg:col-start-2 items-start justify-center pt-1">
        <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
      </div>
      {/* Spine dot — mobile left */}
      <div className="absolute left-0 top-10 lg:hidden">
        <div className="w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />
      </div>

      {/* Empty cell for grid alignment */}
      {side === "left" && <div className="hidden lg:block lg:col-start-3" />}
      {side === "right" && <div className="hidden lg:block lg:col-start-1" />}
    </div>
  );
}
