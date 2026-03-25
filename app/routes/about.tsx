import AboutHero from "../components/about/AboutHero";
import AboutContent from "../components/about/AboutContent";

export function meta() {
  return [
    { title: "Bio – Official Patrick M. Byrne Website" },
    {
      name: "description",
      content:
        "Patrick M. Byrne — founder and former CEO of Overstock.com, blockchain pioneer, Stanford PhD, Marshall Scholar, and advocate for educational reform.",
    },
    { property: "og:title", content: "Bio – Official Patrick M. Byrne Website" },
    {
      property: "og:description",
      content:
        "Patrick M. Byrne — founder and former CEO of Overstock.com, blockchain pioneer, Stanford PhD, and advocate for educational reform.",
    },
    { property: "og:type", content: "profile" },
  ];
}

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
}
