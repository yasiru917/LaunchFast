"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - you can add your email signup logic here
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    /* ===========================================
       CTA SECTION
       - Change bg-primary to modify section background color
       - Change text-primary-foreground to modify text color
       =========================================== */
    <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to launch your idea today?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Join 10,000+ founders who are building and shipping faster with LaunchFast.
          </p>

          {/* ===========================================
              EMAIL FORM WITH CTA BUTTON
              - Mobile: smaller button (text-sm px-4)
              - Desktop: regular button size
              - Change bg-accent to modify CTA button color
              =========================================== */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50"
              required
            />
            {/* CTA Button - Change bg-accent to modify button color */}
            <Button
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm px-4 md:text-base md:px-6"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/60">No credit card required • Takes less than 60 seconds</p>
        </div>
      </div>
    </section>
  )
}
