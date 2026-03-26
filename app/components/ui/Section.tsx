interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "background" | "surface" | "elevated" | "primary";
  id?: string;
}

export default function Section({
  children,
  className = "",
  bg = "background",
  id,
}: SectionProps) {
  const bgMap = {
    background: "bg-background",
    surface: "bg-surface",
    elevated: "bg-surface-elevated",
    primary: "bg-primary",
  };

  return (
    <section id={id} className={`py-20 lg:py-28 ${bgMap[bg]} ${className}`}>
      {children}
    </section>
  );
}
