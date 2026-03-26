import type { TimelineEvent as TEvent } from "../../data/timeline";
import { eras, getEventsByEra } from "../../data/timeline";
import EraHeader from "./EraHeader";
import TimelineEvent from "./TimelineEvent";

export default function TimelineLayout({ events }: { events: TEvent[] }) {
  return (
    <section className="relative bg-background pt-4 pb-16 lg:pt-8 lg:pb-24 border-t border-border/15">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        {eras.map((era) => {
          const eraEvents = getEventsByEra(era.key);
          if (eraEvents.length === 0) return null;

          return (
            <div key={era.key} className="mb-8 lg:mb-12">
              <EraHeader label={era.label} range={era.range} />

              <div className="relative">
                {/* Vertical spine — left rail */}
                <div className="absolute left-[3px] lg:left-[59px] top-0 bottom-0 w-px bg-border/30" />

                {eraEvents.map((event, i) => (
                  <TimelineEvent
                    key={`${event.year}-${event.headline}`}
                    year={event.year}
                    date={event.date}
                    headline={event.headline}
                    body={event.body}
                    tags={event.tags}
                    source={event.source}
                    index={i}
                    isFirst={i === 0}
                    isLast={i === eraEvents.length - 1}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
