import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";

function AnimatedParagraph({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-4");
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <p
      ref={ref}
      className="opacity-0 translate-y-4 transition-all duration-[600ms] ease-out text-lg text-muted leading-relaxed"
    >
      {children}
    </p>
  );
}

const paragraphs = [
  "Patrick M. Byrne stands out as a prominent figure in the corporate business world, renowned for his entrepreneurial spirit and innovative leadership. As the founder and former CEO of Overstock.com, Byrne's career has been marked by groundbreaking achievements and forward-thinking strategies.",
  "Patrick Byrne's most notable accomplishment is the successful launch and management of Overstock.com. Starting in 1999, Byrne transformed this promising retail startup into a leading online shopping platform. Under his guidance, Overstock.com achieved its first profitable quarter in 2002, marking the beginning of its ascent in the e-commerce industry.",
  "By 2009, Byrne had led Overstock.com to its first full year of profitability. The company's revenue exceeded $1.8 billion by 2016, cementing its status as a major player in the retail sector. Byrne's tenure at Overstock.com was characterized by a series of pioneering decisions, including the early adoption of Bitcoin for transactions and the issuance of digital bonds on the Bitcoin blockchain.",
  "Expanding beyond Overstock.com, Byrne founded Medici Ventures, a subsidiary focusing on leveraging blockchain technology for security trading. This venture further showcased his commitment to innovation and his ability to foresee and capitalize on emerging technologies.",
  "Patrick Byrne's academic journey is as impressive as his business career. He earned a Bachelor of Arts degree in Asian Studies and Philosophy from Dartmouth College, followed by a Master's degree in Philosophy from the University of Cambridge. Byrne completed his education with a PhD from Stanford University in 1996. His diverse academic background reflects his deep intellectual curiosity and understanding of global perspectives.",
  "A dedicated advocate for educational reform, Byrne has played a pivotal role in promoting school choice in the United States. Following the passing of Milton Friedman in 2006, he took up the mantle as chairman of the Friedman Foundation for School Choice (now EdChoice), actively supporting initiatives that empower students and parents in the educational system.",
  "Born into a family that experienced a remarkable journey from modesty to affluence, Patrick Byrne's upbringing was shaped by diverse experiences. His father's association with Warren Buffett and GEICO offered him unique insights into both the struggles and triumphs of achieving the American dream.",
  "Byrne's personal interests extend far beyond the boardroom. His time in China and Thailand during his academic years exposed him to Eastern philosophies and languages, enriching his worldview and cultural understanding. This global awareness has been a consistent theme throughout his life and career.",
  "Even after stepping down from Overstock.com, Byrne's influence continues. His contributions to the fields of e-commerce, blockchain technology, and education reform remain impactful. As a thought leader and innovator, Byrne's life story is a testament to the power of visionary leadership and steadfast commitment to one's values and beliefs.",
  "Patrick Byrne's journey is not just a tale of business success; it is a narrative of intellectual growth, societal contribution, and a relentless pursuit of innovation. His legacy is one that inspires future generations to think differently, act boldly, and make a lasting impact on the world.",
];

export default function AboutContent() {
  return (
    <Section>
      <Container narrow>
        <div className="space-y-6">
          {paragraphs.map((text, i) => (
            <AnimatedParagraph key={i} delay={i * 80}>
              {text}
            </AnimatedParagraph>
          ))}
        </div>
      </Container>
    </Section>
  );
}
