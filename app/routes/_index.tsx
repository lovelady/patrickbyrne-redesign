import HeroSection from "../components/home/HeroSection";
import HighlightsSection from "../components/home/HighlightsSection";
import BooksSection from "../components/home/BooksSection";
import BioPreviewSection from "../components/home/BioPreviewSection";
import { buildMeta } from "../lib/seo";

export function meta() {
  return buildMeta({
    title: "Official Patrick M. Byrne Website",
    description:
      "Patrick M. Byrne — founder & former CEO of Overstock.com. Entrepreneur, philosopher, blockchain pioneer, and advocate for election integrity and school choice.",
    path: "/",
  });
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
