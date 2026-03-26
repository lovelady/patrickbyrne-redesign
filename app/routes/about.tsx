import { events } from "../data/timeline";
import TimelineHero from "../components/timeline/TimelineHero";
import TimelineBio from "../components/timeline/TimelineBio";
import TimelineLayout from "../components/timeline/TimelineLayout";
import { buildMeta } from "../lib/seo";

export function meta() {
  return buildMeta({
    title: "Bio – Official Patrick M. Byrne Website",
    description:
      "Patrick M. Byrne — founder and former CEO of Overstock.com, blockchain pioneer, Stanford PhD, Marshall Scholar, and advocate for educational reform.",
    path: "/about",
    type: "profile",
  });
}

export default function About() {
  return (
    <>
      <TimelineHero />
      <TimelineBio />
      <TimelineLayout events={events} />
    </>
  );
}
