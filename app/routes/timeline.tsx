import type { MetaFunction } from "react-router";
import { events } from "../data/timeline";
import TimelineHero from "../components/timeline/TimelineHero";
import TimelineLayout from "../components/timeline/TimelineLayout";

export const meta: MetaFunction = () => [
  { title: "Timeline — Patrick M. Byrne" },
  {
    name: "description",
    content:
      "A chronological look at the life and career of Patrick M. Byrne — entrepreneur, philosopher, and advocate.",
  },
  { property: "og:title", content: "Timeline — Patrick M. Byrne" },
  {
    property: "og:description",
    content:
      "A chronological look at the life and career of Patrick M. Byrne — entrepreneur, philosopher, and advocate.",
  },
  { property: "og:type", content: "website" },
  { name: "robots", content: "index, follow" },
];

export default function TimelinePage() {
  return (
    <>
      <TimelineHero />
      <TimelineLayout events={events} />
    </>
  );
}
