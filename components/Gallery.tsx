export default function Gallery() {
  const imgs = ['burgers.jpg','chili-dog.jpg','shakes.jpg']
  return (
    <section aria-labelledby="gallery-heading" className="mx-auto max-w-7xl px-4 py-16">
      <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold">Gallery</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {imgs.map((src, i) => (
          <figure key={i} className="card h-44 md:h-56 flex items-center justify-center text-neutral-500">
            {/* replace with real images later */}
            <span>{src}</span>
          </figure>
        ))}
      </div>
    </section>
  )
}
