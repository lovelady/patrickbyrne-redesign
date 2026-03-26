import ContactHero from "../components/contact/ContactHero";
import SocialLinks from "../components/contact/SocialLinks";
import PressInquiry from "../components/contact/PressInquiry";
import { buildMeta } from "../lib/seo";

export function meta() {
  return buildMeta({
    title: "Contact – Official Patrick M. Byrne Website",
    description:
      "Stay connected with Patrick M. Byrne. Follow on social media or submit press and interview inquiries.",
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <SocialLinks />
      <PressInquiry />
    </>
  );
}
