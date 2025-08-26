// components/Hero.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    // If user prefers reduced motion, don't autoplay
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    // Some browsers need a programmatic kick
    const tryPlay = async () => {
      try {
        await v.play()
      } catch {
        // Leave silently; poster/fallback will show
      }
    }
    // Ensure muted + inline before play
    v.muted = true
    v.playsInline = true
    tryPlay()
  }, [])

  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* Background media */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {!videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero.jpg" // optional poster; replace with a real still if you have one
            onError={() => setVideoError(true)}
          >
            <source src="/vid/Flame-on.mp4" type="video/mp4" />
            {/* Fallback text for very old browsers */}
            Your browser does not support the video tag.
          </video>
        ) : (
          // Hard fallback if video 404s or fails to decode
          <Image src="/images/hero.jpg" alt="" fill priority className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Hero text */}
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-36 relative">
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold leading-tight">
          Real burgers. Made fresh. No shortcuts.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/95">
          Proudly serving San Bernardino — real burgers, made fresh, no shortcuts.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#menu" className="btn btn-primary no-underline">View menu</a>
          <a href="#locations" className="btn btn-outline no-underline">Visit us</a>
        </div>
      </div>
    </section>
  )
}
