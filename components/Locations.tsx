export default function Locations() {
  return (
    <section id="locations" aria-labelledby="visit-heading" className="mx-auto max-w-7xl px-4 py-16">
      <h2 id="visit-heading" className="text-3xl md:text-4xl font-bold">Visit Us</h2>

      <article className="card mt-6" aria-label="San Bernardino location">
        <h3 className="text-xl font-semibold">San Bernardino</h3>

        <address className="not-italic mt-1 text-white/90">
          170 E 40th St, San Bernardino, CA 92404
        </address>

        <p className="mt-1 text-white/90">
          Hours: <time dateTime="10:30">10:30 AM</time> – <time dateTime="24:00">Midnight</time> daily
        </p>

        <div className="mt-3 flex flex-wrap gap-3">
          <a
            className="btn btn-outline no-underline"
            href="https://maps.apple.com/?address=170%20E%2040th%20St,%20San%20Bernardino,%20CA%2092404"
            target="_blank" rel="noopener noreferrer"
            aria-label="Get directions to Mr. Burger in San Bernardino"
          >
            Get directions
          </a>

          <a
            className="btn btn-primary no-underline"
            href="tel:+19090000000"
            aria-label="Call Mr. Burger San Bernardino to order for pickup"
          >
            Call to order
          </a>
        </div>
      </article>

      <div className="mt-10 opacity-90" role="note" aria-label="Coming soon">
        <h3 className="font-semibold">Coming Soon</h3>
        <p className="text-white/85 mt-1">Orange County • Los Angeles</p>
      </div>
    </section>
  )
}
