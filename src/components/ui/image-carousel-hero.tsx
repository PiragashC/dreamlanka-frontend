"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  onCtaClick?: () => void
  images: ImageCard[]
  features?: Array<{
    title: string
    description: string
  }>
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  images,
  features = [
    {
      title: "Realistic Results",
      description: "Realistic Results Photos that look professionally crafted",
    },
    {
      title: "Fast Generation",
      description: "Turn ideas into images in seconds.",
    },
    {
      title: "Diverse Styles",
      description: "Choose from a wide range of artistic options.",
    },
  ],
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [rotatingCards, setRotatingCards] = useState<number[]>([])

  // Continuous rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => 
        prev.length > 0 
          ? prev.map((rotation) => (rotation + 0.5) % 360)
          : images.map((_, i) => i * (360 / images.length))
      )
    }, 50)
    return () => clearInterval(interval)
  }, [images.length])

  // Initialize rotating cards
  useEffect(() => {
    if (images.length > 0) {
      setRotatingCards(images.map((_, i) => i * (360 / images.length)))
    }
  }, [images.length])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full h-full flex items-center justify-center pointer-events-auto"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false)
          setMousePosition({ x: 0.5, y: 0.5 })
        }}
      >
        {/* Rotating Image Cards */}
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1000px" }}>
          {images.map((image, index) => {
            const angle = (rotatingCards[index] || 0) * (Math.PI / 180)
            const radius = 180
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            // 3D perspective effect based on mouse position - only apply when hovering
            const perspectiveX = isHovering ? (mousePosition.x - 0.5) * 20 : 0
            const perspectiveY = isHovering ? (mousePosition.y - 0.5) * 20 : 0

            return (
              <div
                key={image.id}
                className="absolute w-32 h-40 sm:w-40 sm:h-48 transition-all duration-300"
                style={{
                  transform: `
                    translate(${x}px, ${y}px)
                    rotateX(${perspectiveY}deg)
                    rotateY(${perspectiveX}deg)
                    rotateZ(${image.rotation}deg)
                  `,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={cn(
                    "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl",
                    "transition-all duration-300 hover:shadow-3xl hover:scale-110 hover:z-50",
                    "cursor-pointer group",
                    "pointer-events-auto"
                  )}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80"
                    }}
                  />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

