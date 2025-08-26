// components/Hero.tsx
'use client'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showPoster, setShowPoster] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.playsInline = true
    v.play().catch(() => setShowPoster(true))
  }, [])

  return (
    <section className="relative min-h-[60vh] bg-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {!showPoster ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero.jpg"
            onError={() => setShowPoster(true)}
          >
            <source src="/vid/Flame-on.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src="/images/hero.jpg" alt="Mr. Burger grill" fill className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Real burgers. Made fresh. No shortcuts.
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Proudly serving San Bernardino — real burgers, made fresh, no shortcuts.
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <a href="#menu" className="btn btn-primary">View menu</a>
          <a href="#locations" className="btn btn-outline">Visit us</a>
        </div>
      </div>
    </section>
  )
}
