"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface PromoBannerProps {
  onClose?: () => void
}

export default function PromoBanner({ onClose }: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-accent text-accent-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <span>🎉</span>
        <span>Limited-time: 50% off first year</span>
        <a href="#pricing" className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
          Claim offer
        </a>
        <button
          onClick={handleClose}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
