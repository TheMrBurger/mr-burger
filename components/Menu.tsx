const combos = [
  { name: 'Double Combo', desc: 'Double patty, fries, medium drink' },
  { name: 'Cheeseburger Combo', desc: 'Cheese, fries, medium drink' },
  { name: 'Hamburger Combo', desc: 'Fries, medium drink' },
  { name: 'Chili Dog Combo', desc: 'Chili dog, fries, medium drink' },
  { name: 'Hot Dog Combo', desc: 'Hot dog, fries, medium drink' }
]
const sides = ['Fries','Chili Cheese Fries']
const shakes = ['Vanilla Shake','Strawberry Shake','Chocolate Shake']

export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="mx-auto max-w-7xl px-4 py-16">
      <h2 id="menu-heading" className="text-3xl md:text-4xl font-bold">Menu</h2>
      <p className="text-neutral-700 mt-1">All combos include fries and a medium drink.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {combos.map(item => (
          <article key={item.name} className="card" aria-label={item.name}>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-neutral-700 mt-1">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <section aria-labelledby="sides-heading" className="card">
          <h3 id="sides-heading" className="text-xl font-semibold">Fries &amp; Sides</h3>
          <ul className="mt-2 space-y-1 list-disc pl-5 text-neutral-800">
            {sides.map(s => (<li key={s}>{s}</li>))}
          </ul>
        </section>
        <section aria-labelledby="shakes-heading" className="card">
          <h3 id="shakes-heading" className="text-xl font-semibold">Shakes</h3>
          <ul className="mt-2 space-y-1 list-disc pl-5 text-neutral-800">
            {shakes.map(s => (<li key={s}>{s}</li>))}
          </ul>
        </section>
      </div>
    </section>
  )
}
