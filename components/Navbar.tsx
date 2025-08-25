// components/Navbar.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-brand-bg/90 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logos/mrburger-logo.svg" alt="Mr. Burger" width={40} height={40} />
          <span className="font-bold tracking-wide">MR. BURGER</span>
        </Link>
        <button
          className="md:hidden p-2 rounded border border-white/20"
          aria-label="Toggle menu"
          onClick={() => setOpen(s => !s)}
        >
          ☰
        </button>
        <ul className="hidden md:flex items-center gap-6">
          <li><a href="#menu" className="hover:opacity-90">Menu</a></li>
          <li><a href="#locations" className="hover:opacity-90">Location</a></li>
          <li><a href="#about" className="hover:opacity-90">About</a></li>
          <li><a href="#contact" className="btn btn-primary">Call to order</a></li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <ul className="px-4 py-3 space-y-3">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#locations">Location</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="btn btn-primary w-full">Call to order</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}