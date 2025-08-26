import Image from 'next/image'

type Food = { name: string; desc?: string; img?: string; alt?: string }

const combos: Food[] = [
  { name: 'Double Combo', desc: 'Double patty, fries, medium drink', img: '/images/burgers.jpg', alt: 'Double cheeseburger combo with fries and drink' },
  { name: 'Cheeseburger Combo', desc: 'Cheese, fries, medium drink', img: '/images/burgers.jpg', alt: 'Cheeseburger combo with fries and drink' },
  { name: 'Hamburger Combo', desc: 'Fries, medium drink', img: '/images/burgers.jpg', alt: 'Hamburger combo with fries and drink' },
  { name: 'Chili Dog Combo', desc: 'Chili dog, fries, medium drink', img: '/images/chili-dog.jpg', alt: 'Chili dog with fries and drink' },
  { name: 'Hot Dog Combo', desc: 'Hot dog, fries, medium drink', img: '/images/chili-dog.jpg', alt: 'Hot dog with fries and drink' }
]

const sides: Food[] = [
  { name: 'Fries' },
  { name: 'Chili Cheese Fries' }
]

const shakes: Food[] = [
  { name: 'Vanilla Shake', img: '/images/shakes.jpg', alt: 'Vanilla milkshake' },
  { name: 'Strawberry Shake', img: '/images/shakes.jpg', alt: 'Strawberry milkshake' },
  { name: 'Chocolate Shake', img: '/images/shakes.jpg', alt: 'Chocolate milkshake' }
]

export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="mx-auto max-w-7xl px-4 py-16">
      <h2 id="menu-heading" className="text-3xl md:text-4xl font-bold">Menu</h2>
      <p className="text-white/90 mt-1">All combos include fries and a medium drink.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {combos.map(item => (
          <article key={item.name} className="card" aria-label={item.name}>
            {item.img && (
              <div className="relative h-44 mb-4 rounded-xl overflow-hidden">
                <Image src={item.img} alt={item.alt ?? item.name} fill className="object-cover" />
              </div>
            )}
            <h3 className="text-xl font-semibold">{item.name}</h3>
            {item.desc && <p className="text-white/80 mt-1">{item.desc}</p>}
          </article>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <section aria-labelledby="sides-heading" className="card">
          <h3 id="sides-heading" className="text-xl font-semibold">Fries &amp; Sides</h3>
          <ul className="mt-2 space-y-1 text-white/90 list-disc pl-5">
            {sides.map(s => (<li key={s.name}>{s.name}</li>))}
          </ul>
        </section>

        <section aria-labelledby="shakes-heading" className="card">
          <h3 id="shakes-heading" className="text-xl font-semibold">Shakes</h3>
          <ul className="mt-2 space-y-3">
            {shakes.map(s => (
              <li key={s.name} className="flex items-center gap-3">
                {s.img && (
                  <span className="relative block h-14 w-14 rounded overflow-hidden" aria-hidden="true">
                    <Image src={s.img} alt="" fill className="object-cover" />
                  </span>
                )}
                <span className="text-white/90">{s.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
