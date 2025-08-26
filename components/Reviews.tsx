export default function Reviews() {
  return (
    <section aria-labelledby="reviews-heading" className="mx-auto max-w-7xl px-4 py-16">
      <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold">What people say</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <blockquote className="card" aria-label="Review one">
          <p>“Burger was hot, fries were crispy. New favorite in SB.”</p>
          <footer className="mt-2 text-white/70">— Local customer</footer>
        </blockquote>
        <blockquote className="card" aria-label="Review two">
          <p>“Late night lifesaver. Chili dog combo hits.”</p>
          <footer className="mt-2 text-white/70">— Night shift nurse</footer>
        </blockquote>
        <blockquote className="card" aria-label="Review three">
          <p>“No fluff. Just good food made fresh.”</p>
          <footer className="mt-2 text-white/70">— First-time visitor</footer>
        </blockquote>
      </div>
    </section>
  )
}
