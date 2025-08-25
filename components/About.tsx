// components/About.tsx
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">About</h2>
      <div className="card mt-6">
        <p className="text-lg">
          “We started with one rule: fresh food, made to order, every time.”
        </p>
        <p className="text-white/80 mt-3">
          Proudly serving San Bernardino with real burgers, crisp fries, and thick shakes.
          No microwaves. No shortcuts. Just hot food made when you order it.
        </p>
      </div>
    </section>
  )
}