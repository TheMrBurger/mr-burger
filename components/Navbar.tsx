'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-brand.bg/90 backdrop-blur border-b border-white/10">
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image src="/logos/mrburger-logo.svg" alt="Mr. Burger logo" width={40} height={40} />
          <span className="font-bold tracking-wide">MR. BURGER</span>
        </Link>

        <button
          className="md:hidden p-2 rounded border border-white/30"
          aria-label={open ? 'Close main menu' : 'Open main menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span aria-hidden="true">☰</span>
        </button>

        <ul className="hidden md:flex items-center gap-6">
          <li><a href="#menu" className="no-underline">Menu</a></li>
          <li><a href="#locations" className="no-underline">Location</a></li>
          <li><a href="#about" className="no-underline">About</a></li>
          <li><a href="#contact" className="btn btn-primary no-underline" aria-label="Call Mr. Burger to order">Call to order</a></li>
        </ul>
      </nav>

      <div id="mobile-menu" hidden={!open} className="md:hidden border-t border-white/10" role="region" aria-label="Mobile navigation">
        <ul className="px-4 py-3 space-y-3">
          <li><a href="#menu" className="no-underline">Menu</a></li>
          <li><a href="#locations" className="no-underline">Location</a></li>
          <li><a href="#about" className="no-underline">About</a></li>
          <li><a href="#contact" className="btn btn-primary w-full no-underline" aria-label="Call Mr. Burger to order">Call to order</a></li>
        </ul>
      </div>
    </header>
  )
}
