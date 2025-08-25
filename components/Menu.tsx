// components/Menu.tsx
import Image from 'next/image'

const combos = [
  { name: 'Double Combo', desc: 'Double patty, fries, medium drink', img: '/images/burgers.jpg' },
  { name: 'Cheeseburger Combo', desc: 'Cheese, fries, medium drink', img: '/images/burgers.jpg' },
  { name: 'Hamburger Combo', desc: 'Fries, medium drink', img: '/images/burgers.jpg' },
  { name: 'Chili Dog Combo', desc: 'Chili dog, fries, medium drink', img: '/images/chili-dog.jpg' },
  { name: 'Hot Dog Combo', desc: 'Hot dog, fries, medium drink', img: '/images/chili-dog.jpg' }
]

const sides = [
  { name: 'Fries' },
  { name: 'Chili Cheese Fries' }
]

const shakes = [
  { name: 'Vanilla Shake', img: '/images/shakes.jpg' },
  { name: 'Strawberry Shake', img: '/images/shakes.jpg' },
  { name: 'Chocolate Shake', img: '/images/shakes.jpg' }
]

export default function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Menu</h2>
      <p className="text-white/80 mt-1">All combos include fries and a medium drink.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {combos.map(item => (
          <div key={item.name} className="card">
            <div className="relative h-44 mb-4 rounded-xl overflow-hidden">
              <Image src={item.img} alt={item.name} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-white/70 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">Fries & Sides</h3>
          <ul className="mt-2 space-y-1 text-white/80">
            {sides.map(s => (<li key={s.name}>• {s.name}</li>))}
          </ul>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Shakes</h3>
          <ul className="mt-2 space-y-1 text-white/80">
            {shakes.map(s => (<li key={s.name}>• {s.name}</li>))}
          </ul>
        </div>
      </div>
    </section>
  )
}