"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - You can change bg-muted to bg-accent/10 for colored badge */}
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm font-medium mb-6">
            {/* Badge highlight - Change bg-accent for different highlight color */}
            <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-semibold">New</span>
            <span className="text-muted-foreground">50+ Templates Available</span>
            <a href="#features" className="text-accent font-semibold hover:underline">
              Learn more
            </a>
          </div>

          {/* Headline - Change text-accent to customize the highlighted text color */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Launch Your Dream Product in <span className="text-accent">5 Minutes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Beautiful, converting landing pages without touching a line of code. Join 10,000+ founders who ship faster
            with LaunchFast.
          </p>

          {/* ===========================================
              CTA BUTTONS SECTION
              - Mobile: smaller buttons (px-6 py-4 text-base)
              - Desktop: larger buttons (md:px-8 md:py-6 md:text-lg)
              - Change bg-accent to customize primary CTA button color
              =========================================== */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Primary CTA Button - Change bg-accent to modify button color */}
            <Button
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg px-6 py-4 text-base md:px-8 md:py-6 md:text-lg font-semibold"
            >
              Start Building Free
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            {/* Secondary CTA Button - Change border-accent/hover:bg-accent/10 for different outline style */}
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105 px-6 py-4 text-base md:px-8 md:py-6 md:text-lg bg-transparent"
            >
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Watch 45-sec Demo
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-muted rounded-xl p-2 md:p-4 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/modern-dashboard-interface-with-drag-and-drop-edit.jpg"
                alt="LaunchFast Dashboard"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
