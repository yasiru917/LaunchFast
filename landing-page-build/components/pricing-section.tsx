"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/* ===========================================
   PRICING PLANS CONFIGURATION
   You can modify plan names, prices, features, and CTA text here
   =========================================== */
const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for getting started",
    features: ["1 landing page", "LaunchFast subdomain", "Basic templates", "Community support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    yearlyPrice: 9.5,
    description: "Best for growing businesses",
    features: [
      "Unlimited landing pages",
      "Custom domain + SSL",
      "All premium templates",
      "A/B testing",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Team",
    monthlyPrice: 49,
    yearlyPrice: 24.5,
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "5 team members",
      "White-label branding",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that&apos;s right for you. All plans include a 14-day free trial.
          </p>
        </div>

        {/* ===========================================
            PRICING TOGGLE
            - Mobile: "Save 50%" appears on new line below toggle
            - Desktop: "Save 50%" appears inline next to toggle
            - Change bg-accent to modify toggle active color
            =========================================== */}
        <div className="flex flex-col items-center justify-center gap-2 mb-12">
          {/* Toggle Row */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium", !isYearly ? "text-foreground" : "text-muted-foreground")}>
              Monthly
            </span>
            {/* Toggle Button - Change bg-accent to modify active toggle color */}
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={cn(
                "relative w-14 h-7 rounded-full transition-colors duration-300",
                isYearly ? "bg-accent" : "bg-muted",
              )}
              aria-label="Toggle yearly pricing"
            >
              <span
                className={cn(
                  "absolute top-1 left-1 w-5 h-5 bg-background rounded-full transition-transform duration-300 shadow-sm",
                  isYearly && "translate-x-7",
                )}
              />
            </button>
            <span className={cn("text-sm font-medium", isYearly ? "text-foreground" : "text-muted-foreground")}>
              Yearly
            </span>
            {isYearly && (
              <span className="hidden md:inline-block bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Save 50%
              </span>
            )}
          </div>
          {isYearly && (
            <span className="md:hidden bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full mt-2">
              Save 50%
            </span>
          )}
        </div>

        {/* ===========================================
            PRICING CARDS
            - Change border-accent to modify popular card border color
            - Change bg-accent on "Most Popular" badge to customize badge color
            =========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                plan.popular ? "border-accent shadow-lg md:scale-105" : "border-border",
              )}
            >
              {/* Popular Badge - Change bg-accent to modify badge color */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {/* Price Display */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="text-muted-foreground">/mo</span>
                  {isYearly && plan.monthlyPrice > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="line-through">${plan.monthlyPrice}/mo</span>
                    </p>
                  )}
                </div>

                {/* Features List - Change text-accent on Check icon for different checkmark color */}
                <ul className="space-y-3 mb-6 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* ===========================================
                    PRICING CTA BUTTONS
                    - Mobile: smaller size with text-sm
                    - Desktop: full width
                    - Change bg-accent to modify button color
                    =========================================== */}
                <Button
                  className={cn(
                    "w-full transition-all duration-300 hover:scale-105 text-sm py-2 md:py-2.5",
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90",
                  )}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
