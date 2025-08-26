export default function ContactBar() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-brand.dark/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6">
        <h2 id="contact-heading" className="sr-only">Contact and hours</h2>

        <div>
          <h3 className="font-semibold">Order by phone</h3>
          <p className="mt-1 text-white/90">Pickup only. No delivery.</p>
          <a href="tel:+19090000000" className="btn btn-primary mt-3 no-underline" aria-label="Call Mr. Burger to order for pickup">
            Call +1 (909) 000-0000
          </a>
        </div>

        <div>
          <h3 className="font-semibold">Hours</h3>
          <p className="mt-1 text-white/90">
            Daily <time dateTime="10:30">10:30 AM</time> – <time dateTime="24:00">Midnight</time>
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Stay in the loop</h3>
          <p className="mt-1 text-white/90">OC and LA openings coming soon.</p>
          {/* Replace with your email form provider later; keep label for accessibility */}
          <form className="mt-3" aria-label="Notify me when you open">
            <label htmlFor="notify-email" className="block text-sm">Email address</label>
            <div className="mt-1 flex gap-2">
              <input
                id="notify-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md bg-white text-black px-3 py-2"
                aria-describedby="notify-desc"
              />
              <button type="submit" className="btn btn-outline no-underline">Notify me</button>
            </div>
            <p id="notify-desc" className="text-xs text-white/70 mt-1">We’ll only email about new openings.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
