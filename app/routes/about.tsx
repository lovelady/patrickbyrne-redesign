import AboutHero from "../components/about/AboutHero";
import AboutContent from "../components/about/AboutContent";
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
      <AboutHero />
      <AboutContent />
    </>
  );
}
