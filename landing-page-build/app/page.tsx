"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import PromoBanner from "@/components/promo-banner"
import HeroSection from "@/components/hero-section"
import LogosSection from "@/components/logos-section"
import FeaturesSection from "@/components/features-section"
import HowItWorks from "@/components/how-it-works"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  return (
    <main className="min-h-screen">
      <PromoBanner onClose={() => setIsBannerVisible(false)} />
      <Navbar isBannerVisible={isBannerVisible} />
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
