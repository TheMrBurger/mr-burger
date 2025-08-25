// components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-36">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Real burgers. Made fresh. No shortcuts.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Proudly serving San Bernardino — real burgers, made fresh, no shortcuts.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#menu" className="btn btn-primary">View menu</a>
          <a href="#locations" className="btn border border-white/25">Visit us</a>
        </div>
      </div>
    </section>
  )
}