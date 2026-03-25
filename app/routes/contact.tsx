
export function meta() {
  return [
    { title: "Contact – Official Patrick M. Byrne Website" },
    { name: "description", content: "" },
  ];
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-primary text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold tracking-tight">Socials</h1>
          <div className="mt-6 text-lg lg:text-xl text-background/80 leading-relaxed max-w-2xl mx-auto">
          <p className="mt-3 text-muted leading-relaxed">Stay connected with Patrick M. Byrne! Follow him on social media for the latest updates and insights.</p>
          <p className="mt-3 text-muted leading-relaxed">Stay connected with Patrick M. Byrne! Follow him on social media for the latest updates and insights.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-foreground">Press & Other Inquiries For interview requests and other press inquiries, please complete the form below. Submit Now</h2>
          
        </div>
      </section>
    </>
  );
}
