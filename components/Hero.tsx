// components/Hero.tsx
export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* Background video */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/vid/Flame-on.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Hero text */}
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-36 relative">
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold leading-tight">
          Real burgers. Made fresh. No shortcuts.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/95">
          Proudly serving San Bernardino — Real Burgers, Made Fresh, No Shortcuts.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#menu" className="btn btn-primary no-underline">View menu</a>
          <a href="#locations" className="btn btn-outline no-underline">Visit us</a>
        </div>
      </div>
    </section>
  )
}
