export default function LogosSection() {
  const logos = [
    { name: "Stripe", initial: "S" },
    { name: "Notion", initial: "N" },
    { name: "Airbnb", initial: "A" },
    { name: "Slack", initial: "S" },
    { name: "Spotify", initial: "S" },
    { name: "Figma", initial: "F" },
  ]

  return (
    <section className="py-12 md:py-16 px-4 border-y border-border bg-muted/30">
      <div className="container mx-auto">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by 10,000+ founders & makers from companies like
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-muted-foreground/20 flex items-center justify-center font-bold text-sm">
                {logo.initial}
              </div>
              <span className="font-semibold text-lg">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
