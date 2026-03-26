import { events } from "../data/timeline";
import TimelineHero from "../components/timeline/TimelineHero";
import TimelineLayout from "../components/timeline/TimelineLayout";
import { buildMeta } from "../lib/seo";

export function meta() {
  return buildMeta({
    title: "Timeline — Patrick M. Byrne",
    description:
      "A chronological look at the life and career of Patrick M. Byrne — entrepreneur, philosopher, and advocate.",
    path: "/timeline",
  });
}

export default function TimelinePage() {
  return (
    <>
      <TimelineHero />
      <TimelineLayout events={events} />
    </>
  );
}
