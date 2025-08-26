// components/Hero.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [needPlay, setNeedPlay] = useState(false)
  const [fallbackImage, setFallbackImage] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setNeedPlay(true)
      return
    }

    // Ensure attributes before first paint
    v.muted = true
    v.playsInline = true

    const kick = async () => {
      try {
        await v.play()
        setNeedPlay(false)
      } catch {
        setNeedPlay(true)
      }
    }

    // Try on load events too (Chrome sometimes needs it)
    const onLoaded = () => { kick() }
    v.addEventListener('loadeddata', onLoaded)
    kick()

    return () => v.removeEventListener('loadeddata', onLoaded)
  }, [])

  const handleManualPlay = async () => {
    const v = videoRef.current
    if (!v) return
    try {
      v.muted = true
      v.playsInline = true
      await v.play()
      setNeedPlay(false)
    } catch {
      // If it still fails, button stays visible
    }
  }

  return (
    <section aria-labelledby="hero-heading" className="relative min-h-[60vh]">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {!fallbackImage ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero.jpg"
            onError={() => setFallbackImage(true)}
            style={{ pointerEvents: 'none' }}
          >
            {/* MP4 only for now */}
            <source src="/vid/Flame-on.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src="/images/hero.jpg" alt="" fill priority className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {needPlay && !fallbackImage && (
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
