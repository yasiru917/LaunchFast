import { MousePointer2, LayoutTemplate, BarChart3, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: MousePointer2,
    title: "Drag & Drop Editor",
    description: "Intuitive visual editor that lets you build pages by simply dragging and dropping components.",
  },
  {
    icon: LayoutTemplate,
    title: "50+ Beautiful Templates",
    description: "Start with professionally designed templates that convert. Customize everything to match your brand.",
  },
  {
    icon: BarChart3,
    title: "Built-in Analytics & A/B Testing",
    description: "Track conversions, run experiments, and optimize your pages with powerful built-in analytics.",
  },
  {
    icon: Globe,
    title: "Custom Domain + SSL",
    description:
      "Connect your own domain with automatic SSL certificates in just one click. No technical setup required.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Everything you need to launch fast</h2>
          <p className="text-muted-foreground text-lg">
            Powerful features that help you build, launch, and grow your product without any technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
