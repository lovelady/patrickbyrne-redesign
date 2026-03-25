import HeroSection from "../components/home/HeroSection";
import HighlightsSection from "../components/home/HighlightsSection";
import BooksSection from "../components/home/BooksSection";
import BioPreviewSection from "../components/home/BioPreviewSection";

export function meta() {
  return [
    { title: "Official Patrick M. Byrne Website" },
    {
      name: "description",
      content:
        "Patrick M. Byrne — founder & former CEO of Overstock.com. Entrepreneur, philosopher, blockchain pioneer, and advocate for election integrity and school choice.",
    },
    { property: "og:title", content: "Official Patrick M. Byrne Website" },
    {
      property: "og:description",
      content:
        "Patrick M. Byrne — founder & former CEO of Overstock.com. Entrepreneur, philosopher, blockchain pioneer.",
    },
    { property: "og:image", content: "/images/hero.webp" },
    { property: "og:type", content: "website" },
  ];
}

export default function Index() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <BooksSection />
      <BioPreviewSection />
    </>
  );
}
