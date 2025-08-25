// components/Gallery.tsx
import Image from 'next/image'

export default function Gallery() {
  const imgs = ['/images/burgers.jpg','/images/chili-dog.jpg','/images/shakes.jpg']
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Gallery</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {imgs.map((src, i) => (
          <div key={i} className="relative h-44 md:h-56 rounded-xl overflow-hidden">
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}