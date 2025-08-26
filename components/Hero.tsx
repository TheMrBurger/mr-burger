// components/Hero.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failedAutoPlay, setFailedAutoPlay] = useState(false)
  const [showVideo, setShowVideo] = useState(true) // if decode error, we’ll swap to image

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFailedAutoPlay(true)
      return
    }

    // Some browsers need a programmatic kick
    const tryPlay = async () => {
      try {
        // Ensure attributes exist before calling play
        v.muted = true
        v.playsInline = true
        await v.play()
      } catch {
        setFailedAutoPlay(true)
      }
    }

    tryPlay()
  }, [])

  const handleManualPlay = async () => {
    const v = videoRef.current
    if (!v) return
    try {
      v.muted = true
      v.playsInline = true
      await v.play()
      setFailedAutoPlay(false)
    } catch {
      // If it still fails, keep the overlay button
    }
  }

  return (
    <section aria-labelledby="hero-heading" className="relative min-h-[60vh]">
      {/* Background media */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {showVideo ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero.jpg"
            onError={() => setShowVideo(false)}
            // prevent accidental tap-pauses on mobile
            style={{ pointerEvents: 'none' }}
          >
            <source src="/vid/Flame-on.mp4" type="video/mp4" />
            {/* Optional second format if you add it later */}
            {/* <source src="/vid/Flame-on.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src="/images/hero.jpg" alt="" fill priority className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Manual play overlay if autoplay was blocked */}
      {failedAutoPlay && showVideo && (
        <div className="absolute inset-0 z-10 grid place-items-center">
          <button
            onClick={handleManualPlay}
            className="btn btn-primary no-underline"
            aria-label="Play background video"
          >
            Play background
          </button>
        </div>
      )}

      {/* Hero text */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36">
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
