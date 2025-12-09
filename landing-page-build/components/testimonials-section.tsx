import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder at TechStart",
    avatar: "/avatar-1.png",
    content:
      "LaunchFast saved us weeks of development time. We launched our MVP landing page in under an hour and started collecting leads the same day!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Indie Maker",
    avatar: "/professional-man-headshot-friendly.jpg",
    content:
      "As a non-technical founder, I was blown away by how easy it was to create a professional-looking landing page. The templates are gorgeous.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Lead at GrowthCo",
    avatar: "/professional-woman-headshot-confident.jpg",
    content:
      "The A/B testing feature alone is worth the price. We've increased our conversion rate by 40% since switching to LaunchFast.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Loved by founders worldwide</h2>
          <p className="text-muted-foreground text-lg">See what our customers have to say about LaunchFast.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 text-pretty">&ldquo;{testimonial.content}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
