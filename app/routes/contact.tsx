import ContactHero from "../components/contact/ContactHero";
import SocialLinks from "../components/contact/SocialLinks";
import PressInquiry from "../components/contact/PressInquiry";

export function meta() {
  return [
    { title: "Contact – Official Patrick M. Byrne Website" },
    {
      name: "description",
      content:
        "Stay connected with Patrick M. Byrne. Follow on social media or submit press and interview inquiries.",
    },
    {
      property: "og:title",
      content: "Contact – Official Patrick M. Byrne Website",
    },
    {
      property: "og:description",
      content:
        "Stay connected with Patrick M. Byrne. Follow on social media or submit press inquiries.",
    },
    { property: "og:type", content: "website" },
  ];
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
