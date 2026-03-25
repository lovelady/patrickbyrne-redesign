
export function meta() {
  return [
    { title: "Official Patrick M. Byrne Website" },
    { name: "description", content: "" },
  ];
}

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-primary text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
            Who is Patrick?
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed">
            Patrick M. Byrne, founder & former CEO of Overstock.com, is committed to the triumph of freedom over tyranny. Towards that end he embraces constitutional republicanism, election integrity, clean capital markets, and school choice.
          </p>
          <a href="#" className="mt-8 inline-block px-8 py-3 rounded-lg bg-accent text-background font-medium hover:opacity-90 transition-opacity">
            More about Patrick
          </a>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">Curious about Patrick’s latest adventures?</h2>
          <div className="mt-4 space-y-4">
          <p className="text-lg text-muted leading-relaxed">Curious about Patrick’s latest adventures? Dive into his world through his books, available now on Amazon. It’s a wonderful way to connect with his stories and see what he’s been up to! Discover the layers and insights that make his writing truly unique, offering a window into his creative journey.</p>
          </div>
        </div>
      </section>
    </>
  );
}
