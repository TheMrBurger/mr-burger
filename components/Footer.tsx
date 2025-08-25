// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/70">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>© {new Date().getFullYear()} Mr. Burger. All rights reserved.</p>
          <p>170 E 40th St, San Bernardino, CA 92404 • Open 10:30 AM – Midnight</p>
        </div>
      </div>
    </footer>
  )
}