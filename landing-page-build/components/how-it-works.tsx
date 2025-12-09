import { LayoutTemplate, Paintbrush, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Choose Template",
    description: "Browse our library of 50+ high-converting templates designed for every industry and use case.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Customize in Minutes",
    description: "Use our drag-and-drop editor to personalize colors, fonts, images, and content to match your brand.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Grow",
    description:
      "Hit publish and your page goes live instantly. Track performance and optimize with built-in analytics.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How it works</h2>
          <p className="text-muted-foreground text-lg">Go from idea to live landing page in three simple steps.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
                )}

                <div className="relative bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
