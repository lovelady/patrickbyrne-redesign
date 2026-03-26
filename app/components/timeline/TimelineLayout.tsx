import type { TimelineEvent as TEvent } from "../../data/timeline";
import { eras, getEventsByEra } from "../../data/timeline";
import EraHeader from "./EraHeader";
import TimelineEvent from "./TimelineEvent";

export default function TimelineLayout({ events }: { events: TEvent[] }) {
  return (
    <section className="relative bg-background py-12 lg:py-20">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Center spine line — desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
        {/* Left spine line — mobile */}
        <div className="lg:hidden absolute left-[17px] top-0 bottom-0 w-px bg-border" />

        {eras.map((era) => {
          const eraEvents = getEventsByEra(era.key);
          if (eraEvents.length === 0) return null;

          return (
            <div key={era.key}>
              <EraHeader label={era.label} range={era.range} />
              {eraEvents.map((event, i) => (
                <TimelineEvent
                  key={`${event.year}-${event.headline}`}
                  year={event.year}
                  date={event.date}
                  headline={event.headline}
                  body={event.body}
                  tags={event.tags}
                  index={i}
                  side={i % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
