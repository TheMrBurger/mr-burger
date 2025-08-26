import Image from 'next/image'

export default function Gallery() {
  const imgs = [
    { src: '/images/burgers.jpg', alt: 'Freshly grilled burger on toasted bun' },
    { src: '/images/chili-dog.jpg', alt: 'Chili dog topped with onions' },
    { src: '/images/shakes.jpg', alt: 'Vanilla, strawberry, and chocolate shakes' }
  ]

  return (
    <section aria-labelledby="gallery-heading" className="mx-auto max-w-7xl px-4 py-16">
      <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold">Gallery</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {imgs.map((img, i) => (
          <figure key={i} className="relative h-44 md:h-56 rounded-xl overflow-hidden">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </figure>
        ))}
      </div>
    </section>
  )
}
