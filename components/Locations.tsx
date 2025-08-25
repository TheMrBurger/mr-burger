// components/Locations.tsx
export default function Locations() {
  return (
    <section id="locations" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Visit Us</h2>

      <div className="card mt-6">
        <h3 className="text-xl font-semibold">San Bernardino</h3>
        <p className="mt-1 text-white/80">
          170 E 40th St, San Bernardino, CA 92404
        </p>
        <p className="mt-1 text-white/80">Hours: Daily 10:30 AM – Midnight</p>
        <div className="mt-3 flex gap-3">
          <a className="btn border border-white/20" href="https://maps.apple.com/?address=170%20E%2040th%20St,%20San%20Bernardino,%20CA%2092404" target="_blank">Get directions</a>
          <a className="btn btn-primary" href="tel:+19090000000">Call to order</a>
        </div>
      </div>

      <div className="mt-10 opacity-80">
        <h4 className="font-semibold">Coming Soon</h4>
        <p className="text-white/70 mt-1">Orange County • Los Angeles</p>
      </div>
    </section>
  )
}