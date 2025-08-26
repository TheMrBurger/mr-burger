'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-wide text-neutral-900 no-underline">MR. BURGER</Link>
        <button
          className="md:hidden p-2 rounded border border-neutral-300"
          aria-label={open ? 'Close main menu' : 'Open main menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(s => !s)}
        >☰</button>
        <ul className="hidden md:flex items-center gap-6">
          <li><a href="#menu" className="no-underline text-neutral-900">Menu</a></li>
          <li><a href="#locations" className="no-underline text-neutral-900">Location</a></li>
          <li><a href="#about" className="no-underline text-neutral-900">About</a></li>
          <li><a href="#contact" className="btn btn-primary no-underline">Call to order</a></li>
        </ul>
      </nav>
      <div id="mobile-menu" hidden={!open} className="md:hidden border-t border-neutral-200" role="region" aria-label="Mobile navigation">
        <ul className="px-4 py-3 space-y-3">
          <li><a href="#menu" className="no-underline text-neutral-900">Menu</a></li>
          <li><a href="#locations" className="no-underline text-neutral-900">Location</a></li>
          <li><a href="#about" className="no-underline text-neutral-900">About</a></li>
          <li><a href="#contact" className="btn btn-primary w-full no-underline">Call to order</a></li>
        </ul>
      </div>
    </header>
  )
}
