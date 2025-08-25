// components/ContactBar.tsx
export default function ContactBar() {
  return (
    <section id="contact" className="bg-brand-gray/60 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold">Order by phone</h3>
          <p className="mt-1 text-white/80">Pickup only. No delivery.</p>
          <a href="tel:+19090000000" className="btn btn-primary mt-3">Call +1 (909) 000-0000</a>
        </div>
        <div>
          <h3 className="font-semibold">Hours</h3>
          <p className="mt-1 text-white/80">Daily 10:30 AM – Midnight</p>
        </div>
        <div>
          <h3 className="font-semibold">Stay in the loop</h3>
          <p className="mt-1 text-white/80">OC and LA openings coming soon.</p>
          <a href="#" className="btn border border-white/25 mt-3">Get opening updates</a>
        </div>
      </div>
    </section>
  )
}