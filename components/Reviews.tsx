// components/Reviews.tsx
export default function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">What people say</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <blockquote className="card">“Burger was hot, fries were crispy. New favorite in SB.”</blockquote>
        <blockquote className="card">“Late night lifesaver. Chili dog combo hits.”</blockquote>
        <blockquote className="card">“No fluff. Just good food made fresh.”</blockquote>
      </div>
    </section>
  )
}